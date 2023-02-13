// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterLength = 8 > 28;
var choiceCharacter = [];
var specialCharacter = [ '!', '@', '#', '$','%','^','&','*','?','/','<','>',];
var lowerCass = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCass = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctMessages = Messages();
  
  var passwordText = document.querySelector("#password");

  if (correctMessages) {
    var oldpassword = generatePassword();
    
    passwordText.value = oldpassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceCharacter.length);
    password = password + choiceCharacter [randomIndex];
  }
  
  return password;
}
// This allows when I click the botton you get tabs with the following questions.
function Messages(){
  choiceCharacter = [];

  characterLength = parseInt(prompt("How many characters in between (8 - 128"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    console.log("Has to be between 8-128")
    return false;
  }

  if (confirm("Would you like lowercase digits in your password?")) {
      choiceCharacter = choiceCharacter.concat(lowerCass);
  }
  if (confirm("Would you like uppercase digits in your password?")) {
       choiceCharacter = choiceCharacter.concat(upperCass);
  }
  if (confirm("Would you like special digits in your password?")) {
       choiceCharacter = choiceCharacter.concat(specialCharacter); 
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceCharacter = choiceCharacter.concat(numbers); 
}
  return true;
}



