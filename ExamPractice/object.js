"use strict";

function sayHi(){
    this.lat = 4;
    this.long = -98;

    console.log(this)
}
sayHi();