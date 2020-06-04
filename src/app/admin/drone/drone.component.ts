import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';


export interface DroneData {
    id : number;
    model : string;
    height : string;
    weight : string;
    battery : string;
    flight_time : string;
    speed : string;
}

@Component({
  selector: 'drone-tables',
  templateUrl: './drone.component.html',
  styleUrls: ['./drone.component.scss']
})


export class DroneComponent implements OnInit, AfterViewInit {
  displayedColumns = ['select', 'id', 'model', 'height', 'weight', 'battery', 'flight_time', 'speed'];
  dataSource: Array<DroneData>;
  dataTable : Array<DroneData>
  selection: SelectionModel<DroneData>;
  droneSearch : DroneData;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor() {}

  ngOnInit() {
    this.selection = new SelectionModel<DroneData>(true, []);
    this.dataSource = [
      {id : 1, model : 'Intel Aero 4', height : '200 mm', weight : '1000g', battery : '4000 mAh', flight_time : '20 min', speed : '15 m/s'},
      {id : 2, model : 'Intel Aero 4', height : '200 mm', weight : '1000g', battery : '4000 mAh', flight_time : '20 min', speed : '15 m/s'},
      {id : 3, model : 'Intel Aero 4', height : '200 mm', weight : '1000g', battery : '4000 mAh', flight_time : '20 min', speed : '15 m/s'},
      {id : 4, model : 'Intel Aero 4', height : '200 mm', weight : '1000g', battery : '4000 mAh', flight_time : '20 min', speed : '15 m/s'},
      {id : 5, model : 'Intel Aero 4', height : '200 mm', weight : '1000g', battery : '4000 mAh', flight_time : '20 min', speed : '15 m/s'},
      {id : 6, model : 'Intel Aero 4', height : '200 mm', weight : '1000g', battery : '4000 mAh', flight_time : '20 min', speed : '15 m/s'},
      {id : 7, model : 'Intel Aero 4', height : '200 mm', weight : '1000g', battery : '4000 mAh', flight_time : '20 min', speed : '15 m/s'},
      {id : 8, model : 'Intel Aero 4', height : '200 mm', weight : '1000g', battery : '4000 mAh', flight_time : '20 min', speed : '15 m/s'},
      //{}
    ];
    this.dataTable = this.dataSource;
    this.droneSearch = {id : 0, model : '', height : '', weight : '', battery : '', flight_time : '', speed : ''};
  }

  ngAfterViewInit() {
  }

  applyFilter() {
    console.log(this.droneSearch);
    this.dataTable = [];
    for (var row of this.dataSource) {
        let isMatched : boolean = true;
        if (!row.model.includes(this.droneSearch.model) && this.droneSearch.model != "") {
            isMatched = false;
        }
        if (isMatched) {
          this.dataTable.push(row);
        }
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.forEach(row => this.selection.select(row));
  }
}
