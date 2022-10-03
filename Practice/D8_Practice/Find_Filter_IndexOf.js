"use strict";

const numbers = [1, 5, 18, 2, 77, 108];
console.log("Filter()");
numbers.filter((item, index) => {
    if (item % 2 == 0){
        console.log(item + " is in " + index + " index");
    }
});
console.log("Find()");
numbers.find((item, index)=>{
     if (item % 2 == 0){
        console.log(item + " is in " + index + " index");
    }
});
console.log("IndexOf()");
for(let i = 0; i< numbers.length; i++){
     if (numbers[i] % 2 == 0){
        console.log("index of " + numbers[i] +" is " + numbers.indexOf(numbers[i]));
    }
}