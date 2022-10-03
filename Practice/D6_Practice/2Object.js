"use strict";

const numbers = {
    one: 1,
    two: 22,
    three: 333,
    four: 444
    };

const properties = ["one", "two", "three", "four"];

for(let i=0; i< properties.length;i++){
    console.log(numbers[properties[i]]);
}