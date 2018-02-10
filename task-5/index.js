'use strict'

let name;

name = prompt('Enter your name', '');

if (name == null) {
  alert('You do not enter your name. Please, reload this page and enter your name.');
} else {
  alert('Hello, ' + name + '!');
}
