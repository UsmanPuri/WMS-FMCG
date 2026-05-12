import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {ShipmentNoteService} from "./services/shipment-note.service";
import {ShipmentNoteFormComponent} from "./components/shipment-note-form.component";
import {ShipmentNoteListComponent} from "./components/shipment-note-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from 'ngb-modal';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ShipmentNoteListComponent,
      }, 
      {
        path: "create",
        component: ShipmentNoteFormComponent,
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
    RouterModule.forChild( routes ),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,UiSwitchModule,
    NgMultiSelectDropDownModule
  ],
  declarations: [
    ShipmentNoteFormComponent, ShipmentNoteListComponent
  ],
  providers: [
    ShipmentNoteService
  ],
  entryComponents: [
    
  ]
} )
export class ShipmentNoteModule {
}
