import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  // url = 'https://api.openweathermap.org/data/2.5/weather';

  apiKey = 'a81b60d61df3212e7957142164b83a60';
  constructor(private http: HttpClient) { }

  getWeatherByCoords(lat: any, lon: any) {
    let currentWeatherData = this.http.get('https://api.openweathermap.org/data/2.5/weather');
    console.log(currentWeatherData);
    return currentWeatherData;
  }

  getWeatherByCityName(city: string) {

    let params = new HttpParams()
      .set('q', city)
      .set('units', 'imperial')
      .set('appid', this.apiKey)

    return this.http.get('https://api.openweathermap.org/data/2.5/weather', { params })

  }

  fiveDayForecast(city: string) {
    let weatherValue = this.http.get(`http://api.weatherapi.com/v1/forecast.json?key=66a7fa53fb9440e0a02141801221405&q=${city}&days=3&aqi=yes&alerts=yes`)
    console.log(weatherValue);
    return weatherValue;
  }

  setHistory(location: string) {
    return this.http.post('https://weatherapp-79ade-default-rtdb.firebaseio.com/history.json', { location })
  }

  getHistory() {
    return this.http.get('https://weatherapp-79ade-default-rtdb.firebaseio.com/history.json');
  }

}
