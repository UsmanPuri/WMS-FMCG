import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {ItemBrandService} from "./services/item-brand.service";
import {BrandFormComponent} from "./components/brand-form.component";
import { BrandListComponent } from "./components/brand-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BrandEditFormComponent } from "./components/brand-edit-form.component";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxUiLoaderModule } from "ngx-ui-loader";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: BrandListComponent,
      }, 
      {
        path: "create",
        component: BrandFormComponent,
      },
      {
        path: "edit/:Id",
        component: BrandEditFormComponent,
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
     BrandFormComponent, BrandListComponent,BrandEditFormComponent
  ],
  providers: [
    ItemBrandService,ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class ItemBrandsModule {
}
