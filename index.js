// This function generates a random choice for the computer
function getComputerChoice() {
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

// This function gets player choice
function getPlayerChoice() {
    let choice = prompt("Choose: Rock Paper Scissors",'');
    while (typeof choice !== "string") {
        choice = prompt("ERROR!! Rock Paper Scissors",'');
    }

    // Make choice case-insensitive
    choice = choice.toLowerCase();

    switch (choice) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            console.log("Invalid choice. Player choice will be rock.");
            return "rock";
    }
}

// This function decides who is the winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "This round is draw!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        return `Player wins this round! ${playerSelection} beats ${computerSelection}`;
    }
    return `Computer wins this round! ${computerSelection} beats ${playerSelection}`;
}

// This function generates a game of 5 rounds and announce the winner
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection,computerSelection);

        // Announce round winner
        console.log(result);

        if (result.charAt(0) === 'P') {
            playerScore++;
        }
        else if (result.charAt(0) === 'C') {
            computerScore++;
        }
    }

    // Announce game winner
    if (playerScore === computerScore) {
        console.log("The game is draw!");
    }
    else if (playerScore > computerScore) {
        console.log("The final winner is: Player!");
    }
    else {
        console.log("The final winner is: Computer!");
    }
}

// Start the game
game();