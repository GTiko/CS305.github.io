"use strict";

let arr = [1,5,16,3, 108];
arr.forEach((item, index, array) =>{
    if(item % 2 == 0){
    console.log("item = " + item + " index = " + index + " form arr = " + array);
    }
});