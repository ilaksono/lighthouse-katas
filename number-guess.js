let prompt = require("prompt-sync")();
const randomNum = () => {
  var magicNumber = Math.random() * 100;
  return Math.ceil(magicNumber);
}
let magicNumber = randomNum();
var alreadyGuessed = [];
const gameMenu = () => {
  let start = prompt('Would you like to play a game? (y/n): ');
  if (start === 'y' || start === 'Y')
    theGame();
  else
    console.log('Ok, goodbye!');
  return 'Goodbye!';
}
const checkGuess = num => {
  var hasGuessed = false;
  for (let a of alreadyGuessed) {
    if (num === a) {
      console.log(`\nyou have already guessed the number ${num}, fool!`);
      hasGuessed = true;
      return -1;
    }
  }
  if (hasGuessed === false && (num > 0 && num <= 100))
    alreadyGuessed.push(num);

  if (num > 100 || num < 1) {
    console.log('\nNumber must be between 1 and 100.\n');
    return -1;
  }
  if (isNaN(num)) {
    console.log('\nmust be a number.')
    return -1;
  }

  if (num > magicNumber) {
    console.log('\nyour number is too large.');
    return 2;
  }
  if (num < magicNumber) {
    console.log('\nyour number is too small.');
    return 1;
  }
  if (num == magicNumber) {
    console.log('\nYou got it!');
    return 0;
  }
}
const playGameAgain = () => {
  magicNumber = randomNum();
  alreadyGuessed = [];
  var msg = prompt('Would you like to play again? (y/n): ');
  if (msg === 'y')
    console.log('\nI have created a new number.');
  return msg;
}
const theGame = () => {
  var check = -1;
  var playAgain = 'y';
  var numGuesses = 0;
  var quit;
  console.log('\nI have created a secret number between 1 and 100, you have 10 tries to guess it.\nEnter q to exit game at any time:\n');
  do {
    console.log(`\nWhat is your #${numGuesses + 1} guess?\n`);
    let guess = prompt('> ');
    if (guess == 'q') {
      console.log('\nThanks for playing!')
      return guess;
    }
    check = checkGuess(guess);
    if (!(check === -1)) {
      numGuesses++;
      if (check === 0) {
        console.log(`You won in ${numGuesses} tr${numGuesses > 1 ? 'ies' : 'y'}.\n`)
        playAgain = playGameAgain();
        numGuesses = 0;
      }
      if (playAgain === 'n' || playAgain === 'N') {
        console.log('Thanks for playing!');
        return;
      }
    }
    if (check === -2)
      return;
    if (numGuesses >= 10) {
      console.log(`You have exceeded the guess limit.\nThe number was ${magicNumber}.`);
      playAgain = playGameAgain();
      numGuesses = 0;
    }
  } while (playAgain === 'y' && numGuesses < 10);
  console.log('Thanks for playing!');
  return '\n';
}

console.log(gameMenu());