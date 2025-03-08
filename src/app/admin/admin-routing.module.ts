import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { childRoutes } from './child-routes';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      ...childRoutes,
      {
        path: '',
        pathMatch:'full',
        redirectTo: 'dashboard',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
