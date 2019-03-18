"use strict";
exports.__esModule = true;
var printer_service_1 = require("./printer-service");
var PdfClient = /** @class */ (function () {
    function PdfClient() {
        this.printer = printer_service_1.PrinterService.getPrinter();
    }
    PdfClient.prototype.printPdf = function (pdfContent) {
        this.printer.print(pdfContent);
    };
    return PdfClient;
}());
exports.PdfClient = PdfClient;
