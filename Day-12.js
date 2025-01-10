/* Activity 1: Basic Error Handling with Try-Catch */
/* Task 1: Intentional Error Throwing */

/* Create a function that throws an error with an informative message. 
   Wrap the function call in a try-catch block to catch the error and log an appropriate message to the console. */

const throwError = () => {
    throw new Error("Error Thrown!"); //Output: Error Thrown!
    }

try {
    throwError();
}
catch (error) {
    console.error(error.message);
}


/* Task 2: Division by Zero Check */

/* Design a function that divides two numbers. 
   Within the function,check for division by zero and throw an error if encountered. 
   Use a try-catch block to handle the potential error and provide a meaningful message. */

const div = (num1, num2) => {
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed!"); //Output: Division by zero is not allowed!
    }
    return num1 / num2;
}

try {
    console.log(div(10, 0));
}
catch (error) {
    console.error(error.message);
}

/* Activity 2: Finally Block */
/* Task 3: Execution Flow Observation */

/* Construct a script that includes a try-catch block and a finally block. 
   Log messages within each block (try, catch, and finally) to observe the order of execution. */

try {
    console.log("Inside try block"); 
    throw new Error("Error Thrown!");
}
catch (error) {
    console.error("Inside catch block:", error.message);
}
finally {
    console.log("Inside finally block"); //Output: Inside try block Inside catch block: Error Thrown! Inside finally block
}

/* Activity 3: Custom Error Objects */
/* Task 4: Custom Error Class */


/* Create a custom error class that inherits from the built-in Error class. 
   This class should have a constructor to define a custom error name and message. Throw an instance of this custom error class in a function. 
   Utilize a try-catch block to handle the custom error and log a specific message. */

   class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

try {
    throw new MyError("This is a custom error!");
} catch (error) {
    console.error(`${error.name}: ${error.message}`); //Output: MyError: This is a custom error! 
}

/* Task 5: Custom Error for Validation */

/* Create a function that validates user input (e.g., checking for an empty string). 
   If the validation fails, throw a custom error object with a descriptive message. 
   Utilize a try-catch block to handle the custom error and provide appropriate feedback. */

const Input = (input) => {
    if (input === "") {
        throw new MyError("Input cannot be empty!");
    }
    return input;
}

try {
    console.log(Input("")); //Output: MyError: Input cannot be empty!
}
catch (error) {
    console.error(`${error.name}: ${error.message}`);
}

/* Activity 4: Error Handling in Promises *
/* Task 6: Promise Rejection Handling */

/* Construct a promise that resolves or rejects based on a random condition. 
   Utilize the .catch() method to handle the rejection scenario and log a user-friendly message. */

const randomPro = new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
}
);

randomPro
    .then((message) => console.log(message))
    .catch((error) => console.error(error)); //Output: Promise rejected!

/* Task 7: Try-Catch with Async Function */

/* Design an async function that attempts to fetch data using a promise. 
   Wrap the promise call in a try-catch block to capture potential errors. 
   Log an informative error message if the promise rejects. */

const fetchData = async () => {
    try {
        await randomPro;
    } catch (error) {
        console.error("Error in promise:", error); //Output: Error in promise: Promise rejected!
    }
}

fetchData();

/* Activity 5: Graceful Error Handling in Fetch */
/* Task 8: Fetch Error Handling with .catch() */

/* Employ the fetch API to retrieve data from an invalid URL. Utilize the .catch() method to capture network or other errors that may occur. 
   Log a clear error message to the console. */

fetch("https://invalid-url")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network Error!");
        }
        return response.json();
    })
    .catch((error) => {
        console.error("Error in fetch:", error); //Output: Error in fetch: Error: Network Error!
    });

/* Task 9: Try-Catch with Async Function and Fetch */

/* Create an async function that uses fetch to request data from an invalid URL. 
   Wrap the fetch call in a try-catch block to handle potential errors. 
   Log a detailed error message in the catch block. */

const Data = async () => {
    try {
        const response = await fetch("https://api.github.com/users/octocat");
        if (!response.ok) {
            throw new Error("Network Error!");
        }
        return response.json();
    } catch (error) {
        console.error("Error in fetch:", error); //Output: Error in fetch: Error: Network Error!
    }
}

