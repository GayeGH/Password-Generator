// Assignment Code
// Create our password choices - lower and uppercase letters, numbers, and special characters
var lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];
var specialArr = ['1','?','@','#','$','%',"^",'&','*'];

var choicesArr = [];
var finalChoices = [];

//Prompts for choices
function generatePassword() {

  var length = prompt('Choose a length for your password between 8 and 128 characters.');
  if (length <= 128 && length >= 8){

  var wantLowercase = confirm('Do you want lowercase characters?');

  var wantUppercase = confirm('Do you want uppercase characters?');

  var wantNumbers = confirm('Do you want numbers?');

  var wantSpecial = confirm('Do you want special characters?');
  
  if(wantLowercase === true) {
    choicesArr.push(lowercaseArr);
   }
  if(wantUppercase === true) {
    choicesArr.push(uppercaseArr);
  }
  if(wantNumbers === true) {
    choicesArr.push(numberArr);
  }
  if(wantSpecial --- true) {
    choicesArr.push(specialArr);
  }
    
   console.log(choicesArr);

    var choicesStr = choicesArr.toString();
    var choicesSingleArr = choicesStr.split(',');
    console.log(choicesSingleArr);

    for (let i = 0; i < length; i++) {
      //This is a randomizer, picks a random number
      var randomNum = Math.floor(Math.random() * choicesSingleArr.length);
      //Index our array using that random number to get a value
      var randomChar = choicesSingleArr[randomNum];

      finalChoices.push(randomChar);
    }
      var passStr = finalChoices.toString();
      var finalPass = passStr.replace(/,/g, "");
      return finalPass;
  }
  else  {  
    alert('You need to choose a length between 8 and 128 characters.');
  }
}
// Generate a password from the choices
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button

generateBtn.addEventListener('click',writePassword);


