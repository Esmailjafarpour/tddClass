class Printer {
     private static instance: Printer | null = null;
     private isPrinting: boolean = false;
   
     private constructor() {}
   
    
     public static getInstance(): Printer {
       if (!Printer.instance) {
         Printer.instance = new Printer();
       }
       return Printer.instance;
     }
   
     
     public print(order: string): void {
       if (this.isPrinting) {
         console.log('چاپگر در حال چاپ سفارش است');
         return;
       }

       this.isPrinting = true; 
       console.log(`در حال چاپ${order}هستم`);
   
       setTimeout(() => {
        this.isPrinting = false;
        console.log(`چاپ ${order} تمام شد.`);
       }, 3000);
      
     }
   }
   
   
   const printer = Printer.getInstance();
   
   printer.print('سفارش اول');  
   printer.print('سفارش دوم');  
   printer.print('سفارش سوم');  
   
   


