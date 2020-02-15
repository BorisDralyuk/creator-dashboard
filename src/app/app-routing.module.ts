import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './shared/components/app-layout/app-layout.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full'},
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard', children: 
    [
      { path: 'dashboard', redirectTo: 'ab-test', pathMatch: 'full' },
      {
        path: 'ab-test',
        data: { title: 'A/B test' },
        loadChildren: () => import('./pages/ab-test/ab-test.module').then(m => m.AbTestModule)
      },
      //  {
      //     path: 'auth',
      //     loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      //   },
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
