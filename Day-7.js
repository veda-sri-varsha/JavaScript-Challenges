/* Day 7: Objects */

/* Activity 1: Object Creation and Access */
/*  Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console. */

  let book = { 
   title: "Atomic Habits", 
   author: "James Clear", 
   year:  2018 
 }; 
 console.log(book); // Output:{ title: 'Atomic Habits', author: 'James Clear', year: 2018 }

/* Task 2: Access and log the title and author properties of the book object. */

 console.log(book.title);  // Output: Atomic Habits
 console.log(book.author); // Output: James Clear

/* Activity 2: Object Methods */
/* Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method. */

 book.getInfo = function() {
   return `${this.title} by ${this.author}`;
 }; 
 console.log(book.getInfo()); // Output:Atomic Habits by James Clear  

/* Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object. */

 book.updateYear = function(newYear) { 
 this.year = newYear; 
 }; 
 book.updateYear(2018); 
 console.log(book); // Output: { title: 'Atomic Habits', author: 'James Clear', year: 2018 } 

/* Activity 3: Nested Objects */
/* Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console. */

 let library = { 
   name: "Korean Library", 
   books: [book] 
 }; 
 console.log(library); 

 /* Output:{
  name: 'Korean Library',
  books: [
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      year: 2018,
      getInfo: [Function (anonymous)],
      updateYear: [Function (anonymous)]
    }
  ]
} */
 
/* Task 6: Access and log the name of the library and the titles of all the books in the library. */

console.log(library.name); // Output: Korean Library 
library.books.forEach(book => console.log(book.title)); // Output:Atomic Habits 

/* Activity 4: The this Keyword */
/* Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method. */

book.getInfo = function() { 
  return `${this.title}, published in ${this.year}`; 
}; 
console.log(book.getInfo()); // Output:Atomic Habits, published in 2018

/* Activity 5: Object Iteration */
/* Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value. */

for (let property in book) {
    console.log(`${property}: ${book[property]}`);
  }
  /* Output: 
title: Atomic Habits
author: James Clear
year: 2018
getInfo: function() {
   return `${this.title} by ${this.author}`;
 }
updateYear: function(newYear) {
 this.year = newYear;
 }
getdetails: function() {
  return `${this.title}, published in ${this.year}`;
} */

/* Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object. */

console.log(Object.keys(book)); // Output:[ 'title', 'author', 'year', 'getInfo', 'updateYear' ] 
console.log(Object.values(book));  

/* Output :
[
  'Atomic Habits',
  'James Clear',
  2018,
  [Function (anonymous)],
  [Function (anonymous)]
] */


