import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {GodwomService} from "./services/godwom.service";
import {GodwomFormComponent} from "./components/godwom-form.component";
import {GodwomListComponent} from "./components/godwom-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { GodwomEditFormComponent } from "./components/godwom-edit-form.component";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxUiLoaderModule } from "ngx-ui-loader";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: GodwomListComponent,
      }, 
      {
        path: "create",
        component: GodwomFormComponent,
      },
      {
        path: "edit/:Id",
        component: GodwomEditFormComponent,
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
    NgxUiLoaderModule
  ],
  declarations: [
    GodwomFormComponent, GodwomListComponent,GodwomEditFormComponent
  ],
  providers: [
    GodwomService,
    ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class GodwomsModule {
}
