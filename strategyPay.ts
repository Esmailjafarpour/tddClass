
interface PaymentStrategy {
    pay(amount: number): void;
  }
  
 
  class Strategy {
    private strategyPayName: PaymentStrategy | null = null;
  
   
    public strategyPay(payName: PaymentStrategy): void {
      this.strategyPayName = payName;
    }
  
   
    public pay(amount: number): void {
      if (this.strategyPayName) {
        this.strategyPayName.pay(amount);
      } else {
        console.log('هیچ روش پرداختی وجود ندارد');
      }
    }
  }
  
 
  class Paypal implements PaymentStrategy {
    public pay(amount: number): void {
      console.log(amount + ' paypalPay');
    }
  }
  
  
  class CashPaymentMethod implements PaymentStrategy {
    public pay(amount: number): void {
      console.log(amount + ' cash amountPay');
    }
  }
  

  let paypalPay = new Paypal();
  let strategyPay = new Strategy();
  
  strategyPay.strategyPay(paypalPay);
  strategyPay.pay(200); 
  
  let cashPay = new CashPaymentMethod();
  strategyPay.strategyPay(cashPay);
  strategyPay.pay(700); 
  