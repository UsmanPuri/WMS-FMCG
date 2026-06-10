(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-opening-stock-opening-stock-module"],{

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

/***/ "./src/app/layout/content/opening-stock/components/opening-stock.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/content/opening-stock/components/opening-stock.ts ***!
  \**************************************************************************/
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
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var opening_stock_service_1 = __webpack_require__(/*! ../services/opening-stock.service */ "./src/app/layout/content/opening-stock/services/opening-stock.service.ts");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var environment_url_service_1 = __webpack_require__(/*! src/app/helpers/services/environment-url.service */ "./src/app/helpers/services/environment-url.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var ngb_modal_1 = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var XLSX = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
var file_saver_1 = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
var jspdf_1 = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
var jspdf_autotable_1 = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
var OpeningStockComponent = /** @class */ (function (_super) {
    __extends(OpeningStockComponent, _super);
    function OpeningStockComponent(injector, http, _openingstockService, exporterService, envUrl, modalService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this.http = http;
        _this._openingstockService = _openingstockService;
        _this.exporterService = exporterService;
        _this.envUrl = envUrl;
        _this.modalService = modalService;
        _this.ngxService = ngxService;
        _this.palletDropdownSettings = {};
        _this.palletList = [];
        _this.palletCustomer = {};
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.hideShowList = [];
        _this.warehouseDropdownSettings = {};
        _this.selectedWarehouse = { Id: null, Name: null };
        _this.BTN = false;
        _this.godownDropdownSettings = {};
        _this.selectedGodown = { Id: null, Name: null };
        _this.itemDropdownSettings = {};
        _this.selectedItem = {};
        _this.itemInformationByCustomer = [];
        _this.shelfListForShipment = [];
        _this.shipmentListToPost = [];
        _this.selectedPallet = {};
        return _this;
    }
    ;
    OpeningStockComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getPalletKeyPair();
        this.getCustomerKeyPair();
        this.getWarehouseKeyPair();
        for (var i = 0; i < 10; i++) {
            this.hideShowList.push({ status: true });
        }
        this.hideShowList[0].status = false;
        this.hideShowList[1].status = false;
        this.hideShowList[2].status = false;
        this.hideShowList[3].status = false;
        this.hideShowList[4].status = false;
        this.hideShowList[5].status = false;
        this.hideShowList[6].status = false;
        this.hideShowList[7].status = false;
        this.hideShowList[8].status = false;
        this.hideShowList[9].status = false;
    };
    //Excel Conversion
    OpeningStockComponent.prototype.exportExcel = function (fileName, table_id, fileHeader) {
        var element = document.getElementById(table_id);
        var ws = XLSX.utils.table_to_sheet(element);
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, fileHeader);
        XLSX.writeFile(wb, fileName);
    };
    //PDF Conversion
    OpeningStockComponent.prototype.createPdf = function (my_file, table_id) {
        var doc = new jspdf_1.default({ orientation: "landscape" });
        jspdf_autotable_1.default(doc, { html: table_id });
        doc.save(my_file);
    };
    // CSV Converterd
    OpeningStockComponent.prototype.downloadCSV = function (data, filename) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        file_saver_1.saveAs(blob, filename);
    };
    OpeningStockComponent.prototype.HideShow = function (index) {
        var i = Number(index);
        if (this.hideShowList[i].status) {
            this.hideShowList[i].status = false;
        }
        else {
            this.hideShowList[i].status = true;
        }
    };
    /**
  * The following method is used to add the form validations
  */
    OpeningStockComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("CustomerId", []);
        this.addFormControlWithValidations("WarehouseId", []);
        this.addFormControlWithValidations("ItemId", []);
        this.addFormControlWithValidations("ItemName", []);
        this.addFormControlWithValidations("ShipmentNoteNo", []);
        this.addFormControlWithValidations("DeliveryNo", []);
        this.addFormControlWithValidations("GodownId", []);
        this.addFormControlWithValidations("CargoStatus", []);
        this.addFormControlWithValidations("Remarks", []);
        this.addFormControlWithValidations("ASNNo", []);
        this.addFormControlWithValidations("ASNDate", []);
        this.addFormControlWithValidations("DriverName", []);
        this.addFormControlWithValidations("VehicleNo", []);
        this.addFormControlWithValidations("VehicleNo", []);
    };
    OpeningStockComponent.prototype.getPalletKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.PALLET_LIST;
        this.ngxService.start();
        this._openingstockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            var tempPalletDropdown = [];
            _this.palletList = res;
            _this.palletList.forEach(function (element) {
                tempPalletDropdown.push({
                    Value: element.PalletId,
                    Text: element.Title + " " + element.Size
                });
            });
            _this.palletKeyPair = tempPalletDropdown;
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    OpeningStockComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._openingstockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    OpeningStockComponent.prototype.getItemInformationKeyPair = function (customerId) {
        var _this = this;
        var apiAddress = this.apiConstant.ITEM_GetItemInformationByCustomerId + ("" + customerId);
        this._openingstockService.getData(apiAddress)
            .subscribe(function (res) {
            _this.itemInformationByCustomer = res;
            var itemTemDropdown = [];
            _this.itemInformationByCustomer.forEach(function (element) {
                itemTemDropdown.push({
                    Value: element.itemInformation.ItemInformationId,
                    Text: element.ItemBrand.Name + " | " + element.itemInformation.Name
                });
            });
            _this.itemKeyPair = itemTemDropdown;
            console.log(res);
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    OpeningStockComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId()
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this._openingstockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.warehouseKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    OpeningStockComponent.prototype.getGodownKeyPair = function (warehouseId) {
        var _this = this;
        var companyBusinessUnitInfo = {
            WarehouseId: warehouseId
        };
        var apiAddress = this.apiConstant.GODOWN_GET_BY_WAREHOUSE_ID;
        this._openingstockService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.godownKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    OpeningStockComponent.prototype.onSelect = function (item, dropDownName) {
        this[dropDownName] = {
            Id: item.Value,
            Name: item.Text
        };
        if (dropDownName === 'selectedCustomer') {
            this.itemKeyPair = [];
            this.getItemInformationKeyPair(item.Value);
        }
        if (dropDownName === 'selectedWarehouse') {
            this.formGroup.get("GodownId").setValue('');
            this.godownKeyPair = [];
            this.getGodownKeyPair(item.Value);
        }
        if (dropDownName === 'selectedItem') {
            var itemName = this.itemInformationByCustomer
                .filter(function (x) { return x.itemInformation.ItemInformationId === item.Value; })[0].itemInformation.Name;
            this.formGroup.get("ItemName").setValue(itemName);
        }
    };
    OpeningStockComponent.prototype.onDeSelect = function (dropDownName) {
        this[dropDownName] = {};
    };
    OpeningStockComponent.prototype.addItemLocation = function () {
        if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
            this.showToastrWarning("Select Customer first");
            return false;
        }
        if (!this.selectedWarehouse || !this.selectedWarehouse["Id"]) {
            this.showToastrWarning("Select Warehouse first");
            return false;
        }
        if (!this.selectedItem || !this.selectedItem["Id"]) {
            this.showToastrWarning("Select Item first");
            return false;
        }
        this.getShelfForShipment();
    };
    OpeningStockComponent.prototype.getShelfForShipment = function () {
        var _this = this;
        var obj = {
            WarehouseId: this.selectedWarehouse["Id"],
            ItemInformationId: this.selectedItem["Id"],
            ItemCBN: this.getItemCBN(this.selectedItem["Id"]),
            CustomerId: this.selectedCustomer["Id"]
        };
        var apiAddress = this.apiConstant.SHIPMENT_NOTE_SearchShelfsForShipment;
        this._openingstockService.getKeyPair(apiAddress, obj)
            .subscribe(function (res) {
            debugger;
            console.log(res);
            _this.shelfListForShipment = res;
            _this.shelfListForShipment.forEach(function (element) {
                element.Location = element.godownRow.Alias + element.godownRack.Alias + element.godownShelf.Alias,
                    // element.Location= element.godown.Abbreviation+ element.godownRow.Alias+element.godownRack.Alias+element.godownShelf.Alias,
                    element.Quantity = _this.getQuantityIfAlreadyAddedInLocation(_this.selectedItem["Id"], element.Location),
                    element.vacantQuantity = (Number((element.shelfVacantCapicity - _this.getCalculatedCBN(element.Location))) / Number(_this.getItemCBN(_this.selectedItem["Id"]))),
                    element.NoOfPallets = 0;
                element.NoOfBoxes = 0;
            });
            debugger;
            _this.shelfListForShipment = _this.shelfListForShipment
                .filter(function (x) { return x.vacantQuantity >= 1; });
            _this.openItemLocationModal();
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    OpeningStockComponent.prototype.getQuantityIfAlreadyAddedInLocation = function (itemId, location) {
        var qty = 0;
        var model = this.shipmentListToPost.filter(function (x) { return x.ItemInformationId === itemId && x.Location === location; });
        if (!model && model.length <= 0) {
            return 0;
        }
        else {
            model.forEach(function (element) {
                qty = (qty + Number(element.Quantity));
            });
            return qty;
        }
    };
    OpeningStockComponent.prototype.getItemInformationObject = function (itemInformationId) {
        return this.itemInformationByCustomer.filter(function (x) { return x.itemInformation.ItemInformationId == itemInformationId; })[0];
    };
    OpeningStockComponent.prototype.getItemCBN = function (itemId) {
        var model = this.itemInformationByCustomer
            .filter(function (x) { return x.itemInformation.ItemInformationId == itemId; })[0];
        return (model.itemInformation.Width * model.itemInformation.Height * model.itemInformation.Length);
    };
    OpeningStockComponent.prototype.getCalculatedCBN = function (location) {
        var _this = this;
        var usedCBMToSave = 0;
        var model = this.shipmentListToPost.filter(function (x) { return x.Location === location && x.ItemInformationId != _this.selectedItem["Id"]; });
        if (model && model.length > 0) {
            model.forEach(function (element) {
                var usedItemForCBN = _this.getItemCBN(element.ItemInformationId);
                usedCBMToSave = usedCBMToSave + (usedItemForCBN * element.Quantity);
            });
        }
        return usedCBMToSave;
    };
    OpeningStockComponent.prototype.openItemLocationModal = function () {
        this.modalRef = this.modalService.open(this.modalItemLocation, {
            size: "lg",
            modalClass: '',
            hideCloseButton: true,
            centered: false,
            backdrop: true,
            animation: true,
            keyboard: false,
            closeOnOutsideClick: false,
            backdropClass: "modal-backdrop"
        });
    };
    OpeningStockComponent.prototype.cancelItemLocationModal = function () {
        this.modalRef.close();
    };
    OpeningStockComponent.prototype.palletSelect = function (event, location, selectedPalletId) {
        if (event) {
            this.selectedPallet = {
                Id: event.Value,
                Name: event.Text
            };
        }
        var selectedPltId = event ? event.Value : selectedPalletId;
        var model = this.shelfListForShipment.filter(function (x) { return x.Location === location; })[0];
        if (model) {
            if (model.Quantity == '' || model.Quantity <= 0) {
                this.showToastrWarning('Select Quantity please.');
            }
            else {
                var noOfBoxes = this.getNoOfBoxesPerPallet(this.selectedItem["Id"], location, selectedPltId);
                model.NoOfBoxes = noOfBoxes;
                var noOfPallets = model.Quantity / noOfBoxes;
                // noOfPallets = noOfPallets < 1 ? 1 : (Number.isInteger(noOfPallets) ? noOfPallets : Number((noOfPallets.toString().split('.')[0]+1 )));
                noOfPallets = noOfPallets < 1 ? 1 : (Number.isInteger(noOfPallets) ? noOfPallets : Number((noOfPallets.toString().split('.')[0])) + 1);
                model.NoOfPallets = noOfPallets;
            }
        }
    };
    OpeningStockComponent.prototype.palletDeSelect = function (location) {
        this.selectedPallet = {};
        var model = this.shelfListForShipment.filter(function (x) { return x.Location === location; })[0];
        model.NoOfBoxes = 0;
    };
    OpeningStockComponent.prototype.getNoOfBoxesPerPallet = function (itemId, location, palletId) {
        var itemCBM = this.getItemCBN(itemId);
        var shelfObjFromList = this.shelfListForShipment.filter(function (x) { return x.Location === location; })[0];
        var shelfObj = shelfObjFromList['godownShelf'];
        var palletObj = this.palletList.filter(function (x) { return x.PalletId == palletId; })[0];
        if (!itemCBM || !shelfObj || !palletObj) {
            return null;
        }
        else {
            var palletCBM = shelfObj.Height * palletObj.Width * palletObj.Length;
            return palletCBM / itemCBM;
        }
    };
    OpeningStockComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    OpeningStockComponent.prototype.dropdownSettings = function () {
        this.customerDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.godownDropdownSettings = {
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
        this.warehouseDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.palletDropdownSettings = {
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
    OpeningStockComponent.prototype.getErrorMessage = function (formElement) {
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
    OpeningStockComponent.prototype.redirectToShipmentNoteList = function () {
        this.router.navigate([this.routesList.SHIPMENT_NOTE_LISTING]);
    };
    OpeningStockComponent.prototype.QuantityChange = function (event, shelfVacantCapicity, location) {
        var ItemCbm = this.getItemCBN(this.selectedItem["Id"]);
        if (!Number(event.target.value) || event.target.value <= 0) {
            event.target.value = '';
            this.shelfListForShipment.filter(function (x) { return x.Location === location; })[0].Quantity = event.target.value;
        }
        else if (Number(event.target.value) > shelfVacantCapicity) {
            this.showToastrWarning('Maximum Quantity can be ' + shelfVacantCapicity);
            event.target.value = '';
            this.shelfListForShipment.filter(function (x) { return x.Location === location; })[0].Quantity = event.target.value;
        }
        else {
            this.shelfListForShipment.filter(function (x) { return x.Location === location; })[0].Quantity = event.target.value;
            if (this.selectedPallet && this.selectedPallet["Id"]) {
                this.palletSelect(null, location, this.selectedPallet["Id"]);
            }
        }
    };
    OpeningStockComponent.prototype.addShipmentItem = function () {
        var _this = this;
        debugger;
        var hasValidQty = false;
        var hasValidQtyPltSelection = true; // checks for both selection on each row.
        this.shelfListForShipment.forEach(function (element) {
            if (((element.Quantity != 0 && element.Quantity != '') && (element.NoOfBoxes == '' || element.NoOfBoxes == 0))
                || ((element.Quantity == 0 && element.Quantity == '') && (element.NoOfBoxes != '' || element.NoOfBoxes != 0))) {
                hasValidQtyPltSelection = false;
                return false;
            }
        });
        if (!hasValidQtyPltSelection) {
            this.showToastrWarning("Invalid selection of Quantity and Pallet");
            return;
        }
        this.shelfListForShipment.forEach(function (element) {
            if ((element.Quantity != 0 && element.Quantity != '')) {
                hasValidQty = true;
                return false;
            }
        });
        if (!hasValidQty) {
            this.showToastrWarning("Add at lease one item quantity.");
        }
        else {
            this.shelfListForShipment.filter(function (x) { return x.Quantity != 0 && x.Quantity != ''; }).forEach(function (element) {
                _this.deleteFromShipmentList(element.Location, _this.selectedItem["Id"]);
                var addedNoOfPallets = Number(element.NoOfPallets);
                var qty = Number(element.Quantity);
                var noOfBox = Number(element.NoOfBoxes);
                if (addedNoOfPallets == Infinity) {
                    addedNoOfPallets = 1;
                }
                if (addedNoOfPallets > 1) {
                    for (var i = 0; i < addedNoOfPallets; i++) {
                        var x = (qty - noOfBox);
                        var qtyPerBox = (qty >= noOfBox) ? noOfBox : qty;
                        _this.shipmentListToPost.push({
                            Name: _this.selectedItem['Name'],
                            ItemInformationId: _this.selectedItem["Id"],
                            // PalletNo: i + 1,
                            PalletNo: _this.getPalletNoToSet(_this.selectedItem["Id"]),
                            Batch: '',
                            Status: '',
                            Quantity: qtyPerBox,
                            NoOfBoxes: noOfBox,
                            Location: element.Location,
                            GodownId: element.godown.GodwomId,
                            GodownShelfId: element.godownShelf.GodownShelfId,
                            ExpiryDate: '',
                            MfgDate: '',
                            Price: _this.getItemInformationObject(_this.selectedItem["Id"]).Price,
                        });
                        qty = (qty - noOfBox);
                    }
                }
                else {
                    _this.shipmentListToPost.push({
                        Name: _this.selectedItem['Name'],
                        ItemInformationId: _this.selectedItem["Id"],
                        // PalletNo: (addedNoOfPallets < 1)? 1 : addedNoOfPallets,
                        PalletNo: _this.getPalletNoToSet(_this.selectedItem["Id"]),
                        Batch: '',
                        Status: '',
                        Quantity: element.Quantity,
                        NoOfBoxes: noOfBox,
                        Location: element.Location,
                        GodownId: element.godown.GodwomId,
                        GodownShelfId: element.godownShelf.GodownShelfId,
                        ExpiryDate: '',
                        MfgDate: '',
                        Price: _this.getItemInformationObject(_this.selectedItem["Id"]).Price,
                    });
                }
            });
            this.selectedPallet = {};
            this.selectedItem = {};
            this.formGroup.get("ItemId").setValue('');
            this.shelfListForShipment = [];
            this.modalRef.close();
        }
    };
    OpeningStockComponent.prototype.getPalletNoToSet = function (itemId) {
        var countByItem = this.shipmentListToPost.filter(function (x) { return x.ItemInformationId === itemId; }).length;
        if (countByItem == 0)
            return 1;
        else
            return (countByItem + 1);
    };
    OpeningStockComponent.prototype.deleteFromShipmentList = function (location, itemInfoId) {
        var _this = this;
        var dat = this.shipmentListToPost
            .filter(function (y) { return y.ItemInformationId === itemInfoId && y.Location === location; });
        if (dat && dat.length > 0) {
            dat.forEach(function (element) {
                _this.shipmentListToPost.splice(_this.shipmentListToPost.indexOf(element), 1);
            });
        }
    };
    OpeningStockComponent.prototype.addShipmentTextField = function (event, fieldName, location, palletNo) {
        var model = this.shipmentListToPost.filter(function (x) { return x.Location === location && x.PalletNo === palletNo; })[0];
        if (model) {
            model[fieldName] = event.target.value;
        }
        if (fieldName === 'Status' || fieldName === 'Batch') {
            this.shipmentListToPost.filter(function (x) { return x.Location === location; }).forEach(function (element) {
                element[fieldName] = event.target.value;
            });
        }
    };
    OpeningStockComponent.prototype.createShipmentNote = function (formValue) {
        if (this.formGroup.valid) {
            if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
                this.showToastrWarning("Select Customer please.");
                return false;
            }
            else if (!this.selectedWarehouse || !this.selectedWarehouse["Id"]) {
                this.showToastrWarning("Select Warehouse please.");
                return false;
            }
            this.executeShipmentNoteCreation(formValue);
        }
    };
    OpeningStockComponent.prototype.exportServiceAsExcel = function () {
        //debugger
        this.shipmentListToPost.push({
            ItemInformationId: '',
            SKU: '',
            Name: '',
            Batch: '',
            Status: '',
            Quantity: '',
            NoOfBoxes: '',
            PRno: '',
            SNno: '',
            ExpiryDate: '',
            MfgDate: '',
            Price: '',
            TotalCBM: '',
            GatePass: '',
            ServiceRequest: '',
            RMA: '',
            RecievedFrom: '',
            ConsignmentNo: '',
            ICare: '',
            BusinessType: '',
            HandlerName: '',
            InboundPool: '',
            Network: '',
            PackingListNo: '',
            ReceivedStation: '',
            ContractNo: '',
            DeliveryType: ''
        });
        this.exporterService.exportToExcel(this.shipmentListToPost, 'OpeningStock');
        this.shipmentListToPost = [];
    };
    OpeningStockComponent.prototype.onServicePicked = function () {
        var _this = this;
        var formData = new FormData();
        var errorList = "";
        //formData.append('ContractId', this.selectedContract.toString());
        formData.append('CustomerId', this.selectedCustomer.toString());
        formData.append('file', this.servicePicked.nativeElement.files[0]);
        if (formData) {
            this.uploadFile(formData)
                .subscribe(function (msg) {
                _this.shipmentListToPost = msg;
                _this.shipmentListToPost.forEach(function (element) {
                    if (element.ItemInformationId === "0") {
                        _this.BTN = true;
                    }
                    else {
                        var obj = {
                            SnNo: element.SNno,
                            CompanyId: _this.localStorageService.getCompanyId(),
                            BusinessUnitId: _this.localStorageService.getBusinessUnitId()
                        };
                        var apiUrl = _this.apiConstant.CHECK_DUPLICATE_SN;
                        _this._openingstockService.create(apiUrl, obj)
                            .subscribe(function (res) {
                            var isExist = res;
                            if (isExist) {
                                // this.showToastrError("SN# Already Available.");
                                // this.formGroup.get('SNno').setValue('');
                                element.ICare == "1",
                                    errorList = errorList + "\n" + element.SNno;
                            }
                            console.log(_this.shipmentListToPost);
                            if (errorList != "") {
                                debugger;
                                _this.showToastrError("Duplicate SN Found in Import List - " + "\n" + errorList + "\n");
                                _this.BTN = true;
                            }
                        }, (function (error) {
                            _this.errorHandler.handleError(error);
                            _this.errorMessage = _this.errorHandler.errorMessage;
                        }));
                    }
                });
            });
        }
    };
    OpeningStockComponent.prototype.uploadFile = function (formData) {
        if (!formData) {
            return;
        }
        var apiUrl = this.apiConstant.FILE_UPLOAD_VENDOR;
        var url = this.envUrl.urlAddress + apiUrl;
        return this.http.post(url, formData);
    };
    OpeningStockComponent.prototype.executeShipmentNoteCreation = function (formValue) {
        var _this = this;
        var shipmentNote = {
            ShipmentNoteNo: formValue.ShipmentNoteNo,
            CustomerID: this.selectedCustomer["Id"],
            CargoStatus: formValue.CargoStatus,
            WarehouseId: this.selectedWarehouse["Id"],
            GodownId: this.selectedGodown["Id"],
            Remarks: formValue.Remarks,
            ASNNo: formValue.ASNNo,
            DeliveryNo: formValue.DeliveryNo,
            ASNDate: formValue.ASNDate,
            DriverName: formValue.DriverName,
            VehicleNo: formValue.VehicleNo,
            ShipmentNoteChilds: this.shipmentListToPost,
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiUrl = this.apiConstant.OPENING_STOCK;
        this.ngxService.start();
        this._openingstockService.create(apiUrl, shipmentNote)
            .subscribe(function (res) {
            _this.showToastrSuccess("Add Opening Stock successfully");
            // setTimeout(() => {
            //   this.redirectToShipmentNoteList();
            // }, 2000);
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    __decorate([
        core_1.ViewChild('modalItemLocation'),
        __metadata("design:type", Object)
    ], OpeningStockComponent.prototype, "modalItemLocation", void 0);
    __decorate([
        core_1.ViewChild('servicePicked'),
        __metadata("design:type", Object)
    ], OpeningStockComponent.prototype, "servicePicked", void 0);
    OpeningStockComponent = __decorate([
        core_1.Component({
            selector: "wms-opening-stock",
            template: __webpack_require__(/*! ../templates/opening-stock.html */ "./src/app/layout/content/opening-stock/templates/opening-stock.html"),
            styles: [__webpack_require__(/*! ../styles/opening.stock.scss */ "./src/app/layout/content/opening-stock/styles/opening.stock.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, http_1.HttpClient, opening_stock_service_1.OpeningStockService, excel_file_service_1.ExporterService,
            environment_url_service_1.EnvironmentUrlService, ngb_modal_1.ModalManager, ngx_ui_loader_1.NgxUiLoaderService])
    ], OpeningStockComponent);
    return OpeningStockComponent;
}(base_component_1.BaseComponent));
exports.OpeningStockComponent = OpeningStockComponent;


/***/ }),

/***/ "./src/app/layout/content/opening-stock/opening-stock.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/content/opening-stock/opening-stock.module.ts ***!
  \**********************************************************************/
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
var opening_stock_service_1 = __webpack_require__(/*! ./services/opening-stock.service */ "./src/app/layout/content/opening-stock/services/opening-stock.service.ts");
var opening_stock_1 = __webpack_require__(/*! ./components/opening-stock */ "./src/app/layout/content/opening-stock/components/opening-stock.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ng_multiselect_dropdown_1 = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
var ngb_modal_1 = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var ngx_print_1 = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
var routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: opening_stock_1.OpeningStockComponent,
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var OpeningStockModule = /** @class */ (function () {
    function OpeningStockModule() {
    }
    OpeningStockModule = __decorate([
        core_1.NgModule({
            imports: [
                ngb_modal_1.ModalModule,
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule, ngx_toggle_switch_1.UiSwitchModule,
                ng_multiselect_dropdown_1.NgMultiSelectDropDownModule,
                ngx_ui_loader_1.NgxUiLoaderModule,
                ngx_print_1.NgxPrintModule
            ],
            declarations: [
                opening_stock_1.OpeningStockComponent
            ],
            providers: [
                opening_stock_service_1.OpeningStockService, excel_file_service_1.ExporterService
            ],
            entryComponents: []
        })
    ], OpeningStockModule);
    return OpeningStockModule;
}());
exports.OpeningStockModule = OpeningStockModule;


/***/ }),

/***/ "./src/app/layout/content/opening-stock/services/opening-stock.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/content/opening-stock/services/opening-stock.service.ts ***!
  \********************************************************************************/
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
var OpeningStockService = /** @class */ (function (_super) {
    __extends(OpeningStockService, _super);
    function OpeningStockService(injector) {
        return _super.call(this, injector) || this;
    }
    OpeningStockService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], OpeningStockService);
    return OpeningStockService;
}(repository_service_1.RepositoryService));
exports.OpeningStockService = OpeningStockService;


/***/ }),

/***/ "./src/app/layout/content/opening-stock/styles/opening.stock.scss":
/*!************************************************************************!*\
  !*** ./src/app/layout/content/opening-stock/styles/opening.stock.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/content/opening-stock/templates/opening-stock.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/content/opening-stock/templates/opening-stock.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>OPENING STOCK</h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n  </ol>\r\n</section>\r\n<section class=\"content\">\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createShipmentNote(formGroup.value)\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group  pull-right\">\r\n            <!-- <button type=\"button\" (click)=\"redirectToShipmentNoteList()\" class=\"btn-wms\">Shipment Note Listing</button> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Customer</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                  [settings]=\"customerDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedCustomer')\"\r\n                  formControlName=\"CustomerId\" (onSelect)=\"onSelect($event,'selectedCustomer')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Warehouse</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair\"\r\n                  [settings]=\"warehouseDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedWarehouse')\"\r\n                  formControlName=\"WarehouseId\" \r\n                  (onSelect)=\"onSelect($event,'selectedWarehouse')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedWarehouse || !this.selectedWarehouse['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Opening Stock Date</label>\r\n                <input type=\"date\" formControlName=\"ASNDate\" class=\"form-control\" placeholder=\"Enter ASN Date\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ASNDate.invalid\">\r\n                  {{getErrorMessage('ASNDate')}}\r\n                </span>\r\n              </div>\r\n             \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group\">\r\n              <h3 class=\"box-title detail-title\">SKUs</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <!-- <label>Item</label> -->\r\n                        <ng-multiselect-dropdown [placeholder]=\"'Select One SKU'\" [data]=\"itemKeyPair\"\r\n                          [settings]=\"itemDropdownSettings\" formControlName=\"ItemId\"\r\n                           (onDeSelect)=\"onDeSelect('selectedItem')\"\r\n                          (onSelect)=\"onSelect($event,'selectedItem')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <span class=\"help-block\" *ngIf=\"!this.selectedItem || !this.selectedItem['Id']\">\r\n                          Required\r\n                        </span>\r\n                      </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group shipment-item-add\">\r\n                        <button type=\"button\" id=\"add\" class=\"btn btn-sm btn-wms\" (click)=\"addItemLocation()\">\r\n                          Add Location\r\n                        </button>\r\n                      </div>\r\n                    <!-- <div class=\"form-group\">\r\n                        <label>Godown</label>\r\n                        <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"godownKeyPair\"\r\n                          [settings]=\"godownDropdownSettings\" formControlName=\"GodownId\"\r\n                          (onDeSelect)=\"onDeSelect('selectedGodown')\" (onSelect)=\"onSelect($event,'selectedGodown')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <span class=\"help-block\" *ngIf=\"!this.selectedGodown || !this.selectedGodown['Id']\">\r\n                          Required\r\n                        </span>\r\n                      </div> -->\r\n                   \r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  \r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-sm-12 table-responsive\" id=\"myTable1\">\r\n                        <nav>\r\n                          <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 58%; \r\n                              background-color: #6c757d;\">\r\n                            <li class=\"breadcrumb-item\">\r\n                              <a (click)=\"downloadCSV(this.shipmentListToPost, 'opening-stock-list.csv')\" style=\"color: white;\">\r\n                                Download CSV</a>\r\n                            </li>\r\n                            <li class=\"breadcrumb-item\">\r\n                              <a (click)=\"exportExcel('opening-stock-list.xlsx', 'tbl', 'Opening Stock List')\" style=\"color: white;\">\r\n                                Download Excel</a>\r\n                            </li>\r\n                            <li class=\"breadcrumb-item\">\r\n                              <a (click)=\"createPdf('opening-stock-list.pdf', '#tbl')\" style=\"color: white;\">Export To PDF</a>\r\n                            </li>\r\n                            <li>\r\n                              <button\r\n                                [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                                class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                                ngxPrint printSectionId=\"myTable\">\r\n                                Print\r\n                              </button>\r\n                            </li>\r\n                            <li class=\"breadcrumb-item dropdown\">\r\n                              <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                                Column Hidden\r\n                              </a>\r\n                              <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                                  width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                                <a class=\"dropdown-item\" (click)=\"HideShow('0')\" data-column=\"0\" style=\"color: white;\">\r\n                                  System ID\r\n                                </a>\r\n                                <a class=\"dropdown-item ml-3\" (click)=\"HideShow('1')\" data-column=\"1\" style=\"color: white;\">\r\n                                  SKU Name\r\n                                </a>\r\n                                <a class=\"dropdown-item ml-3\" (click)=\"HideShow('2')\" data-column=\"1\" style=\"color: white;\">\r\n                                  Pallet No\r\n                                </a>\r\n                                <a class=\"dropdown-item ml-3\" (click)=\"HideShow('3')\" data-column=\"2\" style=\"color: white;\">\r\n                                  Batch\r\n                                </a>\r\n                                <a class=\"dropdown-item\" (click)=\"HideShow('4')\" data-column=\"3\"\r\n                                  style=\"color: white; text-align: center\">\r\n                                  Status\r\n                                </a>\r\n                                <a class=\"dropdown-item\" (click)=\"HideShow('5')\" data-column=\"0\" style=\"color: white;\">\r\n                                  Quantity\r\n                                </a>\r\n                                <a class=\"dropdown-item ml-3\" (click)=\"HideShow('6')\" data-column=\"1\" style=\"color: white;\">\r\n                                  No Of Boxes\r\n                                </a>\r\n                                <a class=\"dropdown-item ml-3\" (click)=\"HideShow('7')\" data-column=\"1\" style=\"color: white;\">\r\n                                  Location\r\n                                </a>\r\n                                <a class=\"dropdown-item ml-3\" (click)=\"HideShow('8')\" data-column=\"2\" style=\"color: white;\">\r\n                                  Mfg Date\r\n                                </a>\r\n                                <a class=\"dropdown-item\" (click)=\"HideShow('9')\" data-column=\"3\"\r\n                                  style=\"color: white; text-align: center\">\r\n                                  Expiry Date\r\n                                </a>\r\n                              </div>\r\n                            </li>\r\n                          </ol>\r\n                        </nav>\r\n                        <table class=\"table table-bordered table-hover dataTable\" role=\"grid\" id=\"tbl\">\r\n                          <thead>\r\n                            <tr role=\"row\">\r\n                              <th *ngIf=\"!hideShowList[0].status\">System ID</th>\r\n                              <th *ngIf=\"!hideShowList[1].status\">SKU Name</th>\r\n                              <th *ngIf=\"!hideShowList[2].status\">Pallet No</th>\r\n                              <th *ngIf=\"!hideShowList[3].status\">Batch</th>\r\n                              <th *ngIf=\"!hideShowList[4].status\">Status</th>\r\n                              <th *ngIf=\"!hideShowList[5].status\">Quantity</th>\r\n                              <th *ngIf=\"!hideShowList[6].status\">No Of Boxes</th>\r\n                              <th *ngIf=\"!hideShowList[7].status\">Location</th>\r\n                              <th *ngIf=\"!hideShowList[8].status\">Mfg Date</th>\r\n                              <th *ngIf=\"!hideShowList[9].status\">Expiry Date</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr role=\"row\" *ngFor=\"let shipment of shipmentListToPost\">\r\n                              <td *ngIf=\"!hideShowList[0].status\">{{shipment.ItemInformationId}}</td>\r\n                              <td *ngIf=\"!hideShowList[1].status\">{{shipment.Name}}</td>\r\n                              <td *ngIf=\"!hideShowList[2].status\">{{shipment.PalletNo}}</td>\r\n                              <td *ngIf=\"!hideShowList[3].status\"><input type=\"text\" class=\"form-control\" value=\"{{shipment.Batch}}\" (blur)=\"addShipmentTextField($event,'Batch',shipment.Location,shipment.PalletNo)\"></td>\r\n                              <td *ngIf=\"!hideShowList[4].status\"><input type=\"text\" class=\"form-control\" value=\"{{shipment.Status}}\" (blur)=\"addShipmentTextField($event,'Status',shipment.Location,shipment.PalletNo)\"></td>\r\n                              <td *ngIf=\"!hideShowList[5].status\">{{shipment.Quantity}}</td>\r\n                              <td *ngIf=\"!hideShowList[6].status\">{{shipment.NoOfBoxes}}</td>\r\n                              <td *ngIf=\"!hideShowList[7].status\">{{shipment.Location}}</td>\r\n                              <td *ngIf=\"!hideShowList[8].status\"><input type=\"date\" class=\"form-control\" (blur)=\"addShipmentTextField($event,'MfgDate',shipment.Location,shipment.PalletNo)\"></td>\r\n                              <td *ngIf=\"!hideShowList[9].status\"><input type=\"date\" class=\"form-control\" (blur)=\"addShipmentTextField($event,'ExpiryDate',shipment.Location,shipment.PalletNo)\"></td>\r\n                            \r\n                            </tr>\r\n                          </tbody>  \r\n                          <ngx-ui-loader></ngx-ui-loader>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n              </div>\r\n             \r\n        </div>\r\n        <div class=\"box-footer\">\r\n            <button type=\"submit\" [disabled]=\"formGroup.invalid || shipmentListToPost.length <=0\" class=\"btn btn-success pull-right\">Add Opening Stock</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"box-footer\">\r\n          <div class=\"col-md-2\">\r\n            <button type=\"button\" class=\"btn-genx\" (click)=\"exportServiceAsExcel()\"> Export Format</button>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <input type=\"file\" id=\"servicePicked\" #servicePicked (click)=\"message=''\" (change)=\"onServicePicked(servicePicked)\">\r\n          </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n<modal #modalItemLocation>\r\n  <modal-header>\r\n      <div class=\"box-header\">\r\n          <div class=\"form-group\">\r\n              <h3 class=\"box-title detail-title\">\r\n                {{this.selectedWarehouse.Name}}\r\n              </h3>\r\n          </div>\r\n        </div>\r\n  </modal-header>\r\n  \r\n  <modal-content>\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n              <thead>\r\n                <tr role=\"row\">\r\n                  <th>Chamber Aisle</th>\r\n                  <th>Chamber Rack</th>\r\n                  <th>Chamber Bay</th>\r\n                  <th>Location</th>\r\n                  <th>Vacant Quantity</th>\r\n                  <th>Quantity</th>\r\n                  <th class=\"pallets-dropdown\">Pallet</th>\r\n                  <th>No Of Boxes</th>\r\n                  <th>No Of Pallets</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr role=\"row\" *ngFor=\"let godwom of shelfListForShipment\">\r\n                  <td>{{godwom.godownRow.Name}} | {{godwom.godownRow.Alias}}</td>\r\n                  <td>{{godwom.godownRack.Name}} | {{godwom.godownRack.Alias}}</td>\r\n                  <td>{{godwom.godownShelf.Name}} | {{godwom.godownShelf.Alias}}</td>\r\n                  <td>{{godwom.Location}}</td>\r\n                  <td>{{godwom.vacantQuantity | number:'1.2-2'}}</td>\r\n                  <td><input (blur)=\"QuantityChange($event,godwom.vacantQuantity,godwom.Location)\" value=\"{{godwom.Quantity}}\" type=\"text\" class=\"form-control\"></td>\r\n                  <td>\r\n                    <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"palletKeyPair\" [settings]=\"palletDropdownSettings\"\r\n                        (onDeSelect)=\"palletDeSelect(godwom.Location)\"\r\n                      (onSelect)=\"palletSelect($event,godwom.Location,0)\">\r\n                    </ng-multiselect-dropdown>\r\n                  </td>\r\n                  <td>{{godwom.NoOfBoxes | number:'1.2-2'}}</td>\r\n                  <td>{{godwom.NoOfPallets}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <ngx-ui-loader></ngx-ui-loader>\r\n        </div>\r\n  </modal-content>\r\n  \r\n  <modal-footer>\r\n      <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"cancelItemLocationModal()\">Cancel</button>\r\n          <button type=\"button\" class=\"btn btn-wms\" (click)=\"addShipmentItem()\">Save</button>\r\n        </div>\r\n  </modal-footer>\r\n  </modal>"

/***/ })

}]);
//# sourceMappingURL=content-opening-stock-opening-stock-module.js.map