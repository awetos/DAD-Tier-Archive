'use client';
import classes from '@/components/submit/submitform.module.css';

import { useEffect, useRef } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { usePreviewerReadValues } from './PreviewProvider/usePreviewProvider';
import submit from '@/app/actions/submit/submit';

import ImageSubmission from '@/components/submit/imagesubmission';
import BasicDescription from '@/components/submit/basicdescription';
import AdvancedDetails from '@/components/submit/advanceddetails';
import Preview from '@/components/submit/Preview/Preview';

//disables button
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

//unused, since it stacks ontop of formState status
function SubmittingText() {
  const { pending } = useFormStatus();
  return pending ? <p>is submitting...</p> : null;
}


export default function SubmitForm() {
  const [formState, formAction] = useActionState(submit, {});
  const previewContext = usePreviewerReadValues();
 
  //console.log(form);
  
const myForm = useRef(null);
 
  //this one will reset preview on different submissions, allowing multi-submits
  useEffect(() => {
  if (formState?.status === 'Your image and data was uploaded.') {
    previewContext.handlers.resetPreview();
    myForm.current?.reset();
  }
}, [formState?.success_image_url]);



  return (
    <form ref={myForm} action={formAction}>
      
       {/* FormAction will change Status to Sent! when completed. */}
        <div className={classes['form-blocks']}>
            <div className={classes['input-fields']}>
            <BasicDescription/>
            <ImageSubmission/>
            <AdvancedDetails/>
            </div>
            <div className={classes['previewArea-fields']}><Preview/></div>
        </div>

      

      {/* Maybe in the future we can tackle removing this message when we go back to the input fields */}
      {formState?.status && <p>{formState.status}</p>}
      

      <SubmitButton />
    </form>
  );
}
