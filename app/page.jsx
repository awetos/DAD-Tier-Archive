import Link from 'next/link';
import { getNetlifyContext } from 'utils';

import readRow from './actions/readRow';

import Entry from '@/components/templates/entry';
import classes from './homepage.module.css';

const ctx = getNetlifyContext();

export default async function Page() {
    const entry1 = await readRow(0);
    const entry2 = await readRow(1);
    const entry3 = await readRow(2);

    return (
        <div> 
            <div className={classes['interior-content']}> 
        <p>Guess who just made...</p>
         <div className={classes['image-grid']}> 
            <Entry data={entry1}/>
            <Entry data={entry2}/>
            <Entry data={entry3}/>
             <Entry data={entry1}/>
            <Entry data={entry2}/>
            <Entry data={entry3}/>
              <Entry data={entry1}/>
            <Entry data={entry2}/>
            <Entry data={entry3}/>
              <Entry data={entry1}/>
            <Entry data={entry2}/>
            <Entry data={entry3}/>
              <Entry data={entry1}/>
            <Entry data={entry2}/>
            <Entry data={entry3}/>
              <Entry data={entry1}/>
            <Entry data={entry2}/>
            <Entry data={entry3}/>
           
            </div>
        </div>
    
        <Link href="\submit">Submit.</Link>
        </div>
    );
}
