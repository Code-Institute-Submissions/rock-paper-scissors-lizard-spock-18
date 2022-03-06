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
     * An event listener to catch when a player click on a button
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
        })
        console.log(playerChoice + ' inside ' + computerChoice);
    }
}

function playGame(playerChoice, computerChoice) {
    console.log(playerChoice + ' 0 ' + computerChoice);
    if (playerChoice === computerChoice) {
        document.getElementById("midDiv").innerText = "It's a draw";
    //Scissors and Paper
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log(playerChoice + ' 1 ' + computerChoice);
        document.getElementById("midDiv").innerHTML = "Player wins";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log(playerChoice + ' 2 ' + computerChoice);
        document.getElementById("midDiv").innerHTML = "Computer wins";
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

function mouseOverImage() {
    document.getElementById("gR").style.display = "block";
}

function mouseOutImage() {
    document.getElementById("gR").style.display = "";
}   

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
