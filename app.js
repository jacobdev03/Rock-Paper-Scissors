const playOptions = ["rock", "paper", "scissors"];

let computerPlay = () => {
  return playOptions[Math.floor(Math.random() * 3)];
};
let playerSelection = "";
let computerSelection = "";
let result;
let playerScore = 0;
let computerScore = 0;

let playRound = (playerSelection, computerSelection) => {
  playerSelection = prompt("What do you choose? ");
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay();
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
    result = "Computer win!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "Human win!";
  }
  return result;
};

function addScore() {
  if (result === "Human win!") {
    playerScore++;
  } else if (result === "Computer win!") {
    computerScore++;
  }
}
