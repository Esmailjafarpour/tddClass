class EmailService {
  private static instance: EmailService;

  private constructor() {}

  static getInstance(): EmailService {
      if (!EmailService.instance) {
          EmailService.instance = new EmailService();
      }
      return EmailService.instance;
  }

  sendEmail(email: string, message: string): void {
      console.log(` ${email} : ${message}`);
  }
}

class EmailManager {
  private emailService: EmailService;

  constructor() {
      this.emailService = EmailService.getInstance();
  }

  sendEmails(emails: string[], message: string): void {
      const sentEmails = new Set<string>();

      for (const email of emails) {
          if (!sentEmails.has(email)) {
              this.emailService.sendEmail(email, message);
              sentEmails.add(email);
          }
      }
  }
}

const emailManager = new EmailManager();
const emails = ["abbas.revvaldev@gmail.com", "nader.revvaldev@gmail.com"];
emailManager.sendEmails(emails, "سلام برنامه نویس عزیز");
