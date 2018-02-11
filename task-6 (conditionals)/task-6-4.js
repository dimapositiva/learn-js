'use strict'

let a = parseInt(prompt('Enter first number', ''));

let b = parseInt(prompt('Enter second number', ''));

//without cheking entered data
let res = (a + b < 4) ? 'Few' : 'Much';

alert(res);
