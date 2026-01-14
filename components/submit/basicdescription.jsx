import classes from "./basicdescription.module.css"
import RadioSet from "./labelradio";

import { usePreviewerReadValues } from "./PreviewProvider/usePreviewProvider";
import {useState, useEffect} from "react"
export default function BasicDescription(){

    const previewContext = usePreviewerReadValues();
    const prevTitle = previewContext.values.title;
    const [draft, setDraft] = useState(prevTitle);
    //we can use a useEffect for draft if title loses its info due invalid form submission. 
    useEffect(() => {
        setDraft(prevTitle);
        }, [prevTitle]);


    function HandleOnBlur(event){
        console.log('oops, we lost focus');
        previewContext.handlers.changeTitleHandler(event.target.value);
    }
    function HandleValueChange(event){
        setDraft(event.target.value);
    }
    return <>
      <label htmlFor="tier-title">Tier Title  <span className={classes['subtitle']}>Do not include "Tierlist" in the title</span></label>
            <br/>
        <input 
            type="text" 
            name="tier-title" 
            id="tier-title"
            onBlur={HandleOnBlur}
            value={draft}
            onChange={HandleValueChange}>
        </input>
        <RadioSet/>
    
    </>;
}