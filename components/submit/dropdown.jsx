import classes from '@/components/submit/dropdown.module.css'
import Details from '@/components/submit/AdvancedDetails/details'
import Date from '@/components/submit/AdvancedDetails/date';
import PostNumber from '@/components/submit/AdvancedDetails/postnumber';
export default function Dropdown({open, setOpen}){

    function clickOpenHandler(event){
        setOpen(!open);
    }
    return<>
    <button type="button" className={classes['no-border-button']} 
        onClick={clickOpenHandler}><p>Advanced Details</p></button>
    {open && <HiddenContent/>
    }
    
    </>
}

function HiddenContent(){

    return <>
    <div className={classes['hidden']}>
       <Details/>
       <Date/>
       <PostNumber/>
    </div>
   
    </>
}