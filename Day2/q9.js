function sumDigits(digit){
    let leng = (""+digit).length;
    let sum = 0;
    
    for(let i = 0; i < leng; i++){
        sum += digit % 10;
        digit = parseInt(digit / 10);
    }
    return sum;
}
console.log(sumDigits(1234));