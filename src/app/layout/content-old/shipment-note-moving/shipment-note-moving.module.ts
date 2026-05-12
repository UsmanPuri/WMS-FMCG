import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {ShipmentNoteService} from "./services/shipment-note-moving.service";
import {ShipmentNoteMovingListComponent} from "./components/shipment-note-moving-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from 'ngb-modal';
import { ShipmentNoteMovingEditComponent } from "./components/shipment-note-moving-edit.component";
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import { NgxPrintModule } from "ngx-print";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ShipmentNoteMovingListComponent,
      }, 
      // {
      //   path: "create",
      //   component: ShipmentNoteReceivingFormComponent,
      // },
      {
        path: "edit/:Id",
        component: ShipmentNoteMovingEditComponent,
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
    NgxUiLoaderModule,
    NgxPrintModule
  ],
  declarations: [
     ShipmentNoteMovingListComponent,ShipmentNoteMovingEditComponent
  ],
  providers: [
    ShipmentNoteService
  ],
  entryComponents: [
    
  ]
} )
export class ShipmentNoteMovingModule {
}
