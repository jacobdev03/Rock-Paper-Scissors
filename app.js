const playOptions = ["Rock", "Paper", "Scissors"];

let computerPlay = () => {
  return playOptions[Math.floor(Math.random() * 3)];
};

let computerSelection = computerPlay();
let playerSelection = prompt("What do you choose?");
playerSelection = playerSelection.toLowerCase();
computerSelection = computerSelection.toLowerCase();
let result;

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    result = "Draw!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "Human win!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    result = "Computer win!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "Human win!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "Computer win!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "Computer win!!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "Human win!";
  }
  return result;
};

console.log(playRound(playerSelection, computerSelection));
