import './style.css';

import {carrierFactory, shipType} from './battleShipFunctions.js';
import mainPage from './webpage.js'
import selectShips from './selectShips.js';
import chooseLocations from './chooseLocations.js';

document.querySelector("body").appendChild(selectShips(shipType))
const playerLocations = await chooseLocations(shipType);
console.log(playerLocations)
console.log("gimp");



