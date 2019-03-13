document.getElementById("rock").onclick = userChoseRock;
document.getElementById("paper").onclick = userChosePaper;
document.getElementById("scissors").onclick = userChoseScissors;

function userChoseRock() {
    const computerSelection = computerPlay();
    console.log(playRound('rock', computerSelection));
}

function userChosePaper() {
    const computerSelection = computerPlay();
    console.log(playRound('paper', computerSelection));
}

function userChoseScissors() {
    const computerSelection = computerPlay();
    console.log(playRound('scissors', computerSelection));
}

var introScreen = document.getElementById('introScreen');
var startBtn = document.getElementById('startBtn');


function initialize() {
    introScreen.style.display = 'none';
}

let playerScore = 0;
let computerScore = 0;
let draws = 0;

function computerPlay() {
    let random = Math.floor(Math.random() * 3) + 1;

    switch (random) {
        case 1:
            random = 'rock';
            break;
        case 2:
            random = 'paper';
            break;
        case 3:
            random = 'scissors';
            break;
    }
    return random;
}




function playRound(playerSelection, computerSelection) {
    let playerChoiceCapitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1);
    let computerChoiceCapitalized = computerSelection.charAt(0).toUpperCase() + computerSelection.substr(1);
    
    const roundWinner = document.getElementById('round-winner');
    const roundScore = document.getElementById('round-score');
    
    while (playerScore < 5 && computerScore < 5) {
        if (playerSelection == computerSelection) {
            draws++;
            roundScore.textContent = `Player score ${playerScore} - ${computerScore} Dragon score`
            return roundWinner.textContent = "It's a Draw.";
        } else if (playerSelection == "scissors" && computerSelection == 'paper' || playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock") {
            playerScore++;
            roundScore.textContent = `Player score ${playerScore} - ${computerScore} Dragon score`
            return roundWinner.textContent = "Player wins!";
        } else {
            computerScore++;
            roundScore.textContent = `Player score ${playerScore} - ${computerScore} Dragon score`

            return roundWinner.textContent = "Computer wins!";
        }
    }
    
    
    results();

    
    function results() {

        const finalScore = document.getElementById('final-score');
        const finalWinner = document.getElementById('final-winner');
        finalWinner.textContent = `Computer Score: ${computerScore} - Player Score: ${playerScore} - Draws: ${draws}.`;
        if (computerScore > playerScore) {
            return finalScore.textContent = "You lose! Computer wins the game!";
        } else if (computerScore == playerScore) {
            return finalScore.textContent = "Friendship has won";
        } else {
            return finalScore.textContent = "You win the game! Computer loses!";
        }
    }

}
