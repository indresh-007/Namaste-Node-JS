require("./xyz.js"); // one module into another

// import { calculateSum } from "./sum.js"; // ES Module

// const { calculateSum } = require("./calculate/sum.js"); // Common JS Module

// const { calculateMultiply }= require("./calculate/multiply.js");

const util = require("node:util");

const { calculateMultiply, calculateSum } = require("./calculate");

const data = require("./data.json");

console.log(data);

var name = "Namaste Node JS";

var a = 10;
var b = 20;

calculateSum(a, b);
calculateMultiply(a, b);


// console.log(name);
// console.log(a + b);

// console.log(global);

// console.log(this); // Empty Object

// console.log(globalThis);

// console.log(globalThis === global); // true
