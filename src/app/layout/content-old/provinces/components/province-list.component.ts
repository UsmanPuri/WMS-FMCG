import { Component, Injector, OnInit,ChangeDetectorRef } from "@angular/core";
import { ProvinceService } from "../services/province.service";
import { ProvinceFormComponent } from "./province-form.component";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { Province } from "../models/Province";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ExporterService } from "src/app/helpers/services/excel-file.service";

@Component({
  selector: "wms-province-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/province-form.component.scss"],
})
export class ProvinceListComponent extends BaseComponent {

  public provinceList: Province[];
   // Our future instance of DataTable
   dataTable: any;
  ProvinceListToPost: any = [];

  constructor(injector: Injector, private _provinceService: ProvinceService, private chRef: ChangeDetectorRef,
    private exporterService: ExporterService,
   private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.getAllProvinces();
    
  }
 

  getAllProvinces() {
    this.ngxService.start();
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
    }
    let apiAddress: string = this.apiConstant.PROVINCE_LIST;
    this._provinceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.provinceList = res as Province[];
        this.chRef.detectChanges();
        this.chRef.reattach();
         // Now you can use jQuery DataTables :
      const table: any = $('table');
      this.dataTable = table.DataTable({
        lengthMenu: [50, 100, 500],
        "iDisplayLength": 500
      });
      this.ngxService.stop();
      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  Edit(provinceId){
    let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${provinceId}`;
    this.router.navigate([updateUrl]);
  }

  public exportServiceAsExcel() {

    this.provinceList.forEach(element => {
     let provinceObj = {
       Name:element.Name,
       Abbrevation:element.Abbreviation,

     }

      this.ProvinceListToPost.push(provinceObj);
      
    });
      
    
    this.exporterService.exportToExcel(this.ProvinceListToPost, 'ProvinceList Data');
    this.ProvinceListToPost = [];
    }

  redirectToCreateProvince(){
    this.router.navigate([this.routesList.PROVINCE_CREATE]);
  }


}
