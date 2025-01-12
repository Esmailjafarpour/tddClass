interface DataSource {
     fetchData(): string[];
 }
 
 class CSVDataSource {
     getCSVData(): string[] {
         return ["name,age", "John,30", "Jane,25"];
     }
 }
 
 class SQLDataSource {
     queryDatabase(): string[] {
         return ["id,name,age", "1,John,30", "2,Jane,25"];
     }
 }
 
 class RestAPIDataSource {
     fetchFromAPI(): string[] {
         return ["{\"name\":\"John\",\"age\":30}", "{\"name\":\"Jane\",\"age\":25}"];
     }
 }
 
 class CSVAdapter implements DataSource {
     private csvDataSource: CSVDataSource;
 
     constructor(csvDataSource: CSVDataSource) {
         this.csvDataSource = csvDataSource;
     }
 
     fetchData(): string[] {
         return this.csvDataSource.getCSVData();
     }
 }
 
 class SQLAdapter implements DataSource {
     private sqlDataSource: SQLDataSource;
 
     constructor(sqlDataSource: SQLDataSource) {
         this.sqlDataSource = sqlDataSource;
     }
 
     fetchData(): string[] {
         return this.sqlDataSource.queryDatabase();
     }
 }
 
 class RestAPIAdapter implements DataSource {
     private apiDataSource: RestAPIDataSource;
 
     constructor(apiDataSource: RestAPIDataSource) {
         this.apiDataSource = apiDataSource;
     }
 
     fetchData(): string[] {
         return this.apiDataSource.fetchFromAPI();
     }
 }
 
 const csvSource = new CSVAdapter(new CSVDataSource());
 const sqlSource = new SQLAdapter(new SQLDataSource());
 const apiSource = new RestAPIAdapter(new RestAPIDataSource());
 
 console.log(csvSource.fetchData());
 console.log(sqlSource.fetchData());
 console.log(apiSource.fetchData());
 