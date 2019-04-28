import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MySeriesPage } from '../my-series/my-series';

@Component({
  selector: 'page-author',
  templateUrl: 'author.html'
})
export class AuthorPage {

  constructor(public navCtrl: NavController) {
  }

}
