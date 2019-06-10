import { City } from './city.model';
import { DataService } from '../../shared/data.service';
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  // get the city name from the perent component.
  @Input() cityName:string;
  cityDetails:City;
  displayLoading:boolean;
  
  constructor(private dataservice:DataService) { 
    this.displayLoading = true;
  }

  onContainerClicked(){
    this.dataservice.setReportForCity(this.cityName);
  }
  

  ngOnInit() {
  // use that very city name to get the data of the city from the service
    this.dataservice.getCurrentWeatherByName(this.cityName).subscribe((response:City) => {
    this.cityDetails = response;
    //console.log(this.cityDetails);
    this.displayLoading = false;
    },(error:any) => {
      console.log("ERROR!!!");
    })
  }
}
