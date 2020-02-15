import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { AppLayoutComponent } from './shared/components/app-layout/app-layout.component';
// import { SidenavComponent } from './shared/components/menu/sidenav/sidenav.component';
// import { LogoComponent } from './shared/components/menu/logo/logo.component';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { DashboardLayoutComponent } from './pages/dashboard-layout/dashboard-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    //DashboardLayoutComponent,
   // AppLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
