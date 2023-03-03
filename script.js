function getComputerChoice(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const array = ["Rock", "Paper", "Scissors"];

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.substr(0).toUpperCase();
    computerSelection = computerSelection.substr(0).toUpperCase();

    if(playerSelection === "ROCK"){
        if(computerSelection === "SCISSORS"){
            return true;
        }else if(computerSelection === "PAPER"){
            return false;
        }else{
            return false;
        }
    }
    else if(playerSelection === "PAPER"){
        if(computerSelection === "SCISSORS"){
            return false;
        }else if(computerSelection === "ROCK"){
            return true;
        }else{
            return false;
        }
    }
    else if(playerSelection === "SCISSORS"){
        if(computerSelection === "PAPER"){
            return true;
        }else if(computerSelection === "ROCK"){
            return false;
        }else{
            return false;
        }
    }
}

let playerPoint = 0;
let computerPoint = 0;

function game(playerTurn){
    // let playerTurn = prompt("select one among rock, paper, scissor");

    let gameResult = playRound(playerTurn, getComputerChoice(array))
    if(gameResult){
        playerPoint += 1;
        p.textContent = playerPoint;
        console.log("You Won!");
    }else{
        computerPoint += 1;
        c.textContent = computerPoint;
        console.log("You Lose");       
    }

    if(playerPoint == 5){
        winner.textContent = "Player Won!";
        return;
    }else if(computerPoint == 5){
        winner.textContent = "Computer Won";
    }
}

let rock = document.querySelector("#rock");
rock.addEventListener('click', () =>  game("rock"));

let paper = document.querySelector("#paper");
paper.addEventListener('click', () => game("paper"));

let scissor = document.querySelector("#scissor");
scissor.addEventListener('click', () =>  game("scissor"));

const display = document.querySelector(".display");
display.style.border = "2px solid black";
display.style.display = "flex";
display.style.margin = "10px 100px"

const player = document.querySelector(".player");
player.style.display = "flex";
player.style.flexDirection = "column"
player.style.flex = "auto";
player.style.alignItems = "center";
player.style.borderRight = "2px solid black"

const computer = document.querySelector(".computer");
computer.style.display = "flex";
computer.style.flexDirection = "column"
computer.style.flex = "auto";
computer.style.alignItems = "center"

let p = document.createElement("p");
p.textContent = playerPoint;
player.appendChild(p);

let c = document.createElement("p");
c.textContent = computerPoint;
computer.appendChild(c);

let winner = document.querySelector("#winner");