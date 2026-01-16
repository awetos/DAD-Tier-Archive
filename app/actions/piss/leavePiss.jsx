'use server'
import { neon } from "@netlify/neon"
import { headers } from "next/headers";

export default async function leavePiss(prevState, formData){
    const sql = neon();
    console.log(headers());

    return { status : "You peed here!"}

}