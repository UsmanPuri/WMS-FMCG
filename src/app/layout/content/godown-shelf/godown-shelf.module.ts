import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {GodownShelfService} from "./services/godown-shelf.service";
import {GodownShelfFormComponent} from "./components/godown-shelf-form.component";
import {GodownShelfListComponent} from "./components/godown-shelf-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { GodownShelfEditFormComponent } from "./components/godwom-shelf-edit-form.component";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { ModalModule } from "ngb-modal";
import { NgxPrintModule } from "ngx-print";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { NgxBarcodeModule } from 'ngx-barcode';
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: GodownShelfListComponent,
      }, 
      {
        path: "create",
        component: GodownShelfFormComponent,
      },
      {
        path: "edit/:Id",
        component: GodownShelfEditFormComponent,
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
    RouterModule.forChild( routes ),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,UiSwitchModule,
    NgMultiSelectDropDownModule,
    ModalModule,
    NgxPrintModule,
    NgxUiLoaderModule,
    NgxBarcodeModule
  ],
  declarations: [
    GodownShelfFormComponent, GodownShelfListComponent,GodownShelfEditFormComponent
  ],
  providers: [
    GodownShelfService,
    ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class GodownShelfModule {
}
