"use strict";

const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players = [player1, player2, player3];
/**
 * 
 * @param {Array} players input
 * @returns {Array} out put
 */
function sumPoints(players) {
    let arr = [];
    let sum = 0;
    for (let elm of players) {
        arr.push(elm.points);
    }
   for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j ++)
    sum += arr[i][j];
   }
   return sum;
}
console.log(sumPoints(players));