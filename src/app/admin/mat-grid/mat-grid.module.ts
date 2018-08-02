import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatGridRoutingModule } from './mat-grid-routing.module';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [
    CommonModule,
    MatGridRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [GridComponent]
})
export class MatGridModule {}
