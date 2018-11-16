/*
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.
As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].
*/

// function that takes 2 arguments and return an array of numbers that range includes
const range = (start, end) => {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};

// function that takes an array and return sum of all numbers that it includes
const sumOfRange = (arr) => {
  const reducer = (x, y) => x + y;
  return arr.reduce(reducer);
  // let sum = 0;
  // for (let x of arr) {
  //   sum += x;
  // }
  // return sum;
};

// function that takes 3 arguments - start, end and step
const range2 = (start, end, step = 1) => {
  const arr = [];
  if (end < start) {
    for (let i = start; end <= i; i += step) {
      arr.push(i);
    }
  } else if (start < end) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    return 'Error! Somthing went wrong. Please check your arguments.';
  }
  return arr;
};
