import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { Platform, NavController } from '@ionic/angular';
import { IBook } from 'src/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  books: IBook[] = [];
  constructor(
    private   platform: Platform,
    private  statusBar: StatusBar,
    private    splashScreen: SplashScreen,
    private navCtrl: NavController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  goToMySeries(params) {
    if (!params) {
      params = {};
    }
    this.navCtrl.navigateRoot('/myseries');
  }
  goToAuthor(params) {
    if (!params) {
      params = {};
    }
    this.navCtrl.navigateRoot('/author');
  }
  goToBook(params) {
    if (!params) {
      params = {};
    }
    this.navCtrl.navigateRoot('/book');
  }
  goToAdd(params) {
    if (!params) {
      params = {};
    }
    this.navCtrl.navigateRoot('/add');
  }
  goToAccount(params) {
    if (!params) {
      params = {};
    }
    this.navCtrl.navigateRoot('/account');
  }
}
