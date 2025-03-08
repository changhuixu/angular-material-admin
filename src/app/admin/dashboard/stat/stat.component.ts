import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-stat',
  standalone:false,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  @Input() bgClass: string;
  @Input() icon: string;
  @Input() count: number;
  @Input() label: string;
  @Input() data: number;
  constructor() {}

  ngOnInit() {}
}
