import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbTestEditorComponent } from './ab-test-editor/ab-test-editor.component';
import { AppLayoutComponent } from 'src/app/shared/components/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent, children: [
      { path: '', redirectTo: 'editor', pathMatch: 'full'},
      {path: 'editor', 
        data: { title: 'editor'},
      component: AbTestEditorComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbTestRoutingModule { }
