import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyWeatherCardComponent } from './hourly-weather-card.component';
import {TemperaturePipe} from "@core/pipes/temperature.pipe";
import {CustomDatePipe} from "@core/pipes/custom-date.pipe";

describe('HourlyWeatherCardComponent', () => {
  let component: HourlyWeatherCardComponent;
  let fixture: ComponentFixture<HourlyWeatherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyWeatherCardComponent, TemperaturePipe, CustomDatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
