'use client'
import classes from '@/components/submit/imagesubmission.module.css'
import {useRef, useState, useEffect} from 'react'
import { usePreviewerReadValues } from './PreviewProvider/usePreviewProvider';

export default function ImageSubmission(){
    const imageInput = useRef(); //may be useful if you want your own image button!

    function handleInputClick(event){
        imageInput.current.click();
    }

    const previewContext = usePreviewerReadValues();

    function handleImageChange(event){
        const file = event.target.files[0];
        console.log(file.name);

        if(!file){
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = ()=>{
            previewContext.handlers.changeImageHandler(fileReader.result);
        }; //this is called after readAsDataURL is done.
        fileReader.readAsDataURL(file);

        
    }

    return <>
    <div className={classes['image-picker']}>
        <label htmlFor='image'>Upload Image</label>
        <div className={classes['controls']}>
            <input 
                type="file" 
                accept="image/png, image/jpeg" 
                id='image'
                name='image'
                onChange={handleImageChange}
                ref={imageInput}
                />
        </div>
    </div>
    </>
}
