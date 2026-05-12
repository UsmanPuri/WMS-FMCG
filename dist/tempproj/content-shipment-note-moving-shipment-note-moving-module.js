(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-shipment-note-moving-shipment-note-moving-module"],{

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

/***/ "./src/app/layout/content/shipment-note-moving/components/shipment-note-moving-edit.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-moving/components/shipment-note-moving-edit.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ShipmentNoteMovingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentNoteMovingEditComponent", function() { return ShipmentNoteMovingEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shipment_note_moving_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shipment-note-moving.service */ "./src/app/layout/content/shipment-note-moving/services/shipment-note-moving.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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







var ShipmentNoteMovingEditComponent = /** @class */ (function (_super) {
    __extends(ShipmentNoteMovingEditComponent, _super);
    function ShipmentNoteMovingEditComponent(injector, _shipmentNoteService, activeRoute) {
        var _this = _super.call(this, injector) || this;
        _this._shipmentNoteService = _shipmentNoteService;
        _this.activeRoute = activeRoute;
        _this.parkingStageDropdownSettings = {};
        _this.selectedParkingStage = {};
        return _this;
    }
    ShipmentNoteMovingEditComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getById();
        this.getParkingStagesKeyPair();
    };
    ShipmentNoteMovingEditComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
        ];
        this.addFormControlWithValidations("ParkingStageIdFrom", requiredValidation);
        this.addFormControlWithValidations("ParkingStageIdTo", requiredValidation);
    };
    ShipmentNoteMovingEditComponent.prototype.dropdownSettings = function () {
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
    ShipmentNoteMovingEditComponent.prototype.getById = function () {
        var _this = this;
        debugger;
        var Id = this.activeRoute.snapshot.params["Id"];
        if (Id) {
            var apiAddress = this.apiConstant.SHIPMENT_NOTE_GET_ONE + ("" + Id);
            this._shipmentNoteService.getData(apiAddress)
                .subscribe(function (res) {
                _this.shipmentNote = res;
                debugger;
                console.log(_this.shipmentNote);
            }, function (error) {
                _this.errorHandler.handleError(error);
                _this.errorMessage = _this.errorHandler.errorMessage;
            });
        }
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
    };
    ShipmentNoteMovingEditComponent.prototype.addMoveQuantity = function (event, item) {
        var movQty = event.target.value;
        if (movQty > item.Balance) {
            this.showToastrWarning("Moved Quantity Must Be Equal or Less Tha Received Quantity");
        }
        else {
            var model = this.shipmentNote.AML_ShipmentNoteChild.filter(function (a) { return a.ShipmentNoteChildId == item.ShipmentNoteChildId; });
            model[0].MoveQuantity = event.target.value;
            console.log(model);
            item.MoveQuantity = event.target.value;
            console.log(this.shipmentNote);
        }
    };
    ShipmentNoteMovingEditComponent.prototype.moveASN = function () {
        var _this = this;
        var ASN = this.shipmentNote;
        console.log(ASN);
        var apiUrl = this.apiConstant.SHIPMENT_NOTE_MOVE + ("/" + this.shipmentNote.ShipmentNoteId);
        this._shipmentNoteService.update(apiUrl, ASN)
            .subscribe(function (res) {
            _this.showToastrSuccess("ASN Moved Successfully");
            setTimeout(function () {
                _this.redirectToListShipmentNote();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    ShipmentNoteMovingEditComponent.prototype.getParkingStagesKeyPair = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.PARKINGSTAGES_KEYPAIR;
        this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.parkingStageKeyPair = res;
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteMovingEditComponent.prototype.parkingStageChange = function (item) {
        var _this = this;
        this.selectedParkingStage = {
            Id: item.Value,
            Name: item.Text
        };
        this.shipmentNote.ParkingStageIdFrom = item.Value;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            ParkingStageId: item.Value,
            ShipmentNoteId: this.shipmentNote.ShipmentNoteId
        };
        var apiAddress = this.apiConstant.SHIPMENT_NOTE_BY_PARKING_ID;
        this._shipmentNoteService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.shipmentNoteChild = res;
            debugger;
            console.log(_this.shipmentNoteChild);
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteMovingEditComponent.prototype.onDeSelect = function (item) {
        item = {};
        this.shipmentNote.ParkingStageIdFrom = null;
    };
    ShipmentNoteMovingEditComponent.prototype.parkingStageToChange = function (item) {
        this.shipmentNote.ParkingStageIdTo = item.Value;
    };
    ShipmentNoteMovingEditComponent.prototype.onDeSelectparkingStageTo = function (item) {
        item = {};
        this.shipmentNote.ParkingStageIdTo = null;
    };
    // Edit(id){
    //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
    //   this.router.navigate([updateUrl]);
    // }
    ShipmentNoteMovingEditComponent.prototype.redirectToListShipmentNote = function () {
        this.router.navigate([this.routesList.SHIPMENT_NOTE_MOVING_LISTING]);
    };
    ShipmentNoteMovingEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-shipment-note-moving-edit",
            template: __webpack_require__(/*! ../templates/edit.component.html */ "./src/app/layout/content/shipment-note-moving/templates/edit.component.html"),
            styles: [__webpack_require__(/*! ../styles/shipment-note-moving-form.component.scss */ "./src/app/layout/content/shipment-note-moving/styles/shipment-note-moving-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_shipment_note_moving_service__WEBPACK_IMPORTED_MODULE_1__["ShipmentNoteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], ShipmentNoteMovingEditComponent);
    return ShipmentNoteMovingEditComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/shipment-note-moving/components/shipment-note-moving-list.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-moving/components/shipment-note-moving-list.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ShipmentNoteMovingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentNoteMovingListComponent", function() { return ShipmentNoteMovingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shipment_note_moving_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shipment-note-moving.service */ "./src/app/layout/content/shipment-note-moving/services/shipment-note-moving.service.ts");
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












var ShipmentNoteMovingListComponent = /** @class */ (function (_super) {
    __extends(ShipmentNoteMovingListComponent, _super);
    function ShipmentNoteMovingListComponent(injector, _shipmentNoteService, chRef, ngxService) {
        var _this = _super.call(this, injector) || this;
        _this._shipmentNoteService = _shipmentNoteService;
        _this.chRef = chRef;
        _this.ngxService = ngxService;
        _this.hideShowList = [];
        _this.customerDropdownSettings = {};
        _this.selectedCustomer = {};
        return _this;
    }
    ShipmentNoteMovingListComponent.prototype.ngOnInit = function () {
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
    ShipmentNoteMovingListComponent.prototype.exportExcel = function (fileName, table_id, fileHeader) {
        var element = document.getElementById(table_id);
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].table_to_sheet(element);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].book_append_sheet(wb, ws, fileHeader);
        xlsx__WEBPACK_IMPORTED_MODULE_8__["writeFile"](wb, fileName);
    };
    //PDF Conversion
    ShipmentNoteMovingListComponent.prototype.createPdf = function (my_file, table_id) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_10__["default"]({ orientation: "landscape" });
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_11___default()(doc, { html: table_id });
        doc.save(my_file);
    };
    // CSV Converterd
    ShipmentNoteMovingListComponent.prototype.downloadCSV = function (data, filename) {
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var blob = new Blob([csvArray], { type: 'text/csv' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"])(blob, filename);
    };
    ShipmentNoteMovingListComponent.prototype.HideShow = function (index) {
        var i = Number(index);
        if (this.hideShowList[i].status) {
            this.hideShowList[i].status = false;
        }
        else {
            this.hideShowList[i].status = true;
        }
    };
    ShipmentNoteMovingListComponent.prototype.addFormValidations = function () {
        var requiredValidation = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
        ];
        this.addFormControlWithValidations("CustomerId", []);
    };
    ShipmentNoteMovingListComponent.prototype.dropdownSettings = function () {
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
    ShipmentNoteMovingListComponent.prototype.getCustomerKeyPair = function () {
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
    ShipmentNoteMovingListComponent.prototype.customerChange = function (item) {
        var _this = this;
        this.selectedCustomer = {
            Id: item.Value,
            Name: item.Text
        };
        debugger;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
            CustomerId: item.Value,
            FormType: "Move",
        };
        var apiAddress = this.apiConstant.SHIPMENT_NOTE_LIST_BY_CUSTOMER;
        this.ngxService.start();
        this._shipmentNoteService.getKeyPair(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.shipmentNoteList = res;
            //console.log(this.shipmentNoteList)
            _this.chRef.detectChanges();
            _this.chRef.reattach();
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
    ShipmentNoteMovingListComponent.prototype.onDeSelect = function () {
        this.shipmentNoteList = [];
    };
    ShipmentNoteMovingListComponent.prototype.getAllShipmentNotes = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.SHIPMENT_NOTE_LIST;
        this.ngxService.start();
        this._shipmentNoteService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.shipmentNoteList = res;
            //console.log(this.shipmentNoteList)
            // Now you can use jQuery DataTables :
            var table = jquery__WEBPACK_IMPORTED_MODULE_4__('table');
            _this.dataTable = table.DataTable({
                lengthMenu: [5, 10, 20, 50, 100],
                "iDisplayLength": 100,
                retrieve: true
            });
            _this.ngxService.stop();
        }, function (error) {
            _this.ngxService.stop();
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    // Edit(id){
    //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
    //   this.router.navigate([updateUrl]);
    // }
    ShipmentNoteMovingListComponent.prototype.redirectToCreateShipmentNote = function () {
        this.router.navigate([this.routesList.SHIPMENT_NOTE_MOVING_CREATE]);
    };
    ShipmentNoteMovingListComponent.prototype.Details = function (id) {
        debugger;
        var updateUrl = this.routesList.SHIPMENT_NOTE_MOVING_EDIT + ("/" + id);
        this.router.navigate([updateUrl]);
    };
    ShipmentNoteMovingListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-shipment-note-moving-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/shipment-note-moving/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/shipment-note-moving-form.component.scss */ "./src/app/layout/content/shipment-note-moving/styles/shipment-note-moving-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_shipment_note_moving_service__WEBPACK_IMPORTED_MODULE_1__["ShipmentNoteService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]])
    ], ShipmentNoteMovingListComponent);
    return ShipmentNoteMovingListComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/shipment-note-moving/services/shipment-note-moving.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-moving/services/shipment-note-moving.service.ts ***!
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

/***/ "./src/app/layout/content/shipment-note-moving/shipment-note-moving.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-moving/shipment-note-moving.module.ts ***!
  \************************************************************************************/
/*! exports provided: ShipmentNoteMovingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentNoteMovingModule", function() { return ShipmentNoteMovingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var _services_shipment_note_moving_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/shipment-note-moving.service */ "./src/app/layout/content/shipment-note-moving/services/shipment-note-moving.service.ts");
/* harmony import */ var _components_shipment_note_moving_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shipment-note-moving-list.component */ "./src/app/layout/content/shipment-note-moving/components/shipment-note-moving-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
/* harmony import */ var _components_shipment_note_moving_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shipment-note-moving-edit.component */ "./src/app/layout/content/shipment-note-moving/components/shipment-note-moving-edit.component.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
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
                component: _components_shipment_note_moving_list_component__WEBPACK_IMPORTED_MODULE_5__["ShipmentNoteMovingListComponent"],
            },
            // {
            //   path: "create",
            //   component: ShipmentNoteReceivingFormComponent,
            // },
            {
                path: "edit/:Id",
                component: _components_shipment_note_moving_edit_component__WEBPACK_IMPORTED_MODULE_9__["ShipmentNoteMovingEditComponent"],
            },
            {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var ShipmentNoteMovingModule = /** @class */ (function () {
    function ShipmentNoteMovingModule() {
    }
    ShipmentNoteMovingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ngb_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__["NgxUiLoaderModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_11__["NgxPrintModule"]
            ],
            declarations: [
                _components_shipment_note_moving_list_component__WEBPACK_IMPORTED_MODULE_5__["ShipmentNoteMovingListComponent"], _components_shipment_note_moving_edit_component__WEBPACK_IMPORTED_MODULE_9__["ShipmentNoteMovingEditComponent"]
            ],
            providers: [
                _services_shipment_note_moving_service__WEBPACK_IMPORTED_MODULE_4__["ShipmentNoteService"]
            ],
            entryComponents: []
        })
    ], ShipmentNoteMovingModule);
    return ShipmentNoteMovingModule;
}());



/***/ }),

