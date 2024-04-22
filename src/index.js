import './style.css';

import {shipType, gameBoardFactory, player, computer, shipFactory, getShips } from './battleShipFunctions.js';
import mainPage from './webpage.js'
import selectShips from './selectShips.js';
import chooseLocations from './chooseLocations.js';
import {getPlayerAttack, bomb, compBomb, victory} from './playBattleship.js'

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

//player attacks here!!! CHECK THE attack!!!
let count = 0
console.log(comp.computerBoard.board);
while (play.playerBoard.gameOver == false && comp.computerBoard.gameOver == false)
{
    if (count %2 == 0 )
    {
        let test = 0;
        console.log("Player");
        let attackCoor = await getPlayerAttack();
        console.log(attackCoor);
        console.log(play.attackCoor);
        for (let x = 0; x<play.attackCoor.length; x++)
        {
            console.log(play.attackCoor[x]);
            if (attackCoor[0] == play.attackCoor[x][0] && attackCoor[1] == play.attackCoor[x][1])
            {
            
                console.log("ALREADY");
                test = 1;
            }

        } 
        // a bit of attention here stop pressing on the same box twice.
        if (test == 0) {
            if (play.attack(comp.computerBoard,attackCoor) == "hit")
            {
                bomb(attackCoor, "hit");
            }
            else {
                bomb(attackCoor, "miss")
            };
            comp.computerBoard.receiveAttack(attackCoor);
        }
    }
    else
    {
        let att = comp.attack(play.playerBoard);
        if (att.hit == true){
            compBomb(att.cood, "hit");
        }
        if (att.hit == false) {
            compBomb(att.cood, "miss");
        }
    }
    count++;
}

//console.log(play);
//console.log(play.opponentDisplay);
if (play.playerBoard.gameOver == true)
{
    victory("computer");
}
if (comp.computerBoard.gameOver == true)
{
    victory("player");
}


