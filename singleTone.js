class Logger {
    constructor() {
        this.message = 'salam'
        this.name = 'nader'
    }

    static addValue (){
        if(!Logger.val){
            Logger.val = new Logger()
        }

        return Logger.val
    }

    getConstructorData (){
        return[this.message , this.name]
    }

    setConstructorData (name , message){
        this.message = message
        this.name  = name
    }

}

let nader = Logger.addValue()

console.log(nader.getConstructorData())

nader.setConstructorData('salammmmm' , 'naderrrrrrrr')


console.log(nader.getConstructorData())