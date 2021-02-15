const playOptions = ["rock", "paper", "scissors"];
let paper = document.querySelector(".paper");
let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors");
let winner = document.querySelector(".winner");
let score = document.querySelector(".score");
let gameWinner = document.querySelector(".gameWinner");

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
    winner.textContent = "Tie game!";
    score.textContent = `Player: ${playerScore}| Computer: ${computerScore}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    winner.textContent = `${playerSelection} beats ${computerSelection} Human win!`;
    playerScore++;
    score.textContent = `Player: ${playerScore}| Computer: ${computerScore}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    winner.textContent = `${computerSelection} beats ${playerSelection} Computer win!`;
    computerScore++;
    score.textContent = `Player: ${playerScore}| Computer: ${computerScore}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    winner.textContent = `${playerSelection} beats ${computerSelection} Human win!`;
    playerSelection++;
    score.textContent = `Player: ${playerScore}| Computer: ${computerScore}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    winner.textContent = `${computerSelection} beats ${playerSelection} Computer win!`;
    computerScore++;
    score.textContent = `Player: ${playerScore}| Computer: ${computerScore}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    winner.textContent = `${computerSelection} beats ${playerSelection} Computer win!`;
    computerScore++;
    score.textContent = `Player: ${playerScore}| Computer: ${computerScore}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    winner.textContent = `${playerSelection} beats ${computerSelection}! Human win!`;
    playerScore++;
    score.textContent = `Player: ${playerScore}| Computer: ${computerScore}`;
  } else {
    console.log("Choose a correct weapon!");
  }
  checkWinner();
};

function addScore() {
  if (result === "Human win!") {
    playerScore++;
  } else if (result === "Computer win!") {
    computerScore++;
  }
}

function checkWinner() {
  if (playerScore === 5) {
    gameWinner.textContent = "The winner is human";
  } else if (computerScore === 5) {
    gameWinner.textContent = "The winner is computer";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
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
