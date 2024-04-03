import './style.css';

import {carrierFactory, shipType} from './battleShipFunctions.js';
import mainPage from './webpage.js'
import selectShips from './selectShips.js';
import chooseLocations from './chooseLocations.js';

//document.querySelector("body").appendChild(mainPage());
document.querySelector("body").appendChild(selectShips(shipType))
chooseLocations();





document.querySelectorAll(".box").forEach(function(btn) {
    btn.addEventListener("click", function() {
        let cood = [parseInt(btn.id[7]),parseInt(btn.id[8])];
        console.log(cood);
    })
})