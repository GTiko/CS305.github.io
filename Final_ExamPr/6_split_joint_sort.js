"use strict";
/*eslint-disable */

let text = "I eat my lunch on time";

let arrText = text.split(" ");

arrText.sort((a,b) => a.length - b.length);

let comp = arrText.join(" ");

console.log(comp);