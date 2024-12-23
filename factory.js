
class CreateCar {
    constructor() {

    }

    createCar(){
        console.log("your car create done")
    }
}

class Bicycle {
    constructor() {
        this.type = 'bic'
    }

    createBicycle(){
        console.log("your bicycle create done")
    }
}

class Ship {
    constructor() {
        this.type = 'ship'
    }

    createShip(){
        console.log("your ship create done")
    }
}


class Factory {
    constructor() {

    }

    addClass(type) {
      switch (type) {
          case 'car':
              let carCreator = new CreateCar()
              return carCreator.createCar()

          case 'bic':
              let bicycleCreator = new Bicycle()
              return bicycleCreator.createBicycle()

          case 'ship':
              let shipCreator = new Ship()
              return shipCreator.createShip()
      }
    }
}

const factory = new Factory()

let array = ['car','car','ship','ship','bic','bic']
array.map(item => factory.addClass(item))







