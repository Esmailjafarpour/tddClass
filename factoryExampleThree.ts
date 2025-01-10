
interface Ticket {
     bookTicket(): void;
   }
   
 
   class FlightTicket implements Ticket {
     bookTicket(): void {
       console.log("بلیط هواپیما رزرو شد.");
     }
   }
   
 
   class TrainTicket implements Ticket {
     bookTicket(): void {
       console.log("بلیط قطار رزرو شد.");
     }
   }
   
 
   class BusTicket implements Ticket {
     bookTicket(): void {
       console.log("بلیط اتوبوس رزرو شد.");
     }
   }
   
 
   class TicketFactory {
     static createTicket(type: string): Ticket {
       if (type === "flight") {
         return new FlightTicket();
       } else if (type === "train") {
         return new TrainTicket();
       } else if (type === "bus") {
         return new BusTicket();
       } else {
         throw new Error("نوع بلیط نامعتبر است.");
       }
     }
   }
   
 
   const flightTicket = TicketFactory.createTicket("flight");
   flightTicket.bookTicket(); 
   
   const trainTicket = TicketF
   