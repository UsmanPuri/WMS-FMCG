import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {ParkingStagesService} from "./services/parking-stages.service";
import {ParkingStagesFormComponent} from "./components/parking-stages-form.component";
import {ParkingStagesListComponent} from "./components/parking-stages-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParkingStagesEditFormComponent } from "./components/parking-stages-edit-form.component";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxUiLoaderModule } from "ngx-ui-loader";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ParkingStagesListComponent,
      }, 
      {
        path: "create",
        component: ParkingStagesFormComponent,
      },
      {
        path: "edit/:Id",
        component: ParkingStagesEditFormComponent,
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
    NgxUiLoaderModule
  ],
  declarations: [
    ParkingStagesListComponent, ParkingStagesFormComponent,ParkingStagesEditFormComponent
  ],
  providers: [
    ParkingStagesService,
    ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class ParkingStagesModule {
}
