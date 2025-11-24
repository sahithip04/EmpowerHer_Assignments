///a) Use spread operator to merge:
arr1 = [1, 2, 3];
arr2 = [4, 5];
arr3 =[...arr1, ...arr2]
console.log(arr3);

///b) Create a function sum(...nums) using rest operator 
// that returns the sum of all numbers.
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1,2,3,4,5,6));

///c)Given:
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const {
  name,
  address: { city, pin }
} = user;
console.log(name);
console.log(city);
console.log(pin);