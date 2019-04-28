import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { BookPage } from '../pages/book/book';
import { MySeriesPage } from '../pages/my-series/my-series';
import { AuthorPage } from '../pages/author/author';
import { AddPage } from '../pages/add/add';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';


import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BookPage,
    MySeriesPage,
    AuthorPage,
    AddPage,
    SignupPage,
    LoginPage,
    AccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ]
})
export class AppModule {}
