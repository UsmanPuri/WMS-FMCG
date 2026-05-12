import { Component, Injector, OnInit } from "@angular/core";
import { ShipmentNoteService } from "../services/shipment-note-moving.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ShipmentNote } from "../models/ShipmentNote";
import { ShipmentNoteChild } from "../models/ShipmentNoteChild";

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { ValidatorFn, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "wms-shipment-note-moving-edit",
  templateUrl: "../templates/edit.component.html",
  styleUrls: ["../styles/shipment-note-moving-form.component.scss"],
})
export class ShipmentNoteMovingEditComponent extends BaseComponent {

  public shipmentNoteList: ShipmentNote[];
   // Our future instance of DataTable
   dataTable: any;

   parkingStageDropdownSettings = {};
   parkingStageKeyPair: DropdownListDto[];
   selectedParkingStage = {};

   shipmentNote : ShipmentNote;
   shipmentNoteChild : ShipmentNoteChild[];

  constructor(injector: Injector, private _shipmentNoteService: ShipmentNoteService,
   private activeRoute:ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {

    this.addFormValidations();
    this.dropdownSettings();
    this.getById();
    this.getParkingStagesKeyPair();
  
  }
  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    this.addFormControlWithValidations("ParkingStageIdFrom", requiredValidation);
    this.addFormControlWithValidations("ParkingStageIdTo", requiredValidation);
   
    
  }

  private dropdownSettings() {
    this.parkingStageDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }


  getById() {
    debugger
    let Id:string = this.activeRoute.snapshot.params["Id"];
    if(Id)
    {
        let apiAddress: string = this.apiConstant.SHIPMENT_NOTE_GET_ONE+ `${Id}`;
        this._shipmentNoteService.getData(apiAddress)
        .subscribe(res => {
          this.shipmentNote = res as ShipmentNote;
          debugger
          console.log(this.shipmentNote)
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          });
    }
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
  
  
  }

  addMoveQuantity(event:any,item:any)
  {
      let movQty = event.target.value;
      if(movQty>item.Balance)
      {
          this.showToastrWarning("Moved Quantity Must Be Equal or Less Tha Received Quantity");
      }
      else
      {
          let model = this.shipmentNote.AML_ShipmentNoteChild.filter(a=> a.ShipmentNoteChildId == item.ShipmentNoteChildId);
          model[0].MoveQuantity = event.target.value;
          console.log(model)
        item.MoveQuantity = event.target.value;
        console.log(this.shipmentNote)
      }
  
  }

  moveASN()
  {
   
      let ASN: ShipmentNote =this.shipmentNote;

      console.log(ASN);
      let apiUrl = this.apiConstant.SHIPMENT_NOTE_MOVE + `/${this.shipmentNote.ShipmentNoteId}`;
      this._shipmentNoteService.update(apiUrl,ASN)
      .subscribe(res=>
        {
            this.showToastrSuccess("ASN Moved Successfully");
            setTimeout(() => {
             
             this.redirectToListShipmentNote();
            }, 2000);
        },(error=>
            {
                this.errorHandler.handleError(error);
                this.errorMessage= this.errorHandler.errorMessage;
            }));
  }

  
  getParkingStagesKeyPair() {
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.PARKINGSTAGES_KEYPAIR;
    this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.parkingStageKeyPair = res as DropdownListDto[];
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }


  parkingStageChange(item:any)
  {
    this.selectedParkingStage ={
      Id:item.Value,
      Name:item.Text
    };

    this.shipmentNote.ParkingStageIdFrom = item.Value;

    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      ParkingStageId:item.Value,
      ShipmentNoteId:this.shipmentNote.ShipmentNoteId
    }
    
      let apiAddress: string = this.apiConstant.SHIPMENT_NOTE_BY_PARKING_ID;
      this._shipmentNoteService.getAll(apiAddress,companyBusinessUnitInfo)
      .subscribe(res => {
        this.shipmentNoteChild = res as ShipmentNoteChild[];
        debugger
        console.log(this.shipmentNoteChild)


      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  
  


  }

  onDeSelect(item:any)
  {
      item={};
      this.shipmentNote.ParkingStageIdFrom = null;
  }



  parkingStageToChange(item:any)
  { 
    this.shipmentNote.ParkingStageIdTo = item.Value;
  }

  onDeSelectparkingStageTo(item:any)
  {
      item={};
      this.shipmentNote.ParkingStageIdTo = null;
  }
  // Edit(id){
  //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
  //   this.router.navigate([updateUrl]);
  // }

  redirectToListShipmentNote(){
    this.router.navigate([this.routesList.SHIPMENT_NOTE_MOVING_LISTING]);
  }


}
