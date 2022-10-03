"use strict";

console.log([1, 2, 3] === [1, 2, 3]);     // false
//Becouse both the arrays have different memory location

console.log([1] == [1]); // false
//both have different memory location

let arr1 = [2, 3];
let arr2 = [2, 3];

console.log(arr1 === arr2);       // false
console.log(arr1 == arr2);        // false

console.log(arr1.toString() == "2,3"); //     true