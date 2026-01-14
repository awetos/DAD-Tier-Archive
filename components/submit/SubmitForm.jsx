import { usePreviewerReadValues } from "./PreviewProvider/usePreviewProvider";
import submit from '@/app/actions/submit/submit'

import classes from '@/components/submit/submitform.module.css';

import ImageSubmission from '@/components/submit/imagesubmission';
import BasicDescription from '@/components/submit/basicdescription';
import AdvancedDetails from '@/components/submit/advanceddetails';
import Preview from '@/components/submit/Preview/Preview';


import { useActionState } from 'react';

export default function SubmitForm(){
    const [formState,formAction] = useActionState(submit,{});
    const previewContext = usePreviewerReadValues();
    function wipePreview(event){
        //console.log(e);
        formState.status = "is submitting...";
        event.preventDefault();
        previewContext.handlers.resetPreview();
    }

    return <>
    <form action={wipePreview}>
        {/* FormAction will change Status to Sent! when completed. */}
        <div className={classes['form-blocks']}>
            <div className={classes['input-fields']}>
            <BasicDescription/>
            <ImageSubmission/>
            <AdvancedDetails/>
        </div>
        <div className={classes['previewArea-fields']}>
            <Preview/>
        </div>



        </div>
        
        {(formState.status == ''|| formState.status == null) && <p></p>}
        {formState.status && <p>{formState.status}</p>}
    
        <button type="submit">Submit</button>
        {/* ChangeStatus immediately changes it to sending... */}

    </form>
    </>
}