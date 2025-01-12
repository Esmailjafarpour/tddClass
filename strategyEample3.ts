interface SortStrategy {
     sort(data: number[]): number[];
 }
 
 class BubbleSort implements SortStrategy {
     sort(data: number[]): number[] {
         for (let i = 0; i < data.length; i++) {
             for (let j = 0; j < data.length - 1 - i; j++) {
                 if (data[j] > data[j + 1]) {
                     const temp = data[j];
                     data[j] = data[j + 1];
                     data[j + 1] = temp;
                 }
             }
         }
         return data;
     }
 }
 
 class QuickSort implements SortStrategy {
     sort(data: number[]): number[] {
         if (data.length <= 1) return data;
         const pivot = data[0];
         const left = data.slice(1).filter(item => item <= pivot);
         const right = data.slice(1).filter(item => item > pivot);
         return [...this.sort(left), pivot, ...this.sort(right)];
     }
 }
 
 class DataProcessor {
     private strategy: SortStrategy;
 
     constructor(strategy: SortStrategy) {
         this.strategy = strategy;
     }
 
     setStrategy(strategy: SortStrategy) {
         this.strategy = strategy;
     }
 
     processData(data: number[]): number[] {
         return this.strategy.sort(data);
     }
 }
 
 const data = [5, 3, 8, 4, 2];
 const processor = new DataProcessor(new BubbleSort());
 console.log(processor.processData(data));
 
 processor.setStrategy(new QuickSort());
 console.log(processor.processData(data));
 