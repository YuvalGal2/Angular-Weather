import { City } from '../weather-panel/city/city.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import { retryWhen, delayWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _httpclient:HttpClient) { }
  

  getCurrentWeatherByName(name:City["name"]){
  
    return this._httpclient.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=14881de1fa074c6cd3a525ce6c87151e`)
    .pipe(retryWhen(errors =>
      errors.pipe(
        //restart in 6 seconds
        delayWhen(() => timer(10000))
      )
    ))
  }
}
