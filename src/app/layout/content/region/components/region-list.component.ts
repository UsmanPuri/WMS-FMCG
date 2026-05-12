import { Component, Injector, OnInit, ChangeDetectorRef } from '@angular/core';
import { RegionService } from '../services/region.service';
import { RegionFormComponent } from './region-form.component';
import { BaseComponent } from 'src/app/helpers/components/base.component';
import { Region } from '../models/Region';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ExporterService } from 'src/app/helpers/services/excel-file.service';

@Component({
  selector: 'wms-region-list',
  templateUrl: '../templates/list.component.html',
  styleUrls: ['../styles/region-form.component.scss'],
})
export class RegionListComponent extends BaseComponent {

  public regionList: Region[];
   // Our future instance of DataTable
   dataTable: any;
  RegionListToPost: any = [];

  constructor(injector: Injector, private _regionService: RegionService, private chRef: ChangeDetectorRef,
    private exporterService: ExporterService,
   private ngxService: NgxUiLoaderService	) {
    super(injector);
  }

  ngOnInit() {
    this.getAll();
  }


  getAll() {
    this.ngxService.start();
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
    }
    let apiAddress: string = this.apiConstant.REGION_LIST;
    this._regionService.getKeyPair(apiAddress , companyBusinessUnitInfo)
      .subscribe(res => {    
        this.regionList = res as Region[];
        console.log(this.regionList )
        
        this.chRef.detectChanges();
        this.chRef.reattach();
         // Now you can use jQuery DataTables :
      const table: any = $('table');
      this.dataTable = table.DataTable({
        lengthMenu: [5, 10, 50, 100, 500],
        "iDisplayLength": 100
      });
      this.ngxService.stop();
      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }

  Edit(id) {
    let updateUrl: string = this.routesList.REGION_EDIT + `/${id}`;
    this.router.navigate([updateUrl]);
  }

  public exportServiceAsExcel() {

    this.regionList.forEach(element => {
     let regionObj = {
       RegionName:element.Name,
       Province:element.AML_Province.Name,
      
     }

      this.RegionListToPost.push(regionObj);
      
    });
      
    
    this.exporterService.exportToExcel(this.RegionListToPost, 'RegionList Data');
    this.RegionListToPost = [];
    }
		  


  redirectToCreateRegion() {
    this.router.navigate([this.routesList.REGION_CREATE]);
  }


}
