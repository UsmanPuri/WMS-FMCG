import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {ItemCategoryService} from "./services/item-category.service";
import {CategoryFormComponent} from "./components/category-form.component";
import { CategoryListComponent } from "./components/category-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CategoryEditFormComponent } from "./components/category-edit-form.component";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: CategoryListComponent,
      }, 
      {
        path: "create",
        component: CategoryFormComponent,
      },
      {
        path: "edit/:Id",
        component: CategoryEditFormComponent,
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
    NgMultiSelectDropDownModule
  ],
  declarations: [
     CategoryFormComponent, CategoryListComponent,CategoryEditFormComponent
  ],
  providers: [
     ItemCategoryService,ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class ItemCategoriesModule {
}
