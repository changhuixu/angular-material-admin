import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { UserAddDialog } from './user-add/userAdd.component';


export interface UserData {
    id : number;
    name : string;
    age : number;
    gender : string;
    department : string;
    occupation : string;
}

@Component({
  selector: 'user-tables',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit, AfterViewInit {
  displayedColumns = ['select', 'id', 'name', 'age', 'gender', 'department', 'occupation'];
  dataSource: Array<UserData>;
  dataTable : Array<UserData>
  selection: SelectionModel<UserData>;
  userSearch : UserData;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(UserAddDialog, {
      width: '540px',
      height: '360px',
      data : {id : "", name : "", age : "", gender: "", department : "", occupation : ""}
    });

    dialogRef.afterClosed().subscribe(result => {
        result.id = this.dataSource[this.dataSource.length - 1].id + 1;
        this.dataSource.push(result);
        this.applyFilter();
    });
  }

  ngOnInit() {
    this.selection = new SelectionModel<UserData>(true, []);
    this.dataSource = [{id : 1, name : 'Nguyễn Văn A', age : 25, gender : "Nam", department : "Hai Bà Trưng", occupation : "Quản trị viên"}
                      ,{id : 2, name : 'Hoàng Thị B', age : 26, gender : "Nữ", department : "Ba Đình", occupation : "Quản trị viên"}
                      ,{id : 3, name : 'Nguyễn Văn C', age : 25, gender : "Nam", department : "Hai Bà Trưng", occupation : "Thợ điện"}
                      ,{id : 4, name : 'Trần Văn D', age : 34, gender : "Nam", department : "Hai Bà Trưng", occupation : "Thợ điện"}
                      ,{id : 5, name : 'Nguyễn Thị E', gender : "Nữ", age : 30, department : "Ba Đình", occupation : "Thợ điện"}
                      ,{id : 6, name : 'Lê Văn G', age : 37, gender : "Nam", department : "Ba Đình", occupation : "Phân tích viên"}
                      ,{id : 7, name : 'Lê Thị H', age : 40, gender : "Nữ", department : "Hai Bà Trưng", occupation : "Thợ điện"}
                      ,{id : 8, name : 'Bùi Văn P', age : 41, gender : "Nam", department : "Ba Đình", occupation : "Phân tích viên"}
                      ,{id : 9, name : 'Võ Văn Z', age : 45, gender : "Nam", department : "Hai Bà Trưng", occupation : "Phân tích viên"}
                      ,{id : 10, name : 'Trần Xuân T', age : 21,  gender : "Nam",department : "Ba Đình", occupation : "Thợ điện"}
                      ,{id : 11, name : 'Chu Đình N', age : 23, gender : "Nam", department : "Hai Bà Trưng", occupation : "Phân tích viên"}
                      ,{id : 12, name : 'Phạm Văn M', age : 31, gender : "Nam", department : "Ba Đình", occupation : "Thợ điện"}
                      ,{id : 13, name : 'Lê Văn X', age : 27, gender : "Nam", department : "Hai Bà Trưng", occupation : "Thợ điện"}
                      ,{id : 14, name : 'Nguyễn Thị Y', age : 26, gender : "Nữ", department : "Ba Đình", occupation : "Thợ điện"}
                      ,{id : 15, name : 'Nguyễn Văn Z', age : 22, gender : "Nam", department : "Hai Bà Trưng", occupation : "Thợ điện"}
                      ,{id : 16, name : 'Cao Thị E', gender : "Nữ", age : 28, department : "Hai Bà Trưng", occupation : "Quản trị viên"}];
    this.dataTable = this.dataSource;
    this.userSearch = {id : 0, name : "", age : 0, gender : "", department : "", occupation : ""};
  }

  ngAfterViewInit() {
    
  }

  applyFilter() {
    console.log(this.userSearch);
    this.dataTable = [];
    for (var row of this.dataSource) {
        let isMatched : boolean = true;
        if (!row.name.includes(this.userSearch.name) && this.userSearch.name != "") {
            isMatched = false;
        }
        if (!row.department.includes(this.userSearch.department) && this.userSearch.department != "") {
          isMatched = false;
        }
        if (!row.occupation.includes(this.userSearch.occupation) && this.userSearch.occupation != "") {
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
