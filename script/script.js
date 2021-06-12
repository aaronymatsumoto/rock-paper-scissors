// Get a selection from the player that is either 'Rock' 'Paper' or 'Scissors'
function getPlayerSelection() {
    let playerSelection;
    do
    {
        playerSelection = prompt("Rock, Paper, or Scissors?", "Enter Rock Paper or Scissors");
        // Formats the playerSelection to have the first letter uppercase and the remainder lowercase
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    }
    while (playerSelection != 'Rock' && playerSelection != 'Paper' && playerSelection != 'Scissors')
    return playerSelection;
}

// Get a number of rounds between 1 and 10 that is a whole number
function getNumberOfRounds() {
    let numberOfRounds;
    do
    {
        numberOfRounds = prompt("How many rounds of Rock Paper Scissors would you like to play?", "Enter a whole number");
        numberOfRounds = parseInt(numberOfRounds, 10);
    }
    while (numberOfRounds < 1 || numberOfRounds > 10)
    return numberOfRounds;
}

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
    // Check for a tie game if playerSelection and computerSelection match
    if (playerSelection == computerSelection) {
        return 'Tie Game!'
    } 
    // Check for cases where Player wins
    else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
                (playerSelection == 'Paper' && computerSelection == 'Rock') ||
                (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    // Otherwise player loses
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`; 
    }
}

// Takes the number of wins from player and computer and determines a final winner
function getWinner(playerWins, computerWins) {
    if (playerWins == computerWins) {
        return `It's a Tie! Result is Player ${playerWins} to Computer ${computerWins}.`;
    }
    else if (playerWins > computerWins) {
        return `You Win! Result is Player ${playerWins} to Computer ${computerWins}.`;
    }
    else {
        return `You Lose! Result is Player ${playerWins} to Computer ${computerWins}.`;
    }
}

// Play a given number of rounds between 1 and 10 of rock paper scissors
function game() {
    let playerSelection;
    let computerSelection;
    let numRounds = getNumberOfRounds();
    let playerWins = 0;
    let computerWins = 0;
    for (i = 0; i < numRounds; i++) {
        playerSelection = getPlayerSelection();
        computerSelection = computerPlay();
        roundResult = playRound(playerSelection, computerSelection);
        console.log(`Round ${i + 1}: ` + roundResult);
        if (roundResult.includes("Win"))
        {
            playerWins++;
        }
        else if(roundResult.includes("Lose"))
        {
            computerWins++;
        }
    }
    console.log(getWinner(playerWins, computerWins));
    return;
}

//console.log(playRound(playerSelection, computerSelection));
console.log(game());