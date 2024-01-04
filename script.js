'use strict';

//print out the class that said message;
// console.log(document.querySelector('.message').textContent);

// displayMessage('Correct number 🥳🍾');

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 11;

// console.log((document.querySelector('.guess').value = 14));

// --------------------------Exercise----------------------------
// secret Number
let score = 20;
let secretNum = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;

//put in function so can write shorter codes when wanna reuse
const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

const displayHighscore = highScore => {
  document.querySelector('.highscore').textContent = highScore;
};

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

//score = score -1, function
const score1 = () => {
  if (score > 1) {
    score--;
    displayScore();
  } else {
    displayScore(0);
    displayMessage('You lose 🤯💩');
    return;
  }
};

const updateHighScore = () => {
  if (score > highScore) {
    highScore = score;
    displayHighscore();
  }
};

//button clicking function
const clickCheck = () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //if guesssing Number is 0 or null
  if (!guess) {
    displayMessage('🤚🏾 No number');
  }

  //guess is now correct !
  else if (guess === secretNum) {
    displayMessage('Correct number 🥳🍾');
    updateHighScore();
    displayHighscore();
    document.querySelector('body').style.backgroundColor = '#008000';
    document.querySelector('.number').style.width = '40rem';
    document.querySelector('.number').textContent = secretNum;
  }

  //guess too high
  else if (guess > secretNum) {
    displayMessage('Too high 😫🍷');
    score1();
  }

  //guess too low
  else if (guess < secretNum) {
    displayMessage('Too low 😫🍷');
    score1();
  }
};

const clickAgain = () => {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  displayMessage('Start guessing...');
  score = 20;
  secretNum = Math.trunc(Math.random() * 20 + 1);
  displayScore();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', clickCheck);
document.querySelector('.again').addEventListener('click', clickAgain);

//------------------------------------------------------------------------------

//JavaScript in the Browser: DOM and Events
// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
