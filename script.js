let playerPoint = 0;
let computerPoint = 0;
const array = ["Rock", "Paper", "Scissors"];
let flag = false;
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let again = document.querySelector("#playAgain");
let yes = document.getElementById("yes");
let no = document.getElementById("no");

function getComputerChoice(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

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


function game(playerTurn){

    let gameResult = playRound(playerTurn, getComputerChoice(array))
    if(gameResult){
        if(flag == false) playerPoint += 1;
        p.textContent = playerPoint;
        console.log("You Won!");
    }else{
        if(flag == false) computerPoint += 1;
        c.textContent = computerPoint;
        console.log("You Lose");       
    }
    if(playerPoint === 5){
        flag = true;
        winner.textContent = "Player Won!";
    }else if(computerPoint === 5){
        flag = true;
        winner.textContent = "Computer Won!";
    }
    
    if(flag == true){
        document.getElementById("playAgain").style.display = "block";
        yes.addEventListener("click", () => {
            playerPoint = 0;
            computerPoint = 0;
            flag = false;
            p.textContent = '0';
            c.textContent = '0';
            winner.textContent = '';
            document.getElementById("playAgain").style.display = "none";
        });
        no.addEventListener("click", () => {
            document.getElementById("playAgain").style.display = "none";
        });
    }

   

}




rock.addEventListener('click', () =>  game("rock"));
paper.addEventListener('click', () => game("paper"));
scissor.addEventListener('click', () =>  game("scissor"));

const display = document.querySelector(".display");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
let p = document.createElement("p");
p.textContent = playerPoint;
player.appendChild(p);

let c = document.createElement("p");
c.textContent = computerPoint;
computer.appendChild(c);
const winner = document.getElementById("winner");