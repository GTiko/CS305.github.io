// "use strict";

function birthday(){
    console.log(this);
    this.age = this.age +1;
    console.log(this.age);
}

const person = {name : "bob", age : 10, birthday: birthday};
// console.log(birthday());

function area(){
    console.log(this);
    console.log(this.r);
    return 3.24 * this.r *this.r;
}
const circle = {r:1 , area:area};
console.log(area());


