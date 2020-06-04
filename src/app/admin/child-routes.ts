export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'home', text: 'Tổng quan' }
  },
  {
    path: 'drone',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
    data: { icon: 'flight', text: 'Quản lý drone' }
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then(m => m.UserModule),
    data: { icon: 'account_box', text: 'Quản lý người dùng' }
  },
  {
    path: 'assignment',
    loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
    data: { icon: 'assignment', text: 'Quản lý công việc' }
  },
  {
    path: 'image',
    loadChildren: () =>
      import('./mat-grid/mat-grid.module').then(m => m.MatGridModule),
    data: { icon: 'image', text: 'Quản lý ảnh chụp' }
  }//,
  // {
  //   path: 'material',
  //   loadChildren: () =>
  //     import('./mat-components/mat-components.module').then(
  //       m => m.MatComponentsModule
  //     ),
  //   data: { icon: 'code', text: 'Material' }
  // },
  // {
  //   path: 'animations',
  //   loadChildren: () =>
  //     import('./animations/animations.module').then(m => m.AnimationsModule),
  //   data: { icon: 'perm_media', text: 'Animations' }
  // },
  // {
  //   path: 'google-maps',
  //   loadChildren: () =>
  //     import('./google-map-demo/google-map-demo.module').then(
  //       m => m.GoogleMapDemoModule
  //     ),
  //   data: { icon: 'place', text: 'Google Maps' }
  // }
];
