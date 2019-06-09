import { City } from '../weather-panel/city/city.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, Subject, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { retryWhen, delayWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _httpclient:HttpClient) { }
  private displayAssignedReport:boolean;
  private cityName:City["name"];
  private nextHoursReport = new BehaviorSubject({});

  setReportForCity(cityName:City["name"]){
    if(!this.displayAssignedReport){
      this.displayAssignedReport = true;
    }
    this.cityName = cityName;
    this.setNextHoursReport();
  }

  getNextHoursReport(){
    return this.nextHoursReport;
  }
   setNextHoursReport(){
    this._httpclient.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&appid=14881de1fa074c6cd3a525ce6c87151e`).subscribe((report) => {
      this.nextHoursReport.next(report);
    })
   }

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
