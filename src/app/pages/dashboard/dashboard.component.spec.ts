import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import {WeatherService} from "@core/services/weather.service";
import {StoreModule} from "@ngrx/store";
import {reducers} from "@app/reducer";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, StoreModule.forRoot(reducers)],
      declarations: [ DashboardComponent ],
      providers: [WeatherService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
