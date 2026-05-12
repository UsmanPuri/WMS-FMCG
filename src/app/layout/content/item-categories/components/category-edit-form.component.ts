import { Component, Injector, OnInit, Input } from "@angular/core";
import { ValidatorFn, Validators, FormGroup } from "@angular/forms";

import {  ItemCategory } from "../models/ItemCategory";
import {  ItemCategoryService } from "../services/item-category.service";
import { BaseComponent } from "src/app/helpers/components/base.component";
import { ActivatedRoute } from "@angular/router";
import { DropdownListDto } from "src/app/helpers/models/DropdownListDto";


@Component({
  selector: "wms-category-edit-form",
  templateUrl: "../templates/category-edit-form.component.html",
  styleUrls: ["../styles/item-form.component.scss"],
})
export class CategoryEditFormComponent extends BaseComponent {
  customerDropdownSettings = {};

  status: boolean;
  category: ItemCategory;
  customerKeyPair: DropdownListDto[];
  selectedCustomer={};
  selectedCustomerLastItem: ItemCategory;

  constructor(injector: Injector, private _itemCategoryService: ItemCategoryService,
    private activeRoute: ActivatedRoute) {
    super(injector);
  }

  ngOnInit() {
    this.addFormValidations();
    this.getById();
  }


  private getById() {
    let categoryId: string = this.activeRoute.snapshot.params['Id'];
    if(categoryId){
      let customerByIdUrl: string = this.apiConstant.ITEM_CATEGORY_GET_BY_ID + `${categoryId}`;
      this._itemCategoryService.getData(customerByIdUrl)
        .subscribe(res => {
          this.category = res as ItemCategory;
         
          this.formGroup.patchValue(this.category);
        },
          (error) => {
            this.errorHandler.handleError(error);
            this.errorMessage = this.errorHandler.errorMessage;
          })
    }
  }

  updateItemCategory(formValue){
    if (this.formGroup.valid) {
      this.executeItemCategoryUpdate(formValue);
    }
  }

  private executeItemCategoryUpdate(formValue) {
    let category: ItemCategory = {
     
      Name: formValue.Name,
      Description: formValue.Description,
      LastModifiedBy: this.localStorageService.getUserId(),
      CompanyId: this.localStorageService.getCompanyId(),
      BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    }

    let apiUrl = this.apiConstant.ITEM_CATEGORY_UPDATE+`/${this.category.ItemId}`;
    this._itemCategoryService.update(apiUrl, category)
      .subscribe(res => {
        this.showToastrSuccess("Item Category Updated successfully");
        setTimeout(() => {
          this.redirectToItemCategoriesList();
        }, 2000);
      },
        (error => {
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
    this.addFormControlWithValidations("ItemCategoryCode",[]);
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


  redirectToItemCategoriesList() {
    this.router.navigate([this.routesList.ITEM_CATEGORY_LISTING]);
  }

}
