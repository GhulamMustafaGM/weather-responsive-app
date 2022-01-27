import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCityWeatherComponent } from './current-city-weather.component';

describe('CurrentCityWeatherComponent', () => {
  let component: CurrentCityWeatherComponent;
  let fixture: ComponentFixture<CurrentCityWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentCityWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCityWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
