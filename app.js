// Accessing Elements from HTML file
let choices = document.querySelectorAll(".option");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let gameMessage = document.querySelector("#game-message");
let pScore = document.querySelector("#player-score");
let cScore = document.querySelector("#computer-score");
let heading = document.querySelector("#main-heading");
let gameContainer = document.querySelector(".game-container");
let tryAgain = document.querySelector("#try-again-button");

// Variables to keep track of the game
let playerScore = 0;
let computerScore = 0;
let gameDraw = false;
let gameWin = false;
let gameLoose = false;

// Array for computer to choose
let options = [rock, paper, scissor];

// Game driver code
const gameRunner = () => {
    // Loop to access each element from option class
    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            // Computer choice randomly stored in the variable
            let computerChoice = computerOption();
            // Logic for the game to check draw, win, loose and displaying the message of the outcome
            // For draw
            if (choice === rock && computerChoice === rock || 
                choice === paper && computerChoice === paper || 
                choice === scissor && computerChoice === scissor) {
                gameDraw = true;
                message();
                gameDraw = false;

            // For win 
            } else if (choice === rock && computerChoice === scissor || 
                choice === paper && computerChoice === rock || 
                choice === scissor && computerChoice === paper){
                gameWin = true;
                scoreUpdate();
                message();
                gameWin = false;

            // For loose
            } else {
                gameLoose = true;
                scoreUpdate();
                message();
                gameLoose = false;
            }
            // Game over function called after reaching 10 points from either side
            gameOver();
            // Try again function called to play the game again through button
            tryAgain.addEventListener("click", tryAgainButton);
        });
    });
}

// Game over function
const gameOver = () => {
    // Condition for player win on 10 points
    if (playerScore === 10) {
        heading.innerText = "GAME OVER! YOU WON!";
        gameContainer.classList.add("hide");
        gameMessage.classList.add("hide");
        tryAgain.classList.remove("hide");
    }
    
    // Condition for computer win on 10 points
    if (computerScore === 10) {
        heading.innerText = "GAME OVER! YOU LOOSE!";
        gameContainer.classList.add("hide");
        gameMessage.classList.add("hide");
        tryAgain.classList.remove("hide");
    }
}

//  Try again function
const tryAgainButton = () => {
    // Resetting the last game played
    heading.innerText = "ROCK PAPER SCISSOR";
    gameContainer.classList.remove("hide");
    gameMessage.classList.remove("hide");
    tryAgain.classList.add("hide");
    pScore.innerText = "0";
    cScore.innerText = "0";
    gameMessage.innerText = "";
    playerScore = 0;
    computerScore = 0;
}

// Function for computer to choose from rock, paper and scissor
const computerOption = () => {
    // Generating random index to the length of the array and rounding it to get an integer
    let randomIndex = Math.floor(Math.random() * options.length);

    // Using random index to access elements of the array
    let randomOption = options[randomIndex];
    return randomOption;
}

// Funtion to update score on win and loose
const scoreUpdate = () => {
    // Player winning condition
    if (gameWin) {
        playerScore++;
        pScore.innerText = playerScore;
        pScore.style.color = "#457b9d";
    }

    // Computer winning condition
    if (gameLoose) {
        computerScore++;
        cScore.innerText = computerScore;
        cScore.style.color = "#e63946";
    }
}

// Function for displaying winning, loosing and draw message
const message = () => {
    // draw conditon
    if (gameDraw) {
        gameMessage.innerText = "Draw";
        gameMessage.style.color = "#f1faee";
    }

    // Winning condition
    if(gameWin) {
        gameMessage.innerText = "You Won!";
        gameMessage.style.color = "#457b9d";
    }

    // Loosing condition
    if(gameLoose){
        gameMessage.innerText = "You Loose!";
        gameMessage.style.color = "#e63946";
    }
}

// Calling the main driver code funtion to play the game
gameRunner();