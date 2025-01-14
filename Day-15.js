/* Activity 1: Basic Regular Expressions */
/* Task 1: Match a Simple Pattern
Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string).Log the matches. */

let text = "JavaScript is a popular programming language, and JavaScript is used in web development.";
let regex = /JavaScript/g;
let matches = text.match(regex);
console.log(matches); // Output: [ 'JavaScript', 'JavaScript' ]

/* Task 2: Match All Digits 
Write a regular expression to match all digits in a string.Log the matches. */ 

let line = "The number 123456 is a sequence of digits.";
let res = /\d/g;
let word = line.match(res);
console.log(word); // Output: [ '1', '2', '3', '4', '5', '6' ]

function matchDigits(str) {
    let regex = /\d/g;
    return str.match(regex);
}
console.log("Match Digits:", matchDigits("My phone number is 123-456-7890."))

/* Output: Match Digits: [
  '1', '2', '3', '4',
  '5', '6', '7', '8',
  '9', '0'
] */

/* Activity 2: Character Classes and Quantifiers */ 
/* Task 3: Match Words Starting with a Capital Letter
Write a regular expression to match all words in a string that start with a capital letter.
Log the matches. */ 

function matchCapitalWords(str) {
    let regex = /\b[A-Z][a-z]*\b/g;
    return str.match(regex);
}
console.log("Match Capital Words:", matchCapitalWords("Hello World, Welcome to JavaScript."));

// Output: Match Capital Words: [ 'Hello', 'World', 'Welcome', 'JavaScript' ]

/* Task 4: Match Sequences of One or More Digits 
Write a regular expression to match all sequences of one or more digits in a string.
Log the matches. */ 

function matchDigitSequences(str) {
    let regex = /\d+/g;
    return str.match(regex);
}
console.log("Match Digit Sequences:", matchDigitSequences("There are 123 apples and 456 oranges.")); // Output: Match Digit Sequences: [ '123', '456' ]

/* Activity 3: Grouping and Capturing */ 
/* Task 5: Capture US Phone Number Components
Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890).
Log the captures. */ 

function captureComponents(phoneNumber) {
    let regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
    let matches = phoneNumber.match(regex);
    return matches.slice(1);
}
console.log("Capture Phone Number Components:", captureComponents("(123) 456-7890")); // Output: Capture Phone Number Components: [ '123', '456', '7890' ]

/* Task 6: Capture Email Address Components  
Write a regular expression to capture the username and domain from an email address.
Log the captures. */ 

function captureEmailComponents(email) {
    let regex = /(\w+)@(\w+\.\w+)/;
    let match = email.match(regex);
    return match ? { username: match[1], domain: match[2] } : null;
}
console.log("Capture Email Components:", captureEmailComponents("example@test.com")); // Output: Capture Email Components: { username: 'example', domain: 'test.com' }

/* Activity 4: Assertions and Boundaries */ 
/* Task 7: Match Word at the Beginning of a String
Write a regular expression to match a word only if it is at the beginning of a string.
Log the matches. */ 

function Startingword(str, word) {
    let regex = new RegExp(`^${word}\\b`);
    return str.match(regex);
}
console.log("Match Word at Start:", Startingword("Welcome to the World of programming! Hello world", "Welcome ")); 

/* Output: Match Word at Start: [ 'Welcome' ]
Match Word at Start: [
  'Welcome ',
  index: 0,
  input: 'Welcome to the World of programming! Hello world',
  groups: undefined
] */

/* Task 8: Match Word at the End of a String 
Write a regular expression to match a word only if it is at the end of a string.Log the matches. */ 

function Endingword(str, word) {
    let regex = new RegExp(`\\b${word}$`);
    return str.match(regex);
}
console.log("Match Word at End:", Endingword("Welcome to the World of programming! Hello world", "world"));

/* Output: Match Word at End: [ 'world' ] 
Match Word at End: [
  'world',
  index: 43,
  input: 'Welcome to the World of programming! Hello world',
  groups: undefined
] */

/* Activity 5: Practical Applications */ 
/* Task 9: Validate a Simple Password: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character).
Log whether the password is valid. */ 

function validatePassword(password) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}
console.log("Password is Valid:", validatePassword("Password123!")); // Output: Password is Valid: true

/* Task 10: Validate a URL
Write a regular expression to validate a URL.Log whether the URL is valid. */

function validateURL(url) {
    let regex = /^(https?:\/\/)?(www\.)?[\w\.-]+\.\w{2,}(\/\w*)*$/;
    return regex.test(url);
}
console.log("URL is Valid:", validateURL("https://www.example.com")); // Output: URL is Valid: true
