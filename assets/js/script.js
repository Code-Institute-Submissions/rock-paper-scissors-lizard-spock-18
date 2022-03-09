/**
 * Only once the page has loaded run the game
 */
document.addEventListener("DOMContentLoaded", runGame());

/**
 * Switch off the game choice functionality.
 * A future feature which give the player the choice of
 * playing a Best of Three or Best of Five or Infinite game
 * 
 */
document.getElementById('gameChoiceId').setAttribute("style", "display: none");

/**
  * The runGame function
  * the logic will receive the players choice when clicking on a button
  * then running the computerPlay function.
  * Once bot players have played, the gameLogic function is call to decide on a winner
  * followed by incrementScore function to increment the winner's score
  * @param {*} gameChosen parameter is the number of turns the player will have before game end
 */
function runGame() {
    /**
     * The player can view the game rules, as stated by Sheldon,
     * when the hover over the game heading.
     */
    let imageId = document.getElementById('imgId');

    imageId.addEventListener("mouseover", mouseOverImage);
    imageId.addEventListener("mouseout", mouseOutImage);

    let playerChoice;
    let computerChoice;
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        let counter = 0;

        /**
        * This function has an event listener to catch when a player clicks on a button.
        * The choice made by the player will then change the image on Players Choice.
        * The next step is to call the computer to play. Once both plays are made
        * the gameLogic function is called to work out who won. Then the incrementScore
        * function increments the winners score
        */
        button.addEventListener("click", function() {

            if (button.getAttribute("id") === "rockButton") {
                document.getElementById("playerChoiceId").setAttribute('style','background: url("assets/images/rock-1.png") no-repeat center center; background-size: 115% 115%;');
                playerChoice = button.getAttribute("data-choice");
                computerChoice = computerPlay();
            } else if (button.getAttribute("id") === "paperButton") {
                document.getElementById("playerChoiceId").setAttribute('style','background: url("assets/images/paper-1.png") no-repeat center center; background-size: 115% 115%;');
                playerChoice = button.getAttribute("data-choice");
                computerChoice = computerPlay();
            } else if (button.getAttribute("id") === "scissorsButton") {
                document.getElementById("playerChoiceId").setAttribute('style','background: url("assets/images/scissors-1.png") no-repeat center center; background-size: 115% 115%;');
                playerChoice = button.getAttribute("data-choice");
                computerChoice = computerPlay();
            } else if (button.getAttribute("id") === "lizardButton") {
                document.getElementById("playerChoiceId").setAttribute('style','background: url("assets/images/lizard-1.png") no-repeat center center; background-size: 115% 115%;');
                playerChoice = button.getAttribute("data-choice");
                computerChoice = computerPlay();
            } else if (button.getAttribute("id") === "spockButton") {
                document.getElementById("playerChoiceId").setAttribute('style','background: url("assets/images/spock-1.png") no-repeat center center; background-size: 115% 115%;');
                playerChoice = button.getAttribute("data-choice");
                computerChoice = computerPlay();
            }
            gameLogic(playerChoice, computerChoice);
            counter++;

            incrementScore();
    
        });

    }
}

/**
 * The mouseOverImage and mouseOutImage functions
 * When the user hovers over the heading of the game,
 * the rules, as stated by sheldon, are displayed
 */
function mouseOverImage() {
    document.getElementById("gameRulesId").style.display = "block";
}

function mouseOutImage() {
    document.getElementById("gameRulesId").style.display = "";
}   

/**
 * The computerPlay function
 * Generate the computer choice by fetching up to 5 random numbers
 * These random numbers are then matched to the five choices
 * The computer choice, random generated, is then returned to the function call
 * @returns computerChoice
 */
