import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { AppLayoutComponent } from './shared/app-layout/app-layout.component';
import { AbTestModule } from './pages/ab-test/ab-test.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SidenavComponent } from './shared/app-layout/sidenav/sidenav.component';
import { LogoComponent } from './shared/app-layout/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    SidenavComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
