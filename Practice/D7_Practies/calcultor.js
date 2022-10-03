"use strict";

const calculator = {
    sum: add,
    mul: multiplication,

    setValues : function (num1, num2) {
        calculator.a = num1;
        calculator.b = num2;
    }
    // setValues : values
};

/**
 * 
 * @param {number} num1 number 1
 * @param {number} num2 number 2
 * @returns {nothing} nothing
 */
function values(num1, num2) {
    calculator.a = num1;
    calculator.b = num2;
}

/**
 * 
 * @returns {number} sum of two numbers
 */
function add() {
    return this.a + this.b;
}
/**
 * 
 * @returns {number} product of two numbers
 */
function multiplication() {
    return this.a * this.b;
}

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
module.exports = { calculator, add, multiplication, values }; //add all of your object names here that you need for the node mocha tests