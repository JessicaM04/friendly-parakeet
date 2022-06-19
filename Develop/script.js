// Assignment code here

function passQuestions(){
  var lengthPromptValue = 
    window.prompt("How many characters would you like" +
    "in your password? Please pick between 8 and 128 characters.");
  // Getting the length of the password from the user //
  if(lengthPromptValue === "" || lengthPromptValue === null){
    lengthPromptValue = window.prompt("Please enter a value.")
    console.log(lengthPromptValue);
  }

  if(lengthPromptValue < 8 || lengthPromptValue > 128){
    lengthPromptValue = window.prompt("Please enter a valid length.")
  }

  // To see if user wants to use uppercase letters //
  var confirmUpper = window.confirm("Would you like uppercase letters to be included in your password?");
  console.log("confirmUpper is " , confirmUpper);
  // To see if user wants to use lowercase letters //
  var confirmLower = window.confirm("Would you like lowercase letters to be included in your password?");
  console.log("confirmLower is ", confirmLower);
  // To see if user wants to use numbers //
  var confirmNumber = window.confirm("Would you like a number to be included in your password?");
  console.log("confirmNumber is ", confirmNumber);
  // To see if user wants to use special characters //
  var confirmSpecial = window.confirm("Would you like special characters to be included in your password?");
  console.log("confirmSpecial is ", confirmSpecial);
}



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
    var randomNumber = Math.floor(Math.random() * charsForPassword.length);
    password += charsForPassword.substring(randomNumber, randomNumber +1);
  }
  console.log("this is the password: ", password);
  console.log(charsForPassword);
  return password;
}

//  <button onclick="writePassword()">Click</button> 
// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
