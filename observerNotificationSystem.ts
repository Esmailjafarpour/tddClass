class notificationSystem {
     private notificationSystemFlowers: Observer[] = [];
     private status: string = "منتظر تایید";
 
     addFlower(f: Observer): void {
         this.notificationSystemFlowers.push(f);
     }
 
     removeFlower(i: Observer): void {
         const index = this.notificationSystemFlowers.indexOf(i);
         if (index !== -1) {
             this.notificationSystemFlowers.splice(index, 1);
         }
     }
 
     setStatus(status: string): void {
         this.status = status;
         this.notifyFlowers();
     }
 
     private notifyFlowers(): void {
         this.notificationSystemFlowers.forEach(f => f.update(this.status));
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
 
 const system = new notificationSystem();
 const user1 = new User("مشتری 1");
 const user2 = new User("مشتری 2");
 
 system.addFlower(user1);
 system.addFlower(user2);
 
 system.setStatus("در حال ارسال");
 system.setStatus("تحویل داده شده");

 system.removeFlower(user1)
 