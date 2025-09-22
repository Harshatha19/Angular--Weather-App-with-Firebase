import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FutureWeatherComponent } from './future-weather/future-weather.component';
import { TodayWeatherComponent } from './today-weather/today-weather.component';

const routes: Routes = [
  {path: 'todayWeather', component: TodayWeatherComponent},
  {path: 'futureWeather', component: FutureWeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
