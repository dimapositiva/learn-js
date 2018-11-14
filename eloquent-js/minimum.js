//Write a function min that takes two arguments and returns their minimum.

const minimum = (a, b) => {
  if (a > b) {
    return b;
  } else if (a < b) {
    return a;
  } else {
    return 'First and second argument is equal.';
  }
}
