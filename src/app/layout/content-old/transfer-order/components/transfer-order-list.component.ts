import { Component, Injector } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { EnvironmentUrlService } from "src/app/helpers/services/environment-url.service";
import { ExporterService } from "src/app/helpers/services/excel-file.service";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "wms-transfer-order-list",
    templateUrl: "../templates/list.component.html",
    styleUrls: ["../styles/transfer-order-form.component.scss"],
  })
  export class TransferOrderListComponent extends BaseComponent {
    constructor(injector: Injector,
        private activeRoute: ActivatedRoute,private exporterService: ExporterService,private envUrl: EnvironmentUrlService,private http: HttpClient) {
        super(injector);
  }
  ngOnInit() {
    // this.addFormValidations();
    // this.dropdownSettings();
  
    // this.getCustomerKeyPair();
    
  }
  redirectToCreateTransferOrder(){
    this.router.navigate([this.routesList.TRANSFER_ORDER_CREATE]);
  }
}