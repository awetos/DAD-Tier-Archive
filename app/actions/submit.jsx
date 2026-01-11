'use server';

export default async function submit(prevState, formData){ //add prevState due to using formState.
    
    const msg = formData.get('my-text-input');
   await new Promise(r => setTimeout(r, 2000));

    console.log("You've submitted your form.");
    console.log(Object.fromEntries(formData));
    console.log(formData.get('tier-type'));
    return { status: 'Sent!' };
}
