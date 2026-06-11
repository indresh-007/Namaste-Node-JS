console.log("Very important js code");


// require("./path")
// All the code of the module is wrapped inside a function(IIFE)

console.log(__filename);
console.log(__dirname);

//IIFE - Immediately Invoked Function Expression
/*
(function (module, require) {
    // require(path)
    // All code of the module runs inside here
    function calculateMultiply(a, b) {
        const result = a * b;
        console.log(result);
    }

    module.exports = { calculateMultiply };

})();
*/

