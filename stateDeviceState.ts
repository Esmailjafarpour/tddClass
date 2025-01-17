interface DeviceState {
     pressButton(): void;
 }
 
 class OnState implements DeviceState {
     pressButton(): void {
         console.log("لامپ خاموش می‌شود.");
     }
 }
 
 class OffState implements DeviceState {
     pressButton(): void {
         console.log("لامپ روشن می‌شود.");
     }
 }
 
 class WaitingState implements DeviceState {
     pressButton(): void {
         console.log("دستگاه منتظر فرمان است.");
     }
 }
 
 class SmartDevice {
     private state: DeviceState;
 
     constructor(initialState: DeviceState) {
         this.state = initialState;
     }
 
     setState(state: DeviceState): void {
         this.state = state;
     }
 
     pressButton(): void {
         this.state.pressButton();
     }
 }
 
 const device = new SmartDevice(new OffState());
 
 device.pressButton();
 device.setState(new OnState());
 device.pressButton();
 device.setState(new WaitingState());
 device.pressButton();
 