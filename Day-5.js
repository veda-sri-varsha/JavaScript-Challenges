/* Day 5: Functions */

/* Activity 1: Function Declaration */
/* Task 1: Write a function to check if a number is even or odd and log the result to the console. */
 
function result(num){
    if (num % 2 === 0) {
        console.log(num + ' is even');
      } else {
        console.log(num + ' is odd');
      }
    }

    result(2); // Output:2 is even
    result(4); // Output:4 is even 

/* Task 2: Write a function to calculate the square of a number and return the result. */

function sq(num) {
    return num * num;
  }

  console.log(sq(2)); // Output:4

/* Activity 2: Function Expression */
/* Task 3: Write a function expression to find the maximum of two numbers and log the result to the console. */

const findMax = function(num1, num2) {
    const max = num1 > num2 ? num1 : num2;
    console.log('The maximum is ' + max);
  }

  findMax(27,10); // Output: 

/* Task 4: Write a function expression to concatenate two strings and return the result. */

const concat = function (str1, str2) {
  return str1 + ' ' + str2;
};

console.log(concat('Hello','World')); //Output:Hello World

/* Activity 3: Arrow Functions */
/* Task 5: Write an arrow function to calculate the sum of two numbers and return the result. */

const sum = (num1, num2) => num1 + num2;
console.log(sum(3, 4)) // Output: 7

/* Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value. */

const Char = (str, char) => str.includes(char);

console.log(Char('Hello', 'e')); // Output:true
console.log(Char('World', 'z')); // Output:false

/* Activity 4: Function Parameters and Default Values */
/* Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter. */

function multiply(num1, num2 = 1) {
  return num1 * num2;
}

console.log(multiply(5)); // Output:5

/* Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age. */

function greet(name, age = 21) {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

console.log(greet('Cute')); // Output:Hello, my name is Cute and I am 21 years old.

/* Activity 5: Higher-Order Functions */
/* Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.*/

function result(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

result(() => console.log("Hello!"), 3);

/* Output :
Hello!
Hello!
Hello! */

/* Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result. */

function Fun(fn1, fn2, value) {
    return fn2(fn1(value));
  }
  
  const names = (rno) => "Student-" + rno;
  const id = (student) => student + " - Class 10";
  
  console.log(Fun(names, id, 101));
  