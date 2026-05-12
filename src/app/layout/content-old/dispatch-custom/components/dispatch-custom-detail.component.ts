import { Component, Injector, OnInit } from "@angular/core";
import { DispatchService } from "../services/dispatch-custom.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { Dispatch } from "../models/Dispatch";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "wms-dispatch-custom-detail",
  templateUrl: "../templates/detail.component.html",
  styleUrls: ["../styles/dispatch-custom-form.component.scss"],
})
export class DispatchCustomDetailComponent extends BaseComponent {

  public dispatch: Dispatch;
   // Our future instance of DataTable
   dataTable: any;
   dropdownHideShow:boolean;


  constructor(injector: Injector, private _dispatchService: DispatchService,
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
      let customerByIdUrl: string = this.apiConstant.DISPATCH_GetById + `${Id}`;
      this._dispatchService.getData(customerByIdUrl)
        .subscribe(res => {
          this.dispatch = res as Dispatch;
            console.log("dispatch")
            console.log( this.dispatch)
            
        
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
  }
 

 
 

 

  redirectToListDispatch(){
    if(this.dropdownHideShow ==  true){
      this.router.navigate([this.routesList.DISPATCH_CUSTOMER_LISTING]);
    }else {
      this.router.navigate([this.routesList.DISPATCH_TRANSFER_LISTING]);
    }
    // this.router.navigate([this.routesList.DISPATCH_CUSTOMER_LISTING]);
  }


}
