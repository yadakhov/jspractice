/**
 * Calculate n!
 * @param number
 * @returns {number}
 */
function factorial(number) {
    "use strict";

    var product = 1;
    for (i = number; i >= 1; --i) {
        product *= i;
    }
    return product;
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));
