function calcDistance(x1,y1,x2,y2){

    let destance = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))
    return destance;
}

console.log("expect 7.07 : ", calcDistance (2, 1, 4, 6));