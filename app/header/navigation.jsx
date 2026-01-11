import Link from "next/link";
import classes from './navigation.module.css'

export default function Header(){
    return<>
    <div className ={classes['link-whole']}>

        <div className = {classes['title']}>DAD Tier Archive</div>
        <div className={classes['links-row']}>
            
            <Link className={classes['my-button']} href="/">
                Home
            </Link>

            <Link className={classes['my-button']} href="/submit">
                Submit a Tierlist
            </Link>

            <Link className={classes['my-button']} href="/pending">
               Pending Tierlists
            </Link>

            
            <Link className={classes['my-button']} href="https://dadtierlist.pages.dev/">
                Create a Tierlist
            </Link>

        </div>
    </div>
    </>
}