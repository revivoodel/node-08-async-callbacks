// Exercise 4: Random Line from File
// Goal: read quotes.txt using a callback, split it into lines, ignore empty lines and print a random one.
// Required: fs.readFile(filePath, callback)
//
// Expected output (random on each run):
//   Random Line: Stay positive.
//
// Run: node ex04.js

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "quotes.txt");

// write your code here
fs.readFile(filePath, "utf8", (err, text) => {
    if (err) return console.log(err.message);

    const lines = text.split(/\r?\n/).filter(line => line.trim() !== "");

    const randomIndex = Math.floor(Math.random() * lines.length);

    console.log(`Random Line: ${lines[randomIndex].trim()}`);
});