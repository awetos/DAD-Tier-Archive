import { usePreviewerReadValues } from "../PreviewProvider/usePreviewProvider"
import classes from './preview.module.css'

export default function Type(){
    const currentType = usePreviewerReadValues().values.type;
    if(currentType === "skill-level"){

    }else{

    }

    return <>
    <div className={classes['type-area']}>
        <p>Type: {currentType}</p>
    </div>
       
    </>
}

