import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WeatherEffects } from './weather.effects';
import {HttpClientModule} from "@angular/common/http";

describe('WeatherEffects', () => {
  let actions$: Observable<any>;
  let effects: WeatherEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [
        WeatherEffects,
        HttpClientModule,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(WeatherEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
