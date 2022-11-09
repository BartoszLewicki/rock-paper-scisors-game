"use strict"



let a = 0;
let b = 0;

const button1 = document.querySelector(".button-1");
const button2 = document.querySelector(".button-2");
const button3 = document.querySelector(".button-3");
const picture1 = document.querySelector(".box-1");
const picture2 = document.querySelector(".box-2");
const info = document.querySelector(".info");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const restart = document.querySelector(".restart");


button1.addEventListener("click", () => {
    console.log("clicked");
    logic(0);
    picture1.classList.add("rock");
})

button2.addEventListener("click", () => {
    console.log("clicked");
    logic(1);
    picture1.classList.add("paper");
})


button3.addEventListener("click", () => {
    console.log("clicked");
    logic(2);
    picture1.classList.add("scisors");
})

restart.addEventListener("click", () =>{
    a=0;
    b=0;
    player1.textContent = a;
    player2.textContent = b;
    info.textContent = "START";

})

const logic = function(number){
    picture1.classList.remove("rock","paper","scisors");
    picture2.classList.remove("rock","paper","scisors");
    let random = Math.floor(Math.random()*3)
    if(number == random){
        console.log("draw")
        info.textContent = "DRAW";
    }else if((number == 0 && random ==2) || (number == 1 && random ==0) || (number == 2 && random ==1)){
        console.log("win")
        info.textContent = "WIN";
        a++;
        player1.textContent = a;
    }else{
        console.log("lose")
        info.textContent = "LOSE";
        b++;
        player2.textContent = b;
    }

    if(random==0){
        picture2.classList.add("rock");
    }else if(random==1){
        picture2.classList.add("paper");
    }else{
        picture2.classList.add("scisors");
    }
}