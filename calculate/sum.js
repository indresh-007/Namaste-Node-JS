// Modules protects their variables and functions from leaking

// ES Modules
/*
export var x = "Hello World";

export function calculateSum(a, b) {
    const sum = a + b;

    console.log(sum);
}
*/

// console.log("Sum Module Executed");

// commonJS Module
require("../xyz.js");

function calculateSum(a, b) {
    const sum = a + b;

    console.log(sum);
}


module.exports = { calculateSum };

// module.exports.x = x;
// module.exports.calculateSum = calculateSum
