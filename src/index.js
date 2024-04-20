import './style.css';

import {shipType, gameBoardFactory, player, computer, shipFactory, getShips } from './battleShipFunctions.js';
import mainPage from './webpage.js'
import selectShips from './selectShips.js';
import chooseLocations from './chooseLocations.js';

const play = player("lewis");
const comp = computer();
for(let x = 0; x< comp.ships.length; x++)
{
    comp.getCoordinate(comp.ships[x]);
}

document.querySelector("body").appendChild(selectShips(shipType))
const playerLocations = await chooseLocations(shipType);


for (let x = 0; x<playerLocations.length; x++)
{
    let st = playerLocations[x].coor[0];
    let len = playerLocations[x].length -1;
    let end = playerLocations[x].coor[len];
    play.playerBoard.setLocation(playerLocations[x].ship, st, end);
}

console.log(play.playerBoard.board);


document.getElementById("selectShipsContainer").style.display = "none";
document.querySelector("body").appendChild(mainPage());   


for (let x = 0; x< playerLocations.length; x++)
{
    for (let y = 0; y < playerLocations[x].length; y++)
    {
        let ycoor = playerLocations[x].coor[y][0];
        let xcoor = playerLocations[x].coor[y][1];
        let pos = document.querySelector(`#playB${ycoor}${xcoor}`);
        pos.classList.add("selected");
               
    
    }
}

//player attacks here!!!
document.querySelectorAll(".boxCom").forEach(function(box) {
    box.addEventListener("click", function(e) {
        e.preventDefault();
        console.log(box.id);
    })
    
})


console.log(play.playerBoard);
//console.log(play.opponentDisplay);
console.log(comp.computerBoard.board);