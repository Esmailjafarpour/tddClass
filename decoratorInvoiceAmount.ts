class Decorator {
     invoiceAmount: number;
     status: string;
 
     constructor() {
         this.invoiceAmount = 0;
         this.status = '';
     }
 
     setInvoiceAmount(invoiceAmount: number, status: string): void {
         this.invoiceAmount = invoiceAmount;
         this.status = status;
     }
 
     setDiscountAmount(discountAmount: number): void {
         this.invoiceAmount = this.invoiceAmount - discountAmount;
     }
 
     getInvoiceAmount(): void {
         console.log(`${this.invoiceAmount}  invoiceAmount  ${this.status}`);
     }
 }
 
 let decorator = new Decorator();
 
 decorator.setInvoiceAmount(200, "debtor");
 
 decorator.getInvoiceAmount();
 
 decorator.setDiscountAmount(50);
 
 let afterDiscount: number = decorator.invoiceAmount;
 
 console.log(afterDiscount);
 
 decorator.setInvoiceAmount(afterDiscount, "creditor");
 
 decorator.getInvoiceAmount();
 