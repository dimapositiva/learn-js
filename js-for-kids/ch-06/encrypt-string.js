//with if...else

const getEcryptString = string => {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    let letter;
    if (string[i] === 'a' || string[i] === 'A') {
      letter = 4;
    } else if (string[i] === 'e' || string[i] === 'E') {
      letter = 3;
    } else if (string[i] === 'i' || string[i] === 'I') {
      letter = 1;
    } else if (string[i] === 'o' || string[i] === 'O') {
      letter = 0;
    } else {
      letter = string[i];
    }
    newString += letter;
  };
  console.log(newString);
}

//with switch
const getEcryptString2 = string => {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    let letter;
    switch (string[i]) {
      case 'a':
        letter = 4;
        break;
      case 'A':
        letter = 4;
        break;
      case 'e':
        letter = 3;
        break;
      case 'E':
        letter = 3;
        break;
      case 'i':
        letter = 1;
        break;
      case 'I':
        letter = 1;
        break;
      case 'o':
        letter = 0;
        break;
      case 'O':
        letter = 0;
        break;
      default:
        letter = string[i];
    }
    newString += letter;
  }
  console.log(newString);
}
