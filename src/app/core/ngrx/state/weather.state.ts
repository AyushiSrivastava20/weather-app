import {ForecastWeatherResponse, WeatherFields} from "@core/http-model/weather-response";
import {ApplicationState} from "@app/reducer";
import {createSelector} from "@ngrx/store";
import * as _ from 'lodash';

export class SelectedCity {
  id: number;
  lat: number;
  lon: number;
  name: string
}
export class WeatherState {
  data: WeatherFields[] | null;
  loading: boolean;
  error: any;
  selectedCity : SelectedCity;
  forecastData: ForecastWeatherResponse[] | null;
  forecastLoading: boolean;
  forecastError: any;
}

export const initialWeatherState: WeatherState = {
  data: null,
  loading: false,
  error: null,
  selectedCity : {
    id: 0,
    lat: 0,
    lon: 0,
    name: ''
  },
  forecastData: null,
  forecastLoading: false,
  forecastError: null
};

export const getWeatherDataStore = (state: ApplicationState) => state.weather;

export const getWeatherData = createSelector(getWeatherDataStore, (state) => _.get(state, 'data'));
export const getWeatherDataLoading = createSelector(getWeatherDataStore, (state) => _.get(state, 'data.loading'));
export const getSelectedCity = createSelector(getWeatherDataStore, (state) =>  _.get(state, 'selectedCity'));
export const getForecastData = createSelector(getWeatherDataStore, (state) => _.get(state, 'forecastData'));
export const getForecastDataLoading = createSelector(getWeatherDataStore, (state) =>_.get(state, 'forecastLoading'));
