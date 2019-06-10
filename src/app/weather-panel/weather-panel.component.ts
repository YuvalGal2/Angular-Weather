import { DataService } from './../shared/data.service';
import { CitiesService } from './../shared/cities.service';
import { Component, OnInit } from '@angular/core';
import { City } from './city/city.model'
@Component({
  selector: 'app-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.css']
})
export class WeatherPanelComponent implements OnInit {
  citiesArray:string[] = [];
  displayHoursReport:boolean;

  constructor(private citiesservice:CitiesService,private dataservice:DataService) { }

 
  ngOnInit() {
    this.dataservice.getNextHoursReportStatus().subscribe((status:boolean) => {
      this.displayHoursReport = status;
    })
     this.citiesservice.getRandomCities().subscribe((cities:City[]) => {
      for(let i=0; i<5; i++){
        const randomIndex = Math.floor((Math.random()*cities.length+1));
        this.citiesArray.push(cities[randomIndex].name);
      }
    })
  }


}
