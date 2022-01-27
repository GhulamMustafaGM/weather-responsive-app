import { Component, OnInit } from '@angular/core';
import { GetWeatherApiService } from '../get-weather-api.service'

interface IForeCastList {
  day: string;
  temperature: string
  windSpeed: string
  weatherIcon: string
  currentTemperatureMax: string;
  currentTemperatureMin: string;
}

@Component({
  selector: 'app-city-weather-forecast',
  templateUrl: './city-weather-forecast.component.html',
  styleUrls: ['./city-weather-forecast.component.css']
})
export class CityWeatherForecastComponent implements OnInit {
  weatherList: Array<Number> = [];
  foreCastList: Array<IForeCastList> = [];
  constructor(private api: GetWeatherApiService) {
  }

  ngOnInit(): void {
    this.api.apiCallForeCast().subscribe((data: any) => {
      data.properties.timeseries.forEach((element: any) => {

        let today = new Date().toISOString().slice(8, 10)
        let todayApi = element.time.slice(8, 10)

        if (todayApi !== today) {

          if (element.time.includes("T12")) {
            this.weatherList.push(element)
          }
        }
      });
      this.weatherList.length = 7
      this.weatherList.forEach((day: any) => {
        var d = new Date(day.time);

        let foreCastObj: any = {
          day: "",
          temperature: "",
          windSpeed: "",
          weatherIcon: "",
          currentTemperatureMax: "",
          currentTemperatureMin: ""
        };

        foreCastObj.day = d.toString().slice(0, 4)
        foreCastObj.currentTemperatureMin = String(day.data.next_6_hours.details.air_temperature_min).slice(0, 2)
        foreCastObj.currentTemperatureMax = String(day.data.next_6_hours.details.air_temperature_max).slice(0, 2)
        foreCastObj.temperature = String(day.data.instant.details.air_temperature).slice(0, 2)
        foreCastObj.windSpeed = String(day.data.instant.details.wind_speed).slice(0, 1)
        foreCastObj.weatherIcon = day.data.next_6_hours.summary.symbol_code

        this.foreCastList.push(foreCastObj)
      });
    })
  }
}

