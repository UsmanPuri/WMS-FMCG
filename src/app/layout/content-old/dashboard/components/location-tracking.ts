import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators } from "@angular/forms";

import { Dashboard } from "../models/Dashboard";
import { DashboardService } from "../services/dashboard.service";
import { ModuleForm } from "../models/ModuleForm";
import * as CONST_LIST from "../../../../helpers/constants/apis-list";
import { ErrorHandlerService } from "src/app/helpers/services/error-handler.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { AsnTracking } from "../models/AsnTracking";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { LocationTracking } from "../models/LocationTracking";

@Component({
  selector: "wms-location-tracking",
  templateUrl: "../templates/locationTracking.html",
  styleUrls: ["../styles/dashboard-form.component.scss"],
})
export class LocationTrackingComponent extends BaseComponent {

  CMBTotal: number;
  OCPTotal: number;
  EMPTotal: number;
  locationTrackingList: LocationTracking[];
  dataTable: any;
  constructor(injector: Injector, private _dashboardService: DashboardService, 
    private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.getLocationtracking();
  }


  getLocationtracking() {
    this.ngxService.start();
    let apiAddress: string = this.apiConstant.DASHBOARD_LOCATION_TRACKING;
    this._dashboardService.getData(apiAddress)
      .subscribe(res => {

        this.locationTrackingList = res as LocationTracking[];
        this.getCBMSum();

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


  getCBMSum() {
    this.CMBTotal = 0;
    this.OCPTotal = 0;
    this.EMPTotal = 0;
    for (let i = 0; i < this.locationTrackingList.length; i++) {
      this.CMBTotal += this.locationTrackingList[i].CBM;
      this.OCPTotal += (this.locationTrackingList[i].UsedCBM - this.locationTrackingList[i].FreeCBM);
      this.EMPTotal += (this.locationTrackingList[i].CBM - (this.locationTrackingList[i].UsedCBM - this.locationTrackingList[i].FreeCBM));
    }

  }


}
