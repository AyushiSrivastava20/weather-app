import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherCardComponent } from './city-weather-card.component';
import {CustomDatePipe} from "@core/pipes/custom-date.pipe";
import {TemperaturePipe} from "@core/pipes/temperature.pipe";

describe('CityWeatherCardComponent', () => {
  let component: CityWeatherCardComponent;
  let fixture: ComponentFixture<CityWeatherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityWeatherCardComponent, CustomDatePipe, TemperaturePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
