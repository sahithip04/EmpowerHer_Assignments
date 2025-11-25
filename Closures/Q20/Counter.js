//Question 1: Closure-Based Counter Implementation
function createCounter() {
  let count = 0;
  
  function increment() {
    count++;
    console.log("Incrementing count", count)
  }
  
  function decrement() {
    count--;
    console.log("Decrementing count", count)
  }
  return{increment, decrement}
}
 
 const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 
//2)Explain how closures are being used to encapsulate the counter variable.
// Closures let the inner functions (increment and decrement) keep access to the count variable even 
// after createCounter finishes running. The count variable stays hidden inside the function, and 
// only the returned inner functions can use or change it. This keeps count private and protected 
// from the outside.

//3)What happens if multiple counters are created using the same function? Provide examples to 
// demonstrate this behavior.
// If you create multiple counters using createCounter(), each one gets its own separate count value
// because every call to the function creates a new closure. This means the counters do not affect each other.

const counterA = createCounter();
const counterB = createCounter();

counterA.increment(); 
counterA.increment(); 

counterB.increment(); 
counterB.decrement(); 





//Question 2: Simulating Private Variables with Closures
function createBankAccount() {
  let balance = 0; 
  let transactionHistory = [];

  function deposit(amount) {
    balance += amount;
    transactionHistory.push(`Deposited: ${amount}`);
    console.log(`Deposited: ${amount}`);
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log("Insufficient balance");
      transactionHistory.push(`Failed withdrawal: ${amount}`);
    } else {
      balance -= amount;
      transactionHistory.push(`Withdrawn: ${amount}`);
      console.log(`Withdrawn: ${amount}`);
    }
  }

  function checkBalance() {
    console.log("Current balance:", balance);
  }

  function getHistory() {
    console.log("Transaction History:", transactionHistory);
  }

  return {
    deposit,
    withdraw,
    checkBalance,
    getHistory
  };
}
const account = createBankAccount();
account.deposit(500); 
account.withdraw(200);
account.withdraw(400); 
console.log(account.balance); 

// 2) How does the closure keep balance private? 
// The balance variable is created inside the createBankAccount function, 
// so it can’t be accessed directly from outside. But the inner functions (deposit, withdraw, checkBalance) 
// are returned and they still “remember” the balance variable. This is a closure. Because of this, 
// only these inner functions can use or change balance, keeping it private and protected.

// 3) How closures allow transactionHistory to work 
// transactionHistory is also inside the createBankAccount function, so it becomes private just like balance.
// The returned functions can still access and update it because of closures. Each bank account created will 
// have its own separate history stored in its own closure.