const functions = require('./battleShipFunctions');
//console.log(functions.shipType);
it('computer', ()=> {
    let computer = functions.computer();
    expect(computer.ships.length).toBe(5);
    let carr = computer.ships[0];
    expect(carr.length).toBe(5);
  /*  //console.log(computer.getCoordinate(carr));
    for (let x = 0; x< 100; x++)
    {
        console.log(x);
        expect(computer.getCoordinate(carr)).toBeDefined();
    }*/
    
        
    //console.log(computer.getCoordinate(computer.ships[0]));

    //returns invalid doesn't redo the positioning!!!!!
    for (let x = 0; x < computer.ships.length; x++)
    {
        console.log(computer.ships[x]);
        computer.getCoordinate(computer.ships[x]);
    }
    console.log(computer.computerBoard.board);
    console.log(computer.shipCount);
 

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

