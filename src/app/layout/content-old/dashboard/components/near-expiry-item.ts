import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators } from "@angular/forms";

import { Dashboard } from "../models/Dashboard";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { DashboardService } from "../services/dashboard.service";
import { ModuleForm } from "../models/ModuleForm";
import * as CONST_LIST from "../../../../helpers/constants/apis-list";
import { ErrorHandlerService } from "src/app/helpers/services/error-handler.service";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: "wms-near-expiry-item",
  templateUrl: "../templates/near-expiry-item.html",
  styleUrls: ["../styles/dashboard-form.component.scss"],
})
export class NearExpiryItemComponent extends BaseComponent {
  public listAvailableStock:any[]=[];
  dataTable: any;
  
  constructor(injector: Injector, private _dashboardService: DashboardService,
   private ngxService: NgxUiLoaderService) {
      super(injector);
  }

  ngOnInit() {
    this.getAllExpiredItem();
  }

  getAllExpiredItem() {
    this.ngxService.start();
    let apiAddress: string = this.apiConstant.DASHBOARD_NEAREXPIRYPRODUCTS;
    this._dashboardService.getData(apiAddress)
      .subscribe(res => { 
        this.listAvailableStock = res as any[];
        console.log(this.listAvailableStock)
        
         // Now you can use jQuery DataTables :
      const table: any = $('table');
     // this.dataTable = table.DataTable();
     this.dataTable = table.DataTable({
      lengthMenu: [5, 10, 20, 50, 100],
      "iDisplayLength": 100,
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
  
}
