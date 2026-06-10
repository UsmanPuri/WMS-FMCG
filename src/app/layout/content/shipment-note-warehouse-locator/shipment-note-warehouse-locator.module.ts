import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {ShipmentNoteLocatorService} from "./services/shipment-note-warehouse-locator.service";
import {ShipmentNoteWarehouseLocatorListComponent} from "./components/shipment-note-warehouse-locator-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from 'ngb-modal';
import { ShipmentNoteWarehouseLocatorEditComponent } from "./components/shipment-note-warehouse-locator-edit.component";
import { NgxPrintModule } from "ngx-print";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import { NgxBarcodeModule } from 'ngx-barcode';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ShipmentNoteWarehouseLocatorListComponent,
      }, 
      // {
      //   path: "create",
      //   component: ShipmentNoteReceivingFormComponent,
      // },
      {
        path: "edit/:Id",
        component: ShipmentNoteWarehouseLocatorEditComponent,
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
    NgxBarcodeModule,
    NgxUiLoaderModule
  ],
  declarations: [
     ShipmentNoteWarehouseLocatorListComponent,ShipmentNoteWarehouseLocatorEditComponent
  ],
  providers: [
    ShipmentNoteLocatorService,
    ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class ShipmentNoteWarehouseLocatorModule {
}
