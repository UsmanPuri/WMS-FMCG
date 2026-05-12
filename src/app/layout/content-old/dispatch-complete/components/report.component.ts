import { Component, OnInit, Input,  Injector} from '@angular/core';
import { Dispatch } from '../models/Dispatch';
import { DispatchCompleteService } from "../services/dispatch-complete.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-report',
  templateUrl: '../templates/report.component.html',
  styleUrls: ["../styles/dispatch-complete-form.component.scss"]
})
export class ReportComponent extends BaseComponent {

  public dispatchList: Dispatch[];
  public dispatchListPending: Dispatch[];
  public dispatchListCompleted: Dispatch[];
  public dispatchListCancel: Dispatch[];

  constructor(injector: Injector, private _dispatchService: DispatchCompleteService,
   private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.getAllCompletedDispatches()
  }

  getAllCompletedDispatches() {
    let companyBusinessUnitInfo = {
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }
    let apiAddress: string = this.apiConstant.DISPATCH_LIST;
    this._dispatchService.getAll(apiAddress, companyBusinessUnitInfo)
      .subscribe(res => {
        this.dispatchList = res as Dispatch[];
        console.log("dispatch List : ", this.dispatchList)


        

      },
      (error) => {
        this.ngxService.stop();
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
  }

  idstribution() {
    this.dispatchListCompleted = this.dispatchList.filter(x => x.IsCompleted === true && x.AML_PickupOrder.StatusId === 0 && x.AML_PickupOrder.IsDeleted === false);
  }

}
