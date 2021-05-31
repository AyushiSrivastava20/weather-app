import {Action, createReducer, on} from '@ngrx/store';
import {initialWeatherState, WeatherState} from "@core/ngrx/state/weather.state";
import {failureLoadedState, loadingState, successLoadedState} from "@core/interfaces/ngrx-loading-state";
import {loadWeathers, loadWeathersFailure, loadWeathersSuccess,
  loadWeathersForecastDataFailure,
  loadWeathersForecastDataSuccess,
  loadWeathersForecastData} from "@core/ngrx/actions/weather.actions";


const weatherReducer = createReducer(
  initialWeatherState,
  on(loadWeathers, (state: WeatherState) => ({ ...state, ...loadingState })),
  on(loadWeathersSuccess, (state: WeatherState, {data}) => {
    return {
      ...state,
      data: data,
      ...successLoadedState
    };
  }),
  on(loadWeathersFailure, (state: WeatherState, {error}) => {
    return {
      ...state,
      ...failureLoadedState,
      error
    };
  }),
  on(loadWeathersForecastData, (state: WeatherState, {city}) => {
    return {
      ...state,
      selectedCity: city,
      forecastLoading: true,
      error: null
    };
  }),
  on(loadWeathersForecastDataSuccess, (state: WeatherState, {forecastData}) => {
    return {
      ...state,
      forecastData: forecastData,
      forecastLoading: false,
      forecastError: null
    };
  }),
  on(loadWeathersForecastDataFailure, (state: WeatherState, {forecastError}) => {
    return {
      ...state,
      forecastLoading: false,
      forecastError: forecastError
    };
  })
);

export function WeatherReducer(state: WeatherState | undefined, action: Action) {
  return weatherReducer(state, action);
}
