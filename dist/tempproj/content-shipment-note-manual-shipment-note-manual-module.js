(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-shipment-note-manual-shipment-note-manual-module"],{

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

/***/ "./src/app/layout/content/shipment-note-manual/components/shipment-note-manual-detail.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-manual/components/shipment-note-manual-detail.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ShipmentNoteManualDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentNoteManualDetailComponent", function() { return ShipmentNoteManualDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shipment_note_manual_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shipment-note-manual.service */ "./src/app/layout/content/shipment-note-manual/services/shipment-note-manual.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
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





var ShipmentNoteManualDetailComponent = /** @class */ (function (_super) {
    __extends(ShipmentNoteManualDetailComponent, _super);
    function ShipmentNoteManualDetailComponent(injector, _shipmentNoteServiceService, activeRoute, modalService) {
        var _this = _super.call(this, injector) || this;
        _this._shipmentNoteServiceService = _shipmentNoteServiceService;
        _this.activeRoute = activeRoute;
        _this.modalService = modalService;
        _this.palletDropdownSettings = {};
        _this.palletList = [];
        _this.palletCustomer = {};
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.warehouseDropdownSettings = {};
        _this.selectedWarehouse = { Id: null, Name: null };
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
    ShipmentNoteManualDetailComponent.prototype.ngOnInit = function () {
        this.getById();
    };
    ShipmentNoteManualDetailComponent.prototype.getById = function () {
        var _this = this;
        var Id = this.activeRoute.snapshot.params['Id'];
        if (Id) {
            var customerByIdUrl = this.apiConstant.SHIPMENT_NOTE_GET_ONE + ("" + Id);
            this._shipmentNoteServiceService.getData(customerByIdUrl)
                .subscribe(function (res) {
                debugger;
                _this.shipmentNote = res;
                console.log(_this.shipmentNote);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    ShipmentNoteManualDetailComponent.prototype.redirectToListShipmentNote = function () {
        this.router.navigate([this.routesList.SHIPMENT_NOTE_MANUAL_LISTING]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalItemLocation'),
        __metadata("design:type", Object)
    ], ShipmentNoteManualDetailComponent.prototype, "modalItemLocation", void 0);
    ShipmentNoteManualDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-shipment-note-manual-detail-form",
            template: __webpack_require__(/*! ../templates/detail.component.html */ "./src/app/layout/content/shipment-note-manual/templates/detail.component.html"),
            styles: [__webpack_require__(/*! ../styles/shipment-note-manual-form.component.scss */ "./src/app/layout/content/shipment-note-manual/styles/shipment-note-manual-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_shipment_note_manual_service__WEBPACK_IMPORTED_MODULE_1__["ShipmentNoteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ngb_modal__WEBPACK_IMPORTED_MODULE_4__["ModalManager"]])
    ], ShipmentNoteManualDetailComponent);
    return ShipmentNoteManualDetailComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/shipment-note-manual/components/shipment-note-manual-edit-form.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-manual/components/shipment-note-manual-edit-form.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ShipmentNoteManualEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentNoteManualEditFormComponent", function() { return ShipmentNoteManualEditFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shipment_note_manual_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shipment-note-manual.service */ "./src/app/layout/content/shipment-note-manual/services/shipment-note-manual.service.ts");
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







var ShipmentNoteManualEditFormComponent = /** @class */ (function (_super) {
    __extends(ShipmentNoteManualEditFormComponent, _super);
    function ShipmentNoteManualEditFormComponent(injector, _shipmentNoteServiceService, activeRoute, modalService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._shipmentNoteServiceService = _shipmentNoteServiceService;
        _this.activeRoute = activeRoute;
        _this.modalService = modalService;
        _this.ngxService = ngxService;
        _this.palletDropdownSettings = {};
        _this.palletList = [];
        _this.palletCustomer = {};
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.warehouseDropdownSettings = {};
        _this.selectedWarehouse = {};
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
    ShipmentNoteManualEditFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getPalletKeyPair();
        this.getCustomerKeyPair();
        this.getWarehouseKeyPair();
        this.getById();
    };
    ShipmentNoteManualEditFormComponent.prototype.getWarehouseNameFromWarehouseKeyPair = function (warehouseId) {
        var model = this.warehouseKeyPair
            .filter(function (x) { return x.Value == warehouseId; });
        if (model && model[0] && model[0].Text) {
            return model[0].Text;
        }
        else {
            return 0;
        }
    };
    ShipmentNoteManualEditFormComponent.prototype.getCustomerNameFromCustomerKeyPair = function (warehouseId) {
        var model = this.customerKeyPair
            .filter(function (x) { return x.Value == warehouseId; });
        if (model && model[0] && model[0].Text) {
            return model[0].Text;
        }
        else {
            return 0;
        }
    };
    ShipmentNoteManualEditFormComponent.prototype.getById = function () {
        var _this = this;
        var Id = this.activeRoute.snapshot.params['Id'];
        if (Id) {
            var customerByIdUrl = this.apiConstant.SHIPMENT_NOTE_GET_ONE + ("" + Id);
            this._shipmentNoteServiceService.getData(customerByIdUrl)
                .subscribe(function (res) {
                _this.shipmentNote = res;
                _this.selectedWarehouseInfo = [{
                        "Text": _this.getWarehouseNameFromWarehouseKeyPair(_this.shipmentNote.WarehouseId),
                        "Value": _this.shipmentNote.WarehouseId.toString()
                    }];
                _this.selectedWarehouse = _this.shipmentNote.WarehouseId;
                _this.selectedCustomerInfo = [{
                        "Text": _this.getCustomerNameFromCustomerKeyPair(_this.shipmentNote.CustomerID),
                        "Value": _this.shipmentNote.CustomerID.toString()
                    }];
                _this.selectedCustomer = _this.shipmentNote.CustomerID;
                console.log(_this.shipmentNote);
                _this.formGroup.patchValue({
                    //  WarehouseId: this.selectedWarehouseInfo,
                    //  GodwomTypeId:this.selectedGodwomTypeInfo,
                    ShipmentNoteNo: _this.shipmentNote.ShipmentNoteNo,
                    CargoStatus: _this.shipmentNote.CargoStatus,
                    ASNNo: _this.shipmentNote.ASNNo,
                    ASNDate: _this.shipmentNote.ASNDate,
                    DeliveryNo: _this.shipmentNote.DeliveryNo,
                    Remarks: _this.shipmentNote.Remarks
                });
                _this.getItemInformationKeyPair(_this.shipmentNote.CustomerID);
                _this.shipmentNote.AML_ShipmentNoteChild.forEach(function (element) {
                    _this.shipmentListToPost.push({
                        Name: element.ItemName,
                        ItemInformationId: element.ItemInformationId,
                        Batch: element.Batch,
                        Status: element.Status,
                        Quantity: element.Quantity,
                        NoOfBoxes: element.NoOfBoxes,
                        PRno: element.PRno,
                        SNno: element.SNno,
                        ExpiryDate: element.ExpiryDate,
                        MfgDate: element.MfgDate,
                        Price: element.Price,
                        TotalCBM: element.Quantity * element.ItemCBM,
                        GatePass: element.GatePass,
                        ServiceRequest: element.ServiceRequest,
                        RMA: element.RMA,
                        RecievedFrom: element.RecievedFrom,
                        ConsignmentNo: element.ConsignmentNo,
                        ICare: element.ICare,
                        BusinessType: element.BusinessType,
                        InboundPool: element.InboundPool,
                        Network: element.Network,
                        DeliveryType: element.DeliveryType,
                        ReceivedStation: element.ReceivedStation,
                        ContractNo: element.ContractNo,
                        PackingListNo: element.PackingListNo,
                        InboundAgainst: element.InboundAgainst,
                        HandlerName: element.HandlerName
                    });
                });
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    /**
    * The following method is used to add the form validations
    */
    ShipmentNoteManualEditFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
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
        this.addFormControlWithValidations("ASNNo", requiredValidation);
        this.addFormControlWithValidations("ASNDate", []);
        this.addFormControlWithValidations("DriverName", []);
        this.addFormControlWithValidations("VehicleNo", []);
        this.addFormControlWithValidations("VehicleNo", []);
        this.addFormControlWithValidations("Quantity", []);
        this.addFormControlWithValidations("BoxQuantity", []);
        this.addFormControlWithValidations("MFGDate", []);
        this.addFormControlWithValidations("EXPDate", []);
        this.addFormControlWithValidations("Batch", []);
        this.addFormControlWithValidations("Status", []);
        this.addFormControlWithValidations("CBM", []);
        this.addFormControlWithValidations("PRno", []);
        this.addFormControlWithValidations("SNno", []);
        this.addFormControlWithValidations("GatePass", []);
        this.addFormControlWithValidations("ServiceRequest", []);
        this.addFormControlWithValidations("RMA", []);
        this.addFormControlWithValidations("RecievedFrom", []);
        this.addFormControlWithValidations("ConsignmentNo", []);
        this.addFormControlWithValidations("ICare", []);
        this.addFormControlWithValidations("BusinessType", []);
        this.addFormControlWithValidations("InboundPool", []);
        this.addFormControlWithValidations("Network", []);
        this.addFormControlWithValidations("DeliveryType", []);
        this.addFormControlWithValidations("ReceivedStation", []);
        this.addFormControlWithValidations("ContractNo", []);
        this.addFormControlWithValidations("PackingListNo", []);
        this.addFormControlWithValidations("InboundAgainst", []);
        this.addFormControlWithValidations("HandlerName", []);
    };
    ShipmentNoteManualEditFormComponent.prototype.getPalletKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.PALLET_LIST;
        this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
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
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteManualEditFormComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteManualEditFormComponent.prototype.getItemInformationKeyPair = function (customerId) {
        var _this = this;
        var apiAddress = this.apiConstant.ITEM_GetItemInformationByCustomerId + ("" + customerId);
        this.ngxService.start();
        this._shipmentNoteServiceService.getData(apiAddress)
            .subscribe(function (res) {
            _this.itemInformationByCustomer = res;
            var itemTemDropdown = [];
            _this.itemInformationByCustomer.forEach(function (element) {
                itemTemDropdown.push({
                    Value: element.itemInformation.ItemInformationId,
                    Text: element.itemInformation.Description + " | " + element.ItemBrand.Name + " | " + element.itemInformation.Name
                });
            });
            _this.itemKeyPair = itemTemDropdown;
            console.log(res);
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteManualEditFormComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId(),
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.warehouseKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteManualEditFormComponent.prototype.getGodownKeyPair = function (warehouseId) {
        var _this = this;
        var companyBusinessUnitInfo = {
            WarehouseId: warehouseId
        };
        var apiAddress = this.apiConstant.GODOWN_GET_BY_WAREHOUSE_ID;
        this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.godownKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteManualEditFormComponent.prototype.onSelect = function (item, dropDownName) {
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
            this.shipmentNote.WarehouseId = item.Value;
        }
        if (dropDownName === 'selectedItem') {
            var itemName = this.itemInformationByCustomer
                .filter(function (x) { return x.itemInformation.ItemInformationId === item.Value; })[0].itemInformation.Name;
            var Width = this.itemInformationByCustomer
                .filter(function (x) { return x.itemInformation.ItemInformationId === item.Value; })[0].itemInformation.Width;
            var Length = this.itemInformationByCustomer
                .filter(function (x) { return x.itemInformation.ItemInformationId === item.Value; })[0].itemInformation.Length;
            var Height = this.itemInformationByCustomer
                .filter(function (x) { return x.itemInformation.ItemInformationId === item.Value; })[0].itemInformation.Height;
            var CBM = (Width * 2.54 * Length * 2.54 * Height * 2.54) / 1000000;
            this.formGroup.get("ItemName").setValue(itemName);
            this.formGroup.get("CBM").setValue(CBM.toFixed(2));
        }
    };
    ShipmentNoteManualEditFormComponent.prototype.onDeSelect = function (dropDownName) {
        this[dropDownName] = {};
    };
    ShipmentNoteManualEditFormComponent.prototype.getItemInformationObject = function (itemInformationId) {
        return this.itemInformationByCustomer.filter(function (x) { return x.itemInformation.ItemInformationId == itemInformationId; })[0];
    };
    ShipmentNoteManualEditFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    ShipmentNoteManualEditFormComponent.prototype.dropdownSettings = function () {
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
    ShipmentNoteManualEditFormComponent.prototype.getErrorMessage = function (formElement) {
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
    ShipmentNoteManualEditFormComponent.prototype.redirectToShipmentNoteList = function () {
        this.router.navigate([this.routesList.SHIPMENT_NOTE_MANUAL_LISTING]);
    };
    ShipmentNoteManualEditFormComponent.prototype.addShipmentItemManualy = function () {
        var batch = this.formGroup.get('Batch').value;
        if (batch == "" || batch == null || !this.selectedItem || !this.selectedItem['Id']) {
            this.showToastrWarning("Please Select Item And Add Batch No First...!");
            return false;
        }
        else {
            var index = this.shipmentListToPost.findIndex(function (e) { return e.Batch === batch; });
            if (index === -1) {
                this.shipmentListToPost.push({
                    Name: this.selectedItem['Name'],
                    ItemInformationId: this.selectedItem["Id"],
                    Batch: this.formGroup.get('Batch').value,
                    Status: this.formGroup.get('Status').value,
                    Quantity: this.formGroup.get('Quantity').value,
                    NoOfBoxes: this.formGroup.get('BoxQuantity').value,
                    PRno: this.formGroup.get('PRno').value,
                    SNno: this.formGroup.get('SNno').value,
                    ExpiryDate: this.formGroup.get('EXPDate').value,
                    MfgDate: this.formGroup.get('MFGDate').value,
                    Price: this.getItemInformationObject(this.selectedItem["Id"]).Price,
                    TotalCBM: this.formGroup.get('Quantity').value * this.formGroup.get('CBM').value,
                    GatePass: this.formGroup.get('GatePass').value,
                    ServiceRequest: this.formGroup.get('ServiceRequest').value,
                    RMA: this.formGroup.get('RMA').value,
                    RecievedFrom: this.formGroup.get('RecievedFrom').value,
                    ConsignmentNo: this.formGroup.get('ConsignmentNo').value,
                    ICare: this.formGroup.get('ICare').value,
                    BusinessType: this.formGroup.get('BusinessType'),
                    InboundPool: this.formGroup.get('InboundPool').value,
                    Network: this.formGroup.get('Network').value,
                    DeliveryType: this.formGroup.get('DeliveryType').value,
                    ReceivedStation: this.formGroup.get('ReceivedStation').value,
                    ContractNo: this.formGroup.get('ContractNo').value,
                    PackingListNo: this.formGroup.get('PackingListNo').value,
                    InboundAgainst: this.formGroup.get('InboundAgainst').value,
                    HandlerName: this.formGroup.get('HandlerName').value
                });
                this.selectedItem = {};
                this.formGroup.get("ItemId").setValue('');
                this.formGroup.get("Batch").setValue('');
                this.formGroup.get("Status").setValue('');
                this.formGroup.get("EXPDate").setValue('');
                this.formGroup.get("MFGDate").setValue('');
                this.formGroup.get("Quantity").setValue('');
                this.formGroup.get("BoxQuantity").setValue('');
                this.formGroup.get("CBM").setValue('');
                this.formGroup.get("PRno").setValue('');
                this.formGroup.get("SNno").setValue('');
                this.formGroup.get("GatePass").setValue('');
                this.formGroup.get("ServiceRequest").setValue('');
                this.formGroup.get("RecievedFrom").setValue('');
                this.formGroup.get("ConsignmentNo").setValue('');
                this.formGroup.get("ICare").setValue('');
                this.formGroup.get("RMA").setValue('');
                this.formGroup.get('BusinessType').setValue('');
                this.formGroup.get('InboundPool').setValue('');
                this.formGroup.get('Network').setValue('');
                this.formGroup.get('DeliveryType').setValue('');
                this.formGroup.get('ReceivedStation').setValue('');
                this.formGroup.get('ContractNo').setValue('');
                this.formGroup.get('PackingListNo').setValue('');
                this.formGroup.get('InboundAgainst').setValue('');
                this.formGroup.get('HandlerName').setValue('');
                console.log(this.shipmentListToPost);
            }
            else {
                this.showToastrWarning("Not Allowed To Add Same Batch No Again...!");
                return false;
            }
        }
    };
    ShipmentNoteManualEditFormComponent.prototype.CheckDate = function () {
        var mfgDate = this.formGroup.get('MFGDate').value;
        var expDate = this.formGroup.get('EXPDate').value;
        if (mfgDate > expDate) {
            this.showToastrWarning("Please Select Date After The Mfg Date");
            this.formGroup.get("EXPDate").setValue('');
        }
    };
    ShipmentNoteManualEditFormComponent.prototype.deleteFromShipmentListManual = function (item) {
        this.shipmentListToPost.splice(this.shipmentListToPost.indexOf(item), 1);
    };
    ShipmentNoteManualEditFormComponent.prototype.updateShipmentNote = function (formValue) {
        if (this.formGroup.valid) {
            if (!this.selectedCustomer) {
                this.showToastrWarning("Select Customer please.");
                return false;
            }
            // else if (!this.selectedWarehouse || !this.selectedWarehouse["Id"]) {
            //   this.showToastrWarning("Select Warehouse please.");
            //   return false;
            // }
            this.executeShipmentNoteUpdate(formValue);
        }
    };
    ShipmentNoteManualEditFormComponent.prototype.executeShipmentNoteUpdate = function (formValue) {
        var _this = this;
        var shipmentNote = {
            ShipmentNoteId: this.shipmentNote.ShipmentNoteId,
            ShipmentNoteNo: formValue.ShipmentNoteNo,
            CustomerID: this.shipmentNote.CustomerID,
            CargoStatus: formValue.CargoStatus,
            WarehouseId: this.shipmentNote.WarehouseId,
            GodownId: this.selectedGodown["Id"],
            Remarks: formValue.Remarks,
            ASNNo: formValue.ASNNo,
            DeliveryNo: formValue.DeliveryNo,
            ASNDate: formValue.ASNDate,
            DriverName: formValue.DriverName,
            VehicleNo: formValue.VehicleNo,
            AML_ShipmentNoteChild: this.shipmentListToPost,
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiUrl = this.apiConstant.SHIPMENT_NOTE_UPDATE_BY_ID + ("/" + this.shipmentNote.ShipmentNoteId);
        this.ngxService.start();
        this._shipmentNoteServiceService.update(apiUrl, shipmentNote)
            .subscribe(function (res) {
            _this.showToastrSuccess("Shipment Note Update Successfully");
            setTimeout(function () {
                _this.redirectToShipmentNoteList();
            }, 2000);
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalItemLocation'),
        __metadata("design:type", Object)
    ], ShipmentNoteManualEditFormComponent.prototype, "modalItemLocation", void 0);
    ShipmentNoteManualEditFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-shipment-note-manual-edit-form",
            template: __webpack_require__(/*! ../templates/edit-form.component.html */ "./src/app/layout/content/shipment-note-manual/templates/edit-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/shipment-note-manual-form.component.scss */ "./src/app/layout/content/shipment-note-manual/styles/shipment-note-manual-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_shipment_note_manual_service__WEBPACK_IMPORTED_MODULE_2__["ShipmentNoteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngb_modal__WEBPACK_IMPORTED_MODULE_5__["ModalManager"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"]])
    ], ShipmentNoteManualEditFormComponent);
    return ShipmentNoteManualEditFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/shipment-note-manual/components/shipment-note-manual-form.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-manual/components/shipment-note-manual-form.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ShipmentNoteManualFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentNoteManualFormComponent", function() { return ShipmentNoteManualFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_shipment_note_manual_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shipment-note-manual.service */ "./src/app/layout/content/shipment-note-manual/services/shipment-note-manual.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
/* harmony import */ var src_app_helpers_services_environment_url_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/helpers/services/environment-url.service */ "./src/app/helpers/services/environment-url.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_12__);
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













var ShipmentNoteManualFormComponent = /** @class */ (function (_super) {
    __extends(ShipmentNoteManualFormComponent, _super);
    function ShipmentNoteManualFormComponent(injector, http, _shipmentNoteServiceService, envUrl, activeRoute, modalService, datepipe, exporterService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this.http = http;
        _this._shipmentNoteServiceService = _shipmentNoteServiceService;
        _this.envUrl = envUrl;
        _this.activeRoute = activeRoute;
        _this.modalService = modalService;
        _this.datepipe = datepipe;
        _this.exporterService = exporterService;
        _this.ngxService = ngxService;
        _this.FromExcelData = [];
        _this.BTN = false;
        _this.BTNDup = false;
        _this.palletDropdownSettings = {};
        _this.palletList = [];
        _this.palletCustomer = {};
        //isDisabled = false;
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.warehouseDropdownSettings = {};
        _this.selectedWarehouse = { Id: null, Name: null };
        _this.selectedParkingStage = {};
        _this.godownDropdownSettings = {};
        _this.selectedGodown = { Id: null, Name: null };
        _this.itemDropdownSettings = {};
        _this.selectedItem = {};
        _this.parkingStageDropdownSettings = {};
        _this.itemInformationByCustomer = [];
        _this.shelfListForShipment = [];
        _this.shipmentListToPost = [];
        _this.shipmentListToPostTemp = [];
        _this.selectedPallet = {};
        return _this;
    }
    ;
    ShipmentNoteManualFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getPalletKeyPair();
        this.getCustomerKeyPair();
        this.getWarehouseKeyPair();
        this.getParkingStagesKeyPair();
    };
    //Excel Conversion
    ShipmentNoteManualFormComponent.prototype.exportExcel = function (fileName, table_id, fileHeader) {
        var element = document.getElementById(table_id);
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].table_to_sheet(element);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].book_append_sheet(wb, ws, fileHeader);
        xlsx__WEBPACK_IMPORTED_MODULE_11__["writeFile"](wb, fileName);
    };
    // CSV Converterd
    ShipmentNoteManualFormComponent.prototype.downloadCSV = function (data, filename) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_12__["saveAs"])(blob, filename);
    };
    /**
    * The following method is used to add the form validations
    */
    ShipmentNoteManualFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ];
        this.addFormControlWithValidations("CustomerId", requiredValidation);
        this.addFormControlWithValidations("WarehouseId", requiredValidation);
        this.addFormControlWithValidations("ItemId", []);
        this.addFormControlWithValidations("ItemName", []);
        this.addFormControlWithValidations("ShipmentNoteNo", []);
        this.addFormControlWithValidations("DeliveryNo", []);
        this.addFormControlWithValidations("GodownId", []);
        this.addFormControlWithValidations("CargoStatus", []);
        this.addFormControlWithValidations("Remarks", []);
        this.addFormControlWithValidations("ASNNo", requiredValidation);
        this.addFormControlWithValidations("ASNDate", requiredValidation);
        // this.addFormControlWithValidations("DriverName", []);
        this.addFormControlWithValidations("VehicleNo", requiredValidation);
        this.addFormControlWithValidations("Quantity", []);
        this.addFormControlWithValidations("BoxQuantity", []);
        this.addFormControlWithValidations("MFGDate", []);
        this.addFormControlWithValidations("EXPDate", []);
        this.addFormControlWithValidations("Batch", []);
        this.addFormControlWithValidations("Status", []);
        this.addFormControlWithValidations("CBM", []);
        this.addFormControlWithValidations("PRno", []);
        this.addFormControlWithValidations("SNno", []);
        this.addFormControlWithValidations("ParkingStageId", requiredValidation);
        this.addFormControlWithValidations("GatePass", []);
        this.addFormControlWithValidations("TempOut", []);
        this.addFormControlWithValidations("TempIn", []);
        // this.addFormControlWithValidations("MobileNo", []);
        this.addFormControlWithValidations("ServiceRequest", []);
        this.addFormControlWithValidations("RMA", []);
        this.addFormControlWithValidations("RecievedFrom", []);
        this.addFormControlWithValidations("ConsignmentNo", []);
        this.addFormControlWithValidations("ICare", []);
        this.addFormControlWithValidations("isDisabled", [], true);
        this.addFormControlWithValidations("BusinessType", []);
        this.addFormControlWithValidations("InboundPool", []);
        this.addFormControlWithValidations("Network", []);
        this.addFormControlWithValidations("DeliveryType", []);
        this.addFormControlWithValidations("ReceivedStation", []);
        this.addFormControlWithValidations("ContractNo", []);
        this.addFormControlWithValidations("PackingListNo", []);
        this.addFormControlWithValidations("InboundAgainst", []);
        this.addFormControlWithValidations("HandlerName", []);
        this.addFormControlWithValidations("ReceiveDate", requiredValidation);
        this.addFormControlWithValidations("OffLoadStartDate", []);
        this.addFormControlWithValidations("OffLoadEndDate", []);
        this.addFormControlWithValidations("VehicleSize", requiredValidation);
        this.addFormControlWithValidations("Transporter", requiredValidation);
        this.addFormControlWithValidations("SealNo", requiredValidation);
        this.addFormControlWithValidations("ReportingTime", []);
    };
    ShipmentNoteManualFormComponent.prototype.getPalletKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.PALLET_LIST;
        this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
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
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteManualFormComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteManualFormComponent.prototype.getItemInformationKeyPair = function (customerId) {
        var _this = this;
        var apiAddress = this.apiConstant.ITEM_GetItemInformationByCustomerId + ("" + customerId);
        this.ngxService.start();
        debugger;
        this._shipmentNoteServiceService.getData(apiAddress)
            .subscribe(function (res) {
            _this.itemInformationByCustomer = res;
            debugger;
            var itemTemDropdown = [];
            _this.itemInformationByCustomer.forEach(function (element) {
                itemTemDropdown.push({
                    Value: element.itemInformation.ItemInformationId,
                    Text: element.itemInformation.Description + " | " + element.ItemBrand.Name + " | " + element.itemInformation.Name,
                    Description: element.itemInformation.Description,
                    ShelfLife: element.itemInformation.AML_Item.ShelfLife
                });
            });
            debugger;
            _this.itemKeyPair = itemTemDropdown;
            console.log(res);
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteManualFormComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId(),
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.warehouseKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteManualFormComponent.prototype.getGodownKeyPair = function (warehouseId) {
        var _this = this;
        var companyBusinessUnitInfo = {
            WarehouseId: warehouseId
        };
        var apiAddress = this.apiConstant.GODOWN_GET_BY_WAREHOUSE_ID;
        this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.godownKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteManualFormComponent.prototype.onSelect = function (item, dropDownName) {
        this[dropDownName] = {
            Id: item.Value,
            Name: item.Text
        };
        if (dropDownName === 'selectedCustomer') {
            this.itemKeyPair = [];
            this.CustomerId = item.Value;
            this.getItemInformationKeyPair(item.Value);
        }
        if (dropDownName === 'selectedWarehouse') {
            this.formGroup.get("GodownId").setValue('');
            this.godownKeyPair = [];
            this.getGodownKeyPair(item.Value);
        }
        if (dropDownName === 'selectedItem') {
            debugger;
            var itemName = this.itemInformationByCustomer
                .filter(function (x) { return x.itemInformation.ItemInformationId === item.Value; })[0].itemInformation.Name;
            var Width = this.itemInformationByCustomer
                .filter(function (x) { return x.itemInformation.ItemInformationId === item.Value; })[0].itemInformation.Width;
            var Length = this.itemInformationByCustomer
                .filter(function (x) { return x.itemInformation.ItemInformationId === item.Value; })[0].itemInformation.Length;
            var Height = this.itemInformationByCustomer
                .filter(function (x) { return x.itemInformation.ItemInformationId === item.Value; })[0].itemInformation.Height;
            var CBM = (Width * 2.54 * Length * 2.54 * Height * 2.54) / 1000000;
            this.formGroup.get("ItemName").setValue(itemName);
            this.formGroup.get("CBM").setValue(CBM.toFixed(2));
            this.ShelfLife = this.itemInformationByCustomer
                .filter(function (x) { return x.itemInformation.ItemInformationId === item.Value; })[0].itemInformation.AML_Item.ShelfLife;
        }
    };
    ShipmentNoteManualFormComponent.prototype.onDeSelect = function (dropDownName) {
        this[dropDownName] = {};
    };
    ShipmentNoteManualFormComponent.prototype.MFGDateChange = function (item) {
        debugger;
        this.MFGDt = new Date(this.formGroup.get('MFGDate').value);
        //this.MFGDt = this.MFGDt.getDate() 
        var date = new Date(this.formGroup.get('MFGDate').value);
        //this.formGroup.get("Batch").setValue(date.getFullYear() + '' + date.getMonth() + '' + date.getDate());
        var theDayOfTheMonthOnNextWeek = date.getDate() + this.ShelfLife;
        date.setDate(theDayOfTheMonthOnNextWeek);
        this.ExpiryDate = date;
        //this.formGroup.get("EXPDate").setValue(date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear());
    };
    ShipmentNoteManualFormComponent.prototype.getItemInformationObject = function (itemInformationId) {
        return this.itemInformationByCustomer.filter(function (x) { return x.itemInformation.ItemInformationId == itemInformationId; })[0];
    };
    ShipmentNoteManualFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    ShipmentNoteManualFormComponent.prototype.ASNDuplicateChk = function () {
        var _this = this;
        debugger;
        var ASNDuplicate = this.formGroup.get('ASNNo').value;
        if (ASNDuplicate != null) {
            var obj = {
                SnNo: ASNDuplicate,
                CompanyId: this.localStorageService.getCompanyId(),
                BusinessUnitId: this.localStorageService.getBusinessUnitId()
            };
            var apiUrl = this.apiConstant.CHECK_DUPLICATE_ASN;
            this._shipmentNoteServiceService.create(apiUrl, obj)
                .subscribe(function (res) {
                // debugger
                var isExist = res;
                if (isExist) {
                    _this.showToastrError("PO/Material # Already Available.");
                    _this.formGroup.get('ASNNo').setValue('');
                }
            }, (function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            }));
        }
    };
    ShipmentNoteManualFormComponent.prototype.getParkingStagesKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.PARKINGSTAGES_KEYPAIR;
        this._shipmentNoteServiceService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.parkingStageKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteManualFormComponent.prototype.parkingStageChange = function (item) {
        this.selectedParkingStage = {
            Id: item.Value,
            Name: item.Text
        };
        //this.shipmentNote.ParkingStageId = item.Value;
    };
    ShipmentNoteManualFormComponent.prototype.OffLoadStartDateChange = function (item) {
        debugger;
        this.OffLoadingStartTime = item.target.value;
    };
    ShipmentNoteManualFormComponent.prototype.OffLoadEndDateChange = function (item) {
        debugger;
        this.OffLoadingEndTime = item.target.value;
    };
    ShipmentNoteManualFormComponent.prototype.ReportingTimeChange = function (item) {
        debugger;
        this.ReportingTime = item.target.value;
    };
    ShipmentNoteManualFormComponent.prototype.ReceivingDateChange = function (item) {
        debugger;
        this.ReceivingDate = item.target.value;
    };
    ShipmentNoteManualFormComponent.prototype.dropdownSettings = function () {
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
        this.parkingStageDropdownSettings = {
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
    ShipmentNoteManualFormComponent.prototype.getErrorMessage = function (formElement) {
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
    ShipmentNoteManualFormComponent.prototype.redirectToShipmentNoteList = function () {
        this.router.navigate([this.routesList.SHIPMENT_NOTE_MANUAL_LISTING]);
    };
    ShipmentNoteManualFormComponent.prototype.addShipmentItemManualy = function () {
        debugger;
        //let batch = this.formGroup.get('Batch').value;
        var batch = this.datepipe.transform(this.MFGDt, 'yyMMdd') + 'S000';
        var SNno1 = this.formGroup.get('SNno').value;
        if (!this.selectedItem || !this.selectedItem['Id']) {
            this.showToastrWarning("Please Select Item SKU First...!");
            return false;
        }
        else if (this.formGroup.get('Quantity').value == "" || this.formGroup.get('Quantity').value <= 0) {
            this.showToastrWarning("Please Insert Item Quantity Properly...!");
            return false;
        }
        {
            var index = this.shipmentListToPost.findIndex(function (e) { return e.SNno === SNno1; });
            if ((index === -1) || (index === 0 && SNno1 === "")) {
                this.shipmentListToPost.push({
                    Name: this.selectedItem['Name'],
                    SKU: this.selectedItem['Description'],
                    ItemInformationId: this.selectedItem["Id"],
                    Batch: batch,
                    Status: this.formGroup.get('Status').value,
                    Quantity: this.formGroup.get('Quantity').value,
                    NoOfBoxes: this.formGroup.get('BoxQuantity').value,
                    PRno: this.formGroup.get('PRno').value,
                    SNno: this.formGroup.get('SNno').value,
                    ExpiryDate: this.datepipe.transform(this.ExpiryDate, 'yyyy-MM-dd'),
                    MfgDate: this.formGroup.get('MFGDate').value,
                    Price: this.getItemInformationObject(this.selectedItem["Id"]).Price,
                    TotalCBM: this.formGroup.get('Quantity').value * this.formGroup.get('CBM').value,
                    GatePass: this.formGroup.get('GatePass').value,
                    ServiceRequest: this.formGroup.get('ServiceRequest').value,
                    RMA: this.formGroup.get('RMA').value,
                    RecievedFrom: this.formGroup.get('RecievedFrom').value,
                    ConsignmentNo: this.formGroup.get('ConsignmentNo').value,
                    ICare: this.formGroup.get('ICare').value,
                    BusinessType: this.formGroup.get('BusinessType').value,
                    InboundPool: this.formGroup.get('InboundPool').value,
                    Network: this.formGroup.get('Network').value,
                    DeliveryType: this.formGroup.get('DeliveryType').value,
                    ReceivedStation: this.formGroup.get('ReceivedStation').value,
                    ContractNo: this.formGroup.get('ContractNo').value,
                    PackingListNo: this.formGroup.get('PackingListNo').value,
                    InboundAgainst: this.formGroup.get('InboundAgainst').value,
                    HandlerName: this.formGroup.get('HandlerName').value,
                });
                this.selectedItem = {};
                this.formGroup.get("ItemId").setValue('');
                this.formGroup.get("Batch").setValue('');
                this.formGroup.get("Status").setValue('');
                this.formGroup.get("EXPDate").setValue('');
                this.formGroup.get("MFGDate").setValue('');
                this.formGroup.get("Quantity").setValue('');
                this.formGroup.get("BoxQuantity").setValue('');
                this.formGroup.get("CBM").setValue('');
                this.formGroup.get("PRno").setValue('');
                this.formGroup.get("SNno").setValue('');
                this.formGroup.get("GatePass").setValue('');
                this.formGroup.get("ServiceRequest").setValue('');
                this.formGroup.get("RecievedFrom").setValue('');
                this.formGroup.get("ConsignmentNo").setValue('');
                this.formGroup.get("ICare").setValue('');
                this.formGroup.get("RMA").setValue('');
                this.formGroup.get('BusinessType').setValue('');
                this.formGroup.get('InboundPool').setValue('');
                this.formGroup.get('Network').setValue('');
                this.formGroup.get('DeliveryType').setValue('');
                this.formGroup.get('ReceivedStation').setValue('');
                this.formGroup.get('ContractNo').setValue('');
                this.formGroup.get('PackingListNo').setValue('');
                this.formGroup.get('InboundAgainst').setValue('');
                this.formGroup.get('HandlerName').setValue('');
                this.qtyCount();
            }
            else {
                this.showToastrWarning("Not Allowed To Add Same SN# into Below List...!");
                return false;
            }
        }
    };
    ShipmentNoteManualFormComponent.prototype.CheckDate = function () {
        var mfgDate = this.formGroup.get('MFGDate').value;
        var expDate = this.formGroup.get('EXPDate').value;
        if (mfgDate > expDate) {
            this.showToastrWarning("Please Select Date After The Mfg Date");
            this.formGroup.get("EXPDate").setValue('');
        }
    };
    ShipmentNoteManualFormComponent.prototype.qtyCount = function () {
        var _this = this;
        debugger;
        this.TotalQty = 0;
        this.shipmentListToPost.forEach(function (element) {
            _this.TotalQty += parseInt(element.Quantity);
        });
    };
    ShipmentNoteManualFormComponent.prototype.deleteFromShipmentListManual = function (item) {
        this.shipmentListToPost.splice(this.shipmentListToPost.indexOf(item), 1);
        this.qtyCount();
    };
    ShipmentNoteManualFormComponent.prototype.createShipmentNote = function (formValue) {
        if (this.formGroup.valid) {
            if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
                this.showToastrWarning("Select Customer please.");
                return false;
            }
            // else if (!this.selectedWarehouse || !this.selectedWarehouse["Id"]) {
            //   this.showToastrWarning("Select Warehouse please.");
            //   return false;
            // }
            this.executeShipmentNoteCreation(formValue);
        }
    };
    ShipmentNoteManualFormComponent.prototype.executeShipmentNoteCreation = function (formValue) {
        var _this = this;
        debugger;
        this.shipmentListClip();
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
            MobileNo: formValue.MobileNo,
            ReceivingDate: this.ReceivingDate,
            OffLoadingStartTime: this.OffLoadingStartTime,
            OffLoadingEndTime: this.OffLoadingEndTime,
            TempIn: formValue.TempIn,
            TempOut: formValue.TempOut,
            VehicleSize: formValue.VehicleSize,
            Transporter: formValue.Transporter,
            SealNo: formValue.SealNo,
            ReportingTime: this.ReportingTime,
            ParkingStageId: this.selectedParkingStage["Id"],
            ShipmentNoteChilds: this.shipmentListToPost,
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        //debugger
        var apiUrl = this.apiConstant.SHIPMENT_NOTE_CREATE;
        //this.ngxService.start();
        this._shipmentNoteServiceService.create(apiUrl, shipmentNote)
            .subscribe(function (res) {
            _this.showToastrSuccess("Shipment Note created successfully");
            setTimeout(function () {
                _this.redirectToShipmentNoteList();
            }, 2000);
            //this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop;
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    ShipmentNoteManualFormComponent.prototype.shipmentListClip = function () {
        var _this = this;
        debugger;
        if (this.shipmentListToPost.length > 0) {
            //this.shipmentListToPostTemp = this.shipmentListToPost;
            //   for (const obj of this.shipmentListToPost) {
            //     this.shipmentListToPostTemp.push(obj);
            // }
            this.shipmentListToPost.forEach(function (element) {
                var index = _this.shipmentListToPostTemp.findIndex(function (e) { return e.ItemInformationId == element.ItemInformationId && element.Batch == e.Batch; });
                if (index === -1) {
                    _this.shipmentListToPostTemp.push({
                        Batch: element.Batch,
                        BusinessType: element.BusinessType,
                        ConsignmentNo: element.ConsignmentNo,
                        ContractNo: element.ContractNo,
                        DeliveryType: element.DeliveryType,
                        ExpiryDate: element.ExpiryDate,
                        GatePass: element.GatePass,
                        HandlerName: element.HandlerName,
                        ICare: element.ICare,
                        InboundAgainst: element.InboundAgainst,
                        InboundPool: element.InboundPool,
                        ItemInformationId: element.ItemInformationId,
                        MfgDate: element.MfgDate,
                        Name: element.Name,
                        Network: element.Network,
                        NoOfBoxes: element.NoOfBoxes,
                        PRno: element.PRno,
                        PackingListNo: element.PackingListNo,
                        Price: element.Price,
                        Quantity: element.Quantity,
                        RMA: element.RMA,
                        ReceivedStation: element.ReceivedStation,
                        RecievedFrom: element.RecievedFrom,
                        SKU: element.SKU,
                        SNno: element.SNno,
                        ServiceRequest: element.ServiceRequest,
                        Status: element.Status,
                        TotalCBM: element.TotalCBM
                    });
                }
                else if (index != -1) {
                    _this.shipmentListToPostTemp[index].Quantity = _this.shipmentListToPostTemp[index].Quantity + element.Quantity;
                }
            });
        }
        this.shipmentListToPost = [];
        this.shipmentListToPost = this.shipmentListToPostTemp;
    };
    ShipmentNoteManualFormComponent.prototype.exportServiceAsExcel = function () {
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
        this.exporterService.exportToExcel(this.shipmentListToPost, 'AdvanceShipment');
        this.shipmentListToPost = [];
    };
    ShipmentNoteManualFormComponent.prototype.exportServiceAsCSV = function () {
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
            ICare: ''
        });
        this.exporterService.exportToExcel(this.shipmentListToPost, "test");
        this.shipmentListToPost = [];
    };
    ShipmentNoteManualFormComponent.prototype.onServicePicked = function () {
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
                        _this._shipmentNoteServiceService.create(apiUrl, obj)
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
    ShipmentNoteManualFormComponent.prototype.uploadFile = function (formData) {
        if (!formData) {
            return;
        }
        var apiUrl = this.apiConstant.FILE_UPLOAD_VENDOR;
        var url = this.envUrl.urlAddress + apiUrl;
        return this.http.post(url, formData);
    };
    ShipmentNoteManualFormComponent.prototype.IsSNno = function () {
        var _this = this;
        var obj = {
            BatchId: this.formGroup.get('Batch').value,
            SnNo: this.formGroup.get('SNno').value,
            WarehouseId: this.selectedWarehouse["Id"],
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiUrl = this.apiConstant.CHECK_DUPLICATE_SN;
        this._shipmentNoteServiceService.create(apiUrl, obj)
            .subscribe(function (res) {
            // debugger
            var isExist = res;
            if (isExist) {
                _this.showToastrError("SN# Already Available.");
                _this.formGroup.get('SNno').setValue('');
            }
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
        var sn = this.formGroup.get('SNno').value;
        if (sn != undefined && sn != "") {
            this.formGroup.get('Quantity').setValue(1);
            this.formGroup.get('Quantity').disable();
            this.formGroup.get('isDisabled').setValue(true);
        }
        else {
            this.formGroup.get('isDisabled').setValue(false);
            this.formGroup.get('Quantity').setValue("");
            this.formGroup.get('Quantity').enable();
        }
    };
    ShipmentNoteManualFormComponent.prototype.redirectToCreateItem = function () {
        var _this = this;
        // window.open(this.routesList.ITEM_CREATE, "_blank");
        this.router.navigate([]).then(function (result) { window.open(_this.routesList.ITEM_CREATE, '_blank'); });
    };
    ShipmentNoteManualFormComponent.prototype.refreshItem = function () {
        this.getItemInformationKeyPair(this.CustomerId);
    };
    ShipmentNoteManualFormComponent.prototype.checkDuplicate = function (formValue) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalItemLocation'),
        __metadata("design:type", Object)
    ], ShipmentNoteManualFormComponent.prototype, "modalItemLocation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('servicePicked'),
        __metadata("design:type", Object)
    ], ShipmentNoteManualFormComponent.prototype, "servicePicked", void 0);
    ShipmentNoteManualFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-shipment-note-manual-form",
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/shipment-note-manual/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/shipment-note-manual-form.component.scss */ "./src/app/layout/content/shipment-note-manual/styles/shipment-note-manual-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _services_shipment_note_manual_service__WEBPACK_IMPORTED_MODULE_3__["ShipmentNoteService"], src_app_helpers_services_environment_url_service__WEBPACK_IMPORTED_MODULE_9__["EnvironmentUrlService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], ngb_modal__WEBPACK_IMPORTED_MODULE_7__["ModalManager"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_8__["ExporterService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__["NgxUiLoaderService"]])
    ], ShipmentNoteManualFormComponent);
    return ShipmentNoteManualFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/shipment-note-manual/components/shipment-note-manual-list.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-manual/components/shipment-note-manual-list.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ShipmentNoteManualListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentNoteManualListComponent", function() { return ShipmentNoteManualListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shipment_note_manual_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shipment-note-manual.service */ "./src/app/layout/content/shipment-note-manual/services/shipment-note-manual.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_11__);
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












var ShipmentNoteManualListComponent = /** @class */ (function (_super) {
    __extends(ShipmentNoteManualListComponent, _super);
    function ShipmentNoteManualListComponent(injector, _shipmentNoteService, ngxService, chRef) {
        var _this = _super.call(this, injector) || this;
        _this._shipmentNoteService = _shipmentNoteService;
        _this.ngxService = ngxService;
        _this.chRef = chRef;
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.hideShowList = [];
        return _this;
    }
    ShipmentNoteManualListComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getCustomerKeyPair();
        // this.getAllShipmentNotes();
        for (var i = 0; i < 7; i++) {
            this.hideShowList.push({ status: true });
        }
        this.hideShowList[0].status = false;
        this.hideShowList[1].status = false;
        this.hideShowList[2].status = false;
        this.hideShowList[3].status = false;
        this.hideShowList[4].status = false;
        this.hideShowList[5].status = false;
        this.hideShowList[6].status = false;
    };
    //Excel Conversion
    ShipmentNoteManualListComponent.prototype.exportExcel = function (fileName, table_id, fileHeader) {
        var element = document.getElementById(table_id);
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].table_to_sheet(element);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_append_sheet(wb, ws, fileHeader);
        xlsx__WEBPACK_IMPORTED_MODULE_8__["writeFile"](wb, fileName);
    };
    //PDF Conversion
    ShipmentNoteManualListComponent.prototype.createPdf = function (my_file, table_id) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_10__["default"]({ orientation: "landscape" });
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_11___default()(doc, { html: table_id });
        doc.save(my_file);
    };
    // CSV Converterd
    ShipmentNoteManualListComponent.prototype.downloadCSV = function (data, filename) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"])(blob, filename);
    };
    ShipmentNoteManualListComponent.prototype.HideShow = function (index) {
        var i = Number(index);
        if (this.hideShowList[i].status) {
            this.hideShowList[i].status = false;
        }
        else {
            this.hideShowList[i].status = true;
        }
    };
    ShipmentNoteManualListComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
        ];
        this.addFormControlWithValidations("CustomerId", []);
    };
    ShipmentNoteManualListComponent.prototype.dropdownSettings = function () {
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
    ShipmentNoteManualListComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteManualListComponent.prototype.onDeSelect = function () {
        this.shipmentNoteList = null;
    };
    ShipmentNoteManualListComponent.prototype.customerChange = function (item) {
        var _this = this;
        this.selectedCustomer = {
            Id: item.Value,
            Name: item.Text
        };
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId(),
            CustomerId: item.Value
        };
        var apiAddress = this.apiConstant.SHIPMENT_NOTE_LIST_BY_CUSTOMER;
        this.ngxService.start();
        this._shipmentNoteService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.shipmentNoteList = res;
            console.log(_this.shipmentNoteList);
            _this.chRef.detectChanges();
            // Now you can use jQuery DataTables :
            var table = jquery__WEBPACK_IMPORTED_MODULE_4__('table');
            _this.dataTable = table.DataTable({
                lengthMenu: [500, 1000],
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
    ShipmentNoteManualListComponent.prototype.getAllShipmentNotes = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.SHIPMENT_NOTE_LIST;
        this._shipmentNoteService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.shipmentNoteList = res;
            console.log(_this.shipmentNoteList);
            // Now you can use jQuery DataTables :
            var table = jquery__WEBPACK_IMPORTED_MODULE_4__('table');
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
    ShipmentNoteManualListComponent.prototype.Edit = function (id) {
        var updateUrl = this.routesList.SHIPMENT_NOTE_MANUAL_EDIT + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    ShipmentNoteManualListComponent.prototype.Detail = function (id) {
        var updateUrl = this.routesList.SHIPMENT_NOTE_MANUAL_DETAIL + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    ShipmentNoteManualListComponent.prototype.redirectToCreateShipmentNote = function () {
        this.router.navigate([this.routesList.SHIPMENT_NOTE_MANUAL_CREATE]);
    };
    ShipmentNoteManualListComponent.prototype.delete = function (id) {
        var _this = this;
        debugger;
        //console.log(id);
        debugger;
        if (confirm("Are you sure to delete Complete Shipment Note")) {
            var apiAddress = this.apiConstant.SHIPMENT_NOTE_DELETE + ("/" + id);
            this._shipmentNoteService.delete(apiAddress)
                .subscribe(function (res) {
                _this.deleteStatus = res;
                debugger;
                if (_this.deleteStatus == true) {
                    _this.showToastrSuccess("Shipment Note Delete Successfully");
                    _this.customerChange(_this.selectedCustomer);
                }
                else {
                    _this.showToastrError("Shipment Note Delete Un-Successfull");
                }
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
            this.router.navigate([]);
        }
    };
    ShipmentNoteManualListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-shipment-note-manual-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/shipment-note-manual/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/shipment-note-manual-form.component.scss */ "./src/app/layout/content/shipment-note-manual/styles/shipment-note-manual-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_shipment_note_manual_service__WEBPACK_IMPORTED_MODULE_1__["ShipmentNoteService"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ShipmentNoteManualListComponent);
    return ShipmentNoteManualListComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/shipment-note-manual/services/shipment-note-manual.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-manual/services/shipment-note-manual.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: ShipmentNoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentNoteService", function() { return ShipmentNoteService; });
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


var ShipmentNoteService = /** @class */ (function (_super) {
    __extends(ShipmentNoteService, _super);
    function ShipmentNoteService(injector) {
        return _super.call(this, injector) || this;
    }
    ShipmentNoteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], ShipmentNoteService);
    return ShipmentNoteService;
}(src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]));



/***/ }),

/***/ "./src/app/layout/content/shipment-note-manual/shipment-note-manual.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-manual/shipment-note-manual.module.ts ***!
  \************************************************************************************/
/*! exports provided: ShipmentNoteManualModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentNoteManualModule", function() { return ShipmentNoteManualModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var _services_shipment_note_manual_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/shipment-note-manual.service */ "./src/app/layout/content/shipment-note-manual/services/shipment-note-manual.service.ts");
/* harmony import */ var _components_shipment_note_manual_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shipment-note-manual-form.component */ "./src/app/layout/content/shipment-note-manual/components/shipment-note-manual-form.component.ts");
/* harmony import */ var _components_shipment_note_manual_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shipment-note-manual-list.component */ "./src/app/layout/content/shipment-note-manual/components/shipment-note-manual-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
/* harmony import */ var _components_shipment_note_manual_edit_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shipment-note-manual-edit-form.component */ "./src/app/layout/content/shipment-note-manual/components/shipment-note-manual-edit-form.component.ts");
/* harmony import */ var _components_shipment_note_manual_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shipment-note-manual-detail.component */ "./src/app/layout/content/shipment-note-manual/components/shipment-note-manual-detail.component.ts");
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
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
                component: _components_shipment_note_manual_list_component__WEBPACK_IMPORTED_MODULE_6__["ShipmentNoteManualListComponent"],
            },
            {
                path: "create",
                component: _components_shipment_note_manual_form_component__WEBPACK_IMPORTED_MODULE_5__["ShipmentNoteManualFormComponent"],
            },
            {
                path: "edit/:Id",
                component: _components_shipment_note_manual_edit_form_component__WEBPACK_IMPORTED_MODULE_10__["ShipmentNoteManualEditFormComponent"],
            },
            {
                path: "detail/:Id",
                component: _components_shipment_note_manual_detail_component__WEBPACK_IMPORTED_MODULE_11__["ShipmentNoteManualDetailComponent"],
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var ShipmentNoteManualModule = /** @class */ (function () {
    function ShipmentNoteManualModule() {
    }
    ShipmentNoteManualModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ngb_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_13__["NgxPrintModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_14__["NgxUiLoaderModule"]
            ],
            declarations: [
                _components_shipment_note_manual_form_component__WEBPACK_IMPORTED_MODULE_5__["ShipmentNoteManualFormComponent"], _components_shipment_note_manual_list_component__WEBPACK_IMPORTED_MODULE_6__["ShipmentNoteManualListComponent"], _components_shipment_note_manual_edit_form_component__WEBPACK_IMPORTED_MODULE_10__["ShipmentNoteManualEditFormComponent"],
                _components_shipment_note_manual_detail_component__WEBPACK_IMPORTED_MODULE_11__["ShipmentNoteManualDetailComponent"]
            ],
            providers: [
                _services_shipment_note_manual_service__WEBPACK_IMPORTED_MODULE_4__["ShipmentNoteService"],
                src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_12__["ExporterService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
            ],
            entryComponents: []
        })
    ], ShipmentNoteManualModule);
    return ShipmentNoteManualModule;
}());



/***/ }),

/***/ "./src/app/layout/content/shipment-note-manual/styles/shipment-note-manual-form.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-manual/styles/shipment-note-manual-form.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block {\n  color: red; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: 20px !important;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.toggle-label {\n  margin-top: 10px;\n  margin-right: -10px;\n  color: green;\n  font-size: 15px; }\n\n.shipment-item-add {\n  margin-top: 17px; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n  transition: opacity .15s linear; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n  transition: -webkit-transform .3s ease-out;\n  transition: transform .3s ease-out;\n  transition: transform .3s ease-out, -webkit-transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n  transform: translate(0, -25%); }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; } }\n\n.pallets-dropdown {\n  width: 150px; }\n\n.button {\n  background-color: #27852b;\n  border: none;\n  border-radius: 3px;\n  color: white;\n  padding: 7px 17px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/layout/content/shipment-note-manual/templates/detail.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-manual/templates/detail.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  table {\r\n    display: block;\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n}\r\n</style>\r\n<section class=\"content-header\">\r\n    <h1>\r\n      Shipment Note Detail \r\n      <!-- <small>\r\n        <button class=\"btn-wms\" (click)=\"redirectToCreateShipmentNote()\"><i class=\"fa fa-plus\"></i> New</button>\r\n      </small> -->\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li><a routerLink=\"[this.routesList.SHIPMENT_NOTE_MANUAL_LISTING]\">ASN Listing</a></li>\r\n      <li class=\"active\">Listing</li>\r\n    </ol>\r\n  </section>\r\n  \r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n          \r\n            <div class=\"form-group  pull-right\">\r\n              <button type=\"button\" (click)=\"redirectToListShipmentNote()\" class=\"btn-wms\">ASN Listing</button>\r\n            </div>\r\n            <h3>ASN Detail</h3>\r\n          </div>\r\n      \r\n          <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"updateASN()\">\r\n\r\n         \r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n           \r\n            <!-- <div class=\"col-md-6\">\r\n                <div class=\"box-body box-profile\">\r\n                    <ul class=\"list-group list-group-unbordered\">\r\n                        <li class=\"list-group-item\">\r\n                            <b>Customer</b><a class=\"pull-right\">{{shipmentNote.CustomerName}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>ASN Id</b><a class=\"pull-right\">{{shipmentNote.ShipmentNoteId}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Shipment Note No</b><a class=\"pull-right\">{{shipmentNote.ShipmentNoteNo}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>ASN No.</b><a class=\"pull-right\">{{shipmentNote.ASNNo}}</a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>             \r\n            </div> -->\r\n\r\n            <!-- <div class=\"col-md-6\">\r\n                <div class=\"box-body box-profile\">\r\n                    <ul class=\"list-group list-group-unbordered\">\r\n                        <li class=\"list-group-item\">\r\n                            <b>Warehouse</b><a class=\"pull-right\">{{shipmentNote.WarehouseName}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>ASN Date</b><a class=\"pull-right\">{{shipmentNote.ASNDate | date}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Delivery No</b><a class=\"pull-right\">{{shipmentNote.DeliveryNo}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Cargo Status</b><a class=\"pull-right\">{{shipmentNote.CargoStatus}}</a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>             \r\n            </div> -->\r\n\r\n            <div class=\"col-md-6\">\r\n              <div class=\"box-body box-profile\">\r\n                  <ul class=\"list-group list-group-unbordered\">\r\n                      <li class=\"list-group-item\">\r\n                          <b>Business Type</b><a class=\"pull-right\">{{shipmentNote.BusinessType}}</a>\r\n                      </li>\r\n                      <li class=\"list-group-item\">\r\n                          <b>Handler Name</b><a class=\"pull-right\">{{shipmentNote.HandlerName}}</a>\r\n                      </li>\r\n                      <li class=\"list-group-item\">\r\n                          <b>Inbound Pool</b><a class=\"pull-right\">{{shipmentNote.InboundPool}}</a>\r\n                      </li>\r\n                      <li class=\"list-group-item\">\r\n                          <b>Network</b><a class=\"pull-right\">{{shipmentNote.Network}}</a>\r\n                      </li>\r\n\r\n                  </ul>\r\n              </div>             \r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n            <div class=\"box-body box-profile\">\r\n                <ul class=\"list-group list-group-unbordered\">\r\n                    <li class=\"list-group-item\">\r\n                        <b>Packing List No</b><a class=\"pull-right\">{{shipmentNote.PackingListNo}}</a>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <b>Received Station</b><a class=\"pull-right\">{{shipmentNote.ReceivedStation}}</a>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <b>Contract No</b><a class=\"pull-right\">{{shipmentNote.ContractNo}}</a>\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <b>Delivery Type</b><a class=\"pull-right\">{{shipmentNote.DeliveryType}}</a>\r\n                    </li>\r\n\r\n                </ul>\r\n            </div>             \r\n        </div>\r\n            \r\n           \r\n            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 table-responsive\">\r\n                  <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <!-- <th>\r\n                          SKU \r\n                        </th> -->\r\n                        <th>\r\n                          SKU Name\r\n                        </th>\r\n                        <th>\r\n                          SKU CBM\r\n                        </th>\r\n                        <th>\r\n                          Batch / Serial\r\n                        </th>\r\n                        <th>\r\n                          SN #\r\n                        </th>\r\n                        <th>\r\n                          PR #\r\n                        </th>\r\n                        <th>\r\n                          Status\r\n                        </th>\r\n                        <th>\r\n                          Mfg Date\r\n                        </th> \r\n                       \r\n                        <th>\r\n                         Expiry Date\r\n                        </th>\r\n                        <th>\r\n                           Quantity\r\n                        </th>\r\n                        <th>\r\n                            No of Boxes\r\n                         </th>\r\n                         <th>GatePass</th>\r\n                         <th>ServiceRequest</th>\r\n                         <th>RMA</th>\r\n                         <th>RecievedFrom</th>\r\n                         <th>ConsignmentNo</th>\r\n                         <th>ICare</th>\r\n\r\n                          <th>Business Type</th>\r\n                                <th>Handler Name</th>\r\n                                <th>Inbound Pool</th>\r\n                                <th>Network</th>\r\n                                <th>Packing List No</th>\r\n                                <th>Received Station</th>\r\n                                <th>Contract No</th>\r\n                                <th>Delivery Type</th>\r\n                                <th>Inbound Against</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let item of shipmentNote.AML_ShipmentNoteChild\">\r\n                        <!-- <td>{{item.ItemInformationId}}</td> -->\r\n                        <td>{{item.Description}}{{item.ItemName}}</td>\r\n                        <td>{{item.ItemCBM | number:'1.2-2'}}</td>\r\n                        <td>{{item.Batch}}</td>\r\n                        <td>{{item.SNno}}</td>\r\n                        <td>{{item.PRno}}</td>\r\n                        <td>{{item.Status}}</td>\r\n                        <td>{{item.MfgDate | date}}</td>\r\n                        <td>{{item.ExpiryDate | date}}</td>\r\n                        <td>{{item.Quantity}}</td>                                          \r\n                        <td>{{item.NoOfBoxes}}</td>\r\n                        <td>{{item.GatePass}}</td>\r\n                              <td>{{item.ServiceRequest}}</td>\r\n                              <td>{{item.RMA}}</td>\r\n                              <td>{{item.RecievedFrom}}</td>\r\n                              <td>{{item.ConsignmentNo}}</td>\r\n                              <td>{{item.ICare}}</td>\r\n                              <td>{{item.BusinessType}}</td>\r\n                              <td>{{item.HandlerName}}</td>\r\n                              <td>{{item.InboundPool}}</td>\r\n                              <td>{{item.Network}}</td>\r\n                              <td>{{item.PackingListNo}}</td>\r\n                              <td>{{item.ReceivedStation}}</td>\r\n                              <td>{{item.ContractNo}}</td>\r\n                              <td>{{item.DeliveryType}}</td>\r\n                              <td>{{item.InboundAgainst}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n       \r\n            </div>\r\n          </div>\r\n          <!-- /.box-body -->\r\n          <div class=\"box-footer\">\r\n           \r\n          </div>\r\n        </form>\r\n        </div>\r\n        <!-- /.box -->\r\n      </div>\r\n      <!-- /.col -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>"

/***/ }),

/***/ "./src/app/layout/content/shipment-note-manual/templates/edit-form.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-manual/templates/edit-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  table {\r\n    display: block;\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n}\r\n</style>\r\n<section class=\"content-header\">\r\n    <h1>\r\n      SHIPMENT NOTE MANUAL EDIT\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li><a routerLink=\"[this.routesList.SHIPMENT_NOTE_LISTING]\">Shipment note</a></li>\r\n      <li class=\"active\">Create</li>\r\n    </ol>\r\n  </section>\r\n  <section class=\"content\">\r\n    <div col-md-12>\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"updateShipmentNote(formGroup.value)\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group  pull-right\">\r\n              <button type=\"button\" (click)=\"redirectToShipmentNoteList()\" class=\"btn-wms\">Shipment Note Listing</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Customer</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                    [settings]=\"customerDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedCustomer')\"\r\n                    formControlName=\"CustomerId\" (onSelect)=\"onSelect($event,'selectedCustomer')\"\r\n                    [(ngModel)]=\"selectedCustomerInfo\"\r\n                    >\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedCustomer\">\r\n                    Required\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Warehouse</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair\"\r\n                    [settings]=\"warehouseDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedWarehouse')\"\r\n                    formControlName=\"WarehouseId\" \r\n                    (onSelect)=\"onSelect($event,'selectedWarehouse')\"\r\n                    [(ngModel)]=\"selectedWarehouseInfo\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedWarehouse \">\r\n                    Required\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                 \r\n               \r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <label>Shipment Note Reference</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter Shipment Note No\" formControlName=\"ShipmentNoteNo\">\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Cargo Status</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter Cargo Status\" formControlName=\"CargoStatus\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.CargoStatus.invalid\">\r\n                    {{getErrorMessage('CargoStatus')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>ASN No</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter ASN No\" formControlName=\"ASNNo\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ASNNo.invalid\">\r\n                    {{getErrorMessage('ASNNo')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n           \r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>ASN Date</label>\r\n                  <input type=\"date\" formControlName=\"ASNDate\" class=\"form-control\" placeholder=\"Enter ASN Date\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ASNDate.invalid\">\r\n                    {{getErrorMessage('ASNDate')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Delivery No</label>\r\n                  <input type=\"text\" formControlName=\"DeliveryNo\" class=\"form-control\" placeholder=\"Enter Delivery No\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.DeliveryNo.invalid\">\r\n                    {{getErrorMessage('DeliveryNo')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label>Remarks</label>\r\n                    <textarea class=\"form-control\" placeholder=\"Enter Remarks\" formControlName=\"Remarks\"></textarea>\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.Remarks.invalid\">\r\n                      {{getErrorMessage('Remarks')}}\r\n                    </span>\r\n                  </div>\r\n            </div>\r\n          \r\n              <!-- <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Driver Name</label>\r\n                  <input type=\"text\" formControlName=\"DriverName\" class=\"form-control\" placeholder=\"Enter Driver Name\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.DriverName.invalid\">\r\n                    {{getErrorMessage('DriverName')}}\r\n                  </span>\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n  \r\n            <div class=\"col-md-12\">\r\n              <!-- <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Vehicle No</label>\r\n                  <input type=\"text\" formControlName=\"VehicleNo\" class=\"form-control\" placeholder=\"Enter Vehicle No\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.VehicleNo.invalid\">\r\n                    {{getErrorMessage('VehicleNo')}}\r\n                  </span>\r\n                </div>\r\n              </div> -->\r\n             \r\n             \r\n            </div>\r\n            \r\n          </div>\r\n         \r\n        </div>\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group\">\r\n                <h3 class=\"box-title detail-title\">SKU detail</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label>SKU</label>\r\n                    <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"itemKeyPair\"\r\n                      [settings]=\"itemDropdownSettings\" formControlName=\"ItemId\"\r\n                       (onDeSelect)=\"onDeSelect('selectedItem')\"\r\n                      (onSelect)=\"onSelect($event,'selectedItem')\">\r\n                    </ng-multiselect-dropdown>\r\n                    <ngx-ui-loader></ngx-ui-loader>\r\n                    <span class=\"help-block\" *ngIf=\"!this.selectedItem || !this.selectedItem['Id']\">\r\n                      Required\r\n                    </span>\r\n                  </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Item CBM</label>\r\n                <input class=\"form-control\" placeholder=\"CBM\" formControlName=\"CBM\" type=\"number\" disabled>\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.CBM.invalid\">\r\n                  {{getErrorMessage('CBM')}}\r\n                </span>\r\n              </div>\r\n               \r\n            </div>\r\n             \r\n            </div>\r\n              <div class=\"col-md-12\">\r\n                 \r\n                  <div class=\"col-md-2\">\r\n                    <div class=\"form-group\">\r\n                      <label>Quantity</label>\r\n                      <input class=\"form-control\" placeholder=\"Qty\" formControlName=\"Quantity\" type=\"number\">\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.Quantity.invalid\">\r\n                        {{getErrorMessage('Quantity')}}\r\n                      </span>\r\n                    </div>\r\n                     \r\n                  </div>\r\n                  <div class=\"col-md-2\">\r\n                    <div class=\"form-group\">\r\n                      <label>No. Of Box</label>\r\n                      <input class=\"form-control\" placeholder=\"Enter No. Of Box\" formControlName=\"BoxQuantity\" type=\"number\">\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.BoxQuantity.invalid\">\r\n                        {{getErrorMessage('BoxQuantity')}}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label>Batch/Serial</label>\r\n                  <input type=\"text\" formControlName=\"Batch\" class=\"form-control\" placeholder=\"Enter Batch\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Batch.invalid\">\r\n                    {{getErrorMessage('Batch')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label>PR No</label>\r\n                  <input type=\"text\" formControlName=\"PRno\" class=\"form-control\" placeholder=\"Enter PR No\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.PRno.invalid\">\r\n                    {{getErrorMessage('PRno')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label>SN No</label>\r\n                  <input type=\"text\" formControlName=\"SNno\" class=\"form-control\" placeholder=\"Enter SN No\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.SNno.invalid\">\r\n                    {{getErrorMessage('SNno')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                  <label>Status</label>\r\n                  <input type=\"text\" formControlName=\"Status\" class=\"form-control\" placeholder=\"Enter Status\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Status.invalid\">\r\n                    {{getErrorMessage('Status')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n                                        \r\n              </div>\r\n   <!-- bilal s -->\r\n   <div class=\"col-md-12\">\r\n               \r\n    <div class=\"col-md-2\">\r\n      <div class=\"form-group\">\r\n        <label>Gate Pass</label>\r\n        <input class=\"form-control\" placeholder=\"GatePass\" formControlName=\"GatePass\" type=\"text\">\r\n        <span class=\"help-block\" *ngIf=\"formGroup.controls.GatePass.invalid\">\r\n          {{getErrorMessage('GatePass')}}\r\n        </span>\r\n      </div>\r\n       \r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <div class=\"form-group\">\r\n        <label>Service Request</label>\r\n        <input class=\"form-control\" placeholder=\"Enter Service Request\" formControlName=\"ServiceRequest\" type=\"text\">\r\n        <span class=\"help-block\" *ngIf=\"formGroup.controls.ServiceRequest.invalid\">\r\n          {{getErrorMessage('ServiceRequest')}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n<div class=\"col-md-2\">\r\n  <div class=\"form-group\">\r\n    <label>RMA</label>\r\n    <input type=\"text\" formControlName=\"RMA\" class=\"form-control\" placeholder=\"Enter RMA\">\r\n    <span class=\"help-block\" *ngIf=\"formGroup.controls.RMA.invalid\">\r\n      {{getErrorMessage('RMA')}}\r\n    </span>\r\n  </div>\r\n</div>\r\n<div class=\"col-md-2\">\r\n  <div class=\"form-group\">\r\n    <label>Recieved From</label>\r\n    <input type=\"text\" formControlName=\"RecievedFrom\" class=\"form-control\" placeholder=\"Enter Recieved From\">\r\n    <span class=\"help-block\" *ngIf=\"formGroup.controls.RecievedFrom.invalid\">\r\n      {{getErrorMessage('RecievedFrom')}}\r\n    </span>\r\n  </div>\r\n</div>\r\n<div class=\"col-md-2\">\r\n  <div class=\"form-group\">\r\n    <label>Consignment No</label>\r\n    <input type=\"text\" formControlName=\"ConsignmentNo\" class=\"form-control\" placeholder=\"Enter Consignment No\">\r\n    <span class=\"help-block\" *ngIf=\"formGroup.controls.ConsignmentNo.invalid\">\r\n      {{getErrorMessage('ConsignmentNo')}}\r\n    </span>\r\n  </div>\r\n</div>\r\n<div class=\"col-md-2\">\r\n  <div class=\"form-group\">\r\n    <label>ICare</label>\r\n    <input type=\"text\" formControlName=\"ICare\" class=\"form-control\" placeholder=\"Enter ICare\">\r\n    <span class=\"help-block\" *ngIf=\"formGroup.controls.ICare.invalid\">\r\n      {{getErrorMessage('ICare')}}\r\n    </span>\r\n  </div>\r\n</div>\r\n                          \r\n</div>\r\n<div class=\"col-md-12\">\r\n  <div class=\"col-md-2\">\r\n    <label>Business Type</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Business Type\" formControlName=\"BusinessType\">\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n    <div class=\"form-group\">\r\n      <label>Inbound Pool</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Inbound Pool\" formControlName=\"InboundPool\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n    <div class=\"form-group\">\r\n      <label>Network</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Network\" formControlName=\"Network\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-2\">\r\n    <label>Delivery Type</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Delivery Type\" formControlName=\"DeliveryType\">\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n    <div class=\"form-group\">\r\n      <label>Received Station</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Received Station\" formControlName=\"ReceivedStation\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n    <div class=\"form-group\">\r\n      <label>Contract No</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Contract No\" formControlName=\"ContractNo\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"col-md-12\">\r\n  <div class=\"col-md-2\">\r\n    <label>Packing List No</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Packing List No\" formControlName=\"PackingListNo\">\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n    <div class=\"form-group\">\r\n      <label>Inbound Against</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Inbound Against\" formControlName=\"InboundAgainst\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n    <div class=\"form-group\">\r\n      <label>Handler Name</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Handler Name\" formControlName=\"HandlerName\">\r\n    </div>\r\n  </div>\r\n</div>\r\n  <!-- bilal e -->\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"col-md-2\">\r\n                    <div class=\"form-group\">\r\n                      <label>Mfg Date</label>\r\n                      <input type=\"date\" formControlName=\"MFGDate\" class=\"form-control\" placeholder=\"Enter MFG Date\">\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.MFGDate.invalid\">\r\n                        {{getErrorMessage('MFGDate')}}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-2\">\r\n                    <div class=\"form-group\">\r\n                      <label>Expiry Date</label>\r\n                      <input type=\"date\" formControlName=\"EXPDate\" class=\"form-control\" placeholder=\"Enter Expiry Date\" (blur)=\"CheckDate()\">\r\n                      <span class=\"help-block\" *ngIf=\"formGroup.controls.EXPDate.invalid\">\r\n                        {{getErrorMessage('EXPDate')}}\r\n                      </span>\r\n                    </div>\r\n                    <div>\r\n                      \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group shipment-item-add pull-right\">\r\n                    <button type=\"button\" id=\"add\" class=\"btn btn-sm btn-wms\" (click)=\"addShipmentItemManualy()\">\r\n                      Add\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n  \r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12 table-responsive\">\r\n                          <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                            <thead>\r\n                              <tr role=\"row\">\r\n                                <th style=\"min-width: 5%\">\r\n                                  SKU Id\r\n                                </th>\r\n                                <th>\r\n                                 SKU Name\r\n                                </th>\r\n                                <!-- <th>\r\n                                  Pallet No\r\n                                </th> -->\r\n                                <th>\r\n                                  Batch\r\n                                </th>\r\n                                <th>\r\n                                  PR #\r\n                                </th>\r\n                                <th>\r\n                                  SN #\r\n                                </th>\r\n                                <th>\r\n                                  Status\r\n                                </th>\r\n                                <th>\r\n                                  Quantity\r\n                                </th>\r\n                                <th>\r\n                                  No Of Boxes\r\n                                </th>\r\n                                <!-- <th>\r\n                                  Location\r\n                                </th> -->\r\n                                <th>\r\n                                  Mfg Date\r\n                                </th>\r\n                               \r\n                                <th>\r\n                                  Expiry Date\r\n                                </th>\r\n                               \r\n                                <th>\r\n                                  Total CBM\r\n                                </th>\r\n                                <th>GatePass</th>\r\n                                <th>ServiceRequest</th>\r\n                                <th>RMA</th>\r\n                                <th>RecievedFrom</th>\r\n                                <th>ConsignmentNo</th>\r\n                                <th>ICare</th>\r\n                                <th>Business Type</th>\r\n                                <th>Inbound Pool</th>\r\n                                <th>Network</th>\r\n                                <th>Delivery Type</th>\r\n                                <th>Received Station</th>\r\n                                <th>Contract No</th>\r\n                                <th>Packing List No</th>\r\n                                <th>Inbound Against</th>\r\n                                <th>Handler Name</th>\r\n                                <th>\r\n                                    Actions\r\n                                  </th> \r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                              <tr role=\"row\" *ngFor=\"let shipment of shipmentListToPost\">\r\n                                <td>{{shipment.ItemInformationId}}</td>\r\n                                <td>{{shipment.Name}}</td>\r\n                                <!-- <td>{{shipment.PalletNo}}</td> -->\r\n                                <td>{{shipment.Batch}}</td>\r\n                                <td>{{shipment.PRno}}</td>\r\n                                <td>{{shipment.SNno}}</td>\r\n                                <td>{{shipment.Status}}</td>\r\n                                <td>{{shipment.Quantity}}</td>\r\n                                <td>{{shipment.NoOfBoxes}}</td>\r\n                                <!-- <td>{{shipment.Location}}</td> -->\r\n                                <td>{{shipment.MfgDate | date}}</td>\r\n                                <td>{{shipment.ExpiryDate | date}}</td>\r\n                                \r\n                                <td>{{shipment.TotalCBM}}</td>\r\n                                <td>{{shipment.GatePass}}</td>\r\n                                <td>{{shipment.ServiceRequest}}</td>\r\n                                <td>{{shipment.RMA}}</td>\r\n                                <td>{{shipment.RecievedFrom}}</td>\r\n                                <td>{{shipment.ConsignmentNo}}</td>\r\n                                <td>{{shipment.ICare}}</td>\r\n\r\n                                <td>{{shipment.BusinessType}}</td>\r\n                                <td>{{shipment.InboundPool}}</td>\r\n                                <td>{{shipment.Network}}</td>\r\n                                <td>{{shipment.DeliveryType}}</td>\r\n                                <td>{{shipment.ReceivedStation}}</td>\r\n                                <td>{{shipment.ContractNo}}</td>\r\n                                <td>{{shipment.PackingListNo}}</td>\r\n                                <td>{{shipment.InboundAgainst}}</td>\r\n                                <td>{{shipment.HandlerName}}</td>\r\n                                <td>\r\n                                    <button type=\"button\" class=\"btn btn-sm btn-danger\"\r\n                                      (click)=\"deleteFromShipmentListManual(shipment)\"><i class=\"fa fa-trash\"></i></button>\r\n                                  </td> \r\n                              </tr>\r\n                            </tbody>  \r\n                          </table>\r\n                        </div>\r\n                      </div>\r\n                </div>\r\n               \r\n          </div>\r\n          <div class=\"box-footer\">\r\n              <button type=\"submit\" [disabled]=\"formGroup.invalid || shipmentListToPost.length <=0\" class=\"btn btn-success pull-right\">Update Shipment</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </section>\r\n  <!-- Modal Item shipment location -->\r\n  <modal #modalItemLocation>\r\n  <modal-header>\r\n      <div class=\"box-header\">\r\n          <div class=\"form-group\">\r\n              <h3 class=\"box-title detail-title\">\r\n                {{this.selectedWarehouse.Name}}\r\n              </h3>\r\n          </div>\r\n        </div>\r\n  </modal-header>\r\n  \r\n  <modal-content>\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n              <thead>\r\n                <tr role=\"row\">\r\n                  <th>\r\n                    Chamber Aisle\r\n                  </th>\r\n                  <th>\r\n                    Chamber Rack\r\n                  </th>\r\n                  <th>\r\n                    Chamber Bay\r\n                  </th>\r\n                  <th>\r\n                    Location\r\n                  </th>\r\n                  <th>\r\n                    Vacant Quantity\r\n                  </th>\r\n                  \r\n                  <th>\r\n                    Quantity\r\n                  </th>\r\n                  <th class=\"pallets-dropdown\">\r\n                      Pallet\r\n                    </th>\r\n                    <th>\r\n                        No Of Boxes\r\n                      </th>\r\n                    <th>\r\n                        No Of Pallets\r\n                      </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr role=\"row\" *ngFor=\"let godwom of shelfListForShipment\">\r\n                  <td>{{godwom.godownRow.Name}} | {{godwom.godownRow.Alias}}</td>\r\n                  <td>{{godwom.godownRack.Name}} | {{godwom.godownRack.Alias}}</td>\r\n                  <td>{{godwom.godownShelf.Name}} | {{godwom.godownShelf.Alias}}</td>\r\n                  <td>{{godwom.Location}}</td>\r\n                  <td>{{godwom.vacantQuantity}}</td>\r\n                  <td><input (blur)=\"QuantityChange($event,godwom.vacantQuantity,godwom.Location)\" value=\"{{godwom.Quantity}}\" type=\"text\" class=\"form-control\"></td>\r\n                  <td>\r\n                    <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"palletKeyPair\" [settings]=\"palletDropdownSettings\"\r\n                        (onDeSelect)=\"palletDeSelect(godwom.Location)\"\r\n                      (onSelect)=\"palletSelect($event,godwom.Location,0)\">\r\n                    </ng-multiselect-dropdown>\r\n                  </td>\r\n                  <td>{{godwom.NoOfBoxes}}</td>\r\n                  <td>{{godwom.NoOfPallets}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n  </modal-content>\r\n  \r\n  <modal-footer>\r\n      <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"cancelItemLocationModal()\">Cancel</button>\r\n          <button type=\"button\" class=\"btn btn-wms\" (click)=\"addShipmentItem()\">Save</button>\r\n        </div>\r\n  </modal-footer>\r\n  </modal>"

/***/ }),

/***/ "./src/app/layout/content/shipment-note-manual/templates/form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-manual/templates/form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  table {\r\n    display: block;\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n  }\r\n\r\n  tr.border_bottom td {\r\n    border-bottom: 1px solid red;\r\n  }\r\n</style>\r\n\r\n<section class=\"content-header\">\r\n  <h1>\r\n    SHIPMENT NOTE MANUAL CREATE\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.SHIPMENT_NOTE_LISTING]\">Shipment Note</a></li>\r\n    <li class=\"active\">Create</li>\r\n  </ol>\r\n</section>\r\n<section class=\"content\">\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate >\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group  pull-right\">\r\n            <button type=\"button\" (click)=\"redirectToShipmentNoteList()\" class=\"btn-wms\">Shipment Note Listing</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Customer</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                  [settings]=\"customerDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedCustomer')\"\r\n                  formControlName=\"CustomerId\" (onSelect)=\"onSelect($event,'selectedCustomer')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Warehouse</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair\"\r\n                  [settings]=\"warehouseDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedWarehouse')\"\r\n                  formControlName=\"WarehouseId\" (onSelect)=\"onSelect($event,'selectedWarehouse')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedWarehouse || !this.selectedWarehouse['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>PO / Material#</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter PO / Material No\" formControlName=\"ASNNo\" (blur)=\"ASNDuplicateChk()\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ASNNo.invalid\">\r\n                  {{getErrorMessage('ASNNo')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                <label>Shipment Date</label>\r\n                <input type=\"date\" formControlName=\"ASNDate\" class=\"form-control\" placeholder=\"Enter ASN Date\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ASNDate.invalid\">\r\n                  {{getErrorMessage('ASNDate')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col col-lg-12\">\r\n            <!-- <div class=\"col col-lg-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"TempOut\">Temperature In</label>\r\n                <input type=\"text\" id=\"TempIn\" formControlName=\"TempIn\" #TempIn class=\"form-control\"\r\n                  placeholder=\"Enter Temperature In\">\r\n              </div>\r\n            </div> -->\r\n\r\n            <!-- <div class=\"col col-lg-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"TempOut\">Temperature Out</label>\r\n                <input type=\"text\" id=\"TempOut\" formControlName=\"TempOut\" #TempOut class=\"form-control\"\r\n                  placeholder=\"Enter Temperature Out\">\r\n              </div>\r\n            </div> -->\r\n            <div class=\"col col-lg-3\">\r\n              <div class=\"form-group\">\r\n                <label>Vehicle Receiving Date-Time</label>\r\n                <input type=\"datetime-local\" formControlName=\"ReceiveDate\" #ReceiveDate class=\"form-control\"\r\n                  (change)=\"ReceivingDateChange($event)\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ReceiveDate.invalid\">\r\n                  {{getErrorMessage('ReceiveDate')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-lg-3\">\r\n              <div class=\"form-group\">\r\n                <label>Select Parking Stage</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"parkingStageKeyPair\"\r\n                  [settings]=\"parkingStageDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedParkingStage')\"\r\n                  formControlName=\"ParkingStageId\" (onSelect)=\"parkingStageChange($event)\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ParkingStageId.invalid\">\r\n                  {{getErrorMessage('ParkingStageId')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-lg-3\">\r\n              <div class=\"form-group\">\r\n                <label>Off Load Start Date-Time</label>\r\n                <input type=\"datetime-local\" formControlname=\"OffLoadStartDate\" #OffLoadStartDate class=\"form-control\" \r\n                (change)=\"OffLoadStartDateChange($event)\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.OffLoadStartDate.invalid\">\r\n                  {{getErrorMessage('OffLoadStartDate')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-lg-3\">\r\n              <div class=\"form-group\">\r\n                <label>Off Load End Date-Time</label>\r\n                <input type=\"datetime-local\" formControlname=\"OffLoadEndDate\" #OffLoadEndDate \r\n                class=\"form-control\" (change)=\"OffLoadEndDateChange($event)\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.OffLoadEndDate.invalid\">\r\n                  {{getErrorMessage('OffLoadEndDate')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-lg-12\">\r\n            <!--<div class=\"col col-lg-3\">\r\n               <div class=\"form-group\">\r\n                <label for=\"driverName\">Driver Name</label>\r\n                <input type=\"text\" id=\"DriverName\" formControlName=\"DriverName\" class=\"form-control\"\r\n                  placeholder=\"Enter Driver Name\">\r\n              </div>\r\n            </div> -->\r\n            <!-- <div class=\"col col-lg-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"MobileNo\">Mobile No</label>\r\n                <input type=\"text\" id=\"MobileNo\" formControlName=\"MobileNo\" class=\"form-control\"\r\n                  placeholder=\"Enter Mobile No\">\r\n              </div>\r\n            </div> -->\r\n            <div class=\"col col-lg-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"vehicleNo\">Vehicle No</label>\r\n                <input type=\"text\" id=\"VehicleNo\" formControlName=\"VehicleNo\" class=\"form-control\"\r\n                  placeholder=\"Enter Vehicle No\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.VehicleNo.invalid\">\r\n                    {{getErrorMessage('VehicleNo')}}\r\n                  </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-lg-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"VehicleSize\">Vehicle Size</label>\r\n                <input type=\"text\" id=\"VehicleSize\" formControlName=\"VehicleSize\" class=\"form-control\"\r\n                  placeholder=\"Enter Vehicle Size\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.VehicleSize.invalid\">\r\n                    {{getErrorMessage('VehicleSize')}}\r\n                  </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-lg-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"Transporter\">Transporter</label>\r\n                <input type=\"text\" id=\"Transporter\" formControlName=\"Transporter\" class=\"form-control\"\r\n                  placeholder=\"Enter Transporter Name\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Transporter.invalid\">\r\n                    {{getErrorMessage('Transporter')}}\r\n                  </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-lg-3\">\r\n              <div class=\"form-group\">\r\n                <label for=\"SealNo\">Seal#</label>\r\n                <input type=\"text\" id=\"SealNo\" formControlName=\"SealNo\" class=\"form-control\"\r\n                  placeholder=\"Enter Seal#\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.SealNo.invalid\">\r\n                    {{getErrorMessage('SealNo')}}\r\n                  </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-lg-12\">\r\n            \r\n            <div class=\"col col-lg-3\">\r\n              <div class=\"form-group\">\r\n                <label>Reporting Date-Time</label>\r\n                <input type=\"datetime-local\" formControlName=\"ReportingTime\" #ReportingTime\r\n                class=\"form-control\" (change)=\"ReportingTimeChange($event)\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ReportingTime.invalid\">\r\n                    {{getErrorMessage('ReportingTime')}}\r\n                  </span>\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group\">\r\n            <h3 class=\"box-title detail-title\"><b>System Detail</b></h3>\r\n          </div>\r\n          <div>\r\n            <div class=\"pull-right\">\r\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"refreshItem()\">Referesh SKU</button>\r\n            </div>\r\n            <div class=\"pull-left\">\r\n              <a target=\"_blank\" class=\"button\" [routerLink]=\"[this.routesList.ITEM_CREATE]\">Add SKU</a>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label>SKU</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"itemKeyPair\"\r\n                  [settings]=\"itemDropdownSettings\" formControlName=\"ItemId\" (onDeSelect)=\"onDeSelect('selectedItem')\"\r\n                  (onSelect)=\"onSelect($event,'selectedItem')\">\r\n                </ng-multiselect-dropdown>\r\n                <ngx-ui-loader></ngx-ui-loader>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedItem || !this.selectedItem['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Item CBM</label>\r\n                <input class=\"form-control\" placeholder=\"CBM\" formControlName=\"CBM\" type=\"number\" disabled>\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.CBM.invalid\">\r\n                  {{getErrorMessage('CBM')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>MFG Date</label>\r\n                <input type=\"date\" formControlName=\"MFGDate\" class=\"form-control\" (blur)=\"MFGDateChange($event)\"\r\n                  placeholder=\"Enter MFG Date\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.MFGDate.invalid\">\r\n                  {{getErrorMessage('MFGDate')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Expiry Date</label>\r\n                <input type=\"input\" formControlName=\"EXPDate\" readonly class=\"form-control\" value=\"{{ExpiryDate | date:'MM-dd-yyyy'}}\"\r\n                   placeholder=\"Enter Expiry Date\">\r\n                <!-- (blur)=\"CheckDate()\"\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.EXPDate.invalid\">\r\n                    {{getErrorMessage('EXPDate')}}\r\n                  </span> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Quantity</label>\r\n                <input class=\"form-control\" [disabled]=\"formGroup.controls.isDisabled\" placeholder=\"Qty\"\r\n                  formControlName=\"Quantity\" type=\"number\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Quantity.invalid\">\r\n                  {{getErrorMessage('Quantity')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Status</label>\r\n                <input type=\"text\" formControlName=\"Status\" class=\"form-control\" placeholder=\"Enter Status\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Status.invalid\">\r\n                  {{getErrorMessage('Status')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Batch/Serial</label>\r\n                <input type=\"input\" formControlName=\"Batch\" value=\"{{MFGDt | date:'yyMMdd'}}S000\" class=\"form-control\" placeholder=\"Enter Batch\">\r\n                <!-- <span class=\"help-block\" *ngIf=\"formGroup.controls.Batch.invalid\">\r\n                  {{getErrorMessage('Batch')}}\r\n                </span>    -->\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group shipment-item-add pull-right\">\r\n              <button type=\"button\" id=\"add\" class=\"btn btn-sm btn-wms\" (click)=\"addShipmentItemManualy()\">\r\n                Add\r\n              </button>\r\n            </div>\r\n            <!-- <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>PR No</label>\r\n                <input type=\"text\" formControlName=\"PRno\" class=\"form-control\" placeholder=\"Enter PR No\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.PRno.invalid\">\r\n                  {{getErrorMessage('PRno')}}\r\n                </span>\r\n              </div>\r\n            </div> -->\r\n            <!-- <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>SN#</label>\r\n                <input type=\"text\" formControlName=\"SNno\" class=\"form-control\"\r\n                  placeholder=\"Enter SN No\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.SNno.invalid\">\r\n                  {{getErrorMessage('SNno')}}\r\n                </span>\r\n              </div>\r\n            </div> -->\r\n\r\n\r\n          </div>\r\n          <!-- bilal s -->\r\n          <!-- <div class=\"col-md-12\"> -->\r\n\r\n            <!-- <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>LOT#</label>\r\n                <input type=\"text\" formControlName=\"RMA\" class=\"form-control\" placeholder=\"Enter LOT#\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.RMA.invalid\">\r\n                  {{getErrorMessage('RMA')}}\r\n                </span>\r\n              </div>\r\n            </div> -->\r\n            <!-- <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Recieved From</label>\r\n                <input type=\"text\" formControlName=\"RecievedFrom\" class=\"form-control\"\r\n                  placeholder=\"Enter Recieved From\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.RecievedFrom.invalid\">\r\n                  {{getErrorMessage('RecievedFrom')}}\r\n                </span>\r\n              </div>\r\n            </div> -->\r\n            <!-- <div class=\"col-md-2\">\r\n            <div class=\"form-group\">\r\n              <label>Consignment No</label>\r\n              <input type=\"text\" formControlName=\"ConsignmentNo\" class=\"form-control\" placeholder=\"Enter Consignment No\">\r\n              <span class=\"help-block\" *ngIf=\"formGroup.controls.ConsignmentNo.invalid\">\r\n                {{getErrorMessage('ConsignmentNo')}}\r\n              </span>\r\n            </div>\r\n          </div> -->\r\n            <!-- <div class=\"col-md-2\">\r\n              <label>Packing List No</label>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Packing List No\"\r\n                formControlName=\"PackingListNo\">\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Handler Name</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Handler Name\" formControlName=\"HandlerName\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Received Station</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Received Station\"\r\n                  formControlName=\"ReceivedStation\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Contract No</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Contract No\" formControlName=\"ContractNo\">\r\n              </div>\r\n            </div> -->\r\n\r\n          <!-- </div> -->\r\n          <!-- bilal e -->\r\n\r\n\r\n          <div class=\"col-md-12\">\r\n            <!-- <div class=\"col-md-2\">\r\n              <label>Business Type</label>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Business Type\" formControlName=\"BusinessType\">\r\n            </div> -->\r\n            <!-- <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Inbound Pool</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Inbound Pool\" formControlName=\"InboundPool\">\r\n              </div>\r\n            </div> -->\r\n            <!-- <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Network</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Network\" formControlName=\"Network\">\r\n              </div>\r\n            </div> -->\r\n\r\n            <!-- <div class=\"col-md-2\">\r\n              <label>Delivery Type</label>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Delivery Type\" formControlName=\"DeliveryType\">\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <label>Gate Pass</label>\r\n                <input class=\"form-control\" placeholder=\"GatePass\" formControlName=\"GatePass\" type=\"text\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.GatePass.invalid\">\r\n                  {{getErrorMessage('GatePass')}}\r\n                </span>\r\n              </div>\r\n\r\n            </div>-->\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\">\r\n                <nav>\r\n                  <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 30%;\r\n                              background-color: #6c757d;\">\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"downloadCSV(this.shelfListForShipment, 'shipment-note-manual-form-list.csv')\"\r\n                        style=\"color: white;\">\r\n                        Download CSV</a>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"exportExcel('shipment-note-manual-form-list.xlsx', 'tbl', 'Shipment Note Manual Form List')\"\r\n                        style=\"color: white;\">\r\n                        Download Excel</a>\r\n                    </li>\r\n                  </ol>\r\n                </nav>\r\n                <table class=\"table table-bordered table-hover dataTable \" role=\"grid\" id=\"tbl\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th style=\"width:8%\">System ID</th>\r\n                      <!-- <th style=\"width:8%\">SKU Code</th> -->\r\n                      <th style=\"width:30%\">SKU Name</th>\r\n                      <th  style=\"width:12%\">Mfg Date</th>\r\n                      <th  style=\"width:12%\">Expiry Date</th>\r\n                      <th style=\"width:10%\">Batch</th>\r\n                      <!-- <th>PR #</th>\r\n                      <th>SN #</th> -->\r\n                      <th style=\"width:10%\">Status</th>\r\n                      <th style=\"width:12%\">Quantity</th>\r\n                      <!-- <th>No Of Boxes</th> -->\r\n                      <th style=\"width:10%\">Total CBM</th>\r\n                      <!-- <th>GatePass</th> -->\r\n                      <!-- <th>ServiceRequest</th> -->\r\n                      <!-- <th>LOT#</th> -->\r\n                      <!-- <th>RecievedFrom</th> -->\r\n                      <!-- <th>ConsignmentNo</th> -->\r\n                      <!-- <th>ICare</th> -->\r\n                      <!-- <th>Business Type</th>\r\n                      <th>Handler Name</th>\r\n                      <th>Inbound Pool</th>\r\n                      <th>Network</th>\r\n                      <th>Packing List No</th>\r\n                      <th>Received Station</th> -->\r\n                      <!-- <th>Contract No</th> -->\r\n                      <!-- <th>Delivery Type</th> -->\r\n                      <th>Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let shipment of shipmentListToPost\"\r\n                      [ngClass]=\"{ 'border_bottom': shipment.ItemInformationId==='0' || shipment.ICare==='1'}\">\r\n                      <td>{{shipment.ItemInformationId}}</td>\r\n                      <!-- <td>{{shipment.SKU}}</td> -->\r\n                      <td>{{shipment.Name}}</td>\r\n                      <td>{{shipment.MfgDate }}</td>\r\n                      <td>{{shipment.ExpiryDate }}</td>\r\n                      <!-- <td>{{shipment.PalletNo}}</td> -->\r\n                      <td>{{shipment.Batch}}</td>\r\n                      <!-- <td>{{shipment.PRno}}</td>\r\n                      <td>{{shipment.SNno}}</td> -->\r\n                      <td>{{shipment.Status}}</td>\r\n                      <td>{{shipment.Quantity}}</td>\r\n                      <!-- <td>{{shipment.NoOfBoxes}}</td> -->\r\n                      <!-- <td>{{shipment.Location}}</td> -->\r\n                      <td>{{shipment.TotalCBM}}</td>\r\n                      <!-- <td>{{shipment.GatePass}}</td> -->\r\n                      <!-- <td>{{shipment.ServiceRequest}}</td> -->\r\n                      <!-- <td>{{shipment.RMA}}</td>\r\n                      <td>{{shipment.RecievedFrom}}</td> -->\r\n                      <!-- <td>{{shipment.ConsignmentNo}}</td> -->\r\n                      <!-- <td>{{shipment.ICare}}</td> -->\r\n                      <!-- <td>{{shipment.BusinessType}}</td>\r\n                      <td>{{shipment.HandlerName}}</td>\r\n                      <td>{{shipment.InboundPool}}</td>\r\n                      <td>{{shipment.Network}}</td>\r\n                      <td>{{shipment.PackingListNo}}</td>\r\n                      <td>{{shipment.ReceivedStation}}</td> -->\r\n                      <!-- <td>{{shipment.ContractNo}}</td> -->\r\n                      <!-- <td>{{shipment.DeliveryType}}</td> -->\r\n                      <td>\r\n                        <button type=\"button\" class=\"btn btn-sm btn-danger\"\r\n                          (click)=\"deleteFromShipmentListManual(shipment)\"><i class=\"fa fa-trash\"></i></button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                  <tfoot>\r\n                    <tr>\r\n                      <td colspan=\"5\"></td>\r\n                      <td>TOTAL :</td>\r\n                      <td>{{TotalQty}}</td>\r\n                    </tr>\r\n                  </tfoot>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"box-footer\">\r\n          <div class=\"col-md-2\">\r\n            <button type=\"button\" class=\"btn-genx\" (click)=\"exportServiceAsExcel()\"> Export Format</button>\r\n          </div>\r\n          <!-- <div class=\"col-md-2\">\r\n            <button type=\"button\" class=\"btn-genx\" (click)=\"exportServiceAsCSV()\"> Export as CSV</button>\r\n          </div> -->\r\n          <div class=\"col-md-4\">\r\n            <input type=\"file\" id=\"servicePicked\" #servicePicked (click)=\"message=''\"\r\n              (change)=\"onServicePicked(servicePicked)\">\r\n          </div>\r\n          <button type=\"button\" [disabled]=\"formGroup.invalid || shipmentListToPost.length <=0 || BTN===true\"\r\n            class=\"btn btn-success pull-right\" (click)=\"createShipmentNote(formGroup.value)\">S U B M I T</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n<!-- Modal Item shipment location -->\r\n<!-- <modal #modalItemLocation>\r\n<modal-header>\r\n    <div class=\"box-header\">\r\n        <div class=\"form-group\">\r\n            <h3 class=\"box-title detail-title\">\r\n              {{this.selectedWarehouse.Name}}\r\n            </h3>\r\n        </div>\r\n      </div>\r\n</modal-header>\r\n\r\n<modal-content>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n            <thead>\r\n              <tr role=\"row\">\r\n                <th>Chamber Aisle</th>\r\n                <th>Chamber Rack</th>\r\n                <th>Chamber Bay</th>\r\n                <th>Location</th>\r\n                <th>Vacant Quantity</th>\r\n                <th>Quantity</th>\r\n                <th class=\"pallets-dropdown\">Pallet</th>\r\n                <th>No Of Boxes</th>\r\n                <th>No Of Pallets</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr role=\"row\" *ngFor=\"let godwom of shelfListForShipment\">\r\n                <td>{{godwom.godownRow.Name}} | {{godwom.godownRow.Alias}}</td>\r\n                <td>{{godwom.godownRack.Name}} | {{godwom.godownRack.Alias}}</td>\r\n                <td>{{godwom.godownShelf.Name}} | {{godwom.godownShelf.Alias}}</td>\r\n                <td>{{godwom.Location}}</td>\r\n                <td>{{godwom.vacantQuantity}}</td>\r\n                <td><input (blur)=\"QuantityChange($event,godwom.vacantQuantity,godwom.Location)\" value=\"{{godwom.Quantity}}\" type=\"text\" class=\"form-control\"></td>\r\n                <td>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"palletKeyPair\" [settings]=\"palletDropdownSettings\"\r\n                      (onDeSelect)=\"palletDeSelect(godwom.Location)\"\r\n                    (onSelect)=\"palletSelect($event,godwom.Location,0)\">\r\n                  </ng-multiselect-dropdown>\r\n                </td>\r\n                <td>{{godwom.NoOfBoxes}}</td>\r\n                <td>{{godwom.NoOfPallets}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n</modal-content>\r\n\r\n<modal-footer>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"cancelItemLocationModal()\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-wms\" (click)=\"addShipmentItem()\">Save</button>\r\n      </div>\r\n</modal-footer>\r\n</modal> -->"

/***/ }),

