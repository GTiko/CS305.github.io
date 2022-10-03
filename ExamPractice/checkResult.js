"use strict";
/**
 * 
 * @param {Array} stdAns std answer
 * @param {Array} corrAns correct answer
 * @returns {Array} number of coorect answer
 */
 function checkExam(stdAns, corrAns) {
    let correct = 0; let wrong = 0;
    for (let i = 0; i < stdAns.length; i++) {
        if (stdAns[i] === corrAns[i]) {
            correct = correct + 4;
        }
        if (stdAns[i] != corrAns[i]) {
            wrong = wrong - 1;
        }
    }
    let result = correct + wrong;
    if(result < 0){
        return 0;
    }
    return result;
}
console.log(checkExam(["e", "c", "a", "b"], ["a", "a", "b", "b"]));