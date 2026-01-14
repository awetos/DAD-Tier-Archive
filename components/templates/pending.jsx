import classes from '@/components/templates/pending.module.css'

//Contains a pending entry.
export default function Pending({data}){
   
    return <>
    <div className={classes['entry']}>
        <div className={classes['entry-id']}><p>{data.id}</p></div>
        <div className={classes['entry-title']}><p>{data.title}</p></div>
        <div className={classes['entry-type']}><p>{data.tier_type}</p></div>
        <div className={classes['entry-created']}><p>{formatDate(data.created_date)}</p></div>
        <div className={classes['entry-submitted']}><p>{data.submission_time}</p></div>
        <div className={classes['entry-status']}><p>{data.status}</p></div>
    </div>
    </>
}
function formatDate(sqlDate) {
  if (!sqlDate) return '';
  return new Date(sqlDate).toLocaleDateString();
}