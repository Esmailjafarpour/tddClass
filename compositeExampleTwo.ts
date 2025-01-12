interface Component {
     getStatus(): string;
 }
 
 class Device implements Component {
     constructor(private name: string) {}
 
     getStatus(): string {
         return `${this.name} در حال کار است.`;
     }
 }
 
 class Server implements Component {
     private components: Component[] = [];
 
     constructor(private name: string) {}
 
     add(component: Component): void {
         this.components.push(component);
     }
 
     remove(component: Component): void {
         const index = this.components.indexOf(component);
         if (index !== -1) {
             this.components.splice(index, 1);
         }
     }
 
     getStatus(): string {
         let status = `${this.name} در حال کار است و سرویس‌ها: `;
         for (let i = 0; i < this.components.length; i++) {
             status += `${this.components[i].getStatus()}. `;
         }
         return status;
     }
 }
 
 class Service implements Component {
     constructor(private name: string) {}
 
     getStatus(): string {
         return `${this.name} در حال کار است.`;
     }
 }
 
 const device1 = new Device("دستگاه 1");
 const device2 = new Device("دستگاه 2");
 
 const service1 = new Service("سرویس 1");
 const service2 = new Service("سرویس 2");
 
 const server1 = new Server("سرور 1");
 server1.add(service1);
 server1.add(service2);
 
 const network = new Server("شبکه بزرگ");
 network.add(device1);
 network.add(device2);
 network.add(server1);
 
 console.log(network.getStatus());
 