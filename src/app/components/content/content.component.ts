import { Component, OnInit } from '@angular/core';

import { BookingService } from '../../services/booking.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  articles: any;
  id: string;

  constructor(public ser: BookingService, public navTo: Router) {
    this.getDataBook();
  }

  ngOnInit() {
  }

  detailArticle(title) {
    this.navTo.navigate(['/details', title]);
  }

  getDataBook() {
    this.ser.getBooks().subscribe(
      next =>  this.fetchGetBooksData(next),
      error => console.log(error),
      () => console.log('Done ^__^')
    );
  }

  fetchGetBooksData(next) {
    console.log(next.articles);
    this.articles = next.articles;
  }

}
