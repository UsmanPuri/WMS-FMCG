import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import { DistributorsService} from "./services/distributors.service";
import { DistributorsFormComponent} from "./components/distributors-form.component";
import { DistributorsListComponent} from "./components/distributors-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DistributorsEditFormComponent } from "./components/distributors-edit-form.component";
import { NgxMaskModule } from 'ngx-mask';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxPrintModule } from "ngx-print";
import { ModalModule } from 'ngb-modal';
import { NgxUiLoaderModule } from  'ngx-ui-loader';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: DistributorsListComponent,
      }, 
      {
        path: "create",
        component: DistributorsFormComponent,
      },{
        path: "edit/:Id",
        component: DistributorsEditFormComponent,
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
    NgxMaskModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,UiSwitchModule,
    NgxPrintModule,
    ModalModule,
    NgxUiLoaderModule
  ],
  declarations: [
    DistributorsListComponent, DistributorsFormComponent, DistributorsEditFormComponent
  ],
  providers: [
    DistributorsService,
    ExporterService
  ],
  entryComponents: [
    DistributorsFormComponent
  ]
} )
export class DistributorsModule {
}
