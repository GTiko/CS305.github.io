"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/
module.exports = { double, times100, myMap}; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} num user input
 * @returns {number} number which is doubled
 */
function double(num) {
    return num * 2;
}


/**
 * 
 * @param {number} num number enterd
 * @returns {number} 100 times the input
 */
function times100(num) {
    return num * 100;
}
/**
 * 
 * @param {Array} arr test arr input
 * @param {funtion} func function to perform the task
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(arr, func) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr[i] = func(arr[i]);
    }
    return newArr;
}
