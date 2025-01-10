
interface Command {
     execute(): void;
     undo(): void;
   }
   
  
   class LightOnCommand implements Command {
     execute(): void {
       console.log("لامپ روشن شد");
     }
   
     undo(): void {
       console.log("لامپ خاموش شد");
     }
   }
   
 
   class LightOffCommand implements Command {
     execute(): void {
       console.log("لامپ خاموش شد");
     }
   
     undo(): void {
       console.log("لامپ روشن شد");
     }
   }
   
  
   class TVOnCommand implements Command {
     execute(): void {
       console.log("تلویزیون روشن شد");
     }
   
     undo(): void {
       console.log("تلویزیون خاموش شد");
     }
   }
   
 
   class TVOffCommand implements Command {
     execute(): void {
       console.log("تلویزیون خاموش شد");
     }
   
     undo(): void {
       console.log("تلویزیون روشن شد");
     }
   }
   
   
   class RemoteControl {
     private commandHistory: Command[] = [];
   
    
     executeCommand(command: Command): void {
       command.execute();
       this.commandHistory.push(command);
     }
   
   
     undo(): void {
       const lastCommand = this.commandHistory.pop();
       if (lastCommand) {
         lastCommand.undo();
       }
     }
   }
   
   const remote = new RemoteControl();
   
   const lightOn = new LightOnCommand();
   const lightOff = new LightOffCommand();
   const tvOn = new TVOnCommand();
   const tvOff = new TVOffCommand();
   
   remote.executeCommand(lightOn);  
   remote.executeCommand(tvOn);     
   
   
   remote.undo();  
   
   
   remote.executeCommand(lightOff);  
   
 
   remote.undo();  
   