let gameScore = 5;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = ["Rock", "Scissors", "Paper"];
    let ComputerChoice = choice[Math.floor(Math.random() * 3)]
    return ComputerChoice.toLowerCase()
}

const prompt = require("prompt-sync")({sigint:true})

function playerChoice() {
    let playChoice = null;
    while (playChoice === null) {
        playChoice = prompt("Choose from these 3 choices: Rock, Paper, or Scissors?");
    }
    return playChoice.toLowerCase();
}

function playRound(player, computer) {
    if (player === computer) {
        console.log("It's a tie! Play again.");
        playRound(getComputerChoice(), playerChoice)();
    }

    else if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
        playerScore++;
    }

    else {
        computerScore++;
    }
}

function game() {
    for (let i = 0; i < gameScore; i++) {
        playRound(getComputerChoice(), playerChoice());
    }
}

game();