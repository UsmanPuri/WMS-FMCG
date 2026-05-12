import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import { ItemBrand } from "../models/ItemBrand";
import { ItemBrandService } from "../services/item-brand.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: "wms-brand-edit-form",
  templateUrl: "../templates/brand-edit-form.component.html",
  styleUrls: ["../styles/item-form.component.scss"],
})
export class BrandEditFormComponent extends BaseComponent {
  customerDropdownSettings = {};
  categoryDropdownSettings = {};

  status: boolean;
  brand: ItemBrand;
  customerKeyPair: DropdownListDto[];
  categoryKeyPair: DropdownListDto[]=[];
  categoryObjToPushInCategoryKeyPair: DropdownListDto;
  categoryTempList:any[]=[];
  selectedCustomer = {};
  selectedCategory = {};
  selectedCustomerLastItem: ItemBrand;
  


  constructor(injector: Injector, private _itemBrandService: ItemBrandService,
    private activeRoute: ActivatedRoute, private ngxService: NgxUiLoaderService) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.getById();
   
  }

  private getById() {
    let brandId: string = this.activeRoute.snapshot.params['Id'];
    if(brandId){
      let customerByIdUrl: string = this.apiConstant.ITEM_CATEGORY_GET_BY_ID + `${brandId}`;
      this._itemBrandService.getData(customerByIdUrl)
        .subscribe(res => {
          this.brand = res as ItemBrand;
         
          this.formGroup.patchValue(this.brand);
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
  }


  updateBrand(formValue){
    if (this.formGroup.valid) {
      this.executeItemBrandUpdate(formValue);
    }
  }

  private executeItemBrandUpdate(formValue) {
    let brand: ItemBrand = {
     
      Name: formValue.Name,
      Description: formValue.Description,
      ShelfLife: formValue.ShelfLife,
      LastModifiedBy: this.localStorageService.getUserId(),
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }

    let apiUrl = this.apiConstant.ITEM_CATEGORY_UPDATE+`/${this.brand.ItemId}`;
    this.ngxService.start();
    this._itemBrandService.update(apiUrl, brand)
      .subscribe(res => {
        this.showToastrSuccess("Item Brand Updated successfully");
        setTimeout(() => {
          this.redirectToItemBrandList();
        }, 2000);
        this.ngxService.stop();
      },
        (error => {
          this.ngxService.stop();
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }

  /**
* The following method is used to add the form validations
*/
  addFormValidations(): void {
    const requiredValidation: ValidatorFn[] = [
      Validators.required,
    ];

    this.addFormControlWithValidations("Name", requiredValidation);
    this.addFormControlWithValidations("Description", []);
    this.addFormControlWithValidations("ItemBrandCode", []);
    this.addFormControlWithValidations("ShelfLife",requiredValidation);
  }

 



  public validateControl(controlName: string) {
    if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
      return true;

    return false;
  }





  /**
   * The following method is used
   * @param {string} formElement
   * @returns {string}
   */
  getErrorMessage(formElement: string): string {
    // if any errors detected else ignore
    const control = this.formGroup.get(formElement);
    if (control.errors) {
      if (control.errors.required) {
        return "Its required";
      } else if (control.errors.pattern) {
        return "Invalid entry";
      } else if (control.errors.minlength) {
        return "Invalid length";
      } else if (control.errors.maxlength) {
        return "Invalid length";
      }
    } else {
      return "";
    }
  }


  redirectToItemBrandList() {
    this.router.navigate([this.routesList.ITEM_BRAND_LISTING]);
  }

}
