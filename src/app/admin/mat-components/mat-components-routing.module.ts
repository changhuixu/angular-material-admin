import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { SteppersComponent } from './steppers/steppers.component';
import { PanelsComponent } from './panels/panels.component';
import { OthersComponent } from './others/others.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'buttons'
      },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: 'indicators',
        component: IndicatorsComponent
      },
      {
        path: 'dialogs',
        component: DialogsComponent
      },
      {
        path: 'steppers',
        component: SteppersComponent
      },
      {
        path: 'panels',
        component: PanelsComponent
      },
      {
        path: 'others',
        component: OthersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatComponentsRoutingModule {}
