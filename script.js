const choiceArray = ["Rock", "Paper", "Scissors"];
const computerChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];

function getComputerChoice() {
    return computerChoice
}


console.log(getComputerChoice(choiceArray));