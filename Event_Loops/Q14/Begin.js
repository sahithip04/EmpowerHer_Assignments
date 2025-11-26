console.log("Begin");
setTimeout(() => {
  console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Task");
});
console.log("End");

// The code runs in this order because JavaScript finishes all normal (synchronous) lines first,
// so it prints Begin and End. After that, it handles microtasks like Promises, so Promise Task comes next.
// Finally, it runs macrotasks like setTimeout, even if the delay is 0, so Timeout Task appears last.

