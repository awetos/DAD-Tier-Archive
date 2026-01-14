'use server';
import { neon } from '@netlify/neon';
import uploadToCloudinary from '@/app/actions/uploadToCloudinary';

export default async function submit(prevState, formData){ //add prevState due to using formState.
     if (formData.get('tier-title') == null || formData.get('tier-title') == ""){
        return {status: "Title can't be empty"} //don't reset image url if it's this kind of error
    }
    //returns the thumbnail.
    const img_res = await uploadToCloudinary(formData);
   
    if (img_res.error!=null){
        const error_msg = 'Error uploading: ' + img_res.error;
        console.log(error_msg);
        return { status: error_msg, success_image_url: "" };
    }
    else{
        if(img_res.image_url){
            const image_url = "Your new image is at " + img_res.image_url;
            formData.append("image_url",  img_res.image_url);
            formData.append("thumb_url", img_res.image_thumbnail_url)

            await SubmitText(formData);
            return { status: 'Your image and data was uploaded.', success_image_url: img_res.image_url };
            
        }
        else{
            return { status: 'Error: Something went wrong with uploading your image.', success_image_url: "" };
        }
    }
}

async function SubmitText(formData){
    const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL

    //if the title is empty, name it Untitled.
    const title = formData.get('tier-title') || "Untitled";
    const tier_type = formData.get('tier-type') ?? "";
    const image_url = formData.get('image_url') ?? "";
    const thumb_url = formData.get('thumb_url') ?? "";
    
    const description = formData.get('description') ?? "";
    const post_number = formData.get('post-number') ?? "";
    const date = formData.get('date') ?? getDateAsString();

    const submission_time = getCurrentTimeAsString();
    const status = "unread";
    const reason = ""; //when the reason it's rejected will be updated.

    const res = await sql`INSERT INTO pending 
    (title, tier_type, image_url, description, post_number, created_date,
    submission_time, status, reason, thumb_url) VALUES (
    ${title},  ${tier_type}, ${image_url}, ${description},
    ${post_number}, ${date}, ${submission_time}, ${status}, ${reason}, ${thumb_url}) RETURNING *`

    console.log(res);
    return res;
}

function getDateAsString(){
     // Get today's date
    const today = new Date();
    
    // Format the date to 'YYYY-MM-DD' for the input value
    // toISOString() returns 'YYYY-MM-DDTHH:mm:ss.sssZ', so we slice it
    const formattedToday = today.toISOString().split('T')[0];
    return formattedToday;
}

function getCurrentTimeAsString(){
     const today = new Date();
     const formattedToday = today.toISOString();
    return formattedToday;
}