let computerPlay = () => {
    return Math.floor(Math.random() * 3) + 1;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'It\'s a tie';
    }
    else if (playerSelection == 3 && computerSelection == 1) {
        computerScore++;
        return 'You lose! Rock beats scissors';
    }
    else if (playerSelection == 1 && computerSelection == 2) {
        computerScore++;
        return 'You lose! Paper beats rock';
    }
    else if (playerSelection == 2 && computerSelection == 3) {
        computerScore++;
        return 'You lose! Scissors beat paper';
    }
    else if (playerSelection == 1 && computerSelection == 3) {
        playerScore++;
        return 'You win! Rock beats scissors';
    }
    else if (playerSelection == 2 && computerSelection == 1) {
        playerScore++;
        return 'You win! Paper beats rock';
    }
    else if (playerSelection == 3 && computerSelection == 2) {
        playerScore++;
        return 'You win! Scissors beat paper';
    }

}

const selections = document.createElement('h2');
const outcome = document.createElement('h1');
const result = document.createElement('h2');
const winner = document.createElement('h2');
const container = document.querySelector('#container');
function displayOutcome(a) {
    outcome.textContent = a;
    result.textContent = `Your score: ${playerScore} Computer\'s score: ${computerScore}`;
    container.appendChild(result);
    container.appendChild(outcome);
    if (playerScore == 5) {
        winner.textContent = "You won the match!";
        container.appendChild(winner);
    }
    else if (computerScore == 5) {
        winner.textContent = "Computer won the match D:";
        container.appendChild(winner);
    }
    else {
        winner.textContent = ""
        container.appendChild(winner);
    }

}


const buttons = document.querySelectorAll('.buttons');
buttons.forEach(button => button.addEventListener('click', function (e) {
    const playerSelection = e.target.getAttribute('id');
    const computerSelection = computerPlay();
    selections.textContent = `Computer\'s choice :${computerSelection} Player\'s choice: ${playerSelection}`;
    container.appendChild(selections);
    const a = playRound(playerSelection, computerSelection);
    displayOutcome(a);
}))