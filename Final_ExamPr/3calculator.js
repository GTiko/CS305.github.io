"use strict";
/*eslint-disable */

let calculator = {
    setValues(op1,op2){
        this.op1 = op1;
        this.op2 = op2;
    },
    sum(){return this.op1 + this.op2},
    mult(){return this.op1 * this.op2}
};
calculator.setValues(5, 10);    
console.log( "expect 15 : ", calculator.sum() ); 
console.log("expect 50 : ", calculator.mult() )