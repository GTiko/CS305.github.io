"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
// module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {Array} arr arr
 * @param {Function} func function
 * @returns {Array} arr
 */
function myMap(arr, func) {
    return arr.map(func);
}

/**
 * 
 * @param {Array} arr arr 
 * @param {function} func fucntion
 * @returns {Array} arr
 */
function myFilter(arr, func) {
    return arr.filter(func);
}

/**
 * 
 * @param {Array} arr arr
 * @param {function} func function
 * @param {number} initialValue number
 * @returns {number} number
 */
function myReduce(arr, func, initialValue) {
    return arr.reduce(func, initialValue);
}