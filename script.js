function getComputerChoice() {
    const x = Math.random();
    if (x <= 0.33)
        return "rock";
    else if (x <= 0.66)
        return "paper";
    else 
        return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper or scissors:").toLowerCase();
    if(["rock", "paper", "scissors"].includes(choice)) {
        return choice;
    } else {
        alert("Invalid choice, try again");
        return getHumanChoice();
    }
}
    
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const winMessage = `You win! ${humanChoice} beats ${computerChoice}`;
    const loseMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    const tieMessage = "It's a tie!";

    if(humanChoice === computerChoice) {
        console.log(tieMessage);
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(winMessage);
    }
    else {
        computerScore++
        console.log(loseMessage);
    }
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`You won the game! Final score: ${humanScore}-${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`you lost the game! Final score: ${humanScore}-${computerScore}`);
    } else {
        console.log(`It's a tie. Final score: ${humanScore}-${computerScore}`);
    }
}

playGame();
    