'use strict'; //Always start with use strict in js
/* 1. DEFINE SECRET NUMBER: Outside - Define once 
     Math.random() - random number between 0 and 1
     *20 - random number between 0 and 19
     Math.trunc(Math.random()*20) - Remove decimal
     + 1 - random number between 0 and 20 */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
/* 4. INCREASE AND DECREASE SCORE by 1 each time making a guess*/
// Create a variable for score and then update that variable
let score = 20;
// Create a variable for highscore
let highscore = 0;
// Create a function for message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

/* 3. WHAT HAPPENS WHEN CLICK THE CHECK BUTTON */
document.querySelector('.check').addEventListener('click', function () {
  // Define a guess number - Make sure if it is a number by wraping in Number()
  const guess = Number(document.querySelector('.guess').value);
  // Case 1: guess box is empty - there is no guess
  if (!guess) {
    displayMessage('😶 No Number!');
    //document.querySelector('.message').textContent = '😶 No Number!';
  } // Case 2: guess number = random number - WHEN THE PLAYER WINS
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    /* 2. SHOW SECRET NUMBER IN ? BOX when correct answer */
    document.querySelector('.number').textContent = secretNumber;
    //change background color
    document.querySelector('body').style.backgroundColor = '#ade8f4';
    // change the width of ?box
    document.querySelector('.number').style.width = '30rem';
    /* 5. IMPLEMENTING HIGH SCORE */
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } //Case 3: guess number is different to random number - WHEN GUESS IS TOO HIGH/TOO LOW
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      // Decrease score
      score--; /* Same as score = score - 1; */
      //Display score
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Oh No! You Lost The Game!');
      document.querySelector('.score').textContent = 0; //Update score after losing
    }
  }

  /* Case 3: guess number > random number - WHEN GUESS IS TOO HIGH
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      // Decrease score
      score--;  Same as score = score - 1; 
      //Display score
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 Oh No! You Lost The Game!';
      document.querySelector('.score').textContent = 0; //Update score after losing
    }
  } // Case 4: guess number < random number - WHEN GUESS IS TOO LOW
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 Oh No! You Lost The Game!';
      document.querySelector('.score').textContent = 0; //Update score after losing
    }
  }*/
});

// CHALLENGE #1 - RESET GAME
// 1. Select the element with the 'again class and attach a click event handler
//2. In the handler function, restore initial values of the score and secretNumber variables
//3. Restore the initial conditions of the message, number, score and guess input field
//4. Restore the original background color and numner width 15rem
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?'; // 1.2
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing..');
  /*  document.querySelector('.message').textContent = 'Start guessing..'; */
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#ffc8dd';
  document.querySelector('.number').style.width = '15rem';
});
