// Assignment code here


var charSets = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric: '0123456789',
  special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
};




function generatePassword() {
  var userChoice = ''
  var length = prompt("Enter a password length between 8 and 128");
  if (length <8 || length >128 || isNaN(length)) {
    return "please use a number between 8 and 128"
  }
  var lowercase = confirm ("do you want lowercase letters in your password?");
  var uppercase = confirm ("do you want uppercases in your password?");
  var numeric = confirm ("do you want numbers in your password?");
  var special = confirm ("do you want special characters in your password?");

  if (lowercase === true ) {
    userChoice = userChoice + charSets.lowercase;
  }

  if (uppercase === true) {
    userChoice = userChoice + charSets.uppercase;
  }

  if (numeric === true) {
    userChoice = userChoice + charSets.numeric;
  }

  if (special === true) {
    userChoice = userChoice + charSets.special;
  }
  var userChoices = ''
  for (let i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * userChoice.length)
    userChoices = userChoices + userChoice.charAt(randomIndex)
  }
console.log (userChoices);
console.log (userChoice.length);
  return userChoices
}
 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);