const choiceArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}


function playRound() {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return ("You lose! Paper beats Rock.")
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return ("You win! Rock beats Scissors.")
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return ("Draw! Try again.")
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return ("Draw! Try again")    
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return ("You win! Paper beats Rock.")    
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return ("You lose! Scissors beats paper.")    
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return ("You lose! Rock beats Scissors.")    
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return ("You win! Scissors beats Paper.")    
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return ("Draw! Try again") 
    } else  {
        return "error" 
    }
}

let playerSelection = "Scissors";
let computerSelection = getComputerChoice();
console.log(playRound())