import { Component, Injector, OnInit, Input,  ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { HttpClient } from '@angular/common/http';

import 'datatables.net';
import 'datatables.net-bs4';
import { GraphicalDashboardService } from "../services/graphical-dashboard";
//import internal = require("assert");
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "wms-graphical-dashboard",
  templateUrl: "../templates/graphical-dashboard.html",
  styleUrls: ["../styles/graphical-dashboard.scss"],
})

export class GraphicalDashboardComponent extends BaseComponent implements OnInit  {
  
  form: FormGroup;
  
  @ViewChild('modalItemLocation') modalItemLocation;
  private modalRef;

  warehouseKeyPair: DropdownListDto[];
  warehouseDropdownSettings = {};
  AllCount={};
  FromDate:Date;
  ToDate:Date;
  selectedWarehouseId={Id:'',Name:''};
  WarehouseId:any;
  
  TotalInbound:number;
  PendingRecASN:number;
  PendingRectoWH:number;
  TotalRecInbound:number;
  TotalTransferOrderRec:number;
  PendingTransferOrder:number;
  TotalCustomerOrder:number;
  PendingPickupplans:number;
  PendingDispatches:number;
  TotalCompletedOrders:number;
  TotalTransferOrders:number;
  TRPendingPickupplans:number;
  TRPendingDispatches:number;
  TRTotalCompletedOrders:number;

  constructor(injector: Injector, private http: HttpClient, private _graphicalDashboard: GraphicalDashboardService,
   fb:FormBuilder, private ngxService: NgxUiLoaderService) {
    super(injector);
    
    this.form = fb.group({
      WarehouseId:[''],
      FromDate:[''],
      ToDate:['']
    })
  }
  ngOnInit(): void {
    this.dropDownSettings();
    this.getWarehouseKeyPair();  
  }



  getWarehouseKeyPair() {
    
    let companyBusinessUnitInfo: any = {
      CompanyId: this.localStorageService.getCompanyId(),
       BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      LoggedUserId: this.localStorageService.getUserId()
    }
    let apiAddress: string = this.apiConstant.WAREHOUSE_KEYPAIR;
    this._graphicalDashboard.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        console.log(res);

        this.warehouseKeyPair = res as DropdownListDto[];
        console.log(this.warehouseKeyPair);
      },
        (error) => {
          
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
  }
onSelect(item: any, dropDownName: string) {
  debugger;
    this[dropDownName] = {
      Id: item.Value,
      Name: item.Text
    };
  }

  selectedWarehouse(event: any){
    this.selectedWarehouseId = event.Value
  }

  onDeSelect(dropDownName: string) {
    this[dropDownName] = {};
  }
private dropDownSettings(){
    this.warehouseDropdownSettings = {
      idField: 'Value',
      textField: 'Text',
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }

  search(fromDate, toDate)
  {
    debugger
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
      WarehouseId: this.selectedWarehouseId,
      DateFrom:fromDate.value,
      DateTo:toDate.value
    }
    this.ngxService.start();
    
    let apiAddress: string = this.apiConstant.DASHBOARD_GRAPHICAL;
    if(fromDate.value!=undefined && toDate.value!=undefined && this.selectedWarehouseId.Id !="" )
    {
      this._graphicalDashboard.getKeyPair(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.AllCount=res as {};
        this.TotalInbound=this.AllCount[0].TotalInbound;
        this.PendingRecASN=this.AllCount[0].PendingRecASN;
        this.PendingRectoWH=this.AllCount[0].PendingRectoWH;
        this.TotalRecInbound=this.AllCount[0].TotalRecInbound;
        this.TotalTransferOrderRec=this.AllCount[0].TotalTransferOrderRec;
        this.PendingTransferOrder=this.AllCount[0].PendingTransferOrder;

        this.TotalCustomerOrder=this.AllCount[0].TotalCustomerOrder;
        this.PendingPickupplans=this.AllCount[0].PendingPickupplans;
        this.PendingDispatches=this.AllCount[0].PendingDispatches;
        this.TotalCompletedOrders=this.AllCount[0].TotalCompletedOrders;
        
        this.TotalTransferOrders=this.AllCount[0].TotalTransferOrders;
        this.TRPendingPickupplans=this.AllCount[0].TRPendingPickupplans;
        this.TRPendingDispatches=this.AllCount[0].TRPendingDispatches;
        this.TRTotalCompletedOrders=this.AllCount[0].TRTotalCompletedOrders;


        console.log(this.AllCount);
        this.ngxService.stop();

      },
        (error) => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
    }
   else{
     this.showToastrError("PLEASE SELECT ALL FIELD FOR SEARCH")
     return false;
   }
    
  }

    
}

