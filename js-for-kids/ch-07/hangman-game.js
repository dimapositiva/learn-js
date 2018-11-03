let words = [
  'javascript',
  'monkey',
  'amazing',
  'pancake',
  'summer',
  'cat',
  'monday',
  'evil',
  'gym',
  'boiler',
  'roommate',
  'lesson',
  'car'
];

const pickWord = arr => {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

const setUpAnswerArray = word => {
  let answerArray = [];
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
  }
  return answerArray;
}

const showProgress = word => {
  getAttempts(word);
  alert(`   ${word.join(' ')}
    remain attempts: ${attempts}`);
}

const getGuess = () => prompt('Guess a letter, or click "Cancel" to stop playing.');

const updateGameState = (letter, word, answerArray) => {
  for (let j = 0; j < word.length; j++) {
    let guess = letter.toLowerCase();
    if (word[j] === guess && guess !== answerArray[j]) {
      answerArray[j] = guess;
      remainingLetters--;
      let count = 0;
      for (let k = 0; k < answerArray.length; k++) {
        if (guess === answerArray[k]) {
          count++;
        }
      }
      if (count <= 1) {
        attempts++;
      }
    }
  }
  if (letter !== null && letter.length === 1) {
    attempts--;
  }
}

const showAnswer = (answerArray, remainingLetters) => {
  if (remainingLetters === 0) {
    alert(answerArray.join(' '));
    alert(`Good job! The answer was ${word}.`);
  } else if (attempts === 0 && remainingLetters > 0) {
    alert('Game over :(');
  }
}

const getAttempts = word => word.length + 3;
let word = pickWord(words);
let answerArray = setUpAnswerArray(word);
let remainingLetters = word.length;
let attempts = getAttempts(word);

while (remainingLetters > 0 && attempts > 0) {
  showProgress(answerArray);
  let letter = getGuess();
  if (letter === null) {
    alert('Game over :(');
    break;
  } else if (letter.length !== 1) {
    alert('Please enter a single letter.');
  } else {
    let correctGuesses = updateGameState(letter, word, answerArray);
  }
}

showAnswer(answerArray, remainingLetters);
