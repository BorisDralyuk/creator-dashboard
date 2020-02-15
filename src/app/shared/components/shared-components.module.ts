import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { MaterialModule } from '../material/material.module';

import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AbTestMenuComponent } from './ab-test-menu/ab-test-menu.component';
import { DragAndDropListComponent } from './drag-and-drop-list/drag-and-drop-list.component';
import { FrameComponent } from './frame/frame.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SidenavComponent } from './app-layout/menu/sidenav/sidenav.component';
import { LogoComponent } from './app-layout/menu/logo/logo.component';
import { MenuComponent } from './app-layout/menu/menu.component';



@NgModule({
  declarations: [
    AppLayoutComponent,
    SidenavComponent,
    LogoComponent,
    MenuComponent,
    SelectComponent,
    ToolbarComponent,
    AbTestMenuComponent,
    DragAndDropListComponent,
    FrameComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    AppLayoutComponent,
    SidenavComponent,
    LogoComponent,
    MenuComponent,
    SelectComponent,
    ToolbarComponent,
    AbTestMenuComponent,
    DragAndDropListComponent,
    FrameComponent,
    MaterialModule
  ]
})
export class SharedComponentsModule { }
