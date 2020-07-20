function transposeTwoWords(inputArray) {
  // given an input array containing two words, 
  // transpose them to log to the console vertically.

  var firstWord = inputArray[0];
  var secondWord = inputArray[1];
  var longestWord = inputArray[0];
  if (secondWord.length > longestWord.length) {
    longestWord = secondWord;
  }

  for (let i = 0; i < longestWord.length; i++) {
    if (firstWord[i] === undefined) {
      // if we are on the last iteration, do not add a newline
      if (i === longestWord.length - 1) {
        console.log('  ' + secondWord[i]);
      } else { // otherwise log respective characters and add newline to the end
        console.log('  ' + secondWord[i] + '\n');
      }
    } else if (secondWord[i] === undefined) {
      // if we are on the last iteration, do not add a newline
      if (i === longestWord.length - 1) {
        console.log(firstWord[i] + '  ');
      } else { // otherwise log respective characters and add newline to the end
        console.log(firstWord[i] + '  \n');
      }
    } else {
      // if we are on the last iteration, do not add a newline
      if (i === longestWord.length - 1) {
        console.log(firstWord[i] + ' ' + secondWord[i]);
      } else { // otherwise log respective characters and add newline to the end
        console.log(firstWord[i] + ' ' + secondWord[i] + '\n');
      }
    }

  }
}

var equalLengthWords = ['hello', 'world'];
var longerFirstWord = ['helloo', 'world'];
var longerSecondWord = ['hello', 'worlds'];
console.log('Equal Length Words:\n')
transposeTwoWords(equalLengthWords);
console.log('\nLonger First Word:\n');
transposeTwoWords(longerFirstWord);
console.log('\nLonger Second Word:\n');
transposeTwoWords(longerSecondWord);