import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-selected-value',
  templateUrl: './selected-value.component.html',
  styleUrls: ['./selected-value.component.scss']
})
export class SelectedValueComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  constructor() { }

  ngOnInit() {
  }

}
