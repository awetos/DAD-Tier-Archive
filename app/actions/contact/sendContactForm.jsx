'use server'

import { neon } from "@netlify/neon"

export default async function SubmitContactForm(prevState, formData){

    const sql = neon();
    console.log(formData);
    const name = formData?.get('name') ?? "";
    const feedback = formData?.get('feedback') ?? "";
    console.log(`${name} : ${feedback}`);
    const timestamp = getCurrentTimeAsString();
    const res = await sql`INSERT INTO feedback (name, feedback, timestamp) VALUES
    (${name},${feedback},${timestamp})`
    return {status: "Your form has been submitted."}

}


function getCurrentTimeAsString(){
     const today = new Date();
     const formattedToday = today.toISOString();
    return formattedToday;
}