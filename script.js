const choiceArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}


