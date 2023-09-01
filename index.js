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
    let playerSelection = prompt("Choose: Rock / Paper / Scissors",'').toLowerCase();

    while (playerSelection !=="rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        playerSelection = prompt("Invalid input!! Choose: Rock / Paper / Scissors",'').toLowerCase();
    }

    return playerSelection;
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

function game(rounds) {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {
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

        if (playerScore > (rounds-i) || computerScore > (rounds-i)) break;
    }

    (playerScore === computerScore) ? console.log("The game is draw!") :
    (playerScore > computerScore) ? console.log("The final winner is: Player!") :
    console.log("The final winner is: Computer!");
}

game(5);