
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherPanelComponent } from './weather-panel/weather-panel.component';
import { CityComponent } from '../app/weather-panel/city/city.component';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NextHoursReportsComponent } from './weather-panel/next-hours-reports/next-hours-reports.component';
import { ReportComponent } from './weather-panel/next-hours-reports/report/report.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherPanelComponent,
    CityComponent,
    NextHoursReportsComponent,
    ReportComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
