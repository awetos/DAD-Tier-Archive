//Contains on item of a tierlist. 
import classes from '@/components/templates/entry.module.css'
import Image from 'next/image';
import Link from 'next/link';
export default function Entry({data}){
   
    return <>
        <div className={classes['entry']}>  {formatPretty(data)} </div>
    </>
}

function formatPretty(data){
    console.log("format pretty was called.");
    console.log(data);
    const msg = "formatPretty received data from Entry and I'll attempt to render it! " + data.my_image_path;
    console.log(msg);
    return <>
    <Link href={`/tierlist/${data.id}`}>
    <div className={classes['image-preview']}>
         <Image src={data.my_image_path}
      alt={'latest image uploaded.'}
                   fill/>
    </div>
    <div className={classes['title-area']}><span>{data.my_text}</span></div>
   
                 </Link>
    </>
}