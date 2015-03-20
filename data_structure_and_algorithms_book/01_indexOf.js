var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];

rl.question("Enter a name to search for: ", function(name) {
    var position = names.indexOf(name);
    if (position >= 0) {
        console.log("Found " + name + " at position " + position);
    }
    else {
        console.log(name + " not found in array.");
    }
    rl.close();
});
