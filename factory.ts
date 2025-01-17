
class lineCreate {
    public createMethod ():void{
    
    }
    constructor(){
        order:''
    }
}

class bic implements lineCreate{
    createMethod (){
        console.log("create bic")
    }
}

class khodroo implements lineCreate{
    createMethod (){
        console.log("create car")
    }
}


abstract class naderFactory {
    order:lineCreate
    abstract getOrder():void
    abstract orderDelivery():void

}

class bicycle extends naderFactory{

    getOrder():lineCreate{
        return new bic()
    }

    orderDelivery(): void{
        this.order = this.getOrder()
        this.order.createMethod()
    }

}


class samand extends naderFactory{

    getOrder():lineCreate{
        return new khodroo()
    }

    orderDelivery():void{
        this.order = this.getOrder()
        this.order.createMethod()
    }
}

const createSaman = new samand()
createSaman.orderDelivery()

const createBicycle = new bicycle()
createBicycle.orderDelivery()










