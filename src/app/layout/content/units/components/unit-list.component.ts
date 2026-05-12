import { Component, Injector, OnInit, ChangeDetectorRef } from "@angular/core";
import { UnitService } from "../services/unit.service";
import { UnitFormComponent } from "./unit-form.component";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { DashboardService } from "../../dashboard/services/dashboard.service";
import { Unit } from "../models/Unit";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ExporterService } from "src/app/helpers/services/excel-file.service";

@Component({
  selector: "genx-unit-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/unit-form.component.scss"],
})
export class UnitListComponent extends BaseComponent {

  public unitList: Unit[];
   // Our future instance of DataTable
   dataTable: any;
  UnitListToPost: any =[];

  constructor(injector: Injector, private _dashboardService: DashboardService, private chRef: ChangeDetectorRef,
    private exporterService: ExporterService,
   private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.getAllUnits();
  }
 

  getAllUnits() {
    this.ngxService.start();
    let apiAddress: string = this.apiConstant.UNIT_LIST;
    this._dashboardService.getData(apiAddress)
      .subscribe(res => {
        this.unitList = res as Unit[];
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

  Edit(unitId){
    let updateUrl: string = this.routesList.UNIT_EDIT+`/${unitId}`;
    this.router.navigate([updateUrl]);
  }

  public exportServiceAsExcel() {

    this.unitList.forEach(element => {
     let customerObj = {
       Title:element.Title,  
       Abbrevation:element.Abbreviation,


     }

      this.UnitListToPost.push(customerObj);
      
    });
      
    
    this.exporterService.exportToExcel(this.UnitListToPost, 'UnitList Data');
    this.UnitListToPost = [];
    }

  redirectToCreateUnit(){
    this.router.navigate([this.routesList.UNIT_CREATE]);
  }


}
