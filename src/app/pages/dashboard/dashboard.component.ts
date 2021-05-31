import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherService} from "@core/services/weather.service";
import {Store} from "@ngrx/store";
import {ApplicationState} from "@app/reducer";
import {loadWeathers, loadWeathersForecastData} from "@core/ngrx/actions/weather.actions";
import {
  getForecastData, getForecastDataLoading,
  getSelectedCity,
  getWeatherData,
  getWeatherDataLoading,
  SelectedCity
} from "@core/ngrx/state/weather.state";
import {interval, Observable, Subscription} from "rxjs";
import {ForecastWeatherResponse, WeatherFields} from "@core/http-model/weather-response";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  // default forecast city
  defaultSelectedCity: SelectedCity = { id: 2759794, lat: 52.374, lon: 4.8897, name: 'Amsterdam'};
  weatherData$: Observable<WeatherFields[]>;
  loadingWeatherData$: Observable<boolean>;
  forecastWeatherData$: Observable<ForecastWeatherResponse[]>;
  loadingForecastWeatherData$: Observable<boolean>;
  weatherPollSubscription: Subscription;
  STATUS_INTERVAL_CHECK_TIME = 100000;
  selectedCity$ : Observable<SelectedCity>;

  constructor(
    private _weatherService : WeatherService,
    private _appStore: Store<ApplicationState>) {
  }

  ngOnInit(): void {
    this._appStore.dispatch(loadWeathers());
    this._appStore.dispatch(loadWeathersForecastData({city: this.defaultSelectedCity}));
    this.startPollingSubscription();
    this.weatherData$ = this._appStore.select(getWeatherData);
    this.selectedCity$ = this._appStore.select(getSelectedCity);
    this.loadingWeatherData$ = this._appStore.select(getWeatherDataLoading);
    this.forecastWeatherData$ = this._appStore.select(getForecastData);
    this.loadingForecastWeatherData$ = this._appStore.select(getForecastDataLoading);
  }

  private startPollingSubscription(): void {
    // Make sure there's only one.
    if (this.weatherPollSubscription) {
      this.weatherPollSubscription.unsubscribe();
    }
    this.weatherPollSubscription = interval(this.STATUS_INTERVAL_CHECK_TIME).subscribe(() => {
      this._appStore.dispatch(loadWeathers());
    });
  }

  ngOnDestroy(): void {
    this.weatherPollSubscription.unsubscribe();
  }

  selectCity(name: string, id: number, lat: number, lon: number) {
    this._appStore.dispatch(loadWeathersForecastData({city: {id, lat, lon, name}}));
  }

}
