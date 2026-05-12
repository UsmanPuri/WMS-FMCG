import { Component, Injector, OnInit,ChangeDetectorRef } from "@angular/core";
import { GodownRackService } from "../services/godown-rack.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { GodownRack } from "../models/GodownRack";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ExporterService } from "src/app/helpers/services/excel-file.service";

@Component({
  selector: "wms-godown-rack-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/godown-rack-form.component.scss"],
})
export class GodownRackListComponent extends BaseComponent {

  public godownRackList: GodownRack[];
   // Our future instance of DataTable
   dataTable: any;
  GodownRackListToPost: any=[];

  constructor(injector: Injector, private _godownRackService: GodownRackService, private chRef: ChangeDetectorRef,
   private exporterService: ExporterService,
   private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.getAllGodownRacks();
  }
 

  getAllGodownRacks() {
    this.ngxService.start();
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.GODOWN_RACK_LIST;
    this._godownRackService.getAll(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.godownRackList = res as GodownRack[];
        console.log( this.godownRackList);
        this.chRef.detectChanges();
        this.chRef.reattach();
         // Now you can use jQuery DataTables :
      const table: any = $('table');
      this.dataTable = table.DataTable({
        lengthMenu: [5, 10, 50, 100, 500],
        "iDisplayLength": 500,
        retrieve: true
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
    let updateUrl: string = this.routesList.GODOWN_RACK_EDIT+`/${id}`;
    this.router.navigate([updateUrl]);
  }
  

  public exportServiceAsExcel() {

    this.godownRackList.forEach(element => {
     let godownRackObj = {
       Name:element.Name,
       ChamberName:element.AML_Godwom.Name,
       Aisle:element.Alias,

     }

      this.GodownRackListToPost.push(godownRackObj);
      
    });
      
    
    this.exporterService.exportToExcel(this.GodownRackListToPost, 'GodownRackList Data');
    this.GodownRackListToPost = [];
    }
		
    Delete(Item:any){
      this.ngxService.start();
      let companyBusinessUnitInfo: any = {
        CompanyId: this.localStorageService.getCompanyId(),
        BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        GodownRackId : Item.GodownRackId,
        GodownRowId : Item.GodownRowId,
        GodwonId : Item.GodwonId,
        Type : "rack"
      }
      let apiUrl = this.apiConstant.WAREHOUSE_DELETE;
    this._godownRackService.create(apiUrl, companyBusinessUnitInfo)
      .subscribe(res => {
        //debugger
        let isDeleted = res;
        if(isDeleted){
          this.showToastrSuccess('Godown Rack deleted successfully');
          this.getAllGodownRacks();
        }else{
          this.showToastrWarning('Godown Rack Can not be deleted');
        }
        this.ngxService.stop();
      },
        (error => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
    }
  redirectToCreateGodownRack(){
    this.router.navigate([this.routesList.GODOWN_RACK_CREATE]);
  }


}
