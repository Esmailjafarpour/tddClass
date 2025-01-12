
interface Ticket {
    book(): string;
}


class AirplaneTicket implements Ticket {
    book() {
        return "بلیط هواپیما رزرو شد.";
    }
}


class TrainTicket implements Ticket {
    book() {
        return "بلیط قطار رزرو شد.";
    }
}


class BusTicket implements Ticket {
    book() {
        return "بلیط اتوبوس رزرو شد.";
    }
}


class TicketFactory {
    static createTicket(vehicleType: string): Ticket | null {
        if (vehicleType === "airplane") {
            return new AirplaneTicket();
        } else if (vehicleType === "train") {
            return new TrainTicket();
        } else if (vehicleType === "bus") {
            return new BusTicket();
        } else {
            return null; 
        }
    }
}


const vehicleType = "airplane"; 
const ticket = TicketFactory.createTicket(vehicleType);

if (ticket) {
    console.log(ticket.book());
} else {
    console.log("نوع وسیله نقلیه نامعتبر است.");
}
