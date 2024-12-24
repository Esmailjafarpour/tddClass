class Command {
    constructor(name) {
        this.show = '';
        this.change='';
    }

    setShow(status) {
        this.show = status
    }

    setChange(change) {
        this.change = change
    }

    getTvStatus (){
        console.log("change ", this.change)
        console.log("show ", this.show)
    }

}


let command = new Command();

command.setShow(true)
command.setChange(1)

command.getTvStatus()

command.setChange(2)
command.setShow(false)
command.getTvStatus()
