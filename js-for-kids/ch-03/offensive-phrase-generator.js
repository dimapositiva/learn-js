let bodyPart = ['nose', 'head', 'face', 'eyes', 'mouth', 'ear'];
let adjectives = ['ridiculous', 'scariest', 'disgusting', 'nasty', 'huge', 'strange', 'messy'];
let animals = ['dog', 'cat', 'bear', 'baboon', 'bat', 'donkey'];
let animalBodyParts = ['cheek', 'nose', 'leg', 'mouth', 'ear', 'toe', 'neck', 'abdomen', 'back', 'armpit', 'buttocks'];

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const getOffensivePhrase = () => {
  console.log(`Your ${random(bodyPart)} is more ${random(adjectives)} than ${random(animals)}'s ${random(animalBodyParts)}!`);
}

getOffensivePhrase()
