import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {WarehouseService} from "./services/warehouse.service";
import {WarehouseFormComponent} from "./components/warehouse-form.component";
import {WarehouseListComponent} from "./components/warehouse-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WarehouseEditFormComponent } from "./components/warehouse-edit-form.component";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxUiLoaderModule } from "ngx-ui-loader";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: WarehouseListComponent,
      }, 
      {
        path: "create",
        component: WarehouseFormComponent,
      },{
        path: "edit/:Id",
        component: WarehouseEditFormComponent,
      },{
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
    NgxUiLoaderModule
  ],
  declarations: [
    WarehouseListComponent, WarehouseFormComponent,WarehouseEditFormComponent
  ],
  providers: [
    WarehouseService,
    ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class WarehousesModule {
}
