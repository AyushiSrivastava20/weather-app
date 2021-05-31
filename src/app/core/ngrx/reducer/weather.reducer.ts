import {Action, createReducer, on} from '@ngrx/store';
import {initialWeatherState, WeatherState} from "@core/ngrx/state/weather.state";
import {failureLoadedState, loadingState, successLoadedState} from "@core/interfaces/ngrx-loading-state";
import {loadWeathers, loadWeathersFailure, loadWeathersSuccess,
  loadWeathersForecastDataFailure,
  loadWeathersForecastDataSuccess,
  loadWeathersForecastData} from "@core/ngrx/actions/weather.actions";


const weatherReducer = createReducer(
  initialWeatherState,
  // @ts-ignore
  on(loadWeathers, (state: WeatherState) => ({ ...state, ...loadingState })),
  // @ts-ignore
  on(loadWeathersSuccess, (state: WeatherState, {data}) => {
    return {
      ...state,
      data: data,
      ...successLoadedState
    };
  }),
  // @ts-ignore
  on(loadWeathersFailure, (state: WeatherState, {error}) => {
    return {
      ...state,
      ...failureLoadedState,
      error
    };
  }),
  // @ts-ignore
  on(loadWeathersForecastData, (state: WeatherState, {city}) => {
    return {
      ...state,
      selectedCity: city,
      forecastLoading: true,
      error: null
    };
  }),
  // @ts-ignore
  on(loadWeathersForecastDataSuccess, (state: WeatherState, {forecastData}) => {
    return {
      ...state,
      forecastData: forecastData,
      forecastLoading: false,
      forecastError: null
    };
  }),
  // @ts-ignore
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