/***/ "./src/app/layout/content/shipment-note-manual/templates/list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-manual/templates/list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    SHIPMENT NOTE MANUAL LISTING\r\n    <small>\r\n      <button class=\"btn-wms\" (click)=\"redirectToCreateShipmentNote()\"><i class=\"fa fa-plus-circle\"></i></button>\r\n    </small>\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.SHIPMENT_NOTE_LISTING]\">Shipment Note</a></li>\r\n    <li class=\"active\">Listing</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate>\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header\">\r\n            <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Customer</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                    [settings]=\"customerDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedCustomer')\"\r\n                    formControlName=\"CustomerId\" (onSelect)=\"customerChange($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                    Required\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 table-responsive\" id=\"myTable\">\r\n                  <nav>\r\n                    <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 58%; \r\n                      background-color: #6c757d;\">\r\n                      <li class=\"breadcrumb-item\">\r\n                        <a (click)=\"downloadCSV(this.shipmentNoteList, 'shipment-note-manual-list.csv')\"\r\n                          style=\"color: white;\">\r\n                          Download CSV</a>\r\n                      </li>\r\n                      <li class=\"breadcrumb-item\">\r\n                        <a (click)=\"exportExcel('shipment-note-manual-list.xlsx', 'tbl', 'Shipment Note Manual List')\"\r\n                          style=\"color: white;\">\r\n                          Download Excel</a>\r\n                      </li>\r\n                      <li class=\"breadcrumb-item\">\r\n                        <a (click)=\"createPdf('shipment-note-manual-list.pdf', '#tbl')\" style=\"color: white;\">Export To\r\n                          PDF</a>\r\n                      </li>\r\n                      <li>\r\n                        <button\r\n                          [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                          class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                          ngxPrint printSectionId=\"myTable\">\r\n                          Print\r\n                        </button>\r\n                      </li>\r\n                      <li class=\"breadcrumb-item dropdown\">\r\n                        <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                          Column Hidden\r\n                        </a>\r\n                        <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                          width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                          <a class=\"dropdown-item\" (click)=\"HideShow('0')\" data-column=\"0\" style=\"color: white;\">\r\n                            Customer Name\r\n                          </a>\r\n                          <a class=\"dropdown-item ml-3\" (click)=\"HideShow('1')\" data-column=\"1\" style=\"color: white;\">\r\n                            ASN No\r\n                          </a>\r\n                          <a class=\"dropdown-item ml-3\" (click)=\"HideShow('2')\" data-column=\"1\" style=\"color: white;\">\r\n                            Warehouse\r\n                          </a>\r\n                          <a class=\"dropdown-item ml-3\" (click)=\"HideShow('3')\" data-column=\"2\" style=\"color: white;\">\r\n                            ASN Ref No\r\n                          </a>\r\n                          <a class=\"dropdown-item\" (click)=\"HideShow('4')\" data-column=\"3\"\r\n                            style=\"color: white; text-align: center\">\r\n                            ASN Date\r\n                          </a>\r\n                          <a class=\"dropdown-item\" (click)=\"HideShow('5')\" data-column=\"0\" style=\"color: white;\">\r\n                            Delivery No\r\n                          </a>\r\n                          <a class=\"dropdown-item ml-3\" (click)=\"HideShow('6')\" data-column=\"1\" style=\"color: white;\">\r\n                            Action\r\n                          </a>\r\n                        </div>\r\n                      </li>\r\n                    </ol>\r\n                  </nav>\r\n                  <table class=\"table table-bordered table-hover dataTable\" role=\"grid\" id=\"tbl\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th *ngIf=\"!hideShowList[0].status\">\r\n                          Customer Name\r\n                        </th>\r\n                        <th *ngIf=\"!hideShowList[1].status\">\r\n                          ASN No\r\n                        </th>\r\n                        <th *ngIf=\"!hideShowList[2].status\">\r\n                          Warehouse\r\n                        </th>\r\n                        <th *ngIf=\"!hideShowList[3].status\">\r\n                          ASN Ref No\r\n                        </th>\r\n                        <th *ngIf=\"!hideShowList[4].status\">\r\n                          ASN Date\r\n                        </th>\r\n                        <th *ngIf=\"!hideShowList[5].status\">\r\n                          Delivery No\r\n                        </th>\r\n                        <!-- <th>\r\n                        Driver Name\r\n                      </th>-->\r\n                        <!-- <th>\r\n                        Receiving Status\r\n                      </th>  -->\r\n                        <th *ngIf=\"!hideShowList[6].status\">\r\n                          Action\r\n                        </th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let godwom of shipmentNoteList\">\r\n                        <td *ngIf=\"!hideShowList[0].status\">{{godwom.Name}}</td>\r\n\r\n                        <td *ngIf=\"!hideShowList[1].status\">{{godwom.ASNNo}}</td>\r\n                        <td *ngIf=\"!hideShowList[2].status\">{{godwom.WarehouseName}}</td>\r\n                        <td *ngIf=\"!hideShowList[3].status\">{{godwom.ShipmentNoteNo}}</td>\r\n                        <td *ngIf=\"!hideShowList[4].status\">{{godwom.ASNDate | date}}</td>\r\n                        <td *ngIf=\"!hideShowList[5].status\">{{godwom.DeliveryNo}}</td>\r\n                        <!-- <td>{{godwom.DriverName}}</td>-->\r\n                        <!-- <td>{{godwom.ParkingStageId}}</td>  -->\r\n                        <td *ngIf=\"!hideShowList[6].status\">\r\n                          <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\"\r\n                            (click)=\"Detail(godwom.ShipmentNoteId)\"><i class=\"fa fa-info\"></i></button>\r\n                          <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\"\r\n                            (click)=\"Edit(godwom.ShipmentNoteId)\"><i class=\"fa fa-edit\"></i></button>\r\n                          <button type=\"button\" id=\"update\"\r\n                            class=\"editBtn btn-danger\" data-toggle=\"tooltip\" data-placement=\"bottom\"\r\n                            title=\"Delete Shipment Note\" (click)=\"delete(godwom.ShipmentNoteId)\"><i\r\n                            style=\"font-size:14px !important\" class=\"fa fa-trash\"></i></button>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <ngx-ui-loader></ngx-ui-loader>\r\n\r\n            </div>\r\n          </div>\r\n          <!-- /.box-body -->\r\n        </div>\r\n      </form>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>"

/***/ })

}]);
//# sourceMappingURL=content-shipment-note-manual-shipment-note-manual-module.js.map