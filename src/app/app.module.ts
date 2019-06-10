// base Module
import { NgModule } from '@angular/core';
// Root Module
import { AppComponent } from './app.component';
// Feature Module
import { WeatherPanelModule } from './weather-panel/weather-panel.module';
// Shared Module
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    WeatherPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
