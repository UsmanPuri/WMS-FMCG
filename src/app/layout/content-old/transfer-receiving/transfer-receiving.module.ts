import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { DropTargetOptions, NgxUploadModule, HttpClientUploadService } from '@wkoza/ngx-upload';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { SharedModule } from "src/app/helpers/modules/shared.module";
import { TransferReceivingEditFormComponent } from "./components/transfer-receiving-edit-form.component";
import { TransferReceivingFormComponent } from "./components/transfer-receiving-form.component";
import { TransferReceivingListComponent } from "./components/transfer-receiving-list.component";
import { ImageUploadComponent } from "./components/uploadImages";
import { TransferReceivingService } from "./services/transfer-receiving.service";
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngb-modal';
import { NgxPrintModule } from 'ngx-print';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ExporterService } from "src/app/helpers/services/excel-file.service";


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
        component: TransferReceivingListComponent,
      }, 
      {
        path: "create/:Id",
        component: TransferReceivingFormComponent,
      },
      {
        path: "edit/:Id",
        component: TransferReceivingEditFormComponent,
      },
      {
        path: "imageupload/:Id",
        component: ImageUploadComponent,
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
    TransferReceivingFormComponent, TransferReceivingListComponent,TransferReceivingEditFormComponent,
    ImageUploadComponent
  ],
  providers: [
    TransferReceivingService,
    ExporterService
  ],
  entryComponents: [
    
  ]
} )
export class TransferReceivingModule {
}
