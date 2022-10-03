"use strict";

module.exports = {computeSalesCommission};
/**
 * 
 * @param {boolean} boolean either he/she is salaried employee or not
 * @param {number} salesAmount  amount of sales they made
 * @returns {commision} per sales amount
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