export default function RadioSet(){
    return <>
      
           <p></p> 
        <label> Tierlist Type </label>
        <br/>
            <div>
                <input type="radio" name="tier-type" id="tier-type-selection" value="skill-level" defaultChecked={true} />
                <label htmlFor="tier-type-selection">skill-level</label>
            </div>

            <div>
                <input type="radio" name="tier-type" id="other-selection" value="other" defaultChecked={false}/>
                <label htmlFor="other-selection">other</label>
                {/*We create an association between the label with id-htmlFor */}
                {/*name is the key */}
                {/*Value is what is actually stored in the form data*/}
                {/*name: value */}
            </div>
        
    </>
}