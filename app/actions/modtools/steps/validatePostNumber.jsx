import addLog from '@/app/actions/modtools/steps/addLog'

//assume that id is never 0
export default function getIDAsNumber(request_log,formData){
    const id = formData?.get("post_id") ?? (formData.get("post_id") ?? "");

    //this is just an object, only {status: "" } is stored
    //id_step_results is not a key anywhere
    const id_step_results = {
        status: ""
    }


    if(id){
        const numeric_id = parseInt(id);
        if(numeric_id){
            //processValue.
            id_step_results.status ="Valid number, proceed with processing.";
            addLog(request_log, "id_check", id_step_results);
            return numeric_id
        }
        else{
            id_step_results.status ="Not a number";
            addLog(request_log, "id_check", id_step_results);
            return 0;
        }
    }
    else{
        id_step_results.status ="invalid form parameter"; 
        addLog(request_log, "id_check", id_step_results);
        return 0;
    }
    
}