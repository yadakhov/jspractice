/**
 * Calculate n!
 * @param number
 * @returns {number}
 */
function factorial(number) {
    "use strict";

    var product = 1;
    for (var i = number; i >= 1; --i) {
        product *= i;
    }
    return product;
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));

function factorialRecursion(number) {
    if (number <= 1) {
        return 1;
    }

    return number * factorialRecursion(number - 1);
}
console.log(factorialRecursion(4));
console.log(factorialRecursion(5));
console.log(factorialRecursion(10));
