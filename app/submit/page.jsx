'use client';
import classes from "./form.module.css";

import { PreviewerProvider } from '@/components/submit/PreviewProvider/usePreviewProvider';
//import SubmitForm from '@/components/submit/SubmitForm';
import SubmitForm from "@/components/submit/SubmitButton";
export default function submitPage(){

   
    return <>
        <p>Submit tierlists created by you or found on the thread.</p>
        <PreviewerProvider>
            <SubmitForm/>
        </PreviewerProvider>
    
    </>
    
}