import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {PickupOrderService} from "./services/pickup-order.service";
import {PickupOrderFormComponent} from "./components/pickup-order-form.component";
import {PickupOrderListComponent} from "./components/pickup-order-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PickupOrderDetailComponent } from "./components/pickup-order-detail.component";
import { PickupOrderEditComponent } from "./components/pickup-order-edit-form.component";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { ModalModule } from 'ngb-modal';
import { NgxPrintModule } from 'ngx-print';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: PickupOrderListComponent,
      }, 
      {
        path: "create",
        component: PickupOrderFormComponent,
      },
      {
        path: "edit/:Id",
        component: PickupOrderEditComponent,
      },
      {
        path: "detail/:Id",
        component: PickupOrderDetailComponent,
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
    NgxPrintModule,
    NgxUiLoaderModule
  ],
  declarations: [
    PickupOrderFormComponent, PickupOrderListComponent,
    PickupOrderDetailComponent,PickupOrderEditComponent
  ],
  providers: [
    PickupOrderService,
    ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class PickupOrderModule {
}
