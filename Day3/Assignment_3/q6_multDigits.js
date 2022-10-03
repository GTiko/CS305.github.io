"use strict";
/**
 * 
 * @param {Number} digit user input
 * @returns {Number} product of the digit
 */
function multDigits(digit){
    let leng = (""+digit).length;
    let product = 1;
    
    for(let i = 0; i < leng; i++){
        product *= digit % 10;
        digit = parseInt(digit / 10);
    }
    return product;
}

const assert = require("assert");

describe("test the product of digits ", function(){
    it("test the product of digits for 1234 ", function(){
    assert.strictEqual(multDigits(1234), 24);
    });
      it("test the product of digits  for 102 ", function(){
        assert.strictEqual(multDigits(102), 0);
        });
        it("test the product of digits  8 ", function(){
            assert.strictEqual(multDigits(8), 8);
            });
   });