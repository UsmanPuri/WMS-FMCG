import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {WMSServiceService} from "./services/wms-service.service";
import {WMSServiceFormComponent} from "./components/wms-service-form.component";
import {WMSServiceEditFormComponent} from "./components/wms-service-edit-form.component";
import {WMSServiceDetailFormComponent} from "./components/wms-service-detail-form.component";
import {WMSServiceListComponent} from "./components/wms-service-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgxPrintModule} from 'ngx-print';
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: WMSServiceListComponent,
      }, 
      {
        path: "create",
        component: WMSServiceFormComponent,
      },{
        path: "edit/:Id",
        component: WMSServiceEditFormComponent,
      },{
        path: "detail/:Id",
        component: WMSServiceDetailFormComponent,
      },{
        path: "**",
        redirectTo: "",
      }
    ]
  }
];

@NgModule( {
  imports: [
    RouterModule.forChild( routes ),
    CommonModule,
    FormsModule,
    NgxPrintModule,
    ReactiveFormsModule,UiSwitchModule
  ],
  declarations: [
    WMSServiceListComponent, WMSServiceFormComponent, WMSServiceDetailFormComponent, WMSServiceEditFormComponent
  ],
  providers: [
    WMSServiceService
  ],
  entryComponents: [
    
  ]
} )
export class WMSServicesModule {
}
