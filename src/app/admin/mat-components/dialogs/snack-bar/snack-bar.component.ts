import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  template: `
<button mat-button (click)="openSnackBar()" aria-label="Show an example snack-bar">
  Pizza party
</button>
  `
})
export class SnackBarComponent {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 1000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      data: 'Hey'
    });
  }
}

@Component({
  template: `
<span style="color: hotpink;">
  {{data}} Pizza party!!! 🍕
</span>
  `
})
export class PizzaPartyComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}
