class EmailService {
     private static instance: EmailService; 
     private sentEmails: Set<string> = new Set(); 
   
     private constructor() {
     }
   
     public static getInstance(): EmailService {
       if (!EmailService.instance) {
         EmailService.instance = new EmailService();
       }
       return EmailService.instance;
     }
   
     public sendEmail(email: string): void {
       if (this.sentEmails.has(email)) {
         console.log(`ایمیل به ${email} قبلاً ارسال شده است.`);
       } else {
         console.log(`ایمیل به ${email} ارسال شد.`);
         this.sentEmails.add(email);
       }
     }
   
     public sendEmailsToUsers(emails: string[]): void {
       emails.forEach(email => this.sendEmail(email));
     }
   }
   
   const emailService1 = EmailService.getInstance();
   const emailService2 = EmailService.getInstance();
   
   console.log("ارسال ایمیل‌ها از طریق ایمیل سرویس 1:");
   emailService1.sendEmail("user1@example.com");
   emailService1.sendEmail("user2@example.com");
   emailService1.sendEmail("user1@example.com"); 
   
   console.log("\nارسال ایمیل‌ها از طریق ایمیل سرویس 2:");
   emailService2.sendEmailsToUsers(["user3@example.com", "user4@example.com", "user1@example.com"]); 
   
   console.log(`آیا emailService1 و emailService2 همان نمونه هستند؟ ${emailService1 === emailService2}`);
   