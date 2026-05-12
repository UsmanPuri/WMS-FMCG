(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-SN-Search-SN-Search-module"],{

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

/***/ "./src/app/layout/content/SN-Search/SN-Search.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/content/SN-Search/SN-Search.module.ts ***!
  \**************************************************************/
/*! exports provided: SNSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SNSearchModule", function() { return SNSearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var _services_SN_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/SN-Search */ "./src/app/layout/content/SN-Search/services/SN-Search.ts");
/* harmony import */ var _components_SN_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SN-Search */ "./src/app/layout/content/SN-Search/components/SN-Search.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
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
                component: _components_SN_Search__WEBPACK_IMPORTED_MODULE_5__["SNSearchComponent"],
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var SNSearchModule = /** @class */ (function () {
    function SNSearchModule() {
    }
    SNSearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ngb_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_9__["NgxUiLoaderModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_10__["NgxPrintModule"]
            ],
            declarations: [
                _components_SN_Search__WEBPACK_IMPORTED_MODULE_5__["SNSearchComponent"]
            ],
            providers: [
                src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_11__["ExporterService"],
                _services_SN_Search__WEBPACK_IMPORTED_MODULE_4__["SNSearchService"]
            ],
            entryComponents: []
        })
    ], SNSearchModule);
    return SNSearchModule;
}());



/***/ }),

/***/ "./src/app/layout/content/SN-Search/components/SN-Search.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/content/SN-Search/components/SN-Search.ts ***!
  \******************************************************************/
/*! exports provided: SNSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SNSearchComponent", function() { return SNSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _services_SN_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/SN-Search */ "./src/app/layout/content/SN-Search/services/SN-Search.ts");
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_14__);
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















