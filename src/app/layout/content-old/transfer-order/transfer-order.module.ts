import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { UiSwitchModule } from "ngx-toggle-switch";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { TransferOrderFormComponent } from "./components/transfer-order-form.component";
import { TransferOrderListComponent } from "./components/transfer-order-list.component";
import { TransferOrderService } from "./services/transfer-order.service";

const routes: Routes = [
    {
      path: "",
      children: [
        {
          path: "",
          component: TransferOrderListComponent,
        }, 
        {
          path: "create",
          component: TransferOrderFormComponent,
        },
        // {
        //   path: "edit/:Id",
        //   component: PickupOrderEditComponent,
        // },
        // {
        //   path: "detail/:Id",
        //   component: PickupOrderDetailComponent,
        // },
        {
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
      NgMultiSelectDropDownModule
    ],
    declarations: [
      TransferOrderListComponent, TransferOrderFormComponent
    ],
    providers: [
      TransferOrderService,
      ExporterService
    ],
    entryComponents: [
      
    ]
  } )
  export class TransferOrderModule {
  }