'use strict'

let result = prompt('Enter some number', '');

if (result > 0) {
  alert(1);
}
else if (result < 0) {
  alert(-1);
}
else if (result == 0) {
  alert(0);
} else {
  alert('Please, reload this page and enter some number.');
}
