import { Component, Injector, OnInit } from "@angular/core";
import { WMSServiceService } from "../services/wms-service.service";
import { WMSServiceFormComponent } from "./wms-service-form.component";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { WMSService } from "../models/WMSService";


import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: "genx-wms-service-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/wms-service-form.component.scss"],
})
export class WMSServiceListComponent extends BaseComponent {

  public wmsServiceList: WMSService[];
   // Our future instance of DataTable
   dataTable: any;

  constructor(injector: Injector, private _wmsServiceService: WMSServiceService) {
    super(injector);
  }

  ngOnInit() {
    this.getAll();
  }
 

  getAll() {
    let apiAddress: string = this.apiConstant.WMS_SERVICE_LIST;
    this._wmsServiceService.getData(apiAddress)
      .subscribe(res => {
        this.wmsServiceList = res as WMSService[];
        

         // Now you can use jQuery DataTables :
      const table: any = $('table');
      this.dataTable = table.DataTable({
        lengthMenu: [5, 10, 20, 50, 100],
        "iDisplayLength": 100
      });
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }

  Edit(id){
    let updateUrl: string = this.routesList.WMS_SERVICE_EDIT+`/${id}`;
    this.router.navigate([updateUrl]);
  }

  Detail(id){
    let updateUrl: string = this.routesList.WMS_SERVICE_DETAIL+`/${id}`;
    this.router.navigate([updateUrl]);
  }

  redirectToCreateWmsService(){
    this.router.navigate([this.routesList.WMS_SERVICE_CREATE]);
  }

  print(): void {
    let printContents, popupWin;
    document.getElementById('tbl_length').style.visibility = 'hidden';
    document.getElementById('tbl_filter').style.visibility = 'hidden';
    document.getElementById('tbl_info').style.visibility = 'hidden';
    document.getElementById('tbl_paginate').style.visibility = 'hidden';
    $('#tbl tr > *:nth-child(5)').hide();
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
            .table{
              margin:10px;
              border: 1px solid;
              border-collapse: collapse;
            }
            th,td{
              border: 1px solid;
              padding:1px;
            }
          </style>
          <h1 align="center">All Services Info</h1>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    document.getElementById('tbl_length').style.visibility = 'visible';
    document.getElementById('tbl_filter').style.visibility = 'visible';
    document.getElementById('tbl_info').style.visibility = 'visible';
    document.getElementById('tbl_paginate').style.visibility = 'visible';
    $('#tbl tr > *:nth-child(5)').show();
    popupWin.document.close();
}


}
