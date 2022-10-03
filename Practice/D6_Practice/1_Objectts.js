"use strict";

let student1 = {
    s101: 3,
    s102: 4,
    s103: 5,
    s104: 4
};
let student2 = {
    s101: 3,
    s102: 1,
    s103: 2,
    s104: 4
};
let student3 = {
    s101: 2,
    s102: 6,
    s103: 3,
    s104: 4
};

let student1Id = [];
student1Id.push(student1.s101, student1.s102, student1.s103, student1.s104);
let student2Id = [];
student2Id.push(student2.s101, student2.s102, student2.s103, student2.s104);
let student3Id = [];
student3Id.push(student3.s101, student3.s102, student3.s103, student3.s104);

let studentId = [];
studentId.push(student1Id, student2Id, student3Id);
/**
 * 
 * @param {Array} quiz student answer
 * @param {Array} corrctAnswer correct answer
 * @returns {Array} number of correct
 */
function gradeQuiz(quiz, corrctAnswer) {
    let correct = [];

    for (let i = 0; i < studentId.length; i++) {
        let count = 0;
        for (let j = 0; j < studentId[i].length; j++) {
            if (corrctAnswer[j] == quiz[i][j]) {
                count++;
            }
        }
        correct.push(count);
    }
    return correct;
}

let answer = [3, 1, 2, 4];

console.log(student1Id);
console.log(student2Id);
console.log(student3Id);
console.log(answer);

console.log(gradeQuiz(studentId, answer));