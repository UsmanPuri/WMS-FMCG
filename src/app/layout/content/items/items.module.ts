import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {ItemService} from "./services/item.service";
import {ItemFormComponent} from "./components/item-form.component";
import {ItemListComponent} from "./components/item-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ItemEditFormComponent } from "./components/item-edit-form.component";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { ModalModule } from "ngb-modal";
import { NgxPrintModule } from "ngx-print";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { NgxBarcodeModule } from 'ngx-barcode';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ItemListComponent,
      }, 
      {
        path: "create",
        component: ItemFormComponent,
      },
      {
        path: "edit/:Id",
        component: ItemEditFormComponent,
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
    NgxPrintModule,
    ModalModule,
    NgxBarcodeModule,
    NgxUiLoaderModule,
    ZXingScannerModule
  ],
  declarations: [
    ItemFormComponent, ItemListComponent,ItemEditFormComponent
  ],
  providers: [
    ItemService,ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class ItemsModule {
}
