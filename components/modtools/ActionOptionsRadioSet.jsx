export default function ActionOptionsRadioSet(){
    
    return <>

    <label> What do you want to do? </label>
    <br/>
        <div>
            <input type="radio" name="post-action" id="check-selection" value="check" />
            <label htmlFor="check-selection">check post (pending)</label>
        </div>
        <div>
            <input type="radio" name="post-action" id="approve-selection" value="approve" />
            <label htmlFor="approve-selection">approve pending</label>
        </div>

        <div>
            <input type="radio" name="post-action" id="delete-selection" value="delete"/>
            <label htmlFor="delete-selection">delete pending</label>
            {/*We create an association between the label with id-htmlFor */}
            {/*name is the key */}
            {/*Value is what is actually stored in the form data*/}
            {/*name: value */}
        </div>
         <div>
            <input type="radio" name="post-action" id="approve-and-delete-selection" value="approve-and-delete" />
            <label htmlFor="approve-and-delete-selection">approve and move </label>
        </div>
          <div>
            <input type="radio" name="post-action" id="delete-existing-selection" value="delete-existing" />
            <label htmlFor="delete-existing-selection">delete existing tierlist</label>
        </div>
        
    </>
}