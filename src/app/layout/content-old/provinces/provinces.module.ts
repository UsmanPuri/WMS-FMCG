import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {ProvinceService} from "./services/province.service";
import {ProvinceFormComponent} from "./components/province-form.component";
import {ProvinceEditFormComponent} from "./components/province-edit-form.component";
import {ProvinceListComponent} from "./components/province-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxUiLoaderModule } from "ngx-ui-loader";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ProvinceListComponent,
      }, 
      {
        path: "create",
        component: ProvinceFormComponent,
      },{
        path: "edit/:Id",
        component: ProvinceEditFormComponent,
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
    ProvinceListComponent, ProvinceFormComponent, ProvinceEditFormComponent
  ],
  providers: [
    ProvinceService,
    ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class ProvincesModule {
}
