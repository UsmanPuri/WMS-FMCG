(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-customers-customers-module"],{

/***/ "./src/app/layout/content/customers/components/customer-edit-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/content/customers/components/customer-edit-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomerEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditFormComponent", function() { return CustomerEditFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/layout/content/customers/services/customer.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerEditFormComponent = /** @class */ (function (_super) {
    __extends(CustomerEditFormComponent, _super);
    function CustomerEditFormComponent(injector, _customerService, activeRoute, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._customerService = _customerService;
        _this.activeRoute = activeRoute;
        _this.ngxService = ngxService;
        _this.customerBusinessLineKeyPair = [];
        _this.regionDropdownSettings = {};
        _this.cityDropdownSettings = {};
        return _this;
    }
    CustomerEditFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.getCustomerBusinessLineKeyPair();
        this.getRegionKeyPair();
        this.getCustomerById();
        this.regionDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.cityDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    CustomerEditFormComponent.prototype.getCustomerBusinessLineKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiAddress = this.apiConstant.CUSTOMER_BUSINESSLINE_KEYPAIR;
        this._customerService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerBusinessLineKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    CustomerEditFormComponent.prototype.getRegionKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiAddress = this.apiConstant.REGION_KEYPAIR;
        this._customerService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.regionKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    CustomerEditFormComponent.prototype.getCityKeyPair = function (selectedProject, triggerdOnClick) {
        var _this = this;
        this.selectedRegionId = selectedProject.Value;
        console.log(selectedProject);
        var companyBusinessUnitInfo = {
            RegionId: selectedProject.Value
        };
        var apiAddress = this.apiConstant.CITY_GET_BY_ID_REGION;
        this._customerService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.cityKeyPair = res;
            console.log(_this.cityKeyPair);
            _this.formGroup.get("CityId").setValue('');
            if (!triggerdOnClick) {
                _this.selectedCityInfo = [{
                        "Text": _this.getCityNameFromCityKeyPair(_this.customer.CityId),
                        "Value": _this.customer.CityId.toString()
                    }];
                _this.selectedCityId = _this.customer.CityId;
            }
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    CustomerEditFormComponent.prototype.getRegionNameFromRegionKeyPair = function (regionId) {
        var model = this.regionKeyPair
            .filter(function (x) { return x.Value == regionId; });
        console.log(model);
        if (model && model[0] && model[0].Text) {
            return model[0].Text;
        }
        else {
            return 0;
        }
    };
    CustomerEditFormComponent.prototype.getCityNameFromCityKeyPair = function (cityId) {
        var model = this.cityKeyPair
            .filter(function (x) { return x.Value == cityId; });
        console.log(model);
        if (model && model[0] && model[0].Text) {
            return model[0].Text;
        }
        else {
            return 0;
        }
    };
    CustomerEditFormComponent.prototype.getCustomerById = function () {
        var _this = this;
        var customerId = this.activeRoute.snapshot.params['Id'];
        if (customerId) {
            var customerByIdUrl = this.apiConstant.CUSTOMER_GET_ONE + ("" + customerId);
            this._customerService.getData(customerByIdUrl)
                .subscribe(function (res) {
                _this.customer = res;
                _this.getCityKeyPair({ Value: _this.customer.RegionId }, false);
                _this.status = _this.customer.StatusId == "1" ? true : false;
                _this.selectedRegionInfo = [{
                        "Text": _this.getRegionNameFromRegionKeyPair(_this.customer.RegionId),
                        "Value": _this.customer.RegionId.toString()
                    }];
                _this.selectedRegionId = _this.customer.RegionId;
                debugger;
                _this.formGroup.patchValue({
                    RegionId: _this.selectedRegionInfo,
                    CityId: _this.selectedCityInfo,
                    Name: _this.customer.Name,
                    Type: _this.customer.Type,
                    CustomerBusinessLineId: _this.customer.CustomerBusinessLineId,
                    CNIC: _this.customer.CNIC,
                    ContactPerson: _this.customer.ContactPerson,
                    Mobile: _this.customer.Mobile,
                    Phone: _this.customer.Phone,
                    FaxNo: _this.customer.FaxNo,
                    AccountNo: _this.customer.AccountNo,
                    Email: _this.customer.Email,
                    CreditLimit: _this.customer.CreditLimit,
                    NTN: _this.customer.NTN,
                    STRN: _this.customer.STRN,
                    Country: _this.customer.Country,
                    Address: _this.customer.Address,
                    Discount: _this.customer.Discount,
                    Abbreviation: _this.customer.Abbreviation
                });
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    CustomerEditFormComponent.prototype.onStatusChange = function (eve) {
        this.status = eve;
    };
    /**
  * The following method is used to add the form validations
  */
    CustomerEditFormComponent.prototype.addFormValidations = function () {
        var nameValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
        ];
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ];
        var lengthValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)
        ];
        this.addFormControlWithValidations("Name", nameValidation);
        this.addFormControlWithValidations("Discount");
        this.addFormControlWithValidations("Type");
        this.addFormControlWithValidations("CustomerBusinessLineId", []);
        this.addFormControlWithValidations("ContactPerson", []);
        this.addFormControlWithValidations("Phone", []);
        this.addFormControlWithValidations("Mobile", []);
        this.addFormControlWithValidations("Email", []);
        this.addFormControlWithValidations("FaxNo");
        this.addFormControlWithValidations("AccountNo", []);
        this.addFormControlWithValidations("NTN", []);
        this.addFormControlWithValidations("STRN", []);
        this.addFormControlWithValidations("CNIC", []);
        this.addFormControlWithValidations("AccountCode", []);
        this.addFormControlWithValidations("Remarks", []);
        this.addFormControlWithValidations("Address", []);
        this.addFormControlWithValidations("CityId", requiredValidation);
        this.addFormControlWithValidations("State", []);
        this.addFormControlWithValidations("RegionId", []);
        this.addFormControlWithValidations("Country");
        this.addFormControlWithValidations("CreditLimit", []);
        this.addFormControlWithValidations("StatusId", []);
        this.addFormControlWithValidations("Abbreviation", lengthValidation);
        this.formGroup.get("Country").setValue("Pakistan");
    };
    CustomerEditFormComponent.prototype.getCityValue = function (item) {
        this.selectedCityId = {
            Value: item.Value,
            Text: item.Text
        };
    };
    CustomerEditFormComponent.prototype.updateCustomer = function (customerFormValue) {
        if (this.formGroup.valid) {
            this.executeCustomerUpdate(customerFormValue);
        }
    };
    CustomerEditFormComponent.prototype.executeCustomerUpdate = function (customerFormValue) {
        var _this = this;
        this.ngxService.start();
        var customer = {
            StatusId: this.status ? "1" : "0",
            RegionId: this.selectedRegionId,
            ZoneId: customerFormValue.ZoneId,
            Name: customerFormValue.Name,
            Discount: customerFormValue.Discount,
            Type: customerFormValue.Type,
            ContactPerson: customerFormValue.ContactPerson,
            Phone: customerFormValue.Phone,
            Mobile: customerFormValue.Mobile,
            Email: customerFormValue.Email,
            FaxNo: customerFormValue.FaxNo,
            AccountNo: customerFormValue.AccountNo,
            NTN: customerFormValue.NTN,
            STRN: customerFormValue.STRN,
            CNIC: customerFormValue.CNIC,
            AccountCode: customerFormValue.AccountCode,
            RegDate: customerFormValue.RegDate,
            Remarks: customerFormValue.Remarks,
            Address: customerFormValue.Address,
            CityId: this.selectedCityId.Value,
            State: customerFormValue.State,
            Country: customerFormValue.Country,
            CreditLimit: customerFormValue.CreditLimit,
            CustomerBusinessLineId: customerFormValue.CustomerBusinessLineId,
            Abbreviation: customerFormValue.Abbreviation,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId()
        };
        var apiUrl = this.apiConstant.CUSTOMER_UPDATE + ("/" + this.customer.Id);
        this._customerService.update(apiUrl, customer)
            .subscribe(function (res) {
            _this.showToastrSuccess("Customer updated successfully");
            setTimeout(function () {
                _this.redirectToCustomerList();
            }, 2000);
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    CustomerEditFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    CustomerEditFormComponent.prototype.getErrorMessage = function (formElement) {
        // if any errors detected else ignore
        var control = this.formGroup.get(formElement);
        if (control.errors) {
            if (control.errors.required) {
                return "Its required";
            }
            else if (control.errors.pattern) {
                return "Invalid entry";
            }
            else if (control.errors.minlength) {
                return "Invalid length";
            }
            else if (control.errors.maxlength) {
                return "Invalid length";
            }
        }
        else {
            return "";
        }
    };
    CustomerEditFormComponent.prototype.redirectToCustomerList = function () {
        this.router.navigate([this.routesList.CUSTOMER_LISTING]);
    };
    CustomerEditFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-edit-customer-form",
            template: __webpack_require__(/*! ../templates/edit-form.component.html */ "./src/app/layout/content/customers/templates/edit-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/customer-form.component.scss */ "./src/app/layout/content/customers/styles/customer-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"]])
    ], CustomerEditFormComponent);
    return CustomerEditFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/customers/components/customer-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/content/customers/components/customer-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: CustomerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function() { return CustomerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/layout/content/customers/services/customer.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerFormComponent = /** @class */ (function (_super) {
    __extends(CustomerFormComponent, _super);
    function CustomerFormComponent(injector, _customerService, activeRoute) {
        var _this = _super.call(this, injector) || this;
        _this._customerService = _customerService;
        _this.activeRoute = activeRoute;
        _this.provinceDropdownSettings = {};
        _this.regionDropdownSettings = {};
        _this.zoneDropdownSettings = {};
        _this.cityDropdownSettings = {};
        _this.customerBusinessLineKeyPair = [];
        _this.provinceValue = {};
        return _this;
    }
    CustomerFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.getOwnerById();
        this.getCustomerBusinessLineKeyPair();
        this.getProvinceKeyPair();
        //this.getCityKeyPair(this.formGroup.value.RegionId);
        this.provinceDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.regionDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.zoneDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.cityDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    CustomerFormComponent.prototype.getProvinceKeyPair = function () {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiAddress = this.apiConstant.PROVINCE_KEYPAIR;
        this._customerService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.provencesKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    CustomerFormComponent.prototype.getCustomerBusinessLineKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiAddress = this.apiConstant.CUSTOMER_BUSINESSLINE_KEYPAIR;
        this._customerService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerBusinessLineKeyPair = res;
            _this.formGroup.patchValue({
                CustomerBusinessLineId: 2
            });
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    CustomerFormComponent.prototype.getRegionKeyPair = function (selectedProject) {
        var _this = this;
        var companyBusinessUnitInfo = {
            ProvinceId: this.provinceValue
        };
        var apiAddress = this.apiConstant.REGION_GET_BY_ID_PROVINCE;
        this._customerService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.regionKeyPair = res;
            _this.formGroup.get("RegionId").setValue('');
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    CustomerFormComponent.prototype.getCityKeyPair = function () {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            ProvinceId: this.provinceValue,
            RegionId: this.selectedRegionId,
            ZoneId: this.selectedZoneId
        };
        var apiAddress = this.apiConstant.CITY_GET_BY_ID_REGION;
        this._customerService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.cityKeyPair = res;
            _this.formGroup.get("CityId").setValue('');
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    CustomerFormComponent.prototype.getOwnerById = function () {
        var _this = this;
        var customerId = this.activeRoute.snapshot.params['Id'];
        if (customerId) {
            var customerByIdUrl = this.apiConstant.CUSTOMER_GET_ONE + ("" + customerId);
            this._customerService.getData(customerByIdUrl)
                .subscribe(function (res) {
                _this.customer = res;
                _this.formGroup.patchValue(_this.customer);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    CustomerFormComponent.prototype.getProvinceValue = function (item) {
        this.provinceValue = item.Value;
        this.getRegionKeyPair(item.Value);
    };
    CustomerFormComponent.prototype.getCityValue = function (item) {
        this.selectedCityId = {
            Value: item.Value,
            Text: item.Text
        };
    };
    CustomerFormComponent.prototype.getRegionValue = function (item) {
        this.selectedRegionId = item.Value;
        this.formGroup.get("ZoneId").setValue('');
        this.getZoneKeyPair();
    };
    CustomerFormComponent.prototype.getZoneValue = function (item) {
        this.selectedZoneId = item.Value;
        this.formGroup.get("CityId").setValue('');
        this.getCityKeyPair();
    };
    CustomerFormComponent.prototype.getZoneKeyPair = function () {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            ProvinceId: this.provinceValue,
            RegionId: this.selectedRegionId
        };
        var apiAddress = this.apiConstant.ZONE_GET_BY_ID_REGION;
        this._customerService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.zoneKeyPair = res;
            _this.formGroup.get("ZoneId").setValue('');
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    /**
  * The following method is used to add the form validations
  */
    CustomerFormComponent.prototype.addFormValidations = function () {
        var nameValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
        ];
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ];
        var lengthValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)
        ];
        this.addFormControlWithValidations('Name', nameValidation);
        this.addFormControlWithValidations('Discount');
        this.addFormControlWithValidations('Type');
        this.addFormControlWithValidations('CustomerBusinessLineId', []);
        this.addFormControlWithValidations('ContactPerson', []);
        this.addFormControlWithValidations('Phone', []);
        this.addFormControlWithValidations('Mobile', []);
        this.addFormControlWithValidations('Email', []);
        this.addFormControlWithValidations('FaxNo');
        this.addFormControlWithValidations('AccountNo', []);
        this.addFormControlWithValidations('NTN', []);
        this.addFormControlWithValidations('STRN', []);
        this.addFormControlWithValidations('CNIC', []);
        this.addFormControlWithValidations('AccountCode', []);
        this.addFormControlWithValidations('Remarks', []);
        this.addFormControlWithValidations('Address', []);
        this.addFormControlWithValidations('CityId', requiredValidation);
        this.addFormControlWithValidations('State', []);
        this.addFormControlWithValidations('RegionId', requiredValidation);
        this.addFormControlWithValidations("ProvinceId", requiredValidation);
        this.addFormControlWithValidations("ZoneId", requiredValidation);
        this.addFormControlWithValidations('Country', []);
        this.addFormControlWithValidations('CreditLimit', []);
        this.addFormControlWithValidations('StatusId', []);
        this.addFormControlWithValidations('Abbreviation', lengthValidation);
        this.formGroup.get("Country").setValue("Paskistan");
    };
    CustomerFormComponent.prototype.createCustomer = function (customerFormValue) {
        debugger;
        if (this.formGroup.valid) {
            this.executeCustomerCreation(customerFormValue);
        }
    };
    CustomerFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    CustomerFormComponent.prototype.getErrorMessage = function (formElement) {
        // if any errors detected else ignore
        var control = this.formGroup.get(formElement);
        if (control.errors) {
            if (control.errors.required) {
                return 'Its required';
            }
            else if (control.errors.pattern) {
                return 'Invalid entry';
            }
            else if (control.errors.minlength) {
                return 'Invalid length';
            }
            else if (control.errors.maxlength) {
                return 'Invalid length';
            }
        }
        else {
            return '';
        }
    };
    CustomerFormComponent.prototype.executeCustomerCreation = function (customerFormValue) {
        var _this = this;
        debugger;
        if (customerFormValue.ZoneId == undefined) {
            customerFormValue.ZoneId = "";
        }
        if (customerFormValue.RegDate == undefined) {
            customerFormValue.RegDate = "";
        }
        if (this.selectedCityId == undefined) {
            this.selectedCityId = "";
        }
        var customer = {
            RegionId: this.selectedRegionId,
            ZoneId: this.selectedZoneId,
            Name: customerFormValue.Name,
            Discount: customerFormValue.Discount,
            Type: customerFormValue.Type,
            ContactPerson: customerFormValue.ContactPerson,
            Phone: customerFormValue.Phone,
            Mobile: customerFormValue.Mobile,
            Email: customerFormValue.Email,
            FaxNo: customerFormValue.FaxNo,
            AccountNo: customerFormValue.AccountNo,
            NTN: customerFormValue.NTN,
            STRN: customerFormValue.STRN,
            CNIC: customerFormValue.CNIC,
            AccountCode: customerFormValue.AccountCode,
            RegDate: customerFormValue.RegDate,
            Remarks: customerFormValue.Remarks,
            Address: customerFormValue.Address,
            CityId: this.selectedCityId.Value,
            State: customerFormValue.State,
            Country: customerFormValue.Country,
            CreditLimit: customerFormValue.CreditLimit,
            CustomerBusinessLineId: customerFormValue.CustomerBusinessLineId,
            Abbreviation: customerFormValue.Abbreviation,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId()
        };
        var apiUrl = this.apiConstant.CUSTOMER_CREATE;
        this._customerService.create(apiUrl, customer)
            .subscribe(function (res) {
            _this.showToastrSuccess('Customer created successfully');
            setTimeout(function () {
                _this.setValueNull();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    CustomerFormComponent.prototype.redirectToCustomerList = function () {
        this.router.navigate([this.routesList.CUSTOMER_LISTING]);
    };
    CustomerFormComponent.prototype.setValueNull = function () {
        this.formGroup.get("RegionId").setValue('');
        this.formGroup.get("StatusId").setValue("");
        this.formGroup.get("Name").setValue("");
        this.formGroup.get("Type").setValue("");
        this.formGroup.get("Discount").setValue("");
        this.formGroup.get("ContactPerson").setValue("");
        this.formGroup.get("Phone").setValue("");
        this.formGroup.get("Mobile").setValue("");
        this.formGroup.get("Email").setValue("");
        this.formGroup.get("FaxNo").setValue("");
        this.formGroup.get("AccountNo").setValue("");
        this.formGroup.get("NTN").setValue("");
        this.formGroup.get("STRN").setValue("");
        this.formGroup.get("CNIC").setValue("");
        this.formGroup.get("AccountCode").setValue("");
        this.formGroup.get("Remarks").setValue("");
        this.formGroup.get("Address").setValue("");
        this.formGroup.get("CityId").setValue('');
        this.formGroup.get("State").setValue("");
        this.formGroup.get("Country").setValue("");
        this.formGroup.get("CreditLimit").setValue("");
        this.formGroup.get("CustomerBusinessLineId").setValue("");
        this.formGroup.get("Abbreviation").setValue("");
    };
    CustomerFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'wms-customer-form',
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/customers/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/customer-form.component.scss */ "./src/app/layout/content/customers/styles/customer-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CustomerFormComponent);
    return CustomerFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/customers/components/customer-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/content/customers/components/customer-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/layout/content/customers/services/customer.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _dashboard_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dashboard/services/dashboard.service */ "./src/app/layout/content/dashboard/services/dashboard.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CustomerListComponent = /** @class */ (function (_super) {
    __extends(CustomerListComponent, _super);
    function CustomerListComponent(injector, _dashboardService, chRef, exporterService, _customerService, modalService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._dashboardService = _dashboardService;
        _this.chRef = chRef;
        _this.exporterService = exporterService;
        _this._customerService = _customerService;
        _this.modalService = modalService;
        _this.ngxService = ngxService;
        //exporterService: any;
        _this.CustomerListToPost = [];
        return _this;
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        this.getAllModuleCustomers();
    };
    CustomerListComponent.prototype.getAllModuleCustomers = function () {
        var _this = this;
        this.ngxService.start();
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId(),
            IsTransferOrderForm: false
        };
        var apiAddress = this.apiConstant.CUSTOMER_LIST;
        this._dashboardService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerList = res;
            _this.chRef.detectChanges();
            _this.chRef.reattach();
            // Now you can use jQuery DataTables :
            var table = jquery__WEBPACK_IMPORTED_MODULE_4__('table');
            // this.dataTable = table.DataTable();
            _this.dataTable = table.DataTable({
                lengthMenu: [5, 10, 50, 100, 500],
                "iDisplayLength": 500
            });
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    CustomerListComponent.prototype.Edit = function (customerId) {
        var updateUrl = this.routesList.CUSTOMER_EDIT + ("/" + customerId);
        this.router.navigate([updateUrl]);
    };
    CustomerListComponent.prototype.printDiv = function () {
        var printContents = document.getElementById('print-index-invoice').innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    };
    CustomerListComponent.prototype.exportServiceAsExcel = function () {
        var _this = this;
        this.customerList.forEach(function (element) {
            var customerObj = {
                Name: element.Name,
                Address: element.Address,
                Abbrevation: element.Abbreviation,
                ContactPerson: element.ContactPerson,
                Mobile: element.Mobile,
                Email: element.Email,
                CustomerType: element.Type
            };
            _this.CustomerListToPost.push(customerObj);
        });
        this.exporterService.exportToExcel(this.CustomerListToPost, 'CustomerList Data');
        this.CustomerListToPost = [];
    };
    CustomerListComponent.prototype.Delete = function (Id) {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CustomerId: Id,
            Type: "customer"
        };
        var apiUrl = this.apiConstant.CUSTOMER_DELETE;
        this._customerService.create(apiUrl, companyBusinessUnitInfo)
            .subscribe(function (res) {
            //debugger
            var isDeleted = res;
            if (isDeleted) {
                _this.showToastrSuccess('Customer deleted successfully');
            }
            else {
                _this.showToastrWarning('Customer Can not be deleted');
            }
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    CustomerListComponent.prototype.openModal = function () {
        this.modalRef = this.modalService.open(this.AllModal, {
            size: "lg",
            modalClass: '',
            hideCloseButton: true,
            centered: false,
            backdrop: true,
            animation: true,
            keyboard: false,
            closeOnOutsideClick: true,
            backdropClass: "modal-backdrop",
            windowClass: 'modal-xl'
        });
    };
    CustomerListComponent.prototype.redirectToCreateCustomer = function () {
        this.router.navigate([this.routesList.CUSTOMER_CREATE]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('AllModal'),
        __metadata("design:type", Object)
    ], CustomerListComponent.prototype, "AllModal", void 0);
    CustomerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-customer-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/customers/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/customer-form.component.scss */ "./src/app/layout/content/customers/styles/customer-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _dashboard_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_7__["ExporterService"],
            _services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"], ngb_modal__WEBPACK_IMPORTED_MODULE_8__["ModalManager"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderService"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/customers/customers.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/content/customers/customers.module.ts ***!
  \**************************************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/customer.service */ "./src/app/layout/content/customers/services/customer.service.ts");
/* harmony import */ var _components_customer_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/customer-form.component */ "./src/app/layout/content/customers/components/customer-form.component.ts");
/* harmony import */ var _components_customer_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/customer-list.component */ "./src/app/layout/content/customers/components/customer-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_customer_edit_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/customer-edit-form.component */ "./src/app/layout/content/customers/components/customer-edit-form.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: _components_customer_list_component__WEBPACK_IMPORTED_MODULE_6__["CustomerListComponent"],
            },
            {
                path: "create",
                component: _components_customer_form_component__WEBPACK_IMPORTED_MODULE_5__["CustomerFormComponent"],
            }, {
                path: "edit/:Id",
                component: _components_customer_edit_form_component__WEBPACK_IMPORTED_MODULE_8__["CustomerEditFormComponent"],
            }, {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_9__["NgxMaskModule"].forRoot(),
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_12__["NgxPrintModule"],
                ngb_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_14__["NgxUiLoaderModule"]
            ],
            declarations: [
                _components_customer_list_component__WEBPACK_IMPORTED_MODULE_6__["CustomerListComponent"], _components_customer_form_component__WEBPACK_IMPORTED_MODULE_5__["CustomerFormComponent"], _components_customer_edit_form_component__WEBPACK_IMPORTED_MODULE_8__["CustomerEditFormComponent"]
            ],
            providers: [
                _services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"],
                src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_11__["ExporterService"]
            ],
            entryComponents: [
                _components_customer_form_component__WEBPACK_IMPORTED_MODULE_5__["CustomerFormComponent"]
            ]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ }),

/***/ "./src/app/layout/content/customers/services/customer.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/content/customers/services/customer.service.ts ***!
  \***********************************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/services/repository.service */ "./src/app/helpers/services/repository.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerService = /** @class */ (function (_super) {
    __extends(CustomerService, _super);
    function CustomerService(injector) {
        return _super.call(this, injector) || this;
    }
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], CustomerService);
    return CustomerService;
}(src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]));



/***/ }),

/***/ "./src/app/layout/content/customers/styles/customer-form.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/layout/content/customers/styles/customer-form.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block {\n  color: red; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: 20px !important;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.toggle-label {\n  margin-top: 10px;\n  margin-right: -10px;\n  color: green;\n  font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/layout/content/customers/templates/edit-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/content/customers/templates/edit-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          CUSTOMER EDIT\r\n      \r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.CUSTOMER_CREATE]\">Customers</a></li>\r\n          <li class=\"active\">Edit</li>\r\n        </ol>\r\n      </section>\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"updateCustomer(formGroup.value)\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"pull-left\">\r\n                  <div class=\"col-md-6 toggle-label \">\r\n                      <span *ngIf=\"status == true\">\r\n                        <b>Active</b>\r\n                      </span>\r\n                      <span *ngIf=\"status == false\">\r\n                        <b>InActive</b>\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <ui-switch switchColor=\"#fcfcfc\" [checked]=\"status == true\" (change)=\"onStatusChange($event)\"></ui-switch>\r\n                    </div>\r\n              </div>\r\n              \r\n              <!-- <h3 class=\"box-title\">Quick Example</h3> -->\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"pull-right\">\r\n                  <button type=\"button\" (click)=\"redirectToCustomerList()\" class=\"btn-wms\">Customer Listing</button>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Customer Name</label>\r\n                <input type=\"text\" readonly formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter Customer name\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                  {{getErrorMessage('Name')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Customer type</label>\r\n                <select formControlName=\"Type\" class=\"form-control input-sm\">\r\n                  <option>Select one</option>\r\n                  <option *ngFor=\"let custType of constantList.CUSTOMER_TYPES\" [value]=\"custType.value\">\r\n                    {{custType.name}}\r\n                  </option>\r\n                </select>\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Type.invalid\">\r\n                  {{getErrorMessage('Type')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Business Line</label>\r\n                  <select class=\"form-control input-sm\" formControlName=\"CustomerBusinessLineId\" disabled=\"disabled\">\r\n                    <option selected value=\"\">Select one</option>\r\n                    <option *ngFor=\"let custBusinessLine of customerBusinessLineKeyPair\"\r\n                      [value]=\"custBusinessLine.Value\">\r\n                      {{custBusinessLine.Text}}\r\n                    </option>\r\n                  </select>\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.CustomerBusinessLineId.invalid\">\r\n                    {{getErrorMessage('CustomerBusinessLineId')}}\r\n                  </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">CNIC No</label>\r\n                <input type='text' formControlName=\"CNIC\" class=\"form-control input-sm\" placeholder=\"Enter CNIC no\"  mask=\"00000-0000000-0\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.CNIC.invalid\">\r\n                  {{getErrorMessage('CNIC')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Contact Person</label>\r\n                <input type=\"text\" formControlName=\"ContactPerson\" class=\"form-control input-sm\"\r\n                  placeholder=\"Enter contact person name\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ContactPerson.invalid\">\r\n                  {{getErrorMessage('ContactPerson')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Mobile</label>\r\n                <input type='text' formControlName=\"Mobile\" class=\"form-control input-sm\" placeholder=\"Enter mobile no\"  mask=\"0000-0000000\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Mobile.invalid\">\r\n                  {{getErrorMessage('Mobile')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Landline</label>\r\n                <input type='text' formControlName=\"Phone\" class=\"form-control input-sm\" placeholder=\"Enter Phone no\"  mask=\"0000-0000000\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Phone.invalid\">\r\n                  {{getErrorMessage('Phone')}}\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Fax no</label>\r\n                <input type='text' formControlName=\"FaxNo\" class=\"form-control input-sm\" placeholder=\"Enter Fax no\"  mask=\"0000-0000000\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.FaxNo.invalid\">\r\n                  {{getErrorMessage('FaxNo')}}\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Account No/Remarks</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" formControlName=\"AccountNo\" placeholder=\"Enter account no\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.AccountNo.invalid\">\r\n                  {{getErrorMessage('AccountNo')}}\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Email</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" formControlName=\"Email\" placeholder=\"Enter Email id\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Email.invalid\">\r\n                  {{getErrorMessage('Email')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Credit Limit</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" formControlName=\"CreditLimit\" placeholder=\"Enter Credit limit\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.CreditLimit.invalid\">\r\n                  {{getErrorMessage('CreditLimit')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">NTN No</label>\r\n                <input type=\"text\" formControlName=\"NTN\" class=\"form-control input-sm\" placeholder=\"Enter NTN no\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.NTN.invalid\">\r\n                  {{getErrorMessage('NTN')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>STRN No</label>\r\n                <input type=\"text\" formControlName=\"STRN\" class=\"form-control input-sm\" placeholder=\"Enter STRN no\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.STRN.invalid\">\r\n                  {{getErrorMessage('STRN')}}\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Country</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" disabled=\"disabled\" formControlName=\"Country\"\r\n                  placeholder=\"Pakistan\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Country.invalid\">\r\n                  {{getErrorMessage('Country')}}\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n\r\n              <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Region</label>\r\n                   \r\n                    <ng-multiselect-dropdown  \r\n                    [placeholder]=\"'Select one'\"\r\n                    [data]=\"regionKeyPair\"\r\n                    [settings]=\"regionDropdownSettings\"\r\n                    formControlName=\"RegionId\"\r\n                    [(ngModel)]=\"selectedRegionInfo\"\r\n                    (onSelect)=\"getCityKeyPair($event,true)\">\r\n                  </ng-multiselect-dropdown>\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.RegionId.invalid\">\r\n                      {{getErrorMessage('RegionId')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>City</label>\r\n                     \r\n                      <ng-multiselect-dropdown  \r\n                      [placeholder]=\"'Select one'\"\r\n                      [data]=\"cityKeyPair\"\r\n                      [settings]=\"cityDropdownSettings\"\r\n                      formControlName=\"CityId\"\r\n                      [(ngModel)]=\"selectedCityInfo\"\r\n                      (onSelect)=\"getCityValue($event)\">\r\n                      \r\n                    </ng-multiselect-dropdown>\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.CityId.invalid\">\r\n                        {{getErrorMessage('CityId')}}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n            <div class=\"col-md-4\">\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Address</label>\r\n                <input type=\"text\" formControlName=\"Address\" class=\"form-control input-sm\" placeholder=\"Enter address\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Address.invalid\">\r\n                  {{getErrorMessage('Address')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Discount %</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" formControlName=\"Discount\" placeholder=\"Enter discount\">\r\n                <span *ngIf=\"formGroup.controls.Discount.invalid\">\r\n                  {{getErrorMessage('Discount')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Abbreviation</label>\r\n                  <input type=\"text\" class=\"form-control input-sm\" readonly minlength=\"3\" maxlength=\"3\" formControlName=\"Abbreviation\" placeholder=\"Enter Region no\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Abbreviation.invalid\">\r\n                    {{getErrorMessage('Abbreviation')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n               \r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                \r\n              </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"box-footer\">\r\n          <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Update</button>\r\n          \r\n        </div>\r\n      </div>\r\n    </form>\r\n    <ngx-ui-loader></ngx-ui-loader>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/layout/content/customers/templates/form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/layout/content/customers/templates/form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          CUSTOMER CREATE\r\n         \r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.CUSTOMER_CREATE]\">Customers</a></li>\r\n          <li class=\"active\">Create</li>\r\n        </ol>\r\n      </section>\r\n    <div col-md-12>\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createCustomer(formGroup.value)\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group  pull-right\">\r\n              <button type=\"button\" (click)=\"redirectToCustomerList()\" class=\"btn btn-wms-head\">Customer Listing</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Customer Name</label>\r\n                  <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter Customer name\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                    {{getErrorMessage('Name')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Customer type</label>\r\n                  <select formControlName=\"Type\" class=\"form-control input-sm\">\r\n                    <option selected value=\"\">Select one</option>\r\n                    <option *ngFor=\"let custType of constantList.CUSTOMER_TYPES\" [value]=\"custType.value\">\r\n                      {{custType.name}}\r\n                    </option>\r\n                  </select>\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Type.invalid\">\r\n                    {{getErrorMessage('Type')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Business Line</label>\r\n                  <select class=\"form-control input-sm\" formControlName=\"CustomerBusinessLineId\" disabled=\"disabled\">\r\n                    <option selected value=\"\">Select one</option>\r\n                    <option *ngFor=\"let custBusinessLine of customerBusinessLineKeyPair\"\r\n                      [value]=\"custBusinessLine.Value\">\r\n                      {{custBusinessLine.Text}}\r\n                    </option>\r\n                  </select>\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.CustomerBusinessLineId.invalid\">\r\n                    {{getErrorMessage('CustomerBusinessLineId')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\">CNIC No</label>\r\n                  <input type='text' formControlName=\"CNIC\" class=\"form-control input-sm\" placeholder=\"Ex. 35202-4846412-1\"  mask=\"00000-0000000-0\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.CNIC.invalid\">\r\n                    {{getErrorMessage('CNIC')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\">Contact Person</label>\r\n                  <input type=\"text\" formControlName=\"ContactPerson\" class=\"form-control input-sm\"\r\n                    placeholder=\"Enter contact person name\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ContactPerson.invalid\">\r\n                    {{getErrorMessage('ContactPerson')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n\r\n                  <label for=\"exampleInputPassword1\">Mobile</label>\r\n                  \r\n                     <input type='text' formControlName=\"Mobile\" class=\"form-control input-sm\" placeholder=\"Ex. 0320-4841304\"  mask=\"0000-0000000\">\r\n                  \r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Mobile.invalid\">\r\n                    {{getErrorMessage('Mobile')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Landline</label>\r\n                  <input type='text' formControlName=\"Phone\" class=\"form-control input-sm\" placeholder=\"Ex. 0423-4841304\"  mask=\"0000-0000000\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Phone.invalid\">\r\n                    {{getErrorMessage('Phone')}}\r\n                  </span>\r\n                </div>\r\n  \r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Fax no</label>\r\n                  <input type='text' formControlName=\"FaxNo\" class=\"form-control input-sm\" placeholder=\"Enter Fax no\"  mask=\"0000-0000000\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.FaxNo.invalid\">\r\n                    {{getErrorMessage('FaxNo')}}\r\n                  </span>\r\n                </div>\r\n  \r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Account No/Remarks</label>\r\n                  <input type=\"text\" class=\"form-control input-sm\" formControlName=\"AccountNo\" placeholder=\"Enter account no\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.AccountNo.invalid\">\r\n                    {{getErrorMessage('AccountNo')}}\r\n                  </span>\r\n                </div>\r\n  \r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n  \r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\">Email</label>\r\n                  <input type=\"text\" class=\"form-control input-sm\" formControlName=\"Email\" placeholder=\"Enter Email id\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Email.invalid\">\r\n                    {{getErrorMessage('Email')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n  \r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\">Credit Limit</label>\r\n                  <input type=\"text\" class=\"form-control input-sm\" formControlName=\"CreditLimit\" placeholder=\"Enter Credit limit\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.CreditLimit.invalid\">\r\n                    {{getErrorMessage('CreditLimit')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n  \r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\">NTN No</label>\r\n                  <input type=\"text\" formControlName=\"NTN\" class=\"form-control input-sm\" placeholder=\"Enter NTN no\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.NTN.invalid\">\r\n                    {{getErrorMessage('NTN')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>STRN No</label>\r\n                  <input type=\"text\" formControlName=\"STRN\" class=\"form-control input-sm\" placeholder=\"Enter STRN no\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.STRN.invalid\">\r\n                    {{getErrorMessage('STRN')}}\r\n                  </span>\r\n                </div>\r\n  \r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\">Country</label>\r\n                  <input type=\"text\" class=\"form-control input-sm\" disabled=\"disabled\" formControlName=\"Country\"\r\n                    placeholder=\"Pakistan\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Country.invalid\">\r\n                    {{getErrorMessage('Country')}}\r\n                  </span>\r\n                </div>\r\n  \r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Province</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\"\r\n                  [data]=\"provencesKeyPair\" [settings]=\"provinceDropdownSettings\"\r\n                  formControlName=\"ProvinceId\"\r\n                  (onSelect)=\"getProvinceValue($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ProvinceId.invalid\">\r\n                    {{getErrorMessage('ProvinceId')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n  \r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group \">\r\n                  <label>Region</label>\r\n                  <ng-multiselect-dropdown  [placeholder]=\"'Select one'\" [data]=\"regionKeyPair\"\r\n                  [settings]=\"regionDropdownSettings\" formControlName=\"RegionId\"\r\n                  (onSelect)=\"getRegionValue($event)\">\r\n                </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.RegionId.invalid\">\r\n                    {{getErrorMessage('RegionId')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group \">\r\n                  <label>Zone</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\"\r\n                  [data]=\"zoneKeyPair\" [settings]=\"zoneDropdownSettings\"\r\n                  formControlName=\"ZoneId\"\r\n                  (onSelect)=\"getZoneValue($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ZoneId.invalid\">\r\n                    {{getErrorMessage('ZoneId')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>City</label>\r\n                  <ng-multiselect-dropdown  \r\n                  [placeholder]=\"'Select one'\"\r\n                  [data]=\"cityKeyPair\"\r\n                  [settings]=\"cityDropdownSettings\"\r\n                  formControlName=\"CityId\"\r\n                  (onSelect)=\"getCityValue($event)\">\r\n                  \r\n                </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.CityId.invalid\">\r\n                    {{getErrorMessage('CityId')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\">Address</label>\r\n                  <input type=\"text\" formControlName=\"Address\" class=\"form-control input-sm\" placeholder=\"Enter address\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Address.invalid\">\r\n                    {{getErrorMessage('Address')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\">Discount %</label>\r\n                  <input type=\"text\" class=\"form-control input-sm\" formControlName=\"Discount\" placeholder=\"Enter discount\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Discount.invalid\">\r\n                    {{getErrorMessage('Discount')}}\r\n                  </span>\r\n                </div>\r\n              </div> -->\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Abbreviation</label>\r\n                  <input type=\"text\" class=\"form-control input-sm\" minlength=\"3\" maxlength=\"3\" formControlName=\"Abbreviation\" placeholder=\"Enter Abbreviation\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Abbreviation.invalid\">\r\n                    {{getErrorMessage('Abbreviation')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                \r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                \r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n              \r\n              <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Add</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/layout/content/customers/templates/list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/layout/content/customers/templates/list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          CUSTOMER LISTING\r\n          <button class=\"btn btn-wms-head\" (click)=\"redirectToCreateCustomer()\"><i class=\"fa fa-plus-circle\"></i> </button>\r\n          <small>\r\n            \r\n          </small>\r\n\r\n        </h1>\r\n        \r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.CUSTOMER_CREATE]\">Customers</a></li>\r\n          <li class=\"active\">Listing</li>\r\n        </ol>\r\n      </section>\r\n\r\n      <div class=\"pull-right\">\r\n        <button type=\"submit\" [disabled]=\"formGroup.invalid\" (click)=\"openModal()\" class=\"btn btn-default\">Print</button>\r\n        <!-- <a href=\"printlist.html\" rel=\"noopener\" target=\"_blank\" class=\"btn btn-default\"><i class=\"fas fa-print\"></i> Print</a> -->\r\n          &nbsp;\r\n        <button class=\"btn btn-excel\" (click)=\"exportServiceAsExcel()\"><i class=\"fa fa-file-excel-o\"></i></button>\r\n      </div>\r\n      \r\n\r\n  <div class=\"row\" >\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-solid\">\r\n        <div class=\"box-header\">\r\n          <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n        </div>\r\n        <!-- /.box-header \r\n        <div class=\"pull-right\">\r\n          <button (click)=\"printPage()\">print</button>\r\n        </div>-->\r\n  \r\n        <div class=\"box-body\" >\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">    \r\n            <div class=\"row\" >\r\n              <div class=\"col-sm-12 table-responsive\" id=\"print-index-invoice\">\r\n                <table id=\"example2\" class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th>\r\n                        Sr.                      \r\n                      </th>\r\n                      <th >\r\n                        Name\r\n                      </th>\r\n                      <th >\r\n                          Address\r\n                        </th>\r\n                        <th >\r\n                          Abbrevation\r\n                          </th>\r\n                          <th >\r\n                          Contact Person\r\n                            </th>\r\n                      <th >\r\n                        Mobile\r\n                      </th>\r\n                      <th >\r\n                        Email\r\n                      </th>\r\n                      <th >\r\n                        Customer type\r\n                      </th>\r\n                      <th>\r\n                          Status\r\n                        </th>\r\n                      <th >\r\n                        Actions\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let customer of customerList; let i = index\">\r\n                      <td>{{i+1}}</td> \r\n                      <td>{{customer.Name}}</td>                 \r\n                      <td>{{customer.Address}}</td>\r\n                      <td>{{customer.Abbreviation}}</td>\r\n                      <td>{{customer.ContactPerson}}</td>\r\n                      <td>{{customer.Mobile}}</td>\r\n                      <td>{{customer.Email}}</td>\r\n                      <td>{{customer.Type}}</td>\r\n                      <td>\r\n                          <span *ngIf=\"IsStatisActive(customer.StatusId); else inactive_span\" class=\"label label-success\">Active</span>\r\n                          <ng-template #inactive_span>  <span class=\"bg-red label\">In Active</span></ng-template>\r\n                      </td>\r\n                      <td>\r\n                          <button type=\"button\" id=\"update\" tooltip=\"Edit\" class=\"editBtn btn-warning\" (click)=\"Edit(customer.Id)\"><i class=\"fa fa-edit\"></i></button>\r\n                          <button type=\"button\" id=\"delete\" tooltip=\"Delete\" class=\"editBtn btn-danger\" (click)=\"Delete(customer.Id)\"><i class=\"fa fa-trash\"></i></button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <ngx-ui-loader></ngx-ui-loader>\r\n              </div>\r\n            </div>\r\n     \r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>\r\n<modal #AllModal>\r\n  <modal-header>\r\n     \r\n    \r\n  </modal-header>\r\n\r\n  <modal-content style=\"padding:20px\">\r\n    <div class=\"box box-primary\" id=\"print-section\">\r\n      <div class=\"box-header with-border\">\r\n        <h3 class=\"box-title detail-title\">Dispatch</h3>\r\n        <div class=\"form-group  pull-right\">\r\n\r\n        </div>\r\n      </div>\r\n      <section class=\"invoice\">\r\n        <!-- title row -->\r\n    \r\n        <!-- info row -->\r\n        <div class=\"col-sm-6 invoice-col\">\r\n          <div class=\"col-xs-12\">\r\n            <h2 class=\"page-header\">\r\n              <img id=\"logo\" src=\"assets/images/aml-png-logo-web-1.png\" height=\"70\" width=\"160\" style=\"background-color: white;\">\r\n              <!-- <small id=\"date\" class=\"pull-right\">Date: {{dateInvoice}} </small> -->\r\n            </h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"row invoice-info\">\r\n          <div class=\"col-sm-6 invoice-col pull-right\" id=\"invoice-col\">\r\n        \r\n            <address>\r\n              <strong>AML,Logistics</strong>\r\n              Head Office Address: Plot No. 193, 1st Floor, \r\n              Street No.1, Sector I/10,\r\n              Industrial Area, Islamabad. \r\n              Phone: +92-51-4102361-62\r\n            \r\n            </address>\r\n          </div>\r\n          <!-- /.col -->\r\n        \r\n          <!-- /.col -->\r\n          <!-- /.col -->\r\n        </div>\r\n        <!-- /.row -->\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\" style=\"text-align: center;\">\r\n            <h4><u>Customers</u></h4>\r\n          </div>\r\n      </div>\r\n   <!-- info row -->\r\n \r\n  <!-- /.row -->\r\n\r\n        <!-- Table row -->\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 table-responsive\">\r\n            <table id=\"example2\" class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n              <thead>\r\n                <tr role=\"row\">\r\n                  <th>\r\n                    Sr.                      \r\n                  </th>\r\n                  <th >\r\n                    Name\r\n                  </th>\r\n                  <th >\r\n                      Address\r\n                    </th>\r\n                    <th >\r\n                      Abbrevation\r\n                      </th>\r\n                      <th >\r\n                      Contact Person\r\n                        </th>\r\n                  <th >\r\n                    Mobile\r\n                  </th>\r\n                  <th >\r\n                    Email\r\n                  </th>\r\n                  <th >\r\n                    Customer type\r\n                  </th>\r\n                 \r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr role=\"row\" *ngFor=\"let customer of customerList; let i = index\">\r\n                  <td>{{i+1}}</td> \r\n                  <td>{{customer.Name}}</td>                 \r\n                  <td>{{customer.Address}}</td>\r\n                  <td>{{customer.Abbreviation}}</td>\r\n                  <td>{{customer.ContactPerson}}</td>\r\n                  <td>{{customer.Mobile}}</td>\r\n                  <td>{{customer.Email}}</td>\r\n                  <td>{{customer.Type}}</td>\r\n                \r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n      \r\n        \r\n      </section>\r\n     \r\n\r\n     \r\n    </div>\r\n  </modal-content>\r\n\r\n  <modal-footer>\r\n    <div class=\"row no-print\" id=\"printButton\">\r\n      <div class=\"col-xs-12\">\r\n        <button\r\n        [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n         class=\"btn-wms hidden-print print-btn\" printTitle=\"Customer\"\r\n          [useExistingCss]=\"true\" ngxPrint printSectionId=\"print-section\">\r\n          <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i>\r\n          </span></button>\r\n      </div>\r\n    </div>\r\n  </modal-footer>\r\n</modal>"

/***/ })

}]);
//# sourceMappingURL=content-customers-customers-module.js.map