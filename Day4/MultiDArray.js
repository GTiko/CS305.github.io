"use strict";


let arr = [];
let count = 1;
for (let i = 0; i < 3; i++) {
    let newArr = [];
    for (let j = 0; j < 3; j++) {
        newArr[j] = count;
        count++;
    }
    arr[i] = newArr;
}

console.log(arr);