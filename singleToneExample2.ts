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
   
     
     public print(document: string): void {
       if (this.isPrinting) {
         console.log('چاپگر مشغول است. لطفاً منتظر بمانید...');
         return;
       }
   
       this.isPrinting = true; 
       console.log(`در حال چاپ: ${document}`);
   
      
       this.isPrinting = false;
       console.log(`چاپ ${document} تمام شد.`);
     }
   }
   
   
   const printer = Printer.getInstance();
   
   printer.print('سند 1');  
   printer.print('سند 2');  
   printer.print('سند 3');  
   
   


