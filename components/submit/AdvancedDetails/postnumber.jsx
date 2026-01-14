
import classes from '@/components/submit/dropdown.module.css'
import { useState, useEffect } from 'react';
import { usePreviewerReadValues } from '../PreviewProvider/usePreviewProvider';
export default function PostNumber(){

    const previewContext = usePreviewerReadValues();
    const previousPostNumber = previewContext.values.postNumber;

    const [draft, setDraft] = useState(previousPostNumber);
    useEffect(() => {
        setDraft(previousPostNumber);
        }, [previousPostNumber]);
    const [postStatus, setPostStatus] = useState("");

    function onBlurHandler(event){
        setPostStatus(validatePostNumber(event.target.value));
    }

    function onValueHandler(event){
        setDraft(event.target.value);
    }
    
    function validatePostNumber(postNumber){
        let isnum = /^\d+$/.test(postNumber);
        if(isnum){
            if(postNumber.length !== 7){
                previewContext.handlers.changePostNumberHandler("");
                return "Post number must be 7 digits long";
            }
            else{
                previewContext.handlers.changePostNumberHandler(postNumber);
                //valid input
                return ""
            }
        }
        else{
            previewContext.handlers.changePostNumberHandler("");
            return "Post number must be number"
        }
    }
   
    return <>
    <label htmlFor="post-number">Post Number</label>
        <div className={classes['subtitle']}>Give a post number for people to search for in other archives.</div>
        <input type="text" 
            onBlur={onBlurHandler}
            name="post-number" 
            id="post-number"
            value={draft}
            onChange={onValueHandler}></input>
        <div className={classes['subtitle-error']}> <p>{postStatus}</p></div>
       
        </>
}
