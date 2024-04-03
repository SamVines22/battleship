//const functions = require('./battleShipFunctions');
//populate opponent display. Makes opponent display from opponent board object.
it ('test_Game', ()=> {
    const player1 = functions.player("Lewis");
    const ai = functions.computer();
    const comShips = ai.ships;
    const player1Ships = player1.ships;
    for (let x = 0; x < comShips.length; x++)
    {
        ai.getCoordinate(comShips[x]);
    }
    player1.opponentBoard = ai.computerBoard;
    player1.playerBoard.setLocation(player1Ships[0].name, [0,0], [0,5]);
    player1.playerBoard.setLocation(player1Ships[1].name, [1,0], [1,4]);
    player1.playerBoard.setLocation(player1Ships[2].name, [2,0], [2,3]);
    player1.playerBoard.setLocation(player1Ships[3].name, [3,0], [3,3]);
    player1.playerBoard.setLocation(player1Ships[4].name, [4,0], [4,2]);
    ai.opponentBoard = player1.playerBoard;
    expect(ai.computerBoard).toBe(player1.opponentBoard);
    expect(ai.opponentBoard).toBe(player1.playerBoard);
    for (let x = 0; x< 100; x++)
    { 
        ai.attack(player1.playerBoard);
        if (player1.playerBoard.gameOver == true)
        {
            console.log(`Game over after ${x}`);
            break;
        }
    }
     
     expect(ai.opponentBoard.board).toBe(player1.playerBoard.board);
     expect(player1.playerBoard.gameOver).toBeTruthy();
     expect(ai.opponentDisplay[0][0].hit).toBe(1);


    for (let x = 0; x < 10; x++)
    {
        for (let y = 0; y < 10; y++)
        {
            //ai.computerBoard.receiveAttack([x,y]);
            let cood = [x,y];
            player1.attack(ai.computerBoard, cood);
        }
    }
    expect(ai.computerBoard.gameOver).toBeTruthy();
    console.log(player1.opponentDisplay);
     
     
})


it.skip('attack', ()=> {
    let computer = functions.computer();
    let ships = computer.ships;
    computer.opponentBoard.setLocation(ships[0].name, [0,0], [0,5]);
    computer.opponentBoard.setLocation(ships[1].name, [2,2], [6,2]);
    computer.opponentBoard.setLocation(ships[2].name, [5,5], [9,5]);
    computer.attack();
    expect(computer.attackCoor.length).toBe(1);
    for (let x = 0; x < 80; x++)
    {
        computer.attack();
    }
    expect(computer.attackCoor.length).toBe(81);
    console.log(computer.opponentBoard.board);
    console.log(computer.opponentDisplay);
})

it.skip('computer', ()=> {
    let computer = functions.computer();
    expect(computer.ships.length).toBe(5);
    let carr = computer.ships[0];
    expect(carr.length).toBe(5);
    let y = 0;
    while (y < 10000) {
        let comp = functions.computer();
        for (let x = 0; x< comp.ships.length; x++)
    {
      
        comp.getCoordinate(comp.ships[x]);
    }
    expect(comp.shipCount).toBe(5);
    y++;

}
})




it.skip('player', ()=> {
    let player = functions.player("playerOne");
    let playerBoard = player.playerBoard;
    let computer = functions.player("computer");
    let computerBoard = computer.opponentBoard;
    expect(player.name).toBe("playerOne");
    playerBoard.setLocation(playerBoard.ships[4].name, [0,0], [0,2]);
    console.log(playerBoard.board);
    playerBoard.receiveAttack([0,0]);
    playerBoard.receiveAttack([0,1]);
    expect(playerBoard.gameOver).toBeTruthy();
    computerBoard.setLocation(computerBoard.ships[3].name, [0,1], [0,4]);
    computerBoard.receiveAttack([0,1]);
    computerBoard.receiveAttack([0,2]);
    computerBoard.receiveAttack([0,3]);
    expect(computerBoard.gameOver).toBeTruthy();

})


it.skip('receive_attack', () => {
    let board = functions.gameBoardFactory();
    let ships = board.ships;
    board.setLocation(ships[1].name, [0,0],[0,4]);
    expect(board.setLocation(ships[0].name,[0,0],[0,5])).toBe(undefined);
    expect(board.receiveAttack([4,1])).toBeFalsy();
    console.log(board.board);
    board.receiveAttack([0,0]);
    board.receiveAttack([0,1]);
    board.receiveAttack([0,2]);
    board.receiveAttack([0,3]);
    console.log(board.board);

    expect(board.gameOver).toBeTruthy();
    


})


it.skip('board fac', ()=> {
    let obj = functions.gameBoardFactory();
    let ships = obj.ships;
    expect(obj.board.length).toBe(10);
    obj.setLocation(ships[4].name,[1,2],[3,2]);
    obj.setLocation(ships[0].name,[4,2],[9,2]);
    obj.setLocation(ships[1].name,[3,3],[3,7]);
    console.log(obj.board);

}) 


it.skip('getShips', ()=> {

    let objects = functions.getShips(functions.shipType);
    expect(objects.length).toBe(5);
    expect(objects[0].name).toBe("Carrier");
    expect(objects[0].getHitCount()).toBe(0);
    objects[0].hit();
    expect(objects[0].getHitCount()).toBe(1);
    expect(objects[4].isSunk()).toBeFalsy();
    objects[4].hit();
    objects[4].hit();
    expect(objects[4].isSunk()).toBeTruthy();

})

it.skip('location', ()=> {
 
    let fac = functions.gameBoardFactory();
    console.log(fac.squares);
    let carrier = functions.shipFactory(functions.shipType[0]);
    console.log(carrier); 


}

)

it.skip('ship fact', ()=> {
    let des = functions.shipFactory(functions.shipType[0]);
    expect(des.length).toBe(5);
    expect(des.name).toBe("Carrier");
})

it.skip('ship fac func', ()=> {
    let des = functions.shipFactory(functions.shipType[0]);
    expect(des.isSunk()).toBeFalsy();
    for (let x = 0; x<5; x++)
    {
        des.hit();
    }

    expect(des.isSunk()).toBeTruthy();
})

it.skip ('board', ()=> {
    let board = functions.createBoard();
    console.log(board);
    expect(board[0].length).toBe(10);
    expect(board.length).toBe(10);
})

