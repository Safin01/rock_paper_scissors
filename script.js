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


function game(){
    
    for(let i = 1; i<=5; i++){
        let playerTurn = prompt("select one among rock, paper, scissor");
        let gameResult = playRound(playerTurn, getComputerChoice(array))
        if(gameResult){
            console.log("You Won!");
        }else{
            console.log("You Lose");
        }
    }
}

game();


