import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbTestEditorComponent } from './ab-test-editor/ab-test-editor.component';
import { AbTestRoutingModule } from './ab-test-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { AbTestMenuControlComponent } from './controls/ab-test-menu-control/ab-test-menu-control.component';



@NgModule({
  declarations: [
    AbTestEditorComponent, 
    AbTestMenuControlComponent
  ],
  imports: [
    CommonModule,
    AbTestRoutingModule,
    SharedComponentsModule
  ]
})
export class AbTestModule { }
