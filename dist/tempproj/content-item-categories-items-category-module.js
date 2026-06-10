(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-item-categories-items-category-module"],{

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

/***/ "./src/app/layout/content/item-categories/components/category-edit-form.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/content/item-categories/components/category-edit-form.component.ts ***!
  \*******************************************************************************************/
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
var item_category_service_1 = __webpack_require__(/*! ../services/item-category.service */ "./src/app/layout/content/item-categories/services/item-category.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var CategoryEditFormComponent = /** @class */ (function (_super) {
    __extends(CategoryEditFormComponent, _super);
    function CategoryEditFormComponent(injector, _itemCategoryService, activeRoute) {
        var _this = _super.call(this, injector) || this;
        _this._itemCategoryService = _itemCategoryService;
        _this.activeRoute = activeRoute;
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        return _this;
    }
    CategoryEditFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.getById();
    };
    CategoryEditFormComponent.prototype.getById = function () {
        var _this = this;
        var categoryId = this.activeRoute.snapshot.params['Id'];
        if (categoryId) {
            var customerByIdUrl = this.apiConstant.ITEM_CATEGORY_GET_BY_ID + ("" + categoryId);
            this._itemCategoryService.getData(customerByIdUrl)
                .subscribe(function (res) {
                _this.category = res;
                _this.formGroup.patchValue(_this.category);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
    };
    CategoryEditFormComponent.prototype.updateItemCategory = function (formValue) {
        if (this.formGroup.valid) {
            this.executeItemCategoryUpdate(formValue);
        }
    };
    CategoryEditFormComponent.prototype.executeItemCategoryUpdate = function (formValue) {
        var _this = this;
        var category = {
            Name: formValue.Name,
            Description: formValue.Description,
            LastModifiedBy: this.localStorageService.getUserId(),
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiUrl = this.apiConstant.ITEM_CATEGORY_UPDATE + ("/" + this.category.ItemId);
        this._itemCategoryService.update(apiUrl, category)
            .subscribe(function (res) {
            _this.showToastrSuccess("Item Category Updated successfully");
            setTimeout(function () {
                _this.redirectToItemCategoriesList();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    /**
  * The following method is used to add the form validations
  */
    CategoryEditFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("Name", requiredValidation);
        this.addFormControlWithValidations("Description", []);
        this.addFormControlWithValidations("ItemCategoryCode", []);
    };
    CategoryEditFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    CategoryEditFormComponent.prototype.getErrorMessage = function (formElement) {
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
    CategoryEditFormComponent.prototype.redirectToItemCategoriesList = function () {
        this.router.navigate([this.routesList.ITEM_CATEGORY_LISTING]);
    };
    CategoryEditFormComponent = __decorate([
        core_1.Component({
            selector: "wms-category-edit-form",
            template: __webpack_require__(/*! ../templates/category-edit-form.component.html */ "./src/app/layout/content/item-categories/templates/category-edit-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/item-form.component.scss */ "./src/app/layout/content/item-categories/styles/item-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, item_category_service_1.ItemCategoryService,
            router_1.ActivatedRoute])
    ], CategoryEditFormComponent);
    return CategoryEditFormComponent;
}(base_component_1.BaseComponent));
exports.CategoryEditFormComponent = CategoryEditFormComponent;


/***/ }),

/***/ "./src/app/layout/content/item-categories/components/category-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/content/item-categories/components/category-form.component.ts ***!
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
var item_category_service_1 = __webpack_require__(/*! ../services/item-category.service */ "./src/app/layout/content/item-categories/services/item-category.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var environment_url_service_1 = __webpack_require__(/*! src/app/helpers/services/environment-url.service */ "./src/app/helpers/services/environment-url.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var CategoryFormComponent = /** @class */ (function (_super) {
    __extends(CategoryFormComponent, _super);
    function CategoryFormComponent(injector, _itemCategoryService, activeRoute, exporterService, envUrl, http) {
        var _this = _super.call(this, injector) || this;
        _this._itemCategoryService = _itemCategoryService;
        _this.activeRoute = activeRoute;
        _this.exporterService = exporterService;
        _this.envUrl = envUrl;
        _this.http = http;
        _this.customerDropdownSettings = {};
        _this.statuss = true;
        _this.selectedCustomer = {};
        _this.CatListToPost = [];
        return _this;
    }
    CategoryFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getCustomerKeyPair();
    };
    /**
  * The following method is used to add the form validations
  */
    CategoryFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            forms_1.Validators.required,
        ];
        this.addFormControlWithValidations("Name", requiredValidation);
        this.addFormControlWithValidations("Description", []);
        this.addFormControlWithValidations("ItemCategoryCode", []);
    };
    CategoryFormComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._itemCategoryService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    CategoryFormComponent.prototype.customerChange = function (item) {
        var _this = this;
        this.selectedCustomer = {
            Id: item.Value,
            Name: item.Text
        };
        var customerByIdUrl = this.apiConstant.ITEM_GET_LAST_BY_CUSTOMER + ("" + item.Value);
        this._itemCategoryService.getData(customerByIdUrl)
            .subscribe(function (res) {
            _this.selectedCustomerLastItem = res;
            debugger;
            if (_this.selectedCustomerLastItem != null) {
                var customerCode_1 = _this.selectedCustomerLastItem.ItemId.substring(0, 3);
                var itemcode = _this.selectedCustomerLastItem.ItemId.substring(4, 6);
                var code_1 = customerCode_1 + "-" + (Number(itemcode) + 1) + "-100-1000";
                if (_this.CatListToPost.length > 0) {
                    debugger;
                    var i = 0;
                    _this.CatListToPost.forEach(function (element, index) {
                        if (index == 0) {
                            //element["ItemId"] = code
                            _this.CatListToPost[index].ItemId = code_1;
                        }
                        else {
                            var cod = _this.CatListToPost[index - 1].ItemId.substring(4, 6);
                            _this.CatListToPost[index].ItemId = customerCode_1 + "-" + (Number(cod) + 1) + "-100-1000";
                        }
                    });
                }
                else {
                    _this.formGroup.get("ItemCategoryCode").setValue(code_1);
                }
            }
            else {
                var apiAddressForItemCategory = _this.apiConstant.MAX_ITEM_CODE;
                _this._itemCategoryService.getData(apiAddressForItemCategory)
                    .subscribe(function (res) {
                    _this.selectedCustomerLastItem = res;
                    if (_this.selectedCustomerLastItem != null) {
                        var customerCode = _this.selectedCustomerLastItem.ItemId.substring(0, 3);
                        var code = (Number(customerCode) + 1) + "-10-100-1000";
                        _this.formGroup.get("ItemCategoryCode").setValue(code);
                    }
                    else {
                        var code = "101-10-100-1000";
                        _this.formGroup.get("ItemCategoryCode").setValue(code);
                    }
                }, function (error) {
                    _this.errorHandler.handleError(error);
                    _this.errorMessage = _this.errorHandler.errorMessage;
                });
            }
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    CategoryFormComponent.prototype.onCustomerDeSelect = function (item) {
        this.selectedCustomer = {};
    };
    CategoryFormComponent.prototype.createItemCategory = function (formValue) {
        if (this.formGroup.valid) {
            if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
                this.showToastrWarning("Select Customer please.");
                return false;
            }
            this.executeCategoryCreation(formValue);
        }
    };
    CategoryFormComponent.prototype.createItemCategoryLIST = function () {
        var _this = this;
        if (this.formGroup.valid) {
            if (!this.selectedCustomer || !this.selectedCustomer["Id"]) {
                this.showToastrWarning("Select Customer please.");
                return false;
            }
            //this.executeCategoryCreation(formValue);
        }
        var godwom = {
            // Name: formValue.Name,
            // ItemId:this.formGroup.get("ItemCategoryCode").value,
            // Description: formValue.Description,
            list: this.CatListToPost,
            CustomerId: this.selectedCustomer["Id"],
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
        };
        var apiUrl = this.apiConstant.ITEM_CATEGORY_CREATE_LIST;
        this._itemCategoryService.create(apiUrl, godwom)
            .subscribe(function (res) {
            _this.showToastrSuccess("Item Category created successfully");
            setTimeout(function () {
                _this.redirectToItemCategoriesList();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    CategoryFormComponent.prototype.executeCategoryCreation = function (formValue) {
        var _this = this;
        var godwom = {
            Name: formValue.Name,
            ItemId: this.formGroup.get("ItemCategoryCode").value,
            Description: formValue.Description,
            CustomerId: this.selectedCustomer["Id"],
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CreatedBy: this.localStorageService.getUserId(),
            LastModifiedBy: this.localStorageService.getUserId(),
        };
        var apiUrl = this.apiConstant.ITEM_CATEGORY_CREATE;
        this._itemCategoryService.create(apiUrl, godwom)
            .subscribe(function (res) {
            _this.showToastrSuccess("Item Category created successfully");
            setTimeout(function () {
                _this.redirectToItemCategoriesList();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    CategoryFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    CategoryFormComponent.prototype.dropdownSettings = function () {
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
    /**
     * The following method is used
     * @param {string} formElement
     * @returns {string}
     */
    CategoryFormComponent.prototype.getErrorMessage = function (formElement) {
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
    CategoryFormComponent.prototype.redirectToItemCategoriesList = function () {
        this.router.navigate([this.routesList.ITEM_CATEGORY_LISTING]);
    };
    CategoryFormComponent.prototype.exportServiceAsExcel = function () {
        debugger;
        this.CatListToPost.push({
            Name: '',
            Description: '',
            ItemId: ''
        });
        this.exporterService.exportToExcel(this.CatListToPost, 'CatList Data');
        this.CatListToPost = [];
    };
    CategoryFormComponent.prototype.onServicePicked = function () {
        var _this = this;
        debugger;
        var formData = new FormData();
        formData.append('ContractId', this.selectedCustomer.toString());
        formData.append('CustomerId', this.selectedCustomer.toString());
        formData.append('file', this.servicePicked.nativeElement.files[0]);
        if (formData) {
            this.uploadFile(formData)
                .subscribe(function (msg) {
                _this.CatListToPost = msg;
                //  this.CatListToPost.forEach(element =>{
                //   if(element.ItemInformationId==="0")
                //   {
                //       this.BTN = true;
                //   }
                //  })
                // this.fleetServiceList = null;
                debugger;
                console.log(_this.CatListToPost);
            });
        }
    };
    CategoryFormComponent.prototype.uploadFile = function (formData) {
        if (!formData) {
            return;
        }
        var apiUrl = this.apiConstant.FILE_UPLOAD_ItemCat;
        var url = this.envUrl.urlAddress + apiUrl;
        return this.http.post(url, formData);
    };
    __decorate([
        core_1.ViewChild('servicePicked'),
        __metadata("design:type", Object)
    ], CategoryFormComponent.prototype, "servicePicked", void 0);
    CategoryFormComponent = __decorate([
        core_1.Component({
            selector: "wms-category-form",
            template: __webpack_require__(/*! ../templates/category-form.component.html */ "./src/app/layout/content/item-categories/templates/category-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/item-form.component.scss */ "./src/app/layout/content/item-categories/styles/item-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, item_category_service_1.ItemCategoryService,
            router_1.ActivatedRoute, excel_file_service_1.ExporterService, environment_url_service_1.EnvironmentUrlService, http_1.HttpClient])
    ], CategoryFormComponent);
    return CategoryFormComponent;
}(base_component_1.BaseComponent));
exports.CategoryFormComponent = CategoryFormComponent;


/***/ }),

/***/ "./src/app/layout/content/item-categories/components/category-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/content/item-categories/components/category-list.component.ts ***!
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
var item_category_service_1 = __webpack_require__(/*! ../services/item-category.service */ "./src/app/layout/content/item-categories/services/item-category.service.ts");
var base_component_1 = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
__webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
__webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var CategoryListComponent = /** @class */ (function (_super) {
    __extends(CategoryListComponent, _super);
    function CategoryListComponent(injector, _itemCategoryService, exporterService) {
        var _this = _super.call(this, injector) || this;
        _this._itemCategoryService = _itemCategoryService;
        _this.exporterService = exporterService;
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        _this.CategoryListToPost = [];
        return _this;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        this.dropdownSettings();
        this.getCustomerKeyPair();
        // this.getAllItems();
    };
    CategoryListComponent.prototype.getCustomerKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.CUSTOMER_KEYPAIR;
        this._itemCategoryService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            debugger;
            _this.customerKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    CategoryListComponent.prototype.customerChange = function (item) {
        this.selectedCustomer = {
            Id: item.Value,
            Name: item.Text
        };
        this.CustomerId = item.Value;
        this.getItems(this.CustomerId);
    };
    CategoryListComponent.prototype.getItems = function (item) {
        var _this = this;
        var companyBusinessUnitInfo = {
            CustomerId: item
        };
        var apiAddress = this.apiConstant.ITEM_LIST;
        this._itemCategoryService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.categoryList = res;
            _this.categoryList = _this.categoryList
                .filter(function (x) { return x.ItemId.substring(7, 15) == "100-1000"; });
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    // getAllItems() {
    //   let companyBusinessUnitInfo = {
    //     CompanyId: this.localStorageService.getCompanyId(),
    //     BusinessUnitId: this.localStorageService.getBusinessUnitId(),
    //   }
    //   let apiAddress: string = this.apiConstant.ITEM_LIST;
    //   this._itemCategoryService.getAll(apiAddress,companyBusinessUnitInfo)
    //     .subscribe(res => {
    //       this.categoryList = res as ItemCategory[];
    //       
    //        // Now you can use jQuery DataTables :
    //     const table: any = $('table');
    //     this.dataTable = table.DataTable({
    //       lengthMenu: [5, 10, 20, 50, 100],
    //       "iDisplayLength": 100
    //     });
    //     },
    //       (error) => {
    //         this.errorHandler.handleError(error);
    //         this.errorMessage = this.errorHandler.errorMessage;
    //       })
    // }
    CategoryListComponent.prototype.Edit = function (id) {
        var updateUrl = this.routesList.ITEM_CATEGORY_EDIT + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    CategoryListComponent.prototype.exportServiceAsExcel = function () {
        var _this = this;
        this.categoryList.forEach(function (element) {
            var categoryObj = {
                CategoryID: element.ItemId,
                Name: element.Name,
                Description: element.Description
            };
            _this.CategoryListToPost.push(categoryObj);
        });
        this.exporterService.exportToExcel(this.CategoryListToPost, 'CategoryList Data');
        this.CategoryListToPost = [];
    };
    CategoryListComponent.prototype.redirectToCreateCategory = function () {
        this.router.navigate([this.routesList.ITEM_CATEGORY_CREATE]);
    };
    CategoryListComponent.prototype.dropdownSettings = function () {
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
    CategoryListComponent.prototype.Delete = function (Id) {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            ItemId: Id,
            Type: "category"
        };
        var apiUrl = this.apiConstant.CUSTOMER_DELETE;
        this._itemCategoryService.create(apiUrl, companyBusinessUnitInfo)
            .subscribe(function (res) {
            //debugger
            var isDeleted = res;
            if (isDeleted) {
                _this.showToastrSuccess('Category deleted successfully');
                _this.getItems(_this.CustomerId);
            }
            else {
                _this.showToastrWarning('Category Can not be deleted');
            }
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    CategoryListComponent = __decorate([
        core_1.Component({
            selector: "wms-category-list",
            template: __webpack_require__(/*! ../templates/category-list.component.html */ "./src/app/layout/content/item-categories/templates/category-list.component.html"),
            styles: [__webpack_require__(/*! ../styles/item-form.component.scss */ "./src/app/layout/content/item-categories/styles/item-form.component.scss")],
        }),
        __metadata("design:paramtypes", [core_1.Injector, item_category_service_1.ItemCategoryService,
            excel_file_service_1.ExporterService])
    ], CategoryListComponent);
    return CategoryListComponent;
}(base_component_1.BaseComponent));
exports.CategoryListComponent = CategoryListComponent;


/***/ }),

/***/ "./src/app/layout/content/item-categories/items-category.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/content/item-categories/items-category.module.ts ***!
  \*************************************************************************/
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
var item_category_service_1 = __webpack_require__(/*! ./services/item-category.service */ "./src/app/layout/content/item-categories/services/item-category.service.ts");
var category_form_component_1 = __webpack_require__(/*! ./components/category-form.component */ "./src/app/layout/content/item-categories/components/category-form.component.ts");
var category_list_component_1 = __webpack_require__(/*! ./components/category-list.component */ "./src/app/layout/content/item-categories/components/category-list.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ng_multiselect_dropdown_1 = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
var category_edit_form_component_1 = __webpack_require__(/*! ./components/category-edit-form.component */ "./src/app/layout/content/item-categories/components/category-edit-form.component.ts");
var excel_file_service_1 = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
var routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: category_list_component_1.CategoryListComponent,
            },
            {
                path: "create",
                component: category_form_component_1.CategoryFormComponent,
            },
            {
                path: "edit/:Id",
                component: category_edit_form_component_1.CategoryEditFormComponent,
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var ItemCategoriesModule = /** @class */ (function () {
    function ItemCategoriesModule() {
    }
    ItemCategoriesModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes),
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule, ngx_toggle_switch_1.UiSwitchModule,
                ng_multiselect_dropdown_1.NgMultiSelectDropDownModule
            ],
            declarations: [
                category_form_component_1.CategoryFormComponent, category_list_component_1.CategoryListComponent, category_edit_form_component_1.CategoryEditFormComponent
            ],
            providers: [
                item_category_service_1.ItemCategoryService, excel_file_service_1.ExporterService
            ],
            entryComponents: []
        })
    ], ItemCategoriesModule);
    return ItemCategoriesModule;
}());
exports.ItemCategoriesModule = ItemCategoriesModule;


/***/ }),

/***/ "./src/app/layout/content/item-categories/services/item-category.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/content/item-categories/services/item-category.service.ts ***!
  \**********************************************************************************/
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
var ItemCategoryService = /** @class */ (function (_super) {
    __extends(ItemCategoryService, _super);
    function ItemCategoryService(injector) {
        return _super.call(this, injector) || this;
    }
    ItemCategoryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], ItemCategoryService);
    return ItemCategoryService;
}(repository_service_1.RepositoryService));
exports.ItemCategoryService = ItemCategoryService;


/***/ }),

/***/ "./src/app/layout/content/item-categories/styles/item-form.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/layout/content/item-categories/styles/item-form.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block{color:red}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:20px !important;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.toggle-label{margin-top:10px;margin-right:-10px;color:green;font-size:15px}\n"

/***/ }),

/***/ "./src/app/layout/content/item-categories/templates/category-edit-form.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/content/item-categories/templates/category-edit-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          SKU CATEGORY CREATE\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.ITEM_CATEGORY_LISTING]\">SKU Category</a></li>\r\n          <li class=\"active\">Create</li>\r\n        </ol>\r\n      </section>\r\n    <div col-md-12>\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"updateItemCategory(formGroup.value)\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group  pull-right\">\r\n                <button type=\"button\" (click)=\"redirectToItemCategoriesList()\" class=\"btn-wms\">SKU Category Listing</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n                <!-- <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label>Customer</label>\r\n                        <ng-multiselect-dropdown  \r\n                        [placeholder]=\"'Select one'\"\r\n                        [data]=\"customerKeyPair\"\r\n                        [settings]=\"customerDropdownSettings\"\r\n                        (onDeSelect)=\"onCustomerDeSelect($event)\"\r\n                        (onSelect)=\"customerChange($event)\">\r\n                      </ng-multiselect-dropdown>\r\n                      </div>\r\n                  </div> -->\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Name</label>\r\n                  <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter Name\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                    {{getErrorMessage('Name')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Description</label>\r\n                  <input type=\"text\" formControlName=\"Description\" class=\"form-control input-sm\" placeholder=\"Enter Description\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Description.invalid\">\r\n                    {{getErrorMessage('Description')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-md-12\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label>SKU Category Code</label>\r\n                        <input type=\"text\" formControlName=\"ItemCategoryCode\" class=\"form-control input-sm\" readonly placeholder=\"Code\">\r\n                      </div>\r\n                  </div>\r\n              <div class=\"col-md-8\">\r\n               \r\n              </div>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"box-footer\">\r\n              <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Update</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/layout/content/item-categories/templates/category-form.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/content/item-categories/templates/category-form.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n  \r\n    <section class=\"content-header\">\r\n        <h1>\r\n          SKU CATEGORY CREATE\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.ITEM_CATEGORY_LISTING]\">SKU Category</a></li>\r\n          <li class=\"active\">Create</li>\r\n        </ol>\r\n      </section>\r\n      <ul class=\"nav nav-tabs\">\r\n        <!-- <li class=\"active\"><a data-toggle=\"tab\" href=\"#menu3\">Other Expense</a></li> -->\r\n          <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Single</a></li>\r\n          <li><a data-toggle=\"tab\" href=\"#menu1\">Multiple</a></li>\r\n          <!-- <li><a data-toggle=\"tab\" href=\"#menu2\">Services Invoice</a></li>\r\n          <li><a data-toggle=\"tab\" href=\"#menu3\">Other vendor Invoice </a></li> -->\r\n         \r\n        </ul>\r\n        <div class=\"tab-content\" >\r\n          <div id=\"menu1\" class=\"tab-pane fade in\">\r\n            <div col-md-12>\r\n     \r\n              <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createItemCategoryLIST()\">\r\n                \r\n                <div class=\"box box-primary\">\r\n                 \r\n                  <div class=\"box-header with-border\">\r\n                    <div class=\"form-group  pull-right\">\r\n                        <button type=\"button\" (click)=\"redirectToItemCategoriesList()\" class=\"btn-wms\">SKU Category Listing</button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"box-body\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Customer</label>\r\n                                <ng-multiselect-dropdown  \r\n                                [placeholder]=\"'Select one'\"\r\n                                [data]=\"customerKeyPair\"\r\n                                [settings]=\"customerDropdownSettings\"\r\n                                (onDeSelect)=\"onCustomerDeSelect($event)\"\r\n                                (onSelect)=\"customerChange($event)\">\r\n                              </ng-multiselect-dropdown>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-md-2\">\r\n                            <button type=\"button\" class=\"btn-genx\" (click)=\"exportServiceAsExcel()\"> Export Format</button>\r\n                          </div>\r\n                          <div class=\"col-md-2\">\r\n                            <input  type=\"file\" id=\"servicePicked\" #servicePicked \r\n                            (click)=\"message=''\"\r\n                            (change)=\"onServicePicked(servicePicked)\">\r\n                          </div>\r\n                      <!-- <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Name</label>\r\n                          <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter Name\">\r\n                          <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                            {{getErrorMessage('Name')}}\r\n                          </span>\r\n                        </div>\r\n                      </div> -->\r\n                      <!-- <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Description</label>\r\n                          <input type=\"text\" formControlName=\"Description\" class=\"form-control input-sm\" placeholder=\"Enter Description\">\r\n                          <span class=\"help-block\" *ngIf=\"formGroup.controls.Description.invalid\">\r\n                            {{getErrorMessage('Description')}}\r\n                          </span>\r\n                        </div>\r\n                      </div> -->\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12 table-responsive\">\r\n                        <table class=\"table table-bordered table-hover dataTable disp1\" role=\"grid\" id=\"tbl\">\r\n                          <thead>\r\n                          <tr>\r\n                            <th style=\"min-width:10px\">Sr.</th>\r\n                            <th>Name</th>\r\n                            <th>Description/Service</th>\r\n                            <th>SKU Category Code</th>\r\n                            \r\n                          </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                          <tr *ngFor=\"let item of CatListToPost; index as i\">\r\n                           <td>{{i+1}}</td>\r\n                           <td>{{item.Name}}</td>\r\n                           <td>{{item.Description}}</td>\r\n                         <td>{{item.ItemId}}</td>\r\n                          </tr>\r\n                         \r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n        \r\n                      <!-- /.col -->\r\n                    </div>\r\n                    <!-- <div class=\"col-md-12\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>SKU Category Code</label>\r\n                                <input type=\"text\" formControlName=\"ItemCategoryCode\" class=\"form-control input-sm\" readonly placeholder=\"Code\">\r\n                              </div>\r\n                          </div>\r\n                      <div class=\"col-md-8\">\r\n                       \r\n                      </div>\r\n                    </div> -->\r\n                  </div>\r\n                  <div class=\"box-footer\">\r\n                      <button type=\"submit\" [disabled]=\"\" class=\"btn btn-success pull-right\">Add</button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div id=\"home\" class=\"tab-pane fade in active\">\r\n            <div col-md-12>\r\n     \r\n              <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createItemCategory(formGroup.value)\">\r\n                \r\n                <div class=\"box box-primary\">\r\n                 \r\n                  <div class=\"box-header with-border\">\r\n                    <div class=\"form-group  pull-right\">\r\n                        <button type=\"button\" (click)=\"redirectToItemCategoriesList()\" class=\"btn-wms\">SKU Category Listing</button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"box-body\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Customer</label>\r\n                                <ng-multiselect-dropdown  \r\n                                [placeholder]=\"'Select one'\"\r\n                                [data]=\"customerKeyPair\"\r\n                                [settings]=\"customerDropdownSettings\"\r\n                                (onDeSelect)=\"onCustomerDeSelect($event)\"\r\n                                (onSelect)=\"customerChange($event)\">\r\n                              </ng-multiselect-dropdown>\r\n                              </div>\r\n                          </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Name</label>\r\n                          <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter Name\">\r\n                          <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                            {{getErrorMessage('Name')}}\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label>Description</label>\r\n                          <input type=\"text\" formControlName=\"Description\" class=\"form-control input-sm\" placeholder=\"Enter Description\">\r\n                          <span class=\"help-block\" *ngIf=\"formGroup.controls.Description.invalid\">\r\n                            {{getErrorMessage('Description')}}\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>SKU Category Code</label>\r\n                                <input type=\"text\" formControlName=\"ItemCategoryCode\" class=\"form-control input-sm\" readonly placeholder=\"Code\">\r\n                              </div>\r\n                          </div>\r\n                      <div class=\"col-md-8\">\r\n                       \r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"box-footer\">\r\n                      <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Add</button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    \r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/layout/content/item-categories/templates/category-list.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/content/item-categories/templates/category-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          SKU CATEGORY LISTING\r\n          <small>\r\n            <button class=\"btn-wms\" (click)=\"redirectToCreateCategory()\"><i class=\"fa fa-plus-circle\"></i> </button>\r\n          </small>\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.ITEM_CATEGORY_LISTING]\">SKU Category</a></li>\r\n          <li class=\"active\">Listing</li>\r\n        </ol>\r\n      </section>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-solid\">\r\n        <div class=\"box-header\">\r\n          <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                  <div class=\"form-group\">\r\n                      <label>Customer</label>\r\n                      <ng-multiselect-dropdown  \r\n                      [placeholder]=\"'Select one'\"\r\n                      [data]=\"customerKeyPair\"\r\n                      [settings]=\"customerDropdownSettings\"\r\n                      (onSelect)=\"customerChange($event)\">\r\n                    </ng-multiselect-dropdown>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                  <div class=\"pull-right\">\r\n                    <button class=\"btn-excel\" (click)=\"exportServiceAsExcel()\"><i class=\"fa fa-file-excel-o\"></i></button>\r\n                  </div>\r\n\t\t  \r\n                  </div>\r\n                  \r\n          </div>\r\n        \r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\">\r\n                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th>\r\n                        Sr.\r\n                      </th>\r\n                        <th>\r\n                            Category Id\r\n                          </th>\r\n                      <th>\r\n                        Name\r\n                      </th>\r\n                      <th>\r\n                        Description\r\n                      </th>\r\n                      <th>\r\n                        Actions\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let category of categoryList; let i = index\">\r\n                      <td>{{i+1}}</td> \r\n                      <td>{{category.ItemId}}</td>\r\n                      <td>{{category.Name}}</td>\r\n                      <td>{{category.Description}}</td>\r\n                      <td>\r\n                        <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"Edit(category.ItemId)\"><i\r\n                            class=\"fa fa-edit\"></i></button>\r\n                            <button type=\"button\" id=\"delete\" tooltip=\"Delete\" class=\"editBtn btn-danger\" (click)=\"Delete(category.ItemId)\"><i class=\"fa fa-trash\"></i></button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n     \r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>"

/***/ })

}]);
//# sourceMappingURL=content-item-categories-items-category-module.js.map