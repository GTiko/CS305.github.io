"use strict";
/**
 * 
 * @param {Number} x1 value of x1
 * @param {Number} y1 value of y1
 * @param {Number} x2 value of y1
 * @param {Number} y2 value of y2
 * @returns {Number} value of distance
 */
function calcDistance(x1,y1,x2,y2){

    let destance = Math.round(Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2)));
    return destance;
}

const assert = require("assert");

describe("test the distance ", function(){
    it("test distance", function(){
    assert.strictEqual(calcDistance(0,0,5,5), 7);
    });
      it("test the distance ", function(){
        assert.strictEqual(calcDistance(1,1,3,4), 4);
        });
        it("test the diatance ", function(){
            assert.strictEqual(calcDistance(2,1,4,6), 5);
            });
   });