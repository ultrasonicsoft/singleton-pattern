"use strict";
exports.__esModule = true;
var PrinterService = /** @class */ (function () {
    function PrinterService() {
    }
    PrinterService.getPrinter = function () {
        if (!this.instance) {
            this.instance = new PrinterService();
        }
        console.log('creating new printer instance....');
        return this.instance;
    };
    PrinterService.prototype.print = function (message) {
        PrinterService.printCount++;
        console.log("Printing: " + message + ".");
    };
    PrinterService.getPrintCount = function () {
        return PrinterService.printCount;
    };
    PrinterService.printCount = 0;
    return PrinterService;
}());
exports.PrinterService = PrinterService;
