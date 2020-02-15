import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthLayoutComponent, 
    LoginComponent, 
    ForgotComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
