const userChoiceDiv = document.querySelector("#userChoice");
const resultsDiv = document.querySelector("#results");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(play(button.id));
    })
})


function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"];
    return choices[(Math.floor(Math.random() * choices.length))];
};

function play (userChoice) {
    // let userChoice = prompt("Enter rock, paper or scissors: ").toLowerCase();
    let computerChoice = getComputerChoice();
    switch (userChoice) {
        case "rock":
            userChoiceDiv.textContent = "You chose rock!";
            if(computerChoice === "rock") {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! It's a tie!";
            } else if(computerChoice === "paper") {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! You lose!";
            } else {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! You win!";
            };
            break;
        case "paper":
            userChoiceDiv.textContent = "You chose paper!";
            if(computerChoice === "rock") {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! You win!!";
            } else if(computerChoice === "paper") {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! It's a tie!";
            } else {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! You lose!";
            };
            break;
        case "scissors":
            userChoiceDiv.textContent = "You chose scissors!";
            if(computerChoice === "rock") {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! You lose!";
            } else if(computerChoice === "paper") {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! You win!";
            } else {
                resultsDiv.textContent = "Computer chose " + computerChoice + "! It's a tie!";
            };
            break;
    }
};

function determineRoundsAndPlay () {
    let rounds = prompt("How many rounds would you like to play? ");
    for (let i = 0; i < rounds; i++) {
        console.log(play());
    };
};

// determineRoundsAndPlay();