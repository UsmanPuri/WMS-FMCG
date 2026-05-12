import { Component, Injector, OnInit } from "@angular/core";
import { ShipmentNoteService } from "../services/shipment-note.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ShipmentNote } from "../models/ShipmentNote";


import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: "wms-shipment-note-list",
  templateUrl: "../templates/list.component.html",
  styleUrls: ["../styles/shipment-note-form.component.scss"],
})
export class ShipmentNoteListComponent extends BaseComponent {

  public shipmentNoteList: ShipmentNote[];
   // Our future instance of DataTable
   dataTable: any;

  constructor(injector: Injector, private _shipmentNoteService: ShipmentNoteService,
  ) {
    super(injector);
  }

  ngOnInit() {
     this.getAllShipmentNotes();
  }
 

  getAllShipmentNotes() {
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.SHIPMENT_NOTE_LIST;
    this._shipmentNoteService.getAll(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.shipmentNoteList = res as ShipmentNote[];
        //console.log(this.shipmentNoteList)
        

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

  // Edit(id){
  //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
  //   this.router.navigate([updateUrl]);
  // }

  redirectToCreateShipmentNote(){
    this.router.navigate([this.routesList.SHIPMENT_NOTE_CREATE]);
  }


}
