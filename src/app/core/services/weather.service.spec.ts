import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CityList, WeatherService} from './weather.service';
import {HttpClientModule} from "@angular/common/http";
import {environment} from "@env/environment";
import  *  as  conditions  from  '../mock/weather.json';
import  *  as  forecast  from  '../mock/forecastWeather.json';
import {ForecastWeatherResponse, WeatherFields} from "@core/http-model/weather-response";

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;
  // @ts-ignore
  const currentConditions: WeatherFields[] = conditions;
  // @ts-ignore
  const weatherForecast: ForecastWeatherResponse[] = forecast;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [WeatherService]
    });
    service = TestBed.get(WeatherService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get current weather data for cities', () => {
    const openWeatherMapAPIURL = environment.backend_url+ `data/2.5/group?id=${CityList.toString()}&units=metric&appId=${environment.api_key}`;
    // @ts-ignore
    service.getWeatherDataForCities()
      .subscribe(result => expect(result).toEqual(currentConditions));

    const req = httpMock.expectOne(openWeatherMapAPIURL);
    expect(req.request.method).toEqual('GET');
    req.flush(currentConditions);
    httpMock.verify();
  });

  it('get forecast weather', () => {
    const openWeatherMapAPIURL = environment.backend_url+ `data/2.5/onecall?lat=52.374&lon=4.8897&exclude=current,minutely,daily&units=metric&appId=${environment.api_key}`;
    // @ts-ignore
    service.getForeCastData(52.374, 4.8897)
      .subscribe(result => expect(result).toEqual(weatherForecast));

    const req = httpMock.expectOne(openWeatherMapAPIURL);
    expect(req.request.method).toEqual('GET');
    req.flush(weatherForecast);
    httpMock.verify();
  });

});
