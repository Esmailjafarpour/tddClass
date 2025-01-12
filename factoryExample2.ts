class Car {
  public drive(): void {
    console.log("رانندگی با ماشین");
  }
}

class Bicycle {
  public drive(): void {
    console.log("رانندگی با دوچرخه");
  }
}

class TransportFactory {
  public static createTransport(type: string): Car | Bicycle | null {
    if (type === "car") {
      return new Car();
    } else if (type === "bicycle") {
      return new Bicycle();
    } else {
      return null;
    }
  }
}

const transport1 = TransportFactory.createTransport("car");
transport1?.drive();

const transport2 = TransportFactory.createTransport("bicycle");
transport2?.drive();
