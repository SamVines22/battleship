
const shipType = [{name: "Carrier", length: 5}, {name: "Battleship", length: 4}, {name: "Cruiser", length: 3}, {name: "Submarine", length: 3}, {name: "Destroyer", length: 2}];

function shipFactory(obj){
    
    const name = obj.name;
    const length = obj.length;
  
    let hitCount = 0;
    const getHitCount = function(){return hitCount};
    const hit = function () {
        return hitCount++
    }
    const isSunk = function() {
        if (this.getHitCount() == length)
        {
             return true;
        }
        else return false
       
    }
   // console.log(this.name);
    return {name, length, hit, getHitCount, isSunk,}
    
}

function gameBoardFactory(){
    let board = createBoard();
  //  console.log(getShips(shipType));
    let ships = getShips(shipType);
    let sunkShips = 0;
    let shipsOnBoard = 0;
    let shipCount = 5// ships.length;
    let gameOver = false;
    let opponentDisplay = createOppBoard();
    const setLocation = function (ship, start, end) {
                let y = end[0] - start[0];
                let x = end[1] - start[1];
                if (y!= 0)
                {   for (let i = 0; i<=y; i++)
                    {
                        if (board[start[0]+i][start[1]] != null)
                        {
                            return "invalid";
                        }
                    }   


                    for (let i = 0; i<=y; i++)
                    {
                        board[start[0]+i][start[1]] = `${ship[0]}${ship[1]}${ship[2]}`;
                        
                    }         
                    shipsOnBoard++;
                }
                else {  
                    for (let i = 0; i <=x; i++)
                    {
                        if (this.board[start[0]][start[1]+i] != null)
                        {
                            return "invalid";
                        }
                    }
                    for (let i = 0; i <=x; i++)
                    {
                        board[start[0]][start[1]+i] = `${ship[0]}${ship[1]}${ship[2]}`;
                        
                    }
                    shipsOnBoard++;
                }
             //   return board;
                }
        
       
    
    const receiveAttack = function(arr) {
      //  console.log("ATTACK");
        if (board[arr[0]][arr[1]]!= null && board[arr[0]][arr[1]] != "*" && board[arr[0]][arr[1]]!= "X")
        {
            let target = board[arr[0]][arr[1]];
            for (let x = 0; x < ships.length; x++)
            {
                let name = ships[x].name[0] + ships[x].name[1] + ships[x].name[2];
                if (name == target)
                {
                    ships[x].hit();  
                    opponentDisplay[arr[0]][arr[1]].hit = 1;
                    if (ships[x].isSunk() == true)
                    {
                        sunkShips++;
                        if (sunkShips == shipCount)
                        {
                            this.gameOver = true;                         
                        }
                    }
                }
                
            }
            board[arr[0]][arr[1]] = "*";
        //    console.log("HIT");
            return true;
        }
        else if (board[arr[0]][arr[1]]== null){
            board[arr[0]][arr[1]] = "X";
            opponentDisplay[arr[0]][arr[1]].miss = 1;
         //   console.log("MISS");
            return false;
        }
    }

  
    return {board, ships, setLocation, receiveAttack, gameOver, opponentDisplay}
}


function player(name)
{
    let playerBoard = gameBoardFactory();
    let opponentBoard = gameBoardFactory();
    let opponentDisplay = createOppBoard();
    let ships = playerBoard.ships;
    let attackCoor = [];
    const attack = function(enemy, cood) {
        attackCoor.push(cood);
        if (enemy.receiveAttack(cood) == true)
        {
            this.opponentDisplay[cood[0]][cood[1]].hit = 1; 
        }
        else {
            this.opponentDisplay[cood[0]][cood[1]].miss = 1;
        }
    }
    
   
    return {name, playerBoard, opponentBoard, opponentDisplay, ships, attack};
}

function computer() {
    let computerBoard = gameBoardFactory();
    let opponentBoard = gameBoardFactory();
    let opponentDisplay = createOppBoard();
    let ships = computerBoard.ships;
    let shipCount = 0;
    let attackCoor = [];

    const getCoordinate = function(ship) {
        const len = ship.length;
        let start, end;
        let yCo;
        let xCo;
        let testPosition = false;
        let setPosition;
        let test = Math.random();
        if (test >= 0.5) {
            while (testPosition == false) {
                    do
                    {
                        yCo = Math.floor((Math.random()*10));
                        xCo = Math.floor((Math.random())*10);
                        
                    }
                    while (yCo + len > 9 )
                start = [yCo, xCo];
                end = [yCo + len, xCo];
                setPosition = this.computerBoard.setLocation(ship.name, start, end);
               
                if (setPosition != "invalid"){
                    this.shipCount++;
                    return setPosition;
                    }               
                }                
        }
        else {
            while(testPosition == false) {
                do
                {
                    yCo  =  Math.floor((Math.random()*10));
                    xCo = Math.floor((Math.random())*10);  
                }
                while (xCo + len > 9)
            start = [yCo, xCo];
            end = [yCo, xCo + len];
            setPosition = this.computerBoard.setLocation(ship.name, start, end);
           
            if (setPosition != "invalid"){ 
                this.shipCount++;
                return setPosition;
                }
              
            } 
            
        
        }       
    }
    const attack = function(enemy) {
        let test = false;
        let cood;
        while (test == false){     
            let xCo = Math.floor(Math.random()*10);
            let yCo = Math.floor(Math.random()*10);
            cood = [yCo, xCo];
            let count = 0;
            for (let x = 0; x<attackCoor.length; x++)
            {
                if (attackCoor[x][0] == cood[0] && attackCoor[x][1] == cood[1])
                {
                    count++;
                }
            }
            if (count == 0)
            {
                attackCoor.push(cood);
                test = true;
            }
        } 
  
        if (enemy.receiveAttack(cood) == true)
        {
            this.opponentDisplay[cood[0]][cood[1]].hit = 1; 
        }
        else {
            this.opponentDisplay[cood[0]][cood[1]].miss = 1;
        }
        
    }

    return {ships, getCoordinate, computerBoard, opponentBoard, shipCount, attack, attackCoor, opponentDisplay}
}


function createBoard() {
    let sq = []
    for(let x = 0; x< 10; x++)
    {
         sq.push([]);
        for (let y = 0; y< 10; y++)
        {
            sq[x].push(null)
        }
    }

   return sq;
}

function getShips(arr) {
    let list = []
    for (let x = 0; x<arr.length; x++)
    {
       
        let obj = shipFactory(arr[x]);
        list.push(obj);
    }

    return list;
    
}


function createOppBoard() {
    let sq = [];
    for (let x = 0; x< 10; x++)
    {
        sq.push([]);
        for (let y = 0; y<10; y++)
        {
            let square = {pos: [x,y], hit: 0, miss: 0}
            sq[x].push(square);
        }
    }
    return sq;
}


export {shipType, gameBoardFactory, player, computer, getShips, shipFactory};
//module.exports = {shipType, shipFactory, createBoard, gameBoardFactory, getShips, player, computer, createOppBoard};

//module.exports = {plusThree};