import Link from 'next/link';
import { getNetlifyContext } from 'utils';
export const dynamic = "force-dynamic";

import Entry from '@/components/templates/entry';
import classes from './homepage.module.css';
import getTierlists from '@/app/actions/browse/getTierlists';

const ctx = getNetlifyContext();

export default async function Page() {

    const allEntries = await getTierlists();

    return (
        <div> 
            <div className={classes['interior-content']}> 
          <div className={classes['centered-content']}> 
            <p>View past tierlists made for DAD</p>
          </div>
         <div className={classes['image-grid']}> 

          {allEntries.map((entry)=>ReturnEntry(entry))}
            
           
            </div>
        </div>
    
        <Link href="\submit">Submit.</Link>
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
