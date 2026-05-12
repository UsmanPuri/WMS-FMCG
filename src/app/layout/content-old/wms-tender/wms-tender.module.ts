import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {WMSTenderService} from "./services/wms-tender.service";
import {WMSTenderFormComponent} from "./components/wms-tender-form.component";
import {WMSTenderEditFormComponent} from "./components/wms-tender-edit-form.component";
import {WMSTenderListComponent} from "./components/wms-tender-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: WMSTenderListComponent,
      }, 
      {
        path: "create",
        component: WMSTenderFormComponent,
      },{
        path: "edit/:Id",
        component: WMSTenderEditFormComponent,
      }
      ,{
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
    ReactiveFormsModule,UiSwitchModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    WMSTenderListComponent, WMSTenderFormComponent, WMSTenderEditFormComponent
  ],
  providers: [
    WMSTenderService
  ],
  entryComponents: [
    
  ]
} )
export class WMSTenderModule {
}
