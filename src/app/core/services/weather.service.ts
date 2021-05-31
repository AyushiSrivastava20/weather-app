import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@env/environment";
import {
  WeatherFields,
  WeatherResponse,
  ForecastWeatherResponse,
  ForecastWeatherCompleteResponse
} from "@core/http-model/weather-response";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

export const CityList = [2759794, 2968815, 3054638, 6356055, 3169070]

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // list of ids for europe cities
  urlWeatherData = `data/2.5/group`;
  forecastWeatherUrl = 'data/2.5/onecall';
  constructor(private httpClient: HttpClient) {
  }

  /**
   * returns weather data for the city lists
   */
  getWeatherDataForCities(): Observable<WeatherFields[]> {
    const url = environment.backend_url+ `${this.urlWeatherData}?id=${CityList.toString()}&units=metric&appId=${environment.api_key}`;
    return this.httpClient.get<WeatherResponse>(url).pipe(map(resp => resp.list));
  }

  /**
   * returns forecast weather
   * @param lat - latitude
   * @param lon - longitude
   */
  getForeCastData(lat: number, lon: number): Observable<ForecastWeatherResponse[]> {
    const url = environment.backend_url+ `${this.forecastWeatherUrl}?lat=${lat}&lon=${lon}&exclude=current,minutely,daily&units=metric&appId=${environment.api_key}`;
    return this.httpClient.get<ForecastWeatherCompleteResponse>(url).pipe(
      map(resp => resp.hourly));
  }
}
