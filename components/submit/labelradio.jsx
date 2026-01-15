import { usePreviewerReadValues } from "./PreviewProvider/usePreviewProvider"

export default function RadioSet(){
    const previewContext = usePreviewerReadValues();
    let tierType = previewContext.values.type;
    function onChangeHandler(event){
        previewContext.handlers.changeTypeHandler(event.target.value);
    }
    return <>
           <p></p> 
        <label> Tierlist Type </label>
        <br/>
           

            <div>
                <input type="radio" name="tier-type" id="other-selection" value="other" 
                defaultChecked={tierType ==="other"} onChange={onChangeHandler} />
                <label htmlFor="other-selection">other</label>
                {/*We create an association between the label with id-htmlFor */}
                {/*name is the key */}
                {/*Value is what is actually stored in the form data*/}
                {/*name: value */}
            </div>
            <div>
                <input type="radio" name="tier-type" id="tier-type-selection" value="skill-level" 
                 defaultChecked={tierType ==="skill-level"} onChange={onChangeHandler}/>
                <label htmlFor="tier-type-selection">skill-level</label>
            </div>
        
    </>
}