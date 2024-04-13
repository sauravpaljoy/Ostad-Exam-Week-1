class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ৳${amount} into account : ৳${this.accountNumber}  New balance: ৳${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ৳${amount} From account : ৳${this.accountNumber} New balance: ৳${this.balance}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: ৳${this.balance}`);
    }
    displayupdateInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: ৳${this.balance}`);
    }

}

// Creating two instances of BankAccount
const account = new BankAccount(2024000121, "Saurav pal", 50000);

// Demonstrating functionality
console.log("\nInitial Account Information:");
account.displayAccountInfo(); 
console.log("\nDeposit And Withdrawal:");
account.deposit(2000);
account.withdraw(10000);
console.log("\nUpdated Account Information:");
account.displayupdateInfo();



