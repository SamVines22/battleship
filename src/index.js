import './style.css';

import {shipType, gameBoardFactory, player, computer, shipFactory, getShips } from './battleShipFunctions.js';
import mainPage from './webpage.js'
import selectShips from './selectShips.js';
import chooseLocations from './chooseLocations.js';

const play = player("lewis");
const comp = computer();
console.log(comp);
for(let x = 0; x< comp.ships.length; x++)
{
    comp.getCoordinate(comp.ships[x]);
}

document.querySelector("body").appendChild(selectShips(shipType))
const playerLocations = await chooseLocations(shipType);
console.log(playerLocations);

for (let x = 0; x<playerLocations.length; x++)
{
    let st = playerLocations[x].coor[0];
    let len = playerLocations[x].length -1;
    let end = playerLocations[x].coor[len];
    play.playerBoard.setLocation(playerLocations[x].ship, st, end);
}

console.log(play.playerBoard);



