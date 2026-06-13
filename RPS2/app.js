let userScore = 0;
let compScore = 0;

// DOM Elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Generate Computer Choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Handle Draw Game Condition
const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

// Handle and Display Winner Logic
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Core Game Processing
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // computer could be paper or scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // computer could be scissors or rock
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // user chose scissors; computer could be rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// Setup Click Event Listeners on Choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});