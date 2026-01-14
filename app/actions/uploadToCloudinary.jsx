'use server'

import { v2 as cloudinary } from "cloudinary";
import sharp from "sharp";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function uploadToCloudinary(formData){
    
  const image = formData.get("image");
  if (!image || image.size === 0) {
    return { error: "No image uploaded" };
  }
  
  //create a thumbnail using Sharp.
  const buffer = Buffer.from(await image.arrayBuffer());
  const sharp_resized = await sharp(buffer)
    .resize(200).jpeg({
    quality: 100,
    chromaSubsampling: '4:4:4'
  })
    .toBuffer();
  const sharp_resized_buffer = await Buffer.from(sharp_resized);


  let error = '';
  const uploadResult = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: "pending" },
      (err, result) => {
        if (err) 
          reject(err);
        else 
          resolve(result);
      }
    ).end(buffer);
  });

   const uploadResult_thumbnail = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: "pending" },
      (err, result) => {
        if (err) 
          reject(err);
        else 
          resolve(result);
      }
    ).end(sharp_resized_buffer);
  });
  return { image_url: uploadResult.secure_url,
    image_thumbnail_url: uploadResult_thumbnail.secure_url
  };
}