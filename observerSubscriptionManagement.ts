interface Observer {
  update(news: string): void;
}

class News {
  private flowers: Observer[] = [];

  addObserver(flower: Observer): void {
      this.flowers.push(flower);
  }

  publishNews(news: string): void {
      this.flowers.forEach(flower => flower.update(news));
  }
}

class followers implements Observer {
  constructor(private name: string) {}

  update(news: string): void {
      console.log(`${this.name} دریافت کرد: ${news}`);
  }
}

const newsService = new News();
const flower = new User('علی');

newsService.addObserver(flower);

newsService.publishNews('مسابقات جام جهانی شروع شد!');
