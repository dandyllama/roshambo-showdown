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

console.log(getComputerSelection());

function compareSelections(playerSelection, computerSelection) {
  // compare player and computer seleciton
  // replay round if tied
  // return round result
}
