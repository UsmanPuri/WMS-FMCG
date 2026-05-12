import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {NewFormService} from "./services/new-form.service";
import {NewFormFormComponent} from "./components/new-form-form.component";
import { NewFormListComponent } from "./components/new-form-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: NewFormListComponent,
     }, 
      {
        path: "create",
        component: NewFormFormComponent,
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
    NgMultiSelectDropDownModule
  ],
  declarations: [
    NewFormListComponent,
    NewFormFormComponent
    //, UnitFormComponent, UnitEditFormComponent
  ],
  providers: [
    NewFormService,
    ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class NewFormModule {
}
