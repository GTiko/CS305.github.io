"use strict";
/**
 * 
 * @param {number} num input
 * @returns {boolean} true or false
 */
function isPrime(num) {
    let count = 0;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (num == 0) {
        return false;
    } else if (count == 0) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * 
 * @param {number} num input number
 * @returns {Array} arr
 */
function largestPrimeFactor(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            if (isPrime(i)) {
                arr.push(i);
            }
        }
    }
    if (num <= 1) {
        return 0;
    }
    let len = arr.length;
    return arr[len - 1];
}

console.log(largestPrimeFactor(10));
console.log(largestPrimeFactor(6936));
console.log(largestPrimeFactor(1));