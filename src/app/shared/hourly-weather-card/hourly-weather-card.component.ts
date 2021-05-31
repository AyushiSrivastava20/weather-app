import {Component, Input, OnInit} from '@angular/core';
import {ForecastWeatherResponse} from "@core/http-model/weather-response";

@Component({
  selector: 'app-hourly-weather-card',
  templateUrl: './hourly-weather-card.component.html',
  styleUrls: ['./hourly-weather-card.component.scss']
})
export class HourlyWeatherCardComponent implements OnInit {

  @Input() forecastHourly: ForecastWeatherResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
