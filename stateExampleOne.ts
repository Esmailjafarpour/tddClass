
interface State {
     pressButton(): void; 
     dispense(): void;   
   }
   
  
   class ReadyState implements State {
     constructor(private vendingMachine: VendingMachine) {}
   
     pressButton(): void {
       console.log("دکمه زده شد. در حال فروش...");
       this.vendingMachine.setState(this.vendingMachine.getSellingState()); // تغییر به وضعیت "در حال فروش"
     }
   
     dispense(): void {
       console.log("دستگاه آماده است. باید دکمه زده شود.");
     }
   }
   
 
   class SellingState implements State {
     constructor(private vendingMachine: VendingMachine) {}
   
     pressButton(): void {
       console.log("در حال فروش... نمی‌توان دوباره دکمه زد.");
     }
   
     dispense(): void {
       console.log("کالا تحویل داده شد.");
       this.vendingMachine.setState(this.vendingMachine.getReadyState()); // تغییر به وضعیت "آماده برای فروش"
     }
   }
   
   // وضعیت "تمام شده"
   class SoldOutState implements State {
     constructor(private vendingMachine: VendingMachine) {}
   
     pressButton(): void {
       console.log("تمام شده! نمی‌توان خرید کرد.");
     }
   
     dispense(): void {
       console.log("تمام شده! هیچ کالایی برای تحویل وجود ندارد.");
     }
   }
   
   // وضعیت "بازگشایی"
   class OpenState implements State {
     constructor(private vendingMachine: VendingMachine) {}
   
     pressButton(): void {
       console.log("دستگاه باز است! آماده برای پر کردن.");
     }
   
     dispense(): void {
       console.log("دستگاه در حال بازگشایی است، کالا تحویل داده نمی‌شود.");
     }
   }
   
   // ماشین فروش خودکار که وضعیت‌های مختلف را مدیریت می‌کند
   class VendingMachine {
     private readyState: State;
     private sellingState: State;
     private soldOutState: State;
     private openState: State;
   
     private currentState: State;
   
     constructor() {
       this.readyState = new ReadyState(this);
       this.sellingState = new SellingState(this);
       this.soldOutState = new SoldOutState(this);
       this.openState = new OpenState(this);
   
       this.currentState = this.readyState; // شروع با وضعیت "آماده برای فروش"
     }
   
     // تغییر وضعیت ماشین فروش
     setState(state: State): void {
       this.currentState = state;
     }
   
     // دریافت وضعیت "آماده برای فروش"
     getReadyState(): State {
       return this.readyState;
     }
   
     // دریافت وضعیت "در حال فروش"
     getSellingState(): State {
       return this.sellingState;
     }
   
     // دریافت وضعیت "تمام شده"
     getSoldOutState(): State {
       return this.soldOutState;
     }
   
     // دریافت وضعیت "بازگشایی"
     getOpenState(): State {
       return this.openState;
     }
   
     // عملکرد دکمه فشار داده شده
     pressButton(): void {
       this.currentState.pressButton();
     }
   
     // عملکرد تحویل کالا
     dispense(): void {
       this.currentState.dispense();
     }
   }
   
   // تست سیستم
   const vendingMachine = new VendingMachine();
   
   // شروع با وضعیت "آماده برای فروش"
   vendingMachine.pressButton(); // دکمه زده می‌شود، تغییر به "در حال فروش"
   vendingMachine.dispense();    // کالا تحویل داده می‌شود، تغییر به "آماده برای فروش"
   
   // تغییر به وضعیت "تمام شده"
   vendingMachine.setState(vendingMachine.getSoldOutState());
   vendingMachine.pressButton(); // تمام شده! نمی‌توان خرید کرد
   vendingMachine.dispense();    // تمام شده! هیچ کالایی برای تحویل وجود ندارد
   
   // تغییر به وضعیت "بازگشایی"
   vendingMachine.setState(vendingMachine.getOpenState());
   vendingMachine.pressButton(); // دستگاه باز است! آماده برای پر کردن
   vendingMachine.dispense();    // دستگاه در حال بازگشایی است، کالا تحویل داده نمی‌شود
   