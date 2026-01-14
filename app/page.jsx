import Link from 'next/link';
import { getNetlifyContext } from 'utils';
export const dynamic = "force-dynamic";

import Entry from '@/components/templates/entry';
import classes from './homepage.module.css';
import getAllEntries from './actions/getAllEntries';

const ctx = getNetlifyContext();

export default async function Page() {

    const allEntries = await getAllEntries();
    console.log(allEntries);

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
  if((data.my_image_path &&  data.my_text)
  ){
    return <Entry key={data.id} data={data}/>
  }
  return <div key={data.id}></div>
}
