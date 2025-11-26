const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter seconds: ", (input) => {
  let time = Number(input);
  const timer = setInterval(() => {
    console.log("Time left:", time);
    time--;
    
    if (time < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);
  function checkKey() {
    setTimeout(() => {
      rl.input.once("data", () => {
        clearInterval(timer);
        console.log("Countdown Stopped by User!");
        rl.close();
      });
      checkKey();
    }, 200);
  }

  checkKey();
});
