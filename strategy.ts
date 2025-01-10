
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
        console.log('هیچ استراتژی پرداختی انتخاب نشده است.');
      }
    }
  }
  
 
  class Paypal implements PaymentStrategy {
    public pay(amount: number): void {
      console.log(amount + ' paypalPay');
    }
  }
  
  
  class CashPayment implements PaymentStrategy {
    public pay(amount: number): void {
      console.log(amount + ' cash amountPay');
    }
  }
  

  let paypalPay = new Paypal();
  let strategyPay = new Strategy();
  
  strategyPay.strategyPay(paypalPay);
  strategyPay.pay(200); 
  
  let cashPay = new CashPayment();
  strategyPay.strategyPay(cashPay);
  strategyPay.pay(700); 
  