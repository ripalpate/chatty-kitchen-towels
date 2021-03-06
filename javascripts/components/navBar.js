import { choices, detailsBuilder, getmessagez } from "./string.js";
import {findElement} from "./edit.js"

const userName = () => {
    const nameDiv = document.getElementById("names");
    const inputCollection = nameDiv.getElementsByTagName("input");
    for (let i = 0; i < inputCollection.length; i++) {
        if (inputCollection[i].type === "checkbox") {
            if (inputCollection[i].checked) {
                let userName1 = document.querySelector('.user:checked').value;
                return userName1;
            }
        }
    }
}
// function to clear checked box 
const uncheck = () => {
    const nameDiv = document.getElementById("names");
    const inputCollection = nameDiv.getElementsByTagName("input");
    for (let i = 0; i < inputCollection.length; i++) {
        if (inputCollection[i].type === "checkbox") {
            if (inputCollection[i].checked) {
                inputCollection[i].checked = false;
            }
        }
    }
}
// function to find Id length
let counterX = 0;
window.addEventListener('load', () => {
    getmessagez();
    // returns the length of arrays of object
    counterX = Object.keys(choices).length;
});

const inputString = () => {
    let userInput = document.getElementById('input-field');
    userInput.addEventListener('keypress', (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            let user = userName();
            counterX++;
            // returns value of input field
            let value = userInput.value;
            let createdMessage = { messageId: "message" + counterX, name: user, message: value, createdAt: moment().calendar() };
            // Adding new object to array  
            choices.unshift(createdMessage);
            detailsBuilder(choices);
            if(choices.length > 19){
            choices.pop();
            }
            userInput.value = "";
            uncheck();
            enableClearButton();
        }else if(e.keyCode ===13){
             findElement();
        }
    })
}
// function to Activate Clear Button
const enableClearButton = () => {
    const clearButton = document.getElementById('clear-button');
    if (clearButton.disabled === true) {
        clearButton.disabled = false;
    }
}

export{inputString, choices};
