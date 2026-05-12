(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-daily-activity-daily-activity-module"],{

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

/***/ "./src/app/layout/content/daily-activity/components/Daily-Activity.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/content/daily-activity/components/Daily-Activity.ts ***!
  \****************************************************************************/
/*! exports provided: DailyActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyActivityComponent", function() { return DailyActivityComponent; });
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
/* harmony import */ var _service_Daily_Activity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/Daily-Activity */ "./src/app/layout/content/daily-activity/service/Daily-Activity.ts");
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














var DailyActivityComponent = /** @class */ (function (_super) {
    __extends(DailyActivityComponent, _super);
    function DailyActivityComponent(injector, http, _DailyActivity, fb, ngxService, modalService, chRef) {
        var _this = _super.call(this, injector) || this;
        _this.http = http;
        _this._DailyActivity = _DailyActivity;
        _this.ngxService = ngxService;
        _this.modalService = modalService;
        _this.chRef = chRef;
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
    DailyActivityComponent.prototype.ngOnInit = function () {
        this.getWarehouseKeyPair();
        this.dropDownSettings();
        for (var i = 0; i < 21; i++) {
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
        for (var i = 0; i < 23; i++) {
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
    DailyActivityComponent.prototype.exportExcel = function (fileName, table_id, fileHeader) {
        var element = document.getElementById(table_id);
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].table_to_sheet(element);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].book_append_sheet(wb, ws, fileHeader);
        xlsx__WEBPACK_IMPORTED_MODULE_10__["writeFile"](wb, fileName);
    };
    //PDF Conversion
    DailyActivityComponent.prototype.createPdf = function (my_file, table_id) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_12__["default"]({ orientation: "landscape" });
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_13___default()(doc, { html: table_id });
        doc.save(my_file);
    };
    // CSV Converterd
    DailyActivityComponent.prototype.downloadCSV = function (data, filename) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_11__["saveAs"])(blob, filename);
    };
    // Hiding Column
    DailyActivityComponent.prototype.HideShow = function (index) {
        var i = Number(index);
        if (this.hideShowList[i].status) {
            this.hideShowList[i].status = false;
        }
        else {
            this.hideShowList[i].status = true;
        }
    };
    DailyActivityComponent.prototype.HideShowOut = function (index) {
        var i = Number(index);
        if (this.hideShowListOut[i].status) {
            this.hideShowListOut[i].status = false;
        }
        else {
            this.hideShowListOut[i].status = true;
        }
    };
    DailyActivityComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId()
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this._DailyActivity.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            console.log(res);
            _this.warehouseKeyPair = res;
            console.log(_this.warehouseKeyPair);
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    DailyActivityComponent.prototype.onSelect = function (item, dropDownName) {
        debugger;
        this[dropDownName] = {
            Id: item.Value,
            Name: item.Text
        };
    };
    DailyActivityComponent.prototype.selectedWarehouse = function (event) {
        this.selectedWarehouseId = event.Value;
    };
    DailyActivityComponent.prototype.onDeSelect = function (dropDownName) {
        this[dropDownName] = {};
    };
    DailyActivityComponent.prototype.dropDownSettings = function () {
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
    DailyActivityComponent.prototype.search = function (fromDate, toDate) {
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
        var apiAddress = this.apiConstant.DAILY_ACTIVITY;
        this._DailyActivity.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            console.log(res);
            _this.dailyActivityList = res;
            _this.idstribution();
            console.log(_this.dailyActivityList);
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
    DailyActivityComponent.prototype.idstribution = function () {
        var _this = this;
        debugger;
        this.TotalQtyInbound = 0;
        this.TotalWeightInbound = 0;
        this.TotalQtyOutbound = 0;
        this.TotalWeightOutbound = 0;
        // console.log(this.dispatchList)
        // this.pickupOrderCompleted = this.dispatchList.filter(x => x.IsCompleted=== false && x.AML_PickupOrder.StatusId === 0 && x.IsDeleted === false);
        this.dailyActivityOutbound = this.dailyActivityList.filter(function (x) { return x.Credit > 0; });
        this.dailyActivityInbound = this.dailyActivityList.filter(function (x) { return x.Debit > 0; });
        this.dailyActivityOutbound.forEach(function (element) {
            _this.TotalQtyOutbound += element.Credit;
            _this.TotalWeightOutbound += (element.Credit * element.Weight);
        });
        this.dailyActivityInbound.forEach(function (element) {
            _this.TotalQtyInbound += element.Debit;
            _this.TotalWeightInbound += (element.Debit * element.Weight);
        });
    };
    DailyActivityComponent.prototype.openModal = function () {
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
    ], DailyActivityComponent.prototype, "AllModal", void 0);
    DailyActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wms-daily-activity',
            template: __webpack_require__(/*! ../templates/daily-activity.component.html */ "./src/app/layout/content/daily-activity/templates/daily-activity.component.html"),
            styles: [__webpack_require__(/*! ../styles/daily-activity.component.scss */ "./src/app/layout/content/daily-activity/styles/daily-activity.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _service_Daily_Activity__WEBPACK_IMPORTED_MODULE_8__["DailyActivityService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderService"], ngb_modal__WEBPACK_IMPORTED_MODULE_4__["ModalManager"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DailyActivityComponent);
    return DailyActivityComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/daily-activity/daily-activity.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/content/daily-activity/daily-activity.module.ts ***!
  \************************************************************************/
/*! exports provided: DailyActivityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyActivityModule", function() { return DailyActivityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var _service_Daily_Activity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/Daily-Activity */ "./src/app/layout/content/daily-activity/service/Daily-Activity.ts");
/* harmony import */ var _components_Daily_Activity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Daily-Activity */ "./src/app/layout/content/daily-activity/components/Daily-Activity.ts");
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
                component: _components_Daily_Activity__WEBPACK_IMPORTED_MODULE_5__["DailyActivityComponent"],
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var DailyActivityModule = /** @class */ (function () {
    function DailyActivityModule() {
    }
    DailyActivityModule = __decorate([
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
                _components_Daily_Activity__WEBPACK_IMPORTED_MODULE_5__["DailyActivityComponent"]
            ],
            providers: [
                _service_Daily_Activity__WEBPACK_IMPORTED_MODULE_4__["DailyActivityService"]
            ],
            entryComponents: []
        })
    ], DailyActivityModule);
    return DailyActivityModule;
}());



/***/ }),

/***/ "./src/app/layout/content/daily-activity/service/Daily-Activity.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/content/daily-activity/service/Daily-Activity.ts ***!
  \*************************************************************************/
/*! exports provided: DailyActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyActivityService", function() { return DailyActivityService; });
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


var DailyActivityService = /** @class */ (function (_super) {
    __extends(DailyActivityService, _super);
    function DailyActivityService(injector) {
        return _super.call(this, injector) || this;
    }
    DailyActivityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], DailyActivityService);
    return DailyActivityService;
}(src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]));



/***/ }),

/***/ "./src/app/layout/content/daily-activity/styles/daily-activity.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/layout/content/daily-activity/styles/daily-activity.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\n  text-align: center; }\n\nth {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/layout/content/daily-activity/templates/daily-activity.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/content/daily-activity/templates/daily-activity.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n    <h1>\r\n        Daily Activity <b>INBOUND</b>\r\n        <!-- <small>\r\n        <button class=\"btn-wms\" (click)=\"redirectToCreateDispatch()\"><i class=\"fa fa-plus\"></i> New</button>\r\n      </small> -->\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n        <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n        <li><a routerLink=\"#\">Daily Activity</a></li>\r\n        <li class=\"active\">Listing</li>\r\n    </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"box box-primary\">\r\n                <div class=\"box-header\">\r\n                    <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n                    <div class=\"col-md-12\" style=\"background-color: whitesmoke;\">\r\n                        <ngx-ui-loader></ngx-ui-loader>\r\n                        <form name=\"formGroup\" [formGroup]=\"form\" novalidate (ngSubmit)=\"search(formGroup.value)\">\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Search By Warehouse</label>\r\n                                    <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair \"\r\n                                        [settings]=\"warehouseDropdownSettings\" formControlName=\"WarehouseId\"\r\n                                        #WarehouseId (onSelect)=\"selectedWarehouse($event)\">\r\n                                    </ng-multiselect-dropdown>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>From Date</label>\r\n                                    <input type=\"date\" formControlName=\"FromDate\" #fromDate\r\n                                        class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>To Date</label>\r\n                                    <input type=\"date\" formControlname=\"ToDate\" #toDate class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-1\">\r\n\r\n                                <div class=\"form-group\">\r\n                                    <!-- <label>Search</label> -->\r\n                                    <button style=\"margin-top: 15px;\" type=\"button\" class=\"btn btn-success\"\r\n                                        (click)=\"search(fromDate, toDate)\">Search</button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <!-- /.box-header -->\r\n                <div class=\"box-body\">\r\n                    <ul class=\"nav nav-tabs\">\r\n                        <li class=\"active\"><a data-toggle=\"tab\" href=\"#inBound\">Inbound Register </a></li>\r\n                        <!-- <li><a data-toggle=\"tab\" href=\"#outBound\">Outbound Register</a></li> -->\r\n\r\n                    </ul>\r\n\r\n                    <div class=\"tab-content\">\r\n                        <div id=\"inBound\" class=\"tab-pane fade in active\">\r\n                            <h3>Inbound Activity Register</h3>\r\n                            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 table-responsive \" id=\"myTable\" style=\"overflow-x: auto; height: 600px;\">\r\n                                        <nav>\r\n                                            <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 40%;\r\n                                              background-color: #2a4257;\">\r\n                                                <!-- <li class=\"breadcrumb-item\">\r\n                                                    <button\r\n                                                        (click)=\"downloadCSV(this.dailyActivityInbound, 'Daily-Activity.csv')\"\r\n                                                        style=\"color: black;\">\r\n                                                        Download CSV</button>\r\n                                                </li> -->\r\n                                                <li class=\"breadcrumb-item\">\r\n                                                    <button\r\n                                                        (click)=\"exportExcel('Daily-Activity-Inbound.xlsx', 'tbl', 'Daily Activity Inbound')\"\r\n                                                        style=\"color: black;\">\r\n                                                        Download Excel</button>\r\n                                                </li>\r\n                                                <li class=\"breadcrumb-item\">\r\n                                                    <button (click)=\"createPdf('Daily-Activity-Inbound.pdf', '#tbl')\"\r\n                                                        style=\"color: black;\">Download PDF</button>\r\n                                                </li>\r\n                                                <!-- <li>\r\n                                            <button\r\n                                              [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                                              class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                                              ngxPrint printSectionId=\"myTable\">\r\n                                              Print\r\n                                            </button>\r\n                                          </li> -->\r\n                                                <li class=\"breadcrumb-item dropdown\">\r\n                                                    <button href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\r\n                                                        style=\"color: black;\">\r\n                                                        Column Hidden\r\n                                                    </button>\r\n                                                    <div class=\"dropdown-menu\"\r\n                                                        style=\"background-color: #007bff;\r\n                                                        width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('0')\"\r\n                                                            data-column=\"0\" style=\"color: white;\">\r\n                                                            Sr#\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('1')\"\r\n                                                            data-column=\"1\" style=\"color: white;\">\r\n                                                            Activity Date.\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('2')\"\r\n                                                            data-column=\"2\" style=\"color: white;\">\r\n                                                            PO/Material ID\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('3')\"\r\n                                                            data-column=\"3\" style=\"color: white;\">\r\n                                                            Customer SKU\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('4')\"\r\n                                                            data-column=\"4\" style=\"color: white;\">\r\n                                                            SKU Name\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('19')\"\r\n                                                            data-column=\"5\" style=\"color: white; text-align: center\">\r\n                                                            Doc Qty\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('5')\"\r\n                                                            data-column=\"5\" style=\"color: white; text-align: center\">\r\n                                                            Stock IN\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('20')\"\r\n                                                            data-column=\"5\" style=\"color: white; text-align: center\">\r\n                                                            Diff Qty\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('6')\"\r\n                                                            data-column=\"6\" style=\"color: white;\">\r\n                                                            Weight\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('7')\"\r\n                                                            data-column=\"7\" style=\"color: white;\">\r\n                                                            Vehicle No\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('8')\"\r\n                                                            data-column=\"8\" style=\"color: white;\">\r\n                                                            Seal No\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('9')\"\r\n                                                            data-column=\"9\" style=\"color: white;\">\r\n                                                            Transporter\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('10')\"\r\n                                                            data-column=\"10\" style=\"color: white;\">\r\n                                                            Vehicle Size\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('11')\"\r\n                                                            data-column=\"11\" style=\"color: white;\">\r\n                                                            Reporting Time\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('12')\"\r\n                                                            data-column=\"12\" style=\"color: white;\">\r\n                                                            OffLoading Start Time\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('13')\"\r\n                                                            data-column=\"13\" style=\"color: white;\">\r\n                                                            OffLoading End Time\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('14')\"\r\n                                                            data-column=\"14\" style=\"color: white;\">\r\n                                                            Receiving Date\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('15')\"\r\n                                                            data-column=\"15\" style=\"color: white;\">\r\n                                                            Mfg Date\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('16')\"\r\n                                                            data-column=\"16\" style=\"color: white;\">\r\n                                                            Exp Date\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('17')\"\r\n                                                            data-column=\"17\" style=\"color: white;\">\r\n                                                            Driver Name\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('18')\"\r\n                                                            data-column=\"18\" style=\"color: white;\">\r\n                                                            Batch\r\n                                                        </a>\r\n\r\n                                                    </div>\r\n                                                </li>\r\n                                                <!-- <li>\r\n                                                    <a (click)=\"openModal()\" style=\"color: white;\">Print</a>\r\n                                                </li> -->\r\n                                            </ol>\r\n                                        </nav>\r\n\r\n                                        <table class=\"table table-bordered table-hover dataTable\" role=\"grid\"\r\n                                            style=\"width:100%; height: 700px; overflow-x: auto\" id=\"tbl\">\r\n                                            <thead>\r\n                                                <tr role=\"row\" class=\"text-centre\">\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[0].status\"\r\n                                                        style=\"min-width: 50px;\">Sr#</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[1].status\"\r\n                                                        style=\"min-width: 100px;\">Activity Date.</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[1].status\"\r\n                                                        style=\"min-width: 100px;\">Location</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[2].status\"\r\n                                                        style=\"min-width: 100px;\">PO/Material ID</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[3].status\"\r\n                                                        style=\"min-width: 85px;\">Customer SKU</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[4].status\"\r\n                                                        style=\"min-width: 200px;\">SKU Name</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[19].status\"\r\n                                                        style=\"min-width: 50px;\">Doc Qty</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[5].status\"\r\n                                                        style=\"min-width: 50px;\">Stock IN</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[20].status\"\r\n                                                        style=\"min-width: 50px;\">Diff Qty</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[6].status\"\r\n                                                        style=\"min-width: 50px;\">Weight</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[7].status\"\r\n                                                        style=\"min-width: 100px;\">Vehicle No</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[8].status\"\r\n                                                        style=\"min-width: 100px;\">Seal No</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[9].status\"\r\n                                                        style=\"min-width: 100px;\">Transporter</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[10].status\"\r\n                                                        style=\"min-width: 100px;\">Vehicle Size</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[11].status\"\r\n                                                        style=\"min-width: 100px;\">Reporting Time</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[12].status\"\r\n                                                        style=\"min-width: 100px;\">OffLoading Start Time</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[13].status\"\r\n                                                        style=\"min-width: 100px;\">OffLoading End Time</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[14].status\"\r\n                                                        style=\"min-width: 100px;\">Receiving Date</th>    \r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[15].status\"\r\n                                                        style=\"min-width: 100px;\">Mfg Date</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[16].status\"\r\n                                                        style=\"min-width: 100px;\">Expiry Date</th>\r\n                                                        <th class=\"col-sm-1\" *ngIf=\"!hideShowList[18].status\"\r\n                                                        style=\"min-width: 100px;\">Batch Code</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowList[17].status\"\r\n                                                        style=\"min-width: 100px;\">Driver Name</th>\r\n                                                    \r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr role=\"row\" class=\"text-centre\"\r\n                                                    *ngFor=\"let activities of dailyActivityInbound; let i = index\">\r\n                                                    <td *ngIf=\"!hideShowList[0].status\">{{i+1}}</td>\r\n                                                    <td *ngIf=\"!hideShowList[1].status\">{{activities.TransctionDate | date }}</td>\r\n                                                    <td *ngIf=\"!hideShowList[1].status\">3003</td>\r\n                                                    <td *ngIf=\"!hideShowList[2].status\">{{activities.ASNNo}}</td>\r\n                                                    <td *ngIf=\"!hideShowList[3].status\">{{activities.Description}}</td>\r\n                                                    <td *ngIf=\"!hideShowList[4].status\">{{activities.Name}}</td>\r\n                                                    <td *ngIf=\"!hideShowList[19].status\">{{activities.Quantity}}</td>\r\n                                                    <td *ngIf=\"!hideShowList[5].status\">{{activities.Debit}}</td>\r\n                                                    <td *ngIf=\"!hideShowList[20].status\">{{activities.Quantity - activities.Debit}}</td>\r\n                                                    <td *ngIf=\"!hideShowList[6].status\">{{activities.Weight * activities.Debit | number:'1.2-2'}}</td>\r\n                                                    <td *ngIf=\"!hideShowList[7].status\">{{activities.VehicleNo}}</td>\r\n                                                    <td *ngIf=\"!hideShowList[8].status\">{{activities.SealNo}}</td>\r\n                                                    <td *ngIf=\"!hideShowList[9].status\">{{activities.Transporter}}</td>\r\n                                                    <td *ngIf=\"!hideShowList[10].status\">{{activities.VehicleSize}}</td>\r\n                                                    <td *ngIf=\"!hideShowList[11].status\">{{activities.ReportingTime | date:'dd/MMM/yy - hh:mm:ss'}}</td>\r\n                                                    <td *ngIf=\"!hideShowList[12].status\">{{activities.OffLoadingStartTime | date:'dd/MMM/yy - hh:mm:ss'}}</td>\r\n                                                    <td *ngIf=\"!hideShowList[13].status\">{{activities.OffLoadingEndTime | date:'dd/MMM/yy - hh:mm:ss'}}</td>\r\n                                                    <td *ngIf=\"!hideShowList[14].status\">{{activities.ReceivingDate | date:'short'}}</td>\r\n                                                    <td *ngIf=\"!hideShowList[15].status\">{{activities.MfgDate | date }}</td>\r\n                                                    <td *ngIf=\"!hideShowList[16].status\">{{activities.ExpDate | date }}</td>\r\n                                                    <td *ngIf=\"!hideShowList[18].status\">{{activities.BatchCode}}</td>\r\n                                                    <td *ngIf=\"!hideShowList[17].status\">{{activities.DriverName}}</td>\r\n                                                    \r\n                                                </tr>\r\n                                            </tbody>\r\n                                            <tfoot>\r\n                                                <tr>\r\n                                                    <td colspan=\"5\"></td>\r\n                                                    <td>TOTAL</td>\r\n                                                    <td>{{TotalQtyInbound | number : '1.2-2'}}</td>\r\n                                                    <td>{{TotalWeightInbound | number : '1.2-2'}}</td>\r\n                                                    <td colspan=\"7\"></td>\r\n                                                </tr>\r\n                                            </tfoot>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"outBound\" class=\"tab-pane fade\">\r\n                            <h3>Outbound Activity Register</h3>\r\n                            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 table-responsive \" id=\"myTable\" style=\"overflow-x: auto; height: 600px;\">\r\n                                        <nav>\r\n                                            <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 40%;\r\n                                          background-color: #2a4257;\">\r\n                                                <li class=\"breadcrumb-item\">\r\n                                                    <button\r\n                                                        (click)=\"downloadCSV(this.dailyActivityOutbound, 'Daily-Activity.csv')\"\r\n                                                        style=\"color: black;\">\r\n                                                        Download CSV</button>\r\n                                                </li>\r\n                                                <li class=\"breadcrumb-item\">\r\n                                                    <button\r\n                                                        (click)=\"exportExcel('Daily-Activity.xlsx', 'tbl1', 'Daily Activity')\"\r\n                                                        style=\"color: black;\">\r\n                                                        Download Excel</button>\r\n                                                </li>\r\n                                                <!-- <li class=\"breadcrumb-item\">\r\n                                                <button (click)=\"createPdf('Daily-Activity.pdf', '#tbl')\"\r\n                                                    style=\"color: black;\">Export To PDF</button>\r\n                                            </li> -->\r\n                                                <!-- <li>\r\n                                        <button\r\n                                          [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                                          class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                                          ngxPrint printSectionId=\"myTable\">\r\n                                          Print\r\n                                        </button>\r\n                                      </li> -->\r\n                                                <li class=\"breadcrumb-item dropdown\">\r\n                                                    <button href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: black;\">\r\n                                                        Column Hidden\r\n                                                    </button>\r\n                                                    <div class=\"dropdown-menu\" style=\"background-color: #007bff;\r\n                                                    width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('0')\" data-column=\"0\" style=\"color: white;\">\r\n                                                            Sr#\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('1')\"\r\n                                                            data-column=\"1\" style=\"color: white;\">\r\n                                                            Activity Date.\r\n                                                        </a>\r\n\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('2')\"\r\n                                                            data-column=\"3\" style=\"color: white;\">\r\n                                                            Dispatch ID\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('3')\"\r\n                                                            data-column=\"4\" style=\"color: white; text-align: center\">\r\n                                                            GP Manual\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('4')\"\r\n                                                            data-column=\"5\" style=\"color: white; text-align: center\">\r\n                                                            Order #\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('5')\"\r\n                                                            data-column=\"6\" style=\"color: white; text-align: center\">\r\n                                                            Location\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('6')\"\r\n                                                            data-column=\"7\" style=\"color: white;\">\r\n                                                            System Code\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('7')\"\r\n                                                            data-column=\"8\" style=\"color: white;\">\r\n                                                            Customer SKU\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('8')\"\r\n                                                            data-column=\"9\" style=\"color: white;\">\r\n                                                            SKU Name\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('9')\"\r\n                                                            data-column=\"10\" style=\"color: white; text-align: center\">\r\n                                                            Batch Code\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('10')\"\r\n                                                            data-column=\"11\" style=\"color: white; text-align: center\">\r\n                                                            Trans. Date\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('11')\"\r\n                                                            data-column=\"12\" style=\"color: white; text-align: center\">\r\n                                                            Status\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('12')\"\r\n                                                            data-column=\"13\" style=\"color: white;\">\r\n                                                            Price\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('13')\"\r\n                                                            data-column=\"14\" style=\"color: white;\">\r\n                                                            Stock Out\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('14')\"\r\n                                                            data-column=\"15\" style=\"color: white;\">\r\n                                                            Weight\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('15')\"\r\n                                                            data-column=\"16\" style=\"color: white;\">\r\n                                                            Trans. Ref\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('16')\"\r\n                                                            data-column=\"17\" style=\"color: white;\">\r\n                                                            Mfg Date\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('17')\"\r\n                                                            data-column=\"18\" style=\"color: white;\">\r\n                                                            Expiry Date\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('18')\"\r\n                                                            data-column=\"19\" style=\"color: white;\">\r\n                                                            SN#\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('19')\"\r\n                                                            data-column=\"20\" style=\"color: white;\">\r\n                                                            PR No.\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('20')\"\r\n                                                            data-column=\"21\" style=\"color: white;\">\r\n                                                            Inbound Pool\r\n                                                        </a>\r\n                                                        <a class=\"dropdown-item ml-3\" (click)=\"HideShowOut('21')\"\r\n                                                            data-column=\"22\" style=\"color: white;\">\r\n                                                            Type\r\n                                                        </a>\r\n                                                    </div>\r\n                                                </li>\r\n                                                <!-- <li>\r\n                                                <a (click)=\"openModal()\" style=\"color: white;\">Print</a>\r\n                                            </li> -->\r\n                                            </ol>\r\n                                        </nav>\r\n                                        <table class=\"table table-bordered table-hover dataTable\" role=\"grid\"\r\n                                        style=\"width:100%; height: 500px; overflow-y: auto; overflow-x: auto\" id=\"tbl1\">\r\n                                            <thead>\r\n                                                <tr role=\"row\">\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[0].status\" style=\"min-width: 50px;\">Sr#</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[1].status\" style=\"min-width: 100px;\">Activity Date.</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[1].status\" style=\"min-width: 100px;\">Delivery Plant</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[2].status\" style=\"min-width: 100px;\">Delivery No</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[3].status\" style=\"min-width: 100px;\">Sold to NO</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[3].status\" style=\"min-width: 100px;\">Sold to Name</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[3].status\" style=\"min-width: 100px;\">Ship to Address</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[7].status\" style=\"min-width: 85px;\">Customer SKU</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[8].status\" style=\"min-width: 200px;\">SKU Name</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[9].status\" style=\"min-width: 100px;\">Batch Code</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[13].status\" style=\"min-width: 50px;\">Stock Out</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[14].status\" style=\"min-width: 50px;\">Weight</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[15].status\" style=\"min-width: 150px;\">Trans. Ref</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[16].status\" style=\"min-width: 100px;\">Mfg Date</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[17].status\" style=\"min-width: 100px;\">Expiry Date</th>\r\n                                                    <!-- <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[18].status\" style=\"min-width: 150px;\">SN#</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[19].status\" style=\"min-width: 100px;\">PR No.</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[20].status\" style=\"min-width: 100px;\">Inbound Pool</th>\r\n                                                    <th class=\"col-sm-1\" *ngIf=\"!hideShowListOut[21].status\" style=\"min-width: 100px;\">Type</th> -->\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr role=\"row\"\r\n                                                    *ngFor=\"let activities of dailyActivityOutbound; let i = index\">\r\n                                                    <td *ngIf=\"!hideShowListOut[0].status\">{{i+1}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[1].status\">{{activities.TransctionDate | date}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[2].status\">{{activities.DispatchId}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[3].status\">{{activities.Address}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[4].status\">{{activities.CustomerOrderNo}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[5].status\">{{activities.Location}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[6].status\">{{activities.ItemId}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[7].status\">{{activities.Description}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[8].status\">{{activities.Name}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[9].status\">{{activities.BatchCode}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[10].status\">{{activities.TransctionDate | date}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[11].status\">{{activities.Status}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[12].status\">{{activities.Price}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[13].status\">{{activities.Credit}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[14].status\">{{activities.Weight * activities.Credit | number:'1.2-2'}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[15].status\">{{activities.RecordReference}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[16].status\">{{activities.MfgDate | date}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[17].status\">{{activities.ExpDate | date}}</td>\r\n                                                    <!-- <td *ngIf=\"!hideShowListOut[18].status\">{{activities.SNno}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[19].status\">{{activities.PRno}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[20].status\">{{activities.InboundPool}}</td>\r\n                                                    <td *ngIf=\"!hideShowListOut[21].status\">{{activities.Formtype}}</td> -->\r\n                                                </tr>\r\n                                            </tbody>\r\n                                            <tfoot>\r\n                                                <tr>\r\n                                                    <td colspan=\"12\"></td>\r\n                                                    <td>TOTAL</td>\r\n                                                    <td>{{TotalQtyOutbound | number:'1.2-2'}}</td>\r\n                                                    <td>{{TotalWeightOutbound | number:'1.2-2'}}</td>\r\n                                                </tr>\r\n                                            </tfoot>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n                <!-- /.box-body -->\r\n            </div>\r\n            <!-- /.box -->\r\n            <ngx-ui-loader></ngx-ui-loader>\r\n            <!-- <app-report [dispatchListCompleted]=\"dispatchListCompleted\"></app-report> -->\r\n        </div>\r\n        <!-- /.col -->\r\n    </div>\r\n    <!-- /.row -->\r\n</section>"

/***/ })

}]);
//# sourceMappingURL=content-daily-activity-daily-activity-module.js.map