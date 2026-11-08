// Exercise 3: Countdown Timer
// Goal: print a countdown from 5 to 0, one number per second, using recursion + setTimeout.
// (no loops, no setInterval)
//
// Expected output:
//   5
//   4
//   3
//   2
//   1
//   0
//   Time's up!
//
// Run: node ex03.js

// write your code here
function countdown(num) {
    console.log(String(num));

    if (num === 0) {
        setTimeout(() => {
            console.log("Time's up!");
        }, 1000);
        return;
    }

    setTimeout(() => {
        countdown(num - 1);
    }, 1000);
}

countdown(5);