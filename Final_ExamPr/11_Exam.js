"use strict";
/*eslint-disable */

function Increment(start) {
    this.start = start;

    this.increment = function (amount) {
        this.start += amount;
        return this.start;
    }
    this.decremrnt = function (amount) {
        this.start -= amount;
        return this.start;
    }
}

let inc = new Increment(100)
console.log(inc.increment(1));
// console.log(inc(2));
// console.log(inc(3));
