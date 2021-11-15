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

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));