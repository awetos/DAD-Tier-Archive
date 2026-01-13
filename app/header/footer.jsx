import Link from "next/link";
import classes from './footer.module.css';

/*
 <p>Images hosted on <Link href="https://cloudinary.com/">Cloudinary</Link>. 
        Deployed on <Link href="https://www.netlify.com/">Netlify</Link>.
        Database uses <Link href="https://www.netlify.com/">Neon</Link>.
*/

export default function Footer(){
    return <div className={classes['footer-whole']}>
                <p>
                    <Link href="/changes">Vers 1.0
                    </Link>
                </p>
        </div>
}