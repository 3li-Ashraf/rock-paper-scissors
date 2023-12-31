//---------------------------------------------------------------------------------------------------------------------
// Declarations

const roundResultOutput = document.querySelector(".round-result");
const roundDetailsOutput = document.querySelector(".round-details");
const playerChoiceOutput = document.querySelector("#playerChoice");
const playerScoreOutput = document.querySelector("#playerScore");
const computerChoiceOutput = document.querySelector("#computerChoice");
const computerScoreOutput = document.querySelector("#computerScore");
const choiceButtons = document.querySelectorAll(".choice-button");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal-title");
const playAgainButton = document.querySelector(".play-again-button");

let playerScore = 0;
let computerScore = 0;

//---------------------------------------------------------------------------------------------------------------------
// Functions

function play() {
    const playerChoice = this.getAttribute("id");
    const computerChoice = getRandomChoice();

    playerChoiceOutput.textContent = toSymbol(playerChoice);
    computerChoiceOutput.textContent = toSymbol(computerChoice);

    if (playerChoice === computerChoice) {
        roundResultOutput.textContent = "It's a tie!";
        roundDetailsOutput.textContent = `${playerChoice} ties with ${computerChoice}`;
    }
    else if (playerChoice === "rock" && computerChoice === "scissors"
        || playerChoice === "paper" && computerChoice === "rock"
        || playerChoice === "scissors" && computerChoice === "paper") {
        roundResultOutput.textContent = "You won!";
        roundDetailsOutput.textContent = `${playerChoice} beats ${computerChoice}`;
        playerScoreOutput.textContent = ++playerScore;
    }
    else {
        roundResultOutput.textContent = "You lost!";
        roundDetailsOutput.textContent = `${playerChoice} is beaten by ${computerChoice}`;
        computerScoreOutput.textContent = ++computerScore;
    }

    if (playerScore === 5 || computerScore === 5) gameOver();
}

function getRandomChoice() {
    let dice = Math.floor(Math.random() * 3);

    switch (dice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function toSymbol(choice) {
    switch (choice) {
        case "rock": return '✊';
        case "paper": return '✋';
        case "scissors": return '✌️';
    }
}

function gameOver() {
    if (playerScore === 5) {
        modalTitle.textContent = "You won!";
    }
    else {
        modalTitle.textContent = "You lost...";
    }

    modal.showModal();
}

function reset() {
    roundResultOutput.textContent = "Select your choice";
    roundDetailsOutput.textContent = "First to score 5 points wins the game";
    playerChoiceOutput.textContent = '❔';
    playerScoreOutput.textContent = 0;
    computerChoiceOutput.textContent = '❔';
    computerScoreOutput.textContent = 0;
    playerScore = 0;
    computerScore = 0;
}

//---------------------------------------------------------------------------------------------------------------------
//Event listeners 

choiceButtons.forEach(button => {
    button.addEventListener("click", play);
    button.addEventListener("click", () => button.classList.add("pressed"));
    button.addEventListener("transitionend", () => button.classList.remove("pressed"));
});

playAgainButton.addEventListener("click", () => modal.close());

modal.addEventListener("close", reset);

//---------------------------------------------------------------------------------------------------------------------
// Date in footer

const currentYear = document.querySelector("#currentYear");
currentYear.textContent = new Date().getFullYear();