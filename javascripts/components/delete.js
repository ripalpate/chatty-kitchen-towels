import {choices} from "../components/string.js"
import {detailsBuilder} from "../components/string.js"

const activateDeletes = () => {
  const deleteButtons = document.getElementsByClassName('newMessage2');
  for (let i = 0; i < deleteButtons.length; i++) {
    const element = deleteButtons[i];
    element.addEventListener("click", (e) => {
      console.log("Delete Buttons are active")
      for(let i=0;i<choices.length;i++){
        console.log(choices[i]);
        if(choices[i]["message"] + " " + choices[i]["createdAt"] === e.target.parentElement.parentElement.childNodes[1].firstChild.innerText){
          // delete choices[i];
          choices.splice(i, 1);
          detailsBuilder(choices);
          // activateDeletes();
        }
        
      }
    
    })
  }
}
// choices[i]["message"] + " " + choices[i]["createdAt"]

// const activateDeletes = () => {
//     const deleteButtons = document.getElementsByClassName('newMessage2');
//     for (let i = 0; i < deleteButtons.length; i++) {
//       const element = deleteButtons[i];
//       element.addEventListener("click", (e) => {
//         const buttonIClicked = e.target;
//         const cardToDelete = buttonIClicked.parentNode.parentNode;
//         cardToDelete.remove();
//       })
//     }
//   }

// const activateDeletes = () => {
//   const deleteButtons = document.getElementsByClassName('newMessage2');
//   for (let i = 0; i < deleteButtons.length; i++) {
//     const element = deleteButtons[i];
//     element.addEventListener("click", (e) => {
//       for(i=0;i<choices.length;i++){
 //       if(
//choices[i]["message"] === e.target.parentElement.parentElement.childNodes[1].firstChild.innerText){
//          delete choices[i]
//           console.log("delete is working");
//         }
//       }

export {activateDeletes}