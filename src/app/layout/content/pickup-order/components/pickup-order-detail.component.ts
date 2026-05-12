import { Component, Injector, OnInit } from "@angular/core";
import { PickupOrderService } from "../services/pickup-order.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { PickupOrder } from "../models/PickupOrder";


import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { ValidatorFn, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "wms-pickup-order-detail",
  templateUrl: "../templates/detail.component.html",
  styleUrls: ["../styles/pickup-order-form.component.scss"],
})
export class PickupOrderDetailComponent extends BaseComponent {

  public pickupOrder: PickupOrder;
   // Our future instance of DataTable
   dataTable: any;
   dropdownHideShow:boolean;

  
  constructor(injector: Injector, private _pickupOrderService: PickupOrderService,
    private activeRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.dropdownHideShow = this.router.url.includes("customer");
   this.getById();
  }
 
 
  private getById() {
    let Id: string = this.activeRoute.snapshot.params['Id'];
    if(Id){
      let customerByIdUrl: string = this.apiConstant.PICKUP_ORDER_BY_ID + `${Id}`;
      this._pickupOrderService.getData(customerByIdUrl)
        .subscribe(res => {
          this.pickupOrder = res as PickupOrder;
            console.log("Pickup")
            console.log( this.pickupOrder)
            
        
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
  }

  redirectToListPickupOrder(){
    if(this.dropdownHideShow ==  true){
      this.router.navigate([this.routesList.PICKUP_ORDER_LISTING]);
    }else {
      this.router.navigate([this.routesList.PICKUP_TRANSFER_ORDER_LISTING]);
    }
    // this.router.navigate([this.routesList.PICKUP_ORDER_LISTING]);
    // this.router.navigate([this.isCustomerOrder == true ?this.routesList.PICKUP_ORDER_CREATE : this.routesList.PICKUP_TRANSFER_ORDER_CREATE]);
  }


}
