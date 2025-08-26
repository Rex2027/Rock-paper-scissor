function getComputerChoice() {
    let value = Math.floor(Math.random() * 100) - 1;
    if (value >= 0 && value <= 32) {
        return `Rock`;
    }
    else if (value >= 33 && value <= 65) {
        return `Paper`;
    }
    else {
        return `Scissors`;
    }
}

function getHumanChoice() {
    let value = prompt("Rock, Paper, or Scissors?");
    value = value.trim().toLowerCase();
    if (value === "rock") return "Rock";
    if (value === "paper") return "Paper";
    if (value === "scissors") return "Scissors";
    return "Invalid"; 
}

// if (getComputerChoice() === getHumanChoice()) {
//     console.log("Draw");
// } else if (
//     (getComputerChoice() === `Rock` && getHumanChoice() === `Scissor`) ||
//     (getComputerChoice() === `Paper` && getHumanChoice() === `Rock`) ||
//     (getComputerChoice() === `Scissor` && getHumanChoice() === `Paper`)
// ) {
//     console.log("Computer won");
//     computerScore += 1;
// } else {
//     console.log("Human won");
//     humanScore += 1;
// }

function playRound() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

         if (humanChoice === "Invalid") {
            console.log("Invalid input! Try again.");
            i--; // Don't count this round
            continue;
        }

        console.log(`Round ${i+1}:`);
        console.log(`Computer: ${computerChoice}`);
        console.log(`Human: ${humanChoice}`);

        if (computerChoice === humanChoice) {
            console.log("Draw");
        } else if (
            (computerChoice === `Rock` && humanChoice === `Scissor`) ||
            (computerChoice === `Paper` && humanChoice === `Rock`) ||
            (computerChoice === `Scissor` && humanChoice === `Paper`)
        ) {
            console.log("Computer won");
            computerScore++;
        } else {
            console.log("Human won");
            humanScore++;
        }
    }

    console.log("Final score:");
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game is a draw!");
    }
}

playRound();