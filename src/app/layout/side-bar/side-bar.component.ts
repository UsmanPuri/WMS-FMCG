import { Component, OnInit, Input, Injector } from '@angular/core';
import { ModuleForm } from '../../helpers/models/ModuleForm';
import * as CONST_LIST from "../../helpers/constants/apis-list";
import { DashboardService } from '../content/dashboard/services/dashboard.service';
import { ErrorHandlerService } from "src/app/helpers/services/error-handler.service";
import { LocalStorageService } from '../../helpers/services/local-storage.service';
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent extends BaseComponent implements OnInit {

 localStorageService: LocalStorageService;
 // public constantList = CONST_LIST;
  public moduleFormsSettup: ModuleForm[];
  public moduleFormsDashboard: ModuleForm[];
  public moduleFormsOperation: ModuleForm[];
  public moduleFormsTender: ModuleForm[];
  user:any;
  public errorMessage: string = '';
  public moduleFormsOutBound: ModuleForm[];

  constructor(injector: Injector,private _dashboardService: DashboardService) {
      super(injector);
     }

  ngOnInit() {
    this.user = this.localStorageService.get("user");
    // console.log("User")
    // console.log(this.user)
    this.getAllModuleForms();
    $(document).ready(() => {
      const trees: any = $('[data-widget="tree"]');
      trees.tree();
    });
 
  }

  getAllModuleForms() {
    //debugger
    let apiAddress: string = this.apiConstant.MODULE_FORM_GET;
    this._dashboardService.getAll(apiAddress,this.user.RoleId)
      .subscribe(res => {
        this.moduleFormsSettup = res as ModuleForm[];
        this.moduleFormsOutBound =this.moduleFormsSettup.filter(x=>x.moduleCategoryId == 6053);
        this.moduleFormsTender =this.moduleFormsSettup.filter(x=>x.moduleCategoryId == 6051);
        this.moduleFormsDashboard = this.moduleFormsSettup.filter(x=>x.moduleCategoryId == 6050); 
        this.moduleFormsOperation =this.moduleFormsSettup.filter(x=>x.moduleCategoryId == 6049);
        this.moduleFormsSettup =this.moduleFormsSettup.filter(x=>x.moduleCategoryId == 6048);
   //debugger
      },
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
  }
}

