import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';


export interface AssignmentData {
    userId : number;
    startDate : string;
    completeDate : string;
    location : string;
    description : string;
    column : string;
    status : string;
}

@Component({
  selector: 'assignment-tables',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})


export class AssignmentComponent implements OnInit, AfterViewInit {
  displayedColumns = ['userId', 'startDate', 'completeDate', 'location', 'description', 'column', 'status'];
  dataSource: Array<AssignmentData>;
  dataTable : Array<AssignmentData>
  selection: SelectionModel<AssignmentData>;
  startDate : Date;
  endDate : Date;
  userId : number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public dialog: MatDialog,
              public datepipe: DatePipe) {}

  ngOnInit() {
    this.selection = new SelectionModel<AssignmentData>(true, []);
    this.dataSource = [{userId : 1, startDate : '25/05/2020', completeDate : '01/06/2020', location : "Đại học Bách Khoa", description : "Sửa dây điện", column : "N3E8", status : "Đã hoàn thành"}
                      ,{userId : 2, startDate : '27/05/2020', completeDate : '05/06/2020', location : "Cầu Vĩnh Tuy", description : "Thay cột mới", column : "P1Q2", status : "Đã hoàn thành"}
                      ,{userId : 2, startDate : '27/05/2020', completeDate : '07/06/2020', location : "Đại học Bách Khoa", description : "Sửa cột", column : "P1Q2", status : "Đã hoàn thành"}
                      ,{userId : 3, startDate : '25/05/2020', completeDate : '', location : "Cầu Vĩnh Tuy", description : "Sửa dây điện", column : "N3E8", status : "Đang kiểm tra"}
                      ,{userId : 4, startDate : '27/05/2020', completeDate : '', location : "Cầu Vĩnh Tuy", description : "Kiểm tra cột", column : "N6F7", status : "Đang kiểm tra"}
                      ,{userId : 5, startDate : '27/05/2020', completeDate : '', location : "Đại học Bách Khoa", description : "Kiểm tra cột", column : "P1Q2", status : "Đang sửa chữa"}
                      ,{userId : 1, startDate : '25/05/2020', completeDate : '', location : "Đại học Bách Khoa", description : "Tháo dây điện", column : "N6F7", status : "Đang sửa chữa"}
                      ,{userId : 6, startDate : '25/05/2020', completeDate : '', location : "Cầu Vĩnh Tuy", description : "Nâng cấp cột", column : "Q3T2", status : "Đang sửa chữa"}
                      ,{userId : 5, startDate : '27/05/2020', completeDate : '01/06/2020', location : "Đại học Bách Khoa", description : "Hàn mối nối", column : "N3E8", status : "Đã hoàn thành"}
                      ,{userId : 7, startDate : '22/05/2020', completeDate : '02/06/2020', location : "Đại học Xây Dựng", description : "Hàn mối nối", column : "L1M1", status : "Đã hoàn thành"}
                      ,{userId : 8, startDate : '22/05/2020', completeDate : '02/06/2020', location : "Đại học Xây Dựng", description : "Hàn mối nối", column : "N6F7", status : "Đã hoàn thành"}
                      ,{userId : 9, startDate : '25/05/2020', completeDate : '', location : "Đại học Xây Dựng", description : "Kiểm tra cột", column : "L1M1", status : "Đang sửa chữa"}
                      ,{userId : 1, startDate : '22/05/2020', completeDate : '01/06/2020', location : "Đại học Bách Khoa", description : "Kiểm tra cột", column : "L1M1", status : "Đã hoàn thành"}
                      ,{userId : 10, startDate : '25/05/2020', completeDate : '07/06/2020', location : "Đại học Bách Khoa", description : "Thay biến áp", column : "Q3T2", status : "Đã hoàn thành"}
                      ,{userId : 2, startDate : '22/05/2020', completeDate : '04/06/2020', location : "Đại học Xây Dựng", description : "Hàn mối nối", column : "Q3T2", status : "Đã hoàn thành"}
                      ,{userId : 5, startDate : '22/05/2020', completeDate : '', location : "Đại học Xây Dựng", description : "Hàn mối nối", column : "Q3T2", status : "Đang kiểm tra"}];
    this.dataTable = this.dataSource;
  }

  ngAfterViewInit() {

  }

  applyFilter() {
      
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
