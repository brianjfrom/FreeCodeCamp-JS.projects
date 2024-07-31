function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  function hasPlayerWonTheRound(player, computer) {
   if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
   ){
    return true;
   }
    return false
  }

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    if (userOption === computerResult) {
        return `It's a tie! Both chose ${userOption}`;
    } else if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
        return `Player wins ${userOption} beats ${computerResult}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`
    }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultMsg = document.getElementById("results-msg");

function showResults() {

};

showResults("Rock");