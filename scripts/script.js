function getComputerSelection() {
  // randomly generate between rock, paper and scissors
  // return selection

  let computerSelection;
  let randomChoice = Math.random();

  if (randomChoice <= 0.33) {
    computerSelection = "rock";
  } else if (randomChoice > 0.66) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }

  return computerSelection;
}

function compareSelections(playerSelection, computerSelection) {
  // compare player and computer seleciton
  // replay round if tied
  // return round result

  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return 0;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return 1;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return -1;
  } else {
    return undefined;
  }
}

function game() {
  // play a best-of-five game
  // track scores
  // report winner or loser at the end

  let playerScore = 0;
  let computerScore = 0;

  let count = 1;

  for (count; count <= 5; count++) {
    let playerSelection = prompt("Choose between Rock, Paper & Scissors");
    let computerSelection = getComputerSelection();
    console.log(computerSelection);
    console.log(compareSelections(playerSelection, computerSelection));

    switch (compareSelections(playerSelection, computerSelection)) {
      case 0:
        console.log("It's a tie");
        break;
      case 1:
        playerScore += 1;
        console.log("You win this round!");
        console.log(`You now have ${playerScore} points`);
        break;
      case -1:
        computerScore += 1;
        console.log("You lose this round!");
        console.log(`The computer now has ${computerScore} points`);
        break;
      default:
        console.log("Illegal entry!");
    }
  }

  if (playerScore > computerScore) {
    console.log("You've won the game!");
  } else if (playerScore < computerScore) {
    console.log("You've lost the game!");
  } else {
    console.log("The game was a tie.");
  }
}

game();
