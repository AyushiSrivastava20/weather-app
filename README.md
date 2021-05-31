# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

##About the App
1. App is built with Angular-Cli using Weather Api https://openweathermap.org/.
2. Dashboard shows the weather current conditions in 5 cities of Europe. On clicking one of the cities a detailed hourly forecast is shown.
3. In case if no data is returned or an error is encountered we show an empty state "Data not found"
4. Added a loader that spins while the data is being retrieved from weather API's
5. For UI styling Angular Material is used.
6. For state management Redux (https://ngrx.io/) is used.
7. We also pull the data from Openweather API every 10 mins to get the fresh data.


## Architecture
 ####The complete project is broken into small modules
1. CoreModule - Singelton Services, Pipes, Enums, Interfaces are part of the core module. The core module is only imported once in AppModule.
2. SharedModule - This contains all the basic UI components which can be reused throughout the app and can be imported in feature modules based on need.
3. PagesModule - This module is our main module which is responsible for loading all other feature modules. We use "Lazy Loading" to load the feature modules based on routes. Header is part of PagesModule.
4. DashboardModule - (Feature module) This module is our home page module - responsible for loading all the weather data.
 ####Redux
1. Redux is used for state management. The state is maintained in Store which can only be updated by Pure Functions (Reducers). 
2. Actions are dispatched based on users' interactions and based on that store is updated. 
3. Selectors are to get the current state/slice of the store's data.
4. In Weather App, we have actions to get weather data and forecast data. We also save the user's selected city in store for which he wishes to see the forecast weather.
5. The dashboard component is subscribed to a particular selector from the store which returns an Observable. UI subscribes to this observable and renders the data.
6. Polling subscription is set to get the data from api every 10 mins until the component is destroyed.

## OpenWeather API
1. In order to get the key https://openweathermap.org/appid
2. Once we have the key please update the value of "api_key" in environment.ts file.

## Development server

1. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
2. Currently only Dev Server is setup, therefore we can only run the app locally, it is not hosted anywhere.
3. To run locally please run `ng serve`
## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