/***/ "./src/app/layout/content/shipment-note-moving/styles/shipment-note-moving-form.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-moving/styles/shipment-note-moving-form.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block {\n  color: red; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: 20px !important;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.toggle-label {\n  margin-top: 10px;\n  margin-right: -10px;\n  color: green;\n  font-size: 15px; }\n\n.shipment-item-add {\n  margin-top: 17px; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n  transition: opacity .15s linear; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n  transition: -webkit-transform .3s ease-out;\n  transition: transform .3s ease-out;\n  transition: transform .3s ease-out, -webkit-transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n  transform: translate(0, -25%); }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    height: 500px;\n    margin: 30px auto; } }\n\n.pallets-dropdown {\n  width: 150px; }\n"

/***/ }),

/***/ "./src/app/layout/content/shipment-note-moving/templates/edit.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-moving/templates/edit.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  table {\r\n    display: block;\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n}\r\n</style>\r\n<section class=\"content-header\">\r\n    <h1>\r\n      ASN MOVING \r\n      <!-- <small>\r\n        <button class=\"btn-wms\" (click)=\"redirectToCreateShipmentNote()\"><i class=\"fa fa-plus\"></i> New</button>\r\n      </small> -->\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li><a routerLink=\"[this.routesList.SHIPMENT_NOTE_MOVING_LISTING]\">ASN Moving</a></li>\r\n      <li class=\"active\">Listing</li>\r\n    </ol>\r\n  </section>\r\n  \r\n  <section class=\"content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n          \r\n            <div class=\"form-group  pull-right\">\r\n              <button type=\"button\" (click)=\"redirectToListShipmentNote()\" class=\"btn-wms\">ASN Moving Listing</button>\r\n            </div>\r\n            <h3>ASN Movement</h3>\r\n          </div>\r\n      \r\n          <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"moveASN()\">\r\n\r\n         \r\n          <!-- /.box-header -->\r\n          <div class=\"box-body\">\r\n           \r\n            <div class=\"col-md-6\">\r\n                <div class=\"box-body box-profile\">\r\n                    <ul class=\"list-group list-group-unbordered\">\r\n                        <li class=\"list-group-item\">\r\n                            <b>ASN Id</b><a class=\"pull-right\">{{shipmentNote.ShipmentNoteId}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Shipment Note No</b><a class=\"pull-right\">{{shipmentNote.ShipmentNoteNo}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>ASN No.</b><a class=\"pull-right\">{{shipmentNote.ASNNo}}</a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>             \r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"box-body box-profile\">\r\n                    <ul class=\"list-group list-group-unbordered\">\r\n                        <li class=\"list-group-item\">\r\n                            <b>ASN Date</b><a class=\"pull-right\">{{shipmentNote.ASNDate | date}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Delivery No</b><a class=\"pull-right\">{{shipmentNote.DeliveryNo}}</a>\r\n                        </li>\r\n                        <li class=\"list-group-item\">\r\n                            <b>Cargo Status</b><a class=\"pull-right\">{{shipmentNote.CargoStatus}}</a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>             \r\n            </div>\r\n          \r\n\r\n    \r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Moved From</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"parkingStageKeyPair\"\r\n                    [settings]=\"parkingStageDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedParkingStage')\"\r\n                    formControlName=\"ParkingStageIdFrom\" (onSelect)=\"parkingStageChange($event)\">\r\n                  </ng-multiselect-dropdown>\r\n    \r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <label>Moved To</label>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"parkingStageKeyPair\"\r\n                    [settings]=\"parkingStageDropdownSettings\" (onDeSelect)=\"onDeSelectparkingStageTo('selectedParkingStage')\"\r\n                    formControlName=\"ParkingStageIdTo\" (onSelect)=\"parkingStageToChange($event)\">\r\n                  </ng-multiselect-dropdown>\r\n    \r\n                </div>\r\n              </div>\r\n             \r\n            </div>\r\n            <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 table-responsive\">\r\n                  <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                    <thead>\r\n                      <tr role=\"row\">\r\n                        <th>\r\n                          Customer SKU \r\n                        </th>\r\n                        <th>\r\n                          SKU Name \r\n                        </th>\r\n                        <th>\r\n                          SKU CBC \r\n                        </th>\r\n                        <th>\r\n                          Batch / Serial\r\n                        </th>\r\n                        <th>\r\n                         SN #\r\n                        </th> \r\n                        <th>\r\n                          PR #\r\n                        </th> \r\n                        <th>\r\n                          Mfg Date\r\n                        </th> \r\n                       \r\n                        <th>\r\n                         Expiry Date\r\n                        </th>\r\n                        <th>\r\n                           Balance\r\n                        </th>\r\n                        <th>GatePass</th>\r\n                       <th>ServiceRequest</th>\r\n                       <th>RMA</th>\r\n                       <th>RecievedFrom</th>\r\n                       <th>ConsignmentNo</th>\r\n                       <th>ICare</th>\r\n                       <th>Business Type</th>\r\n                       <th>Handler Name</th>\r\n                       <th>Inbound Pool</th>\r\n                       <th>Network</th>\r\n                       <th>Packing List No</th>\r\n                       <th>Received Station</th>\r\n                       <th>Contract No</th>\r\n                       <th>Delivery Type</th>\r\n                       <th>Inbound Against</th>\r\n                       <th>Move Quantity</th>\r\n                      \r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr role=\"row\" *ngFor=\"let item of shipmentNoteChild\">\r\n                        <td>{{item.Description}}</td>\r\n                        <td>{{item.Name}}</td>\r\n                        <td>{{item.ItemCBM}}</td>\r\n                        <td>{{item.Batch}}</td>\r\n                        <td>{{item.SNno}}</td>\r\n                        <td>{{item.PRno}}</td>\r\n                        <td >\r\n                          <span *ngIf=\"item.MfgDate=='3020-03-12T00:00:00'; else inactive_span\">Null</span>\r\n                          <ng-template #inactive_span>  <span>{{item.MfgDate | date}}</span></ng-template>\r\n                        </td>\r\n                        <td>\r\n                          <span *ngIf=\"item.ExpiryDate=='3020-03-12T00:00:00'; else inactive_span\">Null</span>\r\n                          <ng-template #inactive_span>  <span> {{item.ExpiryDate | date}}</span></ng-template>\r\n                         \r\n                        </td>\r\n                        <td>{{item.Balance}}</td>  \r\n                        <td>{{item.GatePass}}</td>\r\n                        <td>{{item.ServiceRequest}}</td>\r\n                        <td>{{item.RMA}}</td>\r\n                        <td>{{item.RecievedFrom}}</td>\r\n                        <td>{{item.ConsignmentNo}}</td>\r\n                        <td>{{item.ICare}}</td>\r\n                        <td>{{item.BusinessType}}</td>\r\n                        <td>{{item.HandlerName}}</td>\r\n                        <td>{{item.InboundPool}}</td>\r\n                        <td>{{item.Network}}</td>\r\n                        <td>{{item.PackingListNo}}</td>\r\n                        <td>{{item.ReceivedStation}}</td>\r\n                        <td>{{item.ContractNo}}</td>\r\n                        <td>{{item.DeliveryType}}</td>\r\n                        <td>{{item.InboundAgainst}}</td>\r\n                        <td><input type=\"number\" value={{item.MoveQuantity}} (blur)=\"addMoveQuantity($event,item)\" class=\"form-control\"></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n       \r\n            </div>\r\n          </div>\r\n          <!-- /.box-body -->\r\n          <div class=\"box-footer\">\r\n            <button type=\"submit\" class=\"btn btn-wms pull-right\" [disabled]=\"formGroup.invalid\">\r\n                Move\r\n            </button>\r\n          </div>\r\n        </form>\r\n        </div>\r\n        <!-- /.box -->\r\n      </div>\r\n      <!-- /.col -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>"

