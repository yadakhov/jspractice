function Checking(amount) {
    this.balance = amount; // property
    this.deposit = deposit; // function
    this.withdraw = withdraw; // function
    this.toString = toString;  // function
}

function deposit(amount) {
    this.balance += amount;
}

function withdraw(amount) {
    if (this.balance < amount) {
        console.log("Insufficient funds");
    }
    else {
        this.balance -= amount;
    }
}

function toString() {
    return "Balance: " + this.balance;
}

var account = new Checking(500);
account.deposit(1000);
console.log(account.toString()); // Balance: 1500
account.withdraw(750);
console.log(account.toString()); // Balance: 750
account.withdraw(800); // displays "Insufficient funds"
console.log(account.toString()); // Balance: 750
