"use strict";
/*eslint-disable */

const numbers = [1, 5, 18, 2, 77, 108];

let filterAllEven = numbers.filter(item => item % 2 == 0);
console.log("filterAllEven ", filterAllEven);

let findFirstEven = numbers.find(item => item % 2 == 0);
console.log("findFirstEven ", findFirstEven);

let findIndexFirstEven = numbers.findIndex(item => item % 2==0);
console.log("findIndexOfFirstEven ", findIndexFirstEven);