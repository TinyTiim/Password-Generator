// These vars are for my button including the choices such as lowercase,uppercase,numbers,how long ,etc.
var generateBtn = document.querySelector("#generate");
var characterLength = 8 > 28;
var choiceCharacter = [];
var specialCharacter = [ '!', '@', '#', '$','%','^','&','*','?','/','<','>',];
var lowerCass = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCass = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];

console.log("Click the button to get a randomized password!");
//This is my button, when you click it the writepassword function will operate.

generateBtn.addEventListener("click", writePassword);



// This function is what writes the password 
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
// This allows to randomize, so that way everything gets mixed intogether, so that way when you generate the password it will be random.
function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceCharacter.length);
    password = password + choiceCharacter [randomIndex];
  }
  
  return password;
}
// This allows when I click the botton you get tabs with the following questions. I also included If you press yes or no it will log which options you press as well as how many characters.
function Messages(){
  choiceCharacter = [];

  characterLength = parseInt(prompt("How many characters in between (8 - 128)"));
  console.log("You choose, " + characterLength + " for how many characters.");

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    console.log("Has to be between 8-128");
    return false;
  }

  if (confirm("Would you like lowercase digits in your password?")) {
      choiceCharacter = choiceCharacter.concat(lowerCass);
      console.log("You choose YES, for lowercase");

  }
  else {
    console.log("You choose NO, for lowercase");
  }

  if (confirm("Would you like uppercase digits in your password?")) {
       choiceCharacter = choiceCharacter.concat(upperCass);
       console.log("You choose YES, for uppercase");

  }
  else {
    console.log("You choose NO, for uppercase");
  }

  if (confirm("Would you like special digits in your password?")) {
       choiceCharacter = choiceCharacter.concat(specialCharacter); 
       console.log("You choose YES, for special keys");
  }
  else {
    console.log("You choose NO, for special keys");
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceCharacter = choiceCharacter.concat(numbers); 
    console.log("You choose YES, for numbers");
}
else {
  console.log("You choose NO, for numbers");
}
  return true;
}



