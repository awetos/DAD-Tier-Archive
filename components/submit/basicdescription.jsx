import classes from "./basicdescription.module.css"
import RadioSet from "./labelradio";

import { usePreviewerReadValues } from "./PreviewProvider/usePreviewProvider";

export default function BasicDescription(){

    const previewContext = usePreviewerReadValues();
    function HandleOnBlur(event){
        console.log('oops, we lost focus');
        previewContext.handlers.changeTitleHandler(event.target.value);
    }
    return <>
      <label htmlFor="tier-title">Tier Title  <span className={classes['subtitle']}>Do not include "Tierlist" in the title</span></label>
            <br/>
        <input 
            type="text" 
            name="tier-title" 
            id="tier-title"
            onBlur={HandleOnBlur}>
        </input>
        <RadioSet/>
    
    </>;
}