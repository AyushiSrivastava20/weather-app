import { createAction, props } from '@ngrx/store';
import {ForecastWeatherResponse, WeatherFields} from "@core/http-model/weather-response";
import {SelectedCity} from "@core/ngrx/state/weather.state";

export const loadWeathers = createAction(
  '[Weather] Load Weathers'
);

export const loadWeathersSuccess = createAction(
  '[Weather] Load Weathers Success',
  props<{ data: WeatherFields[] }>()
);

export const loadWeathersFailure = createAction(
  '[Weather] Load Weathers Failure',
  props<{ error: any}>()
);

export const loadWeathersForecastData = createAction(
  '[Weather] Load Weathers Forecast Data',
  props<{city: SelectedCity}>()
);

export const loadWeathersForecastDataSuccess = createAction(
  '[Weather] Load Weathers Forecast Data Success',
  props<{ forecastData: ForecastWeatherResponse[] }>()
);

export const loadWeathersForecastDataFailure = createAction(
  '[Weather] Load Weathers Forecast Data Failure',
  props<{ forecastError: any}>()
);
