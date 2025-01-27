
interface PaymentStrategy {
     pay(amount: number): void;
   }
   
  
   class CreditCardPayment implements PaymentStrategy {
     public pay(amount: number): void {
       console.log(`پرداخت${amount} باکارت اعتبار انجام شد`);
     }
   }
   
  
   class PayPalPayment implements PaymentStrategy {
     public pay(amount: number): void {
       console.log(`پرداخت با ${amount}پی پل انجام شد`);
     }
   }
   
  
   class CashPayment implements PaymentStrategy {
     public pay(amount: number): void {
       console.log(`پرداخت${amount} به صورت نقدی انجام شد`);
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
   