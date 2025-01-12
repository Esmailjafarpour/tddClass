class Order {
     private observers: Observer[] = [];
     private status: string = "پردازش";
 
     addObserver(observer: Observer): void {
         this.observers.push(observer);
     }
 
     removeObserver(observer: Observer): void {
         const index = this.observers.indexOf(observer);
         if (index !== -1) {
             this.observers.splice(index, 1);
         }
     }
 
     setStatus(status: string): void {
         this.status = status;
         this.notifyObservers();
     }
 
     private notifyObservers(): void {
         for (const observer of this.observers) {
             observer.update(this.status);
         }
     }
 }
 
 interface Observer {
     update(status: string): void;
 }
 
 class User implements Observer {
     constructor(private name: string) {}
 
     update(status: string): void {
         console.log(`${this.name} از تغییر وضعیت سفارش مطلع شد: ${status}`);
     }
 }
 
 const order = new Order();
 const user1 = new User("مشتری 1");
 const user2 = new User("مشتری 2");
 
 order.addObserver(user1);
 order.addObserver(user2);
 
 order.setStatus("در حال ارسال");
 order.setStatus("تحویل داده شده");
 