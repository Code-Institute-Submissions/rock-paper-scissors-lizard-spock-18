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
                playerChoice = this.getAttribute("id");
                computerChoice = computerPlay();
            } else if (this.getAttribute("id") === "paperButton") {
                document.getElementById("p").setAttribute('style','background: url("assets/images/paper-1.png") no-repeat center center; background-size: 115% 115%;');
                playerChoice = this.getAttribute("id");
                computerChoice = computerPlay();
            } else if (this.getAttribute("id") === "scissorsButton") {
                document.getElementById("p").setAttribute('style','background: url("assets/images/scissors-1.png") no-repeat center center; background-size: 115% 115%;');
                playerChoice = this.getAttribute("id");
                computerChoice = computerPlay();
            } else if (this.getAttribute("id") === "lizardButton") {
                document.getElementById("p").setAttribute('style','background: url("assets/images/lizard-1.png") no-repeat center center; background-size: 115% 115%;');
                playerChoice = this.getAttribute("id");
                computerChoice = computerPlay();
            } else if (this.getAttribute("id") === "spockButton") {
                document.getElementById("p").setAttribute('style','background: url("assets/images/spock-1.png") no-repeat center center; background-size: 115% 115%;');
                playerChoice = this.getAttribute("id");
                computerChoice = computerPlay();
            }
        })
    }

    if (playerChoice === computerChoice) {
        document.getElementById("midDiv").innerText = "It's a draw"
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
