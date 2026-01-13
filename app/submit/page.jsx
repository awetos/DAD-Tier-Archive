'use client';
import submit from '@/app/actions/submit'

import classes from './form.module.css'

import RadioSet from '@/components/submit/labelradio';
import ImageSubmission from '@/components/submit/imagesubmission';
import BasicDescription from '@/components/submit/basicdescription';
import AdvancedDetails from '@/components/submit/advanceddetails';
import Preview from '@/components/submit/preview';
import readRow from '@/app/actions/readRow'

import { useActionState } from 'react';
import { useState } from 'react';
export default function submitPage(){

    const [formState,formAction] = useActionState(submit,{});
    function changeStatus(event){
        formState.status = "Sending...";
    }

    const [sharedText, changeTextHandler] = useState('');
    function shareTextChanges(someText){
        changeTextHandler(someText);
    }

    const [imageFile, changeImageFileHandler] = useState();
    function shareImageChanges(newImage){
        changeImageFileHandler(newImage);
        console.log("A New image was received.");
    }

    return <>
    <p>Submit tierlists created by you or found on the thread.</p>

    <form className={classes['custom-form']} action={formAction}>
        {/* FormAction will change Status to Sent! when completed. */}
        <div className={classes['form-blocks']}>
            <div className={classes['input-fields']}>
            <BasicDescription/>
            <RadioSet/>
            <ImageSubmission 
            shareTextChangesProp={shareTextChanges}
            shareImageChangesProp={shareImageChanges}/>
            <AdvancedDetails/>
        </div>
        <div className={classes['previewArea-fields']}>
             <Preview 
             sharedTextProp={sharedText}
             sharedImageProp={imageFile}
             />
        </div>



        </div>
       
        {sharedText && <>{sharedText}</>}
        
        {(formState.status == ''|| formState.status == null) && <p></p>}
        {formState.status && <p>{formState.status}</p>}
      
        <button onClick={changeStatus}>Submit</button>
        {/* ChangeStatus immediately changes it to sending... */}

    </form>
    
        <button onClick={readRow}>View Latest</button>
    </>
    
}