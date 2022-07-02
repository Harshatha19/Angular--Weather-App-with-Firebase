import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidgetNavComponent } from './weather-widget-nav.component';

describe('WeatherWidgetNavComponent', () => {
  let component: WeatherWidgetNavComponent;
  let fixture: ComponentFixture<WeatherWidgetNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherWidgetNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWidgetNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
