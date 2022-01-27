import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherForecastComponent } from './city-weather-forecast.component';

describe('CityWeatherForecastComponent', () => {
  let component: CityWeatherForecastComponent;
  let fixture: ComponentFixture<CityWeatherForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityWeatherForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
