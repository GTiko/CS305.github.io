"use strict";
/**
 * 
 * @param {number} num is a number
 * @param {number} power is n-th exponent
 * @returns {number} number of power
 */
function pow(num,power){
    let pro = 0;
    for(let i = 0; i < power; i++){
        pro *= num;
    }
    return pro;
}
console.log(pow(2,3));