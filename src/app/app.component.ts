import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private weatherService: WeatherService){
    
  }
  weekday1?: string;
  weekday2?: string; 
  weekday3?: string; 
  weekday4?: string; 
  weekday5?: string; 
  cityName: string = 'Toronto';
  weatherData?: WeatherData;
  
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }
  onSubmit(){
    this.getWeatherData(this.cityName); 
    this.cityName = ''; 
    console.log(this.getWeatherData(this.cityName));
  }

  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response: any) => {
        this.weatherData = response;
        if(this.weatherData)
        {
          let tempDate = new Date(this.weatherData.list[0].dt_txt);
          this.weekday1= new Date(this.weatherData.list[0].dt_txt).toLocaleString('en-us', {  weekday: 'short' });
          this.weekday2 = new Date(tempDate.setDate(tempDate.getDate()+1)).toLocaleString('en-us', {  weekday: 'short' });
          this.weekday3 = new Date(tempDate.setDate(tempDate.getDate()+1)).toLocaleString('en-us', {  weekday: 'short' });
          this.weekday4 = new Date(tempDate.setDate(tempDate.getDate()+1)).toLocaleString('en-us', {  weekday: 'short' });
          this.weekday5 = new Date(tempDate.setDate(tempDate.getDate()+1)).toLocaleString('en-us', {  weekday: 'short' });
        }
      }
    });
  }

}
