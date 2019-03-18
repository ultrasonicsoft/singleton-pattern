import { PrinterService } from "./printer-service";

export class EmailClient {
  private printer: PrinterService;
  constructor() {
    this.printer = PrinterService.getPrinter();
  }

  sendEmail(emailBody: string): void {
    this.printer.print(emailBody);
  }
}