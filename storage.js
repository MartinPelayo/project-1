'use strict';
          //local storage for username and email
var form = document.querySelector('form');

function submitHandler(){
  var nameDomElement = document.getElementById('username');
  var emailDomElement = document.getElementById('email');

  var nameData = nameDomElement.value;
  JSON.stringify(nameData);
  localStorage.setItem('nameString', nameData);

  var emailData = emailDomElement.value;
  JSON.stringify(emailData);
  localStorage.setItem('emailString', emailData);
}
// var test2 = JSON.parse(nameTest);
// console.log(test2);

            //local storage data for score
var getScoreString = localStorage.getItem('score');
var scoreData = JSON.parse(getScoreString);


if (form) {
  form.addEventListener('submit', submitHandler);
  var nameTest = localStorage.getItem('nameString');
  console.log(nameTest);
  var emailTest = localStorage.getItem('emailString');
  console.log(emailTest);
}

