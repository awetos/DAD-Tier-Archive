'use client'
import Link from "next/link"
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import leavePiss from "@/app/actions/piss/leavePiss";
import classes from "@/app/changes/changes.module.css"

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
        <button type="submit" disabled={pending} className={classes["piss-button"]} >
            <img src={"/images/splash.png"}/>
            <span> {pending ? 'Submitting...' : 'Leave Piss!'}</span>
        </button>
  );
}

export default function Page(){
    const [formState, formAction] = useActionState(leavePiss,{});

    return <>
    <h2><p>About</p></h2>
    <p>Free tier is used for everything. 
        If something stops working free credits may have simply 
        run out for the month and if so, try again later.</p>
        <p>Images are hosted on <b>Cloudinary</b></p>
        <p>Site is deployed on <b>Netlify</b> which supports 150/uploads a month for free</p>
        <p>Information stored with <b>Neon</b> using Postgres.</p>
        <p>Icon from <Link href="https://www.flaticon.com/">flaticon</Link></p>
        <hr/>
    <h2><p>Submissions</p></h2>
        <ul>
            <li><p>Must be a tierlist about DAD</p></li>
            <li><p>Must contain at least 3 people on it</p></li>
            <li><p>No duplicates</p></li>
            <li><p>Wrong tier types or post numbers can be fixed by mod or via <Link href={"/contact"}>contact form</Link></p></li>
        </ul>
        <hr/>
        <h2><p>Version 1.0.0</p></h2>
        <ul>
            <li><p><b>Pending</b>: See list of pending submissions without image</p></li>
            <li><p><b>Submit</b>: Includes instant previewer. 
                Submit with Title, Desc, Post number, Type and Date</p></li>
            <li><p><b>Home</b>: browse entries, linked dynamically</p></li>
            <li><p><b>Contact</b>: Leave feedback which uploads to server</p></li>
            <li><p><b>Mod Tools</b>: Approve submission and updates mods last visited</p></li>
        </ul>
        
    </>
}

function getResponse(formState){
    if(formState?.status){
        return <p>{formState.status}</p>
    }
    return <></>
}