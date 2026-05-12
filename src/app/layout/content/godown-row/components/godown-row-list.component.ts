import { Component, Injector, OnInit, ChangeDetectorRef } from "@angular/core";
import { GodownRowService } from "../services/godown-row.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { GodownRow } from "../models/GodownRow";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ExporterService } from "src/app/helpers/services/excel-file.service";

@Component({
  selector: "wms-godown-row-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/godown-row-form.component.scss"],
})
export class GodownRowListComponent extends BaseComponent {

  public godownRowList: GodownRow[];
   // Our future instance of DataTable
   dataTable: any;
  GodownRowListToPost: any=[];

  constructor(injector: Injector, private _godownRowService: GodownRowService, private chRef: ChangeDetectorRef,
   private exporterService: ExporterService,
   private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.getAllGodownRows();
  }
 

  getAllGodownRows() {
    this.ngxService.start();
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.GODOWN_ROW_LIST;
    this._godownRowService.getAll(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.godownRowList = res as GodownRow[];
        console.log( this.godownRowList);
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
        })
  }

  Edit(id){
    let updateUrl: string = this.routesList.GODOWN_ROW_EDIT+`/${id}`;
    this.router.navigate([updateUrl]);
  }

  

  public exportServiceAsExcel() {

    this.godownRowList.forEach(element => {
     let godownRowObj = {
       Name:element.Name,
       ChamberName:element.AML_Godwom.Name,
       Alias:element.Alias,
 

     }

      this.GodownRowListToPost.push(godownRowObj);
      
    });
      
    
    this.exporterService.exportToExcel(this.GodownRowListToPost, 'GodownRowList Data');
    this.GodownRowListToPost = [];
    }
		

    Delete(Item:any){
      this.ngxService.start();
      let companyBusinessUnitInfo: any = {
        CompanyId: this.localStorageService.getCompanyId(),
        BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        GodownRowId : Item.GodownRowId,
        GodwonId : Item.GodwonId,
        Type : "row"
      }
      let apiUrl = this.apiConstant.WAREHOUSE_DELETE;
    this._godownRowService.create(apiUrl, companyBusinessUnitInfo)
      .subscribe(res => {
        //debugger
        let isDeleted = res;
        if(isDeleted){
          this.showToastrSuccess('Godown Row deleted successfully');
          this.getAllGodownRows();
        }else{
          this.showToastrWarning('Godown Row Can not be deleted');
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

  redirectToCreateGodownRow(){
    this.router.navigate([this.routesList.GODOWN_ROW_CREATE]);
  }


}
