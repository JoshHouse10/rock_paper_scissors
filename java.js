function getComputerChoice() {
    let num = Math.ceil(Math.random()*3)
    switch(num) {
     case 1: return "rock";
     case 2: return "paper";
     case 3: return "scissors";
    };
    
 };

let humanScore = 0;
let computerScore = 0;

const scoreContainer = document.querySelector(".score-container")
let scoreMessage = document.createElement("p")
scoreMessage.classList.add("score")
scoreMessage.textContent = `Your Score: ${humanScore} - Computer Score: ${computerScore}`
scoreContainer.appendChild(scoreMessage)

let roundMessage = document.createElement("p")
roundMessage.classList.add("round-message")



function playRound(getHumanChoice, getComputerChoice) {
    if (getHumanChoice == getComputerChoice) {
        roundMessage.textContent = `Your ${getHumanChoice} and computers ${getComputerChoice} makes a draw!`;
        scoreContainer.appendChild(roundMessage);
    } else if (
        (getHumanChoice == "rock" && getComputerChoice == "scissors") || 
        (getHumanChoice == "paper" && getComputerChoice == "rock") || 
        (getHumanChoice == "scissors" && getComputerChoice == "paper")
    ) {
        humanScore++;
        roundMessage.textContent = `You Win! Your ${getHumanChoice} beats computers ${getComputerChoice}`;
        scoreContainer.appendChild(roundMessage);
    } else {
        computerScore++;
        roundMessage.textContent = `You Lose! Computers ${getComputerChoice} beats your ${getHumanChoice}`;
        scoreContainer.appendChild(roundMessage);
    }

    scoreMessage.textContent = `Your Score: ${humanScore} - Computer Score: ${computerScore}`;
}


 
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function playGame() {
    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice())
    });
     paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice())
    });
    scissors.addEventListener("click", () => {
         playRound("scissors", getComputerChoice())
    });
}

playGame()