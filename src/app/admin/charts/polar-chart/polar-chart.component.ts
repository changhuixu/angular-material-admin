import { Component, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { BaseChartDirective } from "ng2-charts";

@Component({
  selector: "app-polar-chart",
  standalone: true,
  imports: [MatCardModule, BaseChartDirective],
  templateUrl: "./polar-chart.component.html",
  styleUrls: ["./polar-chart.component.scss"],
})
export class PolarChartComponent implements OnInit {
  datasets= [
    {
      data: [300, 500, 100, 40, 120],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(75, 192, 192)",
        "rgb(255, 205, 86)",
        "rgb(201, 203, 207)",
        "rgb(54, 162, 235)",
      ],
    },
  ];
    labels= [
      "Download Sales",
      "In-Store Sales",
      "Mail Sales",
      "Telesales",
      "Corporate Sales",
    ];

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
