const userChoiceDiv = document.querySelector("#userChoice");
const resultsDiv = document.querySelector("#results");
const userScoreDiv = document.querySelector("#userScore");
const computerScoreDiv = document.querySelector("#computerScore");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(play(button.id));
    });
});

let userScore = 0;
let computerScore = 0;
userScoreDiv.textContent = "Your score: " + userScore.toString();
computerScoreDiv.textContent = "Computer score: " + computerScore.toString();


function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"];
    return choices[(Math.floor(Math.random() * choices.length))];
};

function play (userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice) {
        case "rock":
            userChoiceDiv.textContent = "You chose rock!";
            if(computerChoice === "rock") {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! It's a tie!";
            } else if(computerChoice === "paper") {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! You lose!";
                computerScore++;
            } else {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! You win!";
                userScore++;
            };

            userScoreDiv.textContent = "Your score: " + userScore.toString();
            computerScoreDiv.textContent = "Computer score: " + computerScore.toString();
            winCheck();
            break;

        case "paper":
            userChoiceDiv.textContent = "You chose paper!";
            if(computerChoice === "rock") {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! You win!!";
                userScore++;
            } else if(computerChoice === "paper") {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! It's a tie!";
            } else {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! You lose!";
                computerScore++;
            };

            userScoreDiv.textContent = "Your score: " + userScore.toString();
            computerScoreDiv.textContent = "Computer score: " + computerScore.toString();
            winCheck();
            break;

        case "scissors":
            userChoiceDiv.textContent = "You chose scissors!";
            if(computerChoice === "rock") {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! You lose!";
                computerScore++;
            } else if(computerChoice === "paper") {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! You win!";
                userScore++;
            } else {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! It's a tie!";
            };

            userScoreDiv.textContent = "Your score: " + userScore.toString();
            computerScoreDiv.textContent = "Computer score: " + computerScore.toString();
            winCheck();
            break;
    }
};

function winCheck() {
    if(userScore === 5) {
        resultsDiv.textContent = "You win the game!";
    } else if(computerScore === 5) {
        resultsDiv.textContent = "The computer wins!";
    }
}