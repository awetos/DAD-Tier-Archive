'use server';
import { neon } from '@netlify/neon';
//assume you receive a formData with formData.get("id") == id
export default function approve(prevState, formData){

    //does the formData exist? if so, get the value, if not return empty string.
    const id = formData?.get("id") ?? (formData.get("id") ?? "");
    console.log(typeof id);
    if(id){
        const numeric_id = id;
         console.log(typeof inumeric_idd);
        //process the value
    }
    else{
        return {status: "no id exists"}
    }
   
}