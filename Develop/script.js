// Assignment code here

function generatePassword(length, isUpper, isLower, isNumbers, isSpecial) {
  var passwordLength = length;
  var charsForPassword = "";
  var password = "";

  if(isUpper){
    charsForPassword += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if(isLower){
    charsForPassword += "abcdefghijklmnopqrstuvwxyz" 
  }

  if(isNumbers){
    charsForPassword += "0123456789"
  }

  if(isSpecial){
    charsForPassword += "!@#$%^&*()"
  }

  //forloop
  for(var i = 0; i < passwordLength; i++) {
    var passwordLength = Math.floor(Math.random() * charsForPassword);
    password += passwordLength(randomNumber, randomNumber +1);
  }

  return password;
}

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
