import { Component, Injector, OnInit, Input, ViewChild } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import { ShipmentNote } from "../models/ShipmentNote";
import { ShipmentNoteService } from "../services/shipment-note-manual.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";

import * as $ from 'jquery';
import { ModalManager } from "ngb-modal";
import { Pallet } from "../../pallet/models/Pallet";
import { GodownShelf } from "../../godown-shelf/models/GodownShelf";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";


@Component({
  selector: "wms-shipment-note-manual-detail-form",
  templateUrl: "../templates/detail.component.html",
  styleUrls: ["../styles/shipment-note-manual-form.component.scss"],
})
export class ShipmentNoteManualDetailComponent extends BaseComponent {
  @ViewChild('modalItemLocation') modalItemLocation;
  private modalRef;

  palletDropdownSettings = {};
  palletList: Pallet[]=[];
  palletKeyPair: DropdownListDto[];
  palletCustomer = {};
  
  customerDropdownSettings = {};
  customerKeyPair: DropdownListDto[];
  selectedCustomer = {};

  warehouseDropdownSettings = {};
  warehouseKeyPair: DropdownListDto[];
  selectedWarehouse = {Id:null, Name:null};

  godownDropdownSettings = {};
  godownKeyPair: DropdownListDto[];
  selectedGodown = {Id:null, Name:null};;

  itemDropdownSettings = {};
  itemKeyPair: DropdownListDto[];
  selectedItem = {};

  status: boolean;
  shipmentNote: ShipmentNote;
  itemInformationByCustomer: any[] = [];

  shelfListForShipment: any[] = [];
  shipmentListToPost:any[]=[];

  selectedPallet={};

  constructor(injector: Injector, private _shipmentNoteServiceService: ShipmentNoteService,
    private activeRoute: ActivatedRoute, private modalService: ModalManager) {
    super(injector);
  }

  ngOnInit() {
   
    this.getById();
  }

  private getById() {
    let Id: string = this.activeRoute.snapshot.params['Id'];
    if(Id){
      let customerByIdUrl: string = this.apiConstant.SHIPMENT_NOTE_GET_ONE + `${Id}`;
      this._shipmentNoteServiceService.getData(customerByIdUrl)
        .subscribe(res => {
          debugger
          this.shipmentNote = res as ShipmentNote;
        
            console.log( this.shipmentNote)
            
        
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
  }
 

 


  redirectToListShipmentNote() {
    this.router.navigate([this.routesList.SHIPMENT_NOTE_MANUAL_LISTING]);
  }
 



 



}
