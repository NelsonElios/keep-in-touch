import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ScanPage} from "../pages/scan/scan";
import {FormPage} from "../pages/form/form";
import {ContactsPage} from "../pages/contacts/contacts";
import {ConnexionPage} from "../pages/connexion/connexion";
import {ScanProvider} from '../providers/scanner/scan.service';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ScanPage,
    FormPage,
    ContactsPage,
    ConnexionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ScanPage,
    FormPage,
    ContactsPage,
    ConnexionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ScanProvider,
    BarcodeScanner
  ]
})
export class AppModule {}
