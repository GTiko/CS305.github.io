"use strict";
const prompt = require("prompt-sync")();
const userInput = prompt("Enter browser ");

if(userInput === "Edge" || userInput === "edge"){
    console.log( "You've got the Edge!");
}else if(userInput === "Chrome" || userInput === "Firefox" || userInput === "Safari" || userInput === "Opera"){
  console.log("Okay we support these browsers too");
}else{
    console.log("'We hope that this page looks ok!'");
}