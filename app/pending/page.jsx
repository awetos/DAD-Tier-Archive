export const dynamic = "force-dynamic";
import getAllEntries from '@/app/actions/pending/getPendingList'
import Pending from '@/components/templates/pending';
import classes from '@/components/templates/pending.module.css'

export default async function pendingPage(){

    const allEntries = await getAllEntries();
    console.log(allEntries);
    

    return <>
    
    <p>Submissions will be reviewed and once accepted will appear in the browse page.</p>
    <p>Mod last seen: Today.</p>
    <div className={classes['pending-list']} >
         <div className={`${classes['entry']} ${classes['label-headers']}`}>

              <div className={classes['entry-id']}><p>Id</p></div>
              <div className={classes['entry-title']}><p>Title</p></div>
              <div className={classes['entry-type']}><p>Tier Type</p></div>
              <div className={classes['entry-created']}><p>Created On</p></div>
              <div className={classes['entry-submitted']}><p>Submission Time</p></div>
              <div className={classes['entry-status']}><p>Status</p></div>
          </div>
        {allEntries.map((entry)=>ReturnPendingEntry(entry))}
    </div>
         
    </>
}


function ReturnPendingEntry(data){
  if((data.id)
  ){
    return <Pending key={data.id} data={data}/>
  }
  return< div key={Math.random()}></div>
}
