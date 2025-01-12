interface Command {
     execute(): void;
     undo(): void;
 }
 
 class BankAccount {
     private balance: number = 0;
 
     deposit(amount: number): void {
         this.balance += amount;
         console.log(`واریز ${amount} تومان. موجودی: ${this.balance}`);
     }
 
     withdraw(amount: number): void {
         if (this.balance >= amount) {
             this.balance -= amount;
             console.log(`برداشت ${amount} تومان. موجودی: ${this.balance}`);
         } else {
             console.log("موجودی کافی نیست.");
         }
     }
 
     transfer(amount: number, toAccount: BankAccount): void {
         if (this.balance >= amount) {
             this.balance -= amount;
             toAccount.deposit(amount);
             console.log(`انتقال ${amount} تومان به حساب دیگر. موجودی: ${this.balance}`);
         } else {
             console.log("موجودی کافی نیست.");
         }
     }
 }
 
 class DepositCommand implements Command {
     constructor(private account: BankAccount, private amount: number) {}
 
     execute(): void {
         this.account.deposit(this.amount);
     }
 
     undo(): void {
         this.account.withdraw(this.amount);
     }
 }
 
 class WithdrawCommand implements Command {
     constructor(private account: BankAccount, private amount: number) {}
 
     execute(): void {
         this.account.withdraw(this.amount);
     }
 
     undo(): void {
         this.account.deposit(this.amount);
     }
 }
 
 class TransferCommand implements Command {
     constructor(private fromAccount: BankAccount, private toAccount: BankAccount, private amount: number) {}
 
     execute(): void {
         this.fromAccount.transfer(this.amount, this.toAccount);
     }
 
     undo(): void {
         this.toAccount.withdraw(this.amount);
         this.fromAccount.deposit(this.amount);
     }
 }
 
 class CommandInvoker {
     private commandHistory: Command[] = [];
 
     executeCommand(command: Command): void {
         command.execute();
         this.commandHistory.push(command);
     }
 
     undoCommand(): void {
         const command = this.commandHistory.pop();
         if (command) {
             command.undo();
         }
     }
 }
 
 const account1 = new BankAccount();
 const account2 = new BankAccount();
 const invoker = new CommandInvoker();
 
 const deposit = new DepositCommand(account1, 100);
 invoker.executeCommand(deposit);
 
 const withdraw = new WithdrawCommand(account1, 50);
 invoker.executeCommand(withdraw);
 
 const transfer = new TransferCommand(account1, account2, 30);
 invoker.executeCommand(transfer);
 
 console.log("لغو آخرین دستور:");
 invoker.undoCommand();

 