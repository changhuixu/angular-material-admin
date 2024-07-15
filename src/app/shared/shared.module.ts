import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterTabs } from './router-tab/router-tabs.directive';
import { RouterTab } from './router-tab/router-tab.directive';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  imports: [CommonModule, RouterModule, FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatExpansionModule,
  ],
  declarations: [PageNotFoundComponent, RouterTabs, RouterTab],
  exports: [
    CommonModule,
    FlexLayoutModule,
    PageNotFoundComponent,
    RouterTabs,
    RouterTab,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatExpansionModule,
  ]
})
export class SharedModule {}
