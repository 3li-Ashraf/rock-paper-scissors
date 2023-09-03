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

choiceButtons.forEach(button => {
    button.addEventListener("click", play);
});

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
    else{
        roundResultOutput.textContent = "You lost!";
        roundDetailsOutput.textContent = `${playerChoice} is beaten by ${computerChoice}`;
        computerScoreOutput.textContent = ++computerScore;
    }

    if(playerScore === 5 || computerScore === 5) gameOver();
}

function getRandomChoice() {
    let dice = 0;
    while (dice === 0) {
        dice = Math.floor(Math.random() * 10);
    }

    // Consider [1,2,3] be rock / [4,5,6] be paper / [7,8,9] be scissors
    if (dice <= 3) {
        return "rock";
    }
    else if (dice <= 6) {
        return "paper";
    }
    return "scissors";
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

playAgainButton.addEventListener("click", () => modal.close());

modal.addEventListener("close", reset);
modal.addEventListener("cancel", reset);

function reset() {
    playerScore = 0;
    computerScore = 0;
    roundResultOutput.textContent = "Select your choice";
    roundDetailsOutput.textContent = "First to score 5 points wins the game";
    playerChoiceOutput.textContent = '❔';
    playerScoreOutput.textContent = 0;
    computerChoiceOutput.textContent = '❔';
    computerScoreOutput.textContent = 0; 
}

// Button pressed effect
choiceButtons.forEach(button => {
    button.addEventListener("click", () => button.classList.add("pressed"));
});

choiceButtons.forEach(button => {
    button.addEventListener("transitionend", () => button.classList.remove("pressed"));
});

// Date in footer
const currentYear = document.querySelector("#currentYear");
currentYear.textContent = new Date().getFullYear();