// Day 3: Control Structures
// Tasks/Activities:

// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 777;
if(num > 0)
{
    console.log("Therefore, Given number is Positive ");
}
else if( num < 0){
    console.log("Therefore, given Number is Negative");
}
else{
    console.log("Therefore ,Given Number is Zero ")
}

// Task 2: Write a program to check if a person is eligible to vote based on their age (age >= 18) and log the result to the console.
var age = 21;
if (age >= 18) {
    console.log("The person is eligible to vote.");
} else {
    console.log("The person is not eligible to vote.");
}

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let a = 7; b=2 ;c= 1;
if (a > b) {
    if (a > c) {
        console.log("The largest number is: " + a);
    } else {
        console.log("The largest number is: " + c);
    }
} else {
    if (b > c) {
        console.log("The largest number is: " + b);
    } else {
        console.log("The largest number is: " + c);
    }
}

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 7;
switch (day) {
    case 1: console.log("It's a Monday"); break;
    case 2: console.log("It's a Tuesday"); break;
    case 3: console.log("It's a Wednesday"); break;
    case 4: console.log("It's a Thursday"); break;
    case 5: console.log("It's a Friday"); break;
    case 6: console.log("It's a Saturday"); break;
    case 7: console.log("It's a Sunday"); break;
    default: console.log("Invalid day number.");
}
// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 100;
switch (true) {
    case (score >= 90):
        console.log("Grade: A"); break;
    case (score >= 80):
        console.log("Grade: B"); break;
    case (score >= 70): 
         console.log("Grade: C"); break;
    case (score >= 60):
         console.log("Grade: D"); break;
    default: console.log("Grade: F");
}

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let n = 2;
console.log(n % 2 === 0 ? "Even" : "Odd");

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
}
 else {
        console.log(year + " is not a leap year.");
}

// Feature Request:

// Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
// Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
// Tasks -Done