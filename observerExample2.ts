
interface Observer {
     update(news: string): void;
   }
   
   
   class NewsAgency {
     private observers: Observer[] = [];
     private categoryNews: { [key: string]: string[] } = {};
   
    
     public addObserver(observer: Observer, category: string): void {
       if (!this.categoryNews[category]) {
         this.categoryNews[category] = [];
       }
       this.observers.push(observer);
     }
   
   
     public removeObserver(observer: Observer): void {
       const index = this.observers.indexOf(observer);
       if (index !== -1) {
         this.observers.splice(index, 1);
       }
     }
   
   
     public publishNews(category: string, news: string): void {
       this.categoryNews[category]?.push(news);
       this.notifyObservers(category, news);
     }
   
    
     private notifyObservers(category: string, news: string): void {
       for (let observer of this.observers) {
         observer.update(news);
       }
     }
   }
   
 
   class User implements Observer {
     private name: string;
     private category: string;
   
     constructor(name: string, category: string) {
       this.name = name;
       this.category = category;
     }
   
    
     public update(news: string): void {
       console.log(`${this.name} دریافت کرد: ${news}`);
     }
   }
   
  
   const newsAgency = new NewsAgency();
   
  
   const user1 = new User('علی', 'ورزشی');
   const user2 = new User('مریم', 'سیاسی');
   const user3 = new User('حسین', 'اقتصادی');
   
  
   newsAgency.addObserver(user1, 'ورزشی');
   newsAgency.addObserver(user2, 'سیاسی');
   newsAgency.addObserver(user3, 'اقتصادی');
   

   newsAgency.publishNews('ورزشی', 'مسابقات جام جهانی شروع شد!');
   newsAgency.publishNews('سیاسی', 'انتخابات ریاست جمهوری برگزار شد.');
   newsAgency.publishNews('اقتصادی', 'نرخ دلار افزایش یافت.');
   