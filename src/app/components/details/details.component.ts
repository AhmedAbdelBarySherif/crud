import { Component, OnInit } from '@angular/core';

import { BookingService } from '../../services/booking.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  public article: any;

  constructor(public service: BookingService, public route: ActivatedRoute) {
  }
  
  ngOnInit() {
    this.getData();
  }

getData() {
  this.service.getBooks().subscribe(
    next =>  this.fetchGetBooksData(next),
    error => console.log(error),
    () => console.log('Done ^__^')
  );
}

  fetchGetBooksData(next) {
    const articles = next.articles;
    this.article = articles[articles.map(function(x) {return x.title; }).indexOf(this.route.snapshot.params.title)];
    console.log(this.article);
  }

}