function computerPlay() {
    let num = Math.floor(Math.random() * 5);
    let computerChoice;

    if (num === 0) {
        document.getElementById("computerChoiceId").setAttribute('style','background: url("assets/images/rock-1.png") no-repeat center center; background-size: 115% 115%;');
        computerChoice = "rock";
    } else if (num === 1) {
        document.getElementById("computerChoiceId").setAttribute('style','background: url("assets/images/paper-1.png") no-repeat center center; background-size: 115% 115%;');
        computerChoice = "paper";
    } else if (num === 2) {
        document.getElementById("computerChoiceId").setAttribute('style','background: url("assets/images/scissors-1.png") no-repeat center center; background-size: 115% 115%;');
        computerChoice = "scissors";
    } else if (num === 3) {
        document.getElementById("computerChoiceId").setAttribute('style','background: url("assets/images/lizard-1.png") no-repeat center center; background-size: 115% 115%;');
        computerChoice = "lizard";
    } else if (num === 4) {
        document.getElementById("computerChoiceId").setAttribute('style','background: url("assets/images/spock-1.png") no-repeat center center; background-size: 115% 115%;');
        computerChoice = "spock";
    }
    return computerChoice;
}

/**
 * The gameLogic function
 * This is where the rules of the game, as stated by sheldon,
 * are played out in a conditional IF statement
*/
function gameLogic(playerChoice, computerChoice) {
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
    let playerScores = parseInt(document.getElementById("playerScore").innerText);
    let computerScores = parseInt(document.getElementById("computerScore").innerText);
    
    if (whoWon === "Player wins") {
        playerScores += 1;
        document.getElementById("playerScore").innerText = playerScores.toString();
    } else if (whoWon === "Computer wins") {
        computerScores += 1;
        document.getElementById("computerScore").innerText = computerScores.toString();
    }
}

/**
 * The gameType function
 * Disables the game board and runs the getChoice function
 * to let player choose the game type
 * The following functions are related to this feature:
 *  gameType(), getChoice()
 */
 function gameType() {
    //Disable the game board until user makes a game choice 
    document.getElementById('imgId').setAttribute("style", "opacity: 0.5; pointer-events: none;");
    document.getElementById('gameOnOff').setAttribute("style", "opacity: 0.5; pointer-events: none;");
    document.getElementById('computerScore').innerText = "0";
    document.getElementById('playerScore').innerText = "0";

    //Get the game choice made by the player
    gameChoiceId = document.getElementById('gameChoiceId');
    gameChoiceId.addEventListener('click', getChoice());
    console.log(gameChoiceId);
}

/**
 * The getChoice function
 * Disables the game board and catches the game type radio button the player clicks on.
 * once the player chooses an option the game runs and the game board is enabled
 */
function getChoice() {
    console.log("in game choice");
    //Fetch the game choice radio button group
    let gameChoice = document.getElementsByClassName('gameChoice');
    // gameChoiceId.removeEventListener('click', getChoice);

    //loop through the game choices to establish which radio button is selected/checked
    for (let radio of gameChoice) {
        if (radio.checked === true) {
            console.log(radio);
            //if a radio button is checked enable the game board
            document.getElementById('imgId').setAttribute("style", "opacity: 1; pointer-events: auto;");
            document.getElementById('gameOnOff').setAttribute("style", "opacity: 1; pointer-events: auto;");
         }
    }
    if (document.getElementsByTagName('input')[0].checked) {
        runGame('3');
    } else if (document.getElementsByTagName('input')[1].checked) {
        runGame('5');
    } else if (document.getElementsByTagName('input')[2].checked) {
        runGame('0');
    }
 }

 /**
  * The resetGame function resets the game once Game Over is reached
  * when the user chooses either the "Best of Three" or "Best of Five" game choices
  * The function returns zero to it calling function: runGame(gameChosen) function
  * @returns 0 
  */
 function resetGame() {
    document.getElementById('computerScore').innerText = "0";
    document.getElementById('playerScore').innerText = "0";
    document.getElementById('midDiv').innerText = "Play Again?";
    document.getElementById('imgId').setAttribute("style", "opacity: 0.5; pointer-events: none;");
    document.getElementById('gameOnOff').setAttribute("style", "opacity: 0.5; pointer-events: none;");
    document.getElementsByTagName('input')[0].checked = false;
    document.getElementsByTagName('input')[1].checked = false;
    document.getElementsByTagName('input')[2].checked = false;
    return 0;
 }