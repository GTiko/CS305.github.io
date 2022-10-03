"use strict";
/**
 * 
 * @param {Number} costOfTheHouse amount of the house
 * @returns {Number} amount of downpaymnet
 */
function douwnPayment(costOfTheHouse){
    if(costOfTheHouse > 0 && costOfTheHouse <= 50000){
        return costOfTheHouse * 5/100;
    }else if(costOfTheHouse > 50000 && costOfTheHouse < 100000){
        return (2500) + (costOfTheHouse - 50000) * 10/100;
    }else if(costOfTheHouse >= 100000 && costOfTheHouse < 200000){
        return (7500) + (costOfTheHouse - 100000) * 15/100;
    }else if(costOfTheHouse >= 200000){
        return (20000) + (costOfTheHouse - 200000) * 10/100;
    }
}

const assert = require("assert");

describe("test for downpayment ", function(){
    it("tests dwonpaymnet for 40000 ", function(){
    assert.strictEqual(douwnPayment(40000), 2000);
    });
      it("tests dwonpaymnet for 50000 ", function(){
        assert.strictEqual(douwnPayment(50000), 2500);
        });
        it("tests dwonpaymnet for 100000 ", function(){
            assert.strictEqual(douwnPayment(100000), 7500);
            });
            it("tests dwonpaymnet for 250000 ", function(){
                assert.strictEqual(douwnPayment(250000), 25000);
                });
   });

