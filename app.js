const computerOptions = ['Rock', 'Paper', 'Scissors'];

const computerChoice = () => {
    const randomNumber = Math.round(Math.random() * 2);
    return computerOptions[randomNumber];
}

const computerChoiceOutput = document.getElementById('computer-choice-output');
const playerOptions = document.querySelectorAll('.choice-button');
const playerChoiceOutput = document.getElementById('user-choice-output');

const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const winner = document.getElementById('winner');
let computerScore = parseInt(computerScoreElement.textContent);
let playerScore = parseInt(playerScoreElement.textContent);

const incrementComputerScore = () => {
    computerScore++;
    computerScoreElement.textContent = computerScore;
}

const incrementPlayerScore = () => {
    playerScore++;
    playerScoreElement.textContent = playerScore;
}

const updateScoreAndWinner = () => {
    const playerChoice = playerChoiceOutput.textContent;
    const computerChoice = computerChoiceOutput.textContent;
    if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        winner.textContent = 'You win!';
        incrementPlayerScore();
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        winner.textContent = 'You win!';
        incrementPlayerScore();
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        winner.textContent = 'You win!';
        incrementPlayerScore();
    } else if (computerChoice === 'Rock' && playerChoice === 'Scissors') {
        winner.textContent = 'Computer wins!';
        incrementComputerScore();
    } else if (computerChoice === 'Paper' && playerChoice === 'Rock') {
        winner.textContent = 'Computer wins!';
        incrementComputerScore();
    } else if (computerChoice === 'Scissors' && playerChoice === 'Paper') {
        winner.textContent = 'Computer wins!';
        incrementComputerScore();
    } else {
        winner.textContent = 'Draw!';
    }
}

playerOptions.forEach((button) => {
    button.addEventListener('click', function() {
        const selectedValue = button.textContent;
        if (selectedValue) {
            playerChoiceOutput.textContent = selectedValue;
            computerChoiceOutput.textContent = computerChoice();
            updateScoreAndWinner();
        }
    });
});