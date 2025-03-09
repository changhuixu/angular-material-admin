import { Directive } from '@angular/core';
import { MatTab } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';

@Directive({
  selector: 'mat-tab[routerLink]',
  standalone:false
})
export class RouterTab {
  constructor(public tab: MatTab, public link: RouterLink) {}
}
