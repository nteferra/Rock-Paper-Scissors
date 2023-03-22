const choiceArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}


function playRound() {
    if (playerSelectionUC === "ROCK" && computerSelection === "Paper") {
        return ("You lose! Paper beats Rock.")
    } else if (playerSelectionUC === "ROCK" && computerSelection === "Scissors") {
        return ("You win! Rock beats Scissors.")
    } else if (playerSelectionUC === "ROCK" && computerSelection === "Rock") {
        return ("Draw! Try again.")
    } else if (playerSelectionUC === "PAPER" && computerSelection === "Paper") {
        return ("Draw! Try again")    
    } else if (playerSelectionUC === "PAPER" && computerSelection === "Rock") {
        return ("You win! Paper beats Rock.")    
    } else if (playerSelectionUC === "PAPER" && computerSelection === "Scissors") {
        return ("You lose! Scissors beats paper.")    
    } else if (playerSelectionUC === "SCISSORS" && computerSelection === "Rock") {
        return ("You lose! Rock beats Scissors.")    
    } else if (playerSelectionUC === "SCISSORS" && computerSelection === "Paper") {
        return ("You win! Scissors beats Paper.")    
    } else if (playerSelectionUC === "SCISSORS" && computerSelection === "Scissors") {
        return ("Draw! Try again") 
    } else  {
        return "error" 
    }
}

let playerSelection = "sCiSSors";
let playerSelectionUC = playerSelection.toUpperCase();
let computerSelection = getComputerChoice();
console.log(playRound())