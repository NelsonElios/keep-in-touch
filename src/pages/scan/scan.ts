import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScanProvider} from "../../providers/scanner/scan.service";
import {BarcodeScanResult} from "@ionic-native/barcode-scanner";
import {FormPage} from "../form/form";

/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  scanResult: BarcodeScanResult;

  constructor(public navCtrl: NavController, public navParams: NavParams, public scanProvider: ScanProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

  scanner() {
    this.scanProvider.getScanInfos().then(
      (data) => {
        this.scanResult = data;
        this.navCtrl.push(FormPage, {data: this.scanResult.text});
       // return this.scanResult;
      },
      () => {
        alert('Impossible de faire le scan');
      }

    ).catch(
      () => {
        alert('erreur scan');
      }
    )
  }
}
