(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-dispatch-complete-dispatch-complete-module"],{

/***/ "./src/app/layout/content/dispatch-complete/components/dispatch-complete-edit-form.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-complete/components/dispatch-complete-edit-form.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DispatchCompleteEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchCompleteEditFormComponent", function() { return DispatchCompleteEditFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dispatch_complete_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dispatch-complete.service */ "./src/app/layout/content/dispatch-complete/services/dispatch-complete.service.ts");
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






var DispatchCompleteEditFormComponent = /** @class */ (function (_super) {
    __extends(DispatchCompleteEditFormComponent, _super);
    function DispatchCompleteEditFormComponent(injector, _dispatchService, activeRoute, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._dispatchService = _dispatchService;
        _this.activeRoute = activeRoute;
        _this.ngxService = ngxService;
        _this.customerDropdownSettings = {};
        _this.pickupOrderDropdownSettings = {};
        _this.itemDropdownSettings = {};
        _this.PickupOrderItemList = [];
        _this.selectedCustomer = {};
        _this.selectedPickupOrder = {};
        _this.itemKeyPair = [];
        _this.retrivedItemListByPickupOrder = [];
        _this.itemListToPost = [];
        _this.itemTempToAddIntoItemPostList = {};
        _this.selectedItem = {};
        return _this;
    }
    DispatchCompleteEditFormComponent.prototype.ngOnInit = function () {
        this.dropdownHideShow = this.router.url.includes("customer");
        this.addFormValidations();
        this.dropdownSettings();
        this.getCustomerKeyPair();
        this.getDispatchById();
    };
    DispatchCompleteEditFormComponent.prototype.getDispatchById = function () {
        var _this = this;
        var dispatchId = this.activeRoute.snapshot.params['Id'];
        if (dispatchId) {
            var dispatchByIdUrl = this.apiConstant.DISPATCH_GetById + ("" + dispatchId);
            this._dispatchService.getData(dispatchByIdUrl)
                .subscribe(function (res) {
                _this.dispatch = res;
                console.log(_this.dispatch);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    /**
  * The following method is used to add the form validations
  */
    DispatchCompleteEditFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ];
        this.addFormControlWithValidations("PickupOrderId", []);
        this.addFormControlWithValidations("CustomerId", []);
        this.addFormControlWithValidations("DispatchDate", []);
        this.addFormControlWithValidations("ItemId", []);
        this.addFormControlWithValidations("QtyToAdd", []);
        this.addFormControlWithValidations("PickupOrderId", []);
        this.addFormControlWithValidations("Agent", []);
        this.addFormControlWithValidations("DriverName", []);
        this.addFormControlWithValidations("GatePassNo", []);
        this.addFormControlWithValidations("PhoneNumber", []);
        this.addFormControlWithValidations("Address", []);
        this.addFormControlWithValidations("QtyAvailableToAdd", []);
    };
    DispatchCompleteEditFormComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._dispatchService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCompleteEditFormComponent.prototype.customerChange = function (event) {
        this.selectedCustomer = {
            Id: event.Value,
            Name: event.Text
        };
        if (event.Value) {
            this.getPickupOrderKeyPair(Number(event.Value));
            this.formGroup.get("ItemId").setValue('');
            this.formGroup.get("PickupOrderId").setValue('');
            this.itemListToPost = [];
            this.itemTempToAddIntoItemPostList = [];
        }
    };
    DispatchCompleteEditFormComponent.prototype.PickupOrderChange = function () {
        var _this = this;
        var pickupOrder = this.formGroup.get("PickupOrderId").value;
        var SendObj = {
            Value: pickupOrder[0].Value,
            Text: pickupOrder[0].Text,
        };
        var apiUrl = this.apiConstant.DISPATCH_GetDetailOfOrder;
        this._dispatchService.getKeyPair(apiUrl, SendObj)
            .subscribe(function (res) {
            debugger;
            _this.PickupOrderItemList = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCompleteEditFormComponent.prototype.customerDeSelect = function () {
        this.selectedCustomer = {};
        this.selectedPickupOrder = {};
        this.pickupOrderKeyPair = [];
        this.itemKeyPair = [];
        this.formGroup.get("ItemId").setValue('');
        this.formGroup.get("PickupOrderId").setValue('');
        this.itemListToPost = [];
        this.itemTempToAddIntoItemPostList = [];
    };
    DispatchCompleteEditFormComponent.prototype.getPickupOrderKeyPair = function (customerId) {
        var _this = this;
        var dispatch = {
            CustomerId: customerId
        };
        var apiUrl = this.apiConstant.DISPATCH_GetDispatchKeyPair;
        this._dispatchService.getKeyPair(apiUrl, dispatch)
            .subscribe(function (res) {
            _this.pickupOrderKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCompleteEditFormComponent.prototype.getItemAvailableQty = function (itemId, location) {
        var totalQty = 0;
        var data = this.retrivedItemListByPickupOrder
            .filter(function (x) { return x.ItemInformationId === itemId && x.Location === location; });
        if (data && data.length > 0) {
            data.forEach(function (element) {
                totalQty = (totalQty + Number(element.Quantity));
            });
        }
        return totalQty;
    };
    DispatchCompleteEditFormComponent.prototype.addItemIntoItemPostList = function () {
        var _this = this;
        if (this.itemTempToAddIntoItemPostList &&
            this.itemTempToAddIntoItemPostList["ItemId"] != ''
            && Number(this.itemTempToAddIntoItemPostList["Quantity"] != 0)) {
            this.itemListToPost = this.itemListToPost.filter(function (x) { return x.ItemId !== _this.itemTempToAddIntoItemPostList["ItemId"]; });
            this.itemListToPost.push({
                ItemId: this.itemTempToAddIntoItemPostList["ItemId"],
                Quantity: this.itemTempToAddIntoItemPostList["Quantity"],
                Name: this.retrivedItemListByPickupOrder.filter(function (x) { return x.ItemInformationId ===
                    _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["ItemInformation"]["Name"],
                UnitId: this.retrivedItemListByPickupOrder.filter(function (x) { return x.ItemInformationId ===
                    _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["ItemInformation"].UOM,
                Unit: this.retrivedItemListByPickupOrder.filter(function (x) { return x.ItemInformationId ===
                    _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["ItemInformation"]["Unit"]["Title"],
                Location: this.itemTempToAddIntoItemPostList["Location"],
                Batch: this.retrivedItemListByPickupOrder.filter(function (x) { return x.ItemInformationId ===
                    _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["Batch"]
            });
            this.itemTempToAddIntoItemPostList = {};
            this.formGroup.get("QtyToAdd").setValue('');
            this.formGroup.get("ItemId").setValue('');
            this.formGroup.get("QtyAvailableToAdd").setValue('');
        }
    };
    DispatchCompleteEditFormComponent.prototype.createDispatch = function (formValue) {
        if (this.formGroup.valid) {
            if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
                this.showToastrWarning("Select Customer please.");
                return false;
            }
            // if(!this.selectedPickupOrder || !this.selectedPickupOrder["Id"]){
            //   this.showToastrWarning("Select Customer Order please.");
            //   return false;
            // }
            // if(this.retrivedItemListByPickupOrder.length <= 0){
            //   this.showToastrWarning("Add item please.");
            //   return false;
            // }
            this.executeDispatchCreation(formValue);
        }
    };
    DispatchCompleteEditFormComponent.prototype.executeDispatchCreation = function (formValue) {
        var _this = this;
        var dispatch = {
            Agent: formValue.Agent,
            DriverName: formValue.DriverName,
            GatePassNo: formValue.GatePassNo,
            PhoneNumber: formValue.PhoneNumber,
            Address: formValue.Address,
            DispatchDate: formValue.DispatchDate,
            CustomerId: this.selectedCustomer["Id"],
            PickupOrderId: this.selectedPickupOrder["Id"],
            DispatchDetails: this.PickupOrderItemList,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
            AML_PickupOrder: undefined,
            AML_Warehouse: undefined
        };
        debugger;
        var apiUrl = this.apiConstant.DISPATCH_CONFIRMPICKUP;
        this.ngxService.start();
        this._dispatchService.create(apiUrl, dispatch)
            .subscribe(function (res) {
            _this.showToastrSuccess("Dispatch created successfully");
            setTimeout(function () {
                _this.redirectToDispatchList();
            }, 2000);
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    DispatchCompleteEditFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    DispatchCompleteEditFormComponent.prototype.dropdownSettings = function () {
        this.customerDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.pickupOrderDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.itemDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    DispatchCompleteEditFormComponent.prototype.getErrorMessage = function (formElement) {
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
    DispatchCompleteEditFormComponent.prototype.redirectToDispatchList = function () {
        this.router.navigate([this.routesList.DELIVERS_CUSTOMER_LISTING]);
    };
    DispatchCompleteEditFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-dispatch-complete-edit-form",
            template: __webpack_require__(/*! ../templates/edit-form.component.html */ "./src/app/layout/content/dispatch-complete/templates/edit-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/dispatch-complete-form.component.scss */ "./src/app/layout/content/dispatch-complete/styles/dispatch-complete-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_dispatch_complete_service__WEBPACK_IMPORTED_MODULE_2__["DispatchCompleteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"]])
    ], DispatchCompleteEditFormComponent);
    return DispatchCompleteEditFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/dispatch-complete/components/dispatch-complete-form.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-complete/components/dispatch-complete-form.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DispatchCompleteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchCompleteFormComponent", function() { return DispatchCompleteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_dispatch_complete_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dispatch-complete.service */ "./src/app/layout/content/dispatch-complete/services/dispatch-complete.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
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







var DispatchCompleteFormComponent = /** @class */ (function (_super) {
    __extends(DispatchCompleteFormComponent, _super);
    function DispatchCompleteFormComponent(injector, _dispatchService, activeRoute, modalService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._dispatchService = _dispatchService;
        _this.activeRoute = activeRoute;
        _this.modalService = modalService;
        _this.ngxService = ngxService;
        _this.customerDropdownSettings = {};
        _this.pickupOrderDropdownSettings = {};
        _this.itemDropdownSettings = {};
        _this.PickupOrderItemList = [];
        _this.selectedCustomer = {};
        _this.selectedPickupOrder = {};
        _this.itemKeyPair = [];
        _this.retrivedItemListByPickupOrder = [];
        _this.itemListToPost = [];
        _this.itemTempToAddIntoItemPostList = {};
        _this.selectedItem = {};
        _this.BTNStatus = false;
        return _this;
    }
    DispatchCompleteFormComponent.prototype.ngOnInit = function () {
        this.dropdownHideShow = this.router.url.includes("customer");
        this.formType = this.dropdownHideShow == true ? 'customer' : 'transfer';
        this.addFormValidations();
        this.dropdownSettings();
        //this.getCustomerKeyPair();
        this.getDispatchById();
        this.CompanyInfo();
    };
    DispatchCompleteFormComponent.prototype.CompanyInfo = function () {
        this.CompanyID = this.localStorageService.getCompanyId();
        if (this.CompanyID == 1) {
            this.CompanyName = "I-Logistics (Pvt.) Ltd";
            this.CompanyAddress = "2-KM Sundar Raiwind Road, Kot Sundar Singh, Lahore";
            this.LogoPath = "assets/images/ilogistics-logo-wms.jpg";
        }
        if (this.CompanyID == 2) {
            this.CompanyName = "LaBaih";
            this.CompanyAddress = "AlDossary Building, First Floor King Khalid Street Khobar, Saudi Arabia. Phone: +966 920010645";
            this.LogoPath = "assets/images/labaih-logo.png";
        }
        if (this.CompanyID == 3) {
            this.CompanyName = "I-Logistics (Pvt.) Ltd";
            this.CompanyAddress = "36-D Sundar Industrial Estate, Lahore. Phone: 042-35297539";
            this.LogoPath = "assets/images/ilogistics-logo-wms.jpg";
        }
        if (this.CompanyID == 4) {
            this.CompanyName = "Maersk Warehousing and Distribution";
            this.CompanyAddress = "Suit # 18, 2nd Floor, Park lane Towers, Mall of Lahore. Phone: +92-21-38623775";
            this.LogoPath = "assets/images/Maersk_Logo.png";
        }
    };
    DispatchCompleteFormComponent.prototype.getDispatchById = function () {
        var _this = this;
        this.ngxService.start();
        var dispatchId = this.activeRoute.snapshot.params['Id'];
        if (dispatchId) {
            debugger;
            var dispatchByIdUrl = this.apiConstant.DISPATCH_GetById + ("" + dispatchId);
            this._dispatchService.getData(dispatchByIdUrl)
                .subscribe(function (res) {
                _this.dispatch = res;
                debugger;
                _this.DispatchOrderItemList = _this.dispatch;
                console.log(_this.dispatch);
                _this.PickupOrderChange(_this.dispatch.DispatchId);
                _this.qtyCount();
                _this.ngxService.stop();
            }, function (error) {
                _this.ngxService.stop();
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    /**
  * The following method is used to add the form validations
  */
    DispatchCompleteFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ];
        this.addFormControlWithValidations("PickupOrderId", []);
        this.addFormControlWithValidations("CustomerId", []);
        this.addFormControlWithValidations("DispatchDate", requiredValidation);
        this.addFormControlWithValidations("ItemId", []);
        this.addFormControlWithValidations("QtyToAdd", []);
        this.addFormControlWithValidations("PickupOrderId", []);
        this.addFormControlWithValidations("Agent", requiredValidation);
        this.addFormControlWithValidations("DriverName", requiredValidation);
        this.addFormControlWithValidations("GatePassNo", []);
        this.addFormControlWithValidations("PhoneNumber", requiredValidation);
        this.addFormControlWithValidations("Address", []);
        this.addFormControlWithValidations("QtyAvailableToAdd", []);
        this.addFormControlWithValidations("VehicleNo", requiredValidation);
        this.addFormControlWithValidations("SupervisorName", requiredValidation);
        this.addFormControlWithValidations("VehicleSize", requiredValidation);
        this.addFormControlWithValidations("Transporter", requiredValidation);
        this.addFormControlWithValidations("SealNo", requiredValidation);
        this.addFormControlWithValidations("Remarks", []);
        this.addFormControlWithValidations("Shift", []);
        this.addFormControlWithValidations("ReportingTime", []);
        this.addFormControlWithValidations("TimeIn", []);
        this.addFormControlWithValidations("TimeOut", []);
    };
    DispatchCompleteFormComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        this.ngxService.start();
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._dispatchService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCompleteFormComponent.prototype.customerChange = function (event) {
        this.selectedCustomer = {
            Id: event.Value,
            Name: event.Text
        };
        if (event.Value) {
            this.getPickupOrderKeyPair(Number(event.Value));
            this.formGroup.get("ItemId").setValue('');
            this.formGroup.get("PickupOrderId").setValue('');
            this.itemListToPost = [];
            this.itemTempToAddIntoItemPostList = [];
        }
    };
    DispatchCompleteFormComponent.prototype.PickupOrderChange = function (item) {
        var _this = this;
        var SendObj = {
            Value: item,
            Text: item,
        };
        var pickupOrderId = this.dispatch.PickupOrderId;
        debugger;
        this.ngxService.start();
        var apiUrl = this.apiConstant.DISPATCH_GetDetailOfOrder;
        this._dispatchService.getKeyPair(apiUrl, SendObj)
            .subscribe(function (res) {
            _this.PickupOrderItemList = res;
            console.log("PickupOrderItemList");
            console.log(_this.PickupOrderItemList);
            _this.getPickupOrderById(pickupOrderId);
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCompleteFormComponent.prototype.getPickupOrderById = function (id) {
        var _this = this;
        this.ngxService.start();
        var PickupOrderId = id;
        if (PickupOrderId) {
            var customerByIdUrl = this.apiConstant.PICKUP_ORDER_BY_ID + ("" + PickupOrderId);
            this._dispatchService.getData(customerByIdUrl)
                .subscribe(function (res) {
                _this.pickupOrder = res;
                debugger;
                _this.DistCode = _this.pickupOrder.DistCode;
                _this.DistName = _this.pickupOrder.DistName;
                _this.DistAddress = _this.pickupOrder.DistAddress;
                _this.OriginWarehouse = _this.pickupOrder.OriginWarehouse;
                _this.pickupOrder.PickupOrderChilds.forEach(function (ele) {
                    _this.PickupOrderItemList.forEach(function (element) {
                        if (ele.ItemId == element.ItemInformationId) {
                            element["RequiredQuantity"] = ele.Quantity;
                            element["SNno"] = ele.SNno;
                            element["PRno"] = ele.PRno;
                            element["Status"] = ele.Status;
                            element["SRno"] = ele.SRno;
                            element["InboundPool"] = ele.InboundPool;
                            element["SlaMode"] = ele.SlaMode;
                        }
                    });
                });
                _this.pickupOrder["ListAvailableStocksItem"].forEach(function (ele) {
                    _this.PickupOrderItemList.forEach(function (element) {
                        if (ele.ItemId == element.ItemInformationId && ele.BatchCode == element.BatchNo) {
                            element["AvailableStock"] = ele.Balance;
                        }
                    });
                });
                _this.qtyCount();
                console.log(_this.PickupOrderItemList);
                _this.ngxService.stop();
            }, function (error) {
                _this.ngxService.stop();
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    DispatchCompleteFormComponent.prototype.customerDeSelect = function () {
        this.selectedCustomer = {};
        this.selectedPickupOrder = {};
        this.pickupOrderKeyPair = [];
        this.itemKeyPair = [];
        this.formGroup.get("ItemId").setValue('');
        this.formGroup.get("PickupOrderId").setValue('');
        this.itemListToPost = [];
        this.itemTempToAddIntoItemPostList = [];
    };
    DispatchCompleteFormComponent.prototype.getPickupOrderKeyPair = function (customerId) {
        var _this = this;
        var dispatch = {
            CustomerId: customerId
        };
        this.ngxService.start();
        var apiUrl = this.apiConstant.DISPATCH_GetDispatchKeyPair;
        this._dispatchService.getKeyPair(apiUrl, dispatch)
            .subscribe(function (res) {
            _this.pickupOrderKeyPair = res;
            console.log(_this.pickupOrderKeyPair);
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCompleteFormComponent.prototype.getItemAvailableQty = function (itemId, location) {
        var totalQtyTemp = 0;
        var data = this.retrivedItemListByPickupOrder
            .filter(function (x) { return x.ItemInformationId === itemId && x.Location === location; });
        if (data && data.length > 0) {
            data.forEach(function (element) {
                totalQtyTemp = (totalQtyTemp + Number(element.Quantity));
            });
        }
        return totalQtyTemp;
    };
    DispatchCompleteFormComponent.prototype.addItemRelOrd = function (event, itemId, BatchNo) {
        debugger;
        var model = this.PickupOrderItemList.filter(function (x) { return x.ItemInformationId === itemId && x.BatchNo === BatchNo; })[0];
        if (model) {
            if (parseInt(event.target.value) > model.AvailableStock) {
                this.showToastrError("AvailableStock for Specific Line-Item is not Enough");
                event.target.value = model.AvailableStock;
            }
            else {
                model.Quantity = parseInt(event.target.value);
            }
        }
        this.qtyCount();
    };
    DispatchCompleteFormComponent.prototype.qtyCount = function () {
        var _this = this;
        debugger;
        this.TotalSupplyQty = 0;
        this.TotalQty = 0;
        this.PickupOrderItemList.forEach(function (element) {
            _this.TotalSupplyQty += parseInt(element.Quantity);
            _this.TotalQty += parseInt(element.RequiredQuantity);
            //this.TotalWeightInbound += Quantity;
        });
    };
    DispatchCompleteFormComponent.prototype.addItemIntoItemPostList = function () {
        var _this = this;
        if (this.itemTempToAddIntoItemPostList &&
            this.itemTempToAddIntoItemPostList["ItemId"] != ''
            && Number(this.itemTempToAddIntoItemPostList["Quantity"] != 0)) {
            this.itemListToPost = this.itemListToPost.filter(function (x) { return x.ItemId !== _this.itemTempToAddIntoItemPostList["ItemId"]; });
            this.itemListToPost.push({
                ItemId: this.itemTempToAddIntoItemPostList["ItemId"],
                Quantity: this.itemTempToAddIntoItemPostList["Quantity"],
                Name: this.retrivedItemListByPickupOrder.filter(function (x) { return x.ItemInformationId ===
                    _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["ItemInformation"]["Name"],
                UnitId: this.retrivedItemListByPickupOrder.filter(function (x) { return x.ItemInformationId ===
                    _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["ItemInformation"].UOM,
                Unit: this.retrivedItemListByPickupOrder.filter(function (x) { return x.ItemInformationId ===
                    _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["ItemInformation"]["Unit"]["Title"],
                Location: this.itemTempToAddIntoItemPostList["Location"],
                Batch: this.retrivedItemListByPickupOrder.filter(function (x) { return x.ItemInformationId ===
                    _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["Batch"]
            });
            this.itemTempToAddIntoItemPostList = {};
            this.formGroup.get("QtyToAdd").setValue('');
            this.formGroup.get("ItemId").setValue('');
            this.formGroup.get("QtyAvailableToAdd").setValue('');
        }
    };
    DispatchCompleteFormComponent.prototype.createDispatch = function (formValue) {
        if (this.formGroup.valid) {
            debugger;
            if (this.BTNStatus == false) {
                this.BTNStatus = true;
                this.FlagDispatch = 'True';
                this.executeDispatchCreation(formValue);
            }
        }
    };
    DispatchCompleteFormComponent.prototype.executeDispatchCreation = function (formValue) {
        var _this = this;
        var dispatch = {
            Agent: formValue.Agent,
            Remarks: formValue.Remarks,
            SupervisorName: formValue.SupervisorName,
            VehicleNo: formValue.VehicleNo,
            DriverName: formValue.DriverName,
            VehicleSize: formValue.VehicleSize,
            Transporter: formValue.Transporter,
            SealNo: formValue.SealNo,
            GatePassNo: formValue.GatePassNo,
            PhoneNumber: formValue.PhoneNumber,
            Address: formValue.Address,
            DispatchDate: formValue.DispatchDate,
            CustomerId: this.selectedCustomer["Id"],
            PickupOrderId: this.selectedPickupOrder["Id"],
            DispatchDetails: this.PickupOrderItemList,
            WarehouseId: this.pickupOrder.WarehouseId,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
            AML_PickupOrder: undefined,
            AML_Warehouse: undefined,
            Shift: formValue.Shift,
            ReportingTime: formValue.ReportingTime,
            TimeIn: formValue.TimeIn,
            TimeOut: formValue.TimeOut
        };
        debugger;
        var apiUrl = this.apiConstant.DISPATCH_CONFIRMPICKUP;
        this._dispatchService.create(apiUrl, dispatch)
            .subscribe(function (res) {
            _this.dispatch = res;
            console.log(_this.dispatch);
            _this.FlagDispatch = 'True';
            if (_this.dispatch) {
                _this.openModal();
                _this.getDispatchById();
                _this.showToastrSuccess("GatePass No " + _this.dispatch.GatePassNo + " Created Successfully ");
            }
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    DispatchCompleteFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    DispatchCompleteFormComponent.prototype.dropdownSettings = function () {
        this.customerDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.pickupOrderDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.itemDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    DispatchCompleteFormComponent.prototype.getErrorMessage = function (formElement) {
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
    DispatchCompleteFormComponent.prototype.redirectToDispatchList = function () {
        this.router.navigate([this.routesList.DELIVERS_CUSTOMER_LISTING]);
    };
    DispatchCompleteFormComponent.prototype.openModal = function () {
        this.Agent = this.formGroup.get("Agent").value;
        //this.GatePassNo =this.formGroup.get("GatePassNo").value;
        this.DispatchDate = this.formGroup.get("DispatchDate").value;
        this.DriverName = this.formGroup.get("DriverName").value;
        this.VehicleNo = this.formGroup.get("VehicleNo").value;
        this.PhoneNumber = this.formGroup.get("PhoneNumber").value;
        this.VehicleSize = this.formGroup.get("VehicleSize").value;
        this.Transporter = this.formGroup.get("Transporter").value;
        this.SealNo = this.formGroup.get("SealNo").value;
        this.Address = this.formGroup.get("Address").value;
        this.SupervisorName = this.formGroup.get("SupervisorName").value;
        this.modalRef = this.modalService.open(this.AllModal, {
            size: "lg",
            modalClass: '',
            hideCloseButton: true,
            centered: false,
            backdrop: true,
            animation: true,
            keyboard: false,
            closeOnOutsideClick: false,
            backdropClass: "modal-backdrop",
            windowClass: 'modal-xl'
        });
    };
    DispatchCompleteFormComponent.prototype.CloseModal = function () {
        this.modalService.close(this.AllModal);
        this.redirectToDispatchList();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('AllModal'),
        __metadata("design:type", Object)
    ], DispatchCompleteFormComponent.prototype, "AllModal", void 0);
    DispatchCompleteFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-dispatch-complete-form",
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/dispatch-complete/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/dispatch-complete-form.component.scss */ "./src/app/layout/content/dispatch-complete/styles/dispatch-complete-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_dispatch_complete_service__WEBPACK_IMPORTED_MODULE_2__["DispatchCompleteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngb_modal__WEBPACK_IMPORTED_MODULE_5__["ModalManager"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"]])
    ], DispatchCompleteFormComponent);
    return DispatchCompleteFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/dispatch-complete/components/dispatch-complete-list.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-complete/components/dispatch-complete-list.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DispatchCompleteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchCompleteListComponent", function() { return DispatchCompleteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dispatch_complete_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dispatch-complete.service */ "./src/app/layout/content/dispatch-complete/services/dispatch-complete.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_12__);
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













var DispatchCompleteListComponent = /** @class */ (function (_super) {
    __extends(DispatchCompleteListComponent, _super);
    function DispatchCompleteListComponent(injector, _dispatchService, ngxService, modalService) {
        var _this = _super.call(this, injector) || this;
        _this._dispatchService = _dispatchService;
        _this.ngxService = ngxService;
        _this.modalService = modalService;
        _this.isCustomerDelivers = false;
        _this.hideShowList1 = [];
        _this.hideShowList2 = [];
        _this.hideShowList3 = [];
        _this.hideShowList4 = [];
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.formType = "customer";
        _this.rep_dispatchData = [];
        _this.rep_dispatchDataTemp = [];
        return _this;
    }
    DispatchCompleteListComponent.prototype.ngOnInit = function () {
        debugger;
        this.isCustomerDelivers = this.router.url.includes("customer");
        this.formType = this.isCustomerDelivers == true ? 'customer' : 'transfer';
        this.addFormValidations();
        this.dropdownSettings();
        this.getCustomerKeyPair();
        this.CompanyInfo();
        // this.getAllCompletedDispatches();
        //this.dispatchData = this.dispatchList;
        for (var i = 0; i < 13; i++) {
            this.hideShowList1.push({ status: false });
        }
        this.hideShowList1[0].status = false;
        this.hideShowList1[1].status = false;
        this.hideShowList1[2].status = false;
        this.hideShowList1[3].status = false;
        this.hideShowList1[4].status = false;
        this.hideShowList1[5].status = false;
        this.hideShowList1[6].status = false;
        this.hideShowList1[7].status = false;
        this.hideShowList1[8].status = false;
        this.hideShowList1[9].status = false;
        this.hideShowList1[10].status = false;
        for (var i = 0; i < 16; i++) {
            this.hideShowList2.push({ status: false });
        }
        this.hideShowList2[0].status = false;
        this.hideShowList2[1].status = false;
        this.hideShowList2[2].status = false;
        this.hideShowList2[3].status = false;
        this.hideShowList2[4].status = false;
        this.hideShowList2[5].status = false;
        this.hideShowList2[6].status = false;
        this.hideShowList2[7].status = false;
        this.hideShowList2[8].status = false;
        this.hideShowList2[9].status = false;
        this.hideShowList2[10].status = false;
        this.hideShowList2[11].status = false;
        this.hideShowList2[12].status = false;
        this.hideShowList2[13].status = false;
        this.hideShowList2[14].status = false;
        for (var i = 0; i < 15; i++) {
            this.hideShowList3.push({ status: false });
        }
        this.hideShowList3[0].status = false;
        this.hideShowList3[1].status = false;
        this.hideShowList3[2].status = false;
        this.hideShowList3[3].status = false;
        this.hideShowList3[4].status = false;
        this.hideShowList3[5].status = false;
        this.hideShowList3[6].status = false;
        this.hideShowList3[7].status = false;
        this.hideShowList3[8].status = false;
        this.hideShowList3[9].status = false;
        this.hideShowList3[10].status = false;
        this.hideShowList3[11].status = false;
        this.hideShowList3[12].status = false;
        this.hideShowList3[13].status = false;
        this.hideShowList3[14].status = false;
        for (var i = 0; i < 5; i++) {
            this.hideShowList4.push({ status: false });
        }
        this.hideShowList4[0].status = false;
        this.hideShowList4[1].status = false;
        this.hideShowList4[2].status = false;
        this.hideShowList4[3].status = false;
        this.hideShowList4[4].status = false;
    };
    DispatchCompleteListComponent.prototype.CompanyInfo = function () {
        this.CompanyID = this.localStorageService.getCompanyId();
        if (this.CompanyID == 1) {
            this.CompanyName = "I-Logistics (Pvt.) Ltd";
            this.CompanyAddress = "2-KM Sundar Raiwind Road, Kot Sundar Singh, Lahore";
            this.LogoPath = "assets/images/ilogistics-logo-wms.jpg";
        }
        if (this.CompanyID == 2) {
            this.CompanyName = "LaBaih";
            this.CompanyAddress = "AlDossary Building, First Floor King Khalid Street Khobar, Saudi Arabia. Phone: +966 920010645";
            this.LogoPath = "assets/images/labaih-logo.png";
        }
        if (this.CompanyID == 3) {
            this.CompanyName = "I-Logistics (Pvt.) Ltd";
            this.CompanyAddress = "PLOT NO 140 1/ESTATE PHASE 2 MULTAN";
            this.LogoPath = "assets/images/ilogistics-logo-wms.jpg";
        }
        if (this.CompanyID == 4) {
            this.CompanyName = "Maersk Warehousing and Distribution";
            this.CompanyAddress = "Suit # 18, 2nd Floor, Park lane Towers, Mall of Lahore. Phone: +92-21-38623775";
            this.LogoPath = "assets/images/Maersk_Logo.png";
        }
    };
    //Excel Conversion
    DispatchCompleteListComponent.prototype.exportExcel = function (fileName, table_id, fileHeader) {
        var element = document.getElementById(table_id);
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].table_to_sheet(element);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_9__["utils"].book_append_sheet(wb, ws, fileHeader);
        xlsx__WEBPACK_IMPORTED_MODULE_9__["writeFile"](wb, fileName);
    };
    //PDF Conversion
    DispatchCompleteListComponent.prototype.createPdf = function (my_file, table_id) {
        debugger;
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_11__["default"]({ orientation: "landscape" });
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_12___default()(doc, { html: table_id });
        doc.save(my_file);
    };
    DispatchCompleteListComponent.prototype.createPdfModule = function (my_file, table_id) {
        debugger;
        var pages = document.querySelector(table_id);
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_11__["default"]({ orientation: "landscape", unit: 'px', format: 'A4' });
        doc.html(pages, { filename: my_file });
        doc.save(my_file);
        // doc.html(pages, {
        //   callback: (doc: jsPDF) => {
        //     // doc.deletePage(doc.getNumberOfPages());
        //     doc.save(my_file);
        //   }
        // });
        // const doc = new jsPDF({ orientation: "landscape" });
        // autoTable(doc, { html: table_id })
        // doc.save(my_file)
    };
    // CSV Converterd
    DispatchCompleteListComponent.prototype.downloadCSV = function (data, filename) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_10__["saveAs"])(blob, filename);
    };
    DispatchCompleteListComponent.prototype.HideShow1 = function (index) {
        var i = Number(index);
        if (this.hideShowList1[i].status) {
            this.hideShowList1[i].status = false;
        }
        else {
            this.hideShowList1[i].status = true;
        }
    };
    DispatchCompleteListComponent.prototype.HideShow2 = function (index) {
        var i = Number(index);
        if (this.hideShowList2[i].status) {
            this.hideShowList2[i].status = false;
        }
        else {
            this.hideShowList2[i].status = true;
        }
    };
    DispatchCompleteListComponent.prototype.HideShow3 = function (index) {
        var i = Number(index);
        if (this.hideShowList3[i].status) {
            this.hideShowList3[i].status = false;
        }
        else {
            this.hideShowList3[i].status = true;
        }
    };
    DispatchCompleteListComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
        ];
        this.addFormControlWithValidations("CustomerId", []);
    };
    DispatchCompleteListComponent.prototype.onDeSelect = function () {
    };
    DispatchCompleteListComponent.prototype.dropdownSettings = function () {
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
    DispatchCompleteListComponent.prototype.radioChange = function (e) {
        this.customerDeSelect();
        this.getCustomerKeyPair();
        //   debugger
        //   this.formType = e.target.value;
        //   this.dropdownHideShow =!this.dropdownHideShow
        //   if(this.dropdownHideShow===true)
        //   {
        //     this.dropdownHideShow=false;
        //   }else
        //   {
        //     this.dropdownHideShow=true;
        //     this.selectedToWarehouse = {};
        //   }
        //   debugger
    };
    DispatchCompleteListComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            FormType: this.formType
        };
        // let apiAddress: string = this.apiConstant.CUSTOMER_KEYPAIR;
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR_BY_ORDERTYPE;
        this._dispatchService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCompleteListComponent.prototype.getAllCompletedDispatches = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.DISPATCH_LIST;
        this._dispatchService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.dispatchList = res;
            console.log("dispatch List : ", _this.dispatchList);
            // Now you can use jQuery DataTables :
            var table = jquery__WEBPACK_IMPORTED_MODULE_4__('table');
            _this.dataTable = table.DataTable({
                lengthMenu: [100, 500, 1000],
                "iDisplayLength": 100,
                retrieve: true
            });
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCompleteListComponent.prototype.customerChange = function (item) {
        var _this = this;
        debugger;
        if (item.Value != undefined) {
            this.selectedCustomer = {
                Id: item.Value,
                Name: item.Text
            };
        }
        else {
            this.selectedCustomer = {
                Id: item.Id,
                Name: item.Name
            };
        }
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CustomerId: this.selectedCustomer['Id'],
            FormType: this.formType
        };
        this.ngxService.start();
        var apiAddress = this.apiConstant.DISPATCH_LIST_BY_CUSTOMER;
        this._dispatchService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.dispatchList = res;
            console.log(_this.dispatchList);
            _this.idstribution();
            // Now you can use jQuery DataTables :
            // const table: any = $('table');
            // this.dataTable = table.DataTable({
            //   lengthMenu: [5, 10, 20, 50, 100],
            //   "iDisplayLength": 100
            // });
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchCompleteListComponent.prototype.idstribution = function () {
        debugger;
        this.dispatchListPending = this.dispatchList.filter(function (x) { return x.IsCompleted === false && x.AML_PickupOrder.StatusId === 0 && x.AML_PickupOrder.IsDeleted === false && x.IsDeleted === false; });
        this.dispatchListCompleted = this.dispatchList.filter(function (x) { return x.IsCompleted === true && x.AML_PickupOrder.StatusId === 0 && x.AML_PickupOrder.IsDeleted === false && x.IsDeleted === false; });
        this.dispatchListCompletedNotReceived = this.dispatchListCompleted.filter(function (x) { return x.IsCompleted === true && x.AML_PickupOrder.StatusId === 0 && x.AML_PickupOrder.IsDeleted === false && x.IsDeleted === false && x.IsReceived === null && x.IsPartialReceived === null; });
        this.dispatchListCancel = this.dispatchList.filter(function (x) { return x.AML_PickupOrder.StatusId === 0 && x.IsDeleted === true; });
        console.log(this.dispatchListCompleted);
        console.log(this.dispatchListCompletedNotReceived);
    };
    DispatchCompleteListComponent.prototype.Edit = function (dispatchId) {
        var updateUrl = [this.dropdownHideShow == true ? this.routesList.DELIVERS_CUSTOMER_CREATE : this.routesList.DELIVERS_TRANSFER_CREATE] + ("/" + dispatchId);
        // let updateUrl: string = this.routesList.DELIVERS_CUSTOMER_EDIT+`/${dispatchId}`;
        this.router.navigate([updateUrl]);
    };
    DispatchCompleteListComponent.prototype.reportmodal = function (dispId, type) {
        var _this = this;
        debugger;
        this.ngxService.start();
        var dispatchId = dispId;
        if (dispatchId) {
            var dischId = {
                DispatchId: dispId,
            };
            var dispatchBySKU = this.apiConstant.DISPATCH_DispathcDetailClipSKU;
            this._dispatchService.getKeyPair(dispatchBySKU, dischId)
                .subscribe(function (res) {
                debugger;
                _this.rep_dispatchDataTemp = res;
            }, function (error) {
                _this.ngxService.stop();
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
            var dispatchByIdUrl = this.apiConstant.DISPATCH_GetById + ("" + dispatchId);
            this._dispatchService.getData(dispatchByIdUrl)
                .subscribe(function (res) {
                debugger;
                _this.dispatchData = res;
                console.log(_this.dispatchData);
                if (type != "pickup") {
                    _this.openModal();
                }
                else {
                    _this.openModalpickup();
                }
                _this.rep_CustomerName = _this.dispatchData.AML_Customers.Name;
                _this.rep_PickupId = _this.dispatchData.AML_PickupOrder.PickupOrderId;
                _this.rep_GatePassNo = _this.dispatchData.GatePassNo;
                _this.rep_Address = _this.dispatchData.Address;
                _this.rep_Agent = _this.dispatchData.Agent;
                _this.rep_SupervisorName = _this.dispatchData.SupervisorName;
                _this.rep_DispatchDate = _this.dispatchData.DispatchDate;
                _this.rep_DriverName = _this.dispatchData.DriverName;
                _this.rep_PhoneNumber = _this.dispatchData.PhoneNumber;
                _this.rep_VehicleNo = _this.dispatchData.VehicleNo;
                _this.rep_OriginWarehouse = _this.dispatchData.AML_PickupOrder.OriginWarehouse;
                _this.rep_ContactPerson = _this.dispatchData.AML_PickupOrder.ContactPerson;
                _this.rep_Telephone = _this.dispatchData.AML_PickupOrder.Telephone;
                _this.rep_CustomerOrderNo = _this.dispatchData.AML_PickupOrder.CustomerOrderNo;
                _this.rep_CityName = _this.dispatchData.AML_PickupOrder.CityName;
                _this.rep_LoadingDate = _this.dispatchData.AML_PickupOrder.LoadingDate;
                _this.rep_waybill = _this.dispatchData.AML_PickupOrder.waybill;
                _this.rep_deliveryAddress = _this.dispatchData.AML_PickupOrder.Address;
                _this.rep_DistCode = _this.dispatchData.RefNo;
                _this.rep_DistAddress = _this.dispatchData.Remarks;
                _this.rep_DistName = _this.dispatchData.ProjectName;
                _this.rep_dispatchData = _this.rep_dispatchDataTemp;
                _this.rep_VehicleType = _this.dispatchData.VehicleSize;
                _this.rep_Transporter = _this.dispatchData.Transporter;
                _this.rep_SealNo = _this.dispatchData.SealNo;
                _this.TotalQty = 0;
                _this.TotalQtyInPacking = 0;
                _this.rep_dispatchData.forEach(function (element) {
                    _this.TotalQty = element.Quantity + _this.TotalQty;
                    // this.TotalQtyInPacking = (element.Quantity * element.AML_ItemInformation.QuantityInPacking) + this.TotalQtyInPacking;
                });
                _this.ngxService.stop();
            }, function (error) {
                _this.ngxService.stop();
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    DispatchCompleteListComponent.prototype.delete = function (id, pkid) {
        var _this = this;
        debugger;
        if (confirm("Are you sure to delete? ")) {
            var apiAddress = this.apiConstant.DISPATCH_ORDER_DELETE + ("/" + id);
            this._dispatchService.delete(apiAddress)
                .subscribe(function (res) {
                console.log(res);
                _this.deleteStatus = res;
                debugger;
                if (_this.deleteStatus == true) {
                    _this.showToastrSuccess("Disptach Transaction Delete Successfully");
                    _this.customerChange(_this.selectedCustomer);
                }
                else {
                    _this.showToastrError("Disptach Transaction Delete Un-Successfull");
                }
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
            this.router.navigate([]);
        }
    };
    DispatchCompleteListComponent.prototype.UploadImages = function (id) {
        var updateUrl = this.routesList.DELIVERS_CUSTOMER_IMAGE + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    DispatchCompleteListComponent.prototype.customerDeSelect = function () {
        this.selectedCustomer = {};
        this.customerKeyPair = [];
        this.formGroup.get("CustomerId").setValue('');
    };
    DispatchCompleteListComponent.prototype.Create = function (dispatchId) {
        debugger;
        var updateUrl = [this.formType == 'customer' ? this.routesList.DELIVERS_CUSTOMER_CREATE : this.routesList.DELIVERS_TRANSFER_CREATE] + ("/" + dispatchId);
        this.router.navigate([updateUrl]);
    };
    DispatchCompleteListComponent.prototype.openModal = function () {
        debugger;
        this.modalRef = this.modalService.open(this.AllModal, {
            size: "lg",
            modalClass: '',
            hideCloseButton: true,
            centered: true,
            backdrop: true,
            animation: true,
            keyboard: true,
            closeOnOutsideClick: true,
            backdropClass: "modal-backdrop",
            windowClass: 'modal-lg'
        });
    };
    DispatchCompleteListComponent.prototype.openModalpickup = function () {
        debugger;
        this.modalRef = this.modalService.open(this.AllModalpickup, {
            size: "lg",
            modalClass: '',
            hideCloseButton: true,
            centered: true,
            backdrop: true,
            animation: true,
            keyboard: true,
            closeOnOutsideClick: true,
            backdropClass: "modal-backdrop",
            windowClass: 'modal-lg'
        });
    };
    DispatchCompleteListComponent.prototype.closeModal = function () {
        this.redirectToCreateDispatch();
    };
    DispatchCompleteListComponent.prototype.redirectToCreateDispatch = function () {
        this.router.navigate([this.routesList.DELIVERS_CUSTOMER_CREATE]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('AllModal'),
        __metadata("design:type", Object)
    ], DispatchCompleteListComponent.prototype, "AllModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('AllModalpickup'),
        __metadata("design:type", Object)
    ], DispatchCompleteListComponent.prototype, "AllModalpickup", void 0);
    DispatchCompleteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-dispatch-complete-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/dispatch-complete/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/dispatch-complete-form.component.scss */ "./src/app/layout/content/dispatch-complete/styles/dispatch-complete-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_dispatch_complete_service__WEBPACK_IMPORTED_MODULE_1__["DispatchCompleteService"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"],
            ngb_modal__WEBPACK_IMPORTED_MODULE_8__["ModalManager"]])
    ], DispatchCompleteListComponent);
    return DispatchCompleteListComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/dispatch-complete/components/report.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-complete/components/report.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dispatch_complete_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dispatch-complete.service */ "./src/app/layout/content/dispatch-complete/services/dispatch-complete.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
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




var ReportComponent = /** @class */ (function (_super) {
    __extends(ReportComponent, _super);
    function ReportComponent(injector, _dispatchService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._dispatchService = _dispatchService;
        _this.ngxService = ngxService;
        return _this;
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.getAllCompletedDispatches();
    };
    ReportComponent.prototype.getAllCompletedDispatches = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.DISPATCH_LIST;
        this._dispatchService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.dispatchList = res;
            console.log("dispatch List : ", _this.dispatchList);
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ReportComponent.prototype.idstribution = function () {
        this.dispatchListCompleted = this.dispatchList.filter(function (x) { return x.IsCompleted === true && x.AML_PickupOrder.StatusId === 0 && x.AML_PickupOrder.IsDeleted === false; });
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ../templates/report.component.html */ "./src/app/layout/content/dispatch-complete/templates/report.component.html"),
            styles: [__webpack_require__(/*! ../styles/dispatch-complete-form.component.scss */ "./src/app/layout/content/dispatch-complete/styles/dispatch-complete-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_dispatch_complete_service__WEBPACK_IMPORTED_MODULE_1__["DispatchCompleteService"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]])
    ], ReportComponent);
    return ReportComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/dispatch-complete/components/uploadImages.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-complete/components/uploadImages.ts ***!
  \*****************************************************************************/
/*! exports provided: ImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _wkoza_ngx_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wkoza/ngx-upload */ "./node_modules/@wkoza/ngx-upload/index.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_helpers_services_environment_url_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/services/environment-url.service */ "./src/app/helpers/services/environment-url.service.ts");
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







var ImageUploadComponent = /** @class */ (function (_super) {
    __extends(ImageUploadComponent, _super);
    function ImageUploadComponent(uploader, injector, envUrl) {
        var _this = _super.call(this, injector) || this;
        _this.uploader = uploader;
        _this.envUrl = envUrl;
        _this.customerDropdownSettings = {};
        _this.contractDropdownSettings = {};
        _this.jobDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.selectedContract = {};
        _this.customerKeyPair = [];
        _this.contractKeyPair = [];
        _this.jobKeyPair = [];
        _this.jobList = [];
        return _this;
    }
    ImageUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addFormValidations();
        this.uploader.queue = [];
        this.uploader.onCancel$.subscribe(function (data) {
            console.log('file canceled: ' + data.file.name);
        });
        this.uploader.onProgress$.subscribe(function (data) {
            console.log('upload file in progree: ' + data.progress);
        });
        this.uploader.onSuccess$.subscribe(function (data) {
            console.log("upload file successful:  " + data.item + " " + data.body + " " + data.status + " " + data.headers);
        });
        this.uploader.onBeforeUploadItem$.subscribe(function (data) {
            var formData = new FormData();
            formData.append('FileContractId', _this.selectedContract.toString());
            formData.append('FileJobId', _this.selectedJobId);
            formData.append('FileCustomerId', _this.selectedCustomer.toString());
            data.formData = formData;
        });
    };
    ImageUploadComponent.prototype.upload = function (item) {
        /*  item.upload({
           method: 'POST',
           url: 'api/file/upload',
         }); */
    };
    ImageUploadComponent.prototype.makeThumbnail = function (item) {
        var reader = new FileReader();
        // read the image file as a data URL.
        reader.readAsDataURL(item.file);
    };
    ImageUploadComponent.prototype.createFile = function (fileFormValue) {
        var _this = this;
        var apiUrl = this.apiConstant.FILE_UPLOAD;
        var url = this.envUrl.urlAddress + apiUrl;
        this.uploader.uploadAll({
            method: 'POST',
            url: url
        });
        this.showToastrSuccess('Job executed Documents created successfully');
        setTimeout(function () {
            _this.redirectToJobExecuted();
        }, 2000);
    };
    ImageUploadComponent.prototype.redirectToJobExecuted = function () {
        this.router.navigate([this.routesList.DELIVERS_CUSTOMER_LISTING]);
    };
    ImageUploadComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
        ];
        this.addFormControlWithValidations("CustomerId", requiredValidation);
        this.addFormControlWithValidations("ContractId", requiredValidation);
        this.addFormControlWithValidations("JobId", requiredValidation);
    };
    ImageUploadComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    ImageUploadComponent.prototype.getErrorMessage = function (formElement) {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ourForm'),
        __metadata("design:type", Object)
    ], ImageUploadComponent.prototype, "ourForm", void 0);
    ImageUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "genx-job-executed-documents-form",
            template: __webpack_require__(/*! ../templates/images-upload.component.html */ "./src/app/layout/content/dispatch-complete/templates/images-upload.component.html"),
            styles: [__webpack_require__(/*! ../styles/dispatch-complete-form.component.scss */ "./src/app/layout/content/dispatch-complete/styles/dispatch-complete-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_wkoza_ngx_upload__WEBPACK_IMPORTED_MODULE_2__["HttpClientUploadService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            src_app_helpers_services_environment_url_service__WEBPACK_IMPORTED_MODULE_6__["EnvironmentUrlService"]])
    ], ImageUploadComponent);
    return ImageUploadComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/dispatch-complete/dispatch-complete.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-complete/dispatch-complete.module.ts ***!
  \******************************************************************************/
/*! exports provided: ngxDropTargetOptions, DispatchCompleteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngxDropTargetOptions", function() { return ngxDropTargetOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchCompleteModule", function() { return DispatchCompleteModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wkoza_ngx_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wkoza/ngx-upload */ "./node_modules/@wkoza/ngx-upload/index.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var src_app_helpers_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/modules/shared.module */ "./src/app/helpers/modules/shared.module.ts");
/* harmony import */ var _components_dispatch_complete_edit_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dispatch-complete-edit-form.component */ "./src/app/layout/content/dispatch-complete/components/dispatch-complete-edit-form.component.ts");
/* harmony import */ var _components_dispatch_complete_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dispatch-complete-form.component */ "./src/app/layout/content/dispatch-complete/components/dispatch-complete-form.component.ts");
/* harmony import */ var _components_dispatch_complete_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dispatch-complete-list.component */ "./src/app/layout/content/dispatch-complete/components/dispatch-complete-list.component.ts");
/* harmony import */ var _components_uploadImages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/uploadImages */ "./src/app/layout/content/dispatch-complete/components/uploadImages.ts");
/* harmony import */ var _services_dispatch_complete_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/dispatch-complete.service */ "./src/app/layout/content/dispatch-complete/services/dispatch-complete.service.ts");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var _components_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/report.component */ "./src/app/layout/content/dispatch-complete/components/report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var ngxDropTargetOptions = {
    color: 'dropZoneColor',
    colorDrag: 'dropZoneColorDrag',
    colorDrop: 'dropZoneColorDrop'
};
var routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: _components_dispatch_complete_list_component__WEBPACK_IMPORTED_MODULE_10__["DispatchCompleteListComponent"],
            },
            {
                path: "create/:Id",
                component: _components_dispatch_complete_form_component__WEBPACK_IMPORTED_MODULE_9__["DispatchCompleteFormComponent"],
            },
            {
                path: "edit/:Id",
                component: _components_dispatch_complete_edit_form_component__WEBPACK_IMPORTED_MODULE_8__["DispatchCompleteEditFormComponent"],
            },
            {
                path: "imageupload/:Id",
                component: _components_uploadImages__WEBPACK_IMPORTED_MODULE_11__["ImageUploadComponent"],
            },
            {
                path: "report/:Id",
                component: _components_report_component__WEBPACK_IMPORTED_MODULE_16__["ReportComponent"],
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var DispatchCompleteModule = /** @class */ (function () {
    function DispatchCompleteModule() {
    }
    DispatchCompleteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ngb_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_14__["NgxPrintModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                src_app_helpers_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_6__["UiSwitchModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"],
                _wkoza_ngx_upload__WEBPACK_IMPORTED_MODULE_4__["NgxUploadModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_15__["NgxUiLoaderModule"]
            ],
            declarations: [
                _components_dispatch_complete_form_component__WEBPACK_IMPORTED_MODULE_9__["DispatchCompleteFormComponent"], _components_dispatch_complete_list_component__WEBPACK_IMPORTED_MODULE_10__["DispatchCompleteListComponent"], _components_dispatch_complete_edit_form_component__WEBPACK_IMPORTED_MODULE_8__["DispatchCompleteEditFormComponent"],
                _components_uploadImages__WEBPACK_IMPORTED_MODULE_11__["ImageUploadComponent"],
                _components_report_component__WEBPACK_IMPORTED_MODULE_16__["ReportComponent"]
            ],
            providers: [
                _services_dispatch_complete_service__WEBPACK_IMPORTED_MODULE_12__["DispatchCompleteService"]
            ],
            entryComponents: []
        })
    ], DispatchCompleteModule);
    return DispatchCompleteModule;
}());



/***/ }),

/***/ "./src/app/layout/content/dispatch-complete/services/dispatch-complete.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-complete/services/dispatch-complete.service.ts ***!
  \****************************************************************************************/
/*! exports provided: DispatchCompleteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchCompleteService", function() { return DispatchCompleteService; });
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


var DispatchCompleteService = /** @class */ (function (_super) {
    __extends(DispatchCompleteService, _super);
    function DispatchCompleteService(injector) {
        return _super.call(this, injector) || this;
    }
    DispatchCompleteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], DispatchCompleteService);
    return DispatchCompleteService;
}(src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]));



/***/ }),

/***/ "./src/app/layout/content/dispatch-complete/styles/dispatch-complete-form.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-complete/styles/dispatch-complete-form.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block {\n  color: red; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: 20px !important;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.toggle-label {\n  margin-top: 10px;\n  margin-right: -10px;\n  color: green;\n  font-size: 15px; }\n\n.shipment-item-add {\n  margin-top: 17px; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n  transition: opacity .15s linear; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n  transition: -webkit-transform .3s ease-out;\n  transition: transform .3s ease-out;\n  transition: transform .3s ease-out, -webkit-transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n  transform: translate(0, -25%); }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; } }\n\n.pallets-dropdown {\n  width: 150px; }\n"

/***/ }),

/***/ "./src/app/layout/content/dispatch-complete/templates/edit-form.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-complete/templates/edit-form.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n      {{dropdownHideShow == true ? 'CUSTOMER' : 'TRANSFER'}} DISPATCH PICKUP DETAILS\r\n     \r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li><a routerLink=\"[this.routesList.DISPATCH_COMPLETE_LISTING]\">Completed dispatches</a></li>\r\n      <li class=\"active\">Create</li>\r\n    </ol>\r\n  </section>\r\n  <section class=\"content\">\r\n      <div col-md-12>\r\n        <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createDispatch(formGroup.value)\">\r\n          <div class=\"box box-primary\">\r\n            <div class=\"box-header with-border\">\r\n              <div class=\"form-group  pull-right\">\r\n                  <button type=\"button\" (click)=\"redirectToDispatchList()\" class=\"btn-wms\">Dispatches List</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"box-body box-profile\">\r\n                        <ul class=\"list-group list-group-unbordered\">\r\n                            <li class=\"list-group-item\">\r\n                                <b>Customer</b><a class=\"pull-right\">{{dispatch.AML_Customers.Name}}</a>\r\n                            </li>\r\n                            <li class=\"list-group-item\">\r\n                                <b>Pickup</b><a class=\"pull-right\">Pickup-list-{{dispatch.DispatchId}}</a>\r\n                            </li>\r\n                            <li class=\"list-group-item\">\r\n                                <b>Agent</b><a class=\"pull-right\">{{dispatch.Agent}}</a>\r\n                            </li>\r\n    \r\n                        </ul>\r\n                    </div>             \r\n                </div>\r\n    \r\n                <div class=\"col-md-6\">\r\n                    <div class=\"box-body box-profile\">\r\n                        <ul class=\"list-group list-group-unbordered\">\r\n                            <li class=\"list-group-item\">\r\n                                <b>Gate Pass No</b><a class=\"pull-right\">{{dispatch.GatePassNo}}</a>\r\n                            </li>\r\n                            <li class=\"list-group-item\">\r\n                                <b>Phone Number</b><a class=\"pull-right\">{{dispatch.PhoneNumber}}</a>\r\n                            </li>\r\n                            <li class=\"list-group-item\">\r\n                                <b>Address</b><a class=\"pull-right\">{{dispatch.Address}}</a>\r\n                            </li>\r\n    \r\n                        </ul>\r\n                    </div>             \r\n                </div>\r\n  \r\n            </div>\r\n  \r\n            <div class=\"box box-primary\">\r\n                <div class=\"box-header with-border\">\r\n                  <div class=\"form-group\">\r\n                      <h3 class=\"box-title detail-title\">Item detail</h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-body\">\r\n                      <div class=\"col-md-12\">\r\n                          <div class=\"row\">\r\n                              <div class=\"col-sm-12 table-responsive\">\r\n                                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                                  <thead>\r\n                                    <tr role=\"row\">\r\n                                      <th>\r\n                                        Item Id\r\n                                      </th>\r\n                                      <th>\r\n                                        Item Name\r\n                                      </th>\r\n                                      <th>\r\n                                        Location\r\n                                      </th>\r\n                                      <th>\r\n                                        Pallet No\r\n                                      </th>\r\n                                      <th>\r\n                                        Quantity\r\n                                      </th>\r\n                                      <th>\r\n                                        Batch/Serial\r\n                                      </th>\r\n                                     \r\n                                    </tr>\r\n                                  </thead>\r\n                                  <tbody>\r\n                                    <tr role=\"row\" *ngFor=\"let item of dispatch.AML_DispatchDetail\">\r\n                                      <td>{{item.ItemId}}</td>\r\n                                      <td>{{item.AML_ItemInformation.Name}}</td>\r\n                                      <td>{{item.Location}}</td>\r\n                                      <td>{{item.PalletNo}}</td>\r\n                                      <td>{{item.Quantity}}</td>\r\n                                      <td>{{item.BatchNo}}</td>\r\n                                      \r\n                                    </tr>\r\n                                  </tbody>  \r\n                                </table>\r\n                              </div>\r\n                            </div>\r\n                      </div>\r\n                     \r\n                </div>\r\n              </div>\r\n  \r\n            <div class=\"box-footer\">\r\n                <!-- <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Pickup for Dispatch</button> -->\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <ngx-ui-loader></ngx-ui-loader>\r\n      </div>\r\n    </section>\r\n   "

/***/ }),

/***/ "./src/app/layout/content/dispatch-complete/templates/form.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-complete/templates/form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    {{dropdownHideShow == true ? 'CUSTOMER' : 'TRANSFER'}} DISPATCH PICKUP CREATE\r\n\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.DISPATCH_COMPLETE_LISTING]\">Completed dispatches</a></li>\r\n    <li class=\"active\">Create</li>\r\n  </ol>\r\n</section>\r\n<section class=\"content\">\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createDispatch(formGroup.value)\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group  pull-right\">\r\n            <button type=\"button\" (click)=\"redirectToDispatchList()\" class=\"btn-wms\">Completed Dispatches</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Customer</label>\r\n                <div>\r\n                  <input class=\"form-control\" value=\" {{dispatch.AML_Customers.Name}}\" readonly>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Select Pickup</label>\r\n                <div>\r\n                  <input class=\"form-control\" value=\"Pickup-{{dispatch.PickupOrderId}}\" readonly>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Bilty#</label>\r\n                <input type=\"text\" formControlName=\"Agent\" class=\"form-control\" placeholder=\"Enter Bilty#\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Agent.invalid\">\r\n                  {{getErrorMessage('Agent')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Supervisor Name</label>\r\n                <input type=\"text\" formControlName=\"SupervisorName\" class=\"form-control\"\r\n                  placeholder=\"Enter Supervisor Name\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.SupervisorName.invalid\">\r\n                  {{getErrorMessage('SupervisorName')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Delivery Date-Time</label>\r\n                <input type=\"datetime-local\" formControlName=\"DispatchDate\" class=\"form-control\"\r\n                  placeholder=\"Enter Delivery Date\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.DispatchDate.invalid\">\r\n                  {{getErrorMessage('DispatchDate')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Vehicle No</label>\r\n                <input type=\"text\" formControlName=\"VehicleNo\" class=\"form-control\" placeholder=\"Enter Vehicle No\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.VehicleNo.invalid\">\r\n                  {{getErrorMessage('VehicleNo')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Driver Name</label>\r\n                <input type=\"text\" formControlName=\"DriverName\" class=\"form-control\" placeholder=\"Enter Driver Name\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.DriverName.invalid\">\r\n                  {{getErrorMessage('DriverName')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Driver Number</label>\r\n                <input type=\"text\" formControlName=\"PhoneNumber\" class=\"form-control\" placeholder=\"Enter Phone Number\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.PhoneNumber.invalid\">\r\n                  {{getErrorMessage('PhoneNumber')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Manual GatePass </label>\r\n                <input formControlName=\"Address\" class=\"form-control\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Address.invalid\">\r\n                  {{getErrorMessage('Address')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Vehicle Size / Type</label>\r\n                <input type=\"text\" formControlName=\"VehicleSize\" class=\"form-control\" placeholder=\"Enter Vehicle Size / Type\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.VehicleSize.invalid\">\r\n                  {{getErrorMessage('VehicleSize')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Transporter</label>\r\n                <input type=\"text\" formControlName=\"Transporter\" class=\"form-control\" placeholder=\"Enter Transporter Info\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Transporter.invalid\">\r\n                  {{getErrorMessage('Transporter')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Seal No</label>\r\n                <input formControlName=\"SealNo\" class=\"form-control\" placeholder=\"Enter Seal No\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.SealNo.invalid\">\r\n                  {{getErrorMessage('SealNo')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Shift</label>\r\n                <input formControlName=\"Shift\" class=\"form-control\" placeholder=\"Enter Shift\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Shift.invalid\">\r\n                  {{getErrorMessage('Shift')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Reporting Date-Time</label>\r\n                <input type=\"datetime-local\" formControlName=\"ReportingTime\"  #ReportingTime class=\"form-control\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ReportingTime.invalid\">\r\n                  {{getErrorMessage('ReportingTime')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Time IN</label>\r\n                <input type=\"datetime-local\" formControlName=\"TimeIn\" class=\"form-control\" #TimeIn>\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.TimeIn.invalid\">\r\n                  {{getErrorMessage('TimeIn')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Time OUT</label>\r\n                <input type=\"datetime-local\" formControlName=\"TimeOut\" class=\"form-control\" #TimeOut>\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.TimeOut.invalid\">\r\n                  {{getErrorMessage('TimeOut')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Remarks/Instructions</label>\r\n                <textarea formControlName=\"Remarks\" class=\"form-control\"></textarea>\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Remarks.invalid\">\r\n                  {{getErrorMessage('Remarks')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\" *ngIf=\"pickupOrder!=null\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Warehouse</label>\r\n                    <p>{{pickupOrder.OriginWarehouse}}</p>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Contact Person</label>\r\n                    <p>{{pickupOrder.ContactPerson}}</p>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Telephone</label>\r\n                    <p>{{pickupOrder.Telephone}}</p>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Loading Date</label>\r\n                    <p>{{pickupOrder.LoadingDate | date}}</p>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Pickup Method</label>\r\n                    <p *ngIf=\"pickupOrder.PickupMethod==1\">FIFO</p>\r\n                    <p *ngIf=\"pickupOrder.PickupMethod==2\">LIFO</p>\r\n                    <p *ngIf=\"pickupOrder.PickupMethod==3\">LEFO</p>\r\n                    <p *ngIf=\"pickupOrder.PickupMethod==4\">FEFO</p>\r\n                    <p *ngIf=\"pickupOrder.PickupMethod==5\">Custom</p>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Distributor Code</label>\r\n                    <p>{{DistCode}}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-4\" *ngIf=\"pickupOrder!=null\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Order ID</label>\r\n                    <p>{{pickupOrder.CustomerOrderNo}}</p>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>City</label>\r\n                    <p>{{pickupOrder.CityName}}</p>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Distribure</label>\r\n                    <p>{{DistName}}</p>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                  <div class=\"form-group\">\r\n                    <label>Delivery Address</label>\r\n                    <p>{{DistAddress}}</p>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group\">\r\n              <h3 class=\"box-title detail-title\">SKU Detail</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <!-- <div class=\"col-md-12\">\r\n                      <div class=\"col-md-5\">\r\n                          <div class=\"form-group\">\r\n                              <label>Item</label>\r\n                              <ng-multiselect-dropdown [placeholder]=\"'Select one'\"\r\n                              [data]=\"itemKeyPair\"\r\n                                [settings]=\"itemDropdownSettings\"\r\n                                 formControlName=\"ItemId\"\r\n                                 (onDeSelect)=\"itemDeSelect()\"\r\n                                (onSelect)=\"itemChange($event)\">\r\n                              </ng-multiselect-dropdown>\r\n                            </div>\r\n                      </div>\r\n\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                            <label>Available Quantity</label>\r\n                         <input type=\"number\" readonly formControlName=\"QtyAvailableToAdd\" class=\"form-control\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group\">\r\n                            <label>Quantity</label>\r\n                         <input type=\"number\" formControlName=\"QtyToAdd\" (blur)=\"quantityChange($event)\" class=\"form-control\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <div class=\"form-group shipment-item-add\">\r\n                          <button type=\"button\" id=\"add\" class=\"btn btn-sm btn-wms\" (click)=\"addItemIntoItemPostList()\">\r\n                            Add Items\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div> -->\r\n            <div class=\"col-md-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 table-responsive\">\r\n                  <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th>SKU ID</th>\r\n                        <th>SKU Name</th>\r\n                        <!-- <th>Status</th> -->\r\n                        <th>Avail.Stock</th>\r\n                        <th>Required Quantity</th>\r\n                        <th>Supply Quantity</th>\r\n                        <!-- <th>Location</th> -->\r\n                        <th>Batch/Serial</th>\r\n                        <th>MFG Date</th>\r\n                        <th>Exp Date</th>\r\n                        <!-- <th>Pallet No</th>\r\n                        <th>SN No</th>\r\n                        <th>PR No</th>\r\n                        <th>SR No</th>\r\n                        <th>SLA Mode</th>\r\n                        <th>InboundPool</th> -->\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let item of PickupOrderItemList\">\r\n                        <td>{{item.ItemInformationId}}</td>\r\n                        <td>{{item.Description}} | {{item.ItemName}}</td>\r\n                        <!-- <td>{{item.Status}}</td> -->\r\n                        <td>{{item.AvailableStock}}</td>\r\n                        <td>{{item.RequiredQuantity}}</td>\r\n                        <td><input type=\"number\" value=\"{{item.Quantity}}\" (change)=\"addItemRelOrd($event,item.ItemInformationId,item.BatchNo)\"></td>\r\n                        <!-- <td>{{item.Location}}</td> -->\r\n                        <td>{{item.BatchNo}}</td>\r\n                        <td>{{item.MfgDate | date}}</td>\r\n                        <td>{{item.ExpiryDate | date}}</td>\r\n                        <!-- <td>{{item.PalletNo}}</td>\r\n                        <td>{{item.SNno}}</td>\r\n                        <td>{{item.PRno}}</td>\r\n                        <td>{{item.SRno}}</td>\r\n                        <td>{{item.SlaMode}}</td>\r\n                        <td>{{item.InboundPool}}</td> -->\r\n                      </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                      <tr>\r\n                        <td colspan=\"2\"></td>\r\n                        <td>Total Qty :</td>\r\n                        <td></td>\r\n                        <td>{{TotalSupplyQty}}</td>\r\n                      </tr>\r\n                    </tfoot>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"box-footer\">\r\n          <button type=\"submit\" [disabled]=\"formGroup.invalid || this.FlagDispatch=='True'\"\r\n            class=\"btn btn-success pull-right\">Pickup for Dispatch</button>\r\n          <!-- <button   class=\"btn btn-success pull-right\" (click)=\"openModal()\">Test modal</button> -->\r\n\r\n        </div>\r\n        <ngx-ui-loader></ngx-ui-loader>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n\r\n\r\n<modal #AllModal>\r\n  <!-- <modal-header>\r\n\r\n\r\n  </modal-header> -->\r\n\r\n  <modal-content style=\"padding:1px\">\r\n    <div class=\"row col col-sm-12\" id=\"print-section\">\r\n      <div class=\"row\">\r\n        <div class=\"col col-sm-3\" style=\"text-align: left;\">\r\n          <img id=\"logo\" src={{LogoPath}} height=\"45\" width=\"160\" style=\"background-color: white;\">\r\n        </div>\r\n        <div class=\"col col-sm-8 pull-right\" style=\"margin-top: 10px; text-align: left;\">\r\n          <address>\r\n            <strong>PEPSICO EXTERNAL WAREHOUSE</strong> <br>\r\n            <strong>Managed By : {{CompanyName}}</strong> <br>\r\n            {{CompanyAddress}}\r\n          </address>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-sm-12\" style=\"text-align: center; padding-top: 30px;\">\r\n        <h4><b><u>{{dropdownHideShow == true ? 'CUSTOMER' : 'TRANSFER'}} DELIVERY CHALLAN</u></b></h4>\r\n      </div>\r\n      <!-- info row -->\r\n      <div class=\"row col col-sm-12 table-responsive\" style=\"min-height: 150px;\">\r\n        <div class=\"col col-sm-6\" id=\"invoice-col\">\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>Customer Name :</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{dispatch.AML_Customers.Name}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>Auto Pickup#:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>Pickup-{{dispatch.PickupOrderId}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>Auto GP#:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{dispatch.GatePassNo}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>Manual GatePass#:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{Address}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>Agent:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{Agent}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>Supervisor Name:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{SupervisorName}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>Delivery Date:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{DispatchDate | date}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>Driver Name:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{DriverName}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>Driver Number:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{PhoneNumber}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>Vehicle Info:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{VehicleNo}} - {{VehicleSize}} <br> {{Transporter}} - {{SealNo}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col col-sm-6\" id=\"invoice-col\">\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>Warehouse:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{OriginWarehouse}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>Contact Person:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{pickupOrder.ContactPerson}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>Telephone:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{pickupOrder.Telephone}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>PR / SR / PL:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{pickupOrder.CustomerOrderNo}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>City:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{pickupOrder.CityName}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>Loading Date:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{pickupOrder.LoadingDate | date}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>Bilty#:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{pickupOrder.waybill}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>Distributor Info:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{DistCode}} - {{DistName}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label><b>Address:</b></label>\r\n            </div>\r\n            <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n              <label>{{DistAddress}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- /.row -->\r\n\r\n      <!-- Table row -->\r\n      <div class=\"row col-sm-12\">\r\n        <div class=\"col-sm-12\">\r\n          <table class=\"table dataTable\">\r\n            <thead>\r\n              <tr role=\"row\">\r\n                <th style=\"border: 1px solid black;\">Sr.</th>\r\n                <th style=\"border: 1px solid black; width:30%\">Particulars</th>\r\n                <th style=\"border: 1px solid black; width:15%\">Quantity</th>\r\n                <th style=\"border: 1px solid black; width:10%\">Weight</th>\r\n                <th style=\"border: 1px solid black; width:10%\">Batch/Serial</th>\r\n                <th style=\"border: 1px solid black; width:15%\">MFG Date</th>\r\n                <th style=\"border: 1px solid black; width:15%\">EXP Date</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let item of DispatchOrderItemList.AML_DispatchDetail; index as i\">\r\n              <tr>\r\n                <td style=\"border: 1px solid black;\">{{i+1}}</td>\r\n                <td style=\"border: 1px solid black;\">{{item.AML_ItemInformation.Description}} | {{item.AML_ItemInformation.Name}}</td>\r\n                <td style=\"border: 1px solid black;\">{{item.Quantity | number:'1.0-2'}}</td>\r\n                <td style=\"border: 1px solid black;\">{{item.AML_ItemInformation.Weight * item.Quantity | number:'1.0-2'}}</td>\r\n                <td style=\"border: 1px solid black;\">{{item.BatchNo}}</td>\r\n                <td style=\"border: 1px solid black;\">{{item.MfgDate | date}}</td>\r\n                <td style=\"border: 1px solid black;\">{{item.ExpiryDate | date}}</td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <td></td>\r\n                <td>Total Qty:</td>\r\n                <td>{{TotalSupplyQty | number:'1.0-2'}}</td>\r\n                <td></td>\r\n                <!-- <td> {{TotalQtyInPacking}}</td> -->\r\n            </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n        <!-- /.col -->\r\n      </div>\r\n    </div>\r\n  </modal-content>\r\n\r\n  <modal-footer>\r\n    <!-- <div class=\"row no-print\" id=\"printButton\"> -->\r\n      <div class=\"col-sm-10\">\r\n        <!-- <a  (click)=\"print()\" class=\"btn btn-default\"><i class=\"fa fa-print\"></i> Print</a> -->\r\n        <button [printStyle]=\"{table : {'font-size': '10px'},body : {'font-size': '10px'}}\"\r\n          class=\"btn-genx hidden-print print-btn\" printTitle=\"DispatchOrder\" [useExistingCss]=\"true\" ngxPrint\r\n          printSectionId=\"print-section\">\r\n          <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i>\r\n          </span></button>\r\n          <button type=\"button\" (click)=\"CloseModal()\" class=\"btn btn-success\">Close</button>\r\n      </div>\r\n    <!-- </div> -->\r\n  </modal-footer>\r\n</modal>"

/***/ }),

/***/ "./src/app/layout/content/dispatch-complete/templates/images-upload.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-complete/templates/images-upload.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n      IMAGES UPLOAD\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li><a routerLink=\"[this.routesList.SIGNED_CONTRACT_LISTING]\">Signed Contracts</a></li>\r\n      <li class=\"active\">Edit</li>\r\n    </ol>\r\n  </section>\r\n  \r\n  <section class=\"content\">\r\n    <div col-md-12>\r\n        <div class=\"box box-primary\" >\r\n        \r\n            <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createFile(formGroup.value)\">\r\n          <div style=\"margin-left: 15px; margin-right: 15px; margin-top: 60px\">\r\n            <h1>Upload File</h1>\r\n            <hr>\r\n          \r\n             <form #ourForm=\"ngForm\">\r\n          \r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-md-3\">\r\n                        <h3>Add files</h3>\r\n                        <div>\r\n                                <div class=\"well my-drop-zone\" ngxDragAndDrop *ngxInputFile>\r\n                                    <h5>Drop files here to upload</h5>\r\n                                    <h6>Or click here to select local files.</h6>\r\n                                </div>\r\n                                or via a simple button-like : <span class=\"btn btn-outline-success btn-s\" *ngxInputFile>Upload local files</span>\r\n                        </div>\r\n                    </div>\r\n          \r\n                    <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\r\n                       \r\n                        <div class=\"card\" style=\"margin-top: 20px\">\r\n          \r\n                            <table class=\"table\" style=\"font-size: 14px\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th></th>\r\n                                    <th width=\"40%\">Name</th>\r\n                                    <th>Size</th>\r\n                                    <th>Progress</th>\r\n                                    <th>Actions</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                <tr *ngFor=\"let itemFile of uploader.queue\"\r\n                                    [ngClass]=\"{'table-success' : itemFile.isSuccess, 'table-danger' : itemFile.isError, 'table-warning' : itemFile.isUploading  }\">\r\n                                    <td>\r\n                                        <div [ngxThumbnail]=\"itemFile\"></div>\r\n                                        <div style=\"text-align: center\">name: {{ itemFile.formData.get('name') }}</div>\r\n                                    </td>\r\n                                    <td style=\"padding-left: 10px;\">{{ itemFile.file.name }}</td>\r\n                                    <td>{{ itemFile.file.size/1024/1024 | number:'1.0-2' }} MB</td>\r\n                                    \r\n                                    <td style=\"text-align: center\">\r\n                                     \r\n                                        <button type=\"button\" class=\"btn btn-outline-warning btn-sm\" (click)=\"itemFile.cancel()\"\r\n                                                [disabled]=\"!itemFile.uploadInProgress || itemFile.isCancel\">\r\n                                            Cancel\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"itemFile.remove()\"\r\n                                                [disabled]=\"itemFile.isSuccess || itemFile.uploadInProgress\">\r\n                                            Remove\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n          \r\n                    </div>\r\n                </div>\r\n            </form> \r\n          </div>\r\n        \r\n         \r\n         \r\n       \r\n          <div class=\"box-footer\">\r\n              \r\n            <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Add</button>\r\n        </div>\r\n            </form>\r\n        </div>\r\n  \r\n  \r\n    </div>\r\n  </section>\r\n  \r\n  "

/***/ }),

/***/ "./src/app/layout/content/dispatch-complete/templates/list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-complete/templates/list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    {{isCustomerDelivers == true ? 'CUSTOMER' : 'TRANSFER'}} DISPATCHES/DELIVERS LISTING\r\n    <!-- <small>\r\n      <button class=\"btn-wms\" (click)=\"redirectToCreateDispatch()\"><i class=\"fa fa-plus\"></i> New</button>\r\n    </small> -->\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.DISPATCH_COMPLETE_LISTING]\">Dispatched Pickups</a></li>\r\n    <li class=\"active\">Listing</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header\">\r\n          <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n          <div class=\"col-md-12\">\r\n            <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate>\r\n              <div class=\"col-md-3\">\r\n                <!-- <div class=\"form-group \">\r\n                &nbsp; <input type=\"radio\"   checked=\"true\" value=\"customer\" (change)=\"radioChange($event)\"  name=\"formMode\">&nbsp;\r\n                Customer Oder&nbsp; <input type=\"radio\" value=\"transfer\" (change)=\"radioChange($event)\"  name=\"formMode\" >&nbsp; Transfer Order\r\n              </div > -->\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Customer</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                    [settings]=\"customerDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedCustomer')\"\r\n                    formControlName=\"CustomerId\" (onSelect)=\"customerChange($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                    Required\r\n                  </span>\r\n                </div>\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <ul class=\"nav nav-tabs\">\r\n            <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Pending</a></li>\r\n            <li><a data-toggle=\"tab\" href=\"#menu1\">Completed</a></li>\r\n            <li><a data-toggle=\"tab\" href=\"#cancel\">Cancel</a></li>\r\n\r\n          </ul>\r\n\r\n          <div class=\"tab-content\">\r\n            <div id=\"home\" class=\"tab-pane fade in active\">\r\n              <h3>Pending</h3>\r\n              <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 table-responsive\" id=\"myTable1\">\r\n                    <nav>\r\n                      <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 58%; \r\n                          background-color: #6c757d;\">\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"downloadCSV(this.dispatchListPending, 'transfer-dispatch-pending-list.csv')\"\r\n                            style=\"color: white;\">\r\n                            Download CSV</a>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"exportExcel('transfer-dispatch-pending-list.xlsx', 'tbl1', 'Transfer Dispatch Pending List')\"\r\n                            style=\"color: white;\">\r\n                            Download Excel</a>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"createPdf('transfer-dispatch-pending-list.pdf', '#tbl1')\"\r\n                            style=\"color: white;\">Export To PDF</a>\r\n                        </li>\r\n                        <li>\r\n                          <button\r\n                            [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                            class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                            ngxPrint printSectionId=\"myTable1\">\r\n                            Print\r\n                          </button>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item dropdown\">\r\n                          <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                            Column Hidden\r\n                          </a>\r\n                          <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                              width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('0')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Sr #\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('1')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Ref #\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('2')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Customer\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('3')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Customer Order No\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('4')\" data-column=\"2\"\r\n                              style=\"color: white;\">\r\n                              Warehouse\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('5')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Order Date\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('6')\" data-column=\"0\" style=\"color: white;\">\r\n                              Bilty#\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('7')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Contact Person\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('8')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              City\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('9')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Address\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('10')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Pickup Plan Id\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('11')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Status\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('12')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Action\r\n                            </a>\r\n                          </div>\r\n                        </li>\r\n                      </ol>\r\n                    </nav>\r\n                    <table class=\"table table-bordered table-hover dataTable\" role=\"grid\" id=\"tbl1\">\r\n                      <thead>\r\n                        <tr role=\"row\">\r\n                          <th *ngIf=\"!hideShowList1[0].status\">Sr#</th>\r\n                          <th *ngIf=\"!hideShowList1[1].status\">Ref#</th>\r\n                          <th *ngIf=\"!hideShowList1[2].status\">Customer</th>\r\n                          <th *ngIf=\"!hideShowList1[3].status\">Customer Order No</th>\r\n                          <th *ngIf=\"!hideShowList1[4].status\">Warehouse</th>\r\n                          <th *ngIf=\"!hideShowList1[5].status\">Order Date</th>\r\n                          <th *ngIf=\"!hideShowList1[6].status\">Bilty#</th>\r\n                          <th *ngIf=\"!hideShowList1[7].status\">Contact Person</th>\r\n                          <th *ngIf=\"!hideShowList1[8].status\">City</th>\r\n                          <th *ngIf=\"!hideShowList1[9].status\">Address</th>\r\n                          <th *ngIf=\"!hideShowList1[10].status\">Pickup Plan Id</th>\r\n                          <th *ngIf=\"!hideShowList1[11].status\">Status</th>\r\n                          <th *ngIf=\"!hideShowList1[12].status\">Action</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr role=\"row\" *ngFor=\"let dispatch of dispatchListPending; let i = index\">\r\n                          <td *ngIf=\"!hideShowList1[0].status\">{{i+1}}</td>\r\n                          <td *ngIf=\"!hideShowList1[1].status\">{{dispatch.DispatchId}}</td>\r\n                          <td *ngIf=\"!hideShowList1[2].status\">{{dispatch.AML_Customers.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList1[3].status\">{{dispatch.AML_PickupOrder.CustomerOrderNo}}</td>\r\n                          <td *ngIf=\"!hideShowList1[4].status\">{{dispatch.AML_Warehouse.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList1[5].status\">{{dispatch.AML_PickupOrder.OrderDate | date}}</td>\r\n                          <td *ngIf=\"!hideShowList1[6].status\">{{dispatch.AML_PickupOrder.waybill}}</td>\r\n                          <td *ngIf=\"!hideShowList1[7].status\">{{dispatch.AML_PickupOrder.ContactPerson}}</td>\r\n                          <td *ngIf=\"!hideShowList1[8].status\">{{dispatch.AML_PickupOrder.AML_City.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList1[9].status\">{{dispatch.AML_PickupOrder.Address}}</td>\r\n                          <td *ngIf=\"!hideShowList1[10].status\">{{dispatch.AML_PickupOrder.PickupOrderId}}</td>\r\n                          <td *ngIf=\"!hideShowList1[11].status\">\r\n                            <span *ngIf=\"dispatch.IsCompleted==true; else inactive_span\"\r\n                              class=\"label label-success\">Complete</span>\r\n                            <ng-template #inactive_span> <span class=\"bg-red label\">Pending</span></ng-template>\r\n                          </td>\r\n                          <td *ngIf=\"!hideShowList1[12].status\">\r\n                            <!-- <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"Edit(dispatch.DispatchId)\"><i\r\n                              class=\"fa fa-info\"></i></button> -->\r\n                              <button type=\"button\" id=\"report\" title=\"Print Dispatched Order\" class=\"editBtn btn-danger\"\r\n                              (click)=\"reportmodal(dispatch.DispatchId, 'pickup')\">\r\n                              <i style=\"font-size:14px !important\" class=\"fa fa-file\"></i>\r\n                            </button>\r\n                            <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\"\r\n                              (click)=\"Create(dispatch.DispatchId)\"><i class=\"fa fa-edit\"></i></button>\r\n                            <button type=\"button\" id=\"update\" class=\"editBtn btn-danger\" data-toggle=\"tooltip\"\r\n                              data-placement=\"bottom\" title=\"Delete Dispatch Order\" (click)=\"delete(dispatch.DispatchId)\"><i\r\n                                class=\"fa fa-times-circle-o\"></i></button>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <div id=\"menu1\" class=\"tab-pane fade\">\r\n              <h3>Completed</h3>\r\n              <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 table-responsive\" id=\"myTable2\">\r\n                    <nav>\r\n                      <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 58%; \r\n                          background-color: #6c757d;\">\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"downloadCSV(this.dispatchListCompleted, 'transfer-dispatch-completed-list.csv')\"\r\n                            style=\"color: white;\">\r\n                            Download CSV</a>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"exportExcel('transfer-dispatch-completed-list.xlsx', 'tbl2', 'Transfer Dispatch Completed List')\"\r\n                            style=\"color: white;\">\r\n                            Download Excel</a>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"createPdf('transfer-dispatch-completed-list.pdf', '#tbl2')\"\r\n                            style=\"color: white;\">Export To PDF</a>\r\n                        </li>\r\n                        <li>\r\n                          <button\r\n                            [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                            class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                            ngxPrint printSectionId=\"myTable2\">\r\n                            Print\r\n                          </button>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item dropdown\">\r\n                          <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                            Column Hidden\r\n                          </a>\r\n                          <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                              width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('0')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Sr #\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('1')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Customer\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('2')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Customer Order No\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('3')\" data-column=\"2\"\r\n                              style=\"color: white;\">\r\n                              Warehouse\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('4')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Order Date\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('5')\" data-column=\"0\" style=\"color: white;\">\r\n                              Bilty#\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('6')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Contact Person\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('7')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              City\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('8')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Address\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('9')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Pickup Method\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('10')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Gate Pass No\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('11')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Supervisor Name\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('12')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Delivery Date\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('13')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Status\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('14')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Action\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('15')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              POD\r\n                            </a>\r\n                          </div>\r\n                        </li>\r\n                      </ol>\r\n                    </nav>\r\n                    <table class=\"table table-bordered table-hover dataTable\" style=\"width:100%; overflow-x: auto\"\r\n                      role=\"grid\" id=\"tbl2\">\r\n                      <thead>\r\n                        <tr role=\"row\">\r\n                          <th *ngIf=\"!hideShowList2[0].status\">Sr#</th>\r\n                          <th *ngIf=\"!hideShowList2[1].status\">Customer</th>\r\n                          <th *ngIf=\"!hideShowList2[2].status\">Customer Order No</th>\r\n                          <th *ngIf=\"!hideShowList2[3].status\" style=\"width:150px;\">Warehouse</th>\r\n                          <th *ngIf=\"!hideShowList2[4].status\" style=\"width:80px;\">Order Date</th>\r\n                          <th *ngIf=\"!hideShowList2[5].status\">Bilty#/th>\r\n                          <th *ngIf=\"!hideShowList2[6].status\">Contact Person</th>\r\n                          <th *ngIf=\"!hideShowList2[7].status\">City</th>\r\n                          <th *ngIf=\"!hideShowList2[8].status\" style=\"width:250px;\">Address</th>\r\n                          <th *ngIf=\"!hideShowList2[9].status\">Pickup Method</th>\r\n                          <th *ngIf=\"!hideShowList2[10].status\" style=\"width:100px;\">Gate Pass No</th>\r\n                          <th *ngIf=\"!hideShowList2[11].status\">Supervisor Name</th>\r\n                          <th *ngIf=\"!hideShowList2[12].status\" style=\"width:80px;\">Delivery Date</th>\r\n                          <th *ngIf=\"!hideShowList2[13].status\">Status</th>\r\n                          <th *ngIf=\"!hideShowList2[14].status\" style=\"width:80px;\">Action</th>\r\n                          <th *ngIf=\"!hideShowList2[15].status\">POD</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr role=\"row\" *ngFor=\"let dispatch of dispatchListCompleted; let i = index\">\r\n                          <td *ngIf=\"!hideShowList2[0].status\">{{i+1}}</td>\r\n                          <td *ngIf=\"!hideShowList2[1].status\">{{dispatch.AML_Customers.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList2[2].status\">{{dispatch.AML_PickupOrder.CustomerOrderNo}}</td>\r\n                          <td *ngIf=\"!hideShowList2[3].status\">{{dispatch.AML_Warehouse.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList2[4].status\">{{dispatch.AML_PickupOrder.OrderDate | date}}</td>\r\n                          <td *ngIf=\"!hideShowList2[5].status\">{{dispatch.AML_PickupOrder.waybill}}</td>\r\n                          <td *ngIf=\"!hideShowList2[6].status\">{{dispatch.AML_PickupOrder.ContactPerson}}</td>\r\n                          <td *ngIf=\"!hideShowList2[7].status\">{{dispatch.AML_PickupOrder.AML_City.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList2[8].status\">{{dispatch.AML_PickupOrder.Address}}</td>\r\n                          <td *ngIf=\"!hideShowList2[9].status\">\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==1\">FIFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==2\">LIFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==3\">LEFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==4\">FEFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==5\">Custom</p>\r\n                          </td>\r\n                          <td *ngIf=\"!hideShowList2[10].status\">{{dispatch.GatePassNo}}</td>\r\n                          <td *ngIf=\"!hideShowList2[11].status\">{{dispatch.SupervisorName}}</td>\r\n                          <td *ngIf=\"!hideShowList2[12].status\">{{dispatch.DispatchDate | date}}</td>\r\n                          <td *ngIf=\"!hideShowList2[13].status\">\r\n                            <span *ngIf=\"dispatch.IsCompleted==true; else inactive_span\"\r\n                              class=\"label label-success\">Complete</span>\r\n                            <ng-template #inactive_span> <span class=\"bg-red label\">Pending</span></ng-template>\r\n                          </td>\r\n                          <td *ngIf=\"!hideShowList2[14].status\">\r\n                            <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" title=\"View Dispatched Order\"\r\n                              (click)=\"Edit(dispatch.DispatchId)\"><i style=\"font-size:14px !important\"\r\n                                class=\"fa fa-info\"></i></button>\r\n                            <button type=\"button\" [disabled]=\"this.dispatch['IsPartialReceived']!=null\" id=\"update\"\r\n                              class=\"editBtn btn-danger\" data-toggle=\"tooltip\" data-placement=\"bottom\"\r\n                              title=\"Delete Dispatched Order\" (click)=\"delete(dispatch.DispatchId)\"><i\r\n                                style=\"font-size:14px !important\" class=\"fa fa-trash\"></i></button>\r\n                            <button type=\"button\" id=\"report\" title=\"Print Dispatched Order\" class=\"editBtn btn-danger\"\r\n                              (click)=\"reportmodal(dispatch.DispatchId)\">\r\n                              <i style=\"font-size:14px !important\" class=\"fa fa-file\"></i>\r\n                            </button>\r\n                          </td>\r\n                          <td *ngIf=\"!hideShowList2[15].status\">\r\n                            <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\"\r\n                              (click)=\"UploadImages(dispatch.DispatchId)\"><i style=\"font-size:14px !important\"\r\n                                class=\"fa fa-upload\"></i></button>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <div id=\"cancel\" class=\"tab-pane fade\">\r\n              <h3>Cancel</h3>\r\n              <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 table-responsive\" id=\"myTable3\">\r\n                    <nav>\r\n                      <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 58%; \r\n                          background-color: #6c757d;\">\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"downloadCSV(this.dispatchListCancel, 'transfer-dispatch-cancelled-list.csv')\"\r\n                            style=\"color: white;\">\r\n                            Download CSV</a>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"exportExcel('transfer-dispatch-cancelled-list.xlsx', 'tbl3', 'Transfer Dispatch Cancelled List')\"\r\n                            style=\"color: white;\">\r\n                            Download Excel</a>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"createPdf('transfer-dispatch-cancelled-list.pdf', '#tbl3')\"\r\n                            style=\"color: white;\">Export To PDF</a>\r\n                        </li>\r\n                        <li>\r\n                          <button\r\n                            [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                            class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                            ngxPrint printSectionId=\"myTable3\">\r\n                            Print\r\n                          </button>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item dropdown\">\r\n                          <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                            Column Hidden\r\n                          </a>\r\n                          <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                              width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow3('0')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Sr #\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow3('1')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Customer\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow3('2')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Customer Order No\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow3('3')\" data-column=\"2\"\r\n                              style=\"color: white;\">\r\n                              Warehouse\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow3('4')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Order Date\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow3('5')\" data-column=\"0\" style=\"color: white;\">\r\n                              Waybill\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow3('6')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Contact Person\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow3('7')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              City\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow3('8')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Address\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow3('9')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Pickup Method\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow3('10')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Gate Pass No\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow3('11')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Supervisor Name\r\n                            </a>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow3('12')\" data-column=\"1\"\r\n                              style=\"color: white;\">\r\n                              Delivery Date\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow3('13')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Status\r\n                            </a>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow3('14')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Action\r\n                            </a>\r\n                            <!-- <a class=\"dropdown-item\" (click)=\"HideShow3('15')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              POD\r\n                            </a> -->\r\n                          </div>\r\n                        </li>\r\n                      </ol>\r\n                    </nav>\r\n                    <table class=\"table table-bordered table-hover dataTable\" role=\"grid\" id=\"tbl3\">\r\n                      <thead>\r\n                        <tr role=\"row\">\r\n                          <th *ngIf=\"!hideShowList3[0].status\">Sr#</th>\r\n                          <th *ngIf=\"!hideShowList3[1].status\">Customer</th>\r\n                          <th *ngIf=\"!hideShowList3[2].status\">Customer Order No</th>\r\n                          <th *ngIf=\"!hideShowList3[3].status\">Warehouse</th>\r\n                          <th *ngIf=\"!hideShowList3[4].status\">Order Date</th>\r\n                          <th *ngIf=\"!hideShowList3[5].status\">WayBill</th>\r\n                          <th *ngIf=\"!hideShowList3[6].status\">Contact Person</th>\r\n                          <th *ngIf=\"!hideShowList3[7].status\">City</th>\r\n                          <th *ngIf=\"!hideShowList3[8].status\">Address</th>\r\n                          <th *ngIf=\"!hideShowList3[9].status\">Pickup Method</th>\r\n                          <th *ngIf=\"!hideShowList3[10].status\">Gate Pass No</th>\r\n                          <th *ngIf=\"!hideShowList3[11].status\">Supervisor Name</th>\r\n                          <th *ngIf=\"!hideShowList3[12].status\">Delivery Date</th>\r\n                          <th *ngIf=\"!hideShowList3[13].status\">Status</th>\r\n                          <th *ngIf=\"!hideShowList3[14].status\">Action</th>\r\n                          <!-- <th>POD</th> -->\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr role=\"row\" *ngFor=\"let dispatch of dispatchListCancel; let i = index\">\r\n                          <td *ngIf=\"!hideShowList3[0].status\">{{i+1}}</td>\r\n                          <td *ngIf=\"!hideShowList3[1].status\">{{dispatch.AML_Customers.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList3[2].status\">{{dispatch.AML_PickupOrder.CustomerOrderNo}}</td>\r\n                          <td *ngIf=\"!hideShowList3[3].status\">{{dispatch.AML_Warehouse.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList3[4].status\">{{dispatch.AML_PickupOrder.OrderDate | date}}</td>\r\n                          <td *ngIf=\"!hideShowList3[5].status\">{{dispatch.AML_PickupOrder.waybill}}</td>\r\n                          <td *ngIf=\"!hideShowList3[6].status\">{{dispatch.AML_PickupOrder.ContactPerson}}</td>\r\n                          <td *ngIf=\"!hideShowList3[7].status\">{{dispatch.AML_PickupOrder.AML_City.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList3[8].status\">{{dispatch.AML_PickupOrder.Address}}</td>\r\n                          <td *ngIf=\"!hideShowList3[9].status\">\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==1\">FIFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==2\">LIFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==3\">LEFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==4\">FEFO</p>\r\n                            <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==5\">Custom</p>\r\n                          </td>\r\n                          <td *ngIf=\"!hideShowList3[10].status\">{{dispatch.GatePassNo}}</td>\r\n                          <td *ngIf=\"!hideShowList3[11].status\">{{dispatch.SupervisorName}}</td>\r\n                          <td *ngIf=\"!hideShowList3[12].status\">{{dispatch.DispatchDate | date}}</td>\r\n                          <td *ngIf=\"!hideShowList3[13].status\">\r\n                            <span *ngIf=\"dispatch.IsDeleted==true; else inactive_span\"\r\n                              class=\"label label-warning\">Cancel</span>\r\n                            <ng-template #inactive_span> <span class=\"bg-red label\">Pending</span></ng-template>\r\n                          </td>\r\n                          <td *ngIf=\"!hideShowList3[14].status\">\r\n                            <!-- <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"Edit(dispatch.DispatchId)\"><i\r\n                              class=\"fa fa-info\"></i></button> -->\r\n\r\n                          </td>\r\n                          <!-- <td>\r\n                          <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"UploadImages(dispatch.DispatchId)\"><i\r\n                            class=\"fa fa-upload\"></i></button>\r\n                        </td> -->\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n      <ngx-ui-loader></ngx-ui-loader>\r\n      <!-- <app-report [dispatchListCompleted]=\"dispatchListCompleted\"></app-report> -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>\r\n\r\n<modal #AllModal>\r\n\r\n  <!-- <modal-header>\r\n    </modal-header> -->\r\n\r\n    <modal-content style=\"padding:1px\">\r\n      <div class=\"row col col-sm-12\" id=\"print-section\">\r\n        <div class=\"row\">\r\n          <div class=\"col col-sm-4\">\r\n            <img id=\"logo\" src={{LogoPath}} height=\"45\" width=\"160\" style=\"background-color: white;\">\r\n          </div>\r\n          <div class=\"col col-sm-8 pull-right\">\r\n            <address>\r\n              <strong>{{CompanyName}}</strong> <br>\r\n              {{CompanyAddress}}\r\n            </address>\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-sm-12\" style=\"text-align: center; padding-top: 30px;\">\r\n          <h4><b><u>CUSTOMER DELIVERY ORDER</u></b></h4>\r\n        </div>\r\n        <!-- info row -->\r\n        <div class=\"row col col-sm-12 table-responsive\" style=\"min-height: 150px;\">\r\n          <div class=\"col col-sm-6\" id=\"invoice-col\">\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Customer Name :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_CustomerName}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Auto Pickup# :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>Pickup-{{rep_PickupId}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Auto GP # :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_GatePassNo}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Agent :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_Agent}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Supervisor Name :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_SupervisorName}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Delivery Date :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_DispatchDate | date}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Driver Name :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_DriverName}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Driver Number :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_PhoneNumber}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Vehicle Info:</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_VehicleNo}} - {{rep_VehicleType}} <br> {{rep_Transporter}} - {{rep_SealNo}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"col col-sm-6\" id=\"invoice-col\">\r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Warehouse :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_OriginWarehouse}}</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Contact Person :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_ContactPerson}}</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Telephone :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_Telephone}}</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Customer SO# :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_CustomerOrderNo}}</label>\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Loading Date :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_LoadingDate | date}}</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Distributor Info :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_DistCode}} | {{rep_DistName}}</label>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Way Bill :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_waybill}}</label>\r\n                </div>\r\n              </div> -->\r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Address :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_deliveryAddress}}</label>\r\n                </div>\r\n              </div>\r\n\r\n          </div>\r\n        </div>\r\n        <!-- /.row -->\r\n  \r\n        <!-- Table row -->\r\n        <div class=\"row col-sm-12\">\r\n          <div class=\"col-sm-12\">\r\n            <table class=\"table dataTable\" >\r\n              <thead>\r\n                <tr role=\"row\">\r\n                  <th style=\"border: 1px solid black; width:5%\">Sr.</th>\r\n                  <th style=\"border: 1px solid black; width:10%\">SKU Code</th>\r\n                  <th style=\"border: 1px solid black; width:30%\">SKU Name</th>\r\n                  <th style=\"border: 1px solid black; width:12%\">Batch</th>\r\n                  <th style=\"border: 1px solid black; width:12%\">MFG Date</th>\r\n                  <th style=\"border: 1px solid black; width:12%\">EXP Date</th>\r\n                  <th style=\"border: 1px solid black; width:8%\">Quantity</th>\r\n                  \r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let item of rep_dispatchData; index as i\">\r\n                <tr>\r\n                  <td style=\"border: 1px solid black;\">{{i+1}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.Description}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.Name}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.BatchNo}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.MfgDate | date}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.ExpiryDate | date}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.Quantity}}</td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <td colspan=\"5\"></td>\r\n                  <td>Total Qty:</td>\r\n                  <td> {{TotalQty}}</td>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n      </div>\r\n    </modal-content>\r\n  \r\n    <modal-footer>\r\n      <div class=\"row no-print\" id=\"printButton\">\r\n        <div class=\"col-sm-8\">\r\n          <!-- <a  (click)=\"openModal()\" class=\"btn btn-default\"><i class=\"fa fa-print\"></i> Print</a> -->\r\n          <button class=\"btn-wms hidden-print print-btn\" printTitle=\"DispatchOrder\" [useExistingCss]=\"true\" ngxPrint\r\n            printSectionId=\"print-section\"\r\n            [printStyle]=\"{table : {'font-size': '10px'},body : {'font-size': '10px'}}\">\r\n            <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i></span>\r\n          </button>\r\n          <!-- <button (click)=\"createPdfModule('DispatchOrder.pdf', '#printButton')\" style=\"color: rgb(242, 6, 250);\"><i\r\n              class=\"fa fa-file-pdf-o\"></i></button> -->\r\n        </div>\r\n      </div>\r\n    </modal-footer>\r\n\r\n</modal>\r\n\r\n<modal #AllModalpickup>\r\n\r\n  <!-- <modal-header>\r\n    </modal-header> -->\r\n\r\n    <modal-content style=\"padding:1px\">\r\n      <div class=\"row col col-sm-12\" id=\"print-section\">\r\n        <div class=\"row\">\r\n          <div class=\"col col-sm-4\">\r\n            <img id=\"logo\" src={{LogoPath}} height=\"45\" width=\"160\" style=\"background-color: white;\">\r\n          </div>\r\n          <div class=\"col col-sm-8 pull-right\">\r\n            <address>\r\n              <strong>{{CompanyName}}</strong> <br>\r\n              {{CompanyAddress}}\r\n            </address>\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-sm-12\" style=\"text-align: center; padding-top: 30px;\">\r\n          <h4><b><u>CUSTOMER PICKUP PLAN</u></b></h4>\r\n        </div>\r\n        <!-- info row -->\r\n        <div class=\"row col col-sm-12 table-responsive\" style=\"min-height: 150px;\">\r\n          <div class=\"col col-sm-6\" id=\"invoice-col\">\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Customer Name :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_CustomerName}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Auto Pickup# :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>Pickup-{{rep_PickupId}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Auto GP # :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_GatePassNo}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Agent :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_Agent}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Supervisor Name :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_SupervisorName}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Delivery Date :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_DispatchDate | date}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Driver Name :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_DriverName}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Driver Number :</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_PhoneNumber}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label><b>Vehicle Info:</b></label>\r\n              </div>\r\n              <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                <label>{{rep_VehicleNo}} - {{rep_VehicleType}} <br> {{rep_Transporter}} - {{rep_SealNo}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"col col-sm-6\" id=\"invoice-col\">\r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Warehouse :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_OriginWarehouse}}</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Contact Person :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_ContactPerson}}</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Telephone :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_Telephone}}</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Customer SO# :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_CustomerOrderNo}}</label>\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Loading Date :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_LoadingDate | date}}</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Distributor Info :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_DistCode}} | {{rep_DistName}}</label>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Way Bill :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_waybill}}</label>\r\n                </div>\r\n              </div> -->\r\n              <div class=\"row\">\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label><b>Address :</b></label>\r\n                </div>\r\n                <div class=\"col col-sm-6\" style=\"text-align: left;\">\r\n                  <label>{{rep_deliveryAddress}}</label>\r\n                </div>\r\n              </div>\r\n\r\n          </div>\r\n        </div>\r\n        <!-- /.row -->\r\n  \r\n        <!-- Table row -->\r\n        <div class=\"row col-sm-12\">\r\n          <div class=\"col-sm-12\">\r\n            <table class=\"table dataTable\" >\r\n              <thead>\r\n                <tr role=\"row\">\r\n                  <th style=\"border: 1px solid black; width:5%\">Sr.</th>\r\n                  <th style=\"border: 1px solid black; width:10%\">SKU Code</th>\r\n                  <th style=\"border: 1px solid black; width:30%\">SKU Name</th>\r\n                  <th style=\"border: 1px solid black; width:12%\">Batch</th>\r\n                  <th style=\"border: 1px solid black; width:12%\">MFG Date</th>\r\n                  <th style=\"border: 1px solid black; width:12%\">EXP Date</th>\r\n                  <th style=\"border: 1px solid black; width:8%\">Quantity</th>\r\n                  \r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let item of rep_dispatchData; index as i\">\r\n                <tr>\r\n                  <td style=\"border: 1px solid black;\">{{i+1}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.Description}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.Name}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.BatchNo}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.MfgDate | date}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.ExpiryDate | date}}</td>\r\n                  <td style=\"border: 1px solid black;\">{{item.Quantity}}</td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <td colspan=\"5\"></td>\r\n                  <td>Total Qty:</td>\r\n                  <td> {{TotalQty}}</td>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n      </div>\r\n    </modal-content>\r\n  \r\n    <modal-footer>\r\n      <div class=\"row no-print\" id=\"printButton\">\r\n        <div class=\"col-sm-8\">\r\n          <!-- <a  (click)=\"openModal()\" class=\"btn btn-default\"><i class=\"fa fa-print\"></i> Print</a> -->\r\n          <button class=\"btn-wms hidden-print print-btn\" printTitle=\"DispatchOrder\" [useExistingCss]=\"true\" ngxPrint\r\n            printSectionId=\"print-section\"\r\n            [printStyle]=\"{table : {'font-size': '10px'},body : {'font-size': '10px'}}\">\r\n            <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i></span>\r\n          </button>\r\n          <!-- <button (click)=\"createPdfModule('DispatchOrder.pdf', '#printButton')\" style=\"color: rgb(242, 6, 250);\"><i\r\n              class=\"fa fa-file-pdf-o\"></i></button> -->\r\n        </div>\r\n      </div>\r\n    </modal-footer>\r\n\r\n</modal>"

/***/ }),

/***/ "./src/app/layout/content/dispatch-complete/templates/report.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-complete/templates/report.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"menu1\" class=\"tab-pane fade\">\r\n  <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 table-responsive\" id=\"myTable2\"> -->\r\n        <table class=\"table table-bordered table-hover dataTable\" role=\"grid\" id=\"tbl2\">\r\n          <thead>\r\n            <tr role=\"row\">\r\n              <th>Sr#</th>\r\n              <th>Customer</th>\r\n              <th>Customer Order No</th>\r\n              <th>Warehouse</th>\r\n              <th>Order Date</th>\r\n              <th>WayBill</th>\r\n              <th>Contact Person</th>\r\n              <th>City</th>\r\n              <th>Address</th>\r\n              <th>Pickup Method</th>\r\n              <th>Gate Pass No</th>\r\n              <th>Supervisor Name</th>\r\n              <th>Delivery Date</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr role=\"row\" *ngFor=\"let dispatch of dispatchListCompleted; let i = index\">\r\n              <td>{{i+1}}</td>\r\n              <td>{{dispatch.AML_Customers.Name}}</td>\r\n              <td>{{dispatch.AML_PickupOrder.CustomerOrderNo}}</td>\r\n              <td>{{dispatch.AML_Warehouse.Name}}</td>\r\n              <td>{{dispatch.AML_PickupOrder.OrderDate | date}}</td>\r\n              <td>{{dispatch.AML_PickupOrder.waybill}}</td>\r\n              <td>{{dispatch.AML_PickupOrder.ContactPerson}}</td>\r\n              <td>{{dispatch.AML_PickupOrder.AML_City.Name}}</td>\r\n              <td>{{dispatch.AML_PickupOrder.Address}}</td>\r\n              <td>\r\n                <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==1\">FIFO</p>\r\n                <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==2\">LIFO</p>\r\n                <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==3\">LEFO</p>\r\n                <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==4\">FEFO</p>\r\n                <p *ngIf=\"dispatch.AML_PickupOrder.PickupMethod==5\">Custom</p>\r\n              </td>\r\n              <td>{{dispatch.GatePassNo}}</td>\r\n              <td>{{dispatch.SupervisorName}}</td>\r\n              <td>{{dispatch.DispatchDate | date}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      <!-- </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n"

/***/ })

}]);
//# sourceMappingURL=content-dispatch-complete-dispatch-complete-module.js.map