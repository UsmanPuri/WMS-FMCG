import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {OpeningStockService} from "./services/opening-stock.service";
import {OpeningStockComponent} from "./components/opening-stock";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from 'ngb-modal';
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { NgxPrintModule } from "ngx-print";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: OpeningStockComponent,
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
    OpeningStockComponent
  ],
  providers: [
    OpeningStockService,ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class OpeningStockModule {
}
