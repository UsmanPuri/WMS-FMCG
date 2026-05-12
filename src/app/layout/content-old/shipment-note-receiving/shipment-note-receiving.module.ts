import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {ShipmentNoteService} from "./services/shipment-note-receiving.service";
import {ShipmentNoteReceivingFormComponent} from "./components/shipment-note-receiving-form.component";
import {ShipmentNoteReceivingListComponent} from "./components/shipment-note-receiving-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from 'ngb-modal';
import { ShipmentNoteReceivingEditComponent } from "./components/shipment-note-receiving-edit.component";
import { NgxPrintModule } from "ngx-print";
import { NgxUiLoaderModule } from  'ngx-ui-loader';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ShipmentNoteReceivingListComponent,
      }, 
      {
        path: "create",
        component: ShipmentNoteReceivingFormComponent,
      },
      {
        path: "edit/:Id",
        component: ShipmentNoteReceivingEditComponent,
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
    ShipmentNoteReceivingFormComponent, ShipmentNoteReceivingListComponent,ShipmentNoteReceivingEditComponent
  ],
  providers: [
    ShipmentNoteService
  ],
  entryComponents: [
    
  ]
} )
export class ShipmentNoteReceivingModule {
}
