var generateBtn = document.querySelector("#generate");

//write password to document
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //begin function to generate password
  passwordText.value = password;
  function generatePassword() {
    var passwordLength = prompt("Choose a number between 8 and 128");
    console.log(parseInt(passwordLength));
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      window.alert("You need to choose a number between 8 and 128!");
      return generatePassword();

    //choose a character type
    } else {
      var uppercase = window.confirm("Uppercase letters?");
      var lowercase = window.confirm("Lowercase letters?");
      var numerals = window.confirm("Numerals?");
      var spec = window.confirm("Special characters?");
    }

    //make sure they choose at least one character type
    if (uppercase, lowercase, numerals, spec == 0) {
      window.alert("You must choose at least one character type.  You can't have an empty password.");
      return generatePassword();
    }

    if (uppercase == 1) {
      var strUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else {
      var strUpper = '';
    }

    if (lowercase == 1) {
      var strLower = 'abcdefghijklmnopqrstuvwxyz';
    } else {
      var strLower = '';
    }

    if (numerals == 1) {
      var strNum = '0123456789';
    } else {
      var strNum = '';
    }

    if (spec == 1) {
      var strSpec = '@#$%^&*?!';
    } else {
      var strSpec = '';
    }

    // Generate combination of password 

    var password = '';
    var str1 = strUpper + strLower + strNum + strSpec;

    for (i = 1; i <= passwordLength; i++) {
      var char = Math.floor(Math.random()
        * str1.length + 1);

      password += str1.charAt(char)

      // Write password to the #password input
    }
    return password;
  }
};

generateBtn.addEventListener("click", writePassword);

//coded by webprinc3ss