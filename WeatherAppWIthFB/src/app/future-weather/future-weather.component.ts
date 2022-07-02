import { Component, OnInit } from '@angular/core';
// import 'weather-icons/css/weather-icons.css';
import { Forecast } from '../Forecast';
import { ForecastService } from '../forecast.service';



@Component({
  selector: 'app-future-weather',
  templateUrl: './future-weather.component.html',
  styleUrls: ['./future-weather.component.css']
})


export class FutureWeatherComponent implements OnInit {

  currentTime = new Date();
  cityWeather: any;
  weatherData: any;
  Forecast: Forecast[] = [];
  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {

    this.fiveDayForecastByCity("Bangalore");
    this.forecastService.getHistory().subscribe(
      (history) => { console.log("his", history) }
    )
  }

  fiveDayForecastByCity(city: string) {
    this.Forecast = [];
    this.forecastService.fiveDayForecast(city).subscribe({
      next: data => {
        this.cityWeather = data;
        console.log(this.cityWeather);
        console.log("anyway")
        //an array to run a loop for the 3 day weather forecast 
        for (let i = 0; i < this.cityWeather.forecast.forecastday.length; i++) {
          this.weatherData = new Forecast(this.cityWeather.location.name, this.cityWeather.current.condition.icon,
            this.cityWeather.forecast.forecastday[i].day.avgtemp_c,
            this.cityWeather.forecast.forecastday[i].date,
            this.cityWeather.forecast.forecastday[i].day.condition.text,
            this.cityWeather.forecast.forecastday[i].day.mintemp_c,
            this.cityWeather.forecast.forecastday[i].day.maxtemp_c);
          this.Forecast.push(this.weatherData)
         
        }
        this.forecastService.setHistory(city).subscribe()
      },
      error: error => {
        console.log(error, "error")
        alert("No matching location!")
      }
    });


  }

}
