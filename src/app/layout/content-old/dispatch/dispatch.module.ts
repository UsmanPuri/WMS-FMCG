import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {DispatchService} from "./services/dispatch.service";
import {DispatchFormComponent} from "./components/dispatch-form.component";
import {DispatchListComponent} from "./components/dispatch-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from "ngb-modal";
import {NgxPrintModule} from 'ngx-print';
import { NgxUiLoaderModule } from "ngx-ui-loader";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: DispatchListComponent,
      }, 
      {
        path: "create",
        component: DispatchFormComponent,
      },{
        path: "**",
        redirectTo: "",
      }
    ]
  }
];

@NgModule( {
  imports: [
    ModalModule,
    NgxPrintModule,
    RouterModule.forChild( routes ),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,UiSwitchModule,
    NgMultiSelectDropDownModule,
    NgxUiLoaderModule
  ],
  declarations: [
    DispatchFormComponent, DispatchListComponent
  ],
  providers: [
    DispatchService
  ],
  entryComponents: [
    
  ]
} )
export class DispatcModule {
}
