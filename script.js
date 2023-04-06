//Generate random choice for computer
const choiceArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

//keep count of score
let wins = 0;
let losses = 0;
let draws = 0;

let playerSelection
let scoreboardEl = document.querySelector('#scoreboard');
let tally = document.querySelector('#tally');
let results = document.querySelector('#results');
let winnerEl = document.querySelector('#winner');

const playAgain = document.createElement('button');
playAgain.setAttribute('id', 'playAgain');

winnerEl.textContent = "The battle awaits a victor"

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    clickChoice(rock);
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    clickChoice(paper)
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    clickChoice(scissors)
});

function clickChoice(selection) {
    if (selection === rock) {
        playerSelection = 'rock';
        playRound();
    } else if (selection === paper) {
        playerSelection = 'paper';
        playRound();
    } else if (selection === scissors) {
        playerSelection = 'scissors';
        playRound();
    } else {
        return error
    }
}
// functio to reset the game
function reset() {
    return wins = 0, losses = 0, draws = 0, 
    winnerEl.textContent = "The battle awaits a victor",
    tally.textContent = "   wins: " + wins + "   losses: " + losses + "   draws: " + draws,
    results.textContent = "";
    
}

function declareAWinner() {
    if (wins == 5) {
        winnerEl.textContent = "Congratulations! You beat the computer.";
    } else if (losses == 5) {
        winnerEl.textContent = "You lost to the computer. Better luck next time!";
    } else {
        return winnerEl;
    }
    scoreboardEl.appendChild(playAgain);
    playAgain.textContent = "Play Again?"
    playAgain.addEventListener('click', () => {
        reset()
    })

}

//main function for playing a round of the game
function playRound() {
    let computerSelection = getComputerChoice();
    let winPrompt = "You win! " + playerSelection + " beats " + computerSelection.toLowerCase();
    let lossPrompt = "You lose! " + computerSelection.toLowerCase() + " beats " + playerSelection;
    if ((playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") || 
        (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock")
    ) {
        losses++;
        results.textContent = lossPrompt; 
          
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") ||
         (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") ||
         (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper")
    ) {
        wins++;
        results.textContent = winPrompt;

    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase())  {
        draws++;
        results.textContent = "Draw! Try again."; 
        
    } else {
        return "error";
    } if (wins == 5 || losses == 5) {
        declareAWinner()
    }
    tally.textContent = "   wins: " + wins + "   losses: " + losses + "   draws: " + draws;

}


//game function that plays 5 rounds and declares a winner
// function game() {
//   //Play game 5 times
//     for (let i = 0; i < 5; i++) {
//         // Call playRound function, passing in newly returned values
//         // from the playerPlay and computerPlay functions
//         let currentRound = playRound()
//         console.log(currentRound)
//     }if (wins > losses) {
//         console.log("Congratulations! You beat the computer")
//         result()
//     } else if (losses > wins) {
//         console.log("You lost to the computer. Better luck next time!")
//         result()
//     } else {
//         console.log("The battle has ended in a stalemate")
//         result()
//     }
// }



