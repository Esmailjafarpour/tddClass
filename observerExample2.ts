interface Observer {
  update(news: string): void;
}

class News {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
      this.observers.push(observer);
  }

  publishNews(news: string): void {
      this.observers.forEach(observer => observer.update(news));
  }
}

class User implements Observer {
  constructor(private name: string) {}

  update(news: string): void {
      console.log(`${this.name} دریافت کرد: ${news}`);
  }
}

const newsService = new News();
const user1 = new User('علی');

newsService.addObserver(user1);

newsService.publishNews('مسابقات جام جهانی شروع شد!');
