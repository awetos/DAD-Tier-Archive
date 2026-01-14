import Image from "next/image";
import { usePreviewerReadValues } from "../PreviewProvider/usePreviewProvider";
import classes from './preview.module.css'

export default function ImagePreview(){
    const currentImage = usePreviewerReadValues().values.image;
    
    return <>
     <div className={classes['image-preview']}>
                
                {currentImage && 
                (<>
                    <Image 
                        src={currentImage}
                        alt={'an image picked.'}
                       fill
                    />
                </>)
                }
    
                {!currentImage && <p>No Image Uploaded</p>}
            </div>
    </>
}