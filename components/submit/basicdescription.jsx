export default function BasicDescription(){

    function HandleOnBlur(event){
        console.log('oops, we lost focus');
        event.name.input
    }
    return <>
      <label htmlFor="tier-title">Tier Title</label>
            <br/>
        <input 
            type="text" 
            name="tier-title" 
            id="tier-title"
            onBlur={HandleOnBlur}>
        </input>
    
    </>;
}