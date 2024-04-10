
export default function selectShips(ships) {
    
    const selectShipsContainer = document.createElement("div");
    selectShipsContainer.id = "selectShipsContainer";
    selectShipsContainer.className = "container";
    const header = document.createElement("div");
    header.id = "header";
    header.innerHTML = "Select your battleship locations";
    selectShipsContainer.appendChild(header);
    const shipsHolder = document.createElement("form");
    shipsHolder.id = "shipsHolder";
    for (let x = 0; x < ships.length; x++){
        let boat = document.createElement("div");
        boat.className = "boat";
        boat.id = `${ships[x].name}ID`;
        boat.innerHTML = `${ships[x].name}, length: ${ships[x].length}`;
        shipsHolder.appendChild(boat);
        let btn = document.createElement("button");
        btn.className = "chooseBtn";
        btn.id = `btn${ships[x].name}`;
        btn.innerText = "position";
        shipsHolder.appendChild(btn);
    }
    selectShipsContainer.appendChild(shipsHolder);
    const submit = document.createElement("button");
    submit.id = "submitCood";
    submit.innerText = "submit";
    shipsHolder.appendChild(submit);
    const board = document.createElement("div"); 
    board.className = "shipBoard";
    for (let x = 9; x >= 0; x--)
    {
        for (let y = 0; y<10; y++)
        {
            let box = document.createElement("button");
            box.innerText = [x,y]
            box.className = "boat";
            box.id = `playBox${x}${y}`;
            board.appendChild(box);
        }
    }
    selectShipsContainer.appendChild(board);
    return selectShipsContainer;


}

//export {selectShips};