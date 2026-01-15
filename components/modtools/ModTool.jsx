'use client'
import approve from '@/app/actions/modtools/approve'
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import classes from '@/app/modtool/modtool.module.css'
import ActionOptionsRadioSet from '@/components/modtools/ActionOptionsRadioSet';

export default function ModTool(){
    const [formState, formAction] = useActionState(approve, {});

    function SubmitButton() {
      const { pending } = useFormStatus();
      return (
        <button type="submit" disabled={pending}>
          {pending ? 'Submitting...' : 'Submit'}
        </button>
      );
    }
    
    function onSubmitHandler(event){
        event.preventDefault();
        console.log("You clicked the submit key!");
    }
    return <>
    <p></p>
    <div className={classes["approve-id"]}>
        <div className={classes["row"]}>
            <form action={formAction}>
                <label htmlFor="post_id">Check Post number</label>
                <br/>
                <input type="text" id="post_id" name="post_id"></input>
                
                <p>In case something goes wrong, 
                approve and delete do not happen on the same step.</p>
                <ActionOptionsRadioSet/>
                <br/>
                <SubmitButton/>
            </form>
        </div>
    <div className={classes["row"]}>
        
    </div>
    {displayServerLogs(formState)}

    </div>
 
    
    </>

}

function displayServerLogs(formState){
    //When the formState is first initialized, steps is {}
    // and when we try to render it we get an error
    //so we should guard against any of these being empty.
    console.log(formState?.request_log?.steps?.id_check?.status);
    return <div className={classes["status-stack"]}>
        <p>Result of id_check: {formState.request_log?.steps?.id_check?.status}</p>
        <p>Result of row_check: {
           JSON.stringify(formState.request_log?.steps?.row_check?.row_info)
            
            }</p>
{/* if delete_action or approve_action exists, we assume info has been constructed*/}
        <p>{formState.request_log?.steps?.delete_action?.delete_info}</p>
        <p>{formState.request_log?.steps?.approve_action?.approval_info}</p>
        <p>{formState.request_log?.error}</p>
        <p>{formState.request_log?.status}</p>
    </div>
    
}