//arrays for special characters, lower case letters upper case letters and numbers

var specialCharas = "~!@#$%^()-_+{}[]\\/?':''.";
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var upCase = lowCase.toUpperCase();
var num = "0123456789";



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  return "";
}

function writePassword() {
  var password = promptForLength();
  var passwordChar = promptCharas();
  var passwordText = document.querySelector("#password");

  passwordText.value = createPassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function promptForLength() {
  let charLength = prompt("How many characters would you like in your password?\nBetween 8 and 24", "8");
  if (charLength < 8  ||  Math.sign(charLength) === -1 ) {
    alert("Your password must be at least 8 characters. Enter a number of characters between 8 and 24.");
    window.location.reload(true)
    throw new Error()
    }
  if (charLength > 24) {
    alert("Your password can't have more than 24 characters. Enter a number of characters between 8 and 24)");
    window.location.reload(true)
    throw new Error() 
    }
  if (isNaN(charLength)) {
    alert("Enter a number of characters between 8 and 24");
    window.location.reload(true)
    throw new Error()
  }  
}

function checkLength() {
  if ((charLength)) {
    alert("Enter a number of characters between 8 and 24");
    window.location.reload(true);
    passwordArray.length = 0
    throw new Error();
  }
}

//prompt functions
  function promptCharas() {
    let special = confirm("Would you like special characters in your password?");
    if (special) {specialCharas.push; }
    let lower = confirm("Would you like lowercase letters in your password?");
    if (lower) {lowCase.push; }
    let upper = confirm("Would you like uppercase letters in your password?");
    if (upper) {upCase.push; }
    let number = confirm("Would you like numbers in your password?");
    if (number) {num.push; }
        }

  function createPassword() {
    let password = "";
    for (let i = 0; i < charLength; i++) {
      let randomIndex = Math.floor(Math.random() * flatPasswordArray.length);
      let randomChar = flatPasswordArray[randomIndex];
      password += randomChar;
          }
          return password
        }
