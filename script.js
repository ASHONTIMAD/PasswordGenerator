// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "1234567890"
var specialcharacter = "!@#$%^&*?"
var password = document.getElementById("password");

function genPassword() {
  var passwordLength = parseInt(prompt(
    "Choose a password length of at least 8 characters and no more than 128 characters"
  ),
  );
  console.log(passwordLength)
  var finalPassword = ""
  if (passwordLength >= 8 && passwordLength <= 128) {
    var isLowercase = confirm("do you want to add lowercase to password?")
    var isUppercase = confirm("do you want to add an uppercase to password?")
    var isNumeric = confirm("do you want to add a number to your password?")
    var isSpecialchar = confirm("do you want to add a special character to your password?")
    for (var i = 0; i < passwordLength; i++) {

      if (isLowercase === true && finalPassword.length < passwordLength) {
        var position = Math.floor(Math.random() * lowercase.length)
        finalPassword = finalPassword + lowercase[position]
      }
      if (isUppercase === true && finalPassword.length < passwordLength) {
        var position = Math.floor(Math.random() * uppercase.length)
        finalPassword = finalPassword + uppercase[position]
      }
      if (isNumeric === true && finalPassword.length < passwordLength) {
        var position = Math.floor(Math.random() * number.length)
        finalPassword = finalPassword + number[position]
      }
      if (isSpecialchar === true && finalPassword.length < passwordLength) {
        var position = Math.floor(Math.random() * specialcharacter.length)
        finalPassword = finalPassword + specialcharacter[position]
      }
    }
  }
  else {
    alert("error invalid entry")
  }
  return finalPassword
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = genPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
