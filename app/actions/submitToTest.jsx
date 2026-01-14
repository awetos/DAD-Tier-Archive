'use server';
import { neon } from '@netlify/neon';
import uploadToCloudinary from '@/app/actions/uploadToCloudinary';

export default async function submit(prevState, formData){ //add prevState due to using formState.

    const img_res = await uploadToCloudinary(formData);
    if (formData.get('tier-title') == null || formData.get('tier-title') == ""){
        return {status: "Title can't be empty"}
    }

    
    if (img_res.error!=null){
        const error_msg = 'Error uploading: ' + img_res.error;
        console.log(error_msg);
        return { status: error_msg };
    }
    else{
        if(img_res.image_url){
            const image_url = "Your new image is at " + img_res.image_url;
            formData.append("image_url",  img_res.image_url);

            await SubmitText(formData);
            return { status: 'Your stuff was uploaded.' };
        }
        else{
            return { status: 'Error: Something went wrong with uploading your image.' };
        }
    }
}

async function SubmitText(formData){
    const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
    const text_input = formData.get('tier-title');
    const tier_type = formData.get('tier-type');
    const image_url = formData.get('image_url');


    const res = await sql`INSERT INTO test (my_text, my_image_path) VALUES (
    ${text_input},  ${image_url})`

    console.log(res);
}

