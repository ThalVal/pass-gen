//arrays for special characters, lower case letters upper case letters and numbers

var specialCharas = "~!@#$%^()-_+{}[]\\/?':''.";
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var upCase = lowCase.toUpperCase();
var num = "0123456789";



// Assignment Code
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var length = promptForLength();
  var passchars = promptCharas();
  var passwordText = document.querySelector("#password");
  passwordText.value = createPassword(length, passchars);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//prompt for length
function promptForLength() {
  let charLength = prompt("How many characters would you like in your password?\nBetween 8 and 24", "8");
  if (charLength < 8) {
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
  return charLength
}

//prompt functions
function promptCharas() {
  let special = confirm("Would you like special characters in your password?");
  let passwordArray = ""
  if (special) {passwordArray += specialCharas; }
  let lower = confirm("Would you like lowercase letters in your password?");
  if (lower) {passwordArray += lowCase; }
  let upper = confirm("Would you like uppercase letters in your password?");
  if (upper) {passwordArray += upCase; }
  let number = confirm("Would you like numbers in your password?");
  if (number) {passwordArray += num; }
  
  return passwordArray
}


// ya like password ?        
function createPassword(charLength, passchars) {
  let password = "";
  for (let i = 0; i < charLength; i++) {
    let randomIndex = Math.floor(Math.random() * passchars.length);
    let randomChar = passchars[randomIndex];
    password += randomChar;
  }
  return password;
}
