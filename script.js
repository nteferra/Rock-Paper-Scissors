// keep a tally of rounds won
//first to five rounds wins
//return to selection prompt after each round unless a victor emerges

const choiceArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

let wins = 0;
let losses = 0;


function playRound() {
    if ((playerSelectionUC === "Rock" && computerSelection === "Paper") || 
        (playerSelectionUC === "Paper" && computerSelection === "Scissors") ||
        (playerSelectionUC === "Scissors" && computerSelection === "Rock")
    ) {
        losses++;
        return lossPrompt; 
          
    } if ((playerSelectionUC === "Rock" && computerSelection === "Scissors") ||
         (playerSelectionUC === "Paper" && computerSelection === "Rock") ||
         (playerSelectionUC === "Scissors" && computerSelection === "Paper")
    ) {
        wins++;
        return winPrompt

    } else if (playerSelectionUC === computerSelection)  {
        return "Draw! Try again." 
    } else {
        return "error"
    }
}

function game() {
    return wins === 5 || losses === 5
}


    


let playerSelection = prompt("Please choose your fighter");
let playerSelectionUC = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
let computerSelection = getComputerChoice();

let winPrompt = "You win! " + playerSelectionUC + " beats " + computerSelection
let lossPrompt = "You lose! " + computerSelection + " beats " + playerSelectionUC

console.log(playRound())