var SNSearchComponent = /** @class */ (function (_super) {
    __extends(SNSearchComponent, _super);
    function SNSearchComponent(injector, http, _snSearchService, exporterService, fb, ngxService, chRef, modalService) {
        var _this = _super.call(this, injector) || this;
        _this.http = http;
        _this._snSearchService = _snSearchService;
        _this.exporterService = exporterService;
        _this.ngxService = ngxService;
        _this.chRef = chRef;
        _this.modalService = modalService;
        _this.listAvailableStock = [];
        _this.TempList = [];
        _this.hideShowList = [];
        _this.dropdownHideShow = false;
        _this.fieldDropdownSettings = {};
        _this.recordfieldDropdownSettings = {};
        _this.form = fb.group({
            searchPanel: [''],
            fieldId: [''],
            RecordTypeId: ['']
        });
        return _this;
    }
    SNSearchComponent.prototype.ngOnInit = function () {
        this.dropDownSettings();
        this.dropdownList();
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
    };
    SNSearchComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ];
        this.addFormControlWithValidations("searchPanel", requiredValidation);
        this.addFormControlWithValidations("fieldId", requiredValidation);
        this.addFormControlWithValidations("RecordTypeId", requiredValidation);
    };
    SNSearchComponent.prototype.dropdownList = function () {
        this.fieldKeyPair = [
            'CustomerSKU',
            'SNno',
            'BatchCode',
            'InboundPool'
        ];
        this.RecordTypePair = [
            'TransLog',
            'AvailStock'
        ];
    };
    SNSearchComponent.prototype.getSearchAvailablestock = function () {
        var _this = this;
        this.ngxService.start();
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            status: this.form.get('searchPanel').value,
            FormType: this.selectedfieldId,
            RecordType: this.selectedRecordTypeId
        };
        var apiAddress = this.apiConstant.DASHBOARD_SEARCH_PANEL;
        this._snSearchService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            debugger;
            _this.listAvailableStock = [];
            _this.dataTable = null;
            _this.listAvailableStock = res;
            _this.ngxService.stop();
            _this.chRef.detectChanges();
            _this.chRef.reattach();
            // Now you can use jQuery DataTables :
            var table = jquery__WEBPACK_IMPORTED_MODULE_8__('table');
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
    SNSearchComponent.prototype.onDeSelect = function (dropDownName) {
        debugger;
        this[dropDownName] = {};
        if (dropDownName === 'selectedfield') {
            this.selectedfieldId = undefined;
        }
        if (dropDownName === 'selectedRecordType') {
            this.selectedRecordTypeId = undefined;
        }
        this.listAvailableStock = [];
    };
    SNSearchComponent.prototype.onSelect = function (item, dropDownName) {
        debugger;
        this[dropDownName] = {
            Id: item.Value,
            Name: item.Text
        };
        if (dropDownName === 'selectedfield') {
            this.selectedfieldId = item;
        }
        if (dropDownName === 'selectedRecordType') {
            this.selectedRecordTypeId = item;
        }
    };
    //Excel Conversion
    SNSearchComponent.prototype.exportExcel = function (fileName, table_id, fileHeader) {
        var element = document.getElementById(table_id);
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].table_to_sheet(element);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].book_append_sheet(wb, ws, fileHeader);
        xlsx__WEBPACK_IMPORTED_MODULE_11__["writeFile"](wb, fileName);
    };
    //PDF Conversion
    SNSearchComponent.prototype.createPdf = function (my_file, table_id) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_13__["default"]({ orientation: "landscape" });
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_14___default()(doc, { html: table_id });
        doc.save(my_file);
    };
    // CSV Converterd
    SNSearchComponent.prototype.downloadCSV = function (data, filename) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_12__["saveAs"])(blob, filename);
    };
    // Hiding Column
    SNSearchComponent.prototype.HideShow = function (index) {
        var i = Number(index);
        if (this.hideShowList[i].status) {
            this.hideShowList[i].status = false;
        }
        else {
            this.hideShowList[i].status = true;
        }
    };
    SNSearchComponent.prototype.dropDownSettings = function () {
        this.fieldDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.recordfieldDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    SNSearchComponent.prototype.exportServiceAsExcel = function () {
        // debugger
        var TempList = [];
        this.listAvailableStock.forEach(function (element) {
            var obj = {
                TransctionDate: element.TransctionDate,
                Aging: element.Aging,
                Warehouse: element.Warehouse,
                Location: element.Location,
                Status: element.Status,
                Description: element.Description,
                Name: element.Name,
                SNno: element.SNno,
                CustomerName: element.CustomerName,
                BatchCode: element.BatchCode,
                PalletNo: element.PalletNo,
                Balance: element.Balance,
                Pool: element.Pool,
                Debit: element.Debit,
                Credit: element.Credit
            };
            TempList.push(obj);
        });
        this.exporterService.exportToExcel(TempList, 'Available Stock');
    };
    SNSearchComponent.prototype.openModal = function () {
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
            windowClass: 'modal-lg',
        });
    };
    SNSearchComponent.prototype.CompanyInfo = function () {
        debugger;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('AllModal'),
        __metadata("design:type", Object)
    ], SNSearchComponent.prototype, "AllModal", void 0);
    SNSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-SN-Search",
            template: __webpack_require__(/*! ../templates/SN-Search.html */ "./src/app/layout/content/SN-Search/templates/SN-Search.html"),
            styles: [__webpack_require__(/*! ../styles/SN-Search.scss */ "./src/app/layout/content/SN-Search/styles/SN-Search.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _services_SN_Search__WEBPACK_IMPORTED_MODULE_3__["SNSearchService"], src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_4__["ExporterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], ngb_modal__WEBPACK_IMPORTED_MODULE_7__["ModalManager"]])
    ], SNSearchComponent);
    return SNSearchComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/SN-Search/services/SN-Search.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/content/SN-Search/services/SN-Search.ts ***!
  \****************************************************************/
/*! exports provided: SNSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SNSearchService", function() { return SNSearchService; });
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


var SNSearchService = /** @class */ (function (_super) {
    __extends(SNSearchService, _super);
    function SNSearchService(injector) {
        return _super.call(this, injector) || this;
    }
    SNSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], SNSearchService);
    return SNSearchService;
}(src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]));



/***/ }),

