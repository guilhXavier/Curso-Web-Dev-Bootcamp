// create secret number
const secretNumber = 4;

// ask user for guess


// check if guess is right, and if he's wrong then if he's over or under

do{
  var guess = prompt("Guess a number, any number!");

  if (guess == secretNumber) {
    alert("ya got it ;)");
    break;
  } else if (guess > secretNumber) {
    alert("Your number is too high, try again");
  } else {
    alert("Your number is too low, try again");
  }
}while(guess != secretNumber);
