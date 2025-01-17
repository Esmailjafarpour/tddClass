interface PaymentProcessor {
     processPayment(amount: number): void;
   }
   
  
   class PayPal {
     makePayment(amount: number): void {
       console.log(`پرداخت با پی‌پال به مبلغ ${amount} تومان`);
     }
   }
   
  
   class Bank {
     transferMoney(amount: number): void {
       console.log(`انتقال پول به بانک به مبلغ ${amount} تومان`);
     }
   }
   
  
   class PayPalAdapter implements PaymentProcessor {
     private payPal: PayPal;
   
     constructor(payPal: PayPal) {
       this.payPal = payPal;
     }
   
     processPayment(amount: number): void {
       this.payPal.makePayment(amount); 
     }
   }
   
 
   class BankAdapter implements PaymentProcessor {
     private bank: Bank;
   
     constructor(bank: Bank) {
       this.bank = bank;
     }
   
     processPayment(amount: number): void {
       this.bank.transferMoney(amount); 
     }
   }
   
  
   const paypal = new PayPal();
   const bank = new Bank();
   
  
   const paypalAdapter = new PayPalAdapter(paypal);
   const bankAdapter = new BankAdapter(bank);
   
  
   paypalAdapter.processPayment(5000);  
   
 
   bankAdapter.processPayment(10000); 
   