const add = (a, b) => a + b;

const multiply = (c, d) => c * d;

const getResult = (x, y, z) => add(multiply(x, y), z);

console.log(getResult(36325, 9824, 777));
