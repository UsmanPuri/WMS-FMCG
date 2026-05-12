import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {OpeningStockService} from "./services/opening-stock-manual.service";
import {OpeningStockManualComponent} from "./components/opening-stock-manual";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from 'ngb-modal';
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: OpeningStockManualComponent,
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
    ModalModule,
    RouterModule.forChild( routes ),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,UiSwitchModule,
    NgMultiSelectDropDownModule
  ],
  declarations: [
    OpeningStockManualComponent
  ],
  providers: [
    OpeningStockService
  ],
  entryComponents: [
    
  ]
} )
export class OpeningStockManualModule {
}
