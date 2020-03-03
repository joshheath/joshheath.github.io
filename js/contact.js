var fields = {};

class User {
  constructor(firstname, lastname, email){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.question = question;
  }
}


document.addEventListener("DOMContentLoaded", function(){
  fields.lastname = document.getElementById('lastname');
  fields.firstname = document.getElementById('firstname');
  fields.email = document.getElementById('email');
  fields.question = document.getElementById('question');
})


function isNotEmpty(value){
  if(value == null || typeof value == 'undefined' ) return false;
  return (value.length > 0);
}


function isEmail(email){
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(String(email).toLowerCase());
}


function fieldValidation(field, validationFunction){
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
    field.calssName = 'placeholderRed';
  } else {
    field.className = ' ';
  }
  return isFieldValid;
}


function isValid(){
  var valid = true;

  valid &= fieldValidation(fields.lastname, isNotEmpty);
  valid &= fieldValidation(fields.firstname, isNotEmpty);
  valid &= fieldValidation(fields.email, isNotEmpty);

  return valid;
}


function sendContact(){
  if(isValid()){
    let usr = new User(firstname.value, lastname.value, email.value, question.value);

    alert(`${usr.firstname} thanks for getting in touch!`)
  } else {
    alert("There was an error")
  }
}





















/
