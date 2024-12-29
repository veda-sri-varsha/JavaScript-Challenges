/* Activity 1: Variable Declaration */
/* Task 1: Declare a variable using var, assign it a number, and log the value to the console. */

var a = 10
console.log(a) // Output : 10

/* Task 2: Declare a variable using `let, assign it a string, and log the value to the console. */

let b = "Veda Sri Varsha"
console.log(b) // Output : Veda Sri Varsha

/* Activity 2: Constant Declaration */
/* Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console. */

const c = true
console.log(c)

/* Activity 3: Data Types */
/* Task 4: Create variable of different data types (number, string, boolean, object, array) and log each variable's type using the tyreof operator. */

let d = 100
var e = "Veda"
var f = false
const object = {
    name : "Lokesh",
    class : 10
}
const arr = [2,4,5]

console.log(typeof(d)) // Output - number
console.log(typeof(e)) // Output - string
console.log(typeof(f)) // Output - boolean 
console.log(typeof(object)) // Output - object
console.log(typeof(arr) , Array.isArray(arr)) // Output - object true

/* Activity 4: Reassigning variables */
/* Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console. */

let ao = 1000
ao = 2000
console.log(ao) // Output 

/* Activity 5: Understanding cont */
/* Task 6: Try reassigning a variable declared with const and observe the error */
const am = 45
am =456
console.log(am) // Output - TypeError: Assignment to constant variable.
    // at Object.<anonymous> (/tmp/ZsIVwnpgwT/main.js:47:4)
    // at Module._compile (node:internal/modules/cjs/loader:1565:14)
    // at Object..js (node:internal/modules/cjs/loader:1708:10)
    // at Module.load (node:internal/modules/cjs/loader:1318:32)
    // at Function._load (node:internal/modules/cjs/loader:1128:12)
    // at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    // at wrapModuleLoad (node:internal/modules/cjs/loader:219:24)
    // at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
    // at node:internal/main/run_main_module:36:49
    
    
/* Feature Request */
/*  Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console. */
/* Reasignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment. */

// let - has the new scope which can change to new value when reassigning 
// var - its also changining when reassigning in a global scope 
// const - it has block scope , so i has the strict behaviour the reassignation value wont change accordingly in result - Type Error




