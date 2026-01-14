import { usePreviewerReadValues } from "../PreviewProvider/usePreviewProvider"
import classes from './preview.module.css'

export default function Date(){
    const currentDate = usePreviewerReadValues().values.date;

    return <>
    <div className={classes['date-area']}>
        <p>Created on: {currentDate}</p>
    </div>
       
    </>
}
