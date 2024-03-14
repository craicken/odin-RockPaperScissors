function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"];
    return choices[(Math.floor(Math.random() * choices.length))];
};

function play () {
    let userChoice = prompt("Enter rock, paper or scissors: ").toLowerCase();
    let computerChoice = getComputerChoice();
    switch (userChoice) {
        case "rock":
            if(computerChoice === "rock") {
                return "Computer chose " + computerChoice + "! It's a tie!";
            } else if(computerChoice === "paper") {
                return "Computer chose " + computerChoice + "! You lose!";
            } else {
                return "Computer chose " + computerChoice + "! You win!";
            };
        case "paper":
            if(computerChoice === "rock") {
                return "Computer chose " + computerChoice + "! You win!!";
            } else if(computerChoice === "paper") {
                return "Computer chose " + computerChoice + "! It's a tie!";
            } else {
                return "Computer chose " + computerChoice + "! You lose!";
            };
        case "scissors":
            if(computerChoice === "rock") {
                return "Computer chose " + computerChoice + "! You lose!";
            } else if(computerChoice === "paper") {
                return "Computer chose " + computerChoice + "! You win!";
            } else {
                return "Computer chose " + computerChoice + "! It's a tie!";
            }
    }
}

console.log(play());