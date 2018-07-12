import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './cars/car-details/car-details.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarService } from "./shared/car.service";
@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarListComponent,
    CarDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
