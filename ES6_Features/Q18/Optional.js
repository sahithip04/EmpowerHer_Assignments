///a) What is the output?
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
// console.log(x);
// var is function-scoped (not block-scoped), so it comes out of the if block.
// That's why y can be accessed outside and prints 20.
// let is block-scoped, so it exists only inside the curly braces.
// Accessing x outside the block gives "x is not defined".


///b)Access the following safely using optional chaining:
const profilee = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profilee?.user?.details?.email);
console.log(profilee?.user?.details?.phone);

///c)Create an example where optional chaining prevents a 
// runtime error when accessing a missing nested property.
const student = {
  name: "Sahithi",
  contacts: {
    email: "sahithi@mail.com"
  }
};
console.log(student?.name?.contacts?.phones);