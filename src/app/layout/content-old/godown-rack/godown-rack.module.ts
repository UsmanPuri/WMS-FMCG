import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {GodownRackService} from "./services/godown-rack.service";
import {GodownRackFormComponent} from "./components/godown-rack-form.component";
import {GodownRackListComponent} from "./components/godown-rack-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { GodownRackEditFormComponent } from "./components/godown-rack-edit-form.component";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxUiLoaderModule } from "ngx-ui-loader";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: GodownRackListComponent,
      }, 
      {
        path: "create",
        component: GodownRackFormComponent,
      },
      {
        path: "edit/:Id",
        component: GodownRackEditFormComponent,
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
    GodownRackFormComponent, GodownRackListComponent,GodownRackEditFormComponent
  ],
  providers: [
    GodownRackService, ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class GodownRackModule {
}
