import { usePreviewerReadValues } from "../PreviewProvider/usePreviewProvider"
import classes from './preview.module.css'

export default function Description(){
    const currentDescription = usePreviewerReadValues().values.description;

    let renderPreview = <></>;

    if(currentDescription ===""){
        renderPreview = <></>;
    }
    else{
        renderPreview = <p>{currentDescription}</p>;
    }

    return <>
    <div className = {classes["description-area"]}>
        {renderPreview}
    </div>
        
    </>
}
