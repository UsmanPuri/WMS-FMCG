import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { CityService } from "./services/city.service";
import { CityFormComponent } from "./components/city-form.component";
import { CityEditFormComponent } from "./components/city-edit-form.component";
import { CityListComponent } from "./components/city-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxUiLoaderModule } from 'ngx-ui-loader';
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: CityListComponent,
      },
      {
        path: "create",
        component: CityFormComponent,
      }, {
        path: "edit/:Id",
        component: CityEditFormComponent,
      }, {
        path: "**",
        redirectTo: "",
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    ReactiveFormsModule, UiSwitchModule,
    NgxUiLoaderModule

  ],
  declarations: [
    CityListComponent, CityFormComponent, CityEditFormComponent
  ],
  providers: [
    CityService,
    ExporterService
  ],
  entryComponents: [

  ]
})
export class CitiesModule {
}
