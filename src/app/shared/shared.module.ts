import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityWeatherCardComponent } from './city-weather-card/city-weather-card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatIconModule} from "@angular/material/icon";
import {CoreModule} from "@core/core.module";
import { HourlyWeatherCardComponent } from './hourly-weather-card/hourly-weather-card.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';


@NgModule({
    declarations: [
        CityWeatherCardComponent,
        HourlyWeatherCardComponent,
        WeatherIconComponent
    ],
    exports: [
        CityWeatherCardComponent,
        CommonModule,
        MatTooltipModule,
        HourlyWeatherCardComponent
    ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatIconModule,
    CoreModule
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
