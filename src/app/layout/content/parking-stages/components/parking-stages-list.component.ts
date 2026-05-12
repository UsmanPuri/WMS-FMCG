import { Component, Injector, OnInit, ChangeDetectorRef } from "@angular/core";
import { ParkingStagesService } from "../services/parking-stages.service";
import { ParkingStagesFormComponent } from "./parking-stages-form.component";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { DashboardService } from "../../dashboard/services/dashboard.service";
import { ParkingStages } from "../models/ParkingStages";
import { NgxUiLoaderService } from 'ngx-ui-loader';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { ExporterService } from "src/app/helpers/services/excel-file.service";

@Component({
  selector: "genx-parking-stages-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/parking-stages-form.component.scss"],
})
export class ParkingStagesListComponent extends BaseComponent {

  public parkingStagesList: ParkingStages[];
  // Our future instance of DataTable
  dataTable: any;
  ParkingStagesListToPost: any = [];

  constructor(injector: Injector, private _parkingStagesService: ParkingStagesService, private chRef: ChangeDetectorRef,
   private exporterService: ExporterService,
    private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.getAllParkingStages();
  }


  getAllParkingStages() {
    this.ngxService.start();
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.PARKINGSTAGES_LIST;
    this._parkingStagesService.getAll(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.parkingStagesList = res as ParkingStages[];
        
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

    this.parkingStagesList.forEach(element => {
      let parkingStagesObj = {
        Name: element.Name,
        Description: element.Description,


      }

      this.ParkingStagesListToPost.push(parkingStagesObj);

    });


    this.exporterService.exportToExcel(this.ParkingStagesListToPost, 'ParkingStagesList Data');
    this.ParkingStagesListToPost = [];
  }



  redirectToCreateParkingStages() {
    this.router.navigate([this.routesList.PARKINGSTAGES_CREATE]);
  }

  Edit(id) {
    let updateUrl: string = this.routesList.PARKINGSTAGES_EDIT + `/${id}`;
    this.router.navigate([updateUrl]);
  }

}
