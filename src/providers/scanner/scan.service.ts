import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BarcodeScanner, BarcodeScannerOptions} from "@ionic-native/barcode-scanner";

/*
  Generated class for the ScannerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ScanProvider {

 // options: BarcodeScannerOptions;
  constructor( public barScan: BarcodeScanner) {
    console.log('Hello ScannerProvider Provider');
  }

  scanInfo: string;

  getScanInfos() {

   /* this.options = {
      prompt: 'veuillez pointer la camera vers le code pour effectuer un scan',
      torchOn: true
    };*/
    return this.barScan.scan();

  }


}
