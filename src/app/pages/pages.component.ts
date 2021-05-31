import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  todayDate: Date;
  title: string;

  constructor() {
    this.todayDate = new Date();
    this.title = 'Weather Forecast'
  }

  ngOnInit(): void {
  }

}
