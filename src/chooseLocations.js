export default function chooseLocations(shipType) {
let locations = [];
console.log(shipType);
document.querySelectorAll(".chooseBtn").forEach(function(btn) {
    btn.addEventListener("click", function(event){
        event.preventDefault();
        btn.style.display = "none";
        let ship = btn.id.slice(3);
        let shipInfo;
        for (let x = 0; x< shipType.length; x++)
        {
            if (shipType[x].name == ship)
            {
                shipInfo = shipType[x];
            }
        } 
        const stCood = new Promise(function(resolve, reject) {
        let gimp  = chooseStPosition(shipInfo);
        resolve(gimp);
    })
        stCood.then(function(gimp) {
            console.log("HELLOGIMPO");
            console.log(gimp);
            console.log("fdaf");
        })

    
        
        

            
        
    });
   
})

async function chooseStPosition(ship) {
    console.log(ship);
    console.log(ship.length);
    const st = new Promise(function(resolve, reject) {
        document.querySelectorAll(".boat").forEach(function(btn) {
            btn.addEventListener("click", function() {
                
                let cood = [parseInt(btn.id[7]),parseInt(btn.id[8])];
                resolve(cood);
            })
        });
        setTimeout(function(){reject("gimp");}, 3000);
    });
    st.
    then(
        function(value){
        console.log(value);
        let boxId =`playBox${value[0]}${value[1]}`;
        document.getElementById(boxId).style.backgroundColor = "green";
        let choices = []
            choices.push([value[0], value[1] + ship.length -1]);
            choices.push([value[0] + ship.length -1, value[1]]);
            choices.push([value[0], value[1] - (ship.length -1)]);
            choices.push([value[0] - (ship.length - 1), value[1]]);
            console.log(choices.length);
            let goodChoices = [];
            for (let x = 0; x < 4; x++)
            {
                if (choices[x][0] < 10  && choices[x][0] >= 0 && choices[x][1] >= 0 && choices[x][1] < 10)
                {
                    goodChoices.push(choices[x]);
                }
            }
            console.log(goodChoices);
            for (let x = 0; x < goodChoices.length; x++)
            {
                let id = `playBox${goodChoices[x][0]}${goodChoices[x][1]}`;;
                console.log(id);
                let element = document.getElementById(id);
                element.style.backgroundColor = "yellow";
                element.classList.add("choice");
                element.addEventListener("click", function() {
                    let first = parseInt(element.id[7]) - parseInt(boxId[7]);
                    let second = parseInt(element.id[8]) - parseInt(boxId[8]);
                    let numZero = parseInt(boxId[7]);
                    let numOne = parseInt(boxId[8]);
                    console.log(first);
                    if (first != 0)
                    {
                        if (first < 0)
                        {
                            for (let y = first; y <=0; y++)
                            {
                                let te = document.getElementById(`playBox${numZero+y}${numOne}`);
                            console.log(te);
                            te.style.backgroundColor = "green";
                            te.classList.add("selected");
                            te.classList.remove("choice");
                            document.querySelectorAll(".choice").forEach(function(btn) {
                                btn.style.backgroundColor = "";
                            })
                            /// function to add coordinates for the ship!!!
                             
                            }
                            console.log(addCoor(ship));
                        }
                        else {
                        for (let y = 0; y<=first; y++)
                        {
                            let te = document.getElementById(`playBox${numZero+y}${numOne}`);
                            console.log(te);
                            te.style.backgroundColor = "green";
                            te.classList.add("selected");
                            te.classList.remove("choice");
                            document.querySelectorAll(".choice").forEach(function(btn) {
                                btn.style.backgroundColor = "";
                            })

                            
                        }
                        console.log(addCoor(ship));
                    }
                    }
                    else if (second != 0){
                        if (second < 0)
                        {
                            for (let y = second; y <=0; y++)
                            {
                                let te = document.getElementById(`playBox${numZero}${numOne+y}`);
                            te.style.backgroundColor = "green";
                            te.classList.add("selected");
                            te.classList.remove("choice");
                            document.querySelectorAll(".choice").forEach(function(btn) {
                                btn.style.backgroundColor = "";
                            })
                            /// function to add coordinates for the ship!!!
                            
                            }
                            console.log(addCoor(ship));
                        }
                        else {
                        for (let y = 0; y<=second; y++)
                        {
                            let te = document.getElementById(`playBox${numZero}${numOne+y}`);
                            te.style.backgroundColor = "green";
                            te.classList.add("selected");
                            te.classList.remove("choice");
                            document.querySelectorAll(".choice").forEach(function(btn) {
                                btn.style.backgroundColor = "";
                            })

                            
                        }
                        console.log(addCoor(ship));
                    }
                    }

                   
                }) 
            }
            

        },
        function(error) {
            console.log(error);
            return "error";
        })
        
    let stCood = await st;
    return stCood;
}


async function getOtherCoor(value) {
        console.log(value);
        let coordinates;

        let boxId =`playBox${value[0]}${value[1]}`;
        document.getElementById(boxId).style.backgroundColor = "green";
        let choices = []
            choices.push([value[0], value[1] + ship.length -1]);
            choices.push([value[0] + ship.length -1, value[1]]);
            choices.push([value[0], value[1] - (ship.length -1)]);
            choices.push([value[0] - (ship.length - 1), value[1]]);
            console.log(choices.length);
            let goodChoices = [];
            for (let x = 0; x < 4; x++)
            {
                if (choices[x][0] < 10  && choices[x][0] >= 0 && choices[x][1] >= 0 && choices[x][1] < 10)
                {
                    goodChoices.push(choices[x]);
                }
            }
            console.log(goodChoices);
            for (let x = 0; x < goodChoices.length; x++)
            {
                let id = `playBox${goodChoices[x][0]}${goodChoices[x][1]}`;;
                console.log(id);
                let element = document.getElementById(id);
                element.style.backgroundColor = "yellow";
                element.classList.add("choice");
                element.addEventListener("click", function() {
                    
                    let first = parseInt(element.id[7]) - parseInt(boxId[7]);
                    let second = parseInt(element.id[8]) - parseInt(boxId[8]);
                    let numZero = parseInt(boxId[7]);
                    let numOne = parseInt(boxId[8]);
                    console.log(first);
                    if (first != 0)
                    {
                        if (first < 0)
                        {
                            for (let y = first; y <=0; y++)
                            {
                                let te = document.getElementById(`playBox${numZero+y}${numOne}`);
                            console.log(te);
                            te.style.backgroundColor = "green";
                            te.classList.add("selected");
                            te.classList.remove("choice");
                            document.querySelectorAll(".choice").forEach(function(btn) {
                                btn.style.backgroundColor = "";
                            })
                            
                            }
                            coordinates = addCoor(ship);
                        }
                        else {
                        for (let y = 0; y<=first; y++)
                        {
                            let te = document.getElementById(`playBox${numZero+y}${numOne}`);
                            console.log(te);
                            te.style.backgroundColor = "green";
                            te.classList.add("selected");
                            te.classList.remove("choice");
                            document.querySelectorAll(".choice").forEach(function(btn) {
                                btn.style.backgroundColor = "";
                            })

                           
                        }
                        coordinates = addCoor(ship);
                    }
                    }
                    else if (second != 0){
                        if (second < 0)
                        {
                            for (let y = second; y <=0; y++)
                            {
                                let te = document.getElementById(`playBox${numZero}${numOne+y}`);
                            console.log(te);
                            te.style.backgroundColor = "green";
                            te.classList.add("selected");
                            te.classList.remove("choice");
                            document.querySelectorAll(".choice").forEach(function(btn) {
                                btn.style.backgroundColor = "";
                            })
                           
                            }
                            coordinates = addCoor(ship);
                        }
                        else {
                        for (let y = 0; y<=second; y++)
                        {
                            let te = document.getElementById(`playBox${numZero}${numOne+y}`);
                            console.log(te);
                            te.style.backgroundColor = "green";
                            te.classList.add("selected");
                            te.classList.remove("choice");
                            document.querySelectorAll(".choice").forEach(function(btn) {
                                btn.style.backgroundColor = "";
                            })

                            
                        }
                        coordinates = addCoor(ship);
                    }
                    }

                   
                }) 
            }
            

        


    return coordinates;
}

function addCoor(ship) {
    let info = {ship: ship, coor : []};
    let items = document.querySelectorAll(".selected");
    for (let x = 0; x<items.length; x++){
        let one = parseInt(items[x].id[7]);
        let two = parseInt(items[x].id[8]);
        info.coor.push([one,two]);
    }
    return info;
}


}



