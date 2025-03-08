import { Component, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { BaseChartDirective } from "ng2-charts";

@Component({
  selector: "app-donut-chart",
  standalone: true,
  imports: [MatCardModule, BaseChartDirective],

  templateUrl: "./donut-chart.component.html",
  styleUrls: ["./donut-chart.component.scss"],
})
export class DonutChartComponent implements OnInit {
  doughnutChartData = {
    labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  };
  doughnutChartType = "doughnut";

  constructor() {}

  ngOnInit() {}
  chartClicked(e: any): void {
    console.log(e.active);
    console.log(e.event);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
}
