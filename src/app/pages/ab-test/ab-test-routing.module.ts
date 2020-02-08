import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbTestLayoutComponent } from './ab-test-layout/ab-test-layout.component';
import { AbTestEditorComponent } from './ab-test-editor/ab-test-editor.component';




const routes: Routes = [
  {
    path: '', component: AbTestLayoutComponent, children: [
      { path: '', redirectTo: 'editor', pathMatch: 'full'},
      {path: 'editor', component: AbTestEditorComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbTestRoutingModule { }
