/* Day 8: ES6+ Features */

/* Activity 1: Template Literals */
/* Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console. */

const name = "Coder";
const age = 20;
console.log(`Hello, my name is ${name}, and I am ${age} years old.`); // Output:Hello, my name is Coder, and I am 20 years old.

/* Task 2: Create a multi-line string using template literals and log it to the console. */

const multiLine= `This is a multi-line string.
It spans multiple lines using template literals.`;
console.log(multiLine); 

/* Output:This is a multi-line string.
It spans multiple lines using template literals. */

/* Activity 2: Destructuring */
/* Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console. */

const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(`First: ${first}, Second: ${second}`); // Output:First: 1, Second: 2

/* Task 4: Use object destructuring to extract the title and author from a book object and log them to the console. */

const book = {
    title: "Coding Life",
    author: "Coder",
    year: 2025,
};
const { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`); // Output:Title: Coding Life, Author: Coder

/* Activity 3: Spread and Rest Operators */
/* Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console. */

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output:[ 1, 2, 3, 4, 5 ]

/* Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result. */

function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output:15

/* Activity 4: Default Parameters */
/* Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter. */

function product(a, b = 1) {
    return a * b;
}
console.log("Multiplication:",product(5, 3)); // Output:Multiplication: 15

/* Activity 5: Enhanced Object Literals */
/* Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console. */

const person = {
    name: "Coder",
    greet() {
        return `Hello, my name is ${this.name}.`;
    },
};
console.log(person.greet()); // Output:Hello, my name is Coder.

/* Task 9: Create an object with computed property names based on variables and log the object to the console. */

const key = "title";
const value = "Coding Life";
const books = {
    [key]: value,
};
console.log(books); // Output:{ title: 'Coding Life' }
