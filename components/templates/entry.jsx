//Contains on item of a tierlist. 
import classes from '@/components/templates/entry.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function Entry({data}){
   
    return <>
        <div className={classes['entry']}>  {formatPretty(data)} </div>
    </>
}
//make sure that the sizes matches the entry.module.css in the future if you want to change it
function formatPretty(data){
    return <>
    <Link href={`/tierlist/${data.id}`}>
    <div className={classes['image-preview']}>
         <Image src={data.thumb_url}
      alt={'latest image uploaded.'}
                  sizes="(max-width: 200px)" fill/>
    </div>
    <div className={classes['title-area']}><span>{data.title}</span></div>
   
    </Link>
    </>
}