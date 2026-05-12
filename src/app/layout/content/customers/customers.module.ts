import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {CustomerService} from "./services/customer.service";
import {CustomerFormComponent} from "./components/customer-form.component";
import {CustomerListComponent} from "./components/customer-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerEditFormComponent } from "./components/customer-edit-form.component";
import { NgxMaskModule } from 'ngx-mask';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxPrintModule } from "ngx-print";
import { ModalModule } from 'ngb-modal';
import { NgxUiLoaderModule } from  'ngx-ui-loader';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: CustomerListComponent,
      }, 
      {
        path: "create",
        component: CustomerFormComponent,
      },{
        path: "edit/:Id",
        component: CustomerEditFormComponent,
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
    NgxMaskModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,UiSwitchModule,
    NgxPrintModule,
    ModalModule,
    NgxUiLoaderModule
  ],
  declarations: [
    CustomerListComponent, CustomerFormComponent, CustomerEditFormComponent
  ],
  providers: [
    CustomerService,
    ExporterService
  ],
  entryComponents: [
    CustomerFormComponent
  ]
} )
export class CustomersModule {
}
