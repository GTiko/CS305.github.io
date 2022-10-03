"use strict";
const prompt = require("prompt-sync")();
const age = prompt("How old are you ? ");
function checkAge(age){
    (age > 18 ) ?  console.log("true") : console.log("Did parents allow you?")
}
checkAge(age);