/***/ "./src/app/layout/content/SN-Search/styles/SN-Search.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/content/SN-Search/styles/SN-Search.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/content/SN-Search/templates/SN-Search.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/content/SN-Search/templates/SN-Search.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n  <section class=\"content-header\">\r\n    <h1>SEARCH PENAL</h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li class=\"active\">Search Panel</li>\r\n    </ol>\r\n  </section>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-solid\">\r\n        <div class=\"box-header\">\r\n\r\n          <form name=\"formGroup\" [formGroup]=\"form\" novalidate (ngSubmit)=\"getSearchAvailablestock(formGroup.value)\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group row\">\r\n                <label>Search Keyword</label>\r\n                <input type=\"text\" formControlName=\"searchPanel\" class=\"form-control rounded\" placeholder=\"Type Some words to search\">\r\n                <span class=\"help-block\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group row\">\r\n                <label>Search Field</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"fieldKeyPair\"\r\n                  [settings]=\"fieldDropdownSettings\" formControlName=\"fieldId\" \r\n                  (onSelect)=\"onSelect($event,'selectedfield')\" (onDeSelect)=\"onDeSelect('selectedfield')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedfieldId || !this.selectedfieldId['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group row\">\r\n                <label>Record Type</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"RecordTypePair\"\r\n                  [settings]=\"recordfieldDropdownSettings\" formControlName=\"RecordTypeId\" \r\n                  (onSelect)=\"onSelect($event,'selectedRecordType')\" (onDeSelect)=\"onDeSelect('selectedRecordType')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedRecordTypeId || !this.selectedRecordTypeId['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-1\">\r\n              <div class=\"form-group\">\r\n                <!-- <label>Search</label> -->\r\n                <button [disabled]=\"formGroup.invalid || selectedfieldId === undefined || selectedRecordTypeId === undefined\" style=\"margin-top: 25px;\" type=\"button\" class=\"btn btn-wms\" (click)=\"getSearchAvailablestock()\">\r\n                  <i class=\"fa fa-search\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\" id=\"myTable\" style=\"overflow-x: auto\">\r\n                <nav>\r\n                  <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 58%; \r\n                        background-color: #6c757d;\">\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"downloadCSV(this.listAvailableStock, 'available-stock.csv')\" style=\"color: white;\">\r\n                        Download CSV</a>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"exportExcel('available-stock.xlsx', 'tbl', 'Available Stock')\" style=\"color: white;\">\r\n                        Download Excel</a>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"createPdf('available-stock.pdf', '#tbl')\" style=\"color: white;\">Export To PDF</a>\r\n                    </li>\r\n                    <li>\r\n                      <button\r\n                        [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                        class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                        ngxPrint printSectionId=\"myTable\">\r\n                        Print\r\n                      </button>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item dropdown\">\r\n                      <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                        Column Hidden\r\n                      </a>\r\n                      <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                            width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('0')\" data-column=\"0\" style=\"color: white;\">\r\n                          Date\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('1')\" data-column=\"1\" style=\"color: white;\">\r\n                          Aging\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('2')\" data-column=\"1\" style=\"color: white;\">\r\n                          Warehouse\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('3')\" data-column=\"2\" style=\"color: white;\">\r\n                          Location\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('4')\" data-column=\"3\"\r\n                          style=\"color: white; text-align: center\">\r\n                          Status\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('5')\" data-column=\"4\"\r\n                          style=\"color: white; text-align: center\">\r\n                          Customer SKU\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('6')\" data-column=\"5\"\r\n                          style=\"color: white; text-align: center\">\r\n                          Name\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('7')\" data-column=\"0\" style=\"color: white;\">\r\n                          SNno\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('8')\" data-column=\"1\" style=\"color: white;\">\r\n                          Customer\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('9')\" data-column=\"2\" style=\"color: white;\">\r\n                          Batch Code\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('10')\" data-column=\"3\"\r\n                          style=\"color: white; text-align: center\">\r\n                          Pallet No\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('11')\" data-column=\"4\"\r\n                          style=\"color: white; text-align: center\">\r\n                          Avl.Stock\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('12')\" data-column=\"5\"\r\n                          style=\"color: white; text-align: center\">\r\n                          InTran.Stock\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('13')\" data-column=\"0\" style=\"color: white;\">\r\n                          Balance.Stock\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('14')\" data-column=\"1\" style=\"color: white;\">\r\n                          Pool\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('15')\" data-column=\"2\" style=\"color: white;\">\r\n                          Inbound Pool\r\n                        </a>\r\n                      </div>\r\n                    </li>\r\n                  </ol>\r\n                </nav>\r\n\r\n\r\n                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\" style=\"width:100%\" id=\"tbl\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[0].status\">\r\n                        Date\r\n                      </th>\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[1].status\">\r\n                        Aging\r\n                      </th>\r\n                      <th class=\"col-sm-2\" *ngIf=\"!hideShowList[2].status\">\r\n                        Warehouse\r\n                      </th>\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[3].status\">\r\n                        Location\r\n                      </th>\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[4].status\">\r\n                        Status\r\n                      </th>\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[5].status\">\r\n                        Customer SKU\r\n                      </th>\r\n\r\n                      <th class=\"col-sm-2\" *ngIf=\"!hideShowList[6].status\">\r\n                        Name\r\n                      </th>\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[7].status\">\r\n                        SNno\r\n                      </th>\r\n                      <!-- <th class=\"col-sm-1\">\r\n                        Balance \r\n                      </th> -->\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[8].status\">\r\n                        Customer\r\n                      </th>\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[9].status\">\r\n                        Batch Code\r\n                      </th>\r\n                      <th class=\"col-sm-2\" *ngIf=\"!hideShowList[10].status\">\r\n                        Pallet No\r\n                      </th>\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[11].status\">\r\n                        Avl.Stock\r\n                      </th>\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[12].status\">\r\n                        InTran.Stock\r\n                      </th>\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[13].status\">\r\n                        Balance\r\n                      </th>\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[14].status\">\r\n                        StockIn\r\n                      </th>\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[15].status\">\r\n                        StockOut\r\n                      </th>\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[16].status\">\r\n                        Pool\r\n                      </th>\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[17].status\">\r\n                        Inbound Pool\r\n                      </th>\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[18].status\">\r\n                        Distributor Info\r\n                      </th>\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[19].status\">\r\n                        Vehicle #\r\n                      </th>\r\n                      <th class=\"col-sm-1\" *ngIf=\"!hideShowList[20].status\">\r\n                        Outbound DN #\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let Item of listAvailableStock\">\r\n                      <td *ngIf=\"!hideShowList[0].status\">{{Item.TransctionDate | date}}</td>\r\n                      <td *ngIf=\"!hideShowList[1].status\">{{Item.Aging}}</td>\r\n                      <td *ngIf=\"!hideShowList[2].status\">{{Item.Warehouse}}</td>\r\n                      <td *ngIf=\"!hideShowList[3].status\">{{Item.Location}}</td>\r\n                      <td *ngIf=\"!hideShowList[4].status\">{{Item.Status}}</td>\r\n                      <td *ngIf=\"!hideShowList[5].status\">{{Item.Description}}</td>\r\n                      <td *ngIf=\"!hideShowList[6].status\">{{Item.Name}}</td>\r\n                      <td *ngIf=\"!hideShowList[7].status\">{{Item.SNno}}</td>\r\n                      <td *ngIf=\"!hideShowList[8].status\">{{Item.CustomerName}}</td>\r\n                      <td *ngIf=\"!hideShowList[9].status\">{{Item.BatchCode}}</td>\r\n                      <td *ngIf=\"!hideShowList[10].status\">{{Item.PalletNo}}</td>\r\n                      <td *ngIf=\"!hideShowList[11].status\">{{Item.Balance}}</td>\r\n                      <td *ngIf=\"!hideShowList[12].status\">{{Item.TransitQuantity}}</td>\r\n                      <td *ngIf=\"!hideShowList[13].status\">{{Item.Balance - Item.TransitQuantity}}</td>\r\n                      <td *ngIf=\"!hideShowList[14].status\">{{Item.Debit}}</td>\r\n                      <td *ngIf=\"!hideShowList[15].status\">{{Item.Credit}}</td>\r\n                      <td *ngIf=\"!hideShowList[16].status\">{{Item.Pool}}</td>\r\n                      <td *ngIf=\"!hideShowList[17].status\">{{Item.InboundPool}}</td>\r\n                      <td *ngIf=\"!hideShowList[18].status\">{{Item.DistCode}} - {{Item.DistName}}</td>\r\n                      <td *ngIf=\"!hideShowList[19].status\">{{Item.VehicleNo}}</td>\r\n                      <td *ngIf=\"!hideShowList[20].status\">{{Item.CustomerOrderNo}}</td>\r\n\r\n                    </tr>\r\n                  </tbody>\r\n                  <ngx-ui-loader></ngx-ui-loader>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"row\">\r\n              <div class=\"col-md-1\">\r\n                <button type=\"button\" class=\"btn-genx\" (click)=\"exportServiceAsExcel()\"> Export</button>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <button [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                  class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\" ngxPrint\r\n                  printSectionId=\"myTable\">\r\n                  <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i>\r\n                  </span></button>\r\n              </div>\r\n            </div> -->\r\n\r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>\r\n\r\n\r\n<modal #AllModal>\r\n  <modal-header>\r\n\r\n  </modal-header>\r\n\r\n  <modal-content style=\"padding:20px;\">\r\n    <div class=\"box box-primary\" id=\"print-section\">\r\n      <section class=\"invoice\">\r\n        <!-- title row -->\r\n\r\n        <!-- info row -->\r\n        <div class=\"col col-lg-12\">\r\n          <div class=\"col-sm-6 invoice-col\">\r\n            <div class=\"col-xs-12\">\r\n              <h2 class=\"page-header\">\r\n                <img id=\"logo\" src={{LogoPath}} height=\"70\" width=\"160\" style=\"background-color: white;\">\r\n              </h2>\r\n            </div>\r\n          </div>\r\n          <div class=\" col-sm-6 invoice-col\">\r\n            <div class=\"col-sm-12 pull-right\" id=\"invoice-col\">\r\n              <address>\r\n                <strong>{{CompanyName}}</strong>\r\n                {{CompanyAddress}}\r\n              </address>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <!-- /.row -->\r\n\r\n        <!-- info row -->\r\n\r\n        <!-- /.row -->\r\n\r\n        <!-- Table row -->\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 table-responsive\">\r\n            <table class=\"table table-bordered table-hover dataTable\" role=\"grid\" style=\"width:100%\" id=\"tbl\">\r\n              <thead>\r\n                <tr role=\"row\">\r\n                  <th class=\"col-sm-1\" *ngIf=\"!hideShowList[0].status\">\r\n                    Date\r\n                  </th>\r\n                  <th class=\"col-sm-1\" *ngIf=\"!hideShowList[1].status\">\r\n                    Aging\r\n                  </th>\r\n                  <th class=\"col-sm-2\" *ngIf=\"!hideShowList[2].status\">\r\n                    Warehouse\r\n                  </th>\r\n                  <th class=\"col-sm-1\" *ngIf=\"!hideShowList[3].status\">\r\n                    Location\r\n                  </th>\r\n                  <th class=\"col-sm-1\" *ngIf=\"!hideShowList[4].status\">\r\n                    Status\r\n                  </th>\r\n                  <th class=\"col-sm-1\" *ngIf=\"!hideShowList[5].status\">\r\n                    Customer SKU\r\n                  </th>\r\n\r\n                  <th class=\"col-sm-2\" *ngIf=\"!hideShowList[6].status\">\r\n                    Name\r\n                  </th>\r\n                  <th class=\"col-sm-1\" *ngIf=\"!hideShowList[7].status\">\r\n                    SNno\r\n                  </th>\r\n                  <!-- <th class=\"col-sm-1\">\r\n                    Balance \r\n                  </th> -->\r\n                  <th class=\"col-sm-1\" *ngIf=\"!hideShowList[8].status\">\r\n                    Customer\r\n                  </th>\r\n                  <th class=\"col-sm-1\" *ngIf=\"!hideShowList[9].status\">\r\n                    Batch Code\r\n                  </th>\r\n                  <th class=\"col-sm-2\" *ngIf=\"!hideShowList[10].status\">\r\n                    Pallet No\r\n                  </th>\r\n                  <th class=\"col-sm-1\" *ngIf=\"!hideShowList[11].status\">\r\n                    Avl.Stock\r\n                  </th>\r\n                  <th class=\"col-sm-1\" *ngIf=\"!hideShowList[12].status\">\r\n                    InTran.Stock\r\n                  </th>\r\n                  <th class=\"col-sm-1\" *ngIf=\"!hideShowList[13].status\">\r\n                    Balance.Stock\r\n                  </th>\r\n                  <th class=\"col-sm-1\" *ngIf=\"!hideShowList[14].status\">\r\n                    Pool\r\n                  </th>\r\n                  <th class=\"col-sm-1\" *ngIf=\"!hideShowList[15].status\">\r\n                    Inbound Pool\r\n                  </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n\r\n                <tr role=\"row\" *ngFor=\"let Item of listAvailableStock\">\r\n                  <td *ngIf=\"!hideShowList[0].status\">{{Item.TransctionDate | date}}</td>\r\n                  <td *ngIf=\"!hideShowList[1].status\">{{Item.Aging}}</td>\r\n                  <td *ngIf=\"!hideShowList[2].status\">{{Item.Warehouse}}</td>\r\n                  <td *ngIf=\"!hideShowList[3].status\">{{Item.Location}}</td>\r\n                  <td *ngIf=\"!hideShowList[4].status\">{{Item.Status}}</td>\r\n                  <td *ngIf=\"!hideShowList[5].status\">{{Item.Description}}</td>\r\n                  <td *ngIf=\"!hideShowList[6].status\">{{Item.Name}}</td>\r\n                  <td *ngIf=\"!hideShowList[7].status\">{{Item.SNno}}</td>\r\n                  <td *ngIf=\"!hideShowList[8].status\">{{Item.CustomerName}}</td>\r\n                  <td *ngIf=\"!hideShowList[9].status\">{{Item.BatchCode}}</td>\r\n                  <td *ngIf=\"!hideShowList[10].status\">{{Item.PalletNo}}</td>\r\n                  <td *ngIf=\"!hideShowList[11].status\">{{Item.Balance}}</td>\r\n                  <td *ngIf=\"!hideShowList[12].status\">{{Item.TransitQuantity}}</td>\r\n                  <td *ngIf=\"!hideShowList[13].status\">{{Item.Balance - Item.TransitQuantity}}</td>\r\n                  <td *ngIf=\"!hideShowList[14].status\">{{Item.Pool}}</td>\r\n                  <td *ngIf=\"!hideShowList[15].status\">{{Item.InboundPool}}</td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <td colspan=\"2\">\r\n                  <tr style=\"float: right;\">TotalQty: {{TotalQty}}</tr>\r\n                </td>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n\r\n\r\n      </section>\r\n    </div>\r\n  </modal-content>\r\n\r\n  <modal-footer>\r\n    <div class=\"row no-print\" id=\"printButton\">\r\n      <div class=\"col-xs-12\">\r\n        <!-- <a  (click)=\"print()\" class=\"btn btn-default\"><i class=\"fa fa-print\"></i> Print</a> -->\r\n        <button [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '10px','font-size': '10px'}}\"\r\n          class=\"btn-wms hidden-print print-btn\" printTitle=\"Available Stock Report\" [useExistingCss]=\"false\" ngxPrint\r\n          printSectionId=\"print-section\">\r\n          <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i>\r\n          </span></button>\r\n      </div>\r\n    </div>\r\n  </modal-footer>\r\n</modal>"

/***/ })

}]);
//# sourceMappingURL=content-SN-Search-SN-Search-module.js.map