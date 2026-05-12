import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {ShipmentNoteService} from "./services/shipment-note-moving-warehouse.service";
import {ShipmentNoteMovingWarehouseListComponent} from "./components/shipment-note-moving-warehouse-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from 'ngb-modal';
import { ShipmentNoteMovingWarehouseEditComponent } from "./components/shipment-note-moving-warehouse-edit.component";
import { NgxPrintModule } from "ngx-print";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxUiLoaderModule } from  'ngx-ui-loader';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ShipmentNoteMovingWarehouseListComponent,
      }, 
      // {
      //   path: "create",
      //   component: ShipmentNoteReceivingFormComponent,
      // },
      {
        path: "edit/:Id",
        component: ShipmentNoteMovingWarehouseEditComponent,
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
     ShipmentNoteMovingWarehouseListComponent,ShipmentNoteMovingWarehouseEditComponent
  ],
  providers: [
    ShipmentNoteService,
    ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class ShipmentNoteMovingWarehouseModule {
}
