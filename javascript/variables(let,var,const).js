// console.log('Hello World!!')
// console.log(`helloo!\nAmit kumar`)


{var firstName = 'Raghav'} //functional scope --> we can use it anywhere
{let lastName = 'Singh'}   // block scope --> can be use in that block only not outside.
// variables in js ---> variable is a location in memory
let firstName = 'Amit'
let lastName  = 'Kumar'
let age = 21
let isHappy = true
let userIntro = 'Hii , I am '+ firstName + ' ' + lastName + ` And I am ${age} years old.`
console.log(userIntro)

// let a = undefined
// let a ;

let hoursIndays = 24
hoursIndays = 45
// const hoursIndays = 24    //can't reassign the value
// hoursIndays = 45

// types of naming conventions in javascript

// camelCase: This is the most common convention in JavaScript. The first word is lowercase, and subsequent words start with an uppercase letter.
// Used for:
// Variables (userName, totalAmount)
// Functions (calculateTotal(), getUserName())
// Methods (myObject.toString())
// PascalCase: Also known as UpperCamelCase, every word in the name begins with a capital letter.
// Used for:
// Class names (UserAccount, DataProcessor)
// Constructor functions
// React components
// UPPER_SNAKE_CASE: All letters are uppercase, and words are separated by underscores (_).
// Used for:
// Global constants (e.g., MATH.PI, API_KEY)
// Enum keys
// kebab-case: Words are separated by hyphens (-).
// Used for:
// File names (e.g., user-account.js)
// HTML attributes and CSS class names
// snake_case: Words are separated by underscores (_) and usually all lowercase.
// Used for: While common in other languages like Python, it is generally avoided in core JavaScript code but sometimes seen in file names for cross-platform safety.



