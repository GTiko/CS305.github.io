"use strict";
/*eslint-disable */

let arr = ["Bilbo", "Gandalf", "Nazgul"];

let result = arr.map(function (item, index, array) {

    return { [index] : item.length}
});




let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6
//modify so that it logs array with index: item.length instead of just item.length
console.log("expect 0: 5, 1: 7, 2: 6", result); 