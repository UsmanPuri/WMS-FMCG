(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-item-brands-items-brand-module"],{

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

/***/ "./src/app/layout/content/item-brands/components/brand-edit-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/content/item-brands/components/brand-edit-form.component.ts ***!
  \************************************************************************************/
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
var item_brand_service_1 = __webpack_require__(/*! ../services/item-brand.service */ "./src/app/layout/content/item-brands/services/item-brand.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var BrandEditFormComponent = /** @class */ (function (_super) {
    __extends(BrandEditFormComponent, _super);
    function BrandEditFormComponent(injector, _itemBrandService, activeRoute, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._itemBrandService = _itemBrandService;
        _this.activeRoute = activeRoute;
        _this.ngxService = ngxService;
        _this.customerDropdownSettings = {};
        _this.categoryDropdownSettings = {};
        _this.categoryKeyPair = [];
        _this.categoryTempList = [];
        _this.selectedCustomer = {};
        _this.selectedCategory = {};
        return _this;
    }
    BrandEditFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.getById();
    };
    BrandEditFormComponent.prototype.getById = function () {
        var _this = this;
        var brandId = this.activeRoute.snapshot.params['Id'];
        if (brandId) {
            var customerByIdUrl = this.apiConstant.ITEM_CATEGORY_GET_BY_ID + ("" + brandId);
            this._itemBrandService.getData(customerByIdUrl)
                .subscribe(function (res) {
                _this.brand = res;
                _this.formGroup.patchValue(_this.brand);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    BrandEditFormComponent.prototype.updateBrand = function (formValue) {
        if (this.formGroup.valid) {
            this.executeItemBrandUpdate(formValue);
        }
    };
    BrandEditFormComponent.prototype.executeItemBrandUpdate = function (formValue) {
        var _this = this;
        var brand = {
            Name: formValue.Name,
            Description: formValue.Description,
            ShelfLife: formValue.ShelfLife,
            LastModifiedBy: this.localStorageService.getUserId(),
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiUrl = this.apiConstant.ITEM_CATEGORY_UPDATE + ("/" + this.brand.ItemId);
        this.ngxService.start();
        this._itemBrandService.update(apiUrl, brand)
            .subscribe(function (res) {
            _this.showToastrSuccess("Item Brand Updated successfully");
            setTimeout(function () {
                _this.redirectToItemBrandList();
            }, 2000);
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    /**
  * The following method is used to add the form validations
  */
    BrandEditFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("Name", requiredValidation);
        this.addFormControlWithValidations("Description", []);
        this.addFormControlWithValidations("ItemBrandCode", []);
        this.addFormControlWithValidations("ShelfLife", requiredValidation);
    };
    BrandEditFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    BrandEditFormComponent.prototype.getErrorMessage = function (formElement) {
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
    BrandEditFormComponent.prototype.redirectToItemBrandList = function () {
        this.router.navigate([this.routesList.ITEM_BRAND_LISTING]);
    };
    BrandEditFormComponent = __decorate([
        core_1.Component({
            selector: "wms-brand-edit-form",
            template: __webpack_require__(/*! ../templates/brand-edit-form.component.html */ "./src/app/layout/content/item-brands/templates/brand-edit-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/item-form.component.scss */ "./src/app/layout/content/item-brands/styles/item-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, item_brand_service_1.ItemBrandService,
            router_1.ActivatedRoute, ngx_ui_loader_1.NgxUiLoaderService])
    ], BrandEditFormComponent);
    return BrandEditFormComponent;
}(base_component_1.BaseComponent));
exports.BrandEditFormComponent = BrandEditFormComponent;


/***/ }),

/***/ "./src/app/layout/content/item-brands/components/brand-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/content/item-brands/components/brand-form.component.ts ***!
  \*******************************************************************************/
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
var item_brand_service_1 = __webpack_require__(/*! ../services/item-brand.service */ "./src/app/layout/content/item-brands/services/item-brand.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var environment_url_service_1 = __webpack_require__(/*! src/app/helpers/services/environment-url.service */ "./src/app/helpers/services/environment-url.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var BrandFormComponent = /** @class */ (function (_super) {
    __extends(BrandFormComponent, _super);
    function BrandFormComponent(injector, _itemBrandService, activeRoute, envUrl, http, exporterService) {
        var _this = _super.call(this, injector) || this;
        _this._itemBrandService = _itemBrandService;
        _this.activeRoute = activeRoute;
        _this.envUrl = envUrl;
        _this.http = http;
        _this.exporterService = exporterService;
        _this.customerDropdownSettings = {};
        _this.categoryDropdownSettings = {};
        _this.categoryKeyPair = [];
        _this.categoryTempList = [];
        _this.BrandListToPost = [];
        _this.selectedCustomer = {};
        _this.selectedCategory = {};
        _this.customerItems = [];
        _this.branduCode = [];
        return _this;
    }
    BrandFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getCustomerKeyPair();
    };
    /**
  * The following method is used to add the form validations
  */
    BrandFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("Name", requiredValidation);
        this.addFormControlWithValidations("Description", []);
        this.addFormControlWithValidations("ItemBrandCode", []);
        this.addFormControlWithValidations("ShelfLife", requiredValidation);
    };
    BrandFormComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._itemBrandService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    BrandFormComponent.prototype.customerChange = function (item) {
        var _this = this;
        this.selectedCustomer = {
            Id: item.Value,
            Name: item.Text
        };
        var companyBusinessUnitInfo = {
            CustomerId: item.Value
        };
        var apiAddress = this.apiConstant.ITEM_LIST;
        this._itemBrandService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerItems = res;
            _this.customerItems.forEach(function (element) {
                _this.categoryObjToPushInCategoryKeyPair = {
                    Value: element.ItemId,
                    Text: element.Name,
                    ParentReferenceId: null
                };
                _this.categoryTempList.push(_this.categoryObjToPushInCategoryKeyPair);
            });
            _this.categoryKeyPair = _this.categoryTempList
                .filter(function (x) { return Number(x.Value.substring(4, 6) > 10) && x.Value.substring(7, 15) == "100-1000"; });
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    BrandFormComponent.prototype.categoryChange = function (item) {
        var _this = this;
        debugger;
        this.selectedCategory = {
            Id: item.Value,
            Name: item.Text
        };
        var customerCode = item.Value.substring(0, 3);
        var categoryCode = item.Value.substring(4, 6);
        var brandCount = 0;
        this.branduCode = this.customerItems
            .filter(function (x) { return x.ItemId.substring(0, 3) === customerCode &&
            x.ItemId.substring(4, 6) == categoryCode &&
            x.ItemId.substring(7, 10) != "100" &&
            x.ItemId.substring(11, 15) === "1000"; });
        var newBrandCode = Number(item.Value.substring(7, 10)) + 1;
        //new
        if (this.BrandListToPost.length > 0) {
            debugger;
            this.BrandListToPost.forEach(function (element, index) {
                if (index == 0) {
                    //element["ItemId"] = code
                    _this.BrandListToPost[index].ItemId = customerCode + "-" + categoryCode + "-" + (brandCount + 1 + 100) + "-" + "1000";
                }
                else {
                    var cod = _this.BrandListToPost[index - 1].ItemId.substring(7, 10);
                    _this.BrandListToPost[index].ItemId = customerCode + "-" + categoryCode + "-" + (Number(cod) + 1) + "-" + "1000";
                }
            });
        }
        else
            var brandLength = this.branduCode.length;
        this.branduCodeLastVal = this.branduCode[brandLength - 1].ItemId.substring(7, 10);
        {
            this.formGroup.get("ItemBrandCode").setValue(customerCode + "-" + categoryCode + "-" + (Number(this.branduCodeLastVal) + 1) + "-" + "1000");
        }
        //new
    };
    BrandFormComponent.prototype.createBrandLIST = function () {
        var _this = this;
        if (this.formGroup.valid) {
            if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
                this.showToastrWarning("Select Customer please.");
                return false;
            }
            if (!this.selectedCategory || !this.selectedCategory["Id"]) {
                this.showToastrWarning("Select Category please.");
                return false;
            }
            //this.executeBrandCreation(formValue);
        }
        var godwom = {
            // Name: formValue.Name,
            // ItemId:this.formGroup.get("ItemCategoryCode").value,
            // Description: formValue.Description,
            list: this.BrandListToPost,
            CustomerId: this.selectedCustomer["Id"],
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
        };
        var apiUrl = this.apiConstant.ITEM_CATEGORY_CREATE_LIST;
        this._itemBrandService.create(apiUrl, godwom)
            .subscribe(function (res) {
            _this.showToastrSuccess("Item Category created successfully");
            setTimeout(function () {
                _this.redirectToItemBrandList();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    BrandFormComponent.prototype.createBrand = function (formValue) {
        if (this.formGroup.valid) {
            if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
                this.showToastrWarning("Select Customer please.");
                return false;
            }
            if (!this.selectedCategory || !this.selectedCategory["Id"]) {
                this.showToastrWarning("Select Category please.");
                return false;
            }
            this.executeBrandCreation(formValue);
        }
    };
    BrandFormComponent.prototype.executeBrandCreation = function (formValue) {
        var _this = this;
        var godwom = {
            Name: formValue.Name,
            Description: formValue.Description,
            ShelfLife: formValue.ShelfLife,
            ItemId: this.formGroup.get("ItemBrandCode").value,
            CustomerId: this.selectedCustomer["Id"],
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
        };
        var apiUrl = this.apiConstant.ITEM_CATEGORY_CREATE;
        this._itemBrandService.create(apiUrl, godwom)
            .subscribe(function (res) {
            _this.showToastrSuccess("Brand created successfully");
            setTimeout(function () {
                _this.redirectToItemBrandList();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    BrandFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    BrandFormComponent.prototype.dropdownSettings = function () {
        this.customerDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.categoryDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
    };
    BrandFormComponent.prototype.onCategoryDeSelect = function (item) {
        this.selectedCategory = {};
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    BrandFormComponent.prototype.getErrorMessage = function (formElement) {
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
    BrandFormComponent.prototype.redirectToItemBrandList = function () {
        this.router.navigate([this.routesList.ITEM_BRAND_LISTING]);
    };
    BrandFormComponent.prototype.exportServiceAsExcel = function () {
        debugger;
        this.BrandListToPost.push({
            Name: '',
            Description: '',
            ItemId: ''
        });
        this.exporterService.exportToExcel(this.BrandListToPost, 'BrandList Data');
        this.BrandListToPost = [];
    };
    BrandFormComponent.prototype.onServicePicked = function () {
        var _this = this;
        debugger;
        var formData = new FormData();
        formData.append('ContractId', this.selectedCustomer.toString());
        formData.append('CustomerId', this.selectedCustomer.toString());
        formData.append('file', this.servicePicked.nativeElement.files[0]);
        if (formData) {
            this.uploadFile(formData)
                .subscribe(function (msg) {
                _this.BrandListToPost = msg;
                //  this.CatListToPost.forEach(element =>{
                //   if(element.ItemInformationId==="0")
                //   {
                //       this.BTN = true;
                //   }
                //  })
                // this.fleetServiceList = null;
                debugger;
                console.log(_this.BrandListToPost);
            });
        }
    };
    BrandFormComponent.prototype.uploadFile = function (formData) {
        if (!formData) {
            return;
        }
        var apiUrl = this.apiConstant.FILE_UPLOAD_ItemBrand;
        var url = this.envUrl.urlAddress + apiUrl;
        return this.http.post(url, formData);
    };
    __decorate([
        core_1.ViewChild('servicePicked'),
        __metadata("design:type", Object)
    ], BrandFormComponent.prototype, "servicePicked", void 0);
    BrandFormComponent = __decorate([
        core_1.Component({
            selector: "wms-brand-form",
            template: __webpack_require__(/*! ../templates/brand-form.component.html */ "./src/app/layout/content/item-brands/templates/brand-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/item-form.component.scss */ "./src/app/layout/content/item-brands/styles/item-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, item_brand_service_1.ItemBrandService,
            router_1.ActivatedRoute, environment_url_service_1.EnvironmentUrlService, http_1.HttpClient, excel_file_service_1.ExporterService])
    ], BrandFormComponent);
    return BrandFormComponent;
}(base_component_1.BaseComponent));
exports.BrandFormComponent = BrandFormComponent;


/***/ }),

/***/ "./src/app/layout/content/item-brands/components/brand-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/content/item-brands/components/brand-list.component.ts ***!
  \*******************************************************************************/
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
var item_brand_service_1 = __webpack_require__(/*! ../services/item-brand.service */ "./src/app/layout/content/item-brands/services/item-brand.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var BrandListComponent = /** @class */ (function (_super) {
    __extends(BrandListComponent, _super);
    function BrandListComponent(injector, _itemBrandService, exporterService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._itemBrandService = _itemBrandService;
        _this.exporterService = exporterService;
        _this.ngxService = ngxService;
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.BrandListToPost = [];
        return _this;
    }
    BrandListComponent.prototype.ngOnInit = function () {
        this.dropdownSettings();
        this.getCustomerKeyPair();
    };
    BrandListComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._itemBrandService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    BrandListComponent.prototype.customerChange = function (item) {
        this.selectedCustomer = {
            Id: item.Value,
            Name: item.Text
        };
        this.CustomerId = item.Value;
        this.getbrands(this.CustomerId);
    };
    BrandListComponent.prototype.Edit = function (id) {
        var updateUrl = this.routesList.ITEM_BRAND_EDIT + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    BrandListComponent.prototype.exportServiceAsExcel = function () {
        var _this = this;
        this.brandList.forEach(function (element) {
            var brandListObj = {
                BrandID: element.ItemId,
                Name: element.Name,
                Description: element.Description
            };
            _this.BrandListToPost.push(brandListObj);
        });
        this.exporterService.exportToExcel(this.BrandListToPost, 'BrandList Data');
        this.BrandListToPost = [];
    };
    BrandListComponent.prototype.redirectToCreateBrand = function () {
        this.router.navigate([this.routesList.ITEM_BRAND_CREATE]);
    };
    BrandListComponent.prototype.dropdownSettings = function () {
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
    BrandListComponent.prototype.Delete = function (Id) {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            ItemId: Id,
            Type: "brand"
        };
        var apiUrl = this.apiConstant.CUSTOMER_DELETE;
        this.ngxService.start();
        this._itemBrandService.create(apiUrl, companyBusinessUnitInfo)
            .subscribe(function (res) {
            //debugger
            var isDeleted = res;
            if (isDeleted) {
                _this.showToastrSuccess('Brand deleted successfully');
                _this.getbrands(_this.CustomerId);
            }
            else {
                _this.showToastrWarning('Brand Can not be deleted');
            }
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    BrandListComponent.prototype.getbrands = function (item) {
        var _this = this;
        this.ngxService.start();
        var companyBusinessUnitInfo = {
            CustomerId: item
        };
        var apiAddress = this.apiConstant.ITEM_LIST;
        this._itemBrandService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.brandList = res;
            _this.brandList = _this.brandList
                .filter(function (x) { return Number(x.ItemId.substring(7, 10)) > 100; });
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    BrandListComponent = __decorate([
        core_1.Component({
            selector: "wms-brand-list",
            template: __webpack_require__(/*! ../templates/brand-list.component.html */ "./src/app/layout/content/item-brands/templates/brand-list.component.html"),
            styles: [__webpack_require__(/*! ../styles/item-form.component.scss */ "./src/app/layout/content/item-brands/styles/item-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, item_brand_service_1.ItemBrandService,
            excel_file_service_1.ExporterService,
            ngx_ui_loader_1.NgxUiLoaderService])
    ], BrandListComponent);
    return BrandListComponent;
}(base_component_1.BaseComponent));
exports.BrandListComponent = BrandListComponent;


/***/ }),

/***/ "./src/app/layout/content/item-brands/items-brand.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/content/item-brands/items-brand.module.ts ***!
  \******************************************************************/
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
var item_brand_service_1 = __webpack_require__(/*! ./services/item-brand.service */ "./src/app/layout/content/item-brands/services/item-brand.service.ts");
var brand_form_component_1 = __webpack_require__(/*! ./components/brand-form.component */ "./src/app/layout/content/item-brands/components/brand-form.component.ts");
var brand_list_component_1 = __webpack_require__(/*! ./components/brand-list.component */ "./src/app/layout/content/item-brands/components/brand-list.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ng_multiselect_dropdown_1 = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
var brand_edit_form_component_1 = __webpack_require__(/*! ./components/brand-edit-form.component */ "./src/app/layout/content/item-brands/components/brand-edit-form.component.ts");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var ngx_ui_loader_1 = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: brand_list_component_1.BrandListComponent,
            },
            {
                path: "create",
                component: brand_form_component_1.BrandFormComponent,
            },
            {
                path: "edit/:Id",
                component: brand_edit_form_component_1.BrandEditFormComponent,
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var ItemBrandsModule = /** @class */ (function () {
    function ItemBrandsModule() {
    }
    ItemBrandsModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule, ngx_toggle_switch_1.UiSwitchModule,
                ng_multiselect_dropdown_1.NgMultiSelectDropDownModule,
                ngx_ui_loader_1.NgxUiLoaderModule
            ],
            declarations: [
                brand_form_component_1.BrandFormComponent, brand_list_component_1.BrandListComponent, brand_edit_form_component_1.BrandEditFormComponent
            ],
            providers: [
                item_brand_service_1.ItemBrandService, excel_file_service_1.ExporterService
            ],
            entryComponents: []
        })
    ], ItemBrandsModule);
    return ItemBrandsModule;
}());
exports.ItemBrandsModule = ItemBrandsModule;


/***/ }),

/***/ "./src/app/layout/content/item-brands/services/item-brand.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/content/item-brands/services/item-brand.service.ts ***!
  \***************************************************************************/
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
var ItemBrandService = /** @class */ (function (_super) {
    __extends(ItemBrandService, _super);
    function ItemBrandService(injector) {
        return _super.call(this, injector) || this;
    }
    ItemBrandService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], ItemBrandService);
    return ItemBrandService;
}(repository_service_1.RepositoryService));
exports.ItemBrandService = ItemBrandService;


/***/ }),

/***/ "./src/app/layout/content/item-brands/styles/item-form.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/layout/content/item-brands/styles/item-form.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block{color:red}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:20px !important;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toggle-label{margin-top:10px;margin-right:-10px;color:green;font-size:15px}\n"

/***/ }),

/***/ "./src/app/layout/content/item-brands/templates/brand-edit-form.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/content/item-brands/templates/brand-edit-form.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          SKU BRAND EDIT\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.ITEM_BRAND_LISTING]\">SKU Brand</a></li>\r\n          <li class=\"active\">Create</li>\r\n        </ol>\r\n      </section>\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"updateBrand(formGroup.value)\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group  pull-right\">\r\n            <button type=\"button\" (click)=\"redirectToItemBrandList()\" class=\"btn-wms\">SKU Brand Listing</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <!-- <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Customer</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                  [settings]=\"customerDropdownSettings\"\r\n                  (onSelect)=\"customerChange($event)\">\r\n                </ng-multiselect-dropdown>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Category</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"categoryKeyPair\"\r\n                  [settings]=\"categoryDropdownSettings\" (onDeSelect)=\"onCategoryDeSelect($event)\"\r\n                  (onSelect)=\"categoryChange($event)\">\r\n                </ng-multiselect-dropdown>\r\n              </div>\r\n            </div> -->\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Name</label>\r\n                <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter Name\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                  {{getErrorMessage('Name')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Description</label>\r\n                  <input type=\"text\" formControlName=\"Description\" class=\"form-control input-sm\" placeholder=\"Enter Description\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Description.invalid\">\r\n                    {{getErrorMessage('Description')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Shelf Life</label>\r\n                  <input type=\"number\" formControlName=\"ShelfLife\" class=\"form-control input-sm\" placeholder=\"Enter ShelfLife in Days\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.ShelfLife.invalid\">\r\n                    {{getErrorMessage('ShelfLife')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n           \r\n            <!-- <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>SKU Brand Code</label>\r\n                <input type=\"text\" formControlName=\"ItemBrandCode\" class=\"form-control input-sm\" readonly placeholder=\"Code\">\r\n              </div>\r\n            </div> -->\r\n            <div class=\"col-md-4\">\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"box-footer\">\r\n            <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Update</button>\r\n          </div>\r\n      </div>\r\n      <ngx-ui-loader></ngx-ui-loader>\r\n  </form>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/layout/content/item-brands/templates/brand-form.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/layout/content/item-brands/templates/brand-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          SKU BRAND CREATE\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.ITEM_BRAND_LISTING]\">SKU Brand</a></li>\r\n          <li class=\"active\">Create</li>\r\n        </ol>\r\n      </section>\r\n      <ul class=\"nav nav-tabs\">\r\n        <!-- <li class=\"active\"><a data-toggle=\"tab\" href=\"#menu3\">Other Expense</a></li> -->\r\n          <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Single</a></li>\r\n          <li><a data-toggle=\"tab\" href=\"#menu1\">Multiple</a></li>\r\n          <!-- <li><a data-toggle=\"tab\" href=\"#menu2\">Services Invoice</a></li>\r\n          <li><a data-toggle=\"tab\" href=\"#menu3\">Other vendor Invoice </a></li> -->\r\n         \r\n        </ul>\r\n        <div class=\"tab-content\" >\r\n          <div id=\"menu1\" class=\"tab-pane fade in\">\r\n            <div col-md-12>\r\n              <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createBrandLIST()\">\r\n                <div class=\"box box-primary\">\r\n                  <div class=\"box-header with-border\">\r\n                    <div class=\"form-group  pull-right\">\r\n                      <button type=\"button\" (click)=\"redirectToItemBrandList()\" class=\"btn-wms\">SKU Brand Listing</button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"box-body\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Customer</label>\r\n                          <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                            [settings]=\"customerDropdownSettings\"\r\n                            (onSelect)=\"customerChange($event)\">\r\n                          </ng-multiselect-dropdown>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Category</label>\r\n                          <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"categoryKeyPair\"\r\n                            [settings]=\"categoryDropdownSettings\" (onDeSelect)=\"onCategoryDeSelect($event)\"\r\n                            (onSelect)=\"categoryChange($event)\">\r\n                          </ng-multiselect-dropdown>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <button type=\"button\" class=\"btn-genx\" (click)=\"exportServiceAsExcel()\"> Export Format</button>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <input  type=\"file\" id=\"servicePicked\" #servicePicked \r\n                        (click)=\"message=''\"\r\n                        (change)=\"onServicePicked(servicePicked)\">\r\n                      </div>\r\n                      <!-- <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Name</label>\r\n                          <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter Name\">\r\n                          <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                            {{getErrorMessage('Name')}}\r\n                          </span>\r\n                        </div>\r\n                      </div> -->\r\n                    </div>\r\n          \r\n                    <div class=\"col-md-12\">\r\n                      <!-- <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Description</label>\r\n                          <input type=\"text\" formControlName=\"Description\" class=\"form-control input-sm\" placeholder=\"Enter Description\">\r\n                          <span class=\"help-block\" *ngIf=\"formGroup.controls.Description.invalid\">\r\n                            {{getErrorMessage('Description')}}\r\n                          </span>\r\n                        </div>\r\n                      </div> -->\r\n                      <!-- <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>SKU Brand Code</label>\r\n                          <input type=\"text\" formControlName=\"ItemBrandCode\" class=\"form-control input-sm\" readonly placeholder=\"Code\">\r\n                        </div>\r\n                      </div> -->\r\n                      <div class=\"col-md-4\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 table-responsive\">\r\n                        <table class=\"table table-bordered table-hover dataTable disp1\" role=\"grid\" id=\"tbl\">\r\n                          <thead>\r\n                          <tr>\r\n                            <th style=\"min-width:10px\">Sr.</th>\r\n                            <th>Name</th>\r\n                            <th>Description/Service</th>\r\n                            <th>SKU Category Code</th>\r\n                            \r\n                          </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                          <tr *ngFor=\"let item of BrandListToPost; index as i\">\r\n                           <td>{{i+1}}</td>\r\n                           <td>{{item.Name}}</td>\r\n                           <td>{{item.Description}}</td>\r\n                         <td>{{item.ItemId}}</td>\r\n                          </tr>\r\n                         \r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n        \r\n                      <!-- /.col -->\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"box-footer\">\r\n                      <button type=\"submit\" [disabled]=\"\" class=\"btn btn-success pull-right\">Add</button>\r\n                    </div>\r\n                </div>\r\n               \r\n            </form>\r\n            </div>\r\n          </div>\r\n          <div id=\"home\" class=\"tab-pane fade in active\">\r\n            <div col-md-12>\r\n              <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createBrand(formGroup.value)\">\r\n                <div class=\"box box-primary\">\r\n                  <div class=\"box-header with-border\">\r\n                    <div class=\"form-group  pull-right\">\r\n                      <button type=\"button\" (click)=\"redirectToItemBrandList()\" class=\"btn-wms\">SKU Brand Listing</button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"box-body\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Customer</label>\r\n                          <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                            [settings]=\"customerDropdownSettings\"\r\n                            (onSelect)=\"customerChange($event)\">\r\n                          </ng-multiselect-dropdown>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Category</label>\r\n                          <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"categoryKeyPair\"\r\n                            [settings]=\"categoryDropdownSettings\" (onDeSelect)=\"onCategoryDeSelect($event)\"\r\n                            (onSelect)=\"categoryChange($event)\">\r\n                          </ng-multiselect-dropdown>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Name</label>\r\n                          <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter Name\">\r\n                          <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                            {{getErrorMessage('Name')}}\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n          \r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Description</label>\r\n                          <input type=\"text\" formControlName=\"Description\" class=\"form-control input-sm\" placeholder=\"Enter Description\">\r\n                          <span class=\"help-block\" *ngIf=\"formGroup.controls.Description.invalid\">\r\n                            {{getErrorMessage('Description')}}\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Shelf Life</label>\r\n                          <input type=\"number\" formControlName=\"ShelfLife\" class=\"form-control input-sm\" placeholder=\"Enter Shelf Life in Days\">\r\n                          <span class=\"help-block\" *ngIf=\"formGroup.controls.ShelfLife.invalid\">\r\n                            {{getErrorMessage('ShelfLife')}}\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>SKU Brand Code</label>\r\n                          <input type=\"text\" formControlName=\"ItemBrandCode\" class=\"form-control input-sm\" readonly placeholder=\"Code\">\r\n                        </div>\r\n                      </div>\r\n                      \r\n                    </div>\r\n          \r\n                  </div>\r\n                  <div class=\"box-footer\">\r\n                      <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Add</button>\r\n                    </div>\r\n                </div>\r\n               \r\n            </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n \r\n</section>"

/***/ }),

/***/ "./src/app/layout/content/item-brands/templates/brand-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/layout/content/item-brands/templates/brand-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <section class=\"content\">\r\n      <section class=\"content-header\">\r\n          <h1>\r\n            SKU BRAND LISTING\r\n            <small>\r\n              <button class=\"btn-wms\" (click)=\"redirectToCreateBrand()\"><i class=\"fa fa-plus-circle\"></i> </button>\r\n            </small>\r\n            \r\n          </h1>\r\n          <ol class=\"breadcrumb\">\r\n            <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n            <li><a routerLink=\"[this.routesList.ITEM_BRAND_LISTING]\">SKU Brand</a></li>\r\n            <li class=\"active\">Listing</li>\r\n          </ol>\r\n        </section>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <div class=\"box box-solid\">\r\n          <div class=\"box-header\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label>Customer</label>\r\n                        <ng-multiselect-dropdown  \r\n                        [placeholder]=\"'Select one'\"\r\n                        [data]=\"customerKeyPair\"\r\n                        [settings]=\"customerDropdownSettings\"\r\n                        (onSelect)=\"customerChange($event)\">\r\n                      </ng-multiselect-dropdown>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-8\">\r\n                    <div class=\"pull-right\">\r\n                      <button class=\"btn-excel\" (click)=\"exportServiceAsExcel()\"><i class=\"fa fa-file-excel-o\"></i></button>\r\n                    </div>\r\n                    </div>\r\n                    \r\n            </div>\r\n          \r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 table-responsive\">\r\n                  <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th>Sr.</th>\r\n                        <th>Brand Id</th>\r\n                        <th>Name</th>\r\n                        <th>Description</th>\r\n                        <th>Shelf Life</th>\r\n                        <th>Actions</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let brand of brandList; let i = index\">\r\n                        <td>{{i+1}}</td> \r\n                        <td>{{brand.ItemId}}</td>\r\n                        <td>{{brand.Name}}</td>\r\n                        <td>{{brand.Description}}</td>\r\n                        <td>{{brand.ShelfLife}}</td>\r\n                        <td>\r\n                          <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"Edit(brand.ItemId)\"><i\r\n                              class=\"fa fa-edit\"></i></button>\r\n                              <button type=\"button\" id=\"delete\" tooltip=\"Delete\" class=\"editBtn btn-danger\" (click)=\"Delete(brand.ItemId)\"><i class=\"fa fa-trash\"></i></button>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                  <ngx-ui-loader></ngx-ui-loader>\r\n                </div>\r\n              </div>\r\n       \r\n            </div>\r\n          </div>\r\n          <!-- /.box-body -->\r\n        </div>\r\n        <!-- /.box -->\r\n      </div>\r\n      <!-- /.col -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>"

/***/ })

}]);
//# sourceMappingURL=content-item-brands-items-brand-module.js.map