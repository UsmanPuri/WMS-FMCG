(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-transfer-order-transfer-order-module"],{

/***/ "./node_modules/ngx-toggle-switch/ui-switch.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-toggle-switch/ui-switch.es5.js ***!
  \*********************************************************/
/*! exports provided: UiSwitchComponent, UiSwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitchComponent", function() { return UiSwitchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSwitchModule", function() { return UiSwitchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UI_SWITCH_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return UiSwitchComponent; }),
    multi: true
};
var UiSwitchComponent = (function () {
    function UiSwitchComponent() {
        this.size = 'medium';
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.color = 'rgb(100, 189, 99)';
        this.switchOffColor = '';
        this.switchColor = '#fff';
        this.defaultBgColor = '#fff';
        this.defaultBoColor = '#dfdfdf';
        this.labelOn = '';
        this.labelOff = '';
        this.onTouchedCallback = function (v) { };
        this.onChangeCallback = function (v) { };
    }
    Object.defineProperty(UiSwitchComponent.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._checked = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSwitchComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._disabled = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSwitchComponent.prototype, "reverse", {
        get: /**
         * @return {?}
         */
        function () {
            return this._reverse;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._reverse = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} flag
     * @return {?}
     */
    UiSwitchComponent.prototype.getColor = /**
     * @param {?=} flag
     * @return {?}
     */
    function (flag) {
        if (flag === void 0) { flag = ''; }
        if (flag === 'borderColor') {
            return this.defaultBoColor;
        }
        if (flag === 'switchColor') {
            if (this.reverse) {
                return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
            }
            return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
        }
        if (this.reverse) {
            return !this.checked ? this.color : this.defaultBgColor;
        }
        return this.checked ? this.color : this.defaultBgColor;
    };
    /**
     * @return {?}
     */
    UiSwitchComponent.prototype.onToggle = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.change.emit(this.checked);
        this.onChangeCallback(this.checked);
        this.onTouchedCallback(this.checked);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    UiSwitchComponent.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (obj !== this.checked) {
            this.checked = !!obj;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    UiSwitchComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    UiSwitchComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    UiSwitchComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    UiSwitchComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ui-switch',
                    template: "\n    <span class=\"switch\"\n    [class.checked]=\"checked\"\n    [class.disabled]=\"disabled\"\n    [class.switch-large]=\"size === 'large'\"\n    [class.switch-medium]=\"size === 'medium'\"\n    [class.switch-small]=\"size === 'small'\"\n    [class.switch-labeled]=\"!!labelOn || !!labelOff\"\n    [style.background-color]=\"getColor()\"\n    [style.border-color]=\"getColor('borderColor')\"\n    >\n    <input type=\"checkbox\" id=\"enabled\" name=\"enabled\" [checked]=\"checked\" style=\"display: none;\" aria-invalid=\"false\">\n    <small [style.background]=\"getColor('switchColor')\">\n    </small>\n    <span class=\"switch-text\" *ngIf=\"!!labelOn || !!labelOff\">\n      <span class=\"on\" [innerHtml]=\"labelOn\"></span>\n      <span class=\"off\" [innerHtml]=\"labelOff\"></span>\n    </span>\n    </span>\n  ",
                    styles: ["\n    .switch {\n    background: #f00;\n    border: 1px solid #dfdfdf;\n    position: relative;\n    display: inline-block;\n    box-sizing: content-box;\n    overflow: visible;\n    padding: 0;\n    margin: 0;\n    cursor: pointer;\n    box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }\n\n    small {\n    border-radius: 100%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }\n\n    .switch-large {\n    width: 66px;\n    height: 40px;\n    border-radius: 40px;\n    }\n\n    .switch-large small {\n    width: 40px;\n    height: 40px;\n    }\n\n    .switch-medium {\n    width: 50px;\n    height: 30px;\n    border-radius: 30px;\n    }\n\n    .switch-medium.switch-labeled {\n      width: 60px;\n    }\n\n    .switch-medium small {\n    width: 30px;\n    height: 30px;\n    }\n\n    .switch-small {\n    width: 33px;\n    height: 20px;\n    border-radius: 20px;\n    }\n\n    .switch-small small {\n    width: 20px;\n    height: 20px;\n    }\n\n    .switch-labeled {\n      cursor: pointer;\n    }\n\n    .checked {\n    background: rgb(100, 189, 99);\n    border-color: rgb(100, 189, 99);\n    }\n\n    .switch-large.checked small {\n    left: 26px;\n    }\n\n    .switch-medium.checked small {\n    left: 20px;\n    }\n\n    .switch-medium.switch-labeled.checked small {\n      left: 30px;\n    }\n\n    .switch-small.checked small {\n    left: 13px;\n    }\n\n    .disabled {\n    opacity: .50;\n    cursor: not-allowed;\n    }\n\n    .switch .switch-text {\n      font-size: 13px;\n    }\n\n    .switch .off {\n      opacity: 1;\n      position: absolute;\n      right: 10%;\n      top: 25%;\n      z-index: 0;\n      color:#A9A9A9;\n      transition: 0.4s ease-out all;\n    }\n\n    .switch .on {\n      opacity:0;\n      z-index: 0;\n      color:#fff;\n      position: absolute;\n      top: 25%;\n      left: 9%;\n      transition: 0.4s ease-out all;\n    }\n\n    .switch.checked .off {\n      opacity:0;\n    }\n\n    .switch.checked .on {\n      opacity:1;\n    }\n\n    "],
                    providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    UiSwitchComponent.ctorParameters = function () { return []; };
    UiSwitchComponent.propDecorators = {
        "size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "color": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "switchOffColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "switchColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "defaultBgColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "defaultBoColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "labelOn": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "labelOff": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "checked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "reverse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onToggle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] },],
    };
    return UiSwitchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UiSwitchModule = (function () {
    function UiSwitchModule() {
    }
    UiSwitchModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        UiSwitchComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
                    ],
                    exports: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                        UiSwitchComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    UiSwitchModule.ctorParameters = function () { return []; };
    return UiSwitchModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ui-switch.es5.js.map


/***/ }),

/***/ "./src/app/helpers/services/excel-file.service.ts":
/*!********************************************************!*\
  !*** ./src/app/helpers/services/excel-file.service.ts ***!
  \********************************************************/
/*! exports provided: ExporterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExporterService", function() { return ExporterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EXCEL_TYPE = 'application/octet-stream';
//'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset = UTF-8';
var EXCEL_EXT = '.xlsx';
var ExporterService = /** @class */ (function () {
    function ExporterService() {
    }
    ExporterService.prototype.exportToExcel = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].json_to_sheet(json);
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
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcel(excelBuffer, excelFileName);
    };
    ExporterService.prototype.saveAsExcel = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXT);
    };
    ExporterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ExporterService);
    return ExporterService;
}());



/***/ }),

/***/ "./src/app/layout/content/transfer-order/components/transfer-order-form.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/content/transfer-order/components/transfer-order-form.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TransferOrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferOrderFormComponent", function() { return TransferOrderFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var src_app_helpers_services_environment_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/services/environment-url.service */ "./src/app/helpers/services/environment-url.service.ts");
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_transfer_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/transfer-order.service */ "./src/app/layout/content/transfer-order/services/transfer-order.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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








var TransferOrderFormComponent = /** @class */ (function (_super) {
    __extends(TransferOrderFormComponent, _super);
    function TransferOrderFormComponent(injector, activeRoute, exporterService, _transferOrderServvice, envUrl, http) {
        var _this = _super.call(this, injector) || this;
        _this.activeRoute = activeRoute;
        _this.exporterService = exporterService;
        _this._transferOrderServvice = _transferOrderServvice;
        _this.envUrl = envUrl;
        _this.http = http;
        _this.FromWarehouseDropdownSettings = {};
        _this.customerDropdownSettings = {};
        _this.itemDropdownSettings = {};
        _this.ToWarehouseDropdownSettings = {};
        _this.itemTempToAddIntoItemPostList = {};
        _this.selectedFromWarehouse = {};
        _this.selectedToWarehouse = {};
        _this.selectedCustomer = {};
        _this.itemKeyPair = [];
        _this.retrivedItemListByCustomer = [];
        _this.shipmentNoteChilds = [];
        _this.serialDropdownSettings = {};
        _this.itemListToPost = [];
        _this.shipmentNoteChildRow = {};
        _this.SerialKeyPair = [];
        _this.BTN = false;
        return _this;
    }
    TransferOrderFormComponent.prototype.ngOnInit = function () {
        //this.hideshow=false;
        this.addFormValidations();
        this.dropdownSettings();
        // this.getCityKeyPair();
        this.getCustomerKeyPair();
        this.getWarehouseKeyPair();
    };
    TransferOrderFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
        ];
        //this.addFormControlWithValidations("PickupOrderId", []);
        this.addFormControlWithValidations("CustomerId", []);
        this.addFormControlWithValidations("TransferOrderNo", requiredValidation);
        this.addFormControlWithValidations("LoadingDate", []);
        //this.addFormControlWithValidations("PCRNo", requiredValidation);
        //this.addFormControlWithValidations("IRNo", []);
        //this.addFormControlWithValidations("Plant", requiredValidation);
        //this.addFormControlWithValidations("OriginWarehouse", requiredValidation);
        this.addFormControlWithValidations("FromWarehouseId", requiredValidation);
        this.addFormControlWithValidations("ToWarehouseId", requiredValidation);
        //this.addFormControlWithValidations("ContactPerson", []);
        // this.addFormControlWithValidations("Consignee", []);
        //this.addFormControlWithValidations("ConsigneeContact", []);
        //this.addFormControlWithValidations("Address", []);
        //this.addFormControlWithValidations("CityId", []);
        //this.addFormControlWithValidations("State", []);
        //this.addFormControlWithValidations("Country", []);
        this.addFormControlWithValidations("Telephone", []);
        this.addFormControlWithValidations("ItemId", []);
        this.addFormControlWithValidations("QtyToAdd", []);
        this.addFormControlWithValidations("PickupMethod", requiredValidation);
        this.addFormControlWithValidations("OrderDate", []);
        this.addFormControlWithValidations("waybill", []);
        this.addFormControlWithValidations("SNno", []);
        this.addFormControlWithValidations("DestinationAddress", []);
        this.addFormControlWithValidations("ICareRef", []);
        this.addFormControlWithValidations("SlaMode", []);
    };
    TransferOrderFormComponent.prototype.createTransferOrder = function (formValue) {
        if (this.formGroup.valid) {
            // if(!this.selectedCustomer || !this.selectedCustomer["Id"]){
            //   this.showToastrWarning("Select Customer please.");
            //   return false;
            // }
            // if(!this.selectedCity || !this.selectedCity["Id"]){
            //   this.showToastrWarning("Select City please.");
            //   return false;
            // }
            if (!this.selectedFromWarehouse || !this.selectedFromWarehouse["Id"]) {
                this.showToastrWarning("Select From Warehouse please.");
                return false;
            }
            if (!this.selectedToWarehouse || !this.selectedToWarehouse["Id"]) {
                this.showToastrWarning("Select To Warehouse please.");
                return false;
            }
            if (this.itemListToPost.length <= 0) {
                this.showToastrWarning("Add item please.");
                return false;
            }
            this.executePickupOrderCreation(formValue);
        }
    };
    TransferOrderFormComponent.prototype.executePickupOrderCreation = function (formValue) {
        var _this = this;
        var order = {
            TransferOrderNo: formValue.TransferOrderNo,
            LoadingDate: formValue.LoadingDate,
            OrderDate: formValue.OrderDate,
            WarehouseFrom: this.selectedFromWarehouse["Id"],
            WarehouseTo: this.selectedToWarehouse["Id"],
            PickupMethod: formValue.PickupMethod,
            transferOrderChilds: this.itemListToPost,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
        };
        debugger;
        var apiUrl = this.apiConstant.Transfer_ORDER_CREATE;
        this._transferOrderServvice.create(apiUrl, order)
            .subscribe(function (res) {
            _this.showToastrSuccess("Transfer order successfully");
            setTimeout(function () {
                _this.redirectToTransferOrderList();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    TransferOrderFormComponent.prototype.addItemIntoItemPostList = function () {
        var _this = this;
        debugger;
        if (this.itemTempToAddIntoItemPostList && this.itemTempToAddIntoItemPostList["ItemId"] != null
            && this.itemTempToAddIntoItemPostList["Quantity"] !== '0') {
            this.itemListToPost = this.itemListToPost.filter(function (x) { return x.ItemId !== _this.itemTempToAddIntoItemPostList["ItemId"]; });
            if (this.hideshow) {
                this.itemListToPost.push({
                    ItemId: this.itemTempToAddIntoItemPostList["ItemId"],
                    Quantity: this.itemTempToAddIntoItemPostList["Quantity"],
                    Name: this.retrivedItemListByCustomer.filter(function (x) { return x.ItemInformationId ===
                        _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["AML_ItemInformation"]["Description"] + " | " +
                        this.retrivedItemListByCustomer.filter(function (x) { return x.ItemInformationId ===
                            _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["AML_ItemInformation"]["Name"],
                    UnitId: this.retrivedItemListByCustomer.filter(function (x) { return x.ItemInformationId ===
                        _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["AML_ItemInformation"].UOM,
                    Unit: this.retrivedItemListByCustomer.filter(function (x) { return x.ItemInformationId ===
                        _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["AML_ItemInformation"]["AML_Units"]["Title"],
                    RelOrd: '',
                    SNno: this.itemTempToAddIntoItemPostList["SNno"],
                    DestinationAddress: this.formGroup.get('DestinationAddress').value,
                    ICareRef: this.formGroup.get('ICareRef').value,
                    SlaMode: this.formGroup.get('SlaMode').value,
                    GatePass: this.shipmentNoteChildRow.GatePass,
                    ServiceRequest: this.shipmentNoteChildRow.ServiceRequest,
                    RMA: this.shipmentNoteChildRow.RMA,
                    RecievedFrom: this.shipmentNoteChildRow.RecievedFrom,
                    ConsignmentNo: this.shipmentNoteChildRow.ConsignmentNo,
                    ICare: this.shipmentNoteChildRow.ICare,
                    Batch: this.shipmentNoteChildRow.Batch,
                    Status: this.shipmentNoteChildRow.Status
                });
            }
            else {
                this.itemListToPost.push({
                    ItemId: this.itemTempToAddIntoItemPostList["ItemId"],
                    Quantity: this.itemTempToAddIntoItemPostList["Quantity"],
                    Name: this.retrivedItemListByCustomer.filter(function (x) { return x.ItemInformationId ===
                        _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["AML_ItemInformation"]["Description"] + " | " +
                        this.retrivedItemListByCustomer.filter(function (x) { return x.ItemInformationId ===
                            _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["AML_ItemInformation"]["Name"],
                    UnitId: this.retrivedItemListByCustomer.filter(function (x) { return x.ItemInformationId ===
                        _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["AML_ItemInformation"].UOM,
                    Unit: this.retrivedItemListByCustomer.filter(function (x) { return x.ItemInformationId ===
                        _this.itemTempToAddIntoItemPostList["ItemId"]; })[0]["AML_ItemInformation"]["AML_Units"]["Title"],
                    RelOrd: '',
                    SNno: this.itemTempToAddIntoItemPostList["SNno"],
                    DestinationAddress: this.formGroup.get('DestinationAddress').value,
                    ICareRef: this.formGroup.get('ICareRef').value,
                    SlaMode: this.formGroup.get('SlaMode').value
                });
            }
            this.itemTempToAddIntoItemPostList["Quantity"] = 0;
            this.formGroup.get("QtyToAdd").setValue('');
            this.formGroup.get("ItemId").setValue('');
            // this.itemTempToAddIntoItemPostList["SNno"]=null;
            this.formGroup.get("DestinationAddress").setValue('');
            this.formGroup.get("ICareRef").setValue('');
            this.formGroup.get("SlaMode").setValue('');
            this.formGroup.get("SNno").setValue('');
        }
    };
    TransferOrderFormComponent.prototype.quantityChange = function (event) {
        if (Number(event.target.value) <= 0) {
            this.showToastrWarning("Invalid Quantity");
            event.target.value = '';
            this.itemTempToAddIntoItemPostList["Quantity"] = 0;
            return false;
        }
        this.itemTempToAddIntoItemPostList["Quantity"] = Number(event.target.value);
    };
    TransferOrderFormComponent.prototype.PickupMethodChange = function () {
        debugger;
        var v = this.formGroup.get('PickupMethod').value;
        if (v == "5") {
            this.hideshow = true;
        }
        else {
            this.hideshow = false;
        }
    };
    TransferOrderFormComponent.prototype.addItemRelOrd = function (event, itemId) {
        var model = this.itemListToPost.filter(function (x) { return x.ItemId === itemId; })[0];
        if (model) {
            model.RelOrd = event.target.value;
        }
    };
    TransferOrderFormComponent.prototype.deleteFromitemListToPost = function (item) {
        this.itemListToPost.splice(this.itemListToPost.indexOf(item), 1);
    };
    TransferOrderFormComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this._transferOrderServvice.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            debugger;
            _this.FromWarehouseKeyPair = res;
            _this.ToWarehouseKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    TransferOrderFormComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._transferOrderServvice.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    TransferOrderFormComponent.prototype.customerChange = function (event) {
        this.selectedCustomer = {
            Id: event.Value,
            Name: event.Text
        };
        if (event.Value) {
            this.getItemByCustomer(event.Value);
        }
    };
    TransferOrderFormComponent.prototype.getItemByCustomer = function (customerId) {
        var _this = this;
        var apiAddress = this.apiConstant.PICKUP_ORDER_GetItemForOrder + ("" + customerId);
        this._transferOrderServvice.getData(apiAddress)
            .subscribe(function (res) {
            _this.retrivedItemListByCustomer = res;
            console.log("Item");
            console.log(_this.retrivedItemListByCustomer);
            var temp = [];
            _this.retrivedItemListByCustomer.forEach(function (element) {
                if (!temp.filter(function (x) { return x.Value === element.ItemInformationId; })[0]) {
                    temp.push({
                        Value: element.ItemInformationId,
                        Text: element.AML_ItemInformation.Description + " | " + element.AML_ItemInformation.Name,
                        ParentReferenceId: null
                    });
                }
            });
            _this.itemKeyPair = temp;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    TransferOrderFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    TransferOrderFormComponent.prototype.redirectToTransferOrderList = function () {
        this.router.navigate([this.routesList.TRANSFER_ORDER_LISTING]);
    };
    TransferOrderFormComponent.prototype.onSelectFromWarehouse = function (item, dropDownName) {
        this.selectedFromWarehouse = {
            Id: item.Value,
            Name: item.Text
        };
    };
    TransferOrderFormComponent.prototype.onDeSelectFromWarehouse = function (dropDownName) {
        this.selectedFromWarehouse = {};
    };
    TransferOrderFormComponent.prototype.onSelectToWarehouse = function (item, dropDownName) {
        this.selectedToWarehouse = {
            Id: item.Value,
            Name: item.Text
        };
    };
    TransferOrderFormComponent.prototype.itemDeSelect = function () {
        this.itemTempToAddIntoItemPostList["ItemId"] = null;
    };
    TransferOrderFormComponent.prototype.itemChange = function (event) {
        this.itemTempToAddIntoItemPostList["ItemId"] = event.Value;
        this.getSerialKeyPair(event.Value);
    };
    TransferOrderFormComponent.prototype.getSerialKeyPair = function (param) {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            ItemId: param
        };
        var apiAddress = this.apiConstant.Serial_KEYPAIR;
        this._transferOrderServvice.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            debugger;
            _this.shipmentNoteChilds = res;
            var temp = [];
            _this.shipmentNoteChilds.forEach(function (element) {
                // if(!temp.filter(x=>x.Value === element.ItemInformationId)[0]){
                temp.push({
                    Value: element.SNno,
                    Text: element.Batch + " | " + element.Status + " | " + element.SNno + " | " + element.GatePass + " | " + element.ServiceRequest + " | " + element.RMA + " | " + element.RecievedFrom + " | " + element.ConsignmentNo + " | " + element.ICare
                });
                // }
            });
            _this.SerialKeyPair = temp;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    TransferOrderFormComponent.prototype.onDeSelectToWarehouse = function (dropDownName) {
        this.selectedToWarehouse = {};
    };
    TransferOrderFormComponent.prototype.serialChange = function (event) {
        debugger;
        this.itemTempToAddIntoItemPostList["SNno"] = event.Value;
        var row = this.shipmentNoteChilds.filter(function (x) { return x.SNno == event.Value; });
        this.shipmentNoteChildRow = row[0];
    };
    TransferOrderFormComponent.prototype.exportServiceAsExcel = function () {
        this.itemListToPost.push({
            ItemId: '',
            Name: '',
            Quantity: '',
            UnitId: '',
            Unit: '',
            SNno: '',
            DestinationAddress: '',
            ICareRef: '',
            SlaMode: '',
            RelOrd: ''
        });
        this.exporterService.exportToExcel(this.itemListToPost, 'Customer Order');
        this.itemListToPost = [];
    };
    TransferOrderFormComponent.prototype.onServicePicked = function () {
        var _this = this;
        debugger;
        var formData = new FormData();
        //formData.append('ContractId', this.selectedContract.toString());
        formData.append('CustomerId', this.selectedCustomer.toString());
        formData.append('file', this.servicePicked.nativeElement.files[0]);
        if (formData) {
            this.uploadFile(formData)
                .subscribe(function (msg) {
                _this.itemListToPost = msg;
                _this.itemListToPost.forEach(function (element) {
                    if (element.ItemId === "0") {
                        _this.BTN = true;
                    }
                });
                // this.fleetServiceList = null;
                debugger;
                console.log(_this.itemListToPost);
            });
        }
    };
    TransferOrderFormComponent.prototype.uploadFile = function (formData) {
        if (!formData) {
            return;
        }
        var apiUrl = "/File/UploadPickupOrder";
        var url = this.envUrl.urlAddress + apiUrl;
        return this.http.post(url, formData);
    };
    TransferOrderFormComponent.prototype.dropdownSettings = function () {
        // this.customerDropdownSettings = {
        //   idField: 'Value',
        //   textField: 'Text',
        //   singleSelection: true,
        //   selectAllText: 'Select All',
        //   unSelectAllText: 'UnSelect All',
        //   allowSearchFilter: true,
        //   closeDropDownOnSelection: true
        // };
        // this.cityDropdownSettings = {
        //   idField: 'Value',
        //   textField: 'Text',
        //   singleSelection: true,
        //   selectAllText: 'Select All',
        //   unSelectAllText: 'UnSelect All',
        //   allowSearchFilter: true,
        //   closeDropDownOnSelection: true
        // };
        // this.serialDropdownSettings={
        //   idField: 'Value',
        //   textField: 'Text',
        //   singleSelection: true,
        //   selectAllText: 'Select All',
        //   unSelectAllText: 'UnSelect All',
        //   allowSearchFilter: true,
        //   closeDropDownOnSelection: true
        // };
        this.customerDropdownSettings = {
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
        this.FromWarehouseDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.ToWarehouseDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.serialDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    TransferOrderFormComponent.prototype.getErrorMessage = function (formElement) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('servicePicked'),
        __metadata("design:type", Object)
    ], TransferOrderFormComponent.prototype, "servicePicked", void 0);
    TransferOrderFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-transfer-order-form",
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/transfer-order/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/transfer-order-form.component.scss */ "./src/app/layout/content/transfer-order/styles/transfer-order-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_4__["ExporterService"], _services_transfer_order_service__WEBPACK_IMPORTED_MODULE_6__["TransferOrderService"], src_app_helpers_services_environment_url_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentUrlService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], TransferOrderFormComponent);
    return TransferOrderFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/transfer-order/components/transfer-order-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/content/transfer-order/components/transfer-order-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TransferOrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferOrderListComponent", function() { return TransferOrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var src_app_helpers_services_environment_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/services/environment-url.service */ "./src/app/helpers/services/environment-url.service.ts");
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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






var TransferOrderListComponent = /** @class */ (function (_super) {
    __extends(TransferOrderListComponent, _super);
    function TransferOrderListComponent(injector, activeRoute, exporterService, envUrl, http) {
        var _this = _super.call(this, injector) || this;
        _this.activeRoute = activeRoute;
        _this.exporterService = exporterService;
        _this.envUrl = envUrl;
        _this.http = http;
        return _this;
    }
    TransferOrderListComponent.prototype.ngOnInit = function () {
        // this.addFormValidations();
        // this.dropdownSettings();
        // this.getCustomerKeyPair();
    };
    TransferOrderListComponent.prototype.redirectToCreateTransferOrder = function () {
        this.router.navigate([this.routesList.TRANSFER_ORDER_CREATE]);
    };
    TransferOrderListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-transfer-order-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/transfer-order/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/transfer-order-form.component.scss */ "./src/app/layout/content/transfer-order/styles/transfer-order-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_4__["ExporterService"], src_app_helpers_services_environment_url_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentUrlService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], TransferOrderListComponent);
    return TransferOrderListComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/transfer-order/services/transfer-order.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/content/transfer-order/services/transfer-order.service.ts ***!
  \**********************************************************************************/
/*! exports provided: TransferOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferOrderService", function() { return TransferOrderService; });
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


var TransferOrderService = /** @class */ (function (_super) {
    __extends(TransferOrderService, _super);
    function TransferOrderService(injector) {
        return _super.call(this, injector) || this;
    }
    TransferOrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TransferOrderService);
    return TransferOrderService;
}(src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]));



/***/ }),

/***/ "./src/app/layout/content/transfer-order/styles/transfer-order-form.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/content/transfer-order/styles/transfer-order-form.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/content/transfer-order/templates/form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/content/transfer-order/templates/form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n    tr.border_bottom td {\r\n    border-bottom: 1px solid red;\r\n  }\r\n  </style>\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      TRANSFER ORDER \r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li><a routerLink=\"[this.routesList.TRANSFER_ORDER_LISTING]\">Transfer Orders</a></li>\r\n      <li class=\"active\">Create</li>\r\n    </ol>\r\n  </section>\r\n  <section class=\"content\">\r\n      <div col-md-12>\r\n        <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createTransferOrder(formGroup.value)\">\r\n          <div class=\"box box-primary\">\r\n            <div class=\"box-header with-border\">\r\n              <div class=\"form-group  pull-right\">\r\n                  <button type=\"button\" (click)=\"redirectToTransferOrderList()\" class=\"btn-wms\">Transfer Order Listing</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n              <div class=\"col-md-12\">\r\n              \r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>Warehouse From</label>\r\n                      <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"FromWarehouseKeyPair\"\r\n                        [settings]=\"FromWarehouseDropdownSettings\" (onDeSelect)=\"onDeSelectFromWarehouse('selectedFromWarehouse')\"\r\n                        formControlName=\"FromWarehouseId\" \r\n                        (onSelect)=\"onSelectFromWarehouse($event,'selectedFromWarehouse')\">\r\n                      </ng-multiselect-dropdown>\r\n                      <span class=\"help-block\" *ngIf=\"!this.selectedFromWarehouse || !this.selectedFromWarehouse['Id']\">\r\n                        Required\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Warehouse To</label>\r\n                    <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"ToWarehouseKeyPair\"\r\n                      [settings]=\"ToWarehouseDropdownSettings\" (onDeSelect)=\"onDeSelectToWarehouse('selectedToWarehouse')\"\r\n                      formControlName=\"ToWarehouseId\" \r\n                      (onSelect)=\"onSelectToWarehouse($event,'selectedToWarehouse')\">\r\n                    </ng-multiselect-dropdown>\r\n                    <span class=\"help-block\" *ngIf=\"!this.selectedToWarehouse || !this.selectedToWarehouse['Id']\">\r\n                      Required\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>Order NO</label>\r\n                      <input type=\"text\" formControlName=\"TransferOrderNo\"  class=\"form-control\" placeholder=\"Enter Order no\">\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.TransferOrderNo.invalid\">\r\n                        {{getErrorMessage('TransferOrderNo')}}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n               \r\n               \r\n              </div>\r\n  \r\n              <div class=\"col-md-12\">\r\n              \r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>Order Date</label>\r\n                      <input type=\"date\" formControlName=\"OrderDate\" class=\"form-control\" placeholder=\"Select OrderDate\">\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.OrderDate.invalid\">\r\n                        {{getErrorMessage('OrderDate')}}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n               \r\n                <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                    <label>Loading Date</label>\r\n                    <input type=\"date\" formControlName=\"LoadingDate\" class=\"form-control\" placeholder=\"Select Loading Date\">\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.LoadingDate.invalid\">\r\n                      {{getErrorMessage('LoadingDate')}}\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                      <label>Pickup Method</label>\r\n                      <select class=\"form-control\" formControlName=\"PickupMethod\" (change)=\"PickupMethodChange()\">\r\n                        <option *ngFor=\"let c of constantList.PICKUP_METHODS\" [ngValue]=\"c.value\">{{ c.name }}</option>\r\n                      </select>\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.PickupMethod.invalid\">\r\n                        {{getErrorMessage('PickupMethod')}}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                \r\n              \r\n  \r\n              </div>\r\n  <div class=\"col-md-12\"> \r\n    <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n          <label>Customer</label>\r\n          <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\" [settings]=\"customerDropdownSettings\"\r\n            (onSelect)=\"customerChange($event)\">\r\n          </ng-multiselect-dropdown>\r\n          <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n            It is required\r\n          </span>\r\n        </div>\r\n   \r\n  </div>\r\n  </div>\r\n            \r\n  \r\n            </div>\r\n  \r\n            <div class=\"box box-primary\">\r\n                <div class=\"box-header with-border\">\r\n                  <div class=\"form-group\">\r\n                      <h3 class=\"box-title detail-title\">SKU detail</h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"box-body\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"form-group\">\r\n                                <label>SKU</label>\r\n                                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"itemKeyPair\"\r\n                                  [settings]=\"itemDropdownSettings\"\r\n                                   formControlName=\"ItemId\"\r\n                                   (onDeSelect)=\"itemDeSelect()\"\r\n                                  (onSelect)=\"itemChange($event)\">\r\n                                </ng-multiselect-dropdown>\r\n                              </div>\r\n                        </div>\r\n                        <div class=\"col-md-9\" [hidden]=\"!hideshow\">\r\n                          <div class=\"form-group\">\r\n                              <label>SN#</label>\r\n                              <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"SerialKeyPair\"\r\n                                [settings]=\"serialDropdownSettings\"\r\n                                 formControlName=\"SNno\"\r\n                                 (onDeSelect)=\"itemDeSelect()\"\r\n                                (onSelect)=\"serialChange($event)\">\r\n                              </ng-multiselect-dropdown>\r\n                            </div>\r\n                      </div>\r\n  \r\n                     \r\n                      </div>\r\n                      <div class=\"col-md-12\" [hidden]=\"!hideshow\">\r\n                        <div class=\"col-md-2\">\r\n                          <label>GatePass</label>\r\n                         <p>{{shipmentNoteChildRow.GatePass}}</p>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                          <label>ServiceRequest</label>\r\n                          <p>{{shipmentNoteChildRow.ServiceRequest}}</p>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                          <label>RMA</label>\r\n                          <p>{{shipmentNoteChildRow.RMA}}</p>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                          <label>RecievedFrom</label>\r\n                          <p>{{shipmentNoteChildRow.RecievedFrom}}</p>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                          <label>Consignment</label>\r\n                          <p>{{shipmentNoteChildRow.ConsignmentNo}}</p>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                          <label>ICare</label>\r\n                          <p>{{shipmentNoteChildRow.ICare}}</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-12\" [hidden]=\"!hideshow\">\r\n                        <div class=\"col-md-2\">\r\n                          <label>Batch</label>\r\n                         <p>{{shipmentNoteChildRow.Batch}}</p>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                          <label>Status</label>\r\n                          <p>{{shipmentNoteChildRow.Status}}</p>\r\n                        </div>\r\n                       \r\n                        \r\n                      </div>\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"col-md-2\">\r\n                          <div class=\"form-group\">\r\n                              <label>Quantity</label>\r\n                           <input type=\"number\" formControlName=\"QtyToAdd\" (blur)=\"quantityChange($event)\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                          <div class=\"form-group\">\r\n                              <label>Dest.Address</label>\r\n                           <input type=\"text\" formControlName=\"DestinationAddress\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                          <div class=\"form-group\">\r\n                              <label>ICareRef</label>\r\n                           <input type=\"text\" formControlName=\"ICareRef\"  class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                          <div class=\"form-group\">\r\n                              <label>SLA Mode</label>\r\n                           <input type=\"text\" formControlName=\"SlaMode\"  class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                          <div class=\"form-group shipment-item-add\">\r\n                            <button type=\"button\" id=\"add\" class=\"btn btn-sm btn-wms\" (click)=\"addItemIntoItemPostList()\">\r\n                              Add SKU\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-12\">\r\n                          <div class=\"row\">\r\n                              <div class=\"col-sm-12 table-responsive\">\r\n                                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                                  <thead>\r\n                                    <tr role=\"row\">\r\n                                      <th>\r\n                                        System Id\r\n                                      </th>\r\n                                      <th>\r\n                                        SKU Name\r\n                                      </th>\r\n                                      <th>\r\n                                        Unit\r\n                                      </th>\r\n                                      <th>\r\n                                        Quantity\r\n                                      </th>\r\n                                      <th>SNno</th>\r\n                                      <th>Dest.Address</th>\r\n                                      <th>ICareRef</th>\r\n                                      <th>SlaMode</th>\r\n                                      <th>\r\n                                        Remarks / Instructions\r\n                                      </th>\r\n                                      <th>\r\n                                        Action\r\n                                      </th>\r\n                                    </tr>\r\n                                  </thead>\r\n                                  <tbody>\r\n                                    <tr role=\"row\" *ngFor=\"let item of itemListToPost\"  [ngClass]=\"{ 'border_bottom': item.ItemId==='0' }\">\r\n                                      <td>{{item.ItemId}}</td>\r\n                                      <td>{{item.Name}}</td>\r\n                                      <td>{{item.Unit}}</td>\r\n                                      <td>{{item.Quantity}}</td>\r\n  \r\n                                      <td>{{item.SNno}}</td>\r\n                                      <td>{{item.DestinationAddress}}</td>\r\n                                      <td>{{item.ICareRef}}</td>\r\n                                      <td>{{item.SlaMode}}</td>\r\n  \r\n  \r\n                                      <td><input type=\"text\" value=\"{{item.RelOrd}}\" class=\"form-control\" (blur)=\"addItemRelOrd($event,item.ItemId)\"></td>\r\n                                      <td>\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-danger\"\r\n                                          (click)=\"deleteFromitemListToPost(item)\"><i class=\"fa fa-trash\"></i></button>\r\n                                      </td> \r\n                                    </tr>\r\n                                  </tbody>  \r\n                                </table>\r\n                              </div>\r\n                            </div>\r\n                      </div>\r\n                     \r\n                </div>\r\n              </div>\r\n  \r\n            <div class=\"box-footer\">\r\n              <div class=\"col-md-2\">\r\n                <button type=\"button\" class=\"btn-genx\" (click)=\"exportServiceAsExcel()\"> Export Format</button>\r\n              </div>\r\n             <div class=\"col-md-2\">\r\n              <input  type=\"file\" id=\"servicePicked\" #servicePicked \r\n              (click)=\"message=''\"\r\n              (change)=\"onServicePicked(servicePicked)\">\r\n             </div>\r\n                <button type=\"submit\" [disabled]=\"formGroup.invalid || itemListToPost.length <=0 || BTN===true\" class=\"btn btn-success pull-right\">Add</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </section>\r\n  "

/***/ }),

/***/ "./src/app/layout/content/transfer-order/templates/list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/content/transfer-order/templates/list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n      TRANSFER ORDER LISTING\r\n      <small>\r\n        <button class=\"btn-wms\" (click)=\"redirectToCreateTransferOrder()\"><i class=\"fa fa-plus\"></i> New</button>\r\n      </small>\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li><a routerLink=\"[this.routesList.PICKUP_ORDER_LISTING]\">Customer Order</a></li>\r\n      <li class=\"active\">Listing</li>\r\n    </ol>\r\n  </section>\r\n  \r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header\">\r\n            <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate >\r\n  \r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Customer</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                    [settings]=\"customerDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedCustomer')\"\r\n                    formControlName=\"CustomerId\" (onSelect)=\"customerChange($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                    Required\r\n                  </span>\r\n                </div>\r\n              </div> \r\n              </form>       \r\n            </div>\r\n            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 table-responsive\">\r\n                  <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th>\r\n                          Customer\r\n                        </th>\r\n                        <th>\r\n                          Warehouse\r\n                        </th>\r\n                        <th>\r\n                          ContactPerson\r\n                        </th>\r\n                        \r\n                        <th>\r\n                          Waybill/DN\r\n                        </th>\r\n                        <th>\r\n                          Customer Order No\r\n                        </th> \r\n                        <th>\r\n                         PickUp Method\r\n                        </th>\r\n                        <th>\r\n                          Order Date\r\n                        </th>\r\n                        <th>\r\n                          Loaded Date\r\n                        </th>\r\n  \r\n                        <!-- <th>\r\n                          PCR No\r\n                        </th>\r\n                        <th>\r\n                          Plant\r\n                        </th> -->\r\n                        <th>\r\n                          Address\r\n                        </th>\r\n                        <th>\r\n                          Action\r\n                        </th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let pickupOrder of pickupOrderList\">\r\n                        <td>{{pickupOrder.Name}}</td>\r\n                        <td>{{pickupOrder.OriginWarehouse}}</td>\r\n                        <td>{{pickupOrder.ContactPerson}}</td>\r\n                        <!-- <td>{{pickupOrder.Consignee}}</td> -->\r\n                        <td>{{pickupOrder.waybill}}</td>\r\n                        <td>{{pickupOrder.CustomerOrderNo}}</td>\r\n                        <td>{{pickupOrder.Method}}</td>\r\n                        <td>{{pickupOrder.OrderDate | date}}</td>\r\n                        <td>{{pickupOrder.LoadingDate | date}}</td>\r\n                        <!-- <td>{{pickupOrder.PCRNo}}</td>\r\n                        <td>{{pickupOrder.Plant}}</td> -->\r\n                        <td>{{pickupOrder.Address}}</td>\r\n                          <td>\r\n                            <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"Detail(pickupOrder.PickupOrderId)\"><i\r\n                              class=\"fa fa-info\"></i></button>\r\n                            <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"Edit(pickupOrder.PickupOrderId)\"><i\r\n                                class=\"fa fa-edit\"></i></button>\r\n                          </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n       \r\n            </div>\r\n          </div>\r\n          <!-- /.box-body -->\r\n        </div>\r\n        <!-- /.box -->\r\n      </div>\r\n      <!-- /.col -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>"

/***/ }),

/***/ "./src/app/layout/content/transfer-order/transfer-order.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/content/transfer-order/transfer-order.module.ts ***!
  \************************************************************************/
/*! exports provided: TransferOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferOrderModule", function() { return TransferOrderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
/* harmony import */ var _components_transfer_order_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/transfer-order-form.component */ "./src/app/layout/content/transfer-order/components/transfer-order-form.component.ts");
/* harmony import */ var _components_transfer_order_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/transfer-order-list.component */ "./src/app/layout/content/transfer-order/components/transfer-order-list.component.ts");
/* harmony import */ var _services_transfer_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/transfer-order.service */ "./src/app/layout/content/transfer-order/services/transfer-order.service.ts");
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
                component: _components_transfer_order_list_component__WEBPACK_IMPORTED_MODULE_8__["TransferOrderListComponent"],
            },
            {
                path: "create",
                component: _components_transfer_order_form_component__WEBPACK_IMPORTED_MODULE_7__["TransferOrderFormComponent"],
            },
            // {
            //   path: "edit/:Id",
            //   component: PickupOrderEditComponent,
            // },
            // {
            //   path: "detail/:Id",
            //   component: PickupOrderDetailComponent,
            // },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var TransferOrderModule = /** @class */ (function () {
    function TransferOrderModule() {
    }
    TransferOrderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_5__["UiSwitchModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["NgMultiSelectDropDownModule"]
            ],
            declarations: [
                _components_transfer_order_list_component__WEBPACK_IMPORTED_MODULE_8__["TransferOrderListComponent"], _components_transfer_order_form_component__WEBPACK_IMPORTED_MODULE_7__["TransferOrderFormComponent"]
            ],
            providers: [
                _services_transfer_order_service__WEBPACK_IMPORTED_MODULE_9__["TransferOrderService"],
                src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_6__["ExporterService"]
            ],
            entryComponents: []
        })
    ], TransferOrderModule);
    return TransferOrderModule;
}());



/***/ })

}]);
//# sourceMappingURL=content-transfer-order-transfer-order-module.js.map