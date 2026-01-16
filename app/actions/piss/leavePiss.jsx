'use server'
import { neon } from "@netlify/neon"
export default async function leavePiss(prevState, formData){
    const sql = neon();

    return { status : "You peed here!"}

}