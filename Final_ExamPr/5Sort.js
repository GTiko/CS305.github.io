"use strict";
/*eslint-disable */

// [4, 2, 8, 15].sort(/* something neededhere */ ); → [15, 8, 4, 2]

let number  = [4, 2, 8, 15]; 
let number1 = [4, 2, 8, 15];
let des = number.sort(descending);

function descending(a, b) {
    if (a < b) { return -1; }
    if (a == b) { return 0; }
    if (a > b) { return 1; }
}

console.log(des);