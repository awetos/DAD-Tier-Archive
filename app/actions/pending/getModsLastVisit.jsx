import { neon } from '@netlify/neon';

export default async function getModsLastVisit(){
    const sql = neon();
    const latest_log = await sql`SELECT * FROM mod_logs ORDER BY timestamp DESC;`;
    //SELECT * FROM tierlists ORDER BY submission_time DESC;
    const localTime = new Date(latest_log[0].timestamp).toLocaleString();
    return localTime;
}