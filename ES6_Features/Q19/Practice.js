// 1. Template Literals

// a)Template literal where result is calculated inside ${}
console.log(`5 + 7 = ${5 + 7}`);

// b)Multi-line template literal
const multi = `Hello
Welcome to the class
Let's start`;
console.log(multi);

// c)Full name using template literal
const firstName = "John", lastName = "Doe";
console.log(`${firstName} ${lastName}`);



// 2. Arrow Functions & this

// a)Convert to arrow function
const square = (n) => n * n;
console.log(square(4));

// b)Explain why the following logs undefined:
const obj1 = {
  value: 50,
  test: () => console.log(this.value) 
};
obj1.test();
//Arrow function logs undefined because arrow functions don't have their own "this"

// c)Correct version using normal method
const obj2 = {
  value: 50,
  test() {
    console.log(this.value); 
  }
};
obj2.test();



// 3. Spread, Rest & Copying Objects

// a)Shallow copy
const product = { name: "Pen", price: 10 };
const productCopy = { ...product };

// b)Merge objects
const a = { x: 1 };
const b = { y: 2 };
const mergedXY = {...a, ...b};

// c)Rest operator to find max
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(5, 20, 3));



// 4. Destructuring & Optional Chaining

// a)Destructure array
const arr = [10, 20, 30];
const [p, q] = arr;

// b)Destructure object
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;

// c)Optional chaining 
const info = {};
console.log(info?.data?.value);



// 5. Scoping

// a)What will this print?
for (var i = 0; i < 3; i++) {}
console.log(i);
//the above code prints 3 as var is global-scoped

// b)What will this print?
for (let j = 0; j < 3; j++) {}
// console.log(j); 
//let is block-scoped so it will show error


// c)const doesn' allow reassignment, it is used only 
// values which are going to be fixed.


// 6. Ternary Operator

// a)Convert to ternary
const kmph = 70;
console.log(kmph > 60 ? "Fast" : "Normal");

// b)Age check
const age = 17;
console.log(age >= 18 ? "Adult" : "Minor");

// c)Positive / Zero / Negative
const num = -5
console.log(
  num > 0
    ? "Positive"
    : num === 0
    ? "Zero"
    : "Negative"
);


// 7. Spread, Rest & Arrays

// a)Add using spread
const nums = [1, 2, 3];
const nums1 = [ 4, 5];
const nums2 = [...nums, ...nums1]
console.log(nums2)

// b)Combine arrays
const A = ["x", "y"];
const B = ["z"];
const combined = [...A, ...B];
console.log(combined)

// c)Rest function returning names array
const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));


// 8. Object Destructuring & Shorthand

// a)Destructure
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id);
console.log(status);

// b)Convert to Shorthand
const id1 = 101;
const role = "admin";
const user2 = { id1, role };
console.log(user2);

// c)Object with shorthand and  method
const score = 95;
const player = {
  score,
  greet() {
    console.log("Hello!");
  }
};
console.log(player.score);
player.greet();


// 9. Template Literals 

// a)Print today's date
console.log(`Today's date is ${new Date().toDateString()}`);

// b)Score template
const NAME = "John";
const SCORE = 88;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


// 10. Arrow Function Shorthands

// a)One-line addition
const add = (a, b) => a + b;
console.log(add(5,7))

// b)isAdult
const isAdult = age => age >= 18;
console.log(isAdult(20));

// c)double
const double = (n) => n * 2;
console.log(double(9))


// 11. Spread Operator

// a)clone an array
const arr1 = [1, 2, 3];
const arrClone = [...arr1]; 
console.log(arrClone);

// b)add 100 at start
const arr2 = [100, ...arr1]; 
console.log(arr2);

//c)merge two objects 
const objA = { name: "A", age: 20 };
const objB = { age: 40, city: "Hyd" };
const objC = { ...objA, ...objB }; 
console.log(objC);


// 12. Optional Chaining – More practice

const user3 = {
  name: "Alex",
  address: { city: "Bangalore" }
};

// a)Safe access
console.log(user3?.address?.city);

// b)Safe access (undefined)
console.log(user3?.job?.title);

// c)Optional chaining prevents runtime crash
const random = {};
console.log(random.details?.deep?.value); 
