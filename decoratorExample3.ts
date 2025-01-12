class Order {
     getDescription(): string {
         return "سفارش اصلی";
     }
 
     getCost(): number {
         return 100;
     }
 }
 
 class OrderDecorator {
     constructor(private order: Order) {}
 
     getDescription(): string {
         return this.order.getDescription();
     }
 
     getCost(): number {
         return this.order.getCost();
     }
 }
 
 class Warranty extends OrderDecorator {
     getDescription(): string {
         return `${this.order.getDescription()} + گارانتی`;
     }
 
     getCost(): number {
         return this.order.getCost() + 20;
     }
 }
 
 class GiftPackaging extends OrderDecorator {
     getDescription(): string {
         return `${this.order.getDescription()} + بسته‌بندی هدیه`;
     }
 
     getCost(): number {
         return this.order.getCost() + 15;
     }
 }
 
 class ExpressDelivery extends OrderDecorator {
     getDescription(): string {
         return `${this.order.getDescription()} + تحویل فوری`;
     }
 
     getCost(): number {
         return this.order.getCost() + 30;
     }
 }
 
 const order = new Order();
 console.log(order.getDescription(), "هزینه:", order.getCost());
 
 const orderWithWarranty = new Warranty(order);
 console.log(orderWithWarranty.getDescription(), "هزینه:", orderWithWarranty.getCost());
 
 const orderWithGift = new GiftPackaging(orderWithWarranty);
 console.log(orderWithGift.getDescription(), "هزینه:", orderWithGift.getCost());
 
 const finalOrder = new ExpressDelivery(orderWithGift);
 console.log(finalOrder.getDescription(), "هزینه:", finalOrder.getCost());
 