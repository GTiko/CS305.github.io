"use strict";


for (let i = 1; i < 18; i++) {
    let count = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            count++;
        }
    }
    if (count != 0) {
        console.log(i + " is a Not Prime");
    } else {
        console.log(i + " is a Prime");
    }
}