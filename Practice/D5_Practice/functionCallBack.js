"use strict";
/**
 * 
 * @param {number} num the input number
 * @returns {number} value of the number cubed
 */
function cube(num) {

    let value = 1;

    for (let i = 0; i < 3; i++) {
        value *= num;
    }

    return value;

}
/**
 * 
 * @param {number} cube mutiply number 3 times
 * @param {number} num the input number
 * @returns {number} value of the number cubed
 */
function myCallBack(cube, num) {

    return cube(num);
}

console.log(myCallBack(cube, 3));