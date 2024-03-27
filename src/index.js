import './style.css';

import {carrierFactory, shipType} from './battleShipFunctions.js';


console.log("newproject! battleship");

console.log(shipType);
console.log(shipType[0]);
const a = carrierFactory(shipType[0]);
const b = carrierFactory(shipType[1]);
console.log(a);
console.log(b);

console.log(a);
a.hit();

console.log(a.getHitCount());

a.hit();
console.log(a.getHitCount());

console.log(a.isSunk());


a.hit();
//a.hit();
a.hit();
console.log(a.isSunk());