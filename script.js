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
let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;

const humanScoreDisplay = document.querySelector(".humanScore");
const computerScoreDisplay = document.querySelector(".computerScore");
const currentRoundDisplay = document.querySelector(".currentRound");
const humanChoiceDisplay = document.querySelector(".humanChoice");
const computerChoiceDisplay = document.querySelector(".computerChoice");
const finalMessage = document.querySelector(".finalMessage");
const resultBox = document.querySelector(".resultBox");

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", e => {
        roundsPlayed++;
        const humanChoice = e.target.innerText;
        playRound(humanChoice);

        if (roundsPlayed >= 5) {
            if (humanScore > computerScore) {
                finalMessage.innerText = "🎉 You won the game!";
            } else if (computerScore > humanScore) {
                finalMessage.innerText = "😔 Computer won the game!";
            } else {
                finalMessage.textContent = "🤝 It's a tie!";
            }
            console.log("Final Score:");
            console.log(`Human: ${humanScore}`);
            console.log(`Computer: ${computerScore}`);
            resultBox.classList.remove("hidden");
            document.querySelectorAll("button").forEach(b => b.disabled = true);
        }
    });
});

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    computerChoiceDisplay.innerText = "Computer Choice: " + computerChoice;
    humanChoiceDisplay.innerText = "Human Choice: " + humanChoice;

    if (computerChoice === humanChoice) {
        currentRoundDisplay.innerText = "Current Round: Draw"; 
    } else if (
        (computerChoice === `Rock` && humanChoice === `Scissors`) ||
        (computerChoice === `Paper` && humanChoice === `Rock`) ||
        (computerChoice === `Scissors` && humanChoice === `Paper`)
    ) {
        currentRoundDisplay.innerText = "Current Round: Computer Won";
        computerScore++;
    } else {
        currentRoundDisplay.innerText = "Current Round: Human Won";
        humanScore++;
    }

    humanScoreDisplay.innerText = "Human Score: " + humanScore;
    computerScoreDisplay.innerText = "Computer Score: " + computerScore;
}
