import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {UnitService} from "./services/unit.service";
import {UnitFormComponent} from "./components/unit-form.component";
import {UnitEditFormComponent} from "./components/unit-edit-form.component";
import {UnitListComponent} from "./components/unit-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxUiLoaderModule } from "ngx-ui-loader";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: UnitListComponent,
      }, 
      {
        path: "create",
        component: UnitFormComponent,
      },{
        path: "edit/:Id",
        component: UnitEditFormComponent,
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
    UnitListComponent, UnitFormComponent, UnitEditFormComponent
  ],
  providers: [
    UnitService,
    ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class UnitsModule {
}
