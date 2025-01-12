interface Ticket {
    reserve(): string;
}

class AirplaneTicket implements Ticket {
    reserve() {
        return "بلیط هواپیما رزرو شد.";
    }
}

class TrainTicket implements Ticket {
    reserve() {
        return "بلیط قطار رزرو شد.";
    }
}

class TicketFactory {
    static createTicket(vehicleType: string): Ticket | null {
        if (vehicleType === "airplane") {
            return new AirplaneTicket();
        } else if (vehicleType === "train") {
            return new TrainTicket();
        } else {
            return null;
        }
    }
}

const vehicleType = "airplane"; 
const ticket = TicketFactory.createTicket(vehicleType);

if (ticket) {
    console.log(ticket.reserve());
} else {
    console.log("نوع وسیله نقلیه نامعتبر است.");
}
