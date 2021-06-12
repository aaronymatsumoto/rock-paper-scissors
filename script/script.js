// Randomly return 'Rock' 'Paper' or 'Scissors'
function computerPlay() {
    // Create a list with rock paper and scissors
    const results = ["Rock", "Paper", "Scissors"];
    // Get a random integer between 0 and 3
    const rndInt = Math.floor(Math.random() * 3);
    // Return either rock paper or scissors based on the index of results and the random number
    return results[rndInt];
}

// Play a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    // Formats the playerSelection to have the first letter uppercase and the remainder lowercase
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (playerSelection == computerSelection) {
        return 'Tie Game!'
    } 
    else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
                (playerSelection == 'Paper' && computerSelection == 'Rock') ||
                (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`; 
    }
}

// Play 5 rounds of rock paper scissors
function game() {
    return;
}

const playerSelection = 'roCK';
const computerSelection = 'paper';

playRound(playerSelection, computerSelection)

