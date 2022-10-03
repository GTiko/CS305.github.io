"use strict";
// function ave(num){
//     let sum = 0;
//     let ave = 0;
//     for(let)
// }

/**
 * 
 * @param {Array} arr input 
 * @returns {Array} output
 */
function computCharge(arr) {
    let out = [];
    for (let i = 0; i < arr.length; i++) {
        let inn = [];
        let sum = 0;
        let ave = 0;
        for (let j = 0; j < arr[i].length; j++) {
            for (let k = 0; k < arr[i].length; i++) {
                sum += arr[i][j];
            }
            ave = sum / arr[i].length;
            inn.push(ave);
        }
        out.push(inn);
    }
    return out;
}
console.log(computCharge([[1, 2, 3, 4, 5], [10, 20, 30, 60]]));
