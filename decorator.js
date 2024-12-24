class Decorator {
    constructor() {
        this.invoiceAmount = ""
        this.status=''
    }

    setInvoiceAmount(invoiceAmount , status) {
        this.invoiceAmount = invoiceAmount;
        this.status = status;
    }

    setDiscountAmount(discountAmount) {
        this.invoiceAmount = this.invoiceAmount - discountAmount
    }

    getInvoiceAmount () {
        console.log(this.invoiceAmount + "  invoiceAmount  " + this.status)
    }
}

let decorator = new Decorator()

decorator.setInvoiceAmount(200 , "debtor")

decorator.getInvoiceAmount()


decorator.setDiscountAmount(50)

let afterDiscount = decorator.invoiceAmount

console.log(afterDiscount)

decorator.setInvoiceAmount(afterDiscount , "creditor")

decorator.getInvoiceAmount()
