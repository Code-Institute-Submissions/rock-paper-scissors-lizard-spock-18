// Get the game choice made by the player
let gameChoice = document.getElementsByClassName('gameChoice');

//Event trigger - if player moves over the image on the game heading
let catOne = document.getElementById('imgId');

catOne.addEventListener("mouseover", mouseOverImage);
catOne.addEventListener("mouseout", mouseOutImage);

function mouseOverImage() {
    console.log('mouse over');
    document.getElementById("gR").style.display = "block";
}

function mouseOutImage() {
    console.log('mouse out');
    document.getElementById("gR").style.display = "";
}   
