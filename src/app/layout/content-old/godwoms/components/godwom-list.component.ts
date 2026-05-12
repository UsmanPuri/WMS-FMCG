import { Component, Injector, OnInit, ChangeDetectorRef } from "@angular/core";
import { GodwomService } from "../services/godwom.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { Godwom } from "../models/Godwom";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ExporterService } from "src/app/helpers/services/excel-file.service";

@Component({
  selector: "wms-godwom-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/godwom-form.component.scss"],
})
export class GodwomListComponent extends BaseComponent {

  public godwomList: Godwom[];
   // Our future instance of DataTable
   dataTable: any;
  GodownListToPost: any=[];

  constructor(injector: Injector, private _godwomService: GodwomService, private chRef: ChangeDetectorRef,
   private exporterService: ExporterService,
   private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.getAllGodwoms();
  }
 

  getAllGodwoms() {
    this.ngxService.start();
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.GODWOM_LIST;
    this._godwomService.getAll(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.godwomList = res as Godwom[];
        console.log( this.godwomList);
        this.chRef.detectChanges();
        this.chRef.reattach();
         // Now you can use jQuery DataTables :
      const table: any = $('table');
      this.dataTable = table.DataTable({
        lengthMenu: [5, 10, 50, 100, 500],
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
    let updateUrl: string = this.routesList.GODWOM_EDIT+`/${id}`;
    this.router.navigate([updateUrl]);
  }

  public exportServiceAsExcel() {

    this.godwomList.forEach(element => {
     let godownObj = {
       Name:element.Name,
       Abbrevation:element.Abbreviation,
       ChamberType:element.AML_GodwomType.Name,
       Height:element.Height,
       Widht:element.Width,
       Depth:element.Dept,


     }

      this.GodownListToPost.push(godownObj);
      
    });
      
    
    this.exporterService.exportToExcel(this.GodownListToPost, 'GodownList Data');
    this.GodownListToPost = [];
    }
    Delete(Id:any){
      this.ngxService.start();
      let companyBusinessUnitInfo: any = {
        CompanyId: this.localStorageService.getCompanyId(),
        BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        GodwonId : Id,
        Type : "godown"
      }
      let apiUrl = this.apiConstant.WAREHOUSE_DELETE;
    this._godwomService.create(apiUrl, companyBusinessUnitInfo)
      .subscribe(res => {
        //debugger
        let isDeleted = res;
        if(isDeleted){
          this.showToastrSuccess('Godown deleted successfully');
          this.getAllGodwoms();
        }else{
          this.showToastrWarning('Godown Can not be deleted');
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


  redirectToCreateGodwom(){
    this.router.navigate([this.routesList.GODWOM_CREATE]);
  }


}
