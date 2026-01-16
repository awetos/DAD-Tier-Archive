export default function stringParser(str, c){ //c is the character to split by.
    const elements = str.split(c);
    if (elements){
        console.log(`number of line breaks: ${elements.length}`);
    }

    return elements.map((elem, index)=>( <p key={index}>{elem}</p> ));
}