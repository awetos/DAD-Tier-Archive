    import Link from 'next/link';
    import { getNetlifyContext } from 'utils';

    import classes from '../styles/homepage.module.css';

    const ctx = getNetlifyContext();

    export default function Page() {
        return (
            <div> <div className={classes.scawy}> 
            <p>Guess who just made...</p>
                <span>Some DAD shit bitches.</span>
            </div>
        
            <Link href="\submit">Submit.</Link>
            </div>
        );
    }
