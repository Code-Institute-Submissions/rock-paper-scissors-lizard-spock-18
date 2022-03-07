// Get the game choice made by the player
let gameChoice = document.getElementsByClassName('gameChoice');

/**
 * Only once the page has loaded run the game
 */
document.addEventListener("DOMContentLoaded",runGame());

function runGame() {
    /**
     * The player can view the game rules, as stated by Sheldon,
     * when the hover over the game heading.
     */
    let imageId = document.getElementById('imgId');

    imageId.addEventListener("mouseover", mouseOverImage);
    imageId.addEventListener("mouseout", mouseOutImage);

    /**
     * An event listener to catch when a player clicks on a button.
     * The choice made by the player will then change the image on Players Choice.
     * The next step is to call the computer to play
     */
    let buttons = document.getElementsByTagName("button");
    let playerChoice;
    let computerChoice;

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("id") === "rockButton") {
                document.getElementById("p").setAttribute('style','background: url("assets/images/rock-1.png") no-repeat center center; background-size: 115% 115%;');
                playerChoice = this.getAttribute("data-choice");
                computerChoice = computerPlay();
            } else if (this.getAttribute("id") === "paperButton") {
                document.getElementById("p").setAttribute('style','background: url("assets/images/paper-1.png") no-repeat center center; background-size: 115% 115%;');
                playerChoice = this.getAttribute("data-choice");
                computerChoice = computerPlay();
            } else if (this.getAttribute("id") === "scissorsButton") {
                document.getElementById("p").setAttribute('style','background: url("assets/images/scissors-1.png") no-repeat center center; background-size: 115% 115%;');
                playerChoice = this.getAttribute("data-choice");
                computerChoice = computerPlay();
            } else if (this.getAttribute("id") === "lizardButton") {
                document.getElementById("p").setAttribute('style','background: url("assets/images/lizard-1.png") no-repeat center center; background-size: 115% 115%;');
                playerChoice = this.getAttribute("data-choice");
                computerChoice = computerPlay();
            } else if (this.getAttribute("id") === "spockButton") {
                document.getElementById("p").setAttribute('style','background: url("assets/images/spock-1.png") no-repeat center center; background-size: 115% 115%;');
                playerChoice = this.getAttribute("data-choice");
                computerChoice = computerPlay();
            }
            playGame(playerChoice, computerChoice);
            incrementScore();
        })
    }
}

/**
 * The mouseOverImage and mouseOutImage functions
 * When the user hovers over the heading of the game,
 * the rules, as stated by sheldon, are displayed
 */
function mouseOverImage() {
    document.getElementById("gR").style.display = "block";
}

function mouseOutImage() {
    document.getElementById("gR").style.display = "";
}   

/**
 * The computerPlay function
 * Generate the computer choice by fetching up to 5 random numbers
 * These random numbers are then matched to the five choices
 * The computer choice is then returned to the function call
 */
function computerPlay() {
    let num = Math.floor(Math.random() * 5);
    let computerChoice;

    if (num === 0) {
        document.getElementById("c").setAttribute('style','background: url("assets/images/rock-1.png") no-repeat center center; background-size: 115% 115%;');
        computerChoice = "rock";
    } else if (num === 1) {
        document.getElementById("c").setAttribute('style','background: url("assets/images/paper-1.png") no-repeat center center; background-size: 115% 115%;');
        computerChoice = "paper";
    } else if (num === 2) {
        document.getElementById("c").setAttribute('style','background: url("assets/images/scissors-1.png") no-repeat center center; background-size: 115% 115%;');
        computerChoice = "scissors";
    } else if (num === 3) {
        document.getElementById("c").setAttribute('style','background: url("assets/images/lizard-1.png") no-repeat center center; background-size: 115% 115%;');
        computerChoice = "lizard";
    } else if (num === 4) {
        document.getElementById("c").setAttribute('style','background: url("assets/images/spock-1.png") no-repeat center center; background-size: 115% 115%;');
        computerChoice = "spock";
    }
    return computerChoice;
}

/**
 * The playGame function
 * This is where the rules of the game, as stated by sheldon,
 * are played out in a conditional IF statement
*/
function playGame(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        document.getElementById("midDiv").innerText = "It's a draw";
    //Scissors and Paper
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        document.getElementById("midDiv").innerText = "Player wins";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        document.getElementById("midDiv").innerText = "Computer wins";
    //Paper and Rock
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        document.getElementById("midDiv").innerText = "Player wins";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        document.getElementById("midDiv").innerText = "Computer wins";
    //Rock and Lizard
    } else if (playerChoice === "rock" && computerChoice === "lizard") {
        document.getElementById("midDiv").innerText = "Player wins";
    } else if (playerChoice === "lizard" && computerChoice === "rock") {
        document.getElementById("midDiv").innerText = "Computer wins";
    //Lizard and Spock
    } else if (playerChoice === "lizard" && computerChoice === "spock") {
        document.getElementById("midDiv").innerText = "Player wins";
    } else if (playerChoice === "spock" && computerChoice === "lizard") {
        document.getElementById("midDiv").innerText = "Computer wins";
    //Spock and Scissors
    } else if (playerChoice === "spock" && computerChoice === "scissors") {
        document.getElementById("midDiv").innerText = "Player wins";
    } else if (playerChoice === "scissors" && computerChoice === "spock") {
        document.getElementById("midDiv").innerText = "Computer wins";
    //Scissors and Lizard
    } else if (playerChoice === "scissors" && computerChoice === "lizard") {
        document.getElementById("midDiv").innerText = "Player wins";
    } else if (playerChoice === "lizard" && computerChoice === "scissors") {
        document.getElementById("midDiv").innerText = "Computer wins";
    //Lizard and Paper
    } else if (playerChoice === "lizard" && computerChoice === "paper") {
        document.getElementById("midDiv").innerText = "Player wins";
    } else if (playerChoice === "paper" && computerChoice === "lizard") {
        document.getElementById("midDiv").innerText = "Computer wins";
    //Paper and Spock
    } else if (playerChoice === "paper" && computerChoice === "spock") {
        document.getElementById("midDiv").innerText = "Player wins";
    } else if (playerChoice === "spock" && computerChoice === "paper") {
        document.getElementById("midDiv").innerText = "Computer wins";
    //Spock and Rock
    } else if (playerChoice === "spock" && computerChoice === "rock") {
        document.getElementById("midDiv").innerText = "Player wins";
    } else if (playerChoice === "rock" && computerChoice === "spock") {
        document.getElementById("midDiv").innerText = "Computer wins";
    //Rock and Scissors
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        document.getElementById("midDiv").innerText = "Player wins";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        document.getElementById("midDiv").innerText = "Computer wins";
    }
}

/**
 * The incrementScore function
 * increments the score of the winning player
 */
function incrementScore() {
    let whoWon = document.getElementById("midDiv").innerText;
    let playerScore = parseInt(document.getElementById("playerScore").innerText);
    let computerScore = parseInt(document.getElementById("computerScore").innerText);

    if (whoWon === "Player wins") {
        playerScore += 1;
        document.getElementById("playerScore").innerText = playerScore;
    } else if (whoWon === "Computer wins") {
        computerScore += 1;
        document.getElementById("computerScore").innerText = computerScore;
    }
}