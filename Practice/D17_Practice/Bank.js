"use strict";
/*eslint-disable */

const bank = { transactionsDB: [], };
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [25, -5, 55] }
];

//return array with all customers who had deposits greater than 20.  
//array should contain objects with customerId and the transaction amount for each such transaction

function findTransactionsByAmount(list) {
    let largeAmount = [];
    for (let customer of list.transactionsDB) {
        for (let amount of customer.customerTransactions) {
            if (amount > 20) {
                largeAmount.push({
                    custId: customer.customerId,
                    amount: amount
                });
            }
        }
    }
    return largeAmount;
}

console.log("expect [{custId: 1, amount: 50}, {custId: 3, amount: 25}, {custId: 3, amount 55}] : ",
    findTransactionsByAmount(bank));