import {Component, Input, OnInit} from '@angular/core';
import {environment} from "@env/environment.prod";

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss']
})
export class WeatherIconComponent implements OnInit {

  @Input() descriptionWeather: string;
  @Input() iconName: string
  @Input() imageSize: string
  imageIconUrl = environment.img_url;
  constructor() { }

  ngOnInit(): void {
  }

}
