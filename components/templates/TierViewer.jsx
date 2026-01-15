import Image from "next/image"
import classes from '@/components/templates/tierviewer.module.css'

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
    return <div className={classes["title"]}><p>{rowData.title}</p></div>
}

function getTierType(rowData){
    return <div className={classes["tier-type"]}><p>{rowData.tier_type}</p></div>
}

function getDateSubmitted(rowData){
    return <div className={classes["date-submitted"]}><p>Submitted on: {rowData.submission_time}</p></div>
}

function getDateCreated(rowData){
    return <div className={classes["date-created"]}><p>Created on: {rowData.created_date.toLocaleDateString()}</p></div>
}

function getPostNumber(rowData){
    return <div className={classes["post-number"]}><p>Post no: {rowData.post_number}</p></div>
}

function getDescription(rowData){
    return <div className={classes["description"]}><p>{rowData.description}</p></div>
}