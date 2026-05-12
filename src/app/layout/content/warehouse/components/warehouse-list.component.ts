import { Component, Injector, OnInit, ChangeDetectorRef } from "@angular/core";
import { WarehouseService } from "../services/warehouse.service";
import { WarehouseFormComponent } from "./warehouse-form.component";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { Warehouse } from "../models/Warehouse";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ExporterService } from "src/app/helpers/services/excel-file.service";

@Component({
  selector: "wms-warehouse-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/warehouse-form.component.scss"],
})
export class WarehouseListComponent extends BaseComponent {

  public warehouseList: Warehouse[];
   // Our future instance of DataTable
   dataTable: any;
  WarehouseListToPost: any = [];

  constructor(injector: Injector, private _warehouseService: WarehouseService, private chRef: ChangeDetectorRef,
    private exporterService: ExporterService,
   private ngxService: NgxUiLoaderService	) {
    super(injector);
  }

  ngOnInit() {
    this.getAllWarehouses();
  }

  getAllWarehouses() {
    this.ngxService.start();
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId()
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_LIST;
    this._warehouseService.getKeyPair(apiAddress , companyBusinessUnitInfo)
      .subscribe(res => {
        this.warehouseList = res as Warehouse[];
        debugger
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

  Edit(id){
    let updateUrl: string = this.routesList.WAREHOUSE_EDIT+`/${id}`;
    this.router.navigate([updateUrl]);
  }


  public exportServiceAsExcel() {

    this.warehouseList.forEach(element => {
     let warehouseObj = {
       Name:element.Name, 
       Abbrevation:element.Abbrivation,
       ContactPerson:element.ContactPerson,
       ContactPersonPhone:element.ContactPersonPhone,
       Longitude:element.Longitude,
       Latitude:element.Latitude,
       Address:element.Address,

     }

      this.WarehouseListToPost.push(warehouseObj);
      
    });
    this.exporterService.exportToExcel(this.WarehouseListToPost, 'WarehouseList Data');
    this.WarehouseListToPost = [];
    }
      
    Delete(Id:any){
      let companyBusinessUnitInfo: any = {
        CompanyId: this.localStorageService.getCompanyId(),
        BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        WarehouseId : Id,
        Type : "warehouse"
      }
      let apiUrl = this.apiConstant.WAREHOUSE_DELETE;
    this._warehouseService.create(apiUrl, companyBusinessUnitInfo)
      .subscribe(res => {
        //debugger
        let isDeleted = res;
        if(isDeleted){
          this.showToastrSuccess('Warehouse deleted successfully');
          this.getAllWarehouses();
        }else{
          this.showToastrWarning('Warehouse Can not be deleted');
        }
        
      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
    }

  redirectToCreateWarehouse(){
    this.router.navigate([this.routesList.WAREHOUSE_CREATE]);
  }


}
