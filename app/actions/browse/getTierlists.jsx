'use server';
import { neon } from '@netlify/neon';


const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
export default async function getTierlists(){
    const res = await sql`SELECT * FROM tierlists;`;
    if(res){
        //returns an array, really an array with length 1. 
        return res;
    }
    else{
        return null;
    }
}
