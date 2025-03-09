import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone:false,
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  constructor() { }

  ngOnInit() {
  }

}
