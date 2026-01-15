'use server';
import { neon } from '@netlify/neon';

export default async function uploadModLog(request_log){
    const mod_log = {
        steps: request_log.steps,
        status : JSON.stringify(request_log.status),
        error : request_log.error,
        action : request_log.action,
        timestamp : new Date().toISOString()
    };

    const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
    
    const res = await sql`INSERT INTO mod_logs 
    (steps, status, error, action, timestamp) VALUES (
    ${mod_log.steps},  ${mod_log.status}, ${mod_log.error}, ${mod_log.action},
    ${mod_log.timestamp}) 
    RETURNING *`;

    

}