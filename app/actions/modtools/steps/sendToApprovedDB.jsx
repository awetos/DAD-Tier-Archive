'use server';
import { neon } from '@netlify/neon';
import addLog from '@/app/actions/modtools/steps/addLog'

export default async function sendToApprovedDB(request_log, rowData){
    const info ={
        approval_info: `Approved row where pending id = ${rowData.id}`
    }
    const db_results = await SubmitToApproved(rowData);
    addLog(request_log, "db_manip", db_results[0]);

    addLog(request_log, "approve_action" ,info);

}



async function SubmitToApproved(rowData){
    const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL

    //if the title is empty, name it Untitled.
    const title = rowData.title || "Untitled";
    const tier_type = rowData.tier_type ?? "";
    const image_url = rowData.image_url ?? "";
    const thumb_url = rowData.thumb_url ?? "";
    
    const description = rowData.description ?? "";
    const post_number = rowData.post_number ?? "";
    const date = rowData.created_date ?? getDateAsString();

    const submission_time =  rowData.submission_time ?? getCurrentTimeAsString();
    //no status or reason

    const res = await sql`INSERT INTO tierlists 
    (title, tier_type, image_url, description, post_number, created_date,
    submission_time, thumb_url) VALUES (
    ${title},  ${tier_type}, ${image_url}, ${description},
    ${post_number}, ${date}, ${submission_time}, ${thumb_url}) 
    RETURNING *`;

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