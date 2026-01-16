import Image from "next/image"
import classes from '@/components/templates/tierviewer.module.css'
import stringParser from "@/components/templates/helpers/stringParser"

export default function TierViewer({rowData}){

    return <>
    <div className={classes["container"]}>
     <div className={classes["image-viewer"]}>
        <Image src={rowData.image_url} alt={rowData.title} fill />
     </div>
        {getTitle(rowData)}
        {getTierType(rowData)}
        {getDateCreated(rowData)}
        {getDateSubmitted(rowData)}
        {getDescription(rowData)}
        {getPostNumber(rowData)}
    </div>
    </>
}

function getTitle(rowData){
    if(rowData.title){
        return <div className={classes["title"]}><p>{rowData.title}</p></div>
    }
   return <></>
}

function getTierType(rowData){
    if(rowData.tier_type){
        return <div className={classes["tier-type"]}><p>Type: {rowData.tier_type}</p></div>
    }
    return <></>
    
}

function getDateSubmitted(rowData){
    if(rowData.submission_time){
        return <div className={classes["date-submitted"]}><p>Submitted on: {rowData.submission_time}</p></div>
    }
    return <></>
    
}

function getDateCreated(rowData){
    if(rowData.created_date){
        return <div className={classes["date-created"]}><p>Created on: {rowData.created_date.toLocaleDateString()}</p></div>
    }
    return <></>
}

function getPostNumber(rowData){
    if(rowData.post_number){
        return <div className={classes["post-number"]}><p>Post no: {rowData.post_number}</p></div>
    }
    return <></>
}

function getDescription(rowData){
    const desc = rowData.description;
    if(rowData.description){
        const res = stringParser(desc, '\r\n');
        return <div className={classes["description"]}>{res}</div>
    }
    return <></>
}