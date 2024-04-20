export default function mainPage() {

    const container = document.createElement("div");
    container.className = "container";
    const header = document.createElement("div");
    header.id = "header";
    header.innerText = "Battleships!";
    container.appendChild(header);
    const subHeader = document.createElement("div");
    subHeader.id = "subHeaderHolder";
        const subHeaderLeft = document.createElement("div");
        subHeaderLeft.className = "subHeader";
        subHeaderLeft.innerText = "Player";
        subHeader.appendChild(subHeaderLeft);
        const subHeaderRight = document.createElement("div");
        subHeaderRight.className = "subHeader";
        subHeaderRight.innerText = "Computer";
        subHeader.appendChild(subHeaderRight);
    container.appendChild(subHeader);

    const gameDisplay = document.createElement("div");
    gameDisplay.id = "gameDisplay";
    const gameInstructions = document.createElement("div");
    gameInstructions.id = "gameInstrucitons";
    gameInstructions.innerText = "Player Choose which box to attack!";
    gameDisplay.appendChild(gameInstructions);
    container.appendChild(gameDisplay);
    
    const playerSide = document.createElement("div");
    playerSide.id = "playerSide";
    playerSide.className = "side";
    for (let x = 9; x >= 0; x--)
    {
        for (let y = 0; y<10; y++)
        {
            let box = document.createElement("button");
            box.className = "box";
            box.id = `playB${x}${y}`;
            playerSide.appendChild(box);
        }
    }
   
    const boardContainer = document.createElement("div");
    boardContainer.id = "boardContainer";
    boardContainer.appendChild(playerSide);
    const computerSide = document.createElement("div");
    computerSide.id = "computerSide";
    computerSide.className = "side";
    for (let x = 9; x >= 0; x--)
    {
        for (let y = 0; y<10; y++)
        {
            let box = document.createElement("button");
            box.className = "boxCom";
            box.id = `compBox${x}${y}`;
            computerSide.appendChild(box);       
        }
    }     
    boardContainer.appendChild(computerSide);
    container.appendChild(boardContainer);
    
  

    
    return container;
}