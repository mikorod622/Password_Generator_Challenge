// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];

//password writer to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Password Generator
function generatePassword() {
  var passParameters = [false, false, false, false];
  var passwordGen = "";
  var num = 0;
  //password parameter prompts
  num = window.prompt("How long should your password be?(8-128)");
  if (num < 8 || num > 128) {
    window.alert("Invalid length");
    return;
  }
  if (confirm("include lowercase characters?")) {
    passParameters[0] = true;
    console.log(passParameters);
  }
  if (confirm("include uppercase characters?")) {
    passParameters[1] = true;
    console.log(passParameters);
  }
  if (confirm("include numbers?")) {
    passParameters[2] = true;
    console.log(passParameters);
  }
  if (confirm("include special characters?")) {
    passParameters[3] = true;
    console.log(passParameters);
  }
  if (passParameters[0]==false && passParameters[1]==false && passParameters[2]==false && passParameters[3]==false) {
    window.alert("Invalid parameters");
    return;
  }
  //password generator
  var charType = null;
  function charGen (Char) {
    charType = Char;
    passwordGen = passwordGen.concat(charType[Math.floor(Math.random() *charType.length)]);
  }
  for (var index = 0;index < num;) {
    if (passParameters[0] == true && index < num) {
      charGen(lowercase);
      console.log(num);
      console.log(index);
      index++;
    }
    if (passParameters[1] == true && index < num) {
      charGen(uppercase);
      console.log(num);
      console.log(index);
      index++;
    }
    if (passParameters[2] == true && index < num) {
      charGen(numbers);
      console.log(num);
      console.log(index);
      index++;
    }
    if (passParameters[3] == true && index < num) {
      charGen(specialCharacters);
      console.log(num);
      console.log(index);
      index++;
    }
  }
  return passwordGen;
}

//event listener to generate button
generateBtn.addEventListener("click", writePassword);
