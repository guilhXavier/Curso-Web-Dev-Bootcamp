alert("Connected!");

var btP1 = document.querySelector("#playerOne");
var btP2 = document.querySelector("#playerTwo");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

btP1.addEventListener("click", function() {
    if(!gameOver) {
        p1Score++;
        if(p1Score == winningScore) {
            gameOver = true;
        }
    }
});

btP2.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;
        p2Display.textContent = p1Score;
        if(p2Score == winningScore) {
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});
