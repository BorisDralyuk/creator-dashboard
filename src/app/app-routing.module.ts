import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './shared/app-layout/app-layout.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full'},
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard', component: AppLayoutComponent, children: [
    { path: 'dashboard', redirectTo: 'ab-test', pathMatch: 'full' },
    {
      path: 'ab-test',
      loadChildren: () => import('./pages/ab-test/ab-test.module').then(m => m.AbTestModule)
    },
    //  {
    //     path: 'auth',
    //     loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
    //   },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
