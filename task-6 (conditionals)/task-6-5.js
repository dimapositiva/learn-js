'use strict'

let message, login;

login = prompt('Please, enter your login', '');

message = (login == null)
?
'Please, enter your login' : (login == 'Vasia')
?
'Hi, ' : (login == 'Director')
?
'Good afternoon, ' : (login == '')
?
'Login doesn\'t exist' : '';

alert(message + login + '!');
