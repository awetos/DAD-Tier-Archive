//given the thumb url and the image url, delete the images.

'use server'

import { v2 as cloudinary } from "cloudinary"
import addLog from '@/app/actions/modtools/steps/addLog'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function deleteFromCloudinary(request_log, image_url, thumb_url){
    console.log("Delete from cloudinary was called.")
    if(!image_url || !thumb_url ){
        request_log.error = "invalid image paths";
        return;
    }
    const pp_image = getPublicPath(image_url);
    const pp_thumb = getPublicPath(thumb_url);

    const image_delete_result = await new Promise((resolve, reject) => {
        cloudinary.uploader.destroy( pp_image, (err, result) => {
                if (err)
                    {reject(err);} 
                else 
                    resolve(result);}
                )
            }
        )

    console.log(image_delete_result);
    const thumb_delete_result = await new Promise((resolve, reject) => {
        cloudinary.uploader.destroy( pp_thumb, (err, result) => {
                if (err)
                    {reject(err);} 
                else 
                    resolve(result);}
                )
            }
        )
    console.log(thumb_delete_result);
    
    const cloudinary_messages={
        image_delete_result : image_delete_result.result,
        thumb_delete_result : thumb_delete_result.result
    };
    console.log(cloudinary_messages);


    return cloudinary_messages;
}

//gets the folder and path at the end of a cloudinary url
//pending/bvsvn4wbjljn0fwfzqyv.png
//assumes that the path is valid since it is added through the forms.
function getPublicPath(url){
    const stringElements = url.split("/");
    //get the last two elements
    const length =  stringElements.length;
    const folder = stringElements[length-2];
    const filename = stringElements[length-1].split(".")[0];
    return `${folder}/${filename}`
}