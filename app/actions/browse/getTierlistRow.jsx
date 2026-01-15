'use server';
import { neon } from '@netlify/neon';


const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
export default async function getRowData(index){
    const res = await sql`SELECT * FROM tierlists where id = ${index}`;
    //assume its a valid array since it is called by a link to the image
    return res[0];
}
