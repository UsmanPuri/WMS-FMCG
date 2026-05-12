import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {StockMovementService} from "./services/stock-movement.service";
import {StockMovementFormComponent} from "./components/stock-movement-form.component";
import { StockMovementListComponent } from "./components/stock-movement-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { NgxPrintModule } from "ngx-print";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: StockMovementListComponent,
     }, 
      {
        path: "create",
        component: StockMovementFormComponent,
      },
      // //   path: "edit/:Id",
      // //   component: UnitEditFormComponent,
      // // },
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
    NgxUiLoaderModule,
    NgxPrintModule
  ],
  declarations: [
    StockMovementListComponent,
    StockMovementFormComponent
    //, UnitFormComponent, UnitEditFormComponent
  ],
  providers: [
    StockMovementService,
    ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class StockMovementModule {
}
