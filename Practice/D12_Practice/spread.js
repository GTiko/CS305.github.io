"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr arr 
 * @returns {Array} new arr
 */
function copyArray(arr) {
    let newArr = [];
    for (let element of arr) {
        newArr.push(element);
    }
    return newArr;
}

/**
 * 
 * @param {Array} arr1 arr1
 * @param {Array} arr2 arr2
 * @returns {Array}  combind arr
 */
function concat(arr1, arr2) {
    return arr1.concat(arr2);
}
/**
 * 
 * @param  {...any} numbers number
 * @returns {number} number
 */
function findMin(...numbers) {
    return Math.min(...numbers);
}

function combineObjs(obj1, obj2) {
    let obj = {};
    
}