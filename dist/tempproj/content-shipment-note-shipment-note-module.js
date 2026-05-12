(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-shipment-note-shipment-note-module"],{

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

/***/ "./src/app/layout/content/shipment-note/components/shipment-note-form.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note/components/shipment-note-form.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ShipmentNoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentNoteFormComponent", function() { return ShipmentNoteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shipment_note_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shipment-note.service */ "./src/app/layout/content/shipment-note/services/shipment-note.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
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






var ShipmentNoteFormComponent = /** @class */ (function (_super) {
    __extends(ShipmentNoteFormComponent, _super);
    function ShipmentNoteFormComponent(injector, _shipmentNoteServiceService, activeRoute, modalService) {
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
    ShipmentNoteFormComponent.prototype.ngOnInit = function () {
        this.addFormValidations();
        this.dropdownSettings();
        this.getPalletKeyPair();
        this.getCustomerKeyPair();
        this.getWarehouseKeyPair();
    };
    /**
    * The following method is used to add the form validations
    */
    ShipmentNoteFormComponent.prototype.addFormValidations = function () {
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
        this.addFormControlWithValidations("ASNNo", []);
        this.addFormControlWithValidations("ASNDate", []);
        this.addFormControlWithValidations("DriverName", []);
        this.addFormControlWithValidations("VehicleNo", []);
        this.addFormControlWithValidations("VehicleNo", []);
    };
    ShipmentNoteFormComponent.prototype.getPalletKeyPair = function () {
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
    ShipmentNoteFormComponent.prototype.getCustomerKeyPair = function () {
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
    ShipmentNoteFormComponent.prototype.getItemInformationKeyPair = function (customerId) {
        var _this = this;
        var apiAddress = this.apiConstant.ITEM_GetItemInformationByCustomerId + ("" + customerId);
        this._shipmentNoteServiceService.getData(apiAddress)
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
    ShipmentNoteFormComponent.prototype.getWarehouseKeyPair = function () {
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
    ShipmentNoteFormComponent.prototype.getGodownKeyPair = function (warehouseId) {
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
    ShipmentNoteFormComponent.prototype.onSelect = function (item, dropDownName) {
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
    ShipmentNoteFormComponent.prototype.onDeSelect = function (dropDownName) {
        this[dropDownName] = {};
    };
    ShipmentNoteFormComponent.prototype.addItemLocation = function () {
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
    ShipmentNoteFormComponent.prototype.getShelfForShipment = function () {
        var _this = this;
        var obj = {
            WarehouseId: this.selectedWarehouse["Id"],
            ItemInformationId: this.selectedItem["Id"],
            ItemCBN: this.getItemCBN(this.selectedItem["Id"]),
            CustomerId: this.selectedCustomer["Id"]
        };
        var apiAddress = this.apiConstant.SHIPMENT_NOTE_SearchShelfsForShipment;
        this._shipmentNoteServiceService.getKeyPair(apiAddress, obj)
            .subscribe(function (res) {
            console.log(res);
            _this.shelfListForShipment = res;
            _this.shelfListForShipment.forEach(function (element) {
                element.Location = element.godown.Abbreviation + element.godownRow.Alias + element.godownRack.Alias + element.godownShelf.Alias,
                    element.Quantity = _this.getQuantityIfAlreadyAddedInLocation(_this.selectedItem["Id"], element.Location),
                    element.vacantQuantity = (Number((element.shelfVacantCapicity - _this.getCalculatedCBN(element.Location))) / Number(_this.getItemCBN(_this.selectedItem["Id"]))),
                    element.NoOfPallets = 0;
                element.NoOfBoxes = 0;
            });
            _this.shelfListForShipment = _this.shelfListForShipment
                .filter(function (x) { return x.vacantQuantity >= 1; });
            _this.openItemLocationModal();
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    ShipmentNoteFormComponent.prototype.getQuantityIfAlreadyAddedInLocation = function (itemId, location) {
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
    ShipmentNoteFormComponent.prototype.getItemInformationObject = function (itemInformationId) {
        return this.itemInformationByCustomer.filter(function (x) { return x.itemInformation.ItemInformationId == itemInformationId; })[0];
    };
    ShipmentNoteFormComponent.prototype.getItemCBN = function (itemId) {
        var model = this.itemInformationByCustomer
            .filter(function (x) { return x.itemInformation.ItemInformationId == itemId; })[0];
        return (model.itemInformation.Width * model.itemInformation.Height * model.itemInformation.Length);
    };
    ShipmentNoteFormComponent.prototype.getCalculatedCBN = function (location) {
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
    ShipmentNoteFormComponent.prototype.openItemLocationModal = function () {
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
    ShipmentNoteFormComponent.prototype.cancelItemLocationModal = function () {
        this.modalRef.close();
    };
    ShipmentNoteFormComponent.prototype.palletSelect = function (event, location, selectedPalletId) {
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
                this.showToastrWarning('Select Quantity plase.');
            }
            else {
                var noOfBoxes = this.getNoOfBoxesPerPallet(this.selectedItem["Id"], location, selectedPltId);
                model.NoOfBoxes = noOfBoxes;
                var noOfPallets = model.Quantity / noOfBoxes;
                noOfPallets = noOfPallets < 1 ? 1 : (Number.isInteger(noOfPallets) ? noOfPallets : Number((noOfPallets.toString().split('.')[0])) + 1);
                model.NoOfPallets = noOfPallets;
            }
        }
    };
    ShipmentNoteFormComponent.prototype.palletDeSelect = function (location) {
        this.selectedPallet = {};
        var model = this.shelfListForShipment.filter(function (x) { return x.Location === location; })[0];
        model.NoOfBoxes = 0;
    };
    ShipmentNoteFormComponent.prototype.getNoOfBoxesPerPallet = function (itemId, location, palletId) {
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
    ShipmentNoteFormComponent.prototype.validateControl = function (controlName) {
        if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
            return true;
        return false;
    };
    ShipmentNoteFormComponent.prototype.dropdownSettings = function () {
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
    ShipmentNoteFormComponent.prototype.getErrorMessage = function (formElement) {
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
    ShipmentNoteFormComponent.prototype.redirectToShipmentNoteList = function () {
        this.router.navigate([this.routesList.SHIPMENT_NOTE_LISTING]);
    };
    ShipmentNoteFormComponent.prototype.QuantityChange = function (event, shelfVacantCapicity, location) {
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
    ShipmentNoteFormComponent.prototype.addShipmentItem = function () {
        var _this = this;
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
    ShipmentNoteFormComponent.prototype.getPalletNoToSet = function (itemId) {
        var countByItem = this.shipmentListToPost.filter(function (x) { return x.ItemInformationId === itemId; }).length;
        if (countByItem == 0)
            return 1;
        else
            return (countByItem + 1);
    };
    ShipmentNoteFormComponent.prototype.deleteFromShipmentList = function (location, itemInfoId) {
        var _this = this;
        var dat = this.shipmentListToPost
            .filter(function (y) { return y.ItemInformationId === itemInfoId && y.Location === location; });
        if (dat && dat.length > 0) {
            dat.forEach(function (element) {
                _this.shipmentListToPost.splice(_this.shipmentListToPost.indexOf(element), 1);
            });
        }
    };
    ShipmentNoteFormComponent.prototype.addShipmentTextField = function (event, fieldName, location, palletNo) {
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
    ShipmentNoteFormComponent.prototype.createShipmentNote = function (formValue) {
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
    ShipmentNoteFormComponent.prototype.executeShipmentNoteCreation = function (formValue) {
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
        var apiUrl = this.apiConstant.SHIPMENT_NOTE_CREATE;
        this._shipmentNoteServiceService.create(apiUrl, shipmentNote)
            .subscribe(function (res) {
            _this.showToastrSuccess("Shipment Note created successfully");
            setTimeout(function () {
                _this.redirectToShipmentNoteList();
            }, 2000);
        }, (function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalItemLocation'),
        __metadata("design:type", Object)
    ], ShipmentNoteFormComponent.prototype, "modalItemLocation", void 0);
    ShipmentNoteFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-shipment-note-form",
            template: __webpack_require__(/*! ../templates/form.component.html */ "./src/app/layout/content/shipment-note/templates/form.component.html"),
            styles: [__webpack_require__(/*! ../styles/shipment-note-form.component.scss */ "./src/app/layout/content/shipment-note/styles/shipment-note-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_shipment_note_service__WEBPACK_IMPORTED_MODULE_2__["ShipmentNoteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngb_modal__WEBPACK_IMPORTED_MODULE_5__["ModalManager"]])
    ], ShipmentNoteFormComponent);
    return ShipmentNoteFormComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/shipment-note/components/shipment-note-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note/components/shipment-note-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ShipmentNoteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentNoteListComponent", function() { return ShipmentNoteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shipment_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shipment-note.service */ "./src/app/layout/content/shipment-note/services/shipment-note.service.ts");
/* harmony import */ var src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/components/base.component */ "./src/app/helpers/components/base.component.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5__);
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






var ShipmentNoteListComponent = /** @class */ (function (_super) {
    __extends(ShipmentNoteListComponent, _super);
    function ShipmentNoteListComponent(injector, _shipmentNoteService) {
        var _this = _super.call(this, injector) || this;
        _this._shipmentNoteService = _shipmentNoteService;
        return _this;
    }
    ShipmentNoteListComponent.prototype.ngOnInit = function () {
        this.getAllShipmentNotes();
    };
    ShipmentNoteListComponent.prototype.getAllShipmentNotes = function () {
        var _this = this;
        var companyBusinessUnitInfo = {
            CompanyId: this.localStorageService.getCompanyId(),
            BusinessUnitId: this.localStorageService.getBusinessUnitId(),
        };
        var apiAddress = this.apiConstant.SHIPMENT_NOTE_LIST;
        this._shipmentNoteService.getAll(apiAddress, companyBusinessUnitInfo)
            .subscribe(function (res) {
            _this.shipmentNoteList = res;
            //console.log(this.shipmentNoteList)
            // Now you can use jQuery DataTables :
            var table = jquery__WEBPACK_IMPORTED_MODULE_3__('table');
            _this.dataTable = table.DataTable({
                lengthMenu: [5, 10, 20, 50, 100],
                "iDisplayLength": 100
            });
        }, function (error) {
            _this.errorHandler.handleError(error);
            _this.errorMessage = _this.errorHandler.errorMessage;
        });
    };
    // Edit(id){
    //   let updateUrl: string = this.routesList.PROVINCE_EDIT+`/${id}`;
    //   this.router.navigate([updateUrl]);
    // }
    ShipmentNoteListComponent.prototype.redirectToCreateShipmentNote = function () {
        this.router.navigate([this.routesList.SHIPMENT_NOTE_CREATE]);
    };
    ShipmentNoteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "wms-shipment-note-list",
            template: __webpack_require__(/*! ../templates/list.component.html */ "./src/app/layout/content/shipment-note/templates/list.component.html"),
            styles: [__webpack_require__(/*! ../styles/shipment-note-form.component.scss */ "./src/app/layout/content/shipment-note/styles/shipment-note-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_shipment_note_service__WEBPACK_IMPORTED_MODULE_1__["ShipmentNoteService"]])
    ], ShipmentNoteListComponent);
    return ShipmentNoteListComponent;
}(src_app_helpers_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/layout/content/shipment-note/services/shipment-note.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note/services/shipment-note.service.ts ***!
  \********************************************************************************/
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

/***/ "./src/app/layout/content/shipment-note/shipment-note.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/content/shipment-note/shipment-note.module.ts ***!
  \**********************************************************************/
/*! exports provided: ShipmentNoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipmentNoteModule", function() { return ShipmentNoteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var _services_shipment_note_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/shipment-note.service */ "./src/app/layout/content/shipment-note/services/shipment-note.service.ts");
/* harmony import */ var _components_shipment_note_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shipment-note-form.component */ "./src/app/layout/content/shipment-note/components/shipment-note-form.component.ts");
/* harmony import */ var _components_shipment_note_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shipment-note-list.component */ "./src/app/layout/content/shipment-note/components/shipment-note-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngb_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngb-modal */ "./node_modules/ngb-modal/fesm5/ngb-modal.js");
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
                component: _components_shipment_note_list_component__WEBPACK_IMPORTED_MODULE_6__["ShipmentNoteListComponent"],
            },
            {
                path: "create",
                component: _components_shipment_note_form_component__WEBPACK_IMPORTED_MODULE_5__["ShipmentNoteFormComponent"],
            }, {
                path: "**",
                redirectTo: "",
            }
        ]
    }
];
var ShipmentNoteModule = /** @class */ (function () {
    function ShipmentNoteModule() {
    }
    ShipmentNoteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ngb_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"]
            ],
            declarations: [
                _components_shipment_note_form_component__WEBPACK_IMPORTED_MODULE_5__["ShipmentNoteFormComponent"], _components_shipment_note_list_component__WEBPACK_IMPORTED_MODULE_6__["ShipmentNoteListComponent"]
            ],
            providers: [
                _services_shipment_note_service__WEBPACK_IMPORTED_MODULE_4__["ShipmentNoteService"]
            ],
            entryComponents: []
        })
    ], ShipmentNoteModule);
    return ShipmentNoteModule;
}());



/***/ }),

/***/ "./src/app/layout/content/shipment-note/styles/shipment-note-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note/styles/shipment-note-form.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.help-block {\n  color: red; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: 20px !important;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.toggle-label {\n  margin-top: 10px;\n  margin-right: -10px;\n  color: green;\n  font-size: 15px; }\n\n.shipment-item-add {\n  margin-top: 17px; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n  transition: opacity .15s linear; }\n\n.fade.in {\n  opacity: 1; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n  transition: -webkit-transform .3s ease-out;\n  transition: transform .3s ease-out;\n  transition: transform .3s ease-out, -webkit-transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n  transform: translate(0, -25%); }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; } }\n\n.pallets-dropdown {\n  width: 150px; }\n"

/***/ }),

/***/ "./src/app/layout/content/shipment-note/templates/form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note/templates/form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    SHIPMENT NOTE CREATE\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.SHIPMENT_NOTE_LISTING]\">Shipment note</a></li>\r\n    <li class=\"active\">Create</li>\r\n  </ol>\r\n</section>\r\n<section class=\"content\">\r\n  <div col-md-12>\r\n    <form name=\"formGroup\" [formGroup]=\"formGroup\" novalidate (ngSubmit)=\"createShipmentNote(formGroup.value)\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group  pull-right\">\r\n            <button type=\"button\" (click)=\"redirectToShipmentNoteList()\" class=\"btn-wms\">Shipment Note Listing</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Customer</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"customerKeyPair\"\r\n                  [settings]=\"customerDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedCustomer')\"\r\n                  formControlName=\"CustomerId\" (onSelect)=\"onSelect($event,'selectedCustomer')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedCustomer || !this.selectedCustomer['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Warehouse</label>\r\n                <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"warehouseKeyPair\"\r\n                  [settings]=\"warehouseDropdownSettings\" (onDeSelect)=\"onDeSelect('selectedWarehouse')\"\r\n                  formControlName=\"WarehouseId\" \r\n                  (onSelect)=\"onSelect($event,'selectedWarehouse')\">\r\n                </ng-multiselect-dropdown>\r\n                <span class=\"help-block\" *ngIf=\"!this.selectedWarehouse || !this.selectedWarehouse['Id']\">\r\n                  Required\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n               \r\n             \r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <label>Shipment Note Reference</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Shipment Note No\" formControlName=\"ShipmentNoteNo\">\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Cargo Status</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Cargo Status\" formControlName=\"CargoStatus\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.CargoStatus.invalid\">\r\n                  {{getErrorMessage('CargoStatus')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>ASN No</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter ASN No\" formControlName=\"ASNNo\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ASNNo.invalid\">\r\n                  {{getErrorMessage('ASNNo')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>ASN Date</label>\r\n                <input type=\"date\" formControlName=\"ASNDate\" class=\"form-control\" placeholder=\"Enter ASN Date\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.ASNDate.invalid\">\r\n                  {{getErrorMessage('ASNDate')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Delivery No</label>\r\n                <input type=\"text\" formControlName=\"DeliveryNo\" class=\"form-control\" placeholder=\"Enter Delivery No\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.DeliveryNo.invalid\">\r\n                  {{getErrorMessage('DeliveryNo')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Driver Name</label>\r\n                <input type=\"text\" formControlName=\"DriverName\" class=\"form-control\" placeholder=\"Enter Driver Name\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.DriverName.invalid\">\r\n                  {{getErrorMessage('DriverName')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Vehicle No</label>\r\n                <input type=\"text\" formControlName=\"VehicleNo\" class=\"form-control\" placeholder=\"Enter Vehicle No\">\r\n                <span class=\"help-block\" *ngIf=\"formGroup.controls.VehicleNo.invalid\">\r\n                  {{getErrorMessage('VehicleNo')}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label>Remarks</label>\r\n                    <textarea class=\"form-control\" placeholder=\"Enter Remarks\" formControlName=\"Remarks\"></textarea>\r\n                    <span class=\"help-block\" *ngIf=\"formGroup.controls.Remarks.invalid\">\r\n                      {{getErrorMessage('Remarks')}}\r\n                    </span>\r\n                  </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n             \r\n            </div>\r\n           \r\n          </div>\r\n          \r\n        </div>\r\n       \r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div class=\"form-group\">\r\n              <h3 class=\"box-title detail-title\">SKU detail</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"box-body\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label>SKU</label>\r\n                        <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"itemKeyPair\"\r\n                          [settings]=\"itemDropdownSettings\" formControlName=\"ItemId\"\r\n                           (onDeSelect)=\"onDeSelect('selectedItem')\"\r\n                          (onSelect)=\"onSelect($event,'selectedItem')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <span class=\"help-block\" *ngIf=\"!this.selectedItem || !this.selectedItem['Id']\">\r\n                          Required\r\n                        </span>\r\n                      </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group shipment-item-add\">\r\n                        <button type=\"button\" id=\"add\" class=\"btn btn-sm btn-wms\" (click)=\"addItemLocation()\">\r\n                          Add Location\r\n                        </button>\r\n                      </div>\r\n                    <!-- <div class=\"form-group\">\r\n                        <label>Godown</label>\r\n                        <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"godownKeyPair\"\r\n                          [settings]=\"godownDropdownSettings\" formControlName=\"GodownId\"\r\n                          (onDeSelect)=\"onDeSelect('selectedGodown')\" (onSelect)=\"onSelect($event,'selectedGodown')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <span class=\"help-block\" *ngIf=\"!this.selectedGodown || !this.selectedGodown['Id']\">\r\n                          Required\r\n                        </span>\r\n                      </div> -->\r\n                   \r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  \r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-sm-12 table-responsive\">\r\n                        <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                          <thead>\r\n                            <tr role=\"row\">\r\n                              <th>\r\n                                SKU Id\r\n                              </th>\r\n                              <th>\r\n                               SKU Name\r\n                              </th>\r\n                              <th>\r\n                                Pallet No\r\n                              </th>\r\n                              <th>\r\n                                Batch\r\n                              </th>\r\n                              <th>\r\n                                Status\r\n                              </th>\r\n                              <th>\r\n                                Quantity\r\n                              </th>\r\n                              <th>\r\n                                No Of Boxes\r\n                              </th>\r\n                              <th>\r\n                                Location\r\n                              </th>\r\n                              <th>\r\n                                Mfg Date\r\n                              </th>\r\n                              <th>\r\n                                Expiry Date\r\n                              </th>\r\n                             \r\n                              <!-- <th>\r\n                                Price\r\n                              </th>\r\n                              <th>\r\n                                  Actions\r\n                                </th> -->\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr role=\"row\" *ngFor=\"let shipment of shipmentListToPost\">\r\n                              <td>{{shipment.ItemInformationId}}</td>\r\n                              <td>{{shipment.Name}}</td>\r\n                              <td>{{shipment.PalletNo}}</td>\r\n                              <td><input type=\"text\" class=\"form-control\" value=\"{{shipment.Batch}}\" (blur)=\"addShipmentTextField($event,'Batch',shipment.Location,shipment.PalletNo)\"></td>\r\n                              <td><input type=\"text\" class=\"form-control\" value=\"{{shipment.Status}}\" (blur)=\"addShipmentTextField($event,'Status',shipment.Location,shipment.PalletNo)\"></td>\r\n                              <td>{{shipment.Quantity}}</td>\r\n                              <td>{{shipment.NoOfBoxes}}</td>\r\n                              <td>{{shipment.Location}}</td>\r\n                              <td><input type=\"date\" class=\"form-control\" (blur)=\"addShipmentTextField($event,'MfgDate',shipment.Location,shipment.PalletNo)\"></td>\r\n                              <td><input type=\"date\" class=\"form-control\" (blur)=\"addShipmentTextField($event,'ExpiryDate',shipment.Location,shipment.PalletNo)\"></td>\r\n                              <!-- <td>{{shipment.Price}}</td>\r\n                              <td>\r\n                                  <button type=\"button\" class=\"btn btn-sm btn-danger\"\r\n                                    (click)=\"deleteFromShipmentList(shipment.Location, shipment.ItemInformationId)\"><i class=\"fa fa-trash\"></i></button>\r\n                                </td> -->\r\n                            </tr>\r\n                          </tbody>  \r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n              </div>\r\n             \r\n        </div>\r\n        <div class=\"box-footer\">\r\n            <button type=\"submit\" [disabled]=\"formGroup.invalid || shipmentListToPost.length <=0\" class=\"btn btn-success pull-right\">Add Shipment</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n<!-- Modal Item shipment location -->\r\n<modal #modalItemLocation>\r\n<modal-header>\r\n    <div class=\"box-header\">\r\n        <div class=\"form-group\">\r\n            <h3 class=\"box-title detail-title\">\r\n              {{this.selectedWarehouse.Name}}\r\n            </h3>\r\n        </div>\r\n      </div>\r\n</modal-header>\r\n\r\n<modal-content>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n            <thead>\r\n              <tr role=\"row\">\r\n                <th>\r\n                  Chamber Aisle\r\n                </th>\r\n                <th>\r\n                  Chamber Rack\r\n                </th>\r\n                <th>\r\n                  Chamber Bay\r\n                </th>\r\n                <th>\r\n                  Location\r\n                </th>\r\n                <th>\r\n                  Vacant Quantity\r\n                </th>\r\n                \r\n                <th>\r\n                  Quantity\r\n                </th>\r\n                <th class=\"pallets-dropdown\">\r\n                    Pallet\r\n                  </th>\r\n                  <th>\r\n                      No Of Boxes\r\n                    </th>\r\n                  <th>\r\n                      No Of Pallets\r\n                    </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr role=\"row\" *ngFor=\"let godwom of shelfListForShipment\">\r\n                <td>{{godwom.godownRow.Name}} | {{godwom.godownRow.Alias}}</td>\r\n                <td>{{godwom.godownRack.Name}} | {{godwom.godownRack.Alias}}</td>\r\n                <td>{{godwom.godownShelf.Name}} | {{godwom.godownShelf.Alias}}</td>\r\n                <td>{{godwom.Location}}</td>\r\n                <td>{{godwom.vacantQuantity}}</td>\r\n                <td><input (blur)=\"QuantityChange($event,godwom.vacantQuantity,godwom.Location)\" value=\"{{godwom.Quantity}}\" type=\"text\" class=\"form-control\"></td>\r\n                <td>\r\n                  <ng-multiselect-dropdown [placeholder]=\"'Select one'\" [data]=\"palletKeyPair\" [settings]=\"palletDropdownSettings\"\r\n                      (onDeSelect)=\"palletDeSelect(godwom.Location)\"\r\n                    (onSelect)=\"palletSelect($event,godwom.Location,0)\">\r\n                  </ng-multiselect-dropdown>\r\n                </td>\r\n                <td>{{godwom.NoOfBoxes}}</td>\r\n                <td>{{godwom.NoOfPallets}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n</modal-content>\r\n\r\n<modal-footer>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"cancelItemLocationModal()\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-wms\" (click)=\"addShipmentItem()\">Save</button>\r\n      </div>\r\n</modal-footer>\r\n</modal>"

/***/ }),

/***/ "./src/app/layout/content/shipment-note/templates/list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/layout/content/shipment-note/templates/list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\r\n  <h1>\r\n    SHIPMENT NOTE LISTING\r\n    <small>\r\n      <button class=\"btn-wms\" (click)=\"redirectToCreateShipmentNote()\"><i class=\"fa fa-plus\"></i> New</button>\r\n    </small>\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a routerLink=\"[this.routesList.SHIPMENT_NOTE_LISTING]\">Shipment Note</a></li>\r\n    <li class=\"active\">Listing</li>\r\n  </ol>\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header\">\r\n          <!-- <h3 class=\"box-title\">Hover Data Table</h3> -->\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n          <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 table-responsive\">\r\n                <table class=\"table table-bordered table-hover dataTable\" role=\"grid\">\r\n                  <thead>\r\n                    <tr role=\"row\">\r\n                      <th>\r\n                        Customer Name\r\n                      </th>\r\n                      <th>\r\n                        ASN No\r\n                      </th>\r\n                      <th>\r\n                        ASN Date\r\n                      </th>\r\n                      <th>\r\n                        Delivery No\r\n                      </th> \r\n                      <th>\r\n                        Driver Name\r\n                      </th>\r\n                      <th>\r\n                        \r\n                        Vehical No\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr role=\"row\" *ngFor=\"let godwom of shipmentNoteList\">\r\n                      <td>{{godwom.Name}}</td>\r\n                     \r\n                      <td>{{godwom.ASNNo}}</td>\r\n                      <td>{{godwom.ASNDate}}</td>\r\n                      <td>{{godwom.DeliveryNo}}</td>\r\n                      <td>{{godwom.DriverName}}</td>\r\n                      <td>{{godwom.VehicleNo}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n     \r\n          </div>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n  <!-- /.row -->\r\n</section>"

/***/ })

}]);
//# sourceMappingURL=content-shipment-note-shipment-note-module.js.map