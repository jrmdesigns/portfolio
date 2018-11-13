function checkRegex(inputToCheck, expression, errorid){
  var input = document.getElementById(inputToCheck);
  var errorId = document.getElementById(errorid);
  var regex = new RegExp(expression);
  console.log(errorid);
  console.log("checkRegex");
  if(!regex.test(input.value))
  {
    console.log("checkRegex false")
   errorId.style.display="block";
 } else
 {
  console.log('checkRegex true');
  errorId.style.display="none";
}
}

function checkPhone(){
  var phoneRegex = new RegExp('^((\\+|00(\\s|\\s?\\-\\s?)?)31(\\s|\\s?\\-\\s?)?(\\(0\\)[\\-\\s]?)?|0)[1-9]((\\s|\\s?\\-\\s?)?[0-9])((\\s|\\s?-\\s?)?[0-9])((\\s|\\s?-\\s?)?[0-9])\\s?[0-9]\\s?[0-9]\\s?[0-9]\\s?[0-9]\\s?[0-9]$');

  checkRegex("phonenumber", phoneRegex, "error_phonenumber");
}



function checkEmail(){
  var regex = '^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$';
  checkRegex("email", regex, "error_email");
}

function checkName(){
  name = document.getElementById("contact_name");
  nameError = document.getElementById("error_name");
  if(name.innerHTML == null || name.innerHTML == "" || name.innerHTML){
    nameError.style.display = 'block';
  } else {
    nameError.style.display = 'none';
  }
}