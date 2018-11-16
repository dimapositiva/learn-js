/*  Given an array of integers, find the pair of adjacent elements that has
the largest product and return that product.  */

const fn = (arr) => {
  let sum = arr[0] * arr[1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] * arr[i + 1] > sum) {
      sum = arr[i] * arr[i + 1];
    }
  }
  return sum;
};
