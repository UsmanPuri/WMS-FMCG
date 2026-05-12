import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators } from "@angular/forms";
import { bootstrap } from "node_modules/bootstrap"
import { Dashboard } from "../models/Dashboard";
import { DashboardService } from "../services/dashboard.service";
import { ModuleForm } from "../models/ModuleForm";
import * as CONST_LIST from "../../../../helpers/constants/apis-list";
import { ErrorHandlerService } from "src/app/helpers/services/error-handler.service";

@Component({
  selector: "wms-dashboard-form",
  templateUrl: "../templates/form.component.html",
  styleUrls: ["../styles/dashboard-form.component.scss"],
})
export class DashboardFormComponent {
  public constantList = CONST_LIST;
  public moduleForms: ModuleForm[];
  public errorMessage: string = '';

  constructor(private _dashboardService: DashboardService
    , private errorHandler: ErrorHandlerService) {
  }

  ngOnInit() {
    debugger
    let model = localStorage.getItem('modelData');
debugger
    if (model != 'model') {
      $('#CompanyBusinessUnitModal').show();
    }
  }


}
