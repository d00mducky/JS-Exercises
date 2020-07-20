function transposeTwoWords(inputArray) {
  // given an input array containing two words, 
  // transpose them to log to the console vertically.

  var firstWord = inputArray[0];
  var secondWord = inputArray[1];

  for (let i = 0; i < firstWord.length; i++) {
    // if we are on the last iteration, do not add a newline
    if (i === firstWord.length - 1) {
      console.log(firstWord[i] + ' ' + secondWord[i]);
    } else { // otherwise log respective characters and add newline to the end
      console.log(firstWord[i] + ' ' + secondWord[i] + '\n');
    }
  }

}

var wordsToBeTransposed = ['hello', 'world'];
transposeTwoWords(wordsToBeTransposed);