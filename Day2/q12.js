"use strict";
/**
 * 
 * @param {Number} digit user input
 * @returns {Number} product of the digit
 */
function multDigits(digit){
    let leng = (""+digit).length;
    let product = 1;
    
    for(let i = 0; i < leng; i++){
        product *= digit % 10;
        digit = parseInt(digit / 10);
    }
    return product;
}
console.log(multDigits(1234));

