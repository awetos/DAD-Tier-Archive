    
export default function addLog(request_log, step, info){
    //adds new info to the  request_log.
    //uses step as a key
    //not step:key, but steps[step] = info
    
    request_log.steps[step] = {...info,
    timestamp : new Date().toISOString()};
}
