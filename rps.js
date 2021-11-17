function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === "rock") {
        if (computerSelection === 'rock') {
            return "It's a tie.";
        } else if (computerSelection === "paper") {
            return "You Lose! Paper beats rock";
        } else {
            return "You win! Rock beats scissors";
        }

    } else if (playerSelection === "paper") {
        if (computerSelection === 'paper') {
            return "It's a tie.";
        } else if (computerSelection === "rock") {
            return "You win! Paper beats rock";
        } else {
            return "You lose! Scissors beats paper";
        }
    } else {
        if (computerSelection === 'scissors') {
            return "It's a tie.";
        } else if (computerSelection === "paper") {
            return "You Win! Scisssors beats paper";
        } else {
            return "You Lose! Rock beats scissors";
        }
    }
}

function declareWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log(`You win the game! ${playerScore} to ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lose the game! ${playerScore} to ${computerScore}`);
    } else {
        console.log(`It's a draw. ${playerScore} to ${computerScore}`);
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;

    while (round <= 5) {
        const playerSelection = prompt("Rock, paper, or scissors?");
        const computerSelection = computerPlay();

        let result = playRound(playerSelection, computerSelection);

        console.log(result);

        result = result.toLowerCase();
        if (result.includes('you win')) {
            playerScore += 1;
            console.log("One point to you");
        } else if (result.includes('you lose')) {
            computerScore += 1;
            console.log("One point to computer");
        }

        round++;
    }

    declareWinner(playerScore, computerScore);

}

game();