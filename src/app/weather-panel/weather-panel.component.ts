import { CitiesService } from './../shared/cities.service';
import { Component, OnInit } from '@angular/core';
import { City } from './city/city.model'
@Component({
  selector: 'app-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.css']
})
export class WeatherPanelComponent implements OnInit {
  
  citiesArray:City["name"][] = [];
  constructor(private citiesservice:CitiesService) { 
  
  }
  ngOnInit() {
    // get 5 random cities from cities list.
     this.citiesservice.getRandomCities().subscribe((cities:City[]) => {
      for(let i=0; i<5; i++){
        const randomIndex = Math.floor((Math.random()*cities.length+1));
        this.citiesArray.push(cities[randomIndex].name);
      }
    })
  }


}
