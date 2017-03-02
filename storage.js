'use strict';
var loadName;
var loadEmail;
var loadScore;
var playGame = document.getElementById('play_game');

function playHandler() { //Sets storage for username and email
  var nameDomElement = document.getElementById('username');
  var emailDomElement = document.getElementById('email');

  var nameData = nameDomElement.value;
  JSON.stringify(nameData);
  localStorage.setItem('nameString', nameData);

  var emailData = emailDomElement.value;
  JSON.stringify(emailData);
  localStorage.setItem('emailString', emailData);
}

if (playGame) {
  playGame.addEventListener('click', playHandler);
}

function loadHandler() { //retrieves name, email, and score data
  loadName = localStorage.getItem('nameString');
  loadEmail = localStorage.getItem('emailString');
  loadScore = localStorage.getItem('score');
}
