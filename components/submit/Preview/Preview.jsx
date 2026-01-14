import classes from './preview.module.css'

//individual preview components with their listeners using poviders. 
import ImagePreview from './ImagePreview';
import Description from './Description';
import Title from './Title';
import Type from './Type';
import Date from './Date';
import PostNumber from './PostNumber';

export default function Preview(){


    return <>
    <div className={classes['preview']}>
        <p>Preview:</p>
        <ImagePreview/>
        <Title/>
        <Type/>
        <Date/>
        <Description/>
        <PostNumber/>
    </div>
    </>
}