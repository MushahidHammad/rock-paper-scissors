document.addEventListener("DOMContentLoaded", () => { 
    function getComputerChoice() {
        const x = Math.random();
        if (x <= 0.33)
            return "rock";
        else if (x <= 0.66)
            return "paper";
        else return "scissors";
    }
    
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function playRound(humanChoice, computerChoice) {

    const roundResult = document.querySelector("#round-result");
    const gameScore = document.querySelector("#game-score");

    if (gameOver) return;

    if(humanChoice === computerChoice) {
        roundResult.textContent = `It's a tie! Both chose ${humanChoice}.`;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    }
    else {
        computerScore++
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
    gameScore.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;


    if (humanScore ===5) {
        gameScore.textContent = `You won the game! Final score: You ${humanScore} - ${computerScore} Computer`;
        gameOver = true;
    } 
    else if (computerScore === 5) {
        gameScore.textContent = `Computer won the game! Final score: You ${humanScore} - ${computerScore} Computer`;
        gameOver = true;
    }
}

    document.querySelector("#rock").addEventListener("click", () => {
        playRound("rock",getComputerChoice());
    })

    document.querySelector("#paper").addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    })

    document.querySelector("#scissors").addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
});