var pointsOne = 0, pointsTwo = 0;

document.querySelector("h1").innerHTML = pointsOne + " to  "+ pointsTwo;

function changeScore () {
    var point = false;
    if (p1) {
        point = true;
    } else if (p2) {
        point = false;
    }
    var s = "";
    if (point) {
        pointsOne++;
    } else {
        pointsTwo++;
    }
    s = pointsOne + " to " + pointsTwo;
    return s;
}

var p1 = document.getElementById("playerOne");
var p2 = document.getElementById("playerTwo");

p1.addEventListener("click", changeScore);
p2.addEventListener("click", changeScore);
document.querySelector("h1").innerHTML = pointsOne + " to  "+ pointsTwo;

