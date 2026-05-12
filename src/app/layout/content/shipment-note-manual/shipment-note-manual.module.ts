import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule, DatePipe} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {ShipmentNoteService} from "./services/shipment-note-manual.service";
import {ShipmentNoteManualFormComponent} from "./components/shipment-note-manual-form.component";
import {ShipmentNoteManualListComponent} from "./components/shipment-note-manual-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from 'ngb-modal';
import { ShipmentNoteManualEditFormComponent } from "./components/shipment-note-manual-edit-form.component";
import { ShipmentNoteManualDetailComponent } from "./components/shipment-note-manual-detail.component";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxPrintModule } from "ngx-print";
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { NgxUiLoaderModule } from "ngx-ui-loader";


const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ShipmentNoteManualListComponent,
      }, 
      {
        path: "create",
        component: ShipmentNoteManualFormComponent,
      },
      {
        path: "edit/:Id",
        component: ShipmentNoteManualEditFormComponent,
      },
      {
        path: "detail/:Id",
        component: ShipmentNoteManualDetailComponent,
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
    ShipmentNoteManualFormComponent, ShipmentNoteManualListComponent,ShipmentNoteManualEditFormComponent
    ,ShipmentNoteManualDetailComponent
  ],
  providers: [
    ShipmentNoteService,
    ExporterService,
    DatePipe
  ],
  entryComponents: [
    
  ]
} )
export class ShipmentNoteManualModule {
}
