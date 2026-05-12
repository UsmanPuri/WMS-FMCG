import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';

import { DispatchActivityService } from './service/Dispatch-Activity';
import { DispatchActivityComponent } from './components/Dispatch-Activity'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from 'ngb-modal';
import { NgxUiLoaderModule } from "ngx-ui-loader";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: DispatchActivityComponent,
      }, 
      {
        path: "**",
        redirectTo: "",
      }
    ]
  }
];

@NgModule( {
  imports: [
    ModalModule,
    RouterModule.forChild( routes ),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,UiSwitchModule,
    NgMultiSelectDropDownModule,
    NgxUiLoaderModule
  ],
  declarations: [
    DispatchActivityComponent
  ],
  providers: [
    DispatchActivityService
  ],
  entryComponents: [
    
  ]
} )
export class DispatchActivityModule { }
