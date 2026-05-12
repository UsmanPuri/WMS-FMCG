import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {RegionService} from './services/region.service';
import {RegionFormComponent} from './components/region-form.component';
import {RegionEditFormComponent} from './components/region-edit-form.component';
import {RegionListComponent} from './components/region-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ExporterService } from 'src/app/helpers/services/excel-file.service';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RegionListComponent,
      },
      {
        path: 'create',
        component: RegionFormComponent,
      }, {
        path: 'edit/:Id',
        component: RegionEditFormComponent,
      }, {
        path: '**',
        redirectTo: '',
      }
    ]
  }
];

@NgModule( {
  imports: [
    RouterModule.forChild( routes ),
    CommonModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    ReactiveFormsModule, UiSwitchModule,
    NgxUiLoaderModule
  ],
  declarations: [
    RegionListComponent, RegionFormComponent, RegionEditFormComponent
  ],
  providers: [
    RegionService,
    ExporterService
  ],
  entryComponents: [
  ]
} )
export class RegionModule {
}
