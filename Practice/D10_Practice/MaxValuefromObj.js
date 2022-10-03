"use strict";
const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players = [player1, player2, player3];

console.log("expect 4:", maxPoints(players));
/**
 * 
 * @param {Array} arr input arr
 * @returns {number} return 
 */
function maxPoints(arr) {
    let a = [];
    for (let all of arr) {
        a.push(all.points);
    }
    let tot = [];
    for (let i = 0; i < a.length; i++) {
          let sum = 0;
        for (let j = 0; j < a[i].length; j++) {
            sum += a[i][j];
        }
        tot.push(sum);
    }
    let max = tot[0];
    for(let all of tot){
        if(tot > max){
            max = tot;
        }
    }
    
    return max;
}