let score = document.querySelectorAll(".choise");
let msg=document.querySelector("#message");

let userscore= document.querySelector("#user-score");
let pcscore= document.querySelector("#pc-score");

let userScore=0;
let pcScore=0;

score.forEach((val) => {
    val.addEventListener("click", () => {
        let userchoise = val.getAttribute("id");
        pcChoise(userchoise);
    })
})

let pcChoise = (userchoise) => {
    let pcarray = ["rock", "paper", "scissor"];
    let PcChoise = pcarray[Math.floor(Math.random() * 3)];
    chooseWin(userchoise, PcChoise);
}

let chooseWin = (userchoise, PcChoise) => {
    console.log(userchoise, PcChoise);
    let winloos = "draw";
    if (userchoise === PcChoise) {
        console.log("it is drow")
    } else if ((userchoise === "rock" && PcChoise === "scissor") || (userchoise === "paper" && PcChoise === "rock") || (userchoise === "scissor" && PcChoise === "paper")) {
        console.log("you win");
        winloos = true;
    } else if ((userchoise === "rock" && PcChoise === "paper") || (userchoise === "paper" && PcChoise === "scissor") || (userchoise === "scissor" && PcChoise === "rock")) {
        console.log("you loos")
        winloos = false;
    }
    changetext(winloos);
}

let changetext = (winloos) => {
    console.log(winloos);
    if(winloos===true){
        msg.innerText="you win"
        msg.style.backgroundColor="green";
    }else if(winloos===false){
        msg.innerText="you loos"
        msg.style.backgroundColor="red";
    }else{
        msg.innerText="its draw try again";
        msg.style.backgroundColor="black";
        msg.style.color="white";
    }
  updateScore(winloos);
}

let updateScore=(winloos)=>{
    if(winloos==true){
        userscore.innerText=++userScore;
    }else if(winloos==false){
        pcscore.innerText=++pcScore;
    }
}