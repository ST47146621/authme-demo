import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'page-a',
    loadChildren: () => import('./page-a/page-a.module').then(m => m.PageAModule)
  },
  {
    path: 'page-b',
    loadChildren: () => import('./page-b/page-b.module').then(m => m.PageBModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
