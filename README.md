# Singleton Design pattern implemented in Typescript

## Design

* PrinterService - It is a Singleton class which provide service `print` to its client.
* EmailClient - Prints email via PrinterService
* PdfClient - Prints pdf content via PrinterService
* main.ts - Main program which creates objects of Email and Pdf and prints.

## Running program

`tsc *.ts && node main.js`

## Output

```creating new printer instance....
Printing: Mail 1.
Printing: Mail 2.
Printing: Mail 3.
Print copies: 3
creating new printer instance....
Printing: Pdf 1.
Printing: Pdf 2.
Print copies: 5```