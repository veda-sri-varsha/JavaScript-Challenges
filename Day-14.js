/* Activity 1: Understanding Closures */
/* Task 1:Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result. */

function outerfun() {
    let outerVariable = 'I am from outer function';
    function innerfun() {
        console.log(outerVariable);
    }
    return innerfun;
}

let innerfun = outerfun();
innerfun(); // Output: I am from outer function

/* Task 2:Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter. */

function counter() {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        getCurrentValue: function () {
            return count;
        }
    }
}

let counter1 = counter();
counter1.increment();
counter1.increment();
console.log(counter1.getCurrentValue()); // Output: 2

/* Activity 2: Practical Closures */
/* Task 3:Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call. */

function generateUniqueId() {
    let id = 0;
    return function () {
        return ++id;
    }
}

let uniqueId = generateUniqueId();
console.log(uniqueId()); // Output: 1
console.log(uniqueId()); // Output: 2
console.log(uniqueId()); // Output: 3

/* Task 4:Create a closure that captures a user's name and returns a function that greets the user by name. */

function greetUser(name) {
    return function () {
        console.log(`Hello ${name}`);
    }
}

let greet = greetUser('John');
greet(); // Output: Hello John

/* Activity 3: Closures in Loops */
/* Task 5:Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index. */

function createFunctions() {
    let functions = [];
    for (let i = 0; i < 5; i++) {
        functions.push(function () {
            console.log(i);
        });
    }
    return functions;
}

let functions = createFunctions();
functions[0](); // Output: 0
functions[1](); // Output: 1
functions[2](); // Output: 2
functions[3](); // Output: 3
functions[4](); // Output: 4

/* Activity 4: Module Pattern */
/* Task 6:Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items. */

let module1 = (function () {
    let items = [];
    return {
        add: function (item) {
            items.push(item);
        },
        remove: function (item) {
            items = items.filter(i => i !== item);
        },
        list: function () {
            return items;
        }
    }
}

)();
module1.add('apple');
module1.add('banana');
module1.add('orange');
console.log(module1.list()); // Output: ["apple", "banana", "orange"]

module1.remove('banana');
console.log(module1.list()); // Output: ["apple", "orange"]

/* Activity 5: Memoization */
/* Task 7:Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.*/

function memoize(fn) {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        }
        cache[n] = fn(n);
        return cache[n];
    }
}

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

let memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(3)); // Output: 6

/*Task 8:Create a memoized version of a function that calculates the factorial of a number.*/   

function memoize(fn) {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        }
        cache[n] = fn(n);
        return cache[n];
    }
}

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

let memoFactorial = memoize(factorial);
console.log(memoFactorial(5)); // Output: 120
console.log(memoFactorial(3)); // Output: 6
console.log(memoFactorial(5)); // Output: 120

