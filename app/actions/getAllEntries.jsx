'use server'

import { neon } from '@netlify/neon';
//id
//my_text
//my_image_path
export default async function getAllEntries(){
   
    const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
    const res = await sql`SELECT * FROM test ORDER BY id DESC;`;
    //returns an array organized by latest.
    if(res.length > 0){
        return res;
    }
    else{
        return null;
    }

}