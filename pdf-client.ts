import { PrinterService } from "./printer-service";

export class PdfClient {
  private printer: PrinterService;
  constructor() {
    this.printer = PrinterService.getPrinter();
  }

  printPdf(pdfContent: string): void {
    this.printer.print(pdfContent);
  }
}