import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private _httpclient:HttpClient) { }

  getRandomCities(){
    return this._httpclient.get("./assets/cities.json");
  }
}
