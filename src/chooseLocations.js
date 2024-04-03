export default function chooseLocations() {
document.querySelectorAll(".chooseBtn").forEach(function(btn) {
    btn.addEventListener("click", function(event){
        event.preventDefault();
        let ship = btn.id.slice(3);
        //choosePosition(ship);
        const st = new Promise(function(resolve, reject) {
            document.querySelectorAll(".boat").forEach(function(btn) {
                btn.addEventListener("click", function() {
                    btn.style.backgroundColor =  "green";
                    let cood = [parseInt(btn.id[7]),parseInt(btn.id[8])];
                    resolve(cood);
                })
            });
            setTimeout(function(){reject("gimp");}, 3000);
        });
        st.then(
            function(value){
            console.log(value);
            },
            function(error) {
                console.log(error);
            })
        
    });
   
})

function choosePosition(ship) {
    console.log(ship);
    document.querySelectorAll(".boat").forEach(function(btn) {
        btn.addEventListener("click", function() {
            btn.style.backgroundColor =  "green";
            console.log(btn.id);
            let cood = [parseInt(btn.id[7]),parseInt(btn.id[8])];
            console.log(cood);
        })
    })
    
}


}



