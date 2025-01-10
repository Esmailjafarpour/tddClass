// کلاس اصلی خودرو
class Car {
     description = "خودروی پایه";
   
     getDescription() {
       return this.description;
     }
   
     cost() {
       return 10000; 
     }
   }
   
  
   class CustomColor {
     car: Car;
   
     constructor(car: Car, private color: string) {
       this.car = car;
     }
   
     getDescription() {
       return this.car.getDescription() + ` - رنگ: ${this.color}`;
     }
   
     cost() {
       return this.car.cost() + 500; 
     }
   }
   
 
   class CustomRims {
     car: Car;
   
     constructor(car: Car, private rims: string) {
       this.car = car;
     }
   
     getDescription() {
       return this.car.getDescription() + ` - رینگ: ${this.rims}`;
     }
   
     cost() {
       return this.car.cost() + 700; 
     }
   }
   
   
   class AdvancedSoundSystem {
     car: Car;
   
     constructor(car: Car) {
       this.car = car;
     }
   
     getDescription() {
       return this.car.getDescription() + ` - سیستم صوتی پیشرفته`;
     }
   
     cost() {
       return this.car.cost() + 1200; 
     }
   }
   
   
   let myCar = new Car(); 
   console.log(myCar.getDescription());  
   console.log("هزینه: " + myCar.cost() + " تومان");
   
   myCar = new CustomColor(myCar, "قرمز");  
   console.log(myCar.getDescription());  
   console.log("هزینه: " + myCar.cost() + " تومان");
   
   myCar = new CustomRims(myCar, "18 اینچ اسپرت"); 
   console.log(myCar.getDescription());  
   console.log("هزینه: " + myCar.cost() + " تومان");
   
   myCar = new AdvancedSoundSystem(myCar); 
   console.log(myCar.getDescription()); 
   console.log("هزینه: " + myCar.cost() + " تومان");
   