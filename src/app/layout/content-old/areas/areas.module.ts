import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {AreaService} from "./services/area.service";
import {AreaFormComponent} from "./components/area-form.component";
import {AreaListComponent} from "./components/area-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxUiLoaderModule } from "ngx-ui-loader";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: AreaListComponent,
      }, 
      {
        path: "create",
        component: AreaFormComponent,
      },
      // {
      //   path: "edit/:Id",
      //   component: CityEditFormComponent,
      // },
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
    NgMultiSelectDropDownModule,
    ReactiveFormsModule,UiSwitchModule,
    NgxUiLoaderModule
  ],
  declarations: [
    AreaListComponent, AreaFormComponent
    //, CityEditFormComponent
  ],
  providers: [
    AreaService,
    ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class AreasModule {
}
