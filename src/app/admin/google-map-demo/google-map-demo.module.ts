import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoogleMapsModule} from '@angular/google-maps';

import { GoogleMapDemoRoutingModule } from './google-map-demo-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    GoogleMapDemoRoutingModule
  ]
})
export class GoogleMapDemoModule { }
