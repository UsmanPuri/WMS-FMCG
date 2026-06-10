(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-transfer-receiving-transfer-receiving-module"],{

/***/ "./src/app/helpers/services/excel-file.service.ts":
/*!********************************************************!*\
  !*** ./src/app/helpers/services/excel-file.service.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var FileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
var XLSX = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
var EXCEL_TYPE = 'application/octet-stream';
//'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset = UTF-8';
var EXCEL_EXT = '.xlsx';
var ExporterService = /** @class */ (function () {
    function ExporterService() {
    }
    ExporterService.prototype.exportToExcel = function (json, excelFileName) {
        var worksheet = XLSX.utils.json_to_sheet(json);
        var workbook = {
            Sheets: { 'data': worksheet },
            SheetNames: ['data']
        };
        var fmt = '@';
        var i = 1;
        debugger;
        while (i < 3) {
            workbook.Sheets['data']['C' + i].z = fmt;
            console.log(i);
            i++;
        }
        var excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcel(excelBuffer, excelFileName);
    };
    ExporterService.prototype.saveAsExcel = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXT);
    };
    ExporterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ExporterService);
    return ExporterService;
}());
exports.ExporterService = ExporterService;


/***/ }),

/***/ "./src/app/layout/content/transfer-receiving/components/transfer-receiving-edit-form.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/layout/content/transfer-receiving/components/transfer-receiving-edit-form.component.ts ***!
  \********************************************************************************************************/
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
var transfer_receiving_service_1 = __webpack_require__(/*! ../services/transfer-receiving.service */ "./src/app/layout/content/transfer-receiving/services/transfer-receiving.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var TransferReceivingEditFormComponent = /** @class */ (function (_super) {
    __extends(TransferReceivingEditFormComponent, _super);
    function TransferReceivingEditFormComponent(injector, _dispatchService, activeRoute, ngxService) {
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
    TransferReceivingEditFormComponent.prototype.ngOnInit = function () {
        this.dropdownHideShow = this.router.url.includes("customer");
        this.addFormValidations();
        this.dropdownSettings();
        this.getCustomerKeyPair();
        this.getDispatchById();
    };
    TransferReceivingEditFormComponent.prototype.getDispatchById = function () {
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
    TransferReceivingEditFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
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
    TransferReceivingEditFormComponent.prototype.getCustomerKeyPair = function () {
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
    TransferReceivingEditFormComponent.prototype.customerChange = function (event) {
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
    TransferReceivingEditFormComponent.prototype.PickupOrderChange = function () {
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
    TransferReceivingEditFormComponent.prototype.customerDeSelect = function () {
        this.selectedCustomer = {};
        this.selectedPickupOrder = {};
        this.pickupOrderKeyPair = [];
        this.itemKeyPair = [];
        this.formGroup.get("ItemId").setValue('');
        this.formGroup.get("PickupOrderId").setValue('');
        this.itemListToPost = [];
        this.itemTempToAddIntoItemPostList = [];
    };
    TransferReceivingEditFormComponent.prototype.getPickupOrderKeyPair = function (customerId) {
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
    TransferReceivingEditFormComponent.prototype.getItemAvailableQty = function (itemId, location) {
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
    TransferReceivingEditFormComponent.prototype.addItemIntoItemPostList = function () {
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
    TransferReceivingEditFormComponent.prototype.createDispatch = function (formValue) {
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
    TransferReceivingEditFormComponent.prototype.executeDispatchCreation = function (formValue) {
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
    TransferReceivingEditFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    TransferReceivingEditFormComponent.prototype.dropdownSettings = function () {
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
    TransferReceivingEditFormComponent.prototype.getErrorMessage = function (formElement) {
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
    TransferReceivingEditFormComponent.prototype.redirectToDispatchList = function () {
        this.router.navigate([this.routesList.DELIVERS_CUSTOMER_LISTING]);
    };
    TransferReceivingEditFormComponent = __decorate([
        core_1.Component({
            selector: "wms-dispatch-complete-edit-form",
            template: __webpack_require__(/*! ../templates/edit-form.component.html */ "./src/app/layout/content/transfer-receiving/templates/edit-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/transfer-receiving-form.component.scss */ "./src/app/layout/content/transfer-receiving/styles/transfer-receiving-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, transfer_receiving_service_1.TransferReceivingService,
            router_1.ActivatedRoute, ngx_ui_loader_1.NgxUiLoaderService])
    ], TransferReceivingEditFormComponent);
    return TransferReceivingEditFormComponent;
}(base_component_1.BaseComponent));
exports.TransferReceivingEditFormComponent = TransferReceivingEditFormComponent;


/***/ }),

/***/ "./src/app/layout/content/transfer-receiving/components/transfer-receiving-form.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/content/transfer-receiving/components/transfer-receiving-form.component.ts ***!
  \***************************************************************************************************/
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
var transfer_receiving_service_1 = __webpack_require__(/*! ../services/transfer-receiving.service */ "./src/app/layout/content/transfer-receiving/services/transfer-receiving.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ngb_modal_1 = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var environment_url_service_1 = __webpack_require__(/*! src/app/helpers/services/environment-url.service */ "./src/app/helpers/services/environment-url.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var TransferReceivingFormComponent = /** @class */ (function (_super) {
    __extends(TransferReceivingFormComponent, _super);
    function TransferReceivingFormComponent(injector, _dispatchService, activeRoute, modalService, ngxService, exporterService, envUrl, http) {
        var _this = _super.call(this, injector) || this;
        _this._dispatchService = _dispatchService;
        _this.activeRoute = activeRoute;
        _this.modalService = modalService;
        _this.ngxService = ngxService;
        _this.exporterService = exporterService;
        _this.envUrl = envUrl;
        _this.http = http;
        _this.customerDropdownSettings = {};
        _this.pickupOrderDropdownSettings = {};
        _this.itemDropdownSettings = {};
        _this.PickupOrderItemList = [];
        _this.PickupOrderItemListTemp = [];
        _this.selectedCustomer = {};
        _this.selectedPickupOrder = {};
        _this.warehouseDropdownSettings2 = {};
        _this.itemKeyPair = [];
        _this.retrivedItemListByPickupOrder = [];
        _this.itemListToPost = [];
        _this.itemTempToAddIntoItemPostList = {};
        _this.selectedItem = {};
        _this.selectedWarehouse = {};
        _this.disableRow = false;
        return _this;
    }
    TransferReceivingFormComponent.prototype.ngOnInit = function () {
        this.dropdownHideShow = this.router.url.includes("customer");
        this.formType = this.dropdownHideShow == true ? 'customer' : 'transfer';
        this.addFormValidations();
        this.dropdownSettings();
        this.getDispatchById();
        this.CompanyInfo();
    };
    TransferReceivingFormComponent.prototype.CompanyInfo = function () {
        this.CompanyID = this.localStorageService.getCompanyId();
        if (this.CompanyID == 1) {
            this.CompanyName = "AML Logistics (Pvt) Ltd";
            this.CompanyAddress = "Head Office Address: Plot No. 193, 1st Floor, Street No.1, Sector I/10, Industrial Area, Islamabad. Phone: +92-51-4102361-62";
            this.LogoPath = "assets/images/aml-png-logo-web-1.png";
        }
        if (this.CompanyID == 2) {
            this.CompanyName = "LaBaih";
            this.CompanyAddress = "AlDossary Building, First Floor King Khalid Street Khobar, Saudi Arabia. Phone: +966 920010645";
            this.LogoPath = "assets/images/labaih-logo.png";
        }
    };
    TransferReceivingFormComponent.prototype.getDispatchById = function () {
        var _this = this;
        var dispatchId = this.activeRoute.snapshot.params['Id'];
        if (dispatchId) {
            var dispatchByIdUrl = this.apiConstant.DISPATCH_GetById + ("" + dispatchId);
            this._dispatchService.getData(dispatchByIdUrl)
                .subscribe(function (res) {
                _this.dispatch = res;
                _this.dispatchRec = _this.dispatch;
                //this.PickupOrderItemList = this.dispatch.AML_DispatchDetail;
                debugger;
                // console.log("Dispatch List")
                // console.log(this.dispatch)
                _this.getLocationKeyPair(_this.dispatch.AML_PickupOrder.WarehouseTo);
                _this.PickupOrderChange(_this.dispatch.DispatchId);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    /**
  * The following method is used to add the form validations
  */
    TransferReceivingFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("ReceiveDate", requiredValidation, this.disableRow);
        this.addFormControlWithValidations("ReceiverHandler", requiredValidation, this.disableRow);
        this.addFormControlWithValidations("InboundPoolIn", [], this.disableRow);
    };
    TransferReceivingFormComponent.prototype.OnQtyChange = function (item, sr) {
        debugger;
        if (item.target.value > this.PickupOrderItemList[sr]["FwdQty"]) {
            this.showToastrError("Given Received Qty is greater-than Forwarded Qty");
            return false;
        }
        else {
            this.PickupOrderItemList[sr]["Quantity"] = item.target.value;
        }
    };
    TransferReceivingFormComponent.prototype.OnPalletChange = function (item, sr) {
        debugger;
        this.PickupOrderItemList[sr]["PalletNo"] = item.target.value;
    };
    TransferReceivingFormComponent.prototype.PickupOrderChange = function (item) {
        var _this = this;
        var SendObj = {
            Value: item,
            Text: item,
        };
        var pickupOrderId = this.dispatch.PickupOrderId;
        var apiUrl = this.apiConstant.DISPATCH_GetDetailOfOrder;
        this._dispatchService.getKeyPair(apiUrl, SendObj)
            .subscribe(function (res) {
            _this.PickupOrderItemList = res;
            debugger;
            var i = 0;
            _this.PickupOrderItemList.forEach(function (element) {
                _this.PickupOrderItemList[i]["ForwardLocation"] = "";
                _this.PickupOrderItemList[i]["InboundPoolIn"] = "";
                _this.PickupOrderItemList[i]["FwdQty"] = _this.PickupOrderItemList[i]["Quantity"];
                _this.PickupOrderItemList[i]["Quantity"] = _this.PickupOrderItemList[i]["FwdQty"] - _this.PickupOrderItemList[i]["AlreadyReceived"];
                _this.PickupOrderItemList[i]["is_disable"] = _this.PickupOrderItemList[i].Quantity == 0 ? true : false;
                i++;
            });
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    // private getPickupOrderById(id:any) {
    //   let PickupOrderId=id;
    //   if(PickupOrderId){
    //     let customerByIdUrl: string = this.apiConstant.PICKUP_ORDER_BY_ID + `${PickupOrderId}`;
    //     this._dispatchService.getData(customerByIdUrl)
    //       .subscribe(res => {
    //         this.pickupOrder = res as PickupOrder;
    //       debugger
    //       this.TotalQty =0;
    //       this.PickupOrderItemList.forEach(element=>{
    //         this.pickupOrder.PickupOrderChilds.forEach(ele=>{
    //           if(ele.ItemId==element.ItemInformationId)
    //           {
    //             element["RequiredQuantity"]=ele.Quantity;
    //             element["SNno"]=ele.SNno;
    //             element["PRno"]=ele.PRno;
    //             element["Status"]=ele.Status;
    //             element["SRno"]=ele.SRno;
    //             this.TotalQty=this.TotalQty+ele.Quantity;
    //           }
    //         })
    //       })
    //       console.log(this.PickupOrderItemList)
    //       },
    //         (error) => {
    //           this.errorHandler.handleError(error);
    //           this.errorMessage = this.errorHandler.errorMessage;
    //         })
    //   }
    // }
    TransferReceivingFormComponent.prototype.InboundPoolIn = function (item, sr) {
        debugger;
        this.PickupOrderItemList[sr]["InboundPoolIn"] = item.InboundPoolIn;
        this.PickupOrderItemList[sr]["InboundPoolIn"] = this.formGroup.get('InboundPoolIn').value;
        // console.log(this.PickupOrderItemList);
    };
    TransferReceivingFormComponent.prototype.onLocationSelect = function (item, sr) {
        debugger;
        var itm = this.warehouseKeyPair.find(function (x) { return x.GodownShelfId === item.GodownShelfId; });
        this.PickupOrderItemList[sr]["ForwardLocation"] = itm["Location"];
    };
    TransferReceivingFormComponent.prototype.onLocationDeSelect = function (item, sr) {
        this.PickupOrderItemList[sr]["ForwardLocation"] = '';
    };
    TransferReceivingFormComponent.prototype.getLocationKeyPair = function (item) {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            WarehouseId: item,
        };
        //let apiAddress: string = this.apiConstant.LOCATION_KEYPAIR_BY_WAREHOUSE;
        var apiAddress = this.apiConstant.LOCATION_BYView_BYWarehouse;
        this._dispatchService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.warehouseKeyPair = res;
            //this.warehouseKeyPair = res as any;
            //  debugger
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    TransferReceivingFormComponent.prototype.customerDeSelect = function () {
        this.selectedCustomer = {};
        this.selectedPickupOrder = {};
        this.pickupOrderKeyPair = [];
        this.itemKeyPair = [];
        this.formGroup.get("ItemId").setValue('');
        this.formGroup.get("PickupOrderId").setValue('');
        this.itemListToPost = [];
        this.itemTempToAddIntoItemPostList = [];
    };
    // getPickupOrderKeyPair(customerId:number) {
    //   let dispatch: any = {
    //     CustomerId: customerId
    //   }
    //   let apiUrl = this.apiConstant.DISPATCH_GetDispatchKeyPair;
    //   this._dispatchService.getKeyPair(apiUrl, dispatch)
    //     .subscribe(res => {
    //       this.pickupOrderKeyPair = res as DropdownListDto[];
    //       console.log(this.pickupOrderKeyPair)
    //     },
    //       (error) => {
    //         this.errorHandler.handleError(error);
    //         this.errorMessage = this.errorHandler.errorMessage;
    //       });
    // }
    TransferReceivingFormComponent.prototype.createTransferReceived = function (formValue) {
        var _this = this;
        this.FlagDispatch = false;
        if (this.formGroup.valid) {
            debugger;
            var i_1 = 1;
            this.PickupOrderItemList.forEach(function (element) {
                if (element.ForwardLocation == "" && (element.FwdQty - element.AlreadyReceived > 0 && element.Quantity != 0)) {
                    _this.FlagDispatch = true;
                    _this.showToastrWarning("Please Select Location for Line Item Sr#- " + i_1);
                    return false;
                }
                ;
                i_1++;
            });
            if (!this.FlagDispatch) {
                this.executeTransferReceived(formValue);
            }
        }
    };
    TransferReceivingFormComponent.prototype.executeTransferReceived = function (formValue) {
        var _this = this;
        var dispatch = {
            DispatchId: this.dispatch.DispatchId,
            WarehouseFrom: this.dispatch.WarehouseId,
            WarehouseTo: this.dispatch.AML_PickupOrder.WarehouseTo,
            GatePassNo: this.dispatch.GatePassNo,
            ReceiveDate: formValue.ReceiveDate,
            ReceiverHandler: formValue.ReceiverHandler,
            TransferReceiveDetails: this.PickupOrderItemList,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
        };
        debugger;
        var apiUrl = this.apiConstant.TRANSFER_RECEIVE_CONFIRM;
        this.ngxService.start();
        this._dispatchService.create(apiUrl, dispatch)
            .subscribe(function (res) {
            _this.dispatch = res;
            // console.log(this.dispatch);
            _this.FlagDispatch = 'True';
            if (_this.dispatch) {
                console.log(_this.PickupOrderItemList);
                _this.openModal();
                _this.getDispatchById();
                _this.showToastrSuccess("GatePass No " + _this.dispatch.GatePassNo + " Created Successfully ");
            }
            //  setTimeout(() => {
            //    this.redirectToDispatchList();
            //  }, 2000);
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    TransferReceivingFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    TransferReceivingFormComponent.prototype.dropdownSettings = function () {
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
        this.warehouseDropdownSettings2 = {
            idField: 'GodownShelfId',
            textField: 'Location',
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
    TransferReceivingFormComponent.prototype.getErrorMessage = function (formElement) {
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
    TransferReceivingFormComponent.prototype.exportServiceAsExcel = function () {
        debugger;
        var templist = [];
        templist = this.PickupOrderItemList;
        this.exporterService.exportToExcel(templist, 'Transfer Receiving to Warehouse');
    };
    TransferReceivingFormComponent.prototype.onServicePicked = function () {
        var _this = this;
        var formData = new FormData();
        //formData.append('ContractId', this.selectedContract.toString());
        //formData.append('CustomerId', this.selectedCustomer.toString());
        formData.append('file', this.servicePicked.nativeElement.files[0]);
        var errorList = "";
        var errorList1 = "";
        this.errFlag = false;
        if (formData) {
            debugger;
            this.uploadFile(formData)
                .subscribe(function (msg) {
                _this.PickupOrderItemListTemp = msg;
                var i = 0;
                debugger;
                _this.PickupOrderItemListTemp.forEach(function (element) {
                    var Locationcheck = _this.warehouseKeyPair.find(function (x) { return x.Location === element.ForwardLocation; });
                    var SKUCheck = _this.PickupOrderItemList.find(function (x) { return x.Description === element.Description &&
                        x.ItemInformationId === element.ItemInformationId && x.SNno === element.SNno &&
                        x.BatchNo === element.BatchNo; });
                    if (!Locationcheck || !SKUCheck) {
                        element.unvalid = true;
                        _this.errFlag = true;
                        if (!Locationcheck) {
                            errorList = errorList + "\n" + element.Location;
                        }
                        else
                            errorList1 = errorList1 + "\n" + element.SKU;
                    }
                    else {
                        // element.LocationId = Locationcheck.WarehouseId;
                        // element.GodownId = Locationcheck.GodwomId;
                        // element.GodownRowId = Locationcheck.GodownRowId;
                        // element.GodownRackId = Locationcheck.GodownRackId;
                        // element.GodownShelfId = Locationcheck.GodownShelfId;
                        _this.PickupOrderItemList[i].InboundPoolIn = _this.PickupOrderItemListTemp[i].InboundPoolIn;
                        _this.PickupOrderItemList[i].ForwardLocation = _this.PickupOrderItemListTemp[i].ForwardLocation;
                    }
                    i++;
                });
                console.log(_this.PickupOrderItemList);
                //    debugger
                if (errorList != "" || errorList1 != "") {
                    _this.showToastrError("Wrong Location - " + "\n" + errorList + "\n" + " Wrong SKU Information - " + "\n" + errorList1);
                }
            });
        }
    };
    TransferReceivingFormComponent.prototype.redirectToDispatchList = function () {
        this.router.navigate([this.routesList.TRANSFER_RECEIVING_LISTING]);
    };
    TransferReceivingFormComponent.prototype.openModal = function () {
        debugger;
        this.Agent = this.dispatchRec.Agent;
        this.DispatchDate = this.dispatchRec.DispatchDate;
        this.DriverName = this.dispatchRec.DriverName;
        this.VehicleNo = this.dispatchRec.VehicleNo;
        this.PhoneNumber = this.dispatchRec.PhoneNumber;
        this.Address = this.dispatchRec.Address;
        this.SupervisorName = this.dispatchRec.SupervisorName;
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
    TransferReceivingFormComponent.prototype.closeModal = function () {
        this.redirectToDispatchList();
    };
    TransferReceivingFormComponent.prototype.uploadFile = function (formData) {
        if (!formData) {
            return;
        }
        //let apiUrl = this.apiConstant.FILE_UPLOAD_VENDOR;
        var apiUrl = '/File/UploadTransferReceiving';
        var url = this.envUrl.urlAddress + apiUrl;
        return this.http.post(url, formData);
    };
    __decorate([
        core_1.ViewChild('servicePicked'),
        __metadata("design:type", Object)
    ], TransferReceivingFormComponent.prototype, "servicePicked", void 0);
    __decorate([
        core_1.ViewChild('AllModal'),
        __metadata("design:type", Object)
    ], TransferReceivingFormComponent.prototype, "AllModal", void 0);
    TransferReceivingFormComponent = __decorate([
        core_1.Component({
            selector: "wms-dispatch-complete-form",
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/transfer-receiving/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/transfer-receiving-form.component.scss */ "./src/app/layout/content/transfer-receiving/styles/transfer-receiving-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, transfer_receiving_service_1.TransferReceivingService,
            router_1.ActivatedRoute, ngb_modal_1.ModalManager,
            ngx_ui_loader_1.NgxUiLoaderService, excel_file_service_1.ExporterService,
            environment_url_service_1.EnvironmentUrlService, http_1.HttpClient])
    ], TransferReceivingFormComponent);
    return TransferReceivingFormComponent;
}(base_component_1.BaseComponent));
exports.TransferReceivingFormComponent = TransferReceivingFormComponent;


/***/ }),

/***/ "./src/app/layout/content/transfer-receiving/components/transfer-receiving-list.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/content/transfer-receiving/components/transfer-receiving-list.component.ts ***!
  \***************************************************************************************************/
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
var transfer_receiving_service_1 = __webpack_require__(/*! ../services/transfer-receiving.service */ "./src/app/layout/content/transfer-receiving/services/transfer-receiving.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var XLSX = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
var file_saver_1 = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
var jspdf_1 = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
var jspdf_autotable_1 = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
var TransferReceivingListComponent = /** @class */ (function (_super) {
    __extends(TransferReceivingListComponent, _super);
    function TransferReceivingListComponent(injector, _transferreceiveService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._transferreceiveService = _transferreceiveService;
        _this.ngxService = ngxService;
        _this.isCustomerDelivers = false;
        _this.selectedToWarehouse = {};
        _this.ToWarehouseDropdownSettings = {};
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.formType = "customer";
        _this.hideShowList1 = [];
        _this.hideShowList2 = [];
        return _this;
    }
    TransferReceivingListComponent.prototype.ngOnInit = function () {
        this.isCustomerDelivers = this.router.url.includes("customer");
        this.formType = this.isCustomerDelivers == true ? 'customer' : 'transfer';
        this.addFormValidations();
        this.dropdownSettings();
        this.getWarehouseKeyPair();
        for (var i = 0; i < 11; i++) {
            this.hideShowList1.push({ status: true });
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
        for (var i = 0; i < 12; i++) {
            this.hideShowList2.push({ status: true });
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
    };
    //Excel Conversion
    TransferReceivingListComponent.prototype.exportExcel = function (fileName, table_id, fileHeader) {
        var element = document.getElementById(table_id);
        var ws = XLSX.utils.table_to_sheet(element);
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, fileHeader);
        XLSX.writeFile(wb, fileName);
    };
    //PDF Conversion
    TransferReceivingListComponent.prototype.createPdf = function (my_file, table_id) {
        var doc = new jspdf_1.default({ orientation: "landscape" });
        jspdf_autotable_1.default(doc, { html: table_id });
        doc.save(my_file);
    };
    // CSV Converterd
    TransferReceivingListComponent.prototype.downloadCSV = function (data, filename) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        file_saver_1.saveAs(blob, filename);
    };
    TransferReceivingListComponent.prototype.HideShow1 = function (index) {
        var i = Number(index);
        if (this.hideShowList1[i].status) {
            this.hideShowList1[i].status = false;
        }
        else {
            this.hideShowList1[i].status = true;
        }
    };
    TransferReceivingListComponent.prototype.HideShow2 = function (index) {
        var i = Number(index);
        if (this.hideShowList2[i].status) {
            this.hideShowList2[i].status = false;
        }
        else {
            this.hideShowList2[i].status = true;
        }
    };
    TransferReceivingListComponent.prototype.onSelectToWarehouse = function (item, dropDownName) {
        var _this = this;
        this.selectedCustomer = {
            Id: item.Value,
            Name: item.Text
        };
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            WarehouseId: item.Value,
            FormType: this.formType
        };
        var apiAddress = this.apiConstant.DISPATCH_LIST_BY_CUSTOMER;
        this.ngxService.start();
        this._transferreceiveService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.dispatchList = res;
            console.log(_this.dispatchList);
            _this.dispatchListCompleted = _this.dispatchList.filter(function (x) { return x.IsReceived === true; });
            _this.dispatchListPending = _this.dispatchList.filter(function (x) { return x.IsReceived === null && x.IsDeleted === false; });
            // Now you can use jQuery DataTables :
            // const table: any = $('table');
            // this.dataTable = table.DataTable({
            //   lengthMenu: [5, 10, 20, 50, 100],
            //   "iDisplayLength": 100,
            //   retrieve:true
            // });
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    TransferReceivingListComponent.prototype.onDeSelectToWarehouse = function (dropDownName) {
        this.selectedToWarehouse = {};
    };
    TransferReceivingListComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("CustomerId", []);
    };
    TransferReceivingListComponent.prototype.dropdownSettings = function () {
        this.ToWarehouseDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    TransferReceivingListComponent.prototype.radioChange = function (e) {
        this.customerDeSelect();
        // this.getCustomerKeyPair();
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
    TransferReceivingListComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId(),
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this._transferreceiveService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.ToWarehouseKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    TransferReceivingListComponent.prototype.getAllCompletedDispatches = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.DISPATCH_LIST;
        this._transferreceiveService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.dispatchList = res;
            console.log(_this.dispatchList);
            // Now you can use jQuery DataTables :
            var table = $('table');
            _this.dataTable = table.DataTable({
                lengthMenu: [5, 10, 20, 50, 100],
                "iDisplayLength": 100,
                retrieve: true
            });
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    TransferReceivingListComponent.prototype.customerChange = function (item) {
        var _this = this;
        this.selectedCustomer = {
            Id: item.Value,
            Name: item.Text
        };
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CustomerId: item.Value,
            FormType: this.formType
        };
        var apiAddress = this.apiConstant.DISPATCH_LIST_BY_CUSTOMER;
        this._transferreceiveService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.dispatchList = res;
            console.log(_this.dispatchList);
            _this.dispatchListCompleted = _this.dispatchList.filter(function (x) { return x.IsCompleted === true; });
            _this.dispatchListPending = _this.dispatchList.filter(function (x) { return x.IsCompleted === false && x.IsDeleted === false; });
            // Now you can use jQuery DataTables :
            // const table: any = $('table');
            // this.dataTable = table.DataTable({
            //   lengthMenu: [5, 10, 20, 50, 100],
            //   "iDisplayLength": 100,
            //   retrieve:true
            // });
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    TransferReceivingListComponent.prototype.Edit = function (dispatchId) {
        var updateUrl = [this.dropdownHideShow == true ? this.routesList.TRANSFER_RECEIVING_EDIT : this.routesList.TRANSFER_RECEIVING_EDIT] + ("/" + dispatchId);
        // let updateUrl: string = this.routesList.DELIVERS_CUSTOMER_EDIT+`/${dispatchId}`;
        this.router.navigate([updateUrl]);
    };
    TransferReceivingListComponent.prototype.UploadImages = function (id) {
        var updateUrl = this.routesList.DELIVERS_CUSTOMER_IMAGE + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    TransferReceivingListComponent.prototype.customerDeSelect = function () {
        this.selectedCustomer = {};
        this.customerKeyPair = [];
        this.formGroup.get("CustomerId").setValue('');
    };
    TransferReceivingListComponent.prototype.Create = function (dispatchId) {
        var updateUrl = this.routesList.TRANSFER_RECEIVING_CREATE + ("/" + dispatchId);
        this.router.navigate([updateUrl]);
    };
    TransferReceivingListComponent.prototype.redirectToCreateDispatch = function () {
        this.router.navigate([this.routesList.TRANSFER_RECEIVING_CREATE]);
    };
    TransferReceivingListComponent = __decorate([
        core_1.Component({
            selector: "wms-dispatch-complete-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/transfer-receiving/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/transfer-receiving-form.component.scss */ "./src/app/layout/content/transfer-receiving/styles/transfer-receiving-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, transfer_receiving_service_1.TransferReceivingService,
            ngx_ui_loader_1.NgxUiLoaderService])
    ], TransferReceivingListComponent);
    return TransferReceivingListComponent;
}(base_component_1.BaseComponent));
exports.TransferReceivingListComponent = TransferReceivingListComponent;


/***/ }),

/***/ "./src/app/layout/content/transfer-receiving/components/uploadImages.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/content/transfer-receiving/components/uploadImages.ts ***!
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
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var ngx_upload_1 = __webpack_require__(/*! @wkoza/ngx-upload */ "./node_modules/@wkoza/ngx-upload/index.js");
__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var environment_url_service_1 = __webpack_require__(/*! src/app/helpers/services/environment-url.service */ "./src/app/helpers/services/environment-url.service.ts");
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
            forms_1.Validators.required,
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
        core_1.ViewChild('ourForm'),
        __metadata("design:type", Object)
    ], ImageUploadComponent.prototype, "ourForm", void 0);
    ImageUploadComponent = __decorate([
        core_1.Component({
            selector: "genx-job-executed-documents-form",
            template: __webpack_require__(/*! ../templates/images-upload.component.html */ "./src/app/layout/content/transfer-receiving/templates/images-upload.component.html"),
            styles: [__webpack_require__(/*! ../styles/transfer-receiving-form.component.scss */ "./src/app/layout/content/transfer-receiving/styles/transfer-receiving-form.component.scss")],
        }),
        __metadata("design:paramtypes", [ngx_upload_1.HttpClientUploadService, core_1.Injector,
            environment_url_service_1.EnvironmentUrlService])
    ], ImageUploadComponent);
    return ImageUploadComponent;
}(base_component_1.BaseComponent));
exports.ImageUploadComponent = ImageUploadComponent;


/***/ }),

/***/ "./src/app/layout/content/transfer-receiving/services/transfer-receiving.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/content/transfer-receiving/services/transfer-receiving.service.ts ***!
  \******************************************************************************************/
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
var TransferReceivingService = /** @class */ (function (_super) {
    __extends(TransferReceivingService, _super);
    function TransferReceivingService(injector) {
        return _super.call(this, injector) || this;
    }
    TransferReceivingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], TransferReceivingService);
    return TransferReceivingService;
}(repository_service_1.RepositoryService));
exports.TransferReceivingService = TransferReceivingService;


/***/ }),

/***/ "./src/app/layout/content/transfer-receiving/styles/transfer-receiving-form.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/content/transfer-receiving/styles/transfer-receiving-form.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block{color:red}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:20px !important;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toggle-label{margin-top:10px;margin-right:-10px;color:green;font-size:15px}.shipment-item-add{margin-top:17px}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0}.fade{opacity:0;transition:opacity .15s linear}.fade.in{opacity:1}.modal-dialog{position:relative;width:auto;margin:10px}.modal.in .modal-dialog{-webkit-transform:translate(0, 0);transform:translate(0, 0)}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out;-webkit-transform:translate(0, -25%);transform:translate(0, -25%)}@media (min-width: 768px){.modal-dialog{width:600px;margin:30px auto}}.pallets-dropdown{width:150px}\n"

/***/ }),

/***/ "./src/app/layout/content/transfer-receiving/templates/edit-form.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/content/transfer-receiving/templates/edit-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    {{dropdownHideShow == true ? 'CUSTOMER' : 'TRANSFER'}} ORDER RECEIVING CREATE\r\n   \r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.DISPATCH_COMPLETE_LISTING]\">Completed dispatches</a></li>\r\n    <li class=\"active\">Create</li>\r\n  </ol>\r\n</section>\r\n<section class=\"content\">\r\n    <div col-md-12>\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate >\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group  pull-right\">\r\n                <button type=\"button\" (click)=\"redirectToDispatchList()\" class=\"btn-wms\">Transfer Order Receiving</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-3\">\r\n                  <div class=\"form-group\">\r\n                      <label>Customer</label>\r\n                      <div>\r\n                        <input class=\"form-control\" value=\" {{dispatch.AML_Customers.Name}}\" readonly>\r\n                      </div>\r\n                    </div>\r\n              </div>\r\n              \r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>Agent</label>\r\n                  <div>\r\n                    <input class=\"form-control\" value=\" {{dispatch.Agent}}\" readonly>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>Supervisor Name</label>\r\n                  <div>\r\n                    <input class=\"form-control\" value=\" {{dispatch.SupervisorName}}\" readonly>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <label>Origin Warehouse</label>\r\n                  <div>\r\n                    <input class=\"form-control\" value=\" {{dispatch.AML_Warehouse.Name}}\" readonly>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label>Order Date</label>\r\n                  <div>\r\n                    <input class=\"form-control\" value=\" {{dispatch.AML_PickupOrder.OrderDate}}\" readonly>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label>Dispatch Date</label>\r\n                  <div>\r\n                    <input class=\"form-control\" value=\" {{dispatch.DispatchDate}}\" readonly>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label>GatePass #</label>\r\n                  <div>\r\n                    <input class=\"form-control\" value=\" {{dispatch.GatePassNo}}\" readonly>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label>Vehicle No</label>\r\n                  <div>\r\n                    <input class=\"form-control\" value=\" {{dispatch.VehicleNo}}\" readonly>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label>Driver Name</label>\r\n                  <div>\r\n                    <input class=\"form-control\" value=\" {{dispatch.DriverName}}\" readonly>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label>Driver Contact</label>\r\n                  <div>\r\n                    <input class=\"form-control\" value=\" {{dispatch.PhoneNumber}}\" readonly>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-8\">\r\n                <div class=\"form-group\">\r\n                  <label>Remarks/Instructions</label>\r\n                  <input class=\"form-control\" value=\" {{dispatch.Remarks}}\" readonly>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label>Receiving Date</label>\r\n                  <input type=\"date\" formControlName=\"ReceiveDate\" class=\"form-control\" placeholder=\"Enter Receive Date\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ReceiveDate.invalid\">\r\n                    {{getErrorMessage('ReceiveDate')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <label>Receiver Handler</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter Receiver Handler\" formControlName=\"ReceiverHandler\">\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n\r\n          <ngx-ui-loader></ngx-ui-loader>\r\n\r\n          <div class=\"box box-primary\">\r\n              <div class=\"box-header with-border\">\r\n                <div class=\"form-group\">\r\n                    <h3 class=\"box-title detail-title\">Transfer SKU Detail</h3>\r\n                </div>\r\n              </div>\r\n              <div class=\"box-body\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"row\">\r\n                    <div style=\"height: 350px; width: 100%;\"class=\"col-md-12 table-responsive\">\r\n                      <table style=\"height: 350px; width: 100%;\" class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                        <thead>\r\n                          <tr role=\"row\">\r\n                            <th style=\"width:3%\">Sr#</th>\r\n                            <th style=\"width:8%\">SKU ID</th>\r\n                            <th style=\"width:20%\">SKU Name</th>\r\n                            <th style=\"width:6%\">Status</th>\r\n                            <th style=\"width:6%\">Trans. Qty</th>\r\n                            <th style=\"width:6%\">Rece. Qty</th>\r\n                            <th style=\"width:10%\">Location</th>\r\n                            <th style=\"width:8%\">Batch/Serial</th>\r\n                            <th style=\"width:6%\">Pallet No</th>\r\n                            <th style=\"width:8%\">SN No</th>\r\n                            <th style=\"width:6%\">PR No</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr role=\"row\" *ngFor=\"let item of PickupOrderItemList; let i = index\">\r\n                            <td>{{i+1}}</td>\r\n                            <td>{{item.ItemInformationId}}</td>\r\n                            <td>{{item.Description}} | {{item.ItemName}}</td>\r\n                            <td>{{item.Status}}</td>\r\n                            <td>{{item.Quantity}}</td>\r\n                            <td><input type=\"number\" value=\"{{item.Quantity}}\"></td>\r\n                            <td>\r\n                                <!-- <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair\"\r\n                                  [settings]=\"warehouseDropdownSettings2\" (onDeSelect)=\"onLocationDeSelect('selectedWarehouse',i)\"\r\n                                  (onSelect)=\"onLocationSelect($event,i)\">\r\n                                </ng-multiselect-dropdown> -->\r\n                            </td>\r\n                            <td>{{item.BatchNo}}</td>\r\n                            <td>{{item.PalletNo}}</td>\r\n                            <td>{{item.SNno}}</td>\r\n                            <td>{{item.PRno}}</td>\r\n                            <!-- <td>{{item.SRno}}</td> -->\r\n                          </tr>\r\n                        </tbody>  \r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          <!-- <div class=\"box-footer\">\r\n              <button type=\"submit\" [disabled]=\"formGroup.invalid || this.FlagDispatch=='True'\" (click)=\"openModal()\" class=\"btn btn-success pull-right\">Transfer Order Received</button>\r\n              <button   class=\"btn btn-success pull-right\" (click)=\"openModal()\">Test modal</button>\r\n\r\n          </div> -->\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </section>"

/***/ }),

/***/ "./src/app/layout/content/transfer-receiving/templates/form.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/content/transfer-receiving/templates/form.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  table {\r\n    display: block;\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n  }\r\n\r\n  tr.border_bottom td {\r\n    border-bottom: 1px solid red;\r\n  }\r\n</style>\r\n\r\n<section class=\"content-header\">\r\n  <h1>\r\n    {{dropdownHideShow == true ? 'CUSTOMER' : 'TRANSFER'}} ORDER RECEIVING CREATE\r\n\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.DISPATCH_COMPLETE_LISTING]\">Completed dispatches</a></li>\r\n    <li class=\"active\">Create</li>\r\n  </ol>\r\n</section>\r\n<section class=\"content\">\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createTransferReceived(formGroup.value)\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group  pull-right\">\r\n            <button type=\"button\" (click)=\"redirectToDispatchList()\" class=\"btn-wms\">Transfer Order Receiving</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Customer</label>\r\n                <div>\r\n                  <input class=\"form-control\" value=\" {{dispatch.AML_Customers.Name}}\" readonly>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Agent</label>\r\n                <div>\r\n                  <input class=\"form-control\" value=\" {{dispatch.Agent}}\" readonly>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Supervisor Name</label>\r\n                <div>\r\n                  <input class=\"form-control\" value=\" {{dispatch.SupervisorName}}\" readonly>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Origin Warehouse</label>\r\n                <div>\r\n                  <input class=\"form-control\" value=\" {{dispatch.AML_Warehouse.Name}}\" readonly>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Order Date</label>\r\n                <div>\r\n                  <input class=\"form-control\" value=\" {{dispatch.AML_PickupOrder.OrderDate}}\" readonly>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Dispatch Date</label>\r\n                <div>\r\n                  <input class=\"form-control\" value=\" {{dispatch.DispatchDate}}\" readonly>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>GatePass #</label>\r\n                <div>\r\n                  <input class=\"form-control\" value=\" {{dispatch.GatePassNo}}\" readonly>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Vehicle No</label>\r\n                <div>\r\n                  <input class=\"form-control\" value=\" {{dispatch.VehicleNo}}\" readonly>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Driver Name</label>\r\n                <div>\r\n                  <input class=\"form-control\" value=\" {{dispatch.DriverName}}\" readonly>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Driver Contact</label>\r\n                <div>\r\n                  <input class=\"form-control\" value=\" {{dispatch.PhoneNumber}}\" readonly>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <ngx-ui-loader></ngx-ui-loader>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-8\">\r\n              <div class=\"form-group\">\r\n                <label>Remarks/Instructions</label>\r\n                <input class=\"form-control\" value=\" {{dispatch.Remarks}}\" readonly>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Receiving Date</label>\r\n                <input type=\"date\" formControlName=\"ReceiveDate\" class=\"form-control\" placeholder=\"Enter Receive Date\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ReceiveDate.invalid\">\r\n                  {{getErrorMessage('ReceiveDate')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <label>Receiver Handler</label>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Receiver Handler\"\r\n                formControlName=\"ReceiverHandler\">\r\n              <span class=\"help-block\" *ngIf=\"formGroup.controls.ReceiverHandler.invalid\">\r\n                {{getErrorMessage('ReceiverHandler')}}\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group\">\r\n              <h3 class=\"box-title detail-title\">Transfer SKU Detail</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"row\">\r\n                <div style=\"height: 350px; width: 100%;\" class=\"col-md-12 table-responsive\" style=\"width:100%; overflow-x: auto\">\r\n                  <table style=\"height: 350px; width: 100%;\" class=\"table table-bordered table-hover dataTable\"\r\n                    role=\"grid\" style=\"width:100%; overflow-x: auto\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th style=\"width:3%\">Sr#</th>\r\n                        <th style=\"width:8%\">SKU ID</th>\r\n                        <th style=\"width:20%\">SKU Name</th>\r\n                        <th style=\"width:6%\">Status</th>\r\n                        <th style=\"width:6%\">Trans. Qty</th>\r\n                        <th style=\"width:6%\">Already Rec.</th>\r\n                        <th style=\"width:3%\">Rece. Qty</th>\r\n                        <th style=\"width:10%\">Location</th>\r\n                        <th style=\"width:8%\">Batch/Serial</th>\r\n                        <th style=\"width:6%\">Pallet No</th>\r\n                        <th style=\"width:8%\">SN No</th>\r\n                        <th style=\"width:6%\">PR No</th>\r\n                        <th style=\"width:6%\">InboundPool(OUT)</th>\r\n                        <th style=\"width:6%\">InboundPool(IN)</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let item of PickupOrderItemList; let i = index\">\r\n                        <td>{{i+1}}</td>\r\n                        <td>{{item.ItemInformationId}}</td>\r\n                        <td>{{item.Description}} | {{item.ItemName}}</td>\r\n                        <td>{{item.Status}}</td>\r\n                        <td>{{item.FwdQty}}</td>\r\n                        <td>{{item.AlreadyReceived}}</td>\r\n                        <td> \r\n                          <!-- <span *ngIf=\"{{item.Quantity - item.AlreadyReceived}} === 0; else inactive_span\">NULL</span> -->\r\n                          <input style=\"width: 60px;\" type=\"number\" [disabled]=\"item.is_disable\" value=\"{{item.FwdQty - item.AlreadyReceived}}\" (blur)=\"OnQtyChange($event,i)\"></td>\r\n                        <td style=\"min-width: 150px;\">\r\n                          <ng-multiselect-dropdown  [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair\"\r\n                            [settings]=\"warehouseDropdownSettings2\"\r\n                            (onDeSelect)=\"onLocationDeSelect('selectedWarehouse',i)\"\r\n                            (onSelect)=\"onLocationSelect($event,i)\" [disabled]=\"item.is_disable\">\r\n                          </ng-multiselect-dropdown>\r\n                        </td>\r\n                        <td>{{item.BatchNo}}</td>\r\n                        <td><input style=\"width: 60px;\" type=\"text\" [disabled]=\"item.is_disable\" value=\"{{item.PalletNo}}\" (blur)=\"OnPalletChange($event,i)\"></td>\r\n                        <td>{{item.SNno}}</td>\r\n                        <td>{{item.PRno}}</td>\r\n                        <td>{{item.InboundPool}}</td>\r\n                        <td><input type=\"input\" formControlName=\"InboundPoolIn\" (blur)=\"InboundPoolIn($event,i)\" [disabled]=\"item.is_disable\"></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-1\">\r\n            <button type=\"button\" class=\"btn-genx\" (click)=\"exportServiceAsExcel()\"> <i class=\"fa fa-file-excel-o\"> </i></button>\r\n          </div>\r\n\r\n          <div class=\"col-md-1\">\r\n            <input type=\"file\" id=\"servicePicked\" #servicePicked (click)=\"message='Upload File'\"\r\n              (change)=\"onServicePicked(servicePicked)\">\r\n          </div>\r\n\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"row\">\r\n                <div style=\"height: 350px; width: 100%;\" class=\"col-md-12 table-responsive\">\r\n                  <table style=\"height: 350px; width: 100%;\" class=\"table table-bordered table-hover dataTable\"\r\n                    role=\"grid\" style=\"width:100%; overflow-x: auto\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th style=\"width:3%\">Sr#</th>\r\n                        <th style=\"width:8%\">SKU ID</th>\r\n                        <th style=\"width:20%\">SKU Name</th>\r\n                        <th style=\"width:6%\">Status</th>\r\n                        <th style=\"width:6%\">Trans. Qty</th>\r\n                        <th style=\"width:6%\">Already Rec.</th>\r\n                        <th style=\"width:3%\">Rece. Qty</th>\r\n                        <th style=\"width:10%\">Location</th>\r\n                        <th style=\"width:8%\">Batch/Serial</th>\r\n                        <th style=\"width:6%\">Pallet No</th>\r\n                        <th style=\"width:8%\">SN No</th>\r\n                        <th style=\"width:6%\">PR No</th>\r\n                        <th style=\"width:6%\">InboundPool(OUT)</th>\r\n                        <th style=\"width:6%\">InboundPool(IN)</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let item of PickupOrderItemList; let i = index\" >\r\n                        <td>{{i+1}}</td>\r\n                        <td>{{item.ItemInformationId}}</td>\r\n                        <td>{{item.Description}} | {{item.ItemName}}</td>\r\n                        <td>{{item.Status}}</td>\r\n                        <td>{{item.FwdQty}}</td>\r\n                        <td>{{item.AlreadyReceived}}</td>\r\n                        <td>{{this.PickupOrderItemList[i][\"Quantity\"]}}</td>\r\n                        <td>{{this.PickupOrderItemList[i][\"ForwardLocation\"]}}</td> \r\n                        <td>{{item.BatchNo}}</td>\r\n                        <td>{{item.PalletNo}}</td>\r\n                        <td>{{item.SNno}}</td>\r\n                        <td>{{item.PRno}}</td>\r\n                        <td>{{item.InboundPool}}</td>\r\n                        <td>{{this.PickupOrderItemList[i][\"InboundPoolIn\"]}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"box-footer\">\r\n          <button type=\"submit\" [disabled]=\"formGroup.invalid || this.FlagDispatch=='True'\"\r\n            class=\"btn btn-success pull-right\">Transfer Order Received</button>\r\n          <!-- <button   class=\"btn btn-success pull-right\" (click)=\"openModal()\">Test modal</button> -->\r\n\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n<modal #AllModal>\r\n  <modal-header>\r\n\r\n\r\n  </modal-header>\r\n\r\n  <modal-content style=\"padding:20px\">\r\n    <div class=\"box box-primary\" id=\"print-section\">\r\n      \r\n      <section class=\"invoice\">\r\n        \r\n        <div class=\"col col-lg-12\">\r\n          <div class=\"col-lg-6 invoice-col\">\r\n            <div class=\"col-lg-12\">\r\n              <h2 class=\"page-header\">\r\n                <img id=\"logo\" src={{LogoPath}} height=\"70\" width=\"160\" style=\"background-color: white;\">\r\n              </h2>\r\n            </div>\r\n          </div>\r\n          <div class=\" col-lg-6 row invoice-info\">\r\n            <div class=\"col-lg-12 invoice-col pull-right\" id=\"invoice-col\">\r\n              <address>\r\n                <strong>{{CompanyName}}</strong>\r\n                {{CompanyAddress}}\r\n              </address>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        \r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\" style=\"text-align: center;\">\r\n              <h4><u>TRANSFER ORDER RECEIVING</u></h4>\r\n            </div>\r\n          </div>\r\n\r\n        <div class=\"col col-lg-12\">\r\n          <!-- info row -->\r\n          <div class=\"row invoice-info\">\r\n            <div class=\"col-lg-6 invoice-col\" id=\"invoice-col\" style=\"padding-right: 0; padding-left: 0;\">\r\n              <div class=\"col-lg-12 table-responsive\" style=\"min-height: 150px; padding-right: 0; padding-left: 0;\">\r\n                <table class=\"table table-responsive\">\r\n                  <tr>\r\n                    <td><b>Customer Name :</b></td>\r\n                    <td>{{dispatch.AML_Customers.Name}}</td>\r\n                  </tr>\r\n\r\n                  <tr>\r\n                    <td><b>Delivery Date :</b></td>\r\n                    <td>{{DispatchDate | date}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><b>Driver Name :</b></td>\r\n                    <td>{{DriverName}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><b>Driver Number :</b></td>\r\n                    <td>{{PhoneNumber}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><b>Vehicle No :</b></td>\r\n                    <td>{{VehicleNo}}</td>\r\n                  </tr>\r\n\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6 invoice-col\" id=\"invoice-col\">\r\n              <div class=\"col-lg-12 table-responsive\" style=\"min-height: 150px;\">\r\n                <table class=\"table\">\r\n                  <tr>\r\n                    <td><b>Pickup No :</b></td>\r\n                    <td>Pickup-{{dispatch.PickupOrderId}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><b>GatePass</b></td>\r\n                    <td>{{dispatch.GatePassNo}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><b>Agent :</b></td>\r\n                    <td>{{Agent}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><b>Supervisor Name :</b></td>\r\n                    <td>{{SupervisorName}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><b>Manual GP :</b></td>\r\n                    <td>{{Address}}</td>\r\n                  </tr>\r\n\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /.row -->\r\n        </div>\r\n        <!-- Table row -->\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 table-responsive\">\r\n            <table class=\"table table-striped\">\r\n              <thead>\r\n                <tr role=\"row\">\r\n                  <th>Sr.</th>\r\n                  <th>Required Quantity</th>\r\n                  <th>Quantity</th>\r\n                  <th>Location</th>\r\n                  <th>Batch/Serial</th>\r\n                  <th>Status</th>\r\n                  <th>Pallet No</th>\r\n                  <th>SN No</th>\r\n                  <th>PR No</th>\r\n                  <th>SR No</th>\r\n                  <th>InboundPool</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let item of PickupOrderItemList; index as i\">\r\n                <tr>\r\n                  <td colspan=\"11\" align=\"center\"><b>{{item.ItemInformationId}} | {{item.Description}} |\r\n                      {{item.ItemName}}</b></td>\r\n                </tr>\r\n                <tr>\r\n                  <td> {{i+1}}</td>\r\n                  <td>{{item.FwdQty}}</td>\r\n                  <td>{{item.Quantity}}</td>\r\n                  <td>{{item.ForwardLocation}}</td>\r\n                  <td>{{item.BatchNo}}</td>\r\n                  <td>{{item.Status}}</td>\r\n                  <td>{{item.PalletNo}}</td>\r\n                  <td>{{item.SNno}}</td>\r\n                  <td>{{item.PRno}}</td>\r\n                  <td>{{item.SRno}}</td>\r\n                  <td>{{item.InboundPoolIn}}</td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <td colspan=\"2\">\r\n                  <tr>TotalQty: {{TotalQty}}</tr>\r\n                </td>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n      </section>\r\n    </div>\r\n  </modal-content>\r\n\r\n  <modal-footer>\r\n    <div class=\"row no-print\" id=\"printButton\">\r\n      <div class=\"col-xs-12\">\r\n        <!-- <a  (click)=\"print()\" class=\"btn btn-default\"><i class=\"fa fa-print\"></i> Print</a> -->\r\n        <button [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '5px','font-size': '10px'}}\"\r\n          class=\"btn-wms hidden-print print-btn\" printTitle=\"Transfer Receiving\" [useExistingCss]=\"true\" ngxPrint\r\n          printSectionId=\"print-section\">\r\n          <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i>\r\n          </span></button>\r\n      </div>\r\n    </div>\r\n  </modal-footer>\r\n</modal>"

/***/ }),

/***/ "./src/app/layout/content/transfer-receiving/templates/images-upload.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/content/transfer-receiving/templates/images-upload.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n      IMAGES UPLOAD\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li><a routerLink=\"[this.routesList.SIGNED_CONTRACT_LISTING]\">Signed Contracts</a></li>\r\n      <li class=\"active\">Edit</li>\r\n    </ol>\r\n  </section>\r\n  \r\n  <section class=\"content\">\r\n    <div col-md-12>\r\n        <div class=\"box box-primary\" >\r\n        \r\n            <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createFile(formGroup.value)\">\r\n          <div style=\"margin-left: 15px; margin-right: 15px; margin-top: 60px\">\r\n            <h1>Upload File</h1>\r\n            <hr>\r\n          \r\n             <form #ourForm=\"ngForm\">\r\n          \r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-md-3\">\r\n                        <h3>Add files</h3>\r\n                        <div>\r\n                                <div class=\"well my-drop-zone\" ngxDragAndDrop *ngxInputFile>\r\n                                    <h5>Drop files here to upload</h5>\r\n                                    <h6>Or click here to select local files.</h6>\r\n                                </div>\r\n                                or via a simple button-like : <span class=\"btn btn-outline-success btn-s\" *ngxInputFile>Upload local files</span>\r\n                        </div>\r\n                    </div>\r\n          \r\n                    <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\r\n                       \r\n                        <div class=\"card\" style=\"margin-top: 20px\">\r\n          \r\n                            <table class=\"table\" style=\"font-size: 14px\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th></th>\r\n                                    <th width=\"40%\">Name</th>\r\n                                    <th>Size</th>\r\n                                    <th>Progress</th>\r\n                                    <th>Actions</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                <tr *ngFor=\"let itemFile of uploader.queue\"\r\n                                    [ngClass]=\"{'table-success' : itemFile.isSuccess, 'table-danger' : itemFile.isError, 'table-warning' : itemFile.isUploading  }\">\r\n                                    <td>\r\n                                        <div [ngxThumbnail]=\"itemFile\"></div>\r\n                                        <div style=\"text-align: center\">name: {{ itemFile.formData.get('name') }}</div>\r\n                                    </td>\r\n                                    <td style=\"padding-left: 10px;\">{{ itemFile.file.name }}</td>\r\n                                    <td>{{ itemFile.file.size/1024/1024 | number:'1.0-2' }} MB</td>\r\n                                    \r\n                                    <td style=\"text-align: center\">\r\n                                     \r\n                                        <button type=\"button\" class=\"btn btn-outline-warning btn-sm\" (click)=\"itemFile.cancel()\"\r\n                                                [disabled]=\"!itemFile.uploadInProgress || itemFile.isCancel\">\r\n                                            Cancel\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"itemFile.remove()\"\r\n                                                [disabled]=\"itemFile.isSuccess || itemFile.uploadInProgress\">\r\n                                            Remove\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n          \r\n                    </div>\r\n                </div>\r\n            </form> \r\n          </div>\r\n        \r\n         \r\n         \r\n       \r\n          <div class=\"box-footer\">\r\n              \r\n            <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Add</button>\r\n        </div>\r\n            </form>\r\n        </div>\r\n  \r\n  \r\n    </div>\r\n  </section>\r\n  \r\n  "

/***/ }),

/***/ "./src/app/layout/content/transfer-receiving/templates/list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/content/transfer-receiving/templates/list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    {{isCustomerDelivers == true ? 'CUSTOMER' : 'TRANSFER'}} RECEIVING LISTING\r\n    <!-- <small>\r\n      <button class=\"btn-wms\" (click)=\"redirectToCreateDispatch()\"><i class=\"fa fa-plus\"></i> New</button>\r\n    </small> -->\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li class=\"active\">Listing</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header\">\r\n          <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n          <div class=\"col-md-12\">\r\n            <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate >\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Warehouse Received In</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"ToWarehouseKeyPair\"\r\n                [settings]=\"ToWarehouseDropdownSettings\" (onDeSelect)=\"onDeSelectToWarehouse('selectedToWarehouse')\"\r\n                formControlName=\"ToWarehouseId\"\r\n                (onSelect)=\"onSelectToWarehouse($event,'selectedToWarehouse')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedToWarehouse || !this.selectedToWarehouse['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div> \r\n            \r\n            \r\n            </form>       \r\n          </div>\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <ul class=\"nav nav-tabs\">\r\n            <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Pending</a></li>\r\n            <li><a data-toggle=\"tab\" href=\"#menu1\">Completed</a></li>\r\n           \r\n          </ul>\r\n          \r\n          <div class=\"tab-content\">\r\n            <div id=\"home\" class=\"tab-pane fade in active\">\r\n              <h3>Pending</h3>\r\n              <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 table-responsive\" id=\"myTable1\">\r\n                    <nav>\r\n                      <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 58%; \r\n                          background-color: #6c757d;\">\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"downloadCSV(this.dispatchListPending, 'dispatch-pending-list.csv')\"\r\n                            style=\"color: white;\">\r\n                            Download CSV</a>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"exportExcel('dispatch-pending-list.xlsx', 'tbl1', 'Dispatch Pending List')\"\r\n                            style=\"color: white;\">\r\n                            Download Excel</a>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"createPdf('dispatch-pending-list.pdf', '#tbl1')\" style=\"color: white;\">Export To\r\n                            PDF</a>\r\n                        </li>\r\n                        <li>\r\n                          <button\r\n                            [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                            class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                            ngxPrint printSectionId=\"myTable1\">\r\n                            Print\r\n                          </button>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item dropdown\">\r\n                          <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                            Column Hidden\r\n                          </a>\r\n                          <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                              width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('0')\" data-column=\"0\" style=\"color: white;\">\r\n                              Customer\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('1')\" data-column=\"1\" style=\"color: white;\">\r\n                              Customer Order No\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('2')\" data-column=\"1\" style=\"color: white;\">\r\n                              Warehouse\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('3')\" data-column=\"2\" style=\"color: white;\">\r\n                              Order Date\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('4')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              WayBill\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('5')\" data-column=\"0\" style=\"color: white;\">\r\n                              Contact Person\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('6')\" data-column=\"1\" style=\"color: white;\">\r\n                              City\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('7')\" data-column=\"1\" style=\"color: white;\">\r\n                              Address\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow1('8')\" data-column=\"2\" style=\"color: white;\">\r\n                              Pickup Plan Id\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('9')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Status\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow1('10')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Action\r\n                            </a><br>\r\n                          </div>\r\n                        </li>\r\n                      </ol>\r\n                    </nav>\r\n                    <table class=\"table table-bordered table-hover dataTable\" role=\"grid\" id=\"tbl1\">\r\n                      <thead>\r\n                        <tr role=\"row\">\r\n                          <th *ngIf=\"!hideShowList1[0].status\">\r\n                            Customer\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList1[1].status\">\r\n                            Customer Order No\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList1[2].status\">\r\n                            Warehouse\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList1[3].status\">\r\n                           Order Date\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList1[4].status\">\r\n                            WayBill\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList1[5].status\">\r\n                            Contact Person\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList1[6].status\">\r\n                            City\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList1[7].status\">\r\n                            Address\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList1[8].status\">\r\n                            Pickup Plan Id\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList1[9].status\">\r\n                            Status\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList1[10].status\">\r\n                            Action\r\n                          </th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr role=\"row\" *ngFor=\"let dispatch of dispatchListPending\">\r\n                          <td *ngIf=\"!hideShowList1[0].status\">{{dispatch.AML_Customers.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList1[1].status\">{{dispatch.AML_PickupOrder.CustomerOrderNo}}</td>\r\n                          <td *ngIf=\"!hideShowList1[2].status\">{{dispatch.AML_Warehouse.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList1[3].status\">{{dispatch.AML_PickupOrder.OrderDate | date}}</td>\r\n                          <td *ngIf=\"!hideShowList1[4].status\">{{dispatch.AML_PickupOrder.waybill}}</td>\r\n                          <td *ngIf=\"!hideShowList1[5].status\">{{dispatch.AML_PickupOrder.ContactPerson}}</td>\r\n                          <td *ngIf=\"!hideShowList1[6].status\">{{dispatch.AML_PickupOrder.AML_City.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList1[7].status\">{{dispatch.AML_PickupOrder.Address}}</td>\r\n                          <td *ngIf=\"!hideShowList1[8].status\">{{dispatch.AML_PickupOrder.PickupOrderId}}</td>\r\n                          <td *ngIf=\"!hideShowList1[9].status\">\r\n                            <span *ngIf=\"dispatch.IsReceived==true; else inactive_span\" class=\"label label-success\">Complete</span>\r\n                            <ng-template #inactive_span>  <span class=\"bg-red label\">Pending</span></ng-template>\r\n                        </td>\r\n                        <td *ngIf=\"!hideShowList1[10].status\">\r\n                          <!-- <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"Edit(dispatch.DispatchId)\"><i\r\n                              class=\"fa fa-info\"></i></button> -->\r\n                              <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"Create(dispatch.DispatchId)\"><i\r\n                                class=\"fa fa-edit\"></i></button>\r\n                        </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n         \r\n              </div>\r\n            </div>\r\n            <div id=\"menu1\" class=\"tab-pane fade\">\r\n              <h3>Completed</h3>\r\n              <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 table-responsive\" id=\"myTable2\">\r\n                    <nav>\r\n                      <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 58%; \r\n                          background-color: #6c757d;\">\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"downloadCSV(this.dispatchListCompleted, 'dispatch-completed-list.csv')\"\r\n                            style=\"color: white;\">\r\n                            Download CSV</a>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"exportExcel('dispatch-completed-list.xlsx', 'tbl2', 'Dispatch Completed List')\"\r\n                            style=\"color: white;\">\r\n                            Download Excel</a>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a (click)=\"createPdf('dispatch-completed-list.pdf', '#tbl2')\" style=\"color: white;\">Export To\r\n                            PDF</a>\r\n                        </li>\r\n                        <li>\r\n                          <button\r\n                            [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                            class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                            ngxPrint printSectionId=\"myTable2\">\r\n                            Print\r\n                          </button>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item dropdown\">\r\n                          <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                            Column Hidden\r\n                          </a>\r\n                          <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                              width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('0')\" data-column=\"0\" style=\"color: white;\">\r\n                              Customer\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('1')\" data-column=\"1\" style=\"color: white;\">\r\n                              Customer Order No\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('2')\" data-column=\"1\" style=\"color: white;\">\r\n                              Warehouse\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('3')\" data-column=\"2\" style=\"color: white;\">\r\n                              Order Date\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('4')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              WayBill\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('5')\" data-column=\"0\" style=\"color: white;\">\r\n                              Contact Person\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('6')\" data-column=\"1\" style=\"color: white;\">\r\n                              City\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('7')\" data-column=\"1\" style=\"color: white;\">\r\n                              Address\r\n                            </a><br>\r\n                            <a class=\"dropdown-item ml-3\" (click)=\"HideShow2('8')\" data-column=\"2\" style=\"color: white;\">\r\n                              Pickup Plan Id\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('9')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Status\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('10')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              Action\r\n                            </a><br>\r\n                            <a class=\"dropdown-item\" (click)=\"HideShow2('11')\" data-column=\"3\"\r\n                              style=\"color: white; text-align: center\">\r\n                              POD\r\n                            </a><br>\r\n                          </div>\r\n                        </li>\r\n                      </ol>\r\n                    </nav>\r\n                    <table class=\"table table-bordered table-hover dataTable\" role=\"grid\"  id=\"tbl2\">\r\n                      <thead>\r\n                        <tr role=\"row\">\r\n                          <th *ngIf=\"!hideShowList2[0].status\">\r\n                            Customer\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList2[1].status\">\r\n                            Customer Order No\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList2[2].status\">\r\n                            Warehouse\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList2[3].status\">\r\n                           Order Date\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList2[4].status\">\r\n                            WayBill\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList2[5].status\">\r\n                            Contact Person\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList2[6].status\">\r\n                            City\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList2[7].status\">\r\n                            Address\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList2[8].status\">\r\n                            Pickup Plan Id\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList2[9].status\">\r\n                            Status\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList2[10].status\">\r\n                            Action\r\n                          </th>\r\n                          <th *ngIf=\"!hideShowList2[11].status\">\r\n                            POD\r\n                          </th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr role=\"row\" *ngFor=\"let dispatch of dispatchListCompleted\">\r\n                          <td *ngIf=\"!hideShowList2[0].status\">{{dispatch.AML_Customers.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList2[1].status\">{{dispatch.AML_PickupOrder.CustomerOrderNo}}</td>\r\n                          <td *ngIf=\"!hideShowList2[2].status\">{{dispatch.AML_Warehouse.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList2[3].status\">{{dispatch.AML_PickupOrder.OrderDate | date}}</td>\r\n                          <td *ngIf=\"!hideShowList2[4].status\">{{dispatch.AML_PickupOrder.waybill}}</td>\r\n                          <td *ngIf=\"!hideShowList2[5].status\">{{dispatch.AML_PickupOrder.ContactPerson}}</td>\r\n                          <td *ngIf=\"!hideShowList2[6].status\">{{dispatch.AML_PickupOrder.AML_City.Name}}</td>\r\n                          <td *ngIf=\"!hideShowList2[7].status\">{{dispatch.AML_PickupOrder.Address}}</td>\r\n                          <td *ngIf=\"!hideShowList2[8].status\">{{dispatch.AML_PickupOrder.PickupOrderId}}</td>\r\n                          <td *ngIf=\"!hideShowList2[9].status\">\r\n                            <span *ngIf=\"dispatch.IsReceived==true; else inactive_span\" class=\"label label-success\">Complete</span>\r\n                            <ng-template #inactive_span>  <span class=\"bg-red label\">Pending</span></ng-template>\r\n                        </td>\r\n                        <td *ngIf=\"!hideShowList2[10].status\">\r\n                          <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"Edit(dispatch.DispatchId)\"><i\r\n                              class=\"fa fa-info\"></i></button>\r\n                             \r\n                        </td>\r\n                        <td *ngIf=\"!hideShowList2[11].status\">\r\n                          <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"UploadImages(dispatch.DispatchId)\"><i\r\n                            class=\"fa fa-upload\"></i></button>\r\n                        </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n         \r\n              </div>\r\n            </div>\r\n           \r\n          </div>\r\n\r\n          <ngx-ui-loader></ngx-ui-loader>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>"

/***/ }),

/***/ "./src/app/layout/content/transfer-receiving/transfer-receiving.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/content/transfer-receiving/transfer-receiving.module.ts ***!
  \********************************************************************************/
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
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ngx_upload_1 = __webpack_require__(/*! @wkoza/ngx-upload */ "./node_modules/@wkoza/ngx-upload/index.js");
var ng_multiselect_dropdown_1 = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
var ngx_toggle_switch_1 = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
var shared_module_1 = __webpack_require__(/*! src/app/helpers/modules/shared.module */ "./src/app/helpers/modules/shared.module.ts");
var transfer_receiving_edit_form_component_1 = __webpack_require__(/*! ./components/transfer-receiving-edit-form.component */ "./src/app/layout/content/transfer-receiving/components/transfer-receiving-edit-form.component.ts");
var transfer_receiving_form_component_1 = __webpack_require__(/*! ./components/transfer-receiving-form.component */ "./src/app/layout/content/transfer-receiving/components/transfer-receiving-form.component.ts");
var transfer_receiving_list_component_1 = __webpack_require__(/*! ./components/transfer-receiving-list.component */ "./src/app/layout/content/transfer-receiving/components/transfer-receiving-list.component.ts");
var uploadImages_1 = __webpack_require__(/*! ./components/uploadImages */ "./src/app/layout/content/transfer-receiving/components/uploadImages.ts");
var transfer_receiving_service_1 = __webpack_require__(/*! ./services/transfer-receiving.service */ "./src/app/layout/content/transfer-receiving/services/transfer-receiving.service.ts");
var ngb_modal_1 = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
var ngx_print_1 = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
exports.ngxDropTargetOptions = {
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
                component: transfer_receiving_list_component_1.TransferReceivingListComponent,
            },
            {
                path: "create/:Id",
                component: transfer_receiving_form_component_1.TransferReceivingFormComponent,
            },
            {
                path: "edit/:Id",
                component: transfer_receiving_edit_form_component_1.TransferReceivingEditFormComponent,
            },
            {
                path: "imageupload/:Id",
                component: uploadImages_1.ImageUploadComponent,
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var TransferReceivingModule = /** @class */ (function () {
    function TransferReceivingModule() {
    }
    TransferReceivingModule = __decorate([
        core_1.NgModule({
            imports: [
                ngb_modal_1.ModalModule,
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                ngx_print_1.NgxPrintModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule,
                forms_1.ReactiveFormsModule, ngx_toggle_switch_1.UiSwitchModule,
                ng_multiselect_dropdown_1.NgMultiSelectDropDownModule,
                ngx_upload_1.NgxUploadModule,
                ngx_ui_loader_1.NgxUiLoaderModule
            ],
            declarations: [
                transfer_receiving_form_component_1.TransferReceivingFormComponent, transfer_receiving_list_component_1.TransferReceivingListComponent, transfer_receiving_edit_form_component_1.TransferReceivingEditFormComponent,
                uploadImages_1.ImageUploadComponent
            ],
            providers: [
                transfer_receiving_service_1.TransferReceivingService,
                excel_file_service_1.ExporterService
            ],
            entryComponents: []
        })
    ], TransferReceivingModule);
    return TransferReceivingModule;
}());
exports.TransferReceivingModule = TransferReceivingModule;


/***/ })

}]);
//# sourceMappingURL=content-transfer-receiving-transfer-receiving-module.js.map