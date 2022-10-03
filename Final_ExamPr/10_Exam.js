"use strict";
/*eslint-disable */

function makesecureStack() {
    let arr = [];

   return function secure(element, operation) {
        if (operation == "push") {
            arr.push(element);
            return undefined;
        }
        if (operation == "pop") {
            return arr.pop();
        }
        if (operation == "view") {
            return arr.slice();
        }
    }
}

const secure = makesecureStack();
secure(1, "push");
secure(2, "push");
secure(3, "push");

console.log("Expect 3", secure(null, "pop"));
console.log("Expect undefined", secure(55, "push"));
console.log("Expect [1,2,55]", secure(null, "view"));




