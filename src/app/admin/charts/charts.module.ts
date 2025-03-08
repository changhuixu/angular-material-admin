import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { provideCharts, withDefaultRegisterables } from "ng2-charts";

import { DataService } from "./data.service";
import { HomeComponent } from "./home/home.component";
import { ChartsRoutingModule } from "./charts-routing.module";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { DonutChartComponent } from "./donut-chart/donut-chart.component";
import { RadarChartComponent } from "./radar-chart/radar-chart.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { PolarChartComponent } from "./polar-chart/polar-chart.component";

@NgModule({
  imports: [CommonModule, ChartsRoutingModule, MatCardModule, BarChartComponent, DonutChartComponent, RadarChartComponent, PieChartComponent, LineChartComponent, PolarChartComponent],
  declarations: [HomeComponent],
  providers: [DataService, provideCharts(withDefaultRegisterables())],
})
export class ChartsModule {}
