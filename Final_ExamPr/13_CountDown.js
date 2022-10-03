"use strict";
/*eslint-disable */

function countDown(number) {
    console.log(number)

    let count = number - 1;

    function tick() {
        console.log(count);
        count--;
        if (count < 0) {
            clearInterval(time);
        }
    }
    let time = setInterval(tick, 1000);
}

countDown(3);
