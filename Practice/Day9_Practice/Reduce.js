"use strict";

const arr = [1, 2, 3, 4, 5];

const result = arr.reduce(function (product, current) {
    return product * current;
}, 1);

console.log("expected 120 : ", result);

const max = arr.reduce(function (max, current) {
    if (current > max) {
        return current;
    } else {
        return max;
    }
});

console.log("expected 5 : ", max);