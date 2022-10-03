"use strict";
/*eslint-disable */


function Sensor(id,name,type,manufacturer,events){
    this.id = id;
    this.name = name;
    this.type = type;
    this.manufacturer = manufacturer;
    this.events = events;
}

function findSensorByType(list, number){
    return list.filter(item => item.type == number);
}


let frontDoor = new Sensor(1,"front door", 34,"climax", [{time:100, name:"door closed"},{time:101,name:"Door opner"}]);
let mothinSensor = new Sensor(2,"mothin Sensor", 43,"Nicy", [{time:100, name:"mothin Sensor"}]);
let priorLight = new Sensor(3,"prior Light", 54,"Osram", [{time:100, name:"light off"}]);
let mainEntrance = new Sensor(4,"main Entrance", 34,"climax", [{time:100, name:"Door closed"}]);

let list = [frontDoor,mothinSensor,priorLight,mainEntrance];

console.log(findSensorByType(list,34))
