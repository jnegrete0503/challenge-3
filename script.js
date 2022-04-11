// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// 
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialcharacters = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
const passwordlength = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Create function pertaining to Generate password 

function generatePassword(){
    passwordCharacters = "";
    userpassword = "";

      // alert the user to choose the amount of characters 

        let pwdlength = prompt (  "Please determine the amount of characters you would like to select between 8 to 128"
      )

      // determine if the characters meet the following requirement

      if (pwdlength >= 8 && pwdlength <= 128){
      password.length = pwdlength ;

          // ask the user if they would like to add the following  - BLANK -
            var tospecialcharacters = confirm ("Would you like to add Special Characters ?");
            var touppercase = confirm ("would you like to include UPPERCASE characters ?");
            var tolowercase = confirm ("would you like to add lowercase characters ?");
           var tonumbero = confirm ("would you like to include numbers ?");
          } else {
           alert("please choose a password between 8 to 128 characters")
        }

      // conditional statments
        if (tolowercase === true){
        passwordCharacters += lowercase;
        }
        if (touppercase === true){
        passwordCharacters += uppercase; 
        }
      if (tonumbero === true){
      passwordCharacters += numbers;
      }
      if (tospecialcharacters === true){
      passwordCharacters += specialcharacters;
      }
      for (var i = 0; i < pwdlength; i++){
      userpassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      }

      return userpassword;
    }
    
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


