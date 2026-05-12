(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-godown-shelf-godown-shelf-module"],{

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

/***/ "./src/app/layout/content/godown-shelf/components/godown-shelf-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/content/godown-shelf/components/godown-shelf-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: GodownShelfFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodownShelfFormComponent", function() { return GodownShelfFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_godown_shelf_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/godown-shelf.service */ "./src/app/layout/content/godown-shelf/services/godown-shelf.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var GodownShelfFormComponent = /** @class */ (function (_super) {
    __extends(GodownShelfFormComponent, _super);
    function GodownShelfFormComponent(injector, _godownShelfService, activeRoute) {
        var _this = _super.call(this, injector) || this;
        _this._godownShelfService = _godownShelfService;
        _this.activeRoute = activeRoute;
        _this.warehouseDropdownSettings = {};
        _this.godownRowDropdownSettings = {};
        _this.godownRackDropdownSettings = {};
        _this.godownDropdownSettings = {};
        _this.selectedGodown = {};
        return _this;
    }
    GodownShelfFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getWarehouseKeyPair();
    };
    /**
  * The following method is used to add the form validations
  */
    GodownShelfFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ];
        this.addFormControlWithValidations("Name", requiredValidation);
        this.addFormControlWithValidations("Alias", requiredValidation);
        this.addFormControlWithValidations("WarehouseId", []);
        this.addFormControlWithValidations("GodownId", []);
        this.addFormControlWithValidations("GodownRowId", []);
        this.addFormControlWithValidations("GodownRackId", []);
        this.addFormControlWithValidations("Height", requiredValidation);
        this.addFormControlWithValidations("Width", requiredValidation);
        this.addFormControlWithValidations("Depth", requiredValidation);
    };
    GodownShelfFormComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId(),
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this._godownShelfService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.warehouseKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    GodownShelfFormComponent.prototype.getGodownKeyPair = function (selectedProject) {
        var _this = this;
        this.selectedWarehouseId = selectedProject.Value;
        var companyBusinessUnitInfo = {
            WarehouseId: selectedProject.Value
        };
        var apiAddress = this.apiConstant.GODOWN_GET_BY_WAREHOUSE_ID;
        this._godownShelfService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.godownKeyPair = res;
            _this.formGroup.get("GodownId").setValue('');
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    GodownShelfFormComponent.prototype.getGodownRowKeyPair = function (selectedProject) {
        var _this = this;
        this.selectedGodownId = selectedProject.Value;
        var apiAddress = this.apiConstant.GODOWN_ROW_KEYPAIR_BY_GODOWN_ID + ("" + selectedProject.Value);
        this._godownShelfService.getData(apiAddress)
            .subscribe(function (res) {
            _this.godownRowKeyPair = res;
            _this.formGroup.get("GodownRackId").setValue('');
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    GodownShelfFormComponent.prototype.getGodownRackKeyPair = function (godownRowId) {
        var _this = this;
        var apiAddress = this.apiConstant.GODOWN_RACK_KEYPAIR_BY_GODOWN_ROW_ID + ("" + godownRowId);
        this._godownShelfService.getData(apiAddress)
            .subscribe(function (res) {
            _this.godownRackKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    GodownShelfFormComponent.prototype.onGodownRackChange = function (item) {
        this.selectedGodownRack = {
            Id: item.Value,
            Name: item.Text
        };
    };
    GodownShelfFormComponent.prototype.getGodownRowValue = function (item) {
        this.selectedGodownRowId = {
            Value: item.Value,
            Text: item.Text
        };
        this.getGodownRackKeyPair(item.Value);
    };
    GodownShelfFormComponent.prototype.createGodownShelf = function (formValue) {
        if (this.formGroup.valid) {
            if (!this.selectedWarehouseId) {
                this.showToastrWarning("Select Warehouse please");
                return false;
            }
            else if (!this.selectedGodownId) {
                this.showToastrWarning("Select Godown please.");
                return false;
            }
            else if (!this.selectedGodownRowId) {
                this.showToastrWarning("Select Godown Row please.");
                return false;
            }
            else if (!this.selectedGodownRack || !this.selectedGodownRack["Id"]) {
                this.showToastrWarning("Select Godown Rack please.");
                return false;
            }
            this.executeGodownRowCreation(formValue);
        }
    };
    GodownShelfFormComponent.prototype.executeGodownRowCreation = function (formValue) {
        var _this = this;
        var godwom = {
            Name: formValue.Name,
            Alias: formValue.Alias,
            WarehouseId: this.selectedWarehouseId,
            GodwomId: this.selectedGodownId,
            GodownRowId: this.selectedGodownRowId.Value,
            GodownRackId: this.selectedGodownRack["Id"],
            Height: formValue.Height,
            Width: formValue.Width,
            Depth: formValue.Depth,
            AML_Warehouse: undefined,
            AML_Godwom: undefined,
            AML_GodownRack: undefined
        };
        var apiUrl = this.apiConstant.GODOWN_SHELF_CREATE;
        this._godownShelfService.create(apiUrl, godwom)
            .subscribe(function (res) {
            _this.showToastrSuccess("Godown Shelf created successfully");
            setTimeout(function () {
                _this.redirectToGodownShelfList();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    GodownShelfFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    GodownShelfFormComponent.prototype.dropdownSettings = function () {
        this.warehouseDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.godownRowDropdownSettings = {
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
        this.godownRackDropdownSettings = {
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
    GodownShelfFormComponent.prototype.getErrorMessage = function (formElement) {
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
    GodownShelfFormComponent.prototype.redirectToGodownShelfList = function () {
        this.router.navigate([this.routesList.GODOWN_SHELF_LISTING]);
    };
    GodownShelfFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-godown-shelf-form",
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/godown-shelf/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/godown-shelf-form.component.scss */ "./src/app/layout/content/godown-shelf/styles/godown-shelf-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_godown_shelf_service__WEBPACK_IMPORTED_MODULE_2__["GodownShelfService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], GodownShelfFormComponent);
    return GodownShelfFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/godown-shelf/components/godown-shelf-list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/content/godown-shelf/components/godown-shelf-list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: GodownShelfListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodownShelfListComponent", function() { return GodownShelfListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_godown_shelf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/godown-shelf.service */ "./src/app/layout/content/godown-shelf/services/godown-shelf.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
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









var GodownShelfListComponent = /** @class */ (function (_super) {
    __extends(GodownShelfListComponent, _super);
    function GodownShelfListComponent(injector, _godownRowService, chRef, exporterService, modalService, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._godownRowService = _godownRowService;
        _this.chRef = chRef;
        _this.exporterService = exporterService;
        _this.modalService = modalService;
        _this.ngxService = ngxService;
        _this.GodownShelfListToPost = [];
        return _this;
    }
    GodownShelfListComponent.prototype.ngOnInit = function () {
        this.getAllGodownRows();
    };
    GodownShelfListComponent.prototype.getAllGodownRows = function () {
        var _this = this;
        this.ngxService.start();
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.GODOWN_SHELF_LIST;
        this._godownRowService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.godownShelfList = res;
            //  debugger
            //   console.log(this.godownShelfList);
            _this.chRef.detectChanges();
            _this.chRef.reattach();
            // Now you can use jQuery DataTables :
            var table = jquery__WEBPACK_IMPORTED_MODULE_4__('table');
            _this.dataTable = table.DataTable({
                lengthMenu: [500, 1000, 2000, 5000],
                "iDisplayLength": 2000
            });
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    GodownShelfListComponent.prototype.Edit = function (id) {
        var updateUrl = this.routesList.GODOWN_SHELF_EDIT + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    GodownShelfListComponent.prototype.exportServiceAsExcel = function () {
        var _this = this;
        this.godownShelfList.forEach(function (element) {
            var godownshelfObj = {
                BayName: element.Name,
                Warehouse: element.AML_Warehouse.Name,
                Chamber: element.AML_Godwom.Name,
                ChamberAisle: element.AML_GodownRack.AML_GodownRow.Name,
                Rack: element.AML_GodownRack.Alias,
                Height: element.Height,
                Widht: element.Width,
                Depth: element.Depth,
                Alias: element.Alias,
            };
            _this.GodownShelfListToPost.push(godownshelfObj);
        });
        this.exporterService.exportToExcel(this.GodownShelfListToPost, 'Godown-ShelfList Data');
        this.GodownShelfListToPost = [];
    };
    GodownShelfListComponent.prototype.Delete = function (Item) {
        var _this = this;
        this.ngxService.start();
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            GodownRackId: Item.GodownRackId,
            GodownRowId: Item.GodownRowId,
            GodwonId: Item.GodwonId,
            WarehouseId: Item.WarehouseId,
            GodownShelfId: Item.GodownShelfId,
            Type: "shelf"
        };
        var apiUrl = this.apiConstant.WAREHOUSE_DELETE;
        this._godownRowService.create(apiUrl, companyBusinessUnitInfo)
            .subscribe(function (res) {
            //debugger
            var isDeleted = res;
            if (isDeleted) {
                _this.showToastrSuccess('Godown Shelf deleted successfully');
                _this.getAllGodownRows();
            }
            else {
                _this.showToastrWarning('Godown Shelf Can not be deleted');
            }
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    GodownShelfListComponent.prototype.openModal = function () {
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
    GodownShelfListComponent.prototype.redirectToCreateGodownShelf = function () {
        this.router.navigate([this.routesList.GODOWN_SHELF_CREATE]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('AllModal'),
        __metadata("design:type", Object)
    ], GodownShelfListComponent.prototype, "AllModal", void 0);
    GodownShelfListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-godown-shelf-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/godown-shelf/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/godown-shelf-form.component.scss */ "./src/app/layout/content/godown-shelf/styles/godown-shelf-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_godown_shelf_service__WEBPACK_IMPORTED_MODULE_1__["GodownShelfService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_7__["ExporterService"],
            ngb_modal__WEBPACK_IMPORTED_MODULE_8__["ModalManager"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]])
    ], GodownShelfListComponent);
    return GodownShelfListComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/godown-shelf/components/godwom-shelf-edit-form.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/content/godown-shelf/components/godwom-shelf-edit-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: GodownShelfEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodownShelfEditFormComponent", function() { return GodownShelfEditFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_godown_shelf_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/godown-shelf.service */ "./src/app/layout/content/godown-shelf/services/godown-shelf.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
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






var GodownShelfEditFormComponent = /** @class */ (function (_super) {
    __extends(GodownShelfEditFormComponent, _super);
    function GodownShelfEditFormComponent(injector, _godownShelfService, activeRoute, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._godownShelfService = _godownShelfService;
        _this.activeRoute = activeRoute;
        _this.ngxService = ngxService;
        _this.warehouseDropdownSettings = {};
        _this.godownRowDropdownSettings = {};
        _this.godownRackDropdownSettings = {};
        _this.godownDropdownSettings = {};
        _this.selectedGodown = {};
        return _this;
    }
    GodownShelfEditFormComponent.prototype.ngOnInit = function () {
        this.getWarehouseKeyPair();
        this.addFormValidations();
        this.dropdownSettings();
        this.getGodwomShelfById();
    };
    GodownShelfEditFormComponent.prototype.getGodwomShelfById = function () {
        var _this = this;
        var godwomRowId = this.activeRoute.snapshot.params['Id'];
        if (godwomRowId) {
            var byIdUrl = this.apiConstant.GODOWN_SHELF_GET_ONE + ("" + godwomRowId);
            this._godownShelfService.getData(byIdUrl)
                .subscribe(function (res) {
                //debugger
                _this.godownShelf = res;
                _this.selectedGodwomInfo = [{
                        // "Text": this.getGodwomNameFromGodwomKeyPair(this.godownRow.GodwonId),
                        "Value": _this.godownShelf.WarehouseId.toString()
                    }];
                _this.selectedWarehouseId = _this.godownShelf.WarehouseId;
                _this.formGroup.patchValue({
                    Name: _this.godownShelf.Name,
                    Alias: _this.godownShelf.Alias,
                    Height: _this.godownShelf.Height,
                    Width: _this.godownShelf.Width,
                    Depth: _this.godownShelf.Depth
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
    GodownShelfEditFormComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ];
        this.addFormControlWithValidations("Name", requiredValidation);
        this.addFormControlWithValidations("Alias", requiredValidation);
        this.addFormControlWithValidations("WarehouseId", []);
        this.addFormControlWithValidations("GodownId", []);
        this.addFormControlWithValidations("GodownRowId", []);
        this.addFormControlWithValidations("GodownRackId", []);
        this.addFormControlWithValidations("Height", requiredValidation);
        this.addFormControlWithValidations("Width", requiredValidation);
        this.addFormControlWithValidations("Depth", requiredValidation);
    };
    GodownShelfEditFormComponent.prototype.getWarehouseKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            LoggedUserId: this.localStorageService.getUserId(),
        };
        var apiAddress = this.apiConstant.WAREHOUSE_KEYPAIR;
        this._godownShelfService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.warehouseKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    GodownShelfEditFormComponent.prototype.getGodownKeyPair = function (selectedProject) {
        var _this = this;
        this.selectedWarehouseId = selectedProject.Value;
        var companyBusinessUnitInfo = {
            WarehouseId: selectedProject.Value
        };
        var apiAddress = this.apiConstant.GODOWN_GET_BY_WAREHOUSE_ID;
        this._godownShelfService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.godownKeyPair = res;
            _this.formGroup.get("GodownId").setValue('');
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    GodownShelfEditFormComponent.prototype.getGodownRowKeyPair = function (selectedProject) {
        var _this = this;
        this.selectedGodownId = selectedProject.Value;
        var apiAddress = this.apiConstant.GODOWN_ROW_KEYPAIR_BY_GODOWN_ID + ("" + selectedProject.Value);
        this._godownShelfService.getData(apiAddress)
            .subscribe(function (res) {
            _this.godownRowKeyPair = res;
            _this.formGroup.get("GodownRackId").setValue('');
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    GodownShelfEditFormComponent.prototype.getGodownRackKeyPair = function (godownRowId) {
        var _this = this;
        var apiAddress = this.apiConstant.GODOWN_RACK_KEYPAIR_BY_GODOWN_ROW_ID + ("" + godownRowId);
        this._godownShelfService.getData(apiAddress)
            .subscribe(function (res) {
            _this.godownRackKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    GodownShelfEditFormComponent.prototype.onGodownRackChange = function (item) {
        this.selectedGodownRack = {
            Id: item.Value,
            Name: item.Text
        };
    };
    GodownShelfEditFormComponent.prototype.getGodownRowValue = function (item) {
        this.selectedGodownRowId = {
            Value: item.Value,
            Text: item.Text
        };
        this.getGodownRackKeyPair(item.Value);
    };
    GodownShelfEditFormComponent.prototype.createGodownShelf = function (formValue) {
        if (this.formGroup.valid) {
            if (!this.selectedWarehouseId) {
                this.showToastrWarning("Select Warehouse please");
                return false;
            }
            else if (!this.selectedGodownId) {
                this.showToastrWarning("Select Godown please.");
                return false;
            }
            else if (!this.selectedGodownRowId) {
                this.showToastrWarning("Select Godown Row please.");
                return false;
            }
            else if (!this.selectedGodownRack || !this.selectedGodownRack["Id"]) {
                this.showToastrWarning("Select Godown Rack please.");
                return false;
            }
            this.executeGodownRowCreation(formValue);
        }
    };
    GodownShelfEditFormComponent.prototype.executeGodownRowCreation = function (formValue) {
        var _this = this;
        this.ngxService.start();
        var godwom = {
            Name: formValue.Name,
            Alias: formValue.Alias,
            WarehouseId: this.selectedWarehouseId,
            GodwomId: this.selectedGodownId,
            GodownRowId: this.selectedGodownRowId.Value,
            GodownRackId: this.selectedGodownRack["Id"],
            Height: formValue.Height,
            Width: formValue.Width,
            Depth: formValue.Depth,
            AML_Warehouse: undefined,
            AML_Godwom: undefined,
            AML_GodownRack: undefined
        };
        var apiUrl = this.apiConstant.GODOWN_SHELF_CREATE;
        this._godownShelfService.create(apiUrl, godwom)
            .subscribe(function (res) {
            _this.showToastrSuccess("Godown Shelf created successfully");
            setTimeout(function () {
                _this.redirectToGodownShelfList();
            }, 2000);
            _this.ngxService.stop();
        }, (function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    GodownShelfEditFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    GodownShelfEditFormComponent.prototype.dropdownSettings = function () {
        this.warehouseDropdownSettings = {
            idField: 'Value',
            textField: 'Text',
            singleSelection: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.godownRowDropdownSettings = {
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
        this.godownRackDropdownSettings = {
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
    GodownShelfEditFormComponent.prototype.getErrorMessage = function (formElement) {
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
    GodownShelfEditFormComponent.prototype.redirectToGodownShelfList = function () {
        this.router.navigate([this.routesList.GODOWN_SHELF_LISTING]);
    };
    GodownShelfEditFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-godown-shelf-edit-form",
            template: __webpack_require__(/*! ../templates/edit-form.component.html */ "./src/app/layout/content/godown-shelf/templates/edit-form.component.html"),
            styles: [__webpack_require__(/*! ../styles/godown-shelf-form.component.scss */ "./src/app/layout/content/godown-shelf/styles/godown-shelf-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_godown_shelf_service__WEBPACK_IMPORTED_MODULE_2__["GodownShelfService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"]])
    ], GodownShelfEditFormComponent);
    return GodownShelfEditFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/godown-shelf/godown-shelf.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/content/godown-shelf/godown-shelf.module.ts ***!
  \********************************************************************/
/*! exports provided: GodownShelfModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodownShelfModule", function() { return GodownShelfModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var _services_godown_shelf_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/godown-shelf.service */ "./src/app/layout/content/godown-shelf/services/godown-shelf.service.ts");
/* harmony import */ var _components_godown_shelf_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/godown-shelf-form.component */ "./src/app/layout/content/godown-shelf/components/godown-shelf-form.component.ts");
/* harmony import */ var _components_godown_shelf_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/godown-shelf-list.component */ "./src/app/layout/content/godown-shelf/components/godown-shelf-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _components_godwom_shelf_edit_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/godwom-shelf-edit-form.component */ "./src/app/layout/content/godown-shelf/components/godwom-shelf-edit-form.component.ts");
/* harmony import */ var src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/helpers/services/excel-file.service */ "./src/app/helpers/services/excel-file.service.ts");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
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
                component: _components_godown_shelf_list_component__WEBPACK_IMPORTED_MODULE_6__["GodownShelfListComponent"],
            },
            {
                path: "create",
                component: _components_godown_shelf_form_component__WEBPACK_IMPORTED_MODULE_5__["GodownShelfFormComponent"],
            },
            {
                path: "edit/:Id",
                component: _components_godwom_shelf_edit_form_component__WEBPACK_IMPORTED_MODULE_9__["GodownShelfEditFormComponent"],
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var GodownShelfModule = /** @class */ (function () {
    function GodownShelfModule() {
    }
    GodownShelfModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"],
                ngb_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_12__["NgxPrintModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_13__["NgxUiLoaderModule"]
            ],
            declarations: [
                _components_godown_shelf_form_component__WEBPACK_IMPORTED_MODULE_5__["GodownShelfFormComponent"], _components_godown_shelf_list_component__WEBPACK_IMPORTED_MODULE_6__["GodownShelfListComponent"], _components_godwom_shelf_edit_form_component__WEBPACK_IMPORTED_MODULE_9__["GodownShelfEditFormComponent"]
            ],
            providers: [
                _services_godown_shelf_service__WEBPACK_IMPORTED_MODULE_4__["GodownShelfService"],
                src_app_helpers_services_excel_file_service__WEBPACK_IMPORTED_MODULE_10__["ExporterService"]
            ],
            entryComponents: []
        })
    ], GodownShelfModule);
    return GodownShelfModule;
}());



/***/ }),

/***/ "./src/app/layout/content/godown-shelf/services/godown-shelf.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/content/godown-shelf/services/godown-shelf.service.ts ***!
  \******************************************************************************/
/*! exports provided: GodownShelfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GodownShelfService", function() { return GodownShelfService; });
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


var GodownShelfService = /** @class */ (function (_super) {
    __extends(GodownShelfService, _super);
    function GodownShelfService(injector) {
        return _super.call(this, injector) || this;
    }
    GodownShelfService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], GodownShelfService);
    return GodownShelfService;
}(src_app_helpers_services_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]));



/***/ }),

/***/ "./src/app/layout/content/godown-shelf/styles/godown-shelf-form.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/content/godown-shelf/styles/godown-shelf-form.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block {\n  color: red; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: 20px !important;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.toggle-label {\n  margin-top: 10px;\n  margin-right: -10px;\n  color: green;\n  font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/layout/content/godown-shelf/templates/edit-form.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/layout/content/godown-shelf/templates/edit-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          CHAMBER BAY EDIT\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.GODOWN_SHELF_LISTING]\">Chamber Bay</a></li>\r\n          <li class=\"active\">Edit</li>\r\n        </ol>\r\n      </section>\r\n    <div col-md-12>\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"updateGodownShelf(formGroup.value)\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group  pull-right\">\r\n                <button type=\"button\" (click)=\"redirectToGodownShelfList()\" class=\"btn-wms\">Chamber Bay Listing</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Warehouse</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair\" [settings]=\"warehouseDropdownSettings\"\r\n                    formControlName=\"WarehouseId\" (onSelect)=\"getGodownKeyPair($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                </div>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedWarehouseId\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Chamber</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"godownKeyPair\" [settings]=\"godownDropdownSettings\"\r\n                    formControlName=\"GodownId\" (onSelect)=\"getGodownRowKeyPair($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedGodownId\">\r\n                    Required\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Chamber Aisle</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"godownRowKeyPair\"\r\n                    [settings]=\"godownRowDropdownSettings\" \r\n                    formControlName=\"GodownRowId\" (onSelect)=\"getGodownRowValue($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedGodownRowId\">\r\n                    Required\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Chamber Rack</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"godownRackKeyPair\"\r\n                    [settings]=\"godownRackDropdownSettings\" formControlName=\"GodownRackId\" (onSelect)=\"onGodownRackChange($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedGodownRack || !selectedGodownRack['Id']\">\r\n                    Required\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Name</label>\r\n                  <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter Bay Name\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                    {{getErrorMessage('Name')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Alias</label>\r\n                  <input type=\"text\" formControlName=\"Alias\" class=\"form-control input-sm\" placeholder=\"Enter Bay Alias\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Alias.invalid\">\r\n                    {{getErrorMessage('Alias')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Width</label>\r\n                  <input type=\"number\" formControlName=\"Width\" class=\"form-control input-sm\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Width.invalid\">\r\n                    {{getErrorMessage('Width')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Height</label>\r\n                  <input type=\"number\" formControlName=\"Height\" class=\"form-control input-sm\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Height.invalid\">\r\n                    {{getErrorMessage('Height')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Depth</label>\r\n                  <input type=\"number\" formControlName=\"Depth\" class=\"form-control input-sm\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Depth.invalid\">\r\n                    {{getErrorMessage('Depth')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"box-footer\">\r\n              <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Update</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <ngx-ui-loader></ngx-ui-loader>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/layout/content/godown-shelf/templates/form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/content/godown-shelf/templates/form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          CREATE BAY/SHELF/BIN\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.GODOWN_SHELF_LISTING]\">Chamber Bay</a></li>\r\n          <li class=\"active\">Create</li>\r\n        </ol>\r\n      </section>\r\n    <div col-md-12>\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createGodownShelf(formGroup.value)\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div class=\"form-group  pull-right\">\r\n                <button type=\"button\" (click)=\"redirectToGodownShelfList()\" class=\"btn-wms\">Chamber Bay Listing</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Warehouse</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair\" [settings]=\"warehouseDropdownSettings\"\r\n                    formControlName=\"WarehouseId\" (onSelect)=\"getGodownKeyPair($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                </div>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedWarehouseId\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Chamber</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"godownKeyPair\" [settings]=\"godownDropdownSettings\"\r\n                    formControlName=\"GodownId\" (onSelect)=\"getGodownRowKeyPair($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedGodownId\">\r\n                    Required\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Chamber Aisle</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"godownRowKeyPair\"\r\n                    [settings]=\"godownRowDropdownSettings\" \r\n                    formControlName=\"GodownRowId\" (onSelect)=\"getGodownRowValue($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedGodownRowId\">\r\n                    Required\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Chamber Rack</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"godownRackKeyPair\"\r\n                    [settings]=\"godownRackDropdownSettings\" formControlName=\"GodownRackId\" (onSelect)=\"onGodownRackChange($event)\">\r\n                  </ng-multiselect-dropdown>\r\n                  <span class=\"help-block\" *ngIf=\"!this.selectedGodownRack || !selectedGodownRack['Id']\">\r\n                    Required\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Name</label>\r\n                  <input type=\"text\" formControlName=\"Name\" class=\"form-control input-sm\" placeholder=\"Enter BAY/SHELF/BIN Name\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Name.invalid\">\r\n                    {{getErrorMessage('Name')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Alias</label>\r\n                  <input type=\"text\" formControlName=\"Alias\" class=\"form-control input-sm\" placeholder=\"Enter BAY/SHELF/BIN Alias\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Alias.invalid\">\r\n                    {{getErrorMessage('Alias')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Width (Inch)</label>\r\n                  <input type=\"number\" formControlName=\"Width\" class=\"form-control input-sm\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Width.invalid\">\r\n                    {{getErrorMessage('Width')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Height (Inch)</label>\r\n                  <input type=\"number\" formControlName=\"Height\" class=\"form-control input-sm\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Height.invalid\">\r\n                    {{getErrorMessage('Height')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Depth (Inch)</label>\r\n                  <input type=\"number\" formControlName=\"Depth\" class=\"form-control input-sm\">\r\n                  <span class=\"help-block\" *ngIf=\"formGroup.controls.Depth.invalid\">\r\n                    {{getErrorMessage('Depth')}}\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"box-footer\">\r\n              <button type=\"submit\" [disabled]=\"formGroup.invalid\" class=\"btn btn-success pull-right\">Add</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </section>\r\n"

/***/ }),

/***/ "./src/app/layout/content/godown-shelf/templates/list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/content/godown-shelf/templates/list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <section class=\"content-header\">\r\n        <h1>\r\n          CHAMBER BAY LISTING\r\n          <small>\r\n            <button class=\"btn-wms\" (click)=\"redirectToCreateGodownShelf()\"><i class=\"fa fa-plus-circle\"></i> </button>\r\n          </small>\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n          <li><a routerLink=\"[this.routesList.GODOWN_SHELF_LISTING]\">Chamber Bay</a></li>\r\n          <li class=\"active\">Listing</li>\r\n        </ol>\r\n      </section>\r\n      <div class=\"pull-right\">\r\n        <button type=\"submit\" [disabled]=\"formGroup.invalid\" (click)=\"openModal()\" class=\"btn btn-default\">Print</button>\r\n        <button class=\"btn-excel\" (click)=\"exportServiceAsExcel()\"><i class=\"fa fa-file-excel-o\"></i></button>\r\n      </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-solid\">\r\n        <div class=\"box-header\">\r\n          <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\">\r\n                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th>Sr.</th>\r\n                      <th>Warehouse</th>\r\n                      <th>Chamber</th>\r\n                      <th>Aisle</th>\r\n                      <th>Rack</th>\r\n                      <th>Height</th>\r\n                      <th>Width</th>\r\n                      <th>Depth</th>\r\n                      <th>Bay Name</th>\r\n                      <th>Alias</th>\r\n                      <th>Location</th>\r\n                      <th>Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let godwom of godownShelfList; let i = index\">\r\n                      <td>{{i+1}}</td> \r\n                      <td>{{godwom.AML_Warehouse.Name}}</td>\r\n                      <td>{{godwom.GodwomId}} - {{godwom.AML_Godwom.Name}}</td>\r\n                      <td>{{godwom.GodownRowId}} - {{godwom.AML_GodownRack.AML_GodownRow.Name}}</td>\r\n                      <td>{{godwom.GodownRackId}} - {{godwom.AML_GodownRack.Alias}}</td>\r\n                      <td>{{godwom.Height}}</td>\r\n                      <td>{{godwom.Width}}</td>\r\n                      <td>{{godwom.Depth}}</td>\r\n                      <td>{{godwom.GodownShelfId}} - {{godwom.Name}}</td>\r\n                      <td>{{godwom.Alias}}</td>\r\n                      <td>{{godwom.AML_Godwom.Abbreviation}}{{godwom.AML_GodownRack.AML_GodownRow.Alias}}{{godwom.AML_GodownRack.Alias}}{{godwom.Alias}}</td>\r\n                      <td>\r\n                        <button type=\"button\" id=\"update\" class=\"editBtn btn-warning\" (click)=\"Edit(godwom.GodownShelfId)\"><i\r\n                            class=\"fa fa-edit\"></i></button>\r\n                            <button type=\"button\" id=\"delete\" tooltip=\"Delete\" class=\"editBtn btn-danger\" (click)=\"Delete(godwom)\"><i class=\"fa fa-trash\"></i></button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                  <ngx-ui-loader></ngx-ui-loader>\r\n                </table>\r\n              </div>\r\n            </div>\r\n     \r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>\r\n<modal #AllModal>\r\n  <modal-header>\r\n     \r\n    <div class=\"row no-print\" id=\"printButton\">\r\n      <div class=\"col-xs-12\">\r\n        <button\r\n        [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n         class=\"btn-wms hidden-print pull-right print-btn\" printTitle=\"Customer\"\r\n          [useExistingCss]=\"true\" ngxPrint printSectionId=\"print-section\">\r\n          <span aria-hidden=\"true\"><i class=\"fa fa-print\"></i>\r\n          </span></button>\r\n      </div>\r\n    </div>\r\n  </modal-header>\r\n\r\n  <modal-content style=\"padding:20px\">\r\n    <div class=\"box box-primary\" id=\"print-section\">\r\n      <div class=\"box-header with-border\">\r\n        <h3 class=\"box-title detail-title\">Bay</h3>\r\n        <div class=\"form-group  pull-right\">\r\n\r\n        </div>\r\n      </div>\r\n      <section class=\"invoice\">\r\n        <!-- title row -->\r\n    \r\n        <!-- info row -->\r\n        <div class=\"col-sm-6 invoice-col\">\r\n          <div class=\"col-xs-12\">\r\n            <h2 class=\"page-header\">\r\n              <img id=\"logo\" src=\"assets/images/aml-png-logo-web-1.png\" height=\"70\" width=\"160\" style=\"background-color: white;\">\r\n              <!-- <small id=\"date\" class=\"pull-right\">Date: {{dateInvoice}} </small> -->\r\n            </h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"row invoice-info\">\r\n          <div class=\"col-sm-6 invoice-col pull-right\" id=\"invoice-col\">\r\n        \r\n            <address>\r\n              <strong>AML,Logistics</strong>\r\n              Head Office Address: Plot No. 193, 1st Floor, \r\n              Street No.1, Sector I/10,\r\n              Industrial Area, Islamabad. \r\n              Phone: +92-51-4102361-62\r\n            \r\n            </address>\r\n          </div>\r\n          <!-- /.col -->\r\n        \r\n          <!-- /.col -->\r\n          <!-- /.col -->\r\n        </div>\r\n        <!-- /.row -->\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\" style=\"text-align: center;\">\r\n            <h4><u>Locations</u></h4>\r\n          </div>\r\n      </div>\r\n   <!-- info row -->\r\n \r\n  <!-- /.row -->\r\n\r\n        <!-- Table row -->\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 table-responsive\">\r\n            <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n              <thead>\r\n                <tr role=\"row\">\r\n                  <th>\r\n                    Sr.\r\n                  </th>\r\n                  <th>\r\n                    Bay Name\r\n                  </th>\r\n                  <th>\r\n                    Warehouse\r\n                  </th>\r\n                  <th>\r\n                    Chamber\r\n                  </th>\r\n                  <th>\r\n                    Chamber Aisle\r\n                  </th>\r\n                  <th>\r\n                    Rack\r\n                  </th>\r\n                  <th>\r\n                    Height\r\n                  </th>\r\n                  <th>\r\n                    Width\r\n                  </th>\r\n                  <th>\r\n                    Depth\r\n                  </th>\r\n                  <th>\r\n                    Alias\r\n                  </th>\r\n                 \r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr role=\"row\" *ngFor=\"let godwom of godownShelfList; let i = index\">\r\n                  <td>{{i+1}}</td> \r\n                  <td>{{godwom.Name}}</td>\r\n                  <td>{{godwom.AML_Warehouse.Name}}</td>\r\n                  <td>{{godwom.AML_Godwom.Name}}</td>\r\n                  <td>{{godwom.AML_GodownRack.AML_GodownRow.Name}}</td>\r\n                  <td>{{godwom.AML_GodownRack.Alias}}</td>\r\n                  <td>{{godwom.Height}}</td>\r\n                  <td>{{godwom.Width}}</td>\r\n                  <td>{{godwom.Depth}}</td>\r\n                  <td>{{godwom.Alias}}</td>\r\n                 \r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n      \r\n        \r\n      </section>\r\n     \r\n\r\n     \r\n    </div>\r\n  </modal-content>\r\n\r\n  <modal-footer>\r\n  \r\n  </modal-footer>\r\n</modal>"

/***/ })

}]);
//# sourceMappingURL=content-godown-shelf-godown-shelf-module.js.map