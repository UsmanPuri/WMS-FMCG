(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-dispatch-activity-dispatch-activity-module"],{

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

/***/ "./src/app/layout/content/dispatch-activity/components/Dispatch-Activity.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-activity/components/Dispatch-Activity.ts ***!
  \**********************************************************************************/
/*! exports provided: DispatchActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchActivityComponent", function() { return DispatchActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _service_Dispatch_Activity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/Dispatch-Activity */ "./src/app/layout/content/dispatch-activity/service/Dispatch-Activity.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_13__);
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














var DispatchActivityComponent = /** @class */ (function (_super) {
    __extends(DispatchActivityComponent, _super);
    function DispatchActivityComponent(injector, http, _DispatchActivity, fb, ngxService, modalService, chRef, chRef1) {
        var _this = _super.call(this, injector) || this;
        _this.http = http;
        _this._DispatchActivity = _DispatchActivity;
        _this.ngxService = ngxService;
        _this.modalService = modalService;
        _this.chRef = chRef;
        _this.chRef1 = chRef1;
        _this.warehouseDropdownSettings = {};
        _this.selectedWarehouseId = { Id: '', Name: '' };
        _this.AllCount = {};
        _this.selectedCustomer = {};
        _this.formType = "customer";
        _this.hideShowList = [];
        _this.hideShowListOut = [];
        _this.form = fb.group({
            WarehouseId: [''],
            FromDate: [''],
            ToDate: ['']
        });
        return _this;
    }
    DispatchActivityComponent.prototype.ngOnInit = function () {
        this.getWarehouseKeyPair();
        this.dropDownSettings();
        for (var i = 0; i < 26; i++) {
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
        this.hideShowList[10].status = false;
        this.hideShowList[11].status = false;
        this.hideShowList[12].status = false;
        this.hideShowList[13].status = false;
        this.hideShowList[14].status = false;
        this.hideShowList[15].status = false;
        this.hideShowList[16].status = false;
        this.hideShowList[17].status = false;
        this.hideShowList[18].status = false;
        this.hideShowList[19].status = false;
        this.hideShowList[20].status = false;
        this.hideShowList[21].status = false;
        this.hideShowList[22].status = false;
        this.hideShowList[23].status = false;
        this.hideShowList[24].status = false;
        this.hideShowList[25].status = false;
        for (var i = 0; i < 22; i++) {
            this.hideShowListOut.push({ status: true });
        }
        this.hideShowListOut[0].status = false;
        this.hideShowListOut[1].status = false;
        this.hideShowListOut[2].status = false;
        this.hideShowListOut[3].status = false;
        this.hideShowListOut[4].status = false;
        this.hideShowListOut[5].status = false;
        this.hideShowListOut[6].status = false;
        this.hideShowListOut[7].status = false;
        this.hideShowListOut[8].status = false;
        this.hideShowListOut[9].status = false;
        this.hideShowListOut[10].status = false;
        this.hideShowListOut[11].status = false;
        this.hideShowListOut[12].status = false;
        this.hideShowListOut[13].status = false;
        this.hideShowListOut[14].status = false;
        this.hideShowListOut[15].status = false;
        this.hideShowListOut[16].status = false;
        this.hideShowListOut[17].status = false;
        this.hideShowListOut[18].status = false;
        this.hideShowListOut[19].status = false;
        this.hideShowListOut[20].status = false;
        this.hideShowListOut[21].status = false;
    };
    //Excel Conversion
    DispatchActivityComponent.prototype.exportExcel = function (fileName, table_id, fileHeader) {
        var element = document.getElementById(table_id);
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].table_to_sheet(element);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_append_sheet(wb, ws, fileHeader);
        xlsx__WEBPACK_IMPORTED_MODULE_10__["writeFile"](wb, fileName);
    };
    //PDF Conversion
    DispatchActivityComponent.prototype.createPdf = function (my_file, table_id) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_12__["default"]({ orientation: "landscape" });
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_13___default()(doc, { html: table_id });
        doc.save(my_file);
    };
    // CSV Converterd
    DispatchActivityComponent.prototype.downloadCSV = function (data, filename) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_11__["saveAs"])(blob, filename);
    };
    // Hiding Column
    DispatchActivityComponent.prototype.HideShow = function (index) {
        var i = Number(index);
        if (this.hideShowList[i].status) {
            this.hideShowList[i].status = false;
        }
        else {
            this.hideShowList[i].status = true;
        }
    };
    DispatchActivityComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId()
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this._DispatchActivity.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            console.log(res);
            _this.warehouseKeyPair = res;
            console.log(_this.warehouseKeyPair);
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchActivityComponent.prototype.onSelect = function (item, dropDownName) {
        debugger;
        this[dropDownName] = {
            Id: item.Value,
            Name: item.Text
        };
    };
    DispatchActivityComponent.prototype.selectedWarehouse = function (event) {
        this.selectedWarehouseId = event.Value;
    };
    DispatchActivityComponent.prototype.onDeSelect = function (dropDownName) {
        this[dropDownName] = {};
    };
    DispatchActivityComponent.prototype.dropDownSettings = function () {
        this.warehouseDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    DispatchActivityComponent.prototype.search = function (fromDate, toDate) {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            WarehouseId: this.selectedWarehouseId,
            DateFrom: fromDate.value,
            DateTo: toDate.value
        };
        this.ngxService.start();
        this.OUTWARD_MOVEMENT_ACTIVITY(fromDate, toDate);
        var apiAddress = this.apiConstant.DISPATCH_ACTIVITY;
        this._DispatchActivity.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            console.log(res);
            _this.dispatchActivityList = res;
            debugger;
            console.log(_this.dispatchActivityList);
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchActivityComponent.prototype.OUTWARD_MOVEMENT_ACTIVITY = function (fromDate, toDate) {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            WarehouseId: this.selectedWarehouseId,
            DateFrom: fromDate.value,
            DateTo: toDate.value
        };
        this.ngxService.start();
        var apiAddress = this.apiConstant.OUTWARD_MOVEMENT_ACTIVITY;
        this._DispatchActivity.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            debugger;
            _this.OutwardActivityList = res;
            console.log(_this.OutwardActivityList);
            _this.outboundQty = 0;
            _this.OutwardActivityList.forEach(function (element) {
                _this.outboundQty += element.Credit;
            });
            _this.ngxService.stop();
            _this.chRef.detectChanges();
            _this.chRef.reattach();
            // Now you can use jQuery DataTables :
            var table = jquery__WEBPACK_IMPORTED_MODULE_5__('table');
            // this.dataTable = table.DataTable();
            _this.dataTable = table.DataTable({
                lengthMenu: [1000, 2000, 5000],
                "iDisplayLength": 1000,
                retrieve: true
            });
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DispatchActivityComponent.prototype.idstribution = function () {
        debugger;
        // console.log(this.dispatchList)
        // this.pickupOrderCompleted = this.dispatchList.filter(x => x.IsCompleted=== false && x.AML_PickupOrder.StatusId === 0 && x.IsDeleted === false);
        this.dispatchActivityOutbound = this.dispatchActivityList.filter(function (x) { return x.Credit > 0; });
        this.dispatchActivityPlan = this.dispatchActivityList.filter(function (x) { return x.Debit > 0; });
    };
    DispatchActivityComponent.prototype.openModal = function () {
        this.modalRef = this.modalService.open(this.AllModal, {
            // title:"Available Stock Report",
            size: "lg",
            modalClass: '',
            hideCloseButton: true,
            centered: true,
            backdrop: true,
            animation: true,
            keyboard: true,
            closeOnOutsideClick: true,
            backdropClass: "modal-backdrop",
            windowClass: 'modal-lg',
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('AllModal'),
        __metadata("design:type", Object)
    ], DispatchActivityComponent.prototype, "AllModal", void 0);
    DispatchActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wms-dispatch-activity',
            template: __webpack_require__(/*! ../templates/dispatch-activity.component.html */ "./src/app/layout/content/dispatch-activity/templates/dispatch-activity.component.html"),
            styles: [__webpack_require__(/*! ../styles/dispatch-activity.component.scss */ "./src/app/layout/content/dispatch-activity/styles/dispatch-activity.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_Dispatch_Activity__WEBPACK_IMPORTED_MODULE_8__["DispatchActivityService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderService"], ngb_modal__WEBPACK_IMPORTED_MODULE_4__["ModalManager"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DispatchActivityComponent);
    return DispatchActivityComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/dispatch-activity/dispatch-activity.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-activity/dispatch-activity.module.ts ***!
  \******************************************************************************/
/*! exports provided: DispatchActivityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchActivityModule", function() { return DispatchActivityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var _service_Dispatch_Activity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/Dispatch-Activity */ "./src/app/layout/content/dispatch-activity/service/Dispatch-Activity.ts");
/* harmony import */ var _components_Dispatch_Activity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Dispatch-Activity */ "./src/app/layout/content/dispatch-activity/components/Dispatch-Activity.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
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
                component: _components_Dispatch_Activity__WEBPACK_IMPORTED_MODULE_5__["DispatchActivityComponent"],
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var DispatchActivityModule = /** @class */ (function () {
    function DispatchActivityModule() {
    }
    DispatchActivityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ngb_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderModule"]
            ],
            declarations: [
                _components_Dispatch_Activity__WEBPACK_IMPORTED_MODULE_5__["DispatchActivityComponent"]
            ],
            providers: [
                _service_Dispatch_Activity__WEBPACK_IMPORTED_MODULE_4__["DispatchActivityService"]
            ],
            entryComponents: []
        })
    ], DispatchActivityModule);
    return DispatchActivityModule;
}());



