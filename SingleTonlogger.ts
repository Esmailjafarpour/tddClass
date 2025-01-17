class Logger {
    private static val: Logger | null = null;
    private message: string;
    private name: string;
  
    private constructor() {
      this.message = 'salam';
      this.name = 'nader';
    }
  
    
    public static addValue(): Logger {
      if (!Logger.val) {
        Logger.val = new Logger();
      }
      return Logger.val;
    }
  
  
    public getConstructorData(): [string, string] {
      return [this.message, this.name];
    }
  
  
    public setConstructorData(name: string, message: string): void {
      this.message = message;
      this.name = name;
    }
  }
  
  
  let nader = Logger.addValue();
  
  console.log(nader.getConstructorData());
  
  
  nader.setConstructorData('salam', 'nader');
  
  console.log(nader.getConstructorData());
  