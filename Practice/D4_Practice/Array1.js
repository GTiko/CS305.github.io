"use strict";

const score = [10, 20, 30, 40, 50];

let arr = new Array(10);

for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 10);
}
console.log(arr);

/**
 * 
 * @param {number} score score of each coures
 * @returns {number} ave of the score;
 */
function findAverage(score) {
    let sum = 0;
    for (let i = 0; i < score.length; i++) {
        sum += score[i];
    }
    return sum / score.length;
}

console.log(findAverage(score));
