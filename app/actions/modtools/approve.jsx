'use server';
import getIDAsNumber from '@/app/actions/modtools/steps/validatePostNumber'
import getPendingRow from '@/app/actions/modtools/steps/getPendingRow'
import sendToApprovedDB from '@/app/actions/modtools/steps/sendToApprovedDB';
import deleteFromDB from '@/app/actions/modtools/steps/deleteFromDB';
import uploadModLog from '@/app/actions/modtools/uploadModLog';

//assume you receive a formData with formData.get("id") == id
export default async function approve(prevState, formData){
    const request_log = {
        steps: {},
        status : "",
        error : "",
        action : ""
    };
    const numeric = getIDAsNumber(request_log, formData);
    if (numeric == 0){
        request_log.error = "Invalid input, cannot proceed with processing";
    }
    else{

        const row = await getPendingRow(request_log, numeric);
       
        if(row == null || row == undefined){
            request_log.error = "Row was not found.";
        }
        else if(row.length > 0) //valid post
        {
            const rowData = row[0];
            //there are database and cloudinary calls, so you must await.
            await checkDesiredAction(request_log, formData, rowData);
            request_log.status = "Your request was processed successfully.";
        }
    }
    console.log(request_log);
    await uploadModLog(request_log);
    return {request_log};
}

//assume by here you have a valid ID
async function checkDesiredAction(request_log, formData, rowData){

    const choice = formData.get("post-action");
    if(choice === "check"){
        request_log.status = "You wanted to check this post."; //do nothing else.
    }
    else{
        if(choice === "approve"){
            request_log.status = "You wanted to approve this post";
            await sendToApprovedDB(request_log, rowData, false);
        }
        else{
            if(choice === "delete"){
                request_log.status="You wanted to delete this post";
                await deleteFromDB(request_log, rowData, true);
            }else{
                if(choice == "approve-and-delete"){
                    await sendToApprovedDB(request_log, rowData);
                    await deleteFromDB(request_log, rowData, false);
                    request_log.status="Move and delete successful.";
                }
                else{
                    request_log.status="Undefined selection. No changes were made."};
            }
        }
    }
}