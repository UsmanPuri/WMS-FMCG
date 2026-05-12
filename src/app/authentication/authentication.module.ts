import {NgModule} from "@angular/core";

import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationService } from "./login/authentication-service";
import { LocalStorageService } from "../helpers/services/local-storage.service";
import { ErrorHandlerService } from "../helpers/services/error-handler.service";
import { LoginComponent } from "./login/login.component";
import { RouterModule } from "@angular/router";
import {  FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignupComponent } from './signup/signup.component';

const routes = [
  {
    path: "auth/login",
    component: LoginComponent
  },

  {
    path: "signup",
    component: SignupComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    AuthenticationService, LocalStorageService, ErrorHandlerService
  ]
})

export class AuthenticationModule {
}
