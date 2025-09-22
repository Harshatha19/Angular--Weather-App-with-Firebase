import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';


@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.css']
})
export class TodayWeatherComponent implements OnInit {
 city: string = ""

location: any;
lat: any;
lon: any;
weather: any;
weatherNow: any;

currentTime = new Date();



  constructor(private foreCastService: ForecastService) { }

  ngOnInit(): void {
    // this.getLocation();
    this.getCity('Bangalore');
  }
  getLocation(){
    if("geolocation" in navigator){
navigator.geolocation.watchPosition((success) => {
  this.lat= success.coords.latitude;
  this.lon=success.coords.longitude;

  this.foreCastService.getWeatherByCoords(this.lat, this.lon).subscribe(data =>{
    this.weather = data;
  });
},(err)=>{
  alert('An unexpected error occoured' + err);
}
)
    }
  }

  getCity(city:string){
this.foreCastService.getWeatherByCityName(city).subscribe(data =>{
  this.weather = data;
})
this.foreCastService.getWeatherByCityName(this.city);

  }


  
}
