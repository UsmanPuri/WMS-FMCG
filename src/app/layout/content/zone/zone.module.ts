import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import { UiSwitchModule  } from 'ngx-toggle-switch';
import {ZoneService} from './services/zone.service';
import {ZoneFormComponent} from './components/zone-form.component';
import {ZoneEditFormComponent} from './components/zone-edit-form.component';
import {ZoneListComponent} from './components/zone-list.component';
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
        component: ZoneListComponent,
      },
      {
        path: 'create',
        component: ZoneFormComponent,
      }, {
        path: 'edit/:Id',
        component: ZoneEditFormComponent,
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
    ZoneListComponent, ZoneFormComponent, ZoneEditFormComponent
  ],
  providers: [
    ZoneService,
    ExporterService
  ],
  entryComponents: [
  ]
} )
export class ZoneModule {
}
