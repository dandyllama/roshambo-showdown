function getComputerSelection() {
  // randomly generate between rock, paper and scissors
  // return selection

  let computerSelection;
  let randomChoice = Math.random();

  console.log(randomChoice);

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
    return `It's a tie`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = "rock";
const computerSelection = getComputerSelection();
console.log(computerSelection);
console.log(compareSelections(playerSelection, computerSelection));
