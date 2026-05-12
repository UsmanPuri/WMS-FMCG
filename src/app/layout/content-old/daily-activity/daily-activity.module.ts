import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';

import { DailyActivityService } from './service/Daily-Activity';
import { DailyActivityComponent } from './components/Daily-Activity'; 
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
        component: DailyActivityComponent,
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
    DailyActivityComponent
  ],
  providers: [
    DailyActivityService
  ],
  entryComponents: [
    
  ]
} )
export class DailyActivityModule { }
