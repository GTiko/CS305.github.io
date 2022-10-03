"use strict";
/**
 * 
 * @param {Array} arr1 aray1
 * @param {Array} arr2 array2
 * @returns {Array} sum of the array
 */
function addMatrix(arr1,arr2){
    let out = [];
    for(let i = 0; i < arr1.length;i++){
        let inn = [];
            for(let j = 0; j< arr1[i].length;j++){
                inn.push(arr1[i][j] + arr2[i][j]);
            }
            out.push(inn);
    }
    return out;
}
let arr1 = [[1,2,3],[4,3,1],[8,6,4]];
let arr2 = [[4,6,7],[8,5,2],[9,4,0]];
console.log(addMatrix(arr1,arr2));