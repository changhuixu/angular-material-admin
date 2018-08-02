import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [CommonModule, RouterModule, FlexLayoutModule],
  declarations: [PageNotFoundComponent],
  exports: [CommonModule, FlexLayoutModule, PageNotFoundComponent]
})
export class SharedModule {}
