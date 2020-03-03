// function textBox(){
//   var x = document.getElementById('myText').value;
//   document.getElementById("demo").innerHTML = x;
// };

var fields = {
  document.addEventListener("DOMContentLoaded", function(){
    fields.lastname = document.getElementById('lastname');
    fields.firstname = document.getElementById('firstname');
    fields.email = document.getElementById('email');
    fields.question = document.getElementById('question');
  })
};

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

  valid &= fieldValidation(fields.last)

}






















/
