"use strict";
/*eslint-disable */
let unitConv = function(num){
    if(unitConversion.isDegree){
        console.log(unitConversion.isDegree)
        return num * Math.PI / 180;
    }
    console.log(false);
    return num * 180 /Math.PI;
}

let unitConversion = {
                    isDegree: true,
                    __prto__: unitConv
}

console.log(unitConv(10));