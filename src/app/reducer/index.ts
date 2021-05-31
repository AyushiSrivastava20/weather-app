import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {WeatherState} from "@core/ngrx/state/weather.state";
import {WeatherReducer} from "@core/ngrx/reducer/weather.reducer";

/**
 * Application state in the store
 */
export interface ApplicationState {
  weather: WeatherState | any;
}


/**
 * reducer for the application
 */
export const reducers: ActionReducerMap<ApplicationState> = {
  weather: WeatherReducer
}

export const metaReducers: MetaReducer<ApplicationState>[] = [];

