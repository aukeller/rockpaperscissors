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
    
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "It's a tie.";
        } else if (computerSelection == "paper") {
            return "You Lose! Paper beats rock";
        } else {
            return "You win! Rock beats scissors";
        }

    } else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            return "It's a tie.";
        } else if (computerSelection == "rock") {
            return "You win! Paper beats rock";
        } else {
            return "You lose! Scissors beats paper";
        }
    } else {
        if (computerSelection == "scissors") {
            return "It's a tie.";
        } else if (computerSelection == "paper") {
            return "You Win! Scisssors beats paper";
        } else {
            return "You Lose! Rock beats scissors";
        }
    }
}


function declareWinner(playerScore, computerScore, result) {
    if (playerScore > computerScore) {
        result.textContent = `You win! ${playerScore} to ${computerScore}`;
    } else if (playerScore < computerScore) {
        result.textContent = `Computer wins! ${playerScore} to ${computerScore}`;
    } else {
        result.textContent = `It's a draw. ${playerScore} to ${computerScore}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    let roundResult;

    const btns = document.querySelectorAll('button');
    let playerScoreDOM = document.querySelector('#player-score');
    let computerScoreDOM = document.querySelector('#computer-score');
    let resultDOM = document.querySelector('.result');
    

    btns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            console.log(computerScore);
            const computerSelection = computerPlay();

            roundResult = playRound(e.target.id, computerSelection);
            
            roundResult = roundResult.toLowerCase();
            
            if (roundResult.includes('you win')) {
                playerScore += 1;
                playerScoreDOM.textContent = String(playerScore);
                resultDOM.textContent = "One point to you";
            } else if (roundResult.includes('you lose')) {
                computerScore += 1;
                computerScoreDOM.textContent = String(computerScore);
                resultDOM.textContent = "One point to computer";
            } else {
                resultDOM.textContent = 'Tie';
            }

            if (computerScore == 5 || playerScore == 5) {
                declareWinner(playerScore, computerScore, resultDOM);
                computerScore = 0;
                computerScoreDOM.textContent = computerScore;
                playerScore = 0;
                playerScoreDOM.textContent = playerScore;
            }

            
        });
    });

}


game();