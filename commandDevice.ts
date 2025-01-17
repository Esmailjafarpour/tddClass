
interface DeviceCommand {
  TurnOn(): void;
  TurnOff(): void;
}

class Light {
  on() {
      console.log("Light is ON");
  }

  off() {
      console.log("Light is OFF");
  }
}

class TV {
  on() {
      console.log("TV is ON");
  }

  off() {
      console.log("TV is OFF");
  }
}


class LightOnCommand implements DeviceCommand {
  constructor(private light: Light) {}

  TurnOn() {
      this.light.on();
  }

  TurnOff() {
      this.light.off();
  }
}

// class LightOffCommand implements DeviceCommand {
//   constructor(private light: Light) {}

//   TurnOn() {
//       this.light.off();
//   }

//   TurnOff() {
//       this.light.on();
//   }
// }

class TVOnCommand implements DeviceCommand {
  constructor(private tv: TV) {}

  TurnOn() {
      this.tv.on();
  }

  TurnOff() {
      this.tv.off();
  }
}

// class TVOffCommand implements DeviceCommand {
//   constructor(private tv: TV) {}

//   TurnOn() {
//       this.tv.off();
//   }

//   TurnOff() {
//       this.tv.on();
//   }
// }


class RemoteControl {
  private commandHistory: DeviceCommand[] = [];

  setCommand(command: DeviceCommand) {
      this.commandHistory.push(command);
      command.TurnOn();
  }

  TurnOff() {
      const command = this.commandHistory.pop();
      if (command) {
          command.TurnOff();
      } else {
          console.log("دستور خاموش کردن وجود ندارد");
      }
  }
}


const light = new Light();
const tv = new TV();

const lightCommand = new LightOnCommand(light);
// const lightOff = new LightOffCommand(light);

const tvCommand = new TVOnCommand(tv);
// const tvOff = new TVOffCommand(tv);


const remote = new RemoteControl();


remote.setCommand(lightCommand);
remote.setCommand(tvCommand);

remote.TurnOff(); 
remote.TurnOff(); 
