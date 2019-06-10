import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { WeatherPanelComponent } from './weather-panel.component';
import { CityComponent } from './city/city.component';
import { ReportComponent } from './next-hours-reports/report/report.component';
import { NextHoursReportsComponent } from './next-hours-reports/next-hours-reports.component';

@NgModule({
  declarations: [
    WeatherPanelComponent,
    CityComponent,
    ReportComponent,
    NextHoursReportsComponent
  ],
  imports: [
    SharedModule
  ],
  exports:[
    WeatherPanelComponent
  ]
})
export class WeatherPanelModule { }
