import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';




@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  searchType: string;

  constructor(public navCtrl: NavController) {
    this.setSearchType('title');
  }

  search = () => {

  }

  setSearchType = type => {
    this.searchType = type;
  }
  getSearchType = type => this.searchType === type ? 'primary' : 'medium';
}
