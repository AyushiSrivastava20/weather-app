import {Component, Input, OnInit} from '@angular/core';
import {WeatherFields} from "@core/http-model/weather-response";
import {environment} from "@env/environment.prod";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-city-weather-card',
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.scss']
})
export class CityWeatherCardComponent implements OnInit {

  @Input() weatherData: WeatherFields;
  @Input() selectedId: number;
  constructor() {}

  ngOnInit(): void {
  }

}
