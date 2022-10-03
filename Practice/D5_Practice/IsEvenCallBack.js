"use strict";
/**
 * 
 * @param {number} num input number
 * @returns {boolean} true or false
 */
function isEven(num){
    if(num%2 == 0){
        return true;
    }
    else
    return false;
}
/**
 * 
//  * @param {function} isEven returns boolean
 * @param {number} num input number
 * @returns {boolean} returns the callback
 */
function myCallBack(num){
    return isEven(num);
}

console.log(myCallBack(3));