/***/ }),

/***/ "./src/app/layout/content/shipment-note-moving/templates/list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note-moving/templates/list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    ASN MOVING LISTING\r\n    <!-- <small>\r\n      <button class=\"btn-wms\" (click)=\"redirectToCreateShipmentNote()\"><i class=\"fa fa-plus\"></i> New</button>\r\n    </small> -->\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.SHIPMENT_NOTE_MOVING_LISTING]\">Shipment Note</a></li>\r\n    <li class=\"active\">Listing</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate>\r\n\r\n   \r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header\">\r\n          <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Customer</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                  [settings]=\"customerDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedCustomer')\"\r\n                  formControlName=\"CustomerId\" (onSelect)=\"customerChange($event)\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n        \r\n           \r\n          </div>\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\" id=\"myTable\">\r\n                <nav>\r\n                  <ol class=\"breadcrumb\" style=\"font-size: 1.3em; width: 50%; \r\n                      background-color: #6c757d;\">\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"downloadCSV(this.shipmentNoteList, 'asn-moving-list.csv')\" style=\"color: white;\">\r\n                        Download CSV</a>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"exportExcel('asn-moving-list.xlsx', 'tbl', 'ASN Moving List')\" style=\"color: white;\">\r\n                        Download Excel</a>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item\">\r\n                      <a (click)=\"createPdf('asn-moving-list.pdf', '#tbl')\" style=\"color: white;\">Export To PDF</a>\r\n                    </li>\r\n                    <li>\r\n                      <button\r\n                        [printStyle]=\"{table : {'font-size': '10px'},body : {'padding': '20px','font-size': '12px'}}\"\r\n                        class=\"btn-genx hidden-print print-btn\" printTitle=\"Sales Invoice\" [useExistingCss]=\"true\"\r\n                        ngxPrint printSectionId=\"myTable\">\r\n                        Print\r\n                      </button>\r\n                    </li>\r\n                    <li class=\"breadcrumb-item dropdown\">\r\n                      <a href=\"\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;\">\r\n                        Column Hidden\r\n                      </a>\r\n                      <div class=\"dropdown-menu\" style=\"background-color: #007bff; \r\n                          width: 200px !important; min-width: 200px; max-width: 200px; text-align: center\">\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('0')\" data-column=\"1\" style=\"color: white;\">\r\n                          Customer Name\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('1')\" data-column=\"1\" style=\"color: white;\">\r\n                          ASN No\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('2')\" data-column=\"2\" style=\"color: white;\">\r\n                          Warehouse\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('3')\" data-column=\"3\"\r\n                          style=\"color: white; text-align: center\">\r\n                          ASN Ref No\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('4')\" data-column=\"0\" style=\"color: white;\">\r\n                          ASN Date\r\n                        </a>\r\n                        <a class=\"dropdown-item ml-3\" (click)=\"HideShow('5')\" data-column=\"1\" style=\"color: white;\">\r\n                          Delivery No\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"HideShow('6')\" data-column=\"3\"\r\n                          style=\"color: white; text-align: center\">\r\n                          Action\r\n                        </a>\r\n                      </div>\r\n                    </li>\r\n                  </ol>\r\n                </nav>\r\n                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\" id=\"tbl\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th *ngIf=\"!hideShowList[0].status\">\r\n                        Customer Name\r\n                      </th>\r\n                      <th *ngIf=\"!hideShowList[1].status\">\r\n                        ASN No\r\n                      </th>\r\n                      <th *ngIf=\"!hideShowList[2].status\">\r\n                        Warehouse\r\n                      </th>\r\n                      <th *ngIf=\"!hideShowList[3].status\">\r\n                        ASN Ref No\r\n                      </th>\r\n                      <th *ngIf=\"!hideShowList[4].status\">\r\n                        ASN Date\r\n                      </th>\r\n                      <th *ngIf=\"!hideShowList[5].status\">\r\n                        Delivery No\r\n                      </th> \r\n                      <!-- <th>\r\n                        Driver Name\r\n                      </th>\r\n                      <th>\r\n                        \r\n                        Vehical No\r\n                      </th> -->\r\n                      <th *ngIf=\"!hideShowList[6].status\">\r\n                        Action\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let godwom of shipmentNoteList\">\r\n                      <td *ngIf=\"!hideShowList[0].status\">{{godwom.Name}}</td>\r\n                     \r\n                      <td *ngIf=\"!hideShowList[1].status\">{{godwom.ASNNo}}</td>\r\n                      <td *ngIf=\"!hideShowList[2].status\">{{godwom.WarehouseName}}</td>\r\n                      <td *ngIf=\"!hideShowList[3].status\">{{godwom.ShipmentNoteNo}}</td>\r\n                      <td *ngIf=\"!hideShowList[4].status\">{{godwom.ASNDate | date}}</td>\r\n                      <td *ngIf=\"!hideShowList[5].status\">{{godwom.DeliveryNo}}</td>\r\n                      <!-- <td>{{godwom.DriverName}}</td>\r\n                      <td>{{godwom.VehicleNo}}</td> -->\r\n                      <td *ngIf=\"!hideShowList[6].status\">\r\n                        <button type=\"button\" class=\"btn-warining editBtn\" (click)=\"Details(godwom.ShipmentNoteId)\">\r\n                            <i class=\"fa fa-info\"></i>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                  <ngx-ui-loader></ngx-ui-loader>\r\n                </table>\r\n              </div>\r\n            </div>\r\n     \r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n\r\n    </form>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>"

/***/ })

}]);
//# sourceMappingURL=content-shipment-note-moving-shipment-note-moving-module.js.map