import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyWeatherCardComponent } from './hourly-weather-card.component';

describe('HourlyWeatherCardComponent', () => {
  let component: HourlyWeatherCardComponent;
  let fixture: ComponentFixture<HourlyWeatherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyWeatherCardComponent ]
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