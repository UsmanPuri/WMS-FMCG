import { Component, Injector, OnInit,ChangeDetectorRef } from "@angular/core";
import { PalletService } from "../services/pallet.service";
import { PalletFormComponent } from "./pallet-form.component";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { DashboardService } from "../../dashboard/services/dashboard.service";
import { Pallet } from "../models/Pallet";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ExporterService } from "src/app/helpers/services/excel-file.service";

@Component({
  selector: "genx-pallet-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/pallet-form.component.scss"],
})
export class PalletListComponent extends BaseComponent {

  public palletList: Pallet[];
   // Our future instance of DataTable
   dataTable: any;
  PalletListToPost: any=[];

  constructor(injector: Injector, private _palletService: PalletService, private chRef: ChangeDetectorRef,
   private exporterService: ExporterService,
   private ngxService: NgxUiLoaderService	) {
    super(injector);
  }

  ngOnInit() {
    this.getAllPallets();
  }
 

  getAllPallets() {
    this.ngxService.start();
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.PALLET_LIST;
    this._palletService.getAll(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.palletList = res as Pallet[];

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


  public exportServiceAsExcel() {

    this.palletList.forEach(element => {
     let palletObj = {
       Title:element.Title,
       Size:element.Size,
       Lenght:element.Length,
       Width:element.Width,
     }

      this.PalletListToPost.push(palletObj);
      
    });
      
    
    this.exporterService.exportToExcel(this.PalletListToPost, 'PalletList Data');
    this.PalletListToPost = [];
    }
		

  redirectToCreatePallet(){
    this.router.navigate([this.routesList.PALLET_CREATE]);
  }

  Edit(id){
    let updateUrl: string = this.routesList.PALLET_EDIT+`/${id}`;
    this.router.navigate([updateUrl]);
  }

}
