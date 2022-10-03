"use strict";
/**
 * 
 * @param {Array} studentAnswers student result
 * @param {Array} correctAnswers correct answer
 * @returns {Array} number of correct answer for each
 */
function scoreExams(studentAnswers, correctAnswers) {
    let score = [];
    for(let i = 0; i < studentAnswers.length;i++){
        let count = 0;
        for(let j = 0; j < studentAnswers[i].length;j++){
            if(studentAnswers[i][j] == correctAnswers[j]){
                count++;
            }
        }
        score[i] = count;
    }
    return score;
}
const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];
const correctAnswers = [3, 1, 2,4];

console.log(scoreExams(studentAnswers,correctAnswers));