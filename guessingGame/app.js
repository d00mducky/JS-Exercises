// A very simple guessing game showcasing some simple JS logic and iteration implementations


// generate a random number

// allow user to guess the number

// if they are wrong, ask them again (hint)

// if they win, congratulate them

function guessGame() {
  // rand number up to 10
  let rand = Math.floor(Math.random() * 11);
  let guess;

  do {
    guess = prompt('Guess a number between 1-10!');
    console.log(guess, rand);
    if (rand > guess) {
      console.log('Maybe a little lower... ');
    } else if (rand < guess) {
      console.log('Too high now... ');
    }
  } while (guess != rand);
  console.log('WOAH -- YOU ACTUALLY WON :O');
}

guessGame();