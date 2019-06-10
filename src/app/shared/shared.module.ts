import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [],
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
    BrowserModule
  ]
})
export class SharedModule { }
