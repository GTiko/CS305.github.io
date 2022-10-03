"use strict";
/**
 * 
 * @param {Number} temp temprature input
 * @returns {Number} temprature in celsius
 */
function convertFahrenheit(temp){
    let celsius = Math.round(((temp - 32)*5)/9);
    return celsius;
}

const assert = require("assert");

describe("test conversion to celsius ", function(){
    it("test fahrenite to celsius for 32 ", function(){
    assert.strictEqual(convertFahrenheit(32), 0);
    });
      it("test fahrenite to celsius for 0 ", function(){
        assert.strictEqual(convertFahrenheit(0), -18);
        });
        it("test fahrenite to celsius for 212 ", function(){
            assert.strictEqual(convertFahrenheit(212), 100);
            });
            it("test fahrenite to celsius for 100 ", function(){
                assert.strictEqual(convertFahrenheit(100), 38);
                });
   });