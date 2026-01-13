import classes from './preview.module.css'
import Image from 'next/image';

export default function Preview({sharedTextProp, sharedImageProp}){
    return <>
    <div className={classes['preview']}>
        <p>Preview:</p>
        
        <div className={classes['image-preview']}>
            
            {sharedImageProp && 
            (<>
                <Image 
                    src={sharedImageProp}
                    alt={'an image picked.'}
                   fill
                />
            </>)
            }

            {!sharedImageProp && <p>No Images Uploaded</p>}

        </div>
        <p>{sharedTextProp}</p>
    </div>
    </>
}