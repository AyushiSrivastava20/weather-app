export interface WeatherResponse {
  cnt: number;
  list: WeatherFields[];
}

export interface WeatherFields {
  coord: {
    lon: number;
    lat: number;
  },
  sys: {
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
  },
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ],
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  },
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  },
  clouds: {
    all: number;
  },
  dt: number;
  id: number;
  name: string;
}

export interface ForecastWeatherCompleteResponse{
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  hourly: ForecastWeatherResponse[]
}

export interface ForecastWeatherResponse {
  dt: number;
  timezone: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust:number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ],
  pop: number;
}
