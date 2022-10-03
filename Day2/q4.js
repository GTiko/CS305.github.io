"use strict";
const prompt = require("prompt-sync")();
const num1 = prompt("Enter the first number ",0);
const num2 = prompt("Enter the second number ",0);

function min(num1, num2){
    if(num1 < num2){
        return num1;
    }else{
        return num2;
    }
}
console.log(min(num1,num2));