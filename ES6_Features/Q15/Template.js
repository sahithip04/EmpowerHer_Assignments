///a)Create a variable username and course and print: "Hello , 
// welcome to the course!" using template literals.
let username="Sahithi";
let course="Java Script";
console.log(`Hello ${username}, welcome to the course ${course}!`);


///b)Convert the below object into shorthand syntax:
const name = "Sam";
const age = 21;
const student = {
   name,
   age,
  greet() {
    console.log("Hello");
  }
};
student.greet()


///c)Create a function getFullName(first, last) 
// using arrow function shorthand (no return keyword).
const getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName("Palaparthi", "Sahithi"));