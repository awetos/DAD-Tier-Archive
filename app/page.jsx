import Link from 'next/link';
import { getNetlifyContext } from 'utils';
export const dynamic = "force-dynamic";

import Entry from '@/components/templates/entry';
import classes from './homepage.module.css';
import getTierlists from '@/app/actions/browse/getTierlists';

const ctx = getNetlifyContext();

export default async function Page() {
  //assume never empty. otherwise, see Pending for how to fix.
  

    const allEntries = await getTierlists();
      let renderable = <></>
      let no_entries = <></>
      if(!allEntries || allEntries.length === 0 ){
        renderable = <></>
        no_entries = <p>No entries submitted.</p>
      }
      else{
        renderable = allEntries.map((entry)=>ReturnEntry(entry))
      }
      
    return (
        <div> 
            <div className={classes['interior-content']}> 
          <div className={classes['centered-content']}> 
            <p>View past tierlists made for DAD</p>
            {no_entries}
          </div>
         <div className={classes['image-grid']}> 

          {renderable}
            
           
            </div>
        </div>
    
        </div>
    );
}

function ReturnEntry(data){
  if((data.id &&  data.image_url)
  ){
    return <Entry key={data.id} data={data}/>
  }
  return <div key={data.id}></div>
}
