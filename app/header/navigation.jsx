import Link from "next/link";
import classes from './navigation.module.css'

export default function Header(){
    return<>
    <div className ={classes['link-whole']}>

        <div className = {classes['title']}><span>DAD Tierlist Archive</span></div>
        <div className={classes['links-row']}>
            
            <Link className={classes['my-button']} href="/">
                <span>Home</span>
            </Link>

            <Link className={classes['my-button']} href="/submit">
                <span>Submit a Tierlist</span>
            </Link>

            <Link className={classes['my-button']} href="/pending">
               <span>Pending Tierlists</span>
            </Link>

            
            <Link className={classes['my-button']} href="https://dadtierlist.pages.dev/">
                <span>Create a Tierlist</span>
            </Link>

        </div>
    </div>
    </>
}