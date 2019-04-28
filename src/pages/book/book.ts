import { Component } from '@angular/core';
import { MySeriesPage } from '../my-series/my-series';
import { Router } from '@angular/router';

@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})
export class BookPage {

  constructor(public router: Router) {
  }

}
