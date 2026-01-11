'use client';
import submit from '@/app/actions/submit'
import testBeanConnection from '@/app/actions/get_coffee_beans'

import RadioSet from './labelradio';
import { useActionState } from 'react';
export default function submitPage(){

    const [formState,formAction] = useActionState(submit,{});
    function changeStatus(event){
        formState.status = "Sending...";
    }

    return <>
    <p>I am a submit page.</p>

    <form action={formAction}>
        {/* FormAction will change Status to Sent! when completed. */}
        
            <label htmlFor="my-text-input">
                My Text Input
            </label>
            <input type="text" name="my-text-input" id="my-text-input">
            </input>

           <RadioSet/>

            
        
        {formState.status === '' && <p>Nothing uploaded</p>}
        {formState.status === 'Sending...' && <p>Sending info...</p>}
        {formState.status === 'Sent!' && <p>Sent!</p>}
      
        <button onClick={changeStatus}>Submit</button>
        {/* ChangeStatus immediately changes it to sending... */}

    </form>

    <button onClick={testBeanConnection}>Connect to Neon!</button>
    </>
    
}