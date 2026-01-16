'use client'
import SubmitContactForm from "@/app/actions/contact/sendContactForm";

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import classes from '@/app/contact/contact.module.css'

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
    <button type="submit" disabled={pending}>
        {pending ? 'Submitting...' : 'Submit'}
    </button>
    );
}

export default function ContactPage(){
   
    const [formState, formAction] = useActionState(SubmitContactForm, {});
    

    return   <>
    <p>Need something changed or removed?</p>
    <form action={formAction}>
        <label htmlFor="name">name or email (optional)</label>
          <br/>
        <input type="text" id="name" name="name"></input>
        <br/>
    <label htmlFor="feedback">Send Feedback</label>
        <br/> <textarea rows={3}
         className={classes['text-area']}
         name="feedback" 
         id="feedback"
         required
        />
        <br/>
       


          <SubmitButton/>
           {formState?.status && <p>{formState.status}</p>}
        </form> 
       
        
    </>
}
