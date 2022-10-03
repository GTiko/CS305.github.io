"use strict";
/**
 * 
 * @param {number} x value of row
 * @param {number} y value of column
 * @returns {Array} multidimentinal array
 */
function generateArray(x, y) {

    let newArr = new Array;
    let count = 1;

    for (let i = 0; i < x; i++) {
        let arr = new Array;
        for (let j = 0; j < y; j++) {
            arr[j] = (count);
            count++;
        }
        newArr[i] = (arr);
    }
    return newArr;
}
console.log(generateArray(3, 3));