class Command {
    private show: boolean;
    private change: number;
  
    constructor() {
      this.show = false;
      this.change = 0;
    }
  
   
    public setShow(status: boolean): void {
      this.show = status;
    }
  
   
    public setChange(change: number): void {
      this.change = change;
    }
  
   
    public getTvStatus(): void {
      console.log("change:", this.change);
      console.log("show:", this.show);
    }
  }
  
 
  const command = new Command();
  
  command.setShow(true);
  command.setChange(1);
  command.getTvStatus();  
  
  command.setChange(2);
  command.setShow(false);
  command.getTvStatus();  
  