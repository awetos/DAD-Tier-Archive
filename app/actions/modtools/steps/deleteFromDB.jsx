'use server';
import { neon } from '@netlify/neon';
import addLog from '@/app/actions/modtools/steps/addLog'
import deleteFromCloudinary from '@/app/actions/deleteFromCloudinary';

//assume we only get here once it's a valid ID. 
export default async function deleteFromDB(request_log, rowData, deleteImage){

    const info ={
        delete_info: `Attempting to delete row ${rowData.id}`
    }
    addLog(request_log, "delete_action" ,info);
    //first delete from Cloudinary
    if(deleteImage){
        const cloudinary_results = await 
        deleteFromCloudinary(request_log, rowData.image_url, rowData.thumb_url);
        //assume images were deleted successfully.
        //only case it won't delete is if either image_url or thumb_url was null
        addLog(request_log, "image_manip", cloudinary_results); 
    }
   

    const sql = neon();
    const db_results = await sql`DELETE FROM pending WHERE id = ${rowData.id} RETURNING id`;
    addLog(request_log, "db_manip", db_results[0]);

    return;
    
}