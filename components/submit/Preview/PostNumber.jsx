import { usePreviewerReadValues } from "../PreviewProvider/usePreviewProvider";
import classes from './preview.module.css'

export default function PostNumber(){
    const currentPostNumber = usePreviewerReadValues().values.postNumber;
    let renderPostNumber = <></>;
    if(currentPostNumber){
        renderPostNumber = <p>Post No.  {currentPostNumber}</p>;
    }
    else{
        renderPostNumber = <></>;
    }

    return <>
    <div className={classes['post-number-area']}>
        {renderPostNumber}
    </div>
       
    </>

}
