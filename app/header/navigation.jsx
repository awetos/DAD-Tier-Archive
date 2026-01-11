import Link from "next/link";
import classes from './navigation.module.css'

export default function Header(){
    return<>
    <div className ={classes['link-whole']}>
        <div className={classes['links-row']}>
            <div className={classes['my-button']}>
            <Link href="/">Home</Link>
            </div>

            <div className={classes['my-button']}>
                <Link href="/submit">Submit a Tierlist</Link>
                </div>
            <div className={classes['my-button']}>
                <Link href="/pending">Pending Tierlists</Link>
                </div>

            <div className={classes['my-button']}>
                <Link href="https://dadtierlist.pages.dev/">Create a Tierlist</Link>
                </div>
        </div>
    </div>
    </>
}