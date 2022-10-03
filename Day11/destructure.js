//"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { topSalary }; //add all of your function names here that you need for the node mocha tests


function topSalary(salaries) {

    let max = 0;
    let person = null;
    if(salaries == {}){
        return null;
    }
    for(let [key, value] of Object.entries(salaries)){
        if(value > max){
            max = value;
            person = key;
        }
    }
    return person;
   
}


// with-out using destructre

// function topSalary(salaries) {

//     let max = 0;
//     let maxSalPer = null;
//     for (let key in salaries) {
//         if (salaries[key] > max) {
//             max = salaries[key];
//             maxSalPer = key;
//         }
//     }
//     return maxSalPer;
// }