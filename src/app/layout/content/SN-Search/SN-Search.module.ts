import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {SNSearchService} from "./services/SN-Search";
import {SNSearchComponent} from "./components/SN-Search";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from 'ngb-modal';
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import { NgxPrintModule } from "ngx-print";
import { ExporterService } from "src/app/helpers/services/excel-file.service";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: SNSearchComponent,
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
    SNSearchComponent
  ],
  providers: [
    ExporterService,
    SNSearchService
  ],
  entryComponents: [
    
  ]
} )
export class SNSearchModule {
}
