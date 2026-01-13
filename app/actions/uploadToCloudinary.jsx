'use server'

import { v2 as cloudinary } from "cloudinary";

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
  const buffer = Buffer.from(await image.arrayBuffer());
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
  return { image_url: uploadResult.secure_url};
}