/***/ }),

/***/ "./src/app/layout/content/dispatch-activity/service/Dispatch-Activity.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-activity/service/Dispatch-Activity.ts ***!
  \*******************************************************************************/
/*! exports provided: DispatchActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchActivityService", function() { return DispatchActivityService; });
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


var DispatchActivityService = /** @class */ (function (_super) {
    __extends(DispatchActivityService, _super);
    function DispatchActivityService(injector) {
        return _super.call(this, injector) || this;
    }
    DispatchActivityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], DispatchActivityService);
    return DispatchActivityService;
}(src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]));



/***/ }),

/***/ "./src/app/layout/content/dispatch-activity/styles/dispatch-activity.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-activity/styles/dispatch-activity.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\n  text-align: center; }\n\nth {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/layout/content/dispatch-activity/templates/dispatch-activity.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/content/dispatch-activity/templates/dispatch-activity.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Daily Activity Outbound\r\n        <!-- <small>\r\n        <button class=\"btn-wms\" (click)=\"redirectToCreateDispatch()\"><i class=\"fa fa-plus\"></i> New</button>\r\n      </small> -->\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n        <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n        <li><a routerLink=\"#\">Dispatch Activity</a></li>\r\n        <li class=\"active\">Listing</li>\r\n    </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"box box-primary\">\r\n                <div class=\"box-header\">\r\n                    <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n                    <div class=\"col-md-12\" style=\"background-color: whitesmoke;\">\r\n                        <ngx-ui-loader></ngx-ui-loader>\r\n                        <form name=\"formGroup\" [formGroup]=\"form\" novalidate (ngSubmit)=\"search(formGroup.value)\">\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Search By Warehouse</label>\r\n                                    <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair \"\r\n                                        [settings]=\"warehouseDropdownSettings\" formControlName=\"WarehouseId\"\r\n                                        #WarehouseId (onSelect)=\"selectedWarehouse($event)\">\r\n                                    </ng-multiselect-dropdown>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>From Date</label>\r\n                                    <input type=\"date\" formControlName=\"FromDate\" #fromDate\r\n                                        class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>To Date</label>\r\n                                    <input type=\"date\" formControlname=\"ToDate\" #toDate class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-1\">\r\n\r\n                                <div class=\"form-group\">\r\n                                    <!-- <label>Search</label> -->\r\n                                    <button style=\"margin-top: 15px;\" type=\"button\" class=\"btn btn-success\"\r\n                                        (click)=\"search(fromDate, toDate)\">Search</button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <!-- /.box-header -->\r\n                <div class=\"box-body\">\r\n\t\t\t\t\t<ul class=\"nav nav-tabs\">\r\n                        <!-- <li class=\"active\"><a data-toggle=\"tab\" href=\"#dispatchPlan\">Dispatch Plan</a></li> -->\r\n                        <li class=\"active\"><a data-toggle=\"tab\" href=\"#outward\">Daily Activity Outbound</a></li>\r\n\r\n                    </ul>\r\n\t\t\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t\t\t<div id=\"dispatchPlan\" class=\"tab-pane fade \">\r\n\t\t\t\t\t\t\t<h3>Dispatch Plan Report</h3>\r\n\t\t\t\t\t\t\t<div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 table-responsive \" id=\"myTable\" style=\"overflow-x: auto\">\r\n\t\t\t\t\t\t\t\t\t\t<nav>\r\n\t\t\t\t\t\t\t\t\t\t\t<ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 40%;\r\n\t\t\t\t\t\t\t\t\t\tbackground-color: #2a4257;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"downloadCSV(this.dispatchActivityOutbound, 'Dispatch-Activity.csv')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tDownload CSV</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"exportExcel('Dispatch-Activity.xlsx', 'tbl1', 'Dispatch Activity')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tDownload Excel</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"breadcrumb-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"createPdf('Dispatch-Activity.pdf', '#tbl')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">Export To PDF</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</li> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <li>\r\n\t\t\t\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\t\t\t[printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n\t\t\t\t\t\t\t\t\t\tngxPrint printSectionId=\"myTable\">\r\n\t\t\t\t\t\t\t\t\t\tPrint\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</li> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: black;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tColumn Hidden\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu\" style=\"background-color: #007bff;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('0')\" data-column=\"0\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSr#\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('1')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"1\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tActivity Date\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('2')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"1\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSO Date\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('3')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"1\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOrder ID\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('4')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"3\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelivery ID\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('5')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"4\" style=\"color: white; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSold-To\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('6')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"5\" style=\"color: white; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSold-To Name\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('7')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"6\" style=\"color: white; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tShip-To Address\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('8')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"8\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMaterial SKU\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('9')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"9\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSKU Description\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('10')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"14\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStock Out\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('11')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"11\" style=\"color: white; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNet Weight\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('12')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"10\" style=\"color: white; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBatch Code\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('13')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"12\" style=\"color: white; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCategory\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('14')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"13\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBrand\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('15')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"15\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRegion\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('16')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"16\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tZone\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('17')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"17\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCity\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('18')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"17\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWarehouse\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('19')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"17\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelivery Date\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('20')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"17\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tVehicle No.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('21')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"17\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDriver Name\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openModal()\" style=\"color: white;\">Print</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li> -->\r\n\t\t\t\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-hover dataTable\" role=\"grid\"\r\n\t\t\t\t\t\t\t\t\t\tstyle=\"width:100%; height: 700px; overflow-x: auto\" id=\"tbl1\">\r\n\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr role=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[0].status\" style=\"min-width: 50px;\">Sr#</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[1].status\" style=\"min-width: 80px;\">Activity Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[2].status\" style=\"min-width: 80px;\">SO Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[3].status\" style=\"min-width: 80px;\">Order ID</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[4].status\" style=\"min-width: 80px;\">Delivery ID</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[5].status\" style=\"min-width: 80px;\">Sold-To</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[6].status\" style=\"min-width: 120px;\">Sold-To Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[7].status\" style=\"min-width: 200px;\">Ship-To Address</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[8].status\" style=\"min-width: 80px;\">Material SKU</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[9].status\" style=\"min-width: 200px;\">SKU Description</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[10].status\" style=\"min-width: 100px;\">Stock Out</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[11].status\" style=\"min-width: 60px;\">Net Weight</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[12].status\" style=\"min-width: 50px;\">Batch Code</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[13].status\" style=\"min-width: 50px;\">Category</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[14].status\" style=\"min-width: 50px;\">Brand</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[15].status\" style=\"min-width: 150px;\">Region</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[16].status\" style=\"min-width: 100px;\">Zone</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[17].status\" style=\"min-width: 100px;\">City</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[18].status\" style=\"min-width: 150px;\">Warehouse</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[19].status\" style=\"min-width: 150px;\">Delivery Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[20].status\" style=\"min-width: 150px;\">Vehicle No.</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[21].status\" style=\"min-width: 150px;\">Driver Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr role=\"row\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let Outwardactivities of dispatchActivityList; let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[0].status\">{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[1].status\">{{Outwardactivities.TransctionDate | date:'short'}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[2].status\">{{Outwardactivities.SODate | date:'short'}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[3].status\">{{Outwardactivities.PickupOrderId}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[4].status\">{{Outwardactivities.DispatchId}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[5].status\">{{Outwardactivities.DistCode}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[6].status\">{{Outwardactivities.DistName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[7].status\">{{Outwardactivities.DistAddress}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[8].status\">{{Outwardactivities.Description}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[9].status\">{{Outwardactivities.Name}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[10].status\">{{Outwardactivities.Quantity}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[11].status\">{{Outwardactivities.NetWeight}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[12].status\">{{Outwardactivities.BatchCode}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[13].status\">{{Outwardactivities.Category}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[14].status\">{{Outwardactivities.Brand}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[15].status\">{{Outwardactivities.RegionName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[16].status\">{{Outwardactivities.ZoneName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[17].status\">{{Outwardactivities.CityName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[18].status\">{{Outwardactivities.WarehouseAbb}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[19].status\">{{Outwardactivities.DispatchDate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[20].status\">{{Outwardactivities.VehicleNo}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowListOut[21].status\">{{Outwardactivities.DriverName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div id=\"outward\" class=\"tab-pane fade in active\">\r\n\t\t\t\t\t\t\t<h3>Outward Movement</h3>\r\n\t\t\t\t\t\t\t<div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 table-responsive \" id=\"myTable\" style=\"overflow-x: auto\">\r\n\t\t\t\t\t\t\t\t\t\t<nav>\r\n\t\t\t\t\t\t\t\t\t\t\t<ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 40%;\r\n\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: #2a4257;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"breadcrumb-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"downloadCSV(this.dispatchActivityOutbound, 'Dispatch-Activity.csv')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tDownload CSV</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"exportExcel('Dispatch-Activity-Outbound.xlsx', 'tbl2', 'Daily Activity Outbound')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tDownload Excel</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"createPdf('Dispatch-Activity.pdf', '#tbl')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: black;\">Download PDF</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <li>\r\n\t\t\t\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\t\t\t[printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n\t\t\t\t\t\t\t\t\t\tngxPrint printSectionId=\"myTable\">\r\n\t\t\t\t\t\t\t\t\t\tPrint\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</li> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"breadcrumb-item dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: black;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tColumn Hidden\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu\" style=\"background-color: #007bff;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('0')\" data-column=\"0\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSr#\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('1')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"1\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tActivity Date\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('2')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"2\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSO Date\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('3')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"3\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelivery Plant\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('4')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"4\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelivery No\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('5')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"5\" style=\"color: white; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSold-To\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('6')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"6\" style=\"color: white; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSold-To Name\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('7')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"7\" style=\"color: white; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tShip-To Address\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('8')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"8\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMaterial SKU\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('9')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"9\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSKU Description\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('10')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"10\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStock Out\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('11')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"11\" style=\"color: white; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNet Weight\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('12')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"12\" style=\"color: white; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCategory\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('13')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"13\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBrand\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('14')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"14\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tVehicle No\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('15')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"15\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTransporter\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('16')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"16\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tVehicle Size\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('17')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"17\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSeal No\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('18')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"18\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tShift\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('19')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"19\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelivery Date\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('20')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"20\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReporting Time\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('21')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"21\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTime IN\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('22')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"22\" style=\"color: white;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTime OUT\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('23')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"23\" style=\"color: white; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBatch Code\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('24')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"24\" style=\"color: white; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMfg Date\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"dropdown-item ml-3\" (click)=\"HideShow('25')\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-column=\"25\" style=\"color: white; text-align: center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tExp Date\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openModal()\" style=\"color: white;\">Print</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</li> -->\r\n\t\t\t\t\t\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-hover dataTable\" role=\"grid\"\r\n\t\t\t\t\t\t\t\t\t\tstyle=\"width:100%; height: 500px !important; overflow-x: auto\" id=\"tbl2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr role=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[0].status\" style=\"min-width: 50px;\">Sr#</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[1].status\" style=\"min-width: 80px;\">Activity Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[1].status\" style=\"min-width: 80px;\">Location</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[2].status\" style=\"min-width: 80px;\">SO Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[3].status\" style=\"min-width: 80px;\">Deliery Plant</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[4].status\" style=\"min-width: 80px;\">Delivery No.</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[5].status\" style=\"min-width: 80px;\">Sold-To</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[6].status\" style=\"min-width: 120px;\">Sold-To Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[7].status\" style=\"min-width: 200px;\">Ship-To Address</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[8].status\" style=\"min-width: 80px;\">Material SKU</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[9].status\" style=\"min-width: 200px;\">SKU Description</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[10].status\" style=\"min-width: 100px;\">Stock Out</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[11].status\" style=\"min-width: 60px;\">Net Weight</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[23].status\" style=\"min-width: 50px;\">Batch Code</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[12].status\" style=\"min-width: 50px;\">Category</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[13].status\" style=\"min-width: 50px;\">Brand</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[14].status\" style=\"min-width: 150px;\">Vehicle No.</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[15].status\" style=\"min-width: 150px;\">Transporter</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[16].status\" style=\"min-width: 150px;\">Vehicle Size</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[17].status\" style=\"min-width: 150px;\">Seal No</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[18].status\" style=\"min-width: 150px;\">Shift</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[19].status\" style=\"min-width: 150px;\">Delivery Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[20].status\" style=\"min-width: 50px;\">Reporting Date-Time</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[20].status\" style=\"min-width: 50px;\">Time IN</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[22].status\" style=\"min-width: 50px;\">Time OUT</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[24].status\" style=\"min-width: 50px;\">Mfg Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"col-sm-1\" *ngIf=\"!hideShowList[25].status\" style=\"min-width: 50px;\">Exp Date</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr role=\"row\" \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let activities of OutwardActivityList; let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[0].status\">{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[1].status\">{{activities.TransctionDate | date}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[1].status\">3003</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[2].status\">{{activities.SODate | date}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[3].status\">{{activities.WarehouseAbb}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[4].status\">{{activities.CustomerOrderNo}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[5].status\">{{activities.DistCode}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[6].status\">{{activities.DistName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[7].status\">{{activities.DistAddress}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[8].status\">{{activities.Description}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[9].status\">{{activities.Name}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[10].status\">{{activities.Credit | number : '1.2-2'}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[11].status\">{{activities.NetWeight | number : '1.2-2'}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[23].status\">{{activities.BatchCode}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[12].status\">{{activities.Category}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[13].status\">{{activities.Brand}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[14].status\">{{activities.VehicleNo}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[15].status\">{{activities.Transporter}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[16].status\">{{activities.VehicleSize}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[17].status\">{{activities.SealNo}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[18].status\">{{activities.Shift}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[19].status\">{{activities.DispatchDate | date}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[20].status\">{{activities.ReportingTime | date:'dd/MMM/yy - hh:mm:ss'}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[21].status\">{{activities.TimeIn | date:'dd/MMM/yy - hh:mm:ss'}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[22].status\">{{activities.TimeOut | date:'dd/MMM/yy - hh:mm:ss'}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[24].status\">{{activities.MfgDate | date}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"!hideShowList[25].status\">{{activities.ExpDate | date}}</td>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t<tfoot>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <td colspan=\"12\"></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <td>Total:</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <td>{{outboundQty | number : '1.2-2'}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <td colspan=\"9\"></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t  </tfoot>\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n                <!-- /.box-body -->\r\n            </div>\r\n            <!-- /.box -->\r\n            <ngx-ui-loader></ngx-ui-loader>\r\n            <!-- <app-report [dispatchListCompleted]=\"dispatchListCompleted\"></app-report> -->\r\n        </div>\r\n        <!-- /.col -->\r\n    </div>\r\n    <!-- /.row -->\r\n</section>"

/***/ })

}]);
//# sourceMappingURL=content-dispatch-activity-dispatch-activity-module.js.map