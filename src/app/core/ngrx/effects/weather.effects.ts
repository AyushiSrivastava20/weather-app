import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  loadWeathers,
  loadWeathersFailure,
  loadWeathersForecastData, loadWeathersForecastDataFailure, loadWeathersForecastDataSuccess,
  loadWeathersSuccess
} from "@core/ngrx/actions/weather.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {WeatherService} from "@core/services/weather.service";
import {of} from "rxjs";


@Injectable()
export class WeatherEffects {

  constructor(private actions$: Actions, private weatherService: WeatherService) {}

  getWeatherData$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(loadWeathers),
      mergeMap(() =>
        this.weatherService.getWeatherDataForCities().pipe(
          map ((res) => loadWeathersSuccess({ data: res }) ),
          catchError((error: any) => of(loadWeathersFailure({error: error})))
        )
      )
    )
  );

  getForecastWeatherData$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(loadWeathersForecastData),
      mergeMap((action) =>
        this.weatherService.getForeCastData(action.city.lat, action.city.lon).pipe(
          map ((res) => loadWeathersForecastDataSuccess({ forecastData: res.slice(0, 9) }) ),
          catchError((error: any) => of(loadWeathersForecastDataFailure({forecastError: error})))
        )
      )
    )
  );
}
