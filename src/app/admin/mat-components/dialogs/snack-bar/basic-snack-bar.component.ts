import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-basic-snack-bar',
  template: `
<mat-form-field>
  <input matInput value="Disco party!" placeholder="Message" #message>
</mat-form-field>

<mat-form-field>
  <input matInput value="Dance" placeholder="Action" #action>
</mat-form-field>

<button mat-button (click)="openSnackBar(message.value, action.value)">Show snack-bar</button>
  `
})
export class BasicSnackBarComponent {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    let snackBarRef = this.snackBar.open(message, action, {
      duration: 2000
    });
    snackBarRef.onAction().subscribe(() => {
      console.log('The snack-bar action was triggered!');
    });
  }
}
