import { EmailClient } from "./email-client";
import { PrinterService } from "./printer-service";
import { PdfClient } from "./pdf-client";

const emailClient = new EmailClient();
emailClient.sendEmail('Mail 1');
emailClient.sendEmail('Mail 2');
emailClient.sendEmail('Mail 3');

let printCount = PrinterService.getPrintCount();
console.log(`Print copies: ${printCount}`);

const pdfClient = new PdfClient();
pdfClient.printPdf('Pdf 1');
pdfClient.printPdf('Pdf 2');

printCount = PrinterService.getPrintCount();
console.log(`Print copies: ${printCount}`);