
import classes from '@/components/submit/dropdown.module.css'
import {useState, useEffect} from 'react'
import { usePreviewerReadValues } from '../PreviewProvider/usePreviewProvider';

export default function Details(){
    const previewContext = usePreviewerReadValues();
    const previousDescription = previewContext.values.description;

    const [draft, setDraft] = useState(previousDescription);
    //we can use a useEffect for draft if Details loses its info due to re-rendering in the midst of editing
    // but for now, it seems fine
    useEffect(() => {
        setDraft(previousDescription);
        }, [previousDescription]);

    function HandleOnBlur(event){
        previewContext.handlers.changeDescriptionHandler(event.target.value);
    }
     function HandleValueChange(event){
        setDraft(event.target.value);
    }

    return <>
        <label htmlFor="description">Description</label>
        <br/> <textarea rows={3}
         className={classes['text-area']}
         onBlur={HandleOnBlur}
         onChange={HandleValueChange}
         value={draft}
         name="description" 
         id="description"
        />
   
    </>
}