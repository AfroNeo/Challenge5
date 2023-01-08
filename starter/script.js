// * Generate a password when the button is clicked
//   * Present a series of prompts for password criteria
//     * Length of password
//       * At least 10 characters but no more than 64.
//     * Character types
//       * Lowercase
//       * Uppercase
//       * Numeric
//       * Special characters ($@%&*, etc)
//   * Code should validate for each input and at least one character type should be selected
//   * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

//NOTE TO SELF - Go back to watch the beginning of Friday 06th Jan 2023 video to help with the Home Work Challenge

//This is what was slacked out by instructor:

// let practicePassword = "";
//   for (let i = 0; i < 100; i++) {
    
//     practicePassword += "j"
    
//   }



//   return practicePassword;


// and

// let randomIndex = Math.floor(Math.random()*arrayName.length)

// then

// bigArray = bigArray.concat(exampleArray)



// Array of special characters to be included in password
var special = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lower = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upper = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let numberCharacters = parseInt(window.prompt("how many characters"))
  console.log(numberCharacters)
while (isNaN(numberCharacters) || numberCharacters  < 10 || numberCharacters > 64) {
 numberCharacters = parseInt(window.prompt("how many characters"))
}

  let confirmSpecial = window.confirm("Do You Want Special Characters")
  console.log("confirmSpecial", confirmSpecial);

  
  let numericCharacters = window.confirm("Do you want numeric characters")
  console.log("numericCharacters", numericCharacters);

  let lowerCasedCharacters = window.confirm("Do you want lower case characters")
  console.log("lowerCasedCharacters", lowerCasedCharacters);

  let upperCasedCharacters = window.confirm("Do You Want upper Cased Characters")
  console.log("upperCasedCharacters", upperCasedCharacters);
//above I have inputed a series of prompts for password criteria
return{
  numberCharacters, confirmSpecial, numericCharacters, lowerCasedCharacters, upperCasedCharacters
}

}

function random(array){
  return array[Math.floor]
}


//Put if statements here and else if
// if (numberCharacters) {
//   //think of how to write it here
  
// }

// else if (condition) {
  
// }

// if (condition) {
  
// }

// else if (condition) {
  
// }

// Function for getting a random element from an array
function getRandom(array) {
return array[Math.floor(Math.random()*array.length)]
}

// Function to generate password with user input
function generatePassword() {
  //function not defined so I am going to define it here and inform the user when they click the button in the console log that the button has been clicked.
  console.log("Button clicked")
  const {
    numberCharacters, confirmSpecial, numericCharacters, lowerCasedCharacters, upperCasedCharacters
  } = getPasswordOptions();

const password = []

let possibleOptions = []

if (confirmSpecial) {
  possibleOptions = possibleOptions.concat(special)
  password.push(getRandom(special))
}

if (numericCharacters) {
  possibleOptions = possibleOptions.concat(numbers)
  password.push(getRandom(numbers))
}

if (lowerCasedCharacters) {
  possibleOptions = possibleOptions.concat(lower)
  password.push(getRandom(lower))
}


if (upperCasedCharacters) {
  possibleOptions = possibleOptions.concat(upper)
  password.push(getRandom(upper))
}

for (let i = password.length; i < numberCharacters; i++) {
 password.push(getRandom(possibleOptions))
}
console.log(password.join(""))

//I have changed the undefined display message to return a new message of "Your Random Password will be Generated" when the user clicks the Generate Password button.
  return password.join("")
}

Math.random()




// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);