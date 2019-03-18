"use strict";
exports.__esModule = true;
var printer_service_1 = require("./printer-service");
var EmailClient = /** @class */ (function () {
    function EmailClient() {
        this.printer = printer_service_1.PrinterService.getPrinter();
    }
    EmailClient.prototype.sendEmail = function (emailBody) {
        this.printer.print(emailBody);
    };
    return EmailClient;
}());
exports.EmailClient = EmailClient;
