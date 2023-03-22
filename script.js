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
    if (playerSelectionUC === "Rock" && computerSelection === "Paper") {
        return lossPrompt
        // return to prompt
    } else if (playerSelectionUC === "Rock" && computerSelection === "Scissors") {
        return winPrompt
    } else if (playerSelectionUC === "Rock" && computerSelection === "Rock") {
        return ("Draw! Try again.")
    } else if (playerSelectionUC === "Paper" && computerSelection === "Paper") {
        return ("Draw! Try again")    
    } else if (playerSelectionUC === "Paper" && computerSelection === "Rock") {
        return winPrompt    
    } else if (playerSelectionUC === "Paper" && computerSelection === "Scissors") {
        return lossPrompt   
    } else if (playerSelectionUC === "Scissors" && computerSelection === "Rock") {
        return lossPrompt   
    } else if (playerSelectionUC === "Scissors" && computerSelection === "Paper") {
        return winPrompt   
    } else if (playerSelectionUC === "Scissors" && computerSelection === "Scissors") {
        return ("Draw! Try again") 
    } else  {
        return "error" 
    }
}

function game() {
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
}

let playerSelection = prompt("Please choose your fighter");
let playerSelectionUC = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
let computerSelection = getComputerChoice();

let winPrompt = "You win! " + playerSelectionUC + " beats " + computerSelection
let lossPrompt = "You lose! " + computerSelection + " beats " + playerSelectionUC

console.log(playRound())