class Strategy {

    constructor() {
        this.strategyPayName = '';
    }

    strategyPay(payName){
        this.strategyPayName = payName
    }

    pay (amount){
        console.log(amount + 'Strategy Pay')
    }
}

class paypal {
    pay(amount){
        console.log(amount + 'paypalPay')
    }
}

class cashPayment {
    pay(amount){
        console.log(amount + 'cash amountPay')
    }
}

let paypalPey = new paypal()

let strategyPey = new Strategy()

strategyPey.strategyPay(paypalPey)

strategyPey.pay(200)


let cashPaymentPey = new cashPayment()
strategyPey.strategyPay(cashPaymentPey)

strategyPey.pay(700)










