import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SliderComponent } from './slider/slider.component';
import { InputsComponent } from './inputs/inputs.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'autocomplete'
      },
      {
        path: 'autocomplete',
        component: AutoCompleteComponent
      },
      {
        path: 'datepicker',
        component: DatepickerComponent
      },
      {
        path: 'checkbox',
        component: CheckboxComponent
      },
      {
        path: 'slider',
        component: SliderComponent
      },
      {
        path: 'inputs',
        component: InputsComponent
      },
      {
        path: 'other',
        component: OtherComponent
      },
      {
        path: '**',
        redirectTo: 'autocomplete'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
