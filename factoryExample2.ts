class Car {
  public drive(): void {
    console.log("رانندگی با ماشین");
  }
}

class Bus {
  public drive(): void {
    console.log("رانندگی با اتوبوس");
  }
}

class Bicycle {
  public drive(): void {
    console.log("رانندگی با دوچرخه");
  }
}

class Motorcycle {
  public drive(): void {
    console.log("رانندگی با موتور سیکلت");
  }
}


class TransportFactory {
  public static createTransport(type: string): Car | Bus | Bicycle | Motorcycle | null {
    if (type === "long") {
      return new Bus(); 
    } else if (type === "short") {
      return new Bicycle();  
    } else if (type === "car") {
      return new Car(); 
    } else if (type === "motorcycle") {
      return new Motorcycle();  
    return null; 
  }
}}


const transport1 = TransportFactory.createTransport("long");
transport1?.drive(); 

const transport2 = TransportFactory.createTransport("short");
transport2?.drive();  

const transport3 = TransportFactory.createTransport("car");
transport3?.drive(); 

const transport4 = TransportFactory.createTransport("motorcycle");
transport4?.drive();  
