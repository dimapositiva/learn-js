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

let random = Math.floor(Math.random() * words.length);

let word = words[random];

let answerArray = [];

for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_';
};

let remainingLetters = word.length;

let attempts = word.length + 3;
console.log(attempts);

while (remainingLetters > 0 && attempts > 0) {

  alert(`   ${answerArray.join(' ')}
  remain attempts: ${attempts}`);
  let letter = prompt('Guess a letter, or click "Cancel" to stop playing.');
  if (letter === null) {
    alert('Game over :(');
    break;
  } else if (letter.length !== 1) {
    alert('Please enter a single letter.');
  } else {
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
  };

  if (letter !== null && letter.length === 1) {
    attempts--;
  }
}

if (remainingLetters === 0) {
  alert(answerArray.join(' '));
  alert(`Good job! The answer was ${word}.`);
} else if (attempts === 0 && remainingLetters > 0) {
  alert('Game over :(');
}
