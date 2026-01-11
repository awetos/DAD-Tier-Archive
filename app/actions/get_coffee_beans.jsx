'use server';

export default async function testBeanConnection(event){
    try {
        const response = await fetch('/netlify/functions/get_coffee_blends');
        
        const blends = await response.json();
        /*
        const blendsList = document.getElementById('blends');
        blends.forEach((blend) => {
        const li = document.createElement('li');
        li.innerText = `${blend.name} - ${blend.notes}`;
        blendsList.appendChild(li);
        });*/

        console.log(blends);
    } catch (error) {
        console.error('Error:', error);
    }
    return;
}