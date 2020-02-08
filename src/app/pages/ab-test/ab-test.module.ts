import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbTestLayoutComponent } from './ab-test-layout/ab-test-layout.component';
import { AbTestEditorComponent } from './ab-test-editor/ab-test-editor.component';
import { AbTestRoutingModule } from './ab-test-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [
    AbTestLayoutComponent, 
    AbTestEditorComponent
  ],
  imports: [
    CommonModule,
    AbTestRoutingModule,
    MaterialModule
  ]
})
export class AbTestModule { }
