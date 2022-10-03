"use strict";
/*eslint-disable*/
const assert = require("assert");
/**
 * 
 * @param {true or false} boolean either he/she is salaried employee or not
 * @param {*number} salesAmount  amount of sales they made
 * @returns commision per sales amount
 */
function computeSalesCommission(boolean,salesAmount){
    if(boolean == true){
        if(salesAmount < 300){
            return 0;
        }else if(salesAmount >=300 && salesAmount <= 500){
            return (salesAmount * 1/100);
        }else{
            return (500 * 1/100) + ((salesAmount - 500) * (2/100));
        }
    }else if(boolean == false){
         if(salesAmount < 300){
            return 0;
        }else if(salesAmount >=300 && salesAmount <= 500){
            return (salesAmount * 2/100);
        }else{
            return (500 * 2/100) + ((salesAmount - 500) * (3/100));
        }
    }
 }

 describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
   });
   