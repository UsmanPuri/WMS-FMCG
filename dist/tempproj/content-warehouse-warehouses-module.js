(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-warehouse-warehouses-module"],{

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

/***/ "./src/app/layout/content/warehouse/components/warehouse-edit-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/content/warehouse/components/warehouse-edit-form.component.ts ***!
  \**************************************************************************************/
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
var warehouse_service_1 = __webpack_require__(/*! ../services/warehouse.service */ "./src/app/layout/content/warehouse/services/warehouse.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var WarehouseEditFormComponent = /** @class */ (function (_super) {
    __extends(WarehouseEditFormComponent, _super);
    function WarehouseEditFormComponent(injector, _warehouseService, activeRoute, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._warehouseService = _warehouseService;
        _this.activeRoute = activeRoute;
        _this.ngxService = ngxService;
        return _this;
    }
    WarehouseEditFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.getWarehouseById();
    };
    WarehouseEditFormComponent.prototype.getWarehouseById = function () {
        var _this = this;
        var warehouseId = this.activeRoute.snapshot.params['Id'];
        if (warehouseId) {
            var customerByIdUrl = this.apiConstant.WAREHOUSE_GET_ONE + ("" + warehouseId);
            this._warehouseService.getData(customerByIdUrl)
                .subscribe(function (res) {
                _this.warehouse = res;
                //   this.getCityKeyPair({Value: this.customer.RegionId}, false);
                //   this.status = this.customer.StatusId == "1" ? true : false;
                //   this.selectedRegionInfo = [{
                //     "Text": this.getRegionNameFromRegionKeyPair(this.customer.RegionId),
                //     "Value": this.customer.RegionId.toString()
                //   }];
                // this.selectedRegionId = this.customer.RegionId;
                _this.formGroup.patchValue({
                    Name: _this.warehouse.Name,
                    Abbreviation: _this.warehouse.Abbrivation,
                    Longitude: _this.warehouse.Longitude,
                    Latitude: _this.warehouse.Latitude,
                    ContactPerson: _this.warehouse.ContactPerson,
                    Address: _this.warehouse.Address,
                    ContactPersonPhone: _this.warehouse.ContactPersonPhone
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
    WarehouseEditFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("Name", requiredValidation);
        this.addFormControlWithValidations("Abbreviation", requiredValidation);
        this.addFormControlWithValidations("Longitude", []);
        this.addFormControlWithValidations("Latitude", []);
        this.addFormControlWithValidations("Address", []);
        this.addFormControlWithValidations("ContactPerson", []);
        this.addFormControlWithValidations("ContactPersonPhone", []);
    };
    WarehouseEditFormComponent.prototype.updateWarehouse = function (formValue) {
        if (this.formGroup.valid) {
            this.executeWarehouseCreation(formValue);
        }
    };
    WarehouseEditFormComponent.prototype.executeWarehouseCreation = function (formValue) {
        var _this = this;
        this.ngxService.start();
        var warehouse = {
            WarehouseId: this.warehouse.WarehouseId,
            Name: formValue.Name,
            Abbrivation: formValue.Abbreviation,
            Longitude: formValue.Longitude,
            Latitude: formValue.Latitude,
            Address: formValue.Address,
            ContactPerson: formValue.ContactPerson,
            ContactPersonPhone: formValue.ContactPersonPhone,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
        };
        var apiUrl = this.apiConstant.WAREHOUSE_UPDATE + ("/" + this.warehouse.WarehouseId);
        this._warehouseService.update(apiUrl, warehouse)
            .subscribe(function (res) {
            _this.showToastrSuccess("Warehouse Updated successfully");
            setTimeout(function () {
                _this.redirectToWarehouseList();
            }, 2000);
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    WarehouseEditFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    WarehouseEditFormComponent.prototype.getErrorMessage = function (formElement) {
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
    WarehouseEditFormComponent.prototype.redirectToWarehouseList = function () {
        this.router.navigate([this.routesList.WAREHOUSE_LISTING]);
    };
    WarehouseEditFormComponent = __decorate([
        core_1.Component({
            selector: "wms-warehouse-edit-form",
            template: __webpack_require__(/*! ../templates/edit-form.component.html */ "./src/app/layout/content/warehouse/templates/edit-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/warehouse-form.component.scss */ "./src/app/layout/content/warehouse/styles/warehouse-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, warehouse_service_1.WarehouseService,
            router_1.ActivatedRoute, ngx_ui_loader_1.NgxUiLoaderService])
    ], WarehouseEditFormComponent);
    return WarehouseEditFormComponent;
}(base_component_1.BaseComponent));
exports.WarehouseEditFormComponent = WarehouseEditFormComponent;


/***/ }),

/***/ "./src/app/layout/content/warehouse/components/warehouse-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/content/warehouse/components/warehouse-form.component.ts ***!
  \*********************************************************************************/
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
var warehouse_service_1 = __webpack_require__(/*! ../services/warehouse.service */ "./src/app/layout/content/warehouse/services/warehouse.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var WarehouseFormComponent = /** @class */ (function (_super) {
    __extends(WarehouseFormComponent, _super);
    function WarehouseFormComponent(injector, _warehouseService, activeRoute) {
        var _this = _super.call(this, injector) || this;
        _this._warehouseService = _warehouseService;
        _this.activeRoute = activeRoute;
        return _this;
    }
    WarehouseFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
    };
    /**
  * The following method is used to add the form validations
  */
    WarehouseFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("Name", requiredValidation);
        this.addFormControlWithValidations("Abbreviation", requiredValidation);
        this.addFormControlWithValidations("Longitude", []);
        this.addFormControlWithValidations("Latitude", []);
        this.addFormControlWithValidations("Address", []);
        this.addFormControlWithValidations("ContactPerson", []);
        this.addFormControlWithValidations("ContactPersonPhone", []);
    };
    WarehouseFormComponent.prototype.createWarehouse = function (formValue) {
        if (this.formGroup.valid) {
            this.executeWarehouseCreation(formValue);
        }
    };
    WarehouseFormComponent.prototype.executeWarehouseCreation = function (formValue) {
        var _this = this;
        var province = {
            Name: formValue.Name,
            Abbrivation: formValue.Abbreviation,
            Longitude: formValue.Longitude,
            Latitude: formValue.Latitude,
            Address: formValue.Address,
            ContactPerson: formValue.ContactPerson,
            ContactPersonPhone: formValue.ContactPersonPhone,
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
        };
        var apiUrl = this.apiConstant.WAREHOUSE_CREATE;
        this._warehouseService.create(apiUrl, province)
            .subscribe(function (res) {
            _this.showToastrSuccess("Warehouse created successfully");
            setTimeout(function () {
                _this.redirectToWarehouseList();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    WarehouseFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    WarehouseFormComponent.prototype.getErrorMessage = function (formElement) {
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
    WarehouseFormComponent.prototype.redirectToWarehouseList = function () {
        this.router.navigate([this.routesList.WAREHOUSE_LISTING]);
    };
    WarehouseFormComponent = __decorate([
        core_1.Component({
            selector: "wms-province-form",
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/warehouse/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/warehouse-form.component.scss */ "./src/app/layout/content/warehouse/styles/warehouse-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, warehouse_service_1.WarehouseService,
            router_1.ActivatedRoute])
    ], WarehouseFormComponent);
    return WarehouseFormComponent;
}(base_component_1.BaseComponent));
exports.WarehouseFormComponent = WarehouseFormComponent;


/***/ }),

/***/ "./src/app/layout/content/warehouse/components/warehouse-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/content/warehouse/components/warehouse-list.component.ts ***!
  \*********************************************************************************/
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
var warehouse_service_1 = __webpack_require__(/*! ../services/warehouse.service */ "./src/app/layout/content/warehouse/services/warehouse.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var WarehouseListComponent = /** @class */ (function (_super) {
    __extends(WarehouseListComponent, _super);
    function WarehouseListComponent(injector, _warehouseService, chRef, exporterService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._warehouseService = _warehouseService;
        _this.chRef = chRef;
        _this.exporterService = exporterService;
        _this.ngxService = ngxService;
        _this.WarehouseListToPost = [];
        return _this;
    }
    WarehouseListComponent.prototype.ngOnInit = function () {
        this.getAllWarehouses();
    };
    WarehouseListComponent.prototype.getAllWarehouses = function () {
        var _this = this;
        this.ngxService.start();
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId()
        };
        var apiAddress = this.apiConstant.WAREHOUSE_LIST;
        this._warehouseService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.warehouseList = res;
            debugger;
            _this.chRef.detectChanges();
            _this.chRef.reattach();
            // Now you can use jQuery DataTables :
            var table = $('table');
            _this.dataTable = table.DataTable({
                lengthMenu: [50, 100, 500],
                "iDisplayLength": 500
            });
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    WarehouseListComponent.prototype.Edit = function (id) {
        var updateUrl = this.routesList.WAREHOUSE_EDIT + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    WarehouseListComponent.prototype.exportServiceAsExcel = function () {
        var _this = this;
        this.warehouseList.forEach(function (element) {
            var warehouseObj = {
                Name: element.Name,
                Abbrevation: element.Abbrivation,
                ContactPerson: element.ContactPerson,
                ContactPersonPhone: element.ContactPersonPhone,
                Longitude: element.Longitude,
                Latitude: element.Latitude,
                Address: element.Address,
            };
            _this.WarehouseListToPost.push(warehouseObj);
        });
        this.exporterService.exportToExcel(this.WarehouseListToPost, 'WarehouseList Data');
        this.WarehouseListToPost = [];
    };
    WarehouseListComponent.prototype.Delete = function (Id) {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            WarehouseId: Id,
            Type: "warehouse"
        };
        var apiUrl = this.apiConstant.WAREHOUSE_DELETE;
        this._warehouseService.create(apiUrl, companyBusinessUnitInfo)
            .subscribe(function (res) {
            //debugger
            var isDeleted = res;
            if (isDeleted) {
                _this.showToastrSuccess('Warehouse deleted successfully');
                _this.getAllWarehouses();
            }
            else {
                _this.showToastrWarning('Warehouse Can not be deleted');
            }
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    WarehouseListComponent.prototype.redirectToCreateWarehouse = function () {
        this.router.navigate([this.routesList.WAREHOUSE_CREATE]);
    };
    WarehouseListComponent = __decorate([
        core_1.Component({
            selector: "wms-warehouse-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/warehouse/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/warehouse-form.component.scss */ "./src/app/layout/content/warehouse/styles/warehouse-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, warehouse_service_1.WarehouseService, core_1.ChangeDetectorRef,
            excel_file_service_1.ExporterService,
            ngx_ui_loader_1.NgxUiLoaderService])
    ], WarehouseListComponent);
    return WarehouseListComponent;
}(base_component_1.BaseComponent));
exports.WarehouseListComponent = WarehouseListComponent;


/***/ }),

/***/ "./src/app/layout/content/warehouse/services/warehouse.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/content/warehouse/services/warehouse.service.ts ***!
  \************************************************************************/
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
var WarehouseService = /** @class */ (function (_super) {
    __extends(WarehouseService, _super);
    function WarehouseService(injector) {
        return _super.call(this, injector) || this;
    }
    WarehouseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], WarehouseService);
    return WarehouseService;
}(repository_service_1.RepositoryService));
exports.WarehouseService = WarehouseService;


/***/ }),

/***/ "./src/app/layout/content/warehouse/styles/warehouse-form.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/content/warehouse/styles/warehouse-form.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block{color:red}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:20px !important;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toggle-label{margin-top:10px;margin-right:-10px;color:green;font-size:15px}\n"

/***/ }),

/***/ "./src/app/layout/content/warehouse/templates/edit-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/content/warehouse/templates/edit-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          WAREHOUSE EDIT\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.WAREHOUSE_LISTING]\">Warehouses</a></li>\r\n          <li class=\"active\">Edit</li>\r\n        </ol>\r\n      </section>\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"updateWarehouse(formGroup.value)\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group  pull-right\">\r\n            <button type=\"button\" (click)=\"redirectToWarehouseList()\" class=\"btn-wms\">Warehouse Listing</button>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Name</label>\r\n                <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter Warehouse name\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                  {{getErrorMessage('Name')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Abberivation</label>\r\n                <input type=\"text\" formControlName=\"Abbreviation\" class=\"form-control input-sm\"\r\n                  placeholder=\"Enter Warehouse abbreviation\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Abbreviation.invalid\">\r\n                  {{getErrorMessage('Abbreviation')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Contact Person</label>\r\n                <input type=\"text\" formControlName=\"ContactPerson\" class=\"form-control input-sm\"\r\n                  placeholder=\"Enter Contact Person\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ContactPerson.invalid\">\r\n                  {{getErrorMessage('ContactPerson')}}\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Contact Person Phone</label>\r\n                <input type=\"text\" formControlName=\"ContactPersonPhone\" class=\"form-control input-sm\"\r\n                  placeholder=\"Enter Contact Person Phone\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ContactPersonPhone.invalid\">\r\n                  {{getErrorMessage('ContactPersonPhone')}}\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Longitude</label>\r\n                <input type=\"text\" formControlName=\"Longitude\" class=\"form-control input-sm\" placeholder=\"Enter Longitude\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Longitude.invalid\">\r\n                  {{getErrorMessage('Longitude')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Latitude</label>\r\n                <input type=\"text\" formControlName=\"Latitude\" class=\"form-control input-sm\" placeholder=\"Enter Latitude\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Latitude.invalid\">\r\n                  {{getErrorMessage('Latitude')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                      <label>Address</label>\r\n                    <textarea placeholder=\"Enter Warehouse address\" class=\"form-control input-sm\" formControlName=\"Address\"></textarea>\r\n                    </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"box-footer\">\r\n          <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Update</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <ngx-ui-loader></ngx-ui-loader>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/layout/content/warehouse/templates/form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/layout/content/warehouse/templates/form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          WAREHOUSE CREATE\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.WAREHOUSE_LISTING]\">Warehouses</a></li>\r\n          <li class=\"active\">Create</li>\r\n        </ol>\r\n      </section>\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createWarehouse(formGroup.value)\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group  pull-right\">\r\n            <button type=\"button\" (click)=\"redirectToWarehouseList()\" class=\"btn-wms\">Warehouse Listing</button>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Name</label>\r\n                <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter Warehouse name\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                  {{getErrorMessage('Name')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Abberivation</label>\r\n                <input type=\"text\" formControlName=\"Abbreviation\" class=\"form-control input-sm\"\r\n                  placeholder=\"Enter Warehouse abbreviation\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Abbreviation.invalid\">\r\n                  {{getErrorMessage('Abbreviation')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Contact Person</label>\r\n                <input type=\"text\" formControlName=\"ContactPerson\" class=\"form-control input-sm\"\r\n                  placeholder=\"Enter Contact Person\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ContactPerson.invalid\">\r\n                  {{getErrorMessage('ContactPerson')}}\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Contact Person Phone</label>\r\n                <input type=\"text\" formControlName=\"ContactPersonPhone\" class=\"form-control input-sm\"\r\n                  placeholder=\"Enter Contact Person Phone\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ContactPersonPhone.invalid\">\r\n                  {{getErrorMessage('ContactPersonPhone')}}\r\n                </span>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Longitude</label>\r\n                <input type=\"text\" formControlName=\"Longitude\" class=\"form-control input-sm\" placeholder=\"Enter Longitude\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Longitude.invalid\">\r\n                  {{getErrorMessage('Longitude')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Latitude</label>\r\n                <input type=\"text\" formControlName=\"Latitude\" class=\"form-control input-sm\" placeholder=\"Enter Latitude\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Latitude.invalid\">\r\n                  {{getErrorMessage('Latitude')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                      <label>Address</label>\r\n                    <textarea placeholder=\"Enter Warehouse address\" class=\"form-control input-sm\" formControlName=\"Address\"></textarea>\r\n                    </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"box-footer\">\r\n          <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Add</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/layout/content/warehouse/templates/list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/layout/content/warehouse/templates/list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          WAREHOUSE LISTING\r\n          <small>\r\n            <button class=\"btn-wms\" (click)=\"redirectToCreateWarehouse()\"><i class=\"fa fa-plus-circle\"></i> </button>\r\n          </small>\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.WAREHOUSE_LISTING]\">Warehouse</a></li>\r\n          <li class=\"active\">Listing</li>\r\n        </ol>\r\n      </section>\r\n      <div class=\"pull-right\">\r\n        <button class=\"btn-excel\" (click)=\"exportServiceAsExcel()\"><i class=\"fa fa-file-excel-o\"></i></button>\r\n      </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-solid\">\r\n        <div class=\"box-header\">\r\n          <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\">\r\n                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th>\r\n                        Sr.\r\n                      </th>\r\n                      <th>\r\n                        Name\r\n                      </th>\r\n                      <th>\r\n                        Abberivation\r\n                      </th>\r\n                      <th>\r\n                          Contact Person\r\n                        </th>\r\n                        <th>\r\n                            Contact Person Phone\r\n                          </th>\r\n                      <th>\r\n                        Longitude\r\n                      </th>\r\n                      <th>\r\n                        Latitude\r\n                      </th>\r\n                      <th>\r\n                        Address\r\n                      </th>\r\n                      <th>\r\n                        Actions\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let warehouse of warehouseList; let i = index\">\r\n                      <td>{{i+1}}</td> \r\n                      <td>{{warehouse.Name}}</td>\r\n                      <td>{{warehouse.Abbrivation}}</td>\r\n                      <td>{{warehouse.ContactPerson}}</td>\r\n                      <td>{{warehouse.ContactPersonPhone}}</td>\r\n                      <td>{{warehouse.Longitude}}</td>\r\n                      <td>{{warehouse.Latitude}}</td>\r\n                      <td>{{warehouse.Address}}</td>\r\n                      <td>\r\n                        <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"Edit(warehouse.WarehouseId)\"><i\r\n                            class=\"fa fa-edit\"></i></button>\r\n                            <button type=\"button\" id=\"delete\" tooltip=\"Delete\" class=\"editBtn btn-danger\" (click)=\"Delete(warehouse.WarehouseId)\"><i class=\"fa fa-trash\"></i></button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <ngx-ui-loader></ngx-ui-loader>\r\n              </div>\r\n            </div>\r\n     \r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>"

/***/ }),

/***/ "./src/app/layout/content/warehouse/warehouses.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/content/warehouse/warehouses.module.ts ***!
  \***************************************************************/
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
var warehouse_service_1 = __webpack_require__(/*! ./services/warehouse.service */ "./src/app/layout/content/warehouse/services/warehouse.service.ts");
var warehouse_form_component_1 = __webpack_require__(/*! ./components/warehouse-form.component */ "./src/app/layout/content/warehouse/components/warehouse-form.component.ts");
var warehouse_list_component_1 = __webpack_require__(/*! ./components/warehouse-list.component */ "./src/app/layout/content/warehouse/components/warehouse-list.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var warehouse_edit_form_component_1 = __webpack_require__(/*! ./components/warehouse-edit-form.component */ "./src/app/layout/content/warehouse/components/warehouse-edit-form.component.ts");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: warehouse_list_component_1.WarehouseListComponent,
            },
            {
                path: "create",
                component: warehouse_form_component_1.WarehouseFormComponent,
            }, {
                path: "edit/:Id",
                component: warehouse_edit_form_component_1.WarehouseEditFormComponent,
            }, {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var WarehousesModule = /** @class */ (function () {
    function WarehousesModule() {
    }
    WarehousesModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule, ngx_toggle_switch_1.UiSwitchModule,
                ngx_ui_loader_1.NgxUiLoaderModule
            ],
            declarations: [
                warehouse_list_component_1.WarehouseListComponent, warehouse_form_component_1.WarehouseFormComponent, warehouse_edit_form_component_1.WarehouseEditFormComponent
            ],
            providers: [
                warehouse_service_1.WarehouseService,
                excel_file_service_1.ExporterService
            ],
            entryComponents: []
        })
    ], WarehousesModule);
    return WarehousesModule;
}());
exports.WarehousesModule = WarehousesModule;


/***/ })

}]);
//# sourceMappingURL=content-warehouse-warehouses-module.js.map