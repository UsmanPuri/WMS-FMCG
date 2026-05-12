import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {ChangePasswordService} from "./services/Change-Password";
import {ChangePasswordComponent} from "./components/Change-Password";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from 'ngb-modal';
import { NgxUiLoaderModule } from  'ngx-ui-loader';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ChangePasswordComponent,
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
    ChangePasswordComponent
  ],
  providers: [
    ChangePasswordService
  ],
  entryComponents: [
    
  ]
} )
export class ChangeuserPasswordModule {
}
