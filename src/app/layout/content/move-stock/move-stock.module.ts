import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {MoveStockService} from "./services/move-stock.service";
import {MoveStockComponent} from "./components/move-stock";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from 'ngb-modal';
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: MoveStockComponent,
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
    MoveStockComponent
  ],
  providers: [
    MoveStockService
  ],
  entryComponents: [
    
  ]
} )
export class MoveStockModule {
}
