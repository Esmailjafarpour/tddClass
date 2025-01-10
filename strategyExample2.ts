
interface PaymentStrategy {
     pay(amount: number): void;
   }
   
  
   class CreditCardPayment implements PaymentStrategy {
     public pay(amount: number): void {
       console.log(`پرداخت ${amount} تومان با کارت اعتباری.`);
     }
   }
   
  
   class PayPalPayment implements PaymentStrategy {
     public pay(amount: number): void {
       console.log(`پرداخت ${amount} تومان با پی‌پال.`);
     }
   }
   
  
   class CashPayment implements PaymentStrategy {
     public pay(amount: number): void {
       console.log(`پرداخت ${amount} تومان به صورت نقدی.`);
     }
   }
   
  
   class PaymentContext {
     private strategy: PaymentStrategy;
   
     constructor(strategy: PaymentStrategy) {
       this.strategy = strategy;
     }
   
     
     public setStrategy(strategy: PaymentStrategy): void {
       this.strategy = strategy;
     }
   
    
     public executePayment(amount: number): void {
       this.strategy.pay(amount);
     }
   }
   
  
   const creditCardPayment = new CreditCardPayment();
   const payPalPayment = new PayPalPayment();
   const cashPayment = new CashPayment();
   
  
   const paymentContext = new PaymentContext(creditCardPayment);
   paymentContext.executePayment(5000);  
   
  
   paymentContext.setStrategy(payPalPayment);
   paymentContext.executePayment(3000);  
   
  
   paymentContext.setStrategy(cashPayment);
   paymentContext.executePayment(1000);  
   