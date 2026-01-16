import { usePreviewerReadValues } from "../PreviewProvider/usePreviewProvider"
import classes from './preview.module.css'
import stringParser from "@/components/templates/helpers/stringParser";

export default function Description(){
    const currentDescription = usePreviewerReadValues().values.description;

    let renderPreview = <></>;

    if(currentDescription ===""){
        renderPreview = <></>;
    }
    else{
        //renderPreview = <p>{currentDescription}</p>;
        renderPreview = stringParser(currentDescription, '\n');
    }

    return <>
    <div className = {classes["description-area"]}>
        {renderPreview}
    </div>
        
    </>
}
