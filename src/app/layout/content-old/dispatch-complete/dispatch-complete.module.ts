import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { DropTargetOptions, NgxUploadModule, HttpClientUploadService } from '@wkoza/ngx-upload';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { SharedModule } from "src/app/helpers/modules/shared.module";
import { DispatchCompleteEditFormComponent } from "./components/dispatch-complete-edit-form.component";
import { DispatchCompleteFormComponent } from "./components/dispatch-complete-form.component";
import { DispatchCompleteListComponent } from "./components/dispatch-complete-list.component";
import { ImageUploadComponent } from "./components/uploadImages";
import { DispatchCompleteService } from "./services/dispatch-complete.service";
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngb-modal';
import { NgxPrintModule } from 'ngx-print';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ReportComponent } from './components/report.component';

export const ngxDropTargetOptions: DropTargetOptions = {
  color: 'dropZoneColor',
  colorDrag: 'dropZoneColorDrag',
  colorDrop: 'dropZoneColorDrop'
};

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: DispatchCompleteListComponent,
      }, 
      {
        path: "create/:Id",
        component: DispatchCompleteFormComponent,
      },
      {
        path: "edit/:Id",
        component: DispatchCompleteEditFormComponent,
      },
      {
        path: "imageupload/:Id",
        component: ImageUploadComponent,
      },
      {
        path: "report/:Id",
        component: ReportComponent,
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
    NgxPrintModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,UiSwitchModule,
    NgMultiSelectDropDownModule,
    NgxUploadModule,
    NgxUiLoaderModule
  ],
  declarations: [
    DispatchCompleteFormComponent, DispatchCompleteListComponent,DispatchCompleteEditFormComponent,
    ImageUploadComponent,
    ReportComponent
  ],
  providers: [
    DispatchCompleteService
  ],
  entryComponents: [
    
  ]
} )
export class DispatchCompleteModule {
}
