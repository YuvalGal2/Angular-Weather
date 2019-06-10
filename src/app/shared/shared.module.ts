import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { TemperaturePipe } from './temperature.pipe';
@NgModule({
  declarations: [TemperaturePipe],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule
  ],
  exports:[
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    TemperaturePipe
  ]
})
export class SharedModule { }
