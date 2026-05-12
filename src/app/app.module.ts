import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, APP_INITIALIZER} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LSelect2Module } from 'ngx-select2';
import {NgxPrintModule} from 'ngx-print';
import { BaseComponent } from './helpers/components/base.component';
import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';

import {AuthenticationModule} from "./authentication/authentication.module";
import { AuthInterceptor } from './helpers/interceptors/AuthInterceptor';
import { AppInitService } from './helpers/services/app-init.service';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormComponent } from './form/form.component';



const appRoutes: Routes = [
  {
    path: "", loadChildren: "./layout/layout.module#LayoutModule", pathMatch: "full"
  }, {
    path: "auth",
    loadChildren: "./authentication/authentication.module#AuthenticationModule",
    pathMatch: "full"
  },
  {
    path: "**", redirectTo: "error", pathMatch: "full"
  },
];

export function init_app(appLoadService: AppInitService) {
  return () => appLoadService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserAnimationsModule,
    LayoutModule,
    AuthenticationModule,
    LSelect2Module,
    GoogleChartsModule,
    NgxPrintModule,
    FormsModule
  ],
  exports: [
  ],
  entryComponents: [
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
}
