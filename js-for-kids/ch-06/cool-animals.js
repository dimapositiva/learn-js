//with while
let animals = ['cat', 'fish', 'lemur', 'komodo dragon'];

const makeAwesome = arr => {
  let i = 0;
  while (i < arr.length) {
    arr[i] = `Awesome ${arr[i]}`;
    i++;
  }
}

//with for...in
const makeAwesome2 = arr => {
  for (let x in arr) {
    arr[x] = `Awesome ${arr[x]}`
  }
}
