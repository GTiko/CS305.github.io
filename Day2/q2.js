"use strict";
const prompt = require("prompt-sync")();
const userInput = prompt("Enter number    : ");

switch(userInput){
    case '0':
        console.log(0);
        break;
    case '1':
        console.log(1);
        break;
    case '2':
    case '3':
        console.log('2,3');
        break;
}