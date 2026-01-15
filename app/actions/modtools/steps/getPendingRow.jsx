'use server';
import { neon } from '@netlify/neon';
import addLog from '@/app/actions/modtools/steps/addLog'

export default async function getPendingRow(request_log, id){

    const info ={
        row_info: ""
    }

    const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
    const res = await sql`SELECT * FROM pending WHERE id = ${id};`;
    if(res.length > 0){
        request_log.status=`${id} was found in pending.`;
        info.row_info = res;
        addLog(request_log,"row_check",info);
        //returns an array, really an array with length 1. 
        return res;
    }
    else{
        //request_log.error and request_log["error"] are the same
        //but bracket notations allow invalid Javascript name types
        request_log.error= `${id} does not exist`
        info.row_info = `${id} does not exist`;
        addLog(request_log,"row_check",info);
        return null;
    }
}
