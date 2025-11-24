///a) Write an arrow function isEven(n) 
// that returns true if even, else false.
const isEven = (a) => a%2==0
console.log(isEven(3))

///b)Rewrite the following using a ternary operator:
let marks=45;
let answer=(marks>=35)? "Pass" : "Fail";
console.log(answer);

///c) Write an arrow function greet(name) that prints: "Hello, " If no name is passed, 
// print "Guest" using the ternary operator.
const greet = (name) => console.log(`Hello, ${name ? name : "Guest"}`);
greet("Sahithi");
greet();