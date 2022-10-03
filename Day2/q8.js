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

console.log(douwnPayment(250000));