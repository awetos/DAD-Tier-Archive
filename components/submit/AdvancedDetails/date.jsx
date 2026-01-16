import { usePreviewerReadValues } from "../PreviewProvider/usePreviewProvider";
import classes from '@/components/submit/dropdown.module.css'

export default function Date(){
    const previewContext = usePreviewerReadValues();
    const currentDate = previewContext.values.date;
    
    function onChangeHandler(event){
        previewContext.handlers.changeDateHandler(event.target.value);
    }
    return <>
    <br/>
      <label>Date Created</label>
         <div className={classes['subtitle']}>Will be today by default</div>
        <input type="date" value={currentDate} onChange={onChangeHandler}></input>
        <br/>
    </>
}

