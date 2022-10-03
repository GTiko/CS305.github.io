"use strict";

/**
 * 
 * @param {Number} digit input number
 * @returns {Number} sum of the digits
 */
function sumDigits(digit){
    let leng = (""+digit).length;
    let sum = 0;
    
    for(let i = 0; i < leng; i++){
        sum += digit % 10;
        digit = parseInt(digit / 10);
    }
    return sum;
}

const assert = require("assert");

describe("test the sum of digits ", function(){
    it("test the sum of digits for 1234 ", function(){
    assert.strictEqual(sumDigits(1234), 10);
    });
      it("test the sum of digits  for 102 ", function(){
        assert.strictEqual(sumDigits(102), 3);
        });
        it("test the sum of digits  8 ", function(){
            assert.strictEqual(sumDigits(8), 8);
            });
   });