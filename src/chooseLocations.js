export default function chooseLocations(shipType) {
let locations = [];
let count = -1;
console.log(shipType);
document.querySelectorAll(".chooseBtn").forEach(function(btn) {
    btn.addEventListener("click", getStart);
})

function getStart(event) {
    event.preventDefault();
    console.log(this);
    let shipId = this.id;
    const shipIdLen = shipId.length; 
    const ship = shipId.substring(3, shipIdLen);
    console.log(ship);
    const shipInfo = document.getElementById(`${ship}ID`);
    const shipLength = shipInfo.innerText;
    const lengthOfShip = parseInt(shipLength[shipLength.length -1]);
    this.style.display = "none";
    shipInfo.style.display = "none";
    locations.push({ship: ship, length: lengthOfShip, coor: []});
    count++;
    document.querySelectorAll(".boat").forEach(function(btn) {
        btn.addEventListener("click", showOptions)
    })
  
}

function showOptions(event) {
    event.preventDefault();
    document.querySelectorAll(".boat").forEach(function(btn) {
        btn.removeEventListener("click", showOptions);
    })
    const shipLength = locations[count].length;
    let startCoordinate = [parseInt(this.id[7]),parseInt(this.id[8])];
    const start = document.getElementById(`playBox${startCoordinate[0]}${startCoordinate[1]}`);
    start.style.backgroundColor = "green";
    start.classList.add("selected");
    console.log(startCoordinate);
    const shipData = locations[count];
    shipData.coor.push(startCoordinate);
    const options = getOptions(startCoordinate, shipLength);
    for (let x = 0; x< options.length; x++)
    {
        let coor = options[x];
        console.log(`playbox${coor[0]}${coor[1]}`);
        let element = document.getElementById(`playBox${coor[0]}${coor[1]}`);
        console.log(element);
        element.classList.add("option");
        element.style.backgroundColor = "yellow";
    }
    document.querySelectorAll(".option").forEach(function(btn){
        btn.addEventListener("click", getSelection);
    })
}

function getSelection() {
    this.classList.remove("option");
    this.classList.add("selected");
    const start = locations[count].coor[0];
    let coord = [this.id[7],this.id[8]];
    let xDiff = coord[0] - start[0];
    console.log(xDiff);
    let yDiff = coord[1] - start[1]; 
    if (xDiff != 0 && xDiff > 0)
    {
        for (let x = 0; x <= xDiff; x++){    
        let block = document.getElementById(`playBox${start[0]+x}${start[1]}`);
        block.style.backgroundColor = "green";
        if (x!= 0)
        {
            let coordinates = [start[0]+x, start[1]];
            locations[count].coor.push(coordinates); 
        }
        }

    }
    else if (xDiff != 0 && xDiff < 0)
    {
        for (let x = xDiff; x<=0; x++)
        {
            let block = document.getElementById(`playBox${start[0]+x}${start[1]}`);
        block.style.backgroundColor = "green";
        if (x!= 0)
        {
            let coordinates = [start[0]+x, start[1]];
            locations[count].coor.push(coordinates); 
        }
        }
    }
    console.log(locations[count])
}



function getOptions(coor, len) {
    let arr = [];
    let length = len - 1;
    if (coor[0] + length < 10)
    {
        arr.push([coor[0]+length, coor[1]]);
    }
    if (coor[0] - length >= 0)
    {
        arr.push([coor[0] - length, coor[1]]);
    }
    if (coor[1] + length < 10)
    {
        arr.push([coor[0], coor[1]+length]);
    }
    if (coor[1] - length >=0)
    {
        arr.push([coor[0],coor[1]-length])
    }
    return arr
}

}