/* Psuedocode
  1. Click on button to get prompt of questions
  2. Ask user how many characters the password should be
      a. Store that value in variable (Length of Chars >= 8 <=m 128 )
  3. Ask user if generated password should have lowercase, uppercase, 
     numeric and/or special character
      a. If any of the selection is chosen, ensure atleast one character type is included in password
  4. After user questions are complete, then output password
  
  */

// Assignment Code

// let value = prompt("How many characters do your want your password to be?");

var generateBtn = document.querySelector("#generate");
let boolValue = true;

let lChars = false;
let uChars = false;
let nChars = false;
let sChars = false;
let numOfChars = 0;
let counter = 0;
let upperCaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCaseString = 'abcdefghijklmnopqrstuvwxyz';
let numericString = '0123456789';
let specialString = '@#$!^%()&*';
let generatePasswdString = '';
let tempString = '';

// Write password to the #password input
function writePassword() { 
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  
  while(boolValue === true){
    numOfChars = parseInt(prompt("How many characters do your want your generated password to be?")); //ensure it is a number
    
    if((8 > numOfChars) || (numOfChars>128) || isNaN(numOfChars)){ //another check for if is NAN. isNAN
      alert("Please enter a valid number of characters: <= 8 and >= 128");
    }else{
      boolValue = false;
      break;
    }
  }
  let lowerChars = confirm("Do you want lower characters in your generated password?");
      concatStr_DecrementVar(lowerChars, lowerCaseString);
    // if(lowerChars){
    //   tempString += returnSingleValue(lowerCaseString);
    //   console.log(tempString);
    //   numOfChars--;
    //   generatePasswdString += lowerCaseString;
      
    // }
  let upperChars = confirm("Do you want upper characters in your generated password?");
      concatStr_DecrementVar(upperChars, upperCaseString);
    // if(upperChars){
    //   tempString += returnSingleValue(upperCaseString);
    //   console.log(tempString);
    //   numOfChars--;
    //   generatePasswdString += upperCaseString;
      
    // }
  let numericChars = confirm("Do you want numeric characters in your generated password?");
  concatStr_DecrementVar(numericChars, numericString);
    // if(numericChars){
    //   tempString += returnSingleValue(numericString);
    //   console.log(tempString);
    //   numOfChars--;
    //   generatePasswdString += numericString;
      
    // }
  let specialChars = confirm("Do you want special characters in your generated password?");
  concatStr_DecrementVar(specialChars, specialString);
    // if(specialChars){
    //   tempString += returnSingleValue(specialString);
    //   console.log(tempString);
    //   numOfChars--;
    //   generatePasswdString += specialString
    
    // }

  pass = '';
    for(let i = 0; i < numOfChars; i++){
      var charIndex = Math.floor(Math.random() * generatePasswdString.length);
      //https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/
      // for loop
      pass += generatePasswdString.charAt(charIndex);
      
    }
    //pass += tempString;
    console.log(pass);
    console.log(tempString);
    //var passwrd = reSufflePassword(pass, tempString);
    //console.log(passwrd);
    pass += tempString;
    boolValue = true;
    return pass;
}

function returnSingleValue(stringValue){
    var strVal = Math.floor(Math.random() * stringValue.length);
    return stringValue.charAt(strVal);
}

//Need to resuffle values to ensure suffled output
// function reSufflePassword(tempStringValue, passwordValue){

//   for(var i = 0; i<tempStringValue.length; i++){
//     var tempChar = tempStringValue.charAt(i);
//     var charIndex = Math.floor(Math.random() * passwordValue.length);
//     passwordValue += tempStringValue.charAt(charIndex);
//   }
//   return passwordValue;
//  // passwordValue += tempStringValue;


// }

function concatStr_DecrementVar(booleanCharsChosen, str){

  if(booleanCharsChosen){
    tempString += returnSingleValue(str);
    console.log(tempString);
    numOfChars--;
    console.log(numOfChars)
    generatePasswdString += str;
  
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
