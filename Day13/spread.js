"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr old array 
 * @returns {Array} new array
 */
function copyArray(arr){

    let newArr = [];
    for(let element of arr){
        newArr.push(element);
    }
    return newArr;
}
/**
 * 
 * @param {Array} arr1 first array
 * @param {Array} arr2 second array
 * @returns {Array} first and second array compbined
 */
function concat(arr1, arr2){
    return arr1.concat(arr2);
}
/**
 * 
 * @param  {...any} numbers numberd array
 * @returns {number} the min number form the array
 */
function findMin(...numbers) {
    return Math.min(...numbers);
}

function combineObjs(obj1, obj2){
    return {...obj1, ...obj2};
}