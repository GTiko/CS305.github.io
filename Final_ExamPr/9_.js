"use strict";
/*eslint-disable */

function soct() {
    let abd = {
        orig: true,
        exp: function () {
            console.log(this);
        }
    };
    let inn = abd.exp.bind(abd);
    inn();
    abd.exp();
}

// soct();

const me = {
    first: 'Tina',
    last: 'Xing',
    getFullName: function () {
        console.log('this is: ', this);
        console.log(this.first + ' ' + this.last);
    }
}

//   me.getFullName();
//   console.log("me is: ", me);
// console.log("me.getFullName is: ", me.getFullName);
//   setTimeout(me.getFullName.bind(me), 1000);\


// let arr = [4, 2, 8, 15].sort(c);

// function c() {
//     let arr2 = [];
//     let i = arr.length - 1
//     for (let j = 0; j < arr.length; j++) {
//         arr2[j] = arr[i];
//         i--;
//     }
//     return arr2;
// }

// console.log(arr)

// function area(){
//     console.log(this);
//     return 3 * this.r;
// }
// let cir = {r:2, area:area};
// let x = cir.area;

// console.log(x());

function p(n){
    console.log(this);
    this.n = n;
    console.log(this)
}
console.log( Number("23sdl") )