// Activity 1: Arithmetic Operations
// Task 1: Write a program to add two numbers and log the result to the console.
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log("Addition=",sum);//Output:Addition= 15

// Task 2: Write a program to subtract two numbers and log the result to the console.
let difference = num1 - num2;
console.log("Subtraction=",difference);//Output:Subtraction= 5

// Task 3: Write a program to multiply two numbers and log the result to the console.
let product = num1 * num2;
console.log("Multiplication=",product);//Output:Multiplication= 50

// Task 4: Write a program to divide two numbers and log the result to the console.
let quotient = num1 / num2;
console.log("Division=",quotient);//Output:Division= 2

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let remainder = num1 % num2;
console.log("Remainder=",remainder);//Output:Remainder= 0

// Activity 2: Assignment Operators
// Task 6: Use the + operator to add a number to a variable and log the result to the console.
var n1=10;
n1++;
console.log("+ operator(incre)=",n1);//Output:+ operator(incre)= 11

// Task 7: Use the operator to subtract a number from a variable and log the result to the console.
n1--;
console.log("- operator(decre)=",n1); //Output:- operator(decre)=10

// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
  console.log("using > and <");
  console.log(10 > 5);//Output:true
  console.log(10 < 5);//Output:false

// Task 9: Write a program to compare two numbers using > and <= and log the result to the console.
console.log("using > and <=");
 console.log(10>5);//Output:true
 console.log(10<5);//Output:false
 console.log(10>=5);//Output:true
 console.log(10<=5);//Output:false

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
console.log("using == and ===");
let a = 777;
let b = "777";
console.log(a==b);//Output:true
console.log(a===b);//Output:false

// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let value1 = 10;
let value2 = 20;
if (value1 < value2 && value1 > 0) {
    console.log("Both conditions are true");
  } else {
    console.log("At least one condition is false");
  }
// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
if (value1 > value2 || value1 > 0) {
    console.log("At least one condition is true (OR)");
  } else {
    console.log("Both conditions are false (OR)");
  }
// Task 13: Write a program that uses the operator to negate a condition and log the result to the console.
console.log(!(10 < 5));

// Activity 5: Ternary Operator
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let numOne = 7777;
console.log(numOne > 0 ? "Positive" : "Negative");

// Feature Requests
// Arithmetic Operations Script : Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
// Comparison and Logical Operators Script : Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
// Ternary Operator Script : Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
// Combines conditions using logical operators: && (AND), || (OR), ! (NOT).
// Uses the ternary operator (? :) to check if a number is positive or negative.