const randomString = () => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let randomString = '';

  let i = 0;

  while (i < 12) {
    let random = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[random];
    i++;
  }

  console.log(randomString);
}
