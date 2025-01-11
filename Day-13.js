/* Activity 1: Class Definition */
/* Task 1: Define a class Person with properties name and age, and a method to return a greeting message.Create an instance of the Person class and log the greeting message */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person("Alice", 25);
console.log(person1.getGreeting());

/* Task 2: Add a method to the Person class to update the age property and log the updated age */

Person.prototype.updateAge = function (newAge) {
  this.age = newAge;
  console.log(`Updated age: ${this.age}`);
};

person1.updateAge(26); // Output: Updated age: 26

/* Activity 2: Class Inheritance */
/* Task 3: Define a class Student that extends the Person class,Create an instance of the Student class and log the student ID */

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return `Student ID: ${this.studentId}`;
  }
}

const student1 = new Student("Bob", 20, "S12345");
console.log(student1.getStudentId()); // Output: Student ID: S12345

/* Task 4: Override the greeting method in the Student class */

Student.prototype.getGreeting = function () {
  return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
};

console.log(student1.getGreeting()); // Output: Hello, my name is Bob, I am 20 years old, and my student ID is S12345.

/* Activity 3: Static Methods and Properties */
/* Task 5: Add a static method to the Person class that returns a generic greeting message */

Person.getGenericGreeting = function () {
  return "Hello, welcome to the Person class!";
};

console.log(Person.getGenericGreeting()); // Output: Hello, welcome to the Person class!

/* Task 6: Add a static property to the Student class to track the number of students.Increment the static property in the constructor */

Student.totalStudents = 0;
class Count extends Student {
  constructor(name, age, studentId) {
    super(name, age, studentId);
    Count.totalStudents++;
  }
}

const student2 = new Count("Charlie", 22, "S67890");
console.log(`Total students: ${Count.totalStudents}`); // Output: Total students: 1

/* Activity 4: Getters and Setters */
/* Task 7: Add a getter method to the Person class for the full name.Create an instance and log the full name using the getter*/

class PersonWithFullName extends Person {
  constructor(firstName, lastName, age) {
    super(`${firstName} ${lastName}`, age);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newName) {
    const [firstName, lastName] = newName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = newName;
  }
}

const person2 = new PersonWithFullName("Diana", "Smith", 30);
console.log(person2.fullName); // Output: Diana Smith

/* Task 8: Update the name using the setter and log the updated full name */

person2.fullName = "Evelyn Brown";
console.log(person2.fullName); // Output: Evelyn Brown

/* Activity 5: Private Fields (Optional) */
/* Task 9: Define a class Account with private fields for balance */

class Account {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn: ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Invalid withdrawal amount.");
    }
  }

  getBalance() {
    return this.#balance;
  }
}
// Output: Deposited: 500. New balance: 1500
// Output: Withdrawn: 300. New balance : 1200
// Output: Final Balance: 1200

/* Task 10: Create an instance of the Account class and test deposit and withdraw methods */

const account1 = new Account(1000);
account1.deposit(500);
account1.withdraw(300);
console.log(`Final Balance: ${account1.getBalance()}`);

const account2 = new Account(2000);
account2.deposit(100);
account2.withdraw(250);
console.log(`Final Balance: ${account2.getBalance()}`);
// Output: Deposited: 100. New balance: 2100
// Output : Withdrawn: 250. New balance: 1850
// Output : Final Balance: 1850
