//Generate random choice for computer
const choiceArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

//keep count of score
let wins = 0;
let losses = 0;
let draws = 0

//main function for playing a round of the game
function playRound() {
    let playerSelection = prompt("Please choose your weapon");
    let computerSelection = getComputerChoice();
    let winPrompt = "You win! " + playerSelection + " beats " + computerSelection;
    let lossPrompt = "You lose! " + computerSelection + " beats " + playerSelection;
    if ((playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") || 
        (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock")
    ) {
        losses++;
        return lossPrompt; 
          
    } if ((playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") ||
         (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") ||
         (playerSelection.toLowerCase === "scissors" && computerSelection === "Paper")
    ) {
        wins++;
        return winPrompt;

    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase())  {
        draws++;
        return "Draw! Try again." 
    } else {
        return "error"
    }
    
}
//game function that plays 5 rounds and declares a winner
function game() {
  //Play game 5 times
    for (let i = 0; i < 5; i++) {
        // Call playRound function, passing in newly returned values
        // from the playerPlay and computerPlay functions
        let currentRound = playRound()
        console.log(currentRound)
    }if (wins > losses) {
        console.log("Congratulations! You beat the computer")
        result()
    } else if (losses > wins) {
        console.log("You lost to the computer. Better luck next time!")
        result()
    } else {
        console.log("The battle has ended in a stalemate")
        result()
    }
}

function result() {
    console.log("   wins: " + wins)
    console.log("   losses: " + losses)
    console.log("   draws: " + draws)
}

game()