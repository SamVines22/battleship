async function getPlayerAttack() {
    let p = new Promise(function(resolve, reject)   {
        let coor;     
        document.querySelectorAll(".boxCom").forEach(function(box) {
            box.addEventListener("click", function (e) {
                e.preventDefault();
                coor = [parseInt(box.id[7]),parseInt(box.id[8])];
                resolve(coor);
               
            });
            
        })

    });
   
    const co = await p;
    return co;
}

function bomb(coor, hit) {
    const square = document.getElementById(`compBox${coor[0]}${coor[1]}`);
    if (hit == "hit")
    {
        square.style.backgroundColor = "red";
    }
    else {
        square.style.backgroundColor = "blue";
    }
}

function compBomb(coor, hit) {
    const square = document.getElementById(`playB${coor[0]}${coor[1]}`); 
    if (hit == "hit")
    {
        square.style.backgroundColor = "red";
        
    }
    else {
        square.style.backgroundColor = "blue";
    }
}

function victory(victor) {
    const message = document.createElement("div");
    message.id = "victory";
    message.innerText = `${victor} wins!`;
    document.getElementById("gameDisplay").style.display = "none";
    document.getElementById("boardContainer").style.display = "none";
    let gimp = document.querySelector("#co");
    console.log(gimp);
    gimp.appendChild(message);
}


export {getPlayerAttack, bomb, compBomb, victory};