"use strict";

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

let arr = [];

for(let key in user){
  arr.push(key);
}

console.log(arr);

// to print elemnts on 

let arr2 = [];

for(let value of arr){
    arr2.push(user[value]);
}
console.log(arr2);