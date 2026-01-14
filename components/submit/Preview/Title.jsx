import { usePreviewerReadValues } from "../PreviewProvider/usePreviewProvider"
import classes from './preview.module.css'

export default function Title(){
    const currentTitle = usePreviewerReadValues().values.title;

    return <>
    <div className={classes['title-preview']}>
        <p>{currentTitle}</p>
        <p>{!currentTitle && "No title"}</p>
    </div>
       
    </>
}
