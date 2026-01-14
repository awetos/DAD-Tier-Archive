import { useState } from "react";

/*This file stores the values and their handlers to be used with the PreviewProvider*/
export default function usePreviewerInitializer(){
    
   //set image
    const [image, changeImage] = useState();
    function changeImageHandler(newImage){ //type of.. file
      changeImage(newImage);
      console.log("A new image was received");
    }

    function resetPreview(){
      changeImage(null);
      changeTitle("");
      changeDescription("");
      const today = new Date();
      const formattedToday = today.toISOString().split('T')[0];
      changeDate(formattedToday);
      changePostNumber("");
      changeType("skill-level");
    }

   //set title
   const [title, changeTitle] = useState("");
   function changeTitleHandler(newText){
    changeTitle(getValues(newText));
   }

   //set description
   const [description, changeDescription] = useState("");
   function changeDescriptionHandler(newText){
      console.log("description was changed.");
    changeDescription(getValues(newText));
   }

  // Get today's date
  const today = new Date();
  
  // Format the date to 'YYYY-MM-DD' for the input value
  // toISOString() returns 'YYYY-MM-DDTHH:mm:ss.sssZ', so we slice it
  const formattedToday = today.toISOString().split('T')[0];

   //set date, assume the input value changed handles validation
   const [date, changeDate] = useState(formattedToday);
   function changeDateHandler(newDate){
    changeDate(getValues(newDate));
   }

   //set post number, assume the input value changed handles validation
   const [postNumber, changePostNumber] = useState("");
   function changePostNumberHandler(newPostNo){
    changePostNumber(getValues(newPostNo));
   }


   //set type. Comes from a radial menu so it's always valid
   const [type, changeType] = useState("skill-level");
   function changeTypeHandler(newType){
    changeType(newType);
   }

   const values = {
    title, 
    description,
    image,
    date, 
    postNumber,
    type
   }
   //changeTitleHandler : changeTitleHandler is the same as changeTitleHandler 
   // when the names are the same
   const handlers = {
    changeTitleHandler,
    changeDescriptionHandler,
    changeImageHandler,
    changeDateHandler, 
    changePostNumberHandler,
    changeTypeHandler,
    resetPreview
   }

   return {values, handlers}

}

function getValuesLearningMode(data){
   const myTargetValue = data?.target?.value; 
   //Both data and target have to exist, otherwise return undefined
   //if data exists and target exists, it's an event. get the value
   //if data does not have a target, returns undefined, 
   // it's a string; but this will return null or undefined if string.

   const getString = myTargetValue ?? data;
   //if it was a target and event, use myTargetValue
   //otherwise, it might have been a string

   const functionallySame = data?.target?.value ?? data;
   //if it was a valid event target, use that. otherwise use as is (string)
   return getString ?? "";
   //if you were fed data = null or data = undefined, return an empty string
}

//if it was an event, return event target. If it was a string, return string. If it was null, return empty.
function getValues(data) {
  return data?.target?.value ?? data ?? "";
}

