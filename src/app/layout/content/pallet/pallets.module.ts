import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {PalletService} from "./services/pallet.service";
import {PalletFormComponent} from "./components/pallet-form.component";
import {PalletListComponent} from "./components/pallet-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PalletEditFormComponent } from "./components/pallet-edit-form.component";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { NgxUiLoaderModule } from "ngx-ui-loader";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: PalletListComponent,
      }, 
      {
        path: "create",
        component: PalletFormComponent,
      },
      {
        path: "edit/:Id",
        component: PalletEditFormComponent,
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
    PalletListComponent, PalletFormComponent,PalletEditFormComponent
  ],
  providers: [
    PalletService,
    ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class PalletsModule {
}
