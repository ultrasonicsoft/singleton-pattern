export class PrinterService {
  private static printCount = 0;
  private static instance: PrinterService;

  private constructor() { }

  public static getPrinter(): PrinterService {
    if (!this.instance) {
      this.instance = new PrinterService();
    }
    console.log('creating new printer instance....')
    return this.instance;
  }

  public print(message: string): void {
    PrinterService.printCount++;
    console.log(`Printing: ${message}.`);
  }

  public static getPrintCount(): number {
    return PrinterService.printCount;
  }
}