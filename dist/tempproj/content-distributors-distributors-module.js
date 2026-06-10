(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-distributors-distributors-module"],{

/***/ "./src/app/layout/content/distributors/components/distributors-edit-form.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/content/distributors/components/distributors-edit-form.component.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var distributors_service_1 = __webpack_require__(/*! ../services/distributors.service */ "./src/app/layout/content/distributors/services/distributors.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var DistributorsEditFormComponent = /** @class */ (function (_super) {
    __extends(DistributorsEditFormComponent, _super);
    function DistributorsEditFormComponent(injector, _distributorsService, activeRoute, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._distributorsService = _distributorsService;
        _this.activeRoute = activeRoute;
        _this.ngxService = ngxService;
        _this.customerBusinessLineKeyPair = [];
        _this.regionDropdownSettings = {};
        _this.cityDropdownSettings = {};
        return _this;
    }
    DistributorsEditFormComponent.prototype.ngOnInit = function () {
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
    DistributorsEditFormComponent.prototype.getCustomerBusinessLineKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiAddress = this.apiConstant.CUSTOMER_BUSINESSLINE_KEYPAIR;
        this._distributorsService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerBusinessLineKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DistributorsEditFormComponent.prototype.getRegionKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiAddress = this.apiConstant.REGION_KEYPAIR;
        this._distributorsService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.regionKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DistributorsEditFormComponent.prototype.getCityKeyPair = function (selectedProject, triggerdOnClick) {
        var _this = this;
        this.selectedRegionId = selectedProject.Value;
        console.log(selectedProject);
        var companyBusinessUnitInfo = {
            RegionId: selectedProject.Value
        };
        var apiAddress = this.apiConstant.CITY_GET_BY_ID_REGION;
        this._distributorsService.getKeyPair(apiAddress, companyBusinessUnitInfo)
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
    DistributorsEditFormComponent.prototype.getRegionNameFromRegionKeyPair = function (regionId) {
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
    DistributorsEditFormComponent.prototype.getCityNameFromCityKeyPair = function (cityId) {
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
    DistributorsEditFormComponent.prototype.getCustomerById = function () {
        var _this = this;
        var customerId = this.activeRoute.snapshot.params['Id'];
        if (customerId) {
            var customerByIdUrl = this.apiConstant.CUSTOMER_GET_ONE + ("" + customerId);
            this._distributorsService.getData(customerByIdUrl)
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
    DistributorsEditFormComponent.prototype.onStatusChange = function (eve) {
        this.status = eve;
    };
    /**
  * The following method is used to add the form validations
  */
    DistributorsEditFormComponent.prototype.addFormValidations = function () {
        var nameValidation = [
            forms_1.Validators.required,
            forms_1.Validators.maxLength(50)
        ];
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        var lengthValidation = [
            forms_1.Validators.required,
            forms_1.Validators.maxLength(5)
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
    DistributorsEditFormComponent.prototype.getCityValue = function (item) {
        this.selectedCityId = {
            Value: item.Value,
            Text: item.Text
        };
    };
    DistributorsEditFormComponent.prototype.updateCustomer = function (customerFormValue) {
        if (this.formGroup.valid) {
            this.executeCustomerUpdate(customerFormValue);
        }
    };
    DistributorsEditFormComponent.prototype.executeCustomerUpdate = function (customerFormValue) {
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
        this._distributorsService.update(apiUrl, customer)
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
    DistributorsEditFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    DistributorsEditFormComponent.prototype.getErrorMessage = function (formElement) {
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
    DistributorsEditFormComponent.prototype.redirectToCustomerList = function () {
        this.router.navigate([this.routesList.CUSTOMER_LISTING]);
    };
    DistributorsEditFormComponent = __decorate([
        core_1.Component({
            selector: "wms-edit-distributors-form",
            template: __webpack_require__(/*! ../templates/edit-form.component.html */ "./src/app/layout/content/distributors/templates/edit-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/distributors-form.component.scss */ "./src/app/layout/content/distributors/styles/distributors-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, distributors_service_1.DistributorsService,
            router_1.ActivatedRoute, ngx_ui_loader_1.NgxUiLoaderService])
    ], DistributorsEditFormComponent);
    return DistributorsEditFormComponent;
}(base_component_1.BaseComponent));
exports.DistributorsEditFormComponent = DistributorsEditFormComponent;


/***/ }),

/***/ "./src/app/layout/content/distributors/components/distributors-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/content/distributors/components/distributors-form.component.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var distributors_service_1 = __webpack_require__(/*! ../services/distributors.service */ "./src/app/layout/content/distributors/services/distributors.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var DistributorsFormComponent = /** @class */ (function (_super) {
    __extends(DistributorsFormComponent, _super);
    function DistributorsFormComponent(injector, _distributorsService, activeRoute) {
        var _this = _super.call(this, injector) || this;
        _this._distributorsService = _distributorsService;
        _this.activeRoute = activeRoute;
        _this.regionDropdownSettings = {};
        _this.cityDropdownSettings = {};
        _this.customerBusinessLineKeyPair = [];
        _this.customerDropdownSettings = {};
        _this.provinceDropdownSettings = {};
        _this.provinceValue = {};
        _this.SelectedZoneId = {};
        _this.zoneDropdownSettings = {};
        return _this;
    }
    DistributorsFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.getCustomerKeyPair();
        this.getProvinceKeyPair();
        // this.getOwnerById();
        this.regionDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.customerDropdownSettings = {
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
        this.provinceDropdownSettings = {
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
    };
    DistributorsFormComponent.prototype.getProvinceValue = function (item) {
        this.provinceValue = item.Value;
        this.getRegionKeyPair(item.Value);
    };
    DistributorsFormComponent.prototype.getRegionValue = function (item) {
        this.selectedRegionId = item.Value;
        this.formGroup.get("CityId").setValue('');
        this.getZoneKeyPair();
    };
    DistributorsFormComponent.prototype.getProvinceKeyPair = function () {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiAddress = this.apiConstant.PROVINCE_KEYPAIR;
        this._distributorsService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.provencesKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ////// GET REGION LIST
    DistributorsFormComponent.prototype.getRegionKeyPair = function (selectedProject) {
        var _this = this;
        var companyBusinessUnitInfo = {
            ProvinceId: this.provinceValue
        };
        var apiAddress = this.apiConstant.REGION_GET_BY_ID_PROVINCE;
        this._distributorsService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.regionKeyPair = res;
            _this.formGroup.get("RegionId").setValue('');
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DistributorsFormComponent.prototype.getCityKeyPair = function (selectedProject) {
        var _this = this;
        debugger;
        this.SelectedZoneId = selectedProject.Value;
        var companyBusinessUnitInfo = {
            ProvinceId: this.provinceValue,
            RegionId: this.selectedRegionId,
            ZoneId: this.SelectedZoneId
        };
        var apiAddress = this.apiConstant.CITY_GET_BY_ID_REGION;
        this._distributorsService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.cityKeyPair = res;
            _this.formGroup.get("CityId").setValue('');
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DistributorsFormComponent.prototype.getZoneKeyPair = function () {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            ProvinceId: this.provinceValue,
            RegionId: this.selectedRegionId
        };
        var apiAddress = this.apiConstant.ZONE_GET_BY_ID_REGION;
        this._distributorsService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.zoneKeyPair = res;
            _this.formGroup.get("ZoneId").setValue('');
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DistributorsFormComponent.prototype.getOwnerById = function () {
        var _this = this;
        var customerId = this.activeRoute.snapshot.params['Id'];
        if (customerId) {
            var customerByIdUrl = this.apiConstant.CUSTOMER_GET_ONE + ("" + customerId);
            this._distributorsService.getData(customerByIdUrl)
                .subscribe(function (res) {
                _this.customer = res;
                _this.formGroup.patchValue(_this.customer);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    DistributorsFormComponent.prototype.getCityValue = function (item) {
        this.selectedCityId = {
            Value: item.Value,
            Text: item.Text
        };
    };
    /**
  * The following method is used to add the form validations
  */
    DistributorsFormComponent.prototype.addFormValidations = function () {
        var nameValidation = [
            forms_1.Validators.required,
            forms_1.Validators.maxLength(50)
        ];
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        var lengthValidation = [
            forms_1.Validators.required,
            forms_1.Validators.maxLength(5)
        ];
        this.addFormControlWithValidations("CustomerId", requiredValidation);
        this.addFormControlWithValidations('Name', nameValidation);
        this.addFormControlWithValidations('DistCode');
        this.addFormControlWithValidations('ContactPerson', []);
        this.addFormControlWithValidations('Mobile', []);
        this.addFormControlWithValidations('Email', []);
        this.addFormControlWithValidations('Address', []);
        this.addFormControlWithValidations('CityId', requiredValidation);
        this.addFormControlWithValidations('RegionId', requiredValidation);
        this.addFormControlWithValidations("ProvinceId", requiredValidation);
        this.addFormControlWithValidations("ZoneId", requiredValidation);
    };
    DistributorsFormComponent.prototype.createDistributors = function (customerFormValue) {
        debugger;
        if (this.formGroup.valid) {
            this.executeDistributors(customerFormValue);
        }
    };
    DistributorsFormComponent.prototype.customerChange = function (event) {
        this.selectedCustomer = event.Value;
    };
    DistributorsFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    DistributorsFormComponent.prototype.getErrorMessage = function (formElement) {
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
    DistributorsFormComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId(),
            IsTransferOrderForm: false
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._distributorsService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DistributorsFormComponent.prototype.executeDistributors = function (customerFormValue) {
        var _this = this;
        debugger;
        var distributor = {
            CustomerId: this.selectedCustomer,
            ProvinceId: this.provinceValue,
            RegionId: this.selectedRegionId,
            ZoneId: this.SelectedZoneId,
            CityId: this.selectedCityId.Value,
            DistName: customerFormValue.Name,
            ContactPerson: customerFormValue.ContactPerson,
            DistCode: customerFormValue.DistCode,
            Mobile: customerFormValue.Mobile,
            Email: customerFormValue.Email,
            DistAddress: customerFormValue.Address,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId()
        };
        var apiUrl = this.apiConstant.DISTRIBUTOR_CREATE;
        this._distributorsService.create(apiUrl, distributor)
            .subscribe(function (res) {
            _this.showToastrSuccess('Distributor Created Successfully');
            setTimeout(function () {
                //this.setValueNull();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    DistributorsFormComponent.prototype.redirectToDistributorsList = function () {
        this.router.navigate([this.routesList.DISTRIBUTORS_LISTING]);
    };
    DistributorsFormComponent.prototype.setValueNull = function () {
        this.formGroup.get("CustomerId").setValue('');
        this.formGroup.get("ProvinceId").setValue('');
        this.formGroup.get("RegionId").setValue('');
        this.formGroup.get("ZoneId").setValue('');
        this.formGroup.get("CityId").setValue('');
        this.formGroup.get("Name").setValue("");
        this.formGroup.get("DistCode").setValue("");
        this.formGroup.get("ContactPerson").setValue("");
        this.formGroup.get("Mobile").setValue("");
        this.formGroup.get("Email").setValue("");
        this.formGroup.get("Address").setValue("");
    };
    DistributorsFormComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line:component-selector
            selector: 'wms-customer-form',
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/distributors/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/distributors-form.component.scss */ "./src/app/layout/content/distributors/styles/distributors-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, distributors_service_1.DistributorsService,
            router_1.ActivatedRoute])
    ], DistributorsFormComponent);
    return DistributorsFormComponent;
}(base_component_1.BaseComponent));
exports.DistributorsFormComponent = DistributorsFormComponent;


/***/ }),

/***/ "./src/app/layout/content/distributors/components/distributors-list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/content/distributors/components/distributors-list.component.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var distributors_service_1 = __webpack_require__(/*! ../services/distributors.service */ "./src/app/layout/content/distributors/services/distributors.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var dashboard_service_1 = __webpack_require__(/*! ../../dashboard/services/dashboard.service */ "./src/app/layout/content/dashboard/services/dashboard.service.ts");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var ngb_modal_1 = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var DistributorsListComponent = /** @class */ (function (_super) {
    __extends(DistributorsListComponent, _super);
    function DistributorsListComponent(injector, _dashboardService, chRef, exporterService, _distributorsService, modalService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._dashboardService = _dashboardService;
        _this.chRef = chRef;
        _this.exporterService = exporterService;
        _this._distributorsService = _distributorsService;
        _this.modalService = modalService;
        _this.ngxService = ngxService;
        //exporterService: any;
        _this.CustomerListToPost = [];
        _this.customerDropdownSettings = {};
        return _this;
    }
    DistributorsListComponent.prototype.ngOnInit = function () {
        this.getCustomerKeyPair();
        this.customerDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    DistributorsListComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId(),
            IsTransferOrderForm: false
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._distributorsService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DistributorsListComponent.prototype.customerChange = function (event) {
        this.selectedCustomer = event.Value;
        this.getAllDistributors(event.Value);
    };
    DistributorsListComponent.prototype.getAllDistributors = function (DistributorId) {
        var _this = this;
        this.ngxService.start();
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId(),
            IsTransferOrderForm: false,
            CustomerId: this.selectedCustomer
        };
        debugger;
        var apiAddress = this.apiConstant.DISTRIBUTOR_LIST;
        this._dashboardService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.distributorList = res;
            _this.chRef.detectChanges();
            _this.chRef.reattach();
            // Now you can use jQuery DataTables :
            var table = $('table');
            // this.dataTable = table.DataTable();
            _this.dataTable = table.DataTable({
                lengthMenu: [100, 500, 1000],
                "iDisplayLength": 500,
                retrieve: true
            });
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DistributorsListComponent.prototype.Edit = function (customerId) {
        var updateUrl = this.routesList.CUSTOMER_EDIT + ("/" + customerId);
        this.router.navigate([updateUrl]);
    };
    DistributorsListComponent.prototype.printDiv = function () {
        var printContents = document.getElementById('print-index-invoice').innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    };
    DistributorsListComponent.prototype.exportServiceAsExcel = function () {
        var _this = this;
        this.distributorList.forEach(function (element) {
            var customerObj = {
                Name: element.DistName,
                Address: element.DistAddress,
                ContactPerson: element.ContactPerson,
                Mobile: element.Mobile,
                Email: element.Email,
            };
            _this.CustomerListToPost.push(customerObj);
        });
        this.exporterService.exportToExcel(this.CustomerListToPost, 'CustomerList Data');
        this.CustomerListToPost = [];
    };
    DistributorsListComponent.prototype.Delete = function (Id) {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CustomerId: Id,
            Type: "customer"
        };
        var apiUrl = this.apiConstant.CUSTOMER_DELETE;
        this._distributorsService.create(apiUrl, companyBusinessUnitInfo)
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
    DistributorsListComponent.prototype.openModal = function () {
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
    DistributorsListComponent.prototype.redirectToCreateDistributor = function () {
        this.router.navigate([this.routesList.DISTRIBUTORS_CREATE]);
    };
    __decorate([
        core_1.ViewChild('AllModal'),
        __metadata("design:type", Object)
    ], DistributorsListComponent.prototype, "AllModal", void 0);
    DistributorsListComponent = __decorate([
        core_1.Component({
            selector: "wms-distributors-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/distributors/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/distributors-form.component.scss */ "./src/app/layout/content/distributors/styles/distributors-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, dashboard_service_1.DashboardService, core_1.ChangeDetectorRef,
            excel_file_service_1.ExporterService,
            distributors_service_1.DistributorsService, ngb_modal_1.ModalManager,
            ngx_ui_loader_1.NgxUiLoaderService])
    ], DistributorsListComponent);
    return DistributorsListComponent;
}(base_component_1.BaseComponent));
exports.DistributorsListComponent = DistributorsListComponent;


/***/ }),

/***/ "./src/app/layout/content/distributors/distributors.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/content/distributors/distributors.module.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var ngx_toggle_switch_1 = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
var distributors_service_1 = __webpack_require__(/*! ./services/distributors.service */ "./src/app/layout/content/distributors/services/distributors.service.ts");
var distributors_form_component_1 = __webpack_require__(/*! ./components/distributors-form.component */ "./src/app/layout/content/distributors/components/distributors-form.component.ts");
var distributors_list_component_1 = __webpack_require__(/*! ./components/distributors-list.component */ "./src/app/layout/content/distributors/components/distributors-list.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var distributors_edit_form_component_1 = __webpack_require__(/*! ./components/distributors-edit-form.component */ "./src/app/layout/content/distributors/components/distributors-edit-form.component.ts");
var ngx_mask_1 = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
var ng_multiselect_dropdown_1 = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var ngx_print_1 = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
var ngb_modal_1 = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: distributors_list_component_1.DistributorsListComponent,
            },
            {
                path: "create",
                component: distributors_form_component_1.DistributorsFormComponent,
            }, {
                path: "edit/:Id",
                component: distributors_edit_form_component_1.DistributorsEditFormComponent,
            }, {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var DistributorsModule = /** @class */ (function () {
    function DistributorsModule() {
    }
    DistributorsModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                forms_1.FormsModule,
                ngx_mask_1.NgxMaskModule.forRoot(),
                ng_multiselect_dropdown_1.NgMultiSelectDropDownModule.forRoot(),
                forms_1.ReactiveFormsModule, ngx_toggle_switch_1.UiSwitchModule,
                ngx_print_1.NgxPrintModule,
                ngb_modal_1.ModalModule,
                ngx_ui_loader_1.NgxUiLoaderModule
            ],
            declarations: [
                distributors_list_component_1.DistributorsListComponent, distributors_form_component_1.DistributorsFormComponent, distributors_edit_form_component_1.DistributorsEditFormComponent
            ],
            providers: [
                distributors_service_1.DistributorsService,
                excel_file_service_1.ExporterService
            ],
            entryComponents: [
                distributors_form_component_1.DistributorsFormComponent
            ]
        })
    ], DistributorsModule);
    return DistributorsModule;
}());
exports.DistributorsModule = DistributorsModule;


/***/ }),

/***/ "./src/app/layout/content/distributors/services/distributors.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/content/distributors/services/distributors.service.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var repository_service_1 = __webpack_require__(/*! src/app/helpers/services/repository.service */ "./src/app/helpers/services/repository.service.ts");
var DistributorsService = /** @class */ (function (_super) {
    __extends(DistributorsService, _super);
    function DistributorsService(injector) {
        return _super.call(this, injector) || this;
    }
    DistributorsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], DistributorsService);
    return DistributorsService;
}(repository_service_1.RepositoryService));
exports.DistributorsService = DistributorsService;


/***/ }),

/***/ "./src/app/layout/content/distributors/styles/distributors-form.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/content/distributors/styles/distributors-form.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block{color:red}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:20px !important;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toggle-label{margin-top:10px;margin-right:-10px;color:green;font-size:15px}\n"

/***/ }),

/***/ "./src/app/layout/content/distributors/templates/edit-form.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/layout/content/distributors/templates/edit-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          CUSTOMER EDIT\r\n      \r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.CUSTOMER_CREATE]\">Customers</a></li>\r\n          <li class=\"active\">Edit</li>\r\n        </ol>\r\n      </section>\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"updateCustomer(formGroup.value)\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"pull-left\">\r\n                  <div class=\"col-md-6 toggle-label \">\r\n                      <span *ngIf=\"status == true\">\r\n                        <b>Active</b>\r\n                      </span>\r\n                      <span *ngIf=\"status == false\">\r\n                        <b>InActive</b>\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <ui-switch switchColor=\"#fcfcfc\" [checked]=\"status == true\" (change)=\"onStatusChange($event)\"></ui-switch>\r\n                    </div>\r\n              </div>\r\n              \r\n              <!-- <h3 class=\"box-title\">Quick Example</h3> -->\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"pull-right\">\r\n                  <button type=\"button\" (click)=\"redirectToCustomerList()\" class=\"btn-wms\">Customer Listing</button>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Customer Name</label>\r\n                <input type=\"text\" readonly formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter Customer name\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                  {{getErrorMessage('Name')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Customer type</label>\r\n                <select formControlName=\"Type\" class=\"form-control input-sm\">\r\n                  <option>Select one</option>\r\n                  <option *ngFor=\"let custType of constantList.CUSTOMER_TYPES\" [value]=\"custType.value\">\r\n                    {{custType.name}}\r\n                  </option>\r\n                </select>\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Type.invalid\">\r\n                  {{getErrorMessage('Type')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Business Line</label>\r\n                  <select class=\"form-control input-sm\" formControlName=\"CustomerBusinessLineId\" disabled=\"disabled\">\r\n                    <option selected value=\"\">Select one</option>\r\n                    <option *ngFor=\"let custBusinessLine of customerBusinessLineKeyPair\"\r\n                      [value]=\"custBusinessLine.Value\">\r\n                      {{custBusinessLine.Text}}\r\n                    </option>\r\n                  </select>\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.CustomerBusinessLineId.invalid\">\r\n                    {{getErrorMessage('CustomerBusinessLineId')}}\r\n                  </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">CNIC No</label>\r\n                <input type='text' formControlName=\"CNIC\" class=\"form-control input-sm\" placeholder=\"Enter CNIC no\"  mask=\"00000-0000000-0\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.CNIC.invalid\">\r\n                  {{getErrorMessage('CNIC')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Contact Person</label>\r\n                <input type=\"text\" formControlName=\"ContactPerson\" class=\"form-control input-sm\"\r\n                  placeholder=\"Enter contact person name\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ContactPerson.invalid\">\r\n                  {{getErrorMessage('ContactPerson')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Mobile</label>\r\n                <input type='text' formControlName=\"Mobile\" class=\"form-control input-sm\" placeholder=\"Enter mobile no\"  mask=\"0000-0000000\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Mobile.invalid\">\r\n                  {{getErrorMessage('Mobile')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Landline</label>\r\n                <input type='text' formControlName=\"Phone\" class=\"form-control input-sm\" placeholder=\"Enter Phone no\"  mask=\"0000-0000000\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Phone.invalid\">\r\n                  {{getErrorMessage('Phone')}}\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Fax no</label>\r\n                <input type='text' formControlName=\"FaxNo\" class=\"form-control input-sm\" placeholder=\"Enter Fax no\"  mask=\"0000-0000000\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.FaxNo.invalid\">\r\n                  {{getErrorMessage('FaxNo')}}\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Account No/Remarks</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" formControlName=\"AccountNo\" placeholder=\"Enter account no\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.AccountNo.invalid\">\r\n                  {{getErrorMessage('AccountNo')}}\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Email</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" formControlName=\"Email\" placeholder=\"Enter Email id\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Email.invalid\">\r\n                  {{getErrorMessage('Email')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Credit Limit</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" formControlName=\"CreditLimit\" placeholder=\"Enter Credit limit\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.CreditLimit.invalid\">\r\n                  {{getErrorMessage('CreditLimit')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">NTN No</label>\r\n                <input type=\"text\" formControlName=\"NTN\" class=\"form-control input-sm\" placeholder=\"Enter NTN no\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.NTN.invalid\">\r\n                  {{getErrorMessage('NTN')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>STRN No</label>\r\n                <input type=\"text\" formControlName=\"STRN\" class=\"form-control input-sm\" placeholder=\"Enter STRN no\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.STRN.invalid\">\r\n                  {{getErrorMessage('STRN')}}\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Country</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" disabled=\"disabled\" formControlName=\"Country\"\r\n                  placeholder=\"Pakistan\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Country.invalid\">\r\n                  {{getErrorMessage('Country')}}\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n\r\n              <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Region</label>\r\n                   \r\n                    <ng-multiselect-dropdown  \r\n                    [placeholder]=\"'Select one'\"\r\n                    [data]=\"regionKeyPair\"\r\n                    [settings]=\"regionDropdownSettings\"\r\n                    formControlName=\"RegionId\"\r\n                    [(ngModel)]=\"selectedRegionInfo\"\r\n                    (onSelect)=\"getCityKeyPair($event,true)\">\r\n                  </ng-multiselect-dropdown>\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.RegionId.invalid\">\r\n                      {{getErrorMessage('RegionId')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>City</label>\r\n                     \r\n                      <ng-multiselect-dropdown  \r\n                      [placeholder]=\"'Select one'\"\r\n                      [data]=\"cityKeyPair\"\r\n                      [settings]=\"cityDropdownSettings\"\r\n                      formControlName=\"CityId\"\r\n                      [(ngModel)]=\"selectedCityInfo\"\r\n                      (onSelect)=\"getCityValue($event)\">\r\n                      \r\n                    </ng-multiselect-dropdown>\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.CityId.invalid\">\r\n                        {{getErrorMessage('CityId')}}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n            <div class=\"col-md-4\">\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Address</label>\r\n                <input type=\"text\" formControlName=\"Address\" class=\"form-control input-sm\" placeholder=\"Enter address\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Address.invalid\">\r\n                  {{getErrorMessage('Address')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Discount %</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" formControlName=\"Discount\" placeholder=\"Enter discount\">\r\n                <span *ngIf=\"formGroup.controls.Discount.invalid\">\r\n                  {{getErrorMessage('Discount')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Abbreviation</label>\r\n                  <input type=\"text\" class=\"form-control input-sm\" readonly minlength=\"3\" maxlength=\"3\" formControlName=\"Abbreviation\" placeholder=\"Enter Region no\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Abbreviation.invalid\">\r\n                    {{getErrorMessage('Abbreviation')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n               \r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                \r\n              </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"box-footer\">\r\n          <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Update</button>\r\n          \r\n        </div>\r\n      </div>\r\n    </form>\r\n    <ngx-ui-loader></ngx-ui-loader>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/layout/content/distributors/templates/form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/content/distributors/templates/form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          CREATE DISTRIBUTORS\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\">Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.DISTRIBUTOR_CREATE]\">Distributors</a></li>\r\n          <li class=\"active\">Create</li>\r\n        </ol>\r\n      </section>\r\n    <div col-md-12>\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createDistributors(formGroup.value)\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group  pull-right\">\r\n              <button type=\"button\" (click)=\"redirectToDistributorsList()\" class=\"btn btn-wms-head\">Distributors Listing</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label>Customer</label>\r\n                    <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\" [settings]=\"customerDropdownSettings\"\r\n                      (onSelect)=\"customerChange($event)\" formControlName=\"CustomerId\"> \r\n                    </ng-multiselect-dropdown>\r\n                    <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                      Required\r\n                    </span>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\">Distributors Code</label>\r\n                  <input type=\"text\" class=\"form-control input-sm\" formControlName=\"DistCode\" placeholder=\"Enter Distributors Code\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.DistCode.invalid\">\r\n                    {{getErrorMessage('DistCode')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Distributor Name</label>\r\n                  <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter Customer name\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                    {{getErrorMessage('Name')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\">Address</label>\r\n                  <input type=\"text\" formControlName=\"Address\" class=\"form-control input-sm\" placeholder=\"Enter address\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Address.invalid\">\r\n                    {{getErrorMessage('Address')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n  \r\n            \r\n  \r\n            <div class=\"col-md-12\">\r\n              \r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\">Contact Person</label>\r\n                  <input type=\"text\" formControlName=\"ContactPerson\" class=\"form-control input-sm\"\r\n                    placeholder=\"Enter contact person name\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ContactPerson.invalid\">\r\n                    {{getErrorMessage('ContactPerson')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\">Email</label>\r\n                  <input type=\"text\" class=\"form-control input-sm\" formControlName=\"Email\" placeholder=\"Enter Email id\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Email.invalid\">\r\n                    {{getErrorMessage('Email')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleInputPassword1\">Mobile</label>\r\n                     <input type='text' formControlName=\"Mobile\" class=\"form-control input-sm\" placeholder=\"Ex. 0320-4841304\"  mask=\"0000-0000000\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Mobile.invalid\">\r\n                    {{getErrorMessage('Mobile')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>Province</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\"\r\n                  [data]=\"provencesKeyPair\" [settings]=\"provinceDropdownSettings\"\r\n                  formControlName=\"ProvinceId\"\r\n                  (onSelect)=\"getProvinceValue($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ProvinceId.invalid\">\r\n                    {{getErrorMessage('ProvinceId')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                  <div class=\"form-group \">\r\n                    <label>Region</label>\r\n                    <ng-multiselect-dropdown [placeholder]=\"'Select one'\"\r\n                    [data]=\"regionKeyPair\" [settings]=\"regionDropdownSettings\"\r\n                    formControlName=\"RegionId\"\r\n                    (onSelect)=\"getRegionValue($event)\">\r\n                    </ng-multiselect-dropdown>\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.RegionId.invalid\">\r\n                      {{getErrorMessage('RegionId')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                  <div class=\"form-group \">\r\n                    <label>Zone</label>\r\n                    <ng-multiselect-dropdown [placeholder]=\"'Select one'\"\r\n                    [data]=\"zoneKeyPair\" [settings]=\"zoneDropdownSettings\"\r\n                    formControlName=\"ZoneId\"\r\n                    (onSelect)=\"getCityKeyPair($event)\">\r\n                    </ng-multiselect-dropdown>\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.ZoneId.invalid\">\r\n                      {{getErrorMessage('ZoneId')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                  <div class=\"form-group\">\r\n                    <label>City</label>\r\n                    <ng-multiselect-dropdown  [placeholder]=\"'Select one'\"\r\n                    [data]=\"cityKeyPair\" [settings]=\"cityDropdownSettings\"\r\n                    formControlName=\"CityId\"\r\n                    (onSelect)=\"getCityValue($event)\">\r\n                    </ng-multiselect-dropdown>\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.CityId.invalid\">\r\n                      {{getErrorMessage('CityId')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"box-footer\">\r\n              <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Add</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/layout/content/distributors/templates/list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/content/distributors/templates/list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          DISTRIBUTOR LISTING\r\n          <button class=\"btn btn-wms-head\" (click)=\"redirectToCreateDistributor()\"><i class=\"fa fa-plus-circle\"></i> </button>\r\n          <small>\r\n            \r\n          </small>\r\n        </h1>\r\n        \r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.DISTRIBUTOR_CREATE]\">Distributor</a></li>\r\n          <li class=\"active\">Listing</li>\r\n        </ol>\r\n      </section>\r\n\r\n      <!-- <div class=\"pull-right\">\r\n        <button type=\"submit\" [disabled]=\"formGroup.invalid\" (click)=\"openModal()\" class=\"btn btn-default\">Print</button>\r\n        <!-- <a href=\"printlist.html\" rel=\"noopener\" target=\"_blank\" class=\"btn btn-default\"><i class=\"fas fa-print\"></i> Print</a> -->\r\n        <!--  &nbsp;\r\n        <button class=\"btn btn-excel\" (click)=\"exportServiceAsExcel()\"><i class=\"fa fa-file-excel-o\"></i></button>\r\n      </div> -->\r\n      \r\n\r\n  <div class=\"row\" >\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-solid\">\r\n        <div class=\"box-header\">\r\n          <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n        </div>\r\n          <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate >  \r\n            <div class=\"box-body\" >\r\n              <div class=\"col-md-12\">\r\n                <div class=\"col-md-3\">\r\n                  <div class=\"form-group\">\r\n                      <label>Customer</label>\r\n                      <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\" [settings]=\"customerDropdownSettings\"\r\n                        (onSelect)=\"customerChange($event)\" > \r\n                      </ng-multiselect-dropdown>\r\n                      <span class=\"help-block\" *ngIf=\"!this.selectedCustomer\">\r\n                        Required\r\n                      </span>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">    \r\n                <div class=\"row\" >\r\n                  <div class=\"col-sm-12 table-responsive\" id=\"print-index-invoice\">\r\n                    <table id=\"example2\" class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                      <thead>\r\n                        <tr role=\"row\">\r\n                          <th>Sr.</th>\r\n                          <th>Code</th>\r\n                          <th>Distributor Name</th>\r\n                          <th>Address</th>\r\n                          <th>Contact Person</th>\r\n                          <th>Email</th>\r\n                          <th>Mobile</th>\r\n                          <th>Province</th>\r\n                          <th>Region</th>\r\n                          <th>Zone</th>\r\n                          <th>City</th>\r\n                          <th >Actions</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr role=\"row\" *ngFor=\"let distributor of distributorList; let i = index\">\r\n                          <td>{{i+1}}</td> \r\n                          <td>{{distributor.DistCode}}</td>                 \r\n                          <td>{{distributor.DistName}}</td>\r\n                          <td>{{distributor.DistAddress}}</td>\r\n                          <td>{{distributor.ContactPerson}}</td>\r\n                          <td>{{distributor.Email}}</td>\r\n                          <td>{{distributor.Mobile}}</td>\r\n                          <td>{{distributor.AML_Province.Name}}</td>\r\n                          <td>{{distributor.AML_Region.Name}}</td>\r\n                          <td>{{distributor.AML_Zone.ZoneName}}</td>\r\n                          <td>{{distributor.AML_City.Name}}</td>\r\n                          <td>\r\n                              <button type=\"button\" id=\"update\" tooltip=\"Edit\" class=\"editBtn btn-warning\" (click)=\"Edit(distributor.DistId)\"><i class=\"fa fa-edit\"></i></button>\r\n                              <button type=\"button\" id=\"delete\" tooltip=\"Delete\" class=\"editBtn btn-danger\" (click)=\"Delete(distributor.DistId)\"><i class=\"fa fa-trash\"></i></button>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                    <ngx-ui-loader></ngx-ui-loader>\r\n                  </div>\r\n                </div>\r\n        \r\n              </div>\r\n            </div>\r\n          </form>\r\n      </div>\r\n        <!-- /.box-body -->\r\n    </div>\r\n      <!-- /.box -->\r\n  </div>\r\n    <!-- /.col -->\r\n  \r\n  <!-- /.row -->\r\n</section>\r\n<modal #AllModal>\r\n  <modal-header>\r\n     \r\n    \r\n  </modal-header>\r\n\r\n  <modal-content style=\"padding:20px\">\r\n    <div class=\"box box-primary\" id=\"print-section\">\r\n      <div class=\"box-header with-border\">\r\n        <h3 class=\"box-title detail-title\">Dispatch</h3>\r\n        <div class=\"form-group  pull-right\">\r\n\r\n        </div>\r\n      </div>\r\n      <section class=\"invoice\">\r\n        <!-- title row -->\r\n    \r\n        <!-- info row -->\r\n        <div class=\"col-sm-6 invoice-col\">\r\n          <div class=\"col-xs-12\">\r\n            <h2 class=\"page-header\">\r\n              <img id=\"logo\" src=\"assets/images/aml-png-logo-web-1.png\" height=\"70\" width=\"160\" style=\"background-color: white;\">\r\n              <!-- <small id=\"date\" class=\"pull-right\">Date: {{dateInvoice}} </small> -->\r\n            </h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"row invoice-info\">\r\n          <div class=\"col-sm-6 invoice-col pull-right\" id=\"invoice-col\">\r\n        \r\n            <address>\r\n              <strong>AML,Logistics</strong>\r\n              Head Office Address: Plot No. 193, 1st Floor, \r\n              Street No.1, Sector I/10,\r\n              Industrial Area, Islamabad. \r\n              Phone: +92-51-4102361-62\r\n            \r\n            </address>\r\n          </div>\r\n          <!-- /.col -->\r\n        \r\n          <!-- /.col -->\r\n          <!-- /.col -->\r\n        </div>\r\n        <!-- /.row -->\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\" style=\"text-align: center;\">\r\n            <h4><u>Customers</u></h4>\r\n          </div>\r\n      </div>\r\n   <!-- info row -->\r\n \r\n  <!-- /.row -->\r\n\r\n        <!-- Table row -->\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 table-responsive\">\r\n            <table id=\"example2\" class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n              <thead>\r\n                <tr role=\"row\">\r\n                  <th>\r\n                    Sr.                      \r\n                  </th>\r\n                  <th >\r\n                    Name\r\n                  </th>\r\n                  <th >\r\n                      Address\r\n                    </th>\r\n                    <th >\r\n                      Abbrevation\r\n                      </th>\r\n                      <th >\r\n                      Contact Person\r\n                        </th>\r\n                  <th >\r\n                    Mobile\r\n                  </th>\r\n                  <th >\r\n                    Email\r\n                  </th>\r\n                  <th >\r\n                    Customer type\r\n                  </th>\r\n                 \r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr role=\"row\" *ngFor=\"let customer of customerList; let i = index\">\r\n                  <td>{{i+1}}</td> \r\n                  <td>{{customer.Name}}</td>                 \r\n                  <td>{{customer.Address}}</td>\r\n                  <td>{{customer.Abbreviation}}</td>\r\n                  <td>{{customer.ContactPerson}}</td>\r\n                  <td>{{customer.Mobile}}</td>\r\n                  <td>{{customer.Email}}</td>\r\n                  <td>{{customer.Type}}</td>\r\n                \r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n      \r\n        \r\n      </section>\r\n     \r\n\r\n     \r\n    </div>\r\n  </modal-content>\r\n\r\n  <modal-footer>\r\n    <div class=\"row no-print\" id=\"printButton\">\r\n      <div class=\"col-xs-12\">\r\n        <button\r\n        [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n         class=\"btn-wms hidden-print print-btn\" printTitle=\"Customer\"\r\n          [useExistingCss]=\"true\" ngxPrint printSectionId=\"print-section\">\r\n          <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i>\r\n          </span></button>\r\n      </div>\r\n    </div>\r\n  </modal-footer>\r\n</modal>"

/***/ })

}]);
//# sourceMappingURL=content-distributors-distributors-module.js.map