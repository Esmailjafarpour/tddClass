interface Drive {
  drive(): void;
}

class car implements Drive {
  public drive(): void {
    console.log("رانندگی با ماشین");
  }
}

class Bicycle implements Drive{
  public drive(): void {
    console.log("رانندگی با دوچرخه");
  }
}

class TransportFactory {
  public static createTransport(type: string): car | Bicycle | null {
    if (type === "car") {
      return new car();
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
