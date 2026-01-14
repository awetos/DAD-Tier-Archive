import Dropdown from './dropdown';
import { useState } from 'react';
import classes from '@/components/submit/advanceddetails.module.css'
export default function AdvancedDetails() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className={classes['advanced-drop-down']}>
    <Dropdown
        open = {open}
        setOpen ={setOpen}>
        </Dropdown>
    </div>
        
  );
}
