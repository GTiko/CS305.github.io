
function compoundInterst(initialAmount, interestRate , yearsNumber){
    const monthlyRate = (interestRate/12)/100;
    const numberPayment= yearsNumber * 12;
    let balance = initialAmount;

    for(let i = 1; i <= numberPayment; i++){
        balance = balance + (balance * monthlyRate);
    }
    return balance;
}
console.log("expect 110.47", compoundInterst(100,10,1) );
console.log("expected 16470.09", compoundInterst(10000,5,10));