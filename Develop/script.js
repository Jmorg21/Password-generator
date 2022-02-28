var generateBtn = document.querySelector("#generate");
var passwordEl = document.querySelector("#password"); 



var askPasswordCase = function() {
  var promptCase = window.prompt('Would you like only lowercase letters, only uppercase letters, or both? Type "lower", "upper", or "both".');

  if (promptCase === "" || promptCase === null) {
    window.alert('Please type "lower", "upper", or "both".');
    return askPasswordCase();
  }

  promptCase = promptCase.toLowerCase();

  if (promptCase === "lower") {
    passwordCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    chooseNumber();
  }

  if (promptCase === "upper") {
    passwordCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    chooseNumber();
  }

  if (promptCase === "both") {
    passwordCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    chooseNumber();
  }
};

function chooseNumber() {

  var passwordLength = window.prompt("How many characters do you want your password to be? Choose a number between 8 and 128.");
  
  if (passwordLength === "" || passwordLength === null) {
    window.alert("Please choose a number between 8 and 128.");
    return chooseNumber();
  } 

  else if (passwordLength < 8) {
    window.alert("Please choose a number higher than 8.");
    return chooseNumber();
  }
  
  else if (passwordLength > 128) {
    window.alert("Please choose a number lower than 128.");
    return chooseNumber();
  }

  else (passwordLength >= 8 && passwordLength <= 128); {
    combinedArray();
    function combinedArray() {
      newArray = [].concat(specialChar, passwordCase);
    }

    generatePassword();
    function generatePassword() {
      const newArray = [].concat(specialChar, numericChar, passwordCase);
      const chooseRandom = (newArray, num = 1) => {
        const res = [];
        for(let i = 0; i < num; ){
          const random = Math.floor(Math.random() * newArray.length);
          if(res.indexOf(newArray[random]) !== -1){
              continue;
          };
          res.push(newArray[random]);
          i++;
        };
        return res;
      };

        writePassword();
        function writePassword() {
          var password = (chooseRandom(newArray, passwordLength));
          var passwordText = document.querySelector("#password");
          passwordText.value = password.join(""); 
        }
    };
  };
};

generateBtn.addEventListener("click", specialOrReg);
  function specialOrReg() {
    var promptCharacters = window.prompt("Do you want your password to include special characters?");
    
    if (promptCharacters === "" || promptCharacters === null) {
      window.alert("Please provide a valid answer.");
      return specialOrReg();
    }

    promptCharacters = promptCharacters.toLowerCase();

    if (promptCharacters === "no") {
      specialChar = [""];
      askNumbers();
    }
  
    if (promptCharacters === "yes") {
      specialChar = ['!', '”', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '}', '|', '~' ];
      askNumbers();
    }
  };

  function askNumbers() {
    var promptNumbers = window.prompt("Do you want your password to include numbers?");
    
    if (promptNumbers === "" || promptNumbers === null) {
      window.alert("Please provide a valid answer.");
      return askNumbers();
    }

    promptNumbers = promptNumbers.toLowerCase();

    if (promptNumbers === "no") {
      numericChar = [""];
      askPasswordCase();
    }
  
    if (promptNumbers === "yes") {
      numericChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
      askPasswordCase();
    }
  };