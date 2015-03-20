// The scope of a variable in JavaScript is defined as function scope
function showScope() {
    return scope;
}
var scope = "global";
console.log(scope); // displays "global"
console.log(showScope()); // displays "global"


function showLocalScope() {
    var scope = "local";
    return scope;
}
var scope = "global";
console.log(scope); // displays "global"
console.log(showLocalScope()); // displays "lo
