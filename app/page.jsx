import Link from 'next/link';
import { getNetlifyContext } from 'utils';
export const dynamic = "force-dynamic";

import readRow from './actions/readRow';

import Entry from '@/components/templates/entry';
import classes from './homepage.module.css';
import getAllEntries from './actions/getAllEntries';

const ctx = getNetlifyContext();

export default async function Page() {
    const entry1 = await readRow(0);
    const entry2 = await readRow(1);
    const entry3 = await readRow(2);

    const allEntries = await getAllEntries();
    console.log(allEntries);

    return (
        <div> 
            <div className={classes['interior-content']}> 
        <p>Guess who just made...</p>
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
