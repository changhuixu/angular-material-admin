import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgChartsModule } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { HomeComponent } from './home/home.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DataService } from './data.service';
import { PolarChartComponent } from './polar-chart/polar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsRoutingModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    NgChartsModule
  ],
  declarations: [
    HomeComponent,
    BarChartComponent,
    DonutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    LineChartComponent,
    PolarChartComponent
  ],
  providers: [DataService]
})
export class ChartsModule {}
