import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {GodownRowService} from "./services/godown-row.service";
import {GodownRowFormComponent} from "./components/godown-row-form.component";
import {GodownRowListComponent} from "./components/godown-row-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { GodownRowEditFormComponent } from "./components/godwom-row-edit-form.component";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxUiLoaderModule } from "ngx-ui-loader";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: GodownRowListComponent,
      }, 
      {
        path: "create",
        component: GodownRowFormComponent,
      },
      {
        path: "edit/:Id",
        component: GodownRowEditFormComponent,
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
    GodownRowFormComponent, GodownRowListComponent,GodownRowEditFormComponent
  ],
  providers: [
    GodownRowService,
    ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class GodownRowModule {
}
