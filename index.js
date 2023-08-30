function getComputerSelection() {
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

function getPlayerSelection() {
    let playerSelection = prompt("Choose: Rock / Paper / Scissors",'');
    while (typeof playerSelection !== "string") {
        playerSelection = prompt("ERROR!! Choose: Rock / Paper / Scissors",'');
    }

    playerSelection = playerSelection.toLowerCase();

    switch (playerSelection) {
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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "This round is draw!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper") {
        return `Player wins this round! ${playerSelection} beats ${computerSelection}`;
    }
    
    return `Computer wins this round! ${computerSelection} beats ${playerSelection}`;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerSelection();
        let computerSelection = getComputerSelection();
        let roundWinner = playRound(playerSelection,computerSelection);

        console.log(roundWinner);

        if (roundWinner.charAt(0) === 'P') {
            playerScore++;
        }
        else if (roundWinner.charAt(0) === 'C') {
            computerScore++;
        }
    }

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

game();