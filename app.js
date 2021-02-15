const playOptions = ["rock", "paper", "scissors"];
let paper = document.querySelector(".paper");
let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors");

let computerPlay = () => {
  return playOptions[Math.floor(Math.random() * 3)]; //choose random weapon
};
let playerSelection = "";
let computerSelection = "";
let result;
let playerScore = 0;
let computerScore = 0;

let playRound = (playerSelection, computerSelection) => {
  computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    result = "Tie game!";
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
  } else {
    console.log("Choose a correct weapon!");
  }
  console.log(result);
  return result;
};

function addScore() {
  if (result === "Human win!") {
    playerScore++;
  } else if (result === "Computer win!") {
    computerScore++;
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(playerSelection, computerSelection);
    addScore();
    console.log(playerScore);
    console.log(computerScore);
  }
  checkWinner();
}

function checkWinner() {
  if (playerScore > computerScore) {
    console.log("The winner of 5 rounds is human");
  } else if (computerScore > playerScore) {
    console.log("The winner of 5 rounds is computer");
  } else {
    console.log("Draw game!");
  }
}

paper.addEventListener("click", () => {
  playerSelection = "paper";
  playerSelection = playerSelection.toLowerCase();
  playRound(playerSelection, computerSelection);
});

rock.addEventListener("click", () => {
  playerSelection = "rock";
  playerSelection = playerSelection.toLowerCase();
  playRound(playerSelection, computerSelection);
});

scissors.addEventListener("click", () => {
  playerSelection = "scissors";
  playerSelection = playerSelection.toLowerCase();
  playRound(playerSelection, computerSelection);
});
