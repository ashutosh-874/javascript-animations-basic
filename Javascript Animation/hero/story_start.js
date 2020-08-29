//Setup website here
let hero = document.querySelector("#hero");
let villain = document.querySelector("#villain");
let lightning = document.querySelector("#lightning");

//Setup animation code here
let lightningStart = {"left": "290px"};
let lightningEnd = {"left": "900px"};
let options = {"duration": 1000};
//Run animation code here
// lightning.animate([lightningStart,lightningEnd],options);


//Challenge1
// reverse bolt
// lightningStart = {"left": "900px"};
// lightningEnd = {"left": "290px"};
// options = {"duration": 1000};
// lightning.animate([lightningStart,lightningEnd],options);


//challenge 2
// bolt missed the villain

// lightningStart = {"left": "290px"};
// lightningEnd = {"left": "900px","top":"0px"};
// options = {"duration": 1000};
// lightning.animate([lightningStart,lightningEnd],options);


//ch 3
//replace hero with diff image 


let hitTheVillain = () =>{
    let villainStart = {
        transform: 'rotate(0deg)',
        opacity:100
    };
    let villainEnd = {
        transform: 'rotate(1000deg)',
        opacity:0
    };
    let options = {"duration":1500};
    villain.animate([villainStart,villainEnd],options);

    //challenge
    // let villainStart = {
    //     width:villain.width,
    //     opacity:100
    // };
    // let villainEnd = {
    //     width:0,
    //     opacity:0
    // };
    // let options = {"duration":1500};
    // villain.animate([villainStart,villainEnd],options);


}

lightning.animate([lightningStart,lightningEnd],options).onfinish = hitTheVillain;