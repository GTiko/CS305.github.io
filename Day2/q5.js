"use strict";
const prompt = require("prompt-sync")();
const num = prompt("Enter the number ",0);
const n = prompt("Enter the power ",0);

function pow(num, n){
    let result = 1;
    for(let i = 0; i < n; i++){
        result *= num;
    }
    return result;
}
console.log(pow(num,n));