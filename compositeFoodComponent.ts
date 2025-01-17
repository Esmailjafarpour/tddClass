
interface FoodComponent {
     getName(): string;
     getPrice(): number;
   }
   
  
   class FoodItem implements FoodComponent {
     constructor(private name: string, private price: number) {}
   
     getName(): string {
       return this.name;
     }
   
     getPrice(): number {
       return this.price;
     }
   }
   
   
   class FoodGroup implements FoodComponent {
     private foodItems: FoodComponent[] = [];
   
     constructor(private groupName: string) {}
   
     addFoodItem(food: FoodComponent): void {
       this.foodItems.push(food);
     }
   
     getName(): string {
       return this.groupName;
     }
   
     getPrice(): number {
      
       let totalPrice = 0;
       for (const item of this.foodItems) {
         totalPrice += item.getPrice();
       }
       return totalPrice;
     }
   }
   
  
   const apple = new FoodItem("سیب", 2000);
   const banana = new FoodItem("موز", 3000);
   const carrot = new FoodItem("هویج", 1000);
   
   const fruitGroup = new FoodGroup("گروه میوه‌ها");
   fruitGroup.addFoodItem(apple);
   fruitGroup.addFoodItem(banana);
   
   const vegetableGroup = new FoodGroup("گروه سبزیجات");
   vegetableGroup.addFoodItem(carrot);
   
   const allFoodGroup = new FoodGroup("گروه همه اقلام غذایی");
   allFoodGroup.addFoodItem(fruitGroup);
   allFoodGroup.addFoodItem(vegetableGroup);
   
 
   console.log(`${fruitGroup.getName()} قیمت: ${fruitGroup.getPrice()} تومان`);
   console.log(`${vegetableGroup.getName()} قیمت: ${vegetableGroup.getPrice()} تومان`);
   console.log(`${allFoodGroup.getName()} قیمت: ${allFoodGroup.getPrice()} تومان`);
   