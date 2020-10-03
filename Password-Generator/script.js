var generateBtn = document.querySelector("#generate");



  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    function generatePassword() {
      var passwordLength = prompt("Choose a number between 8 and 128");
      console.log(parseInt(passwordLength));
      if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        window.alert("You need choose a number between 8 and 128!");
        return generatePassword();
      
      } else {
        var uppercase = window.confirm("Uppercase letters?");
        console.log(uppercase);
        var lowercase = window.confirm("Lowercase letters?");
        console.log(lowercase);
        var numerals = window.confirm("Numerals?");
        console.log(numerals);
        var spec = window.confirm("Special characters?");
        console.log(spec);
      }

      if (uppercase == 1) {
        var strUpper= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      } else { var strUpper='';

}

      if (lowercase == 1) {
        var strLower= 'abcdefghijklmnopqrstuvwxyz';
      } else { var strLower='';

}

      if (numerals == 1) {
        var strNum= '0123456789';
      } else { var strNum='';

}

      if (spec == 1) {
        var strSpec= '@#$%^&*?!';
      } else { var strSpec='';

      }

      /* Function to generate combination of password */

        var password = '';
        var str1 = strUpper + strLower + strNum + strSpec;

        for (i = 1; i <= passwordLength; i++) {
          var char = Math.floor(Math.random()
            * str1.length + 1);

          password += str1.charAt(char)



          // Write password to the #password input
          console.log(password)

        }
        return password;
    }
  };

  generateBtn.addEventListener("click", writePassword);