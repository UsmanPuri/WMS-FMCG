
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {DispatchService} from "./services/dispatch-custom.service";
import {DispatchCustomFormComponent} from "./components/dispatch-custom-form.component";
import {DispatchCustomListComponent} from "./components/dispatch-custom-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from "ngb-modal";
import {NgxPrintModule} from 'ngx-print';
import { DispatchCustomDetailComponent } from "./components/dispatch-custom-detail.component";
import { DispatchCustomEditComponent } from "./components/dispatch-custom-edit.component";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { ReportComponent } from "./components/report.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: DispatchCustomListComponent,
      }, 
      {
        path: "create",
        component: DispatchCustomFormComponent,
      },
      {
        path: "detail/:Id",
        component: DispatchCustomDetailComponent,
      },
      {
        path: "edit/:Id",
        component: DispatchCustomEditComponent,
      },
      {
        path: "report/:Id",
        component: ReportComponent
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
    NgxPrintModule,
    RouterModule.forChild( routes ),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,UiSwitchModule,
    NgMultiSelectDropDownModule,
    NgxUiLoaderModule
  ],
  declarations: [
    DispatchCustomFormComponent, DispatchCustomListComponent,
    DispatchCustomDetailComponent,DispatchCustomEditComponent, ReportComponent
  ],
  exports: [ RouterModule ],
  providers: [
    DispatchService
  ],
  entryComponents: [
    
  ]
} )
export class DispatchCustomModule {
}
