
interface Database {
     getData(): void;
   }
   
  
   class RealDatabase implements Database {
     getData(): void {
       console.log("دسترسی به داده‌های پایگاه داده حساس!");
     }
   }
   
 
   class DatabaseProxy implements Database {
     private realDatabase: RealDatabase;
     private userRole: string;
   
     constructor(userRole: string) {
       this.userRole = userRole;
       this.realDatabase = new RealDatabase(); 
     }
   
   
     getData(): void {
       if (this.userRole === "admin") {
         console.log("کاربر مجاز است. دسترسی به داده‌ها...");
         this.realDatabase.getData();
       } else {
         console.log("دسترسی ممنوع! شما دسترسی به داده‌ها ندارید.");
       }
     }
   }
   
  
   const adminProxy = new DatabaseProxy("admin");
   adminProxy.getData();
   
   const guestProxy = new DatabaseProxy("guest");
   guestProxy.getData();
   