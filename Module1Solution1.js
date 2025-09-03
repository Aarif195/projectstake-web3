
// The variable 'a' is bound to the number value 10.
let a = 10; 

// The variable 'b' is bound to the number value 5.
let b = 5;

// Demonstrating the '+' operator
// This adds the values of 'a' and 'b' to create a new number value, 15.
let sum = a + b;
console.log(`The sum of ${a} and ${b} is: ${sum}`); // Expected output: The sum of 10 and 5 is: 15

// Demonstrating String values and the typeof operator
// The variable 'greeting' is bound to a string value.
let greeting = "Hello, World!"; 
console.log(`The type of 'greeting' is: ${typeof greeting}`); // Expected output: The type of 'greeting' is: string

// Demonstrating Boolean values and comparison operators
// The variable 'isGreaterThan' is a boolean value.
let isGreaterThan = a > b;
console.log(`Is ${a} greater than ${b}? ${isGreaterThan}`); // Expected output: Is 10 greater than 5? true

// Demonstrating short-circuiting with the || (OR) operator
// 'name' is an empty string, which is a "falsy" value.
let name = "";
let userName = name || "Guest"; // The expression short-circuits to the right side ("Guest").
console.log(`The user's name is: ${userName}`); // Expected output: The user's name is: Guest

// 'age' is a number value (10), which is a "truthy" value.
let age = 10;
let userAge = age || 30; // The expression short-circuits to the left side (10).
console.log(`The user's age is: ${userAge}`); // Expected output: The user's age is: 10

// Demonstrating short-circuiting with the && (AND) operator
// 'isValid' is a boolean value.
let isValid = (100 > 50) && (100 < 200); // The expression evaluates to 'true'.
console.log(`The condition is valid: ${isValid}`); // Expected output: The condition is valid: true

// Since the first part of the expression is 'false', the second part is not evaluated.
let isInvalid = (100 === 50) && (100 > 20); // The expression evaluates to 'false'.
console.log(`The condition is invalid: ${isInvalid}`); // Expected output: The condition is invalid: false