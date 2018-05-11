import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BarcodeScanResult} from "@ionic-native/barcode-scanner";

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigations.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  infoScanned: string;
  infos: any;
  informations: string;
  agreement: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
    if(this.navParams.get('data') != null) {

      this.infoScanned = this.navParams.get('data');
     // this.infos = JSON.parse(this.infoScanned);
      this.informations = this.infoScanned;
     this.infos =  this.infoformattage(this.infoScanned);
      //this.informationsFormattage();
    }
  }

  infoformattage(datas: string) {
     var datasTab: any[];
     datasTab = datas.split(" ");
     for(let data of datasTab) {
       var subData: string[] = data.split(':');
       for(var i=0;i<subData.length;i++) {
         subData[i]= `:"${subData[i]}"`;

       }
       return `{${subData}}`;
     }
  }
}
