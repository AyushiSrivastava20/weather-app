import {ForecastWeatherResponse, WeatherFields} from "@core/http-model/weather-response";
import {ApplicationState} from "@app/reducer";
import {createSelector} from "@ngrx/store";

export class SelectedCity {
  id: number;
  lat: number;
  lon: number;
  name: string
}
export class WeatherState {
  data: WeatherFields[];
  loading: boolean;
  error: any;
  selectedCity : SelectedCity;
  forecastData: ForecastWeatherResponse[];
  forecastLoading: boolean;
  forecastError: any;
}

export const initialWeatherState: WeatherState = {
  data: [],
  loading: false,
  error: null,
  selectedCity : {
    id: 0,
    lat: 0,
    lon: 0,
    name: ''
  },
  forecastData: [],
  forecastLoading: false,
  forecastError: null
};

export const getWeatherDataStore = (state: ApplicationState) => state.weather;

export const getWeatherData = createSelector(getWeatherDataStore, (state) => state.data);
export const getWeatherDataLoading = createSelector(getWeatherDataStore, (state) => state.data.loading);

export const getSelectedCity = createSelector(getWeatherDataStore, (state) => state.selectedCity);
export const getForecastData = createSelector(getWeatherDataStore, (state) => state.forecastData);
export const getForecastDataLoading = createSelector(getWeatherDataStore, (state) => state.forecastLoading);
