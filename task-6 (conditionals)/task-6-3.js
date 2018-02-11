'use strict'

let password;

let username = prompt('who\'s come?', '');

if (username == null) {
  alert('Login canceled.');
}
else if (username == 'Admin') {
  password = prompt('Please, enter password', '');

    if (password == 'Dark Lord') {
      alert('Welcome!');
    }
    else if (password == null) {
      alert('Login canceled.');
    } else {
      alert('Wrong password!');
    };

} else {
  alert('I do not know you!');
}
