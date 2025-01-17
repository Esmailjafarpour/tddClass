interface Database {
     getData(): string;
 }
 
 class RealDatabase implements Database {
     getData(): string {
         return "داده‌های حساس از پایگاه داده";
     }
 }
 
 class ProxyDatabase implements Database {
     private realDatabase: RealDatabase;
     private role: string;
 
     constructor(role: string) {
         this.role = role;
         this.realDatabase = new RealDatabase();
     }
 
     getData(): string {
         if (this.role === "admin") {
             return this.realDatabase.getData();
         } else {
             return "شما دسترسی به این داده‌ها ندارید.";
         }
     }
 }
 
 const adminUser = new ProxyDatabase("admin");
 console.log(adminUser.getData());
 
 const normalUser = new ProxyDatabase("user");
 console.log(normalUser.getData());
 