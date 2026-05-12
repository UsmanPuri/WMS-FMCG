(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-Change-Password-Change-Password-module~content-SN-Search-SN-Search-module~content-areas-area~eb37c7f0"],{

/***/ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js ***!
  \***********************************************************/
/*! exports provided: NgxUiLoaderService, NgxUiLoaderModule, SPINNER, SPINNER_TYPES, NGX_POSITIONS, POSITION, PB_DIRECTION, PB_DIRECTIONS, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule, ɵc, ɵa, ɵb, ɵf, ɵe, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUiLoaderService", function() { return NgxUiLoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUiLoaderModule", function() { return NgxUiLoaderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINNER", function() { return SPINNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINNER_TYPES", function() { return SPINNER_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_POSITIONS", function() { return NGX_POSITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSITION", function() { return POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PB_DIRECTION", function() { return PB_DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PB_DIRECTIONS", function() { return PB_DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUiLoaderRouterModule", function() { return NgxUiLoaderRouterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxUiLoaderHttpModule", function() { return NgxUiLoaderHttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NgxUiLoaderBlurredDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NGX_UI_LOADER_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NgxUiLoaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NGX_UI_LOADER_HTTP_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NgxUiLoaderHttpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NGX_UI_LOADER_ROUTER_CONFIG_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var SPINNER = {
    ballScaleMultiple: 'ball-scale-multiple',
    ballSpin: 'ball-spin',
    ballSpinClockwise: 'ball-spin-clockwise',
    ballSpinClockwiseFadeRotating: 'ball-spin-clockwise-fade-rotating',
    ballSpinFadeRotating: 'ball-spin-fade-rotating',
    chasingDots: 'chasing-dots',
    circle: 'circle',
    cubeGrid: 'cube-grid',
    doubleBounce: 'double-bounce',
    fadingCircle: 'fading-circle',
    foldingCube: 'folding-cube',
    pulse: 'pulse',
    rectangleBounce: 'rectangle-bounce',
    rectangleBounceParty: 'rectangle-bounce-party',
    rectangleBouncePulseOut: 'rectangle-bounce-pulse-out',
    rectangleBouncePulseOutRapid: 'rectangle-bounce-pulse-out-rapid',
    rotatingPlane: 'rotating-plane',
    squareJellyBox: 'square-jelly-box',
    squareLoader: 'square-loader',
    threeBounce: 'three-bounce',
    threeStrings: 'three-strings',
    wanderingCubes: 'wandering-cubes',
};
/** @enum {string} */
var POSITION = {
    bottomCenter: 'bottom-center',
    bottomLeft: 'bottom-left',
    bottomRight: 'bottom-right',
    centerCenter: 'center-center',
    centerLeft: 'center-left',
    centerRight: 'center-right',
    topCenter: 'top-center',
    topLeft: 'top-left',
    topRight: 'top-right',
};
/** @enum {string} */
var PB_DIRECTION = {
    leftToRight: 'ltr',
    rightToLeft: 'rtl',
};
/** @enum {string} */
var SPINNER_TYPES = {
    ballScaleMultiple: 'ball-scale-multiple',
    ballSpin: 'ball-spin',
    ballSpinClockwise: 'ball-spin-clockwise',
    ballSpinClockwiseFadeRotating: 'ball-spin-clockwise-fade-rotating',
    ballSpinFadeRotating: 'ball-spin-fade-rotating',
    chasingDots: 'chasing-dots',
    circle: 'circle',
    cubeGrid: 'cube-grid',
    doubleBounce: 'double-bounce',
    fadingCircle: 'fading-circle',
    foldingCube: 'folding-cube',
    pulse: 'pulse',
    rectangleBounce: 'rectangle-bounce',
    rectangleBounceParty: 'rectangle-bounce-party',
    rectangleBouncePulseOut: 'rectangle-bounce-pulse-out',
    rectangleBouncePulseOutRapid: 'rectangle-bounce-pulse-out-rapid',
    rotatingPlane: 'rotating-plane',
    squareJellyBox: 'square-jelly-box',
    squareLoader: 'square-loader',
    threeBounce: 'three-bounce',
    threeStrings: 'three-strings',
    wanderingCubes: 'wandering-cubes',
};
/** @enum {string} */
var NGX_POSITIONS = {
    bottomCenter: 'bottom-center',
    bottomLeft: 'bottom-left',
    bottomRight: 'bottom-right',
    centerCenter: 'center-center',
    centerLeft: 'center-left',
    centerRight: 'center-right',
    topCenter: 'top-center',
    topLeft: 'top-left',
    topRight: 'top-right',
};
/** @enum {string} */
var PB_DIRECTIONS = {
    leftToRight: 'ltr',
    rightToLeft: 'rtl',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * The configuration of spinners
  @type {?} */
var SPINNER_CONFIG = {
    'ball-scale-multiple': {
        divs: 3,
        class: 'sk-ball-scale-multiple'
    },
    'ball-spin': {
        divs: 8,
        class: 'sk-ball-spin'
    },
    'ball-spin-clockwise': {
        divs: 8,
        class: 'sk-ball-spin-clockwise'
    },
    'ball-spin-clockwise-fade-rotating': {
        divs: 8,
        class: 'sk-ball-spin-clockwise-fade-rotating'
    },
    'ball-spin-fade-rotating': {
        divs: 8,
        class: 'sk-ball-spin-fade-rotating'
    },
    'chasing-dots': {
        divs: 2,
        class: 'sk-chasing-dots'
    },
    'circle': {
        divs: 12,
        class: 'sk-circle'
    },
    'cube-grid': {
        divs: 9,
        class: 'sk-cube-grid'
    },
    'double-bounce': {
        divs: 2,
        class: 'sk-double-bounce'
    },
    'fading-circle': {
        divs: 12,
        class: 'sk-fading-circle'
    },
    'folding-cube': {
        divs: 4,
        class: 'sk-folding-cube'
    },
    'pulse': {
        divs: 1,
        class: 'sk-pulse'
    },
    'rectangle-bounce': {
        divs: 5,
        class: 'sk-rectangle-bounce'
    },
    'rectangle-bounce-party': {
        divs: 5,
        class: 'sk-rectangle-bounce-party'
    },
    'rectangle-bounce-pulse-out': {
        divs: 5,
        class: 'sk-rectangle-bounce-pulse-out'
    },
    'rectangle-bounce-pulse-out-rapid': {
        divs: 5,
        class: 'sk-rectangle-bounce-pulse-out-rapid'
    },
    'rotating-plane': {
        divs: 1,
        class: 'sk-rotating-plane'
    },
    'square-jelly-box': {
        divs: 2,
        class: 'sk-square-jelly-box'
    },
    'square-loader': {
        divs: 1,
        class: 'sk-square-loader'
    },
    'three-bounce': {
        divs: 3,
        class: 'sk-three-bounce'
    },
    'three-strings': {
        divs: 3,
        class: 'sk-three-strings'
    },
    'wandering-cubes': {
        divs: 2,
        class: 'sk-wandering-cubes'
    },
};
/** *
 * The default configuration of ngx-ui-loader
  @type {?} */
var DEFAULT_CONFIG = {
    bgsColor: '#00ACC1',
    bgsOpacity: 0.5,
    bgsPosition: POSITION.bottomRight,
    bgsSize: 60,
    bgsType: SPINNER.rectangleBounce,
    blur: 5,
    fgsColor: '#00ACC1',
    fgsPosition: POSITION.centerCenter,
    fgsSize: 60,
    fgsType: SPINNER.rectangleBounce,
    gap: 24,
    logoPosition: POSITION.centerCenter,
    logoSize: 120,
    logoUrl: '',
    overlayColor: 'rgba(40, 40, 40, 0.8)',
    pbColor: '#00ACC1',
    pbDirection: PB_DIRECTION.leftToRight,
    pbThickness: 3,
    hasProgressBar: true,
    text: '',
    textColor: '#FFFFFF',
    textPosition: POSITION.centerCenter,
    threshold: 500
};
/** *
 * The default id of the loading
  @type {?} */
var DEFAULT_ID = 'default';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Injection token for ngx-ui-loader configuration
  @type {?} */
var NGX_UI_LOADER_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ngxUiLoaderCustom.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DELAY = 1100;
var NgxUiLoaderService = /** @class */ (function () {
    /**
     * Constructor
     * @param config
     */
    function NgxUiLoaderService(config) {
        this.config = config;
        this._defaultConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, DEFAULT_CONFIG);
        if (this.config) {
            if (this.config.threshold && this.config.threshold <= 0) {
                this.config.threshold = DEFAULT_CONFIG.threshold;
            }
            this._defaultConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this._defaultConfig, this.config);
        }
        this._waitingForeground = {};
        this._waitingBackground = {};
        this._showForeground = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.showForeground = this._showForeground.asObservable();
        this._showBackground = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.showBackground = this._showBackground.asObservable();
        this._foregroundClosing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.foregroundClosing = this._foregroundClosing.asObservable();
        this._backgroundClosing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.backgroundClosing = this._backgroundClosing.asObservable();
        this._onStart = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onStart = this._onStart.asObservable();
        this._onStop = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onStop = this._onStop.asObservable();
        this._onStopAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onStopAll = this._onStopAll.asObservable();
    }
    /**
     * Get default loader configuration
     * @returns default configuration object
     */
    /**
     * Get default loader configuration
     * @return {?} default configuration object
     */
    NgxUiLoaderService.prototype.getDefaultConfig = /**
     * Get default loader configuration
     * @return {?} default configuration object
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this._defaultConfig);
    };
    /**
     * Get current status
     * @returns An object with waiting foreground and background properties
     */
    /**
     * Get current status
     * @return {?} An object with waiting foreground and background properties
     */
    NgxUiLoaderService.prototype.getStatus = /**
     * Get current status
     * @return {?} An object with waiting foreground and background properties
     */
    function () {
        return {
            waitingForeground: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this._waitingForeground),
            waitingBackground: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this._waitingBackground)
        };
    };
    /**
     * Check whether the queue has a waiting foreground loader with the given id.
     * If no `id` specified, it will check whether the queue has any waiting foreground loader.
     * @param id the optional id
     * @returns boolean
     */
    /**
     * Check whether the queue has a waiting foreground loader with the given id.
     * If no `id` specified, it will check whether the queue has any waiting foreground loader.
     * @param {?=} id the optional id
     * @return {?} boolean
     */
    NgxUiLoaderService.prototype.hasForeground = /**
     * Check whether the queue has a waiting foreground loader with the given id.
     * If no `id` specified, it will check whether the queue has any waiting foreground loader.
     * @param {?=} id the optional id
     * @return {?} boolean
     */
    function (id) {
        if (id) {
            return this._waitingForeground[id] ? true : false;
        }
        return Object.keys(this._waitingForeground).length > 0;
    };
    /**
     * Check whether the queue has a waiting background loader with the given id.
     * If no `id` specified, it will check whether the queue has any waiting background loader.
     * @param id the optional id
     * @returns boolean
     */
    /**
     * Check whether the queue has a waiting background loader with the given id.
     * If no `id` specified, it will check whether the queue has any waiting background loader.
     * @param {?=} id the optional id
     * @return {?} boolean
     */
    NgxUiLoaderService.prototype.hasBackground = /**
     * Check whether the queue has a waiting background loader with the given id.
     * If no `id` specified, it will check whether the queue has any waiting background loader.
     * @param {?=} id the optional id
     * @return {?} boolean
     */
    function (id) {
        if (id) {
            return this._waitingBackground[id] ? true : false;
        }
        return Object.keys(this._waitingBackground).length > 0;
    };
    /**
     * Start the foreground loading with a specified id.
     * The loading is only closed off when all IDs are called with stop() method.
     * @param id the optional id of the loading. id is set to 'default' by default.
     */
    /**
     * Start the foreground loading with a specified id.
     * The loading is only closed off when all IDs are called with stop() method.
     * @param {?=} id the optional id of the loading. id is set to 'default' by default.
     * @return {?}
     */
    NgxUiLoaderService.prototype.start = /**
     * Start the foreground loading with a specified id.
     * The loading is only closed off when all IDs are called with stop() method.
     * @param {?=} id the optional id of the loading. id is set to 'default' by default.
     * @return {?}
     */
    function (id) {
        if (id === void 0) { id = DEFAULT_ID; }
        /** @type {?} */
        var foregroundRunning = this.hasForeground();
        this._waitingForeground[id] = Date.now();
        if (!foregroundRunning) {
            if (this.hasBackground()) {
                this.backgroundCloseout();
                this._showBackground.next(false);
            }
            this._showForeground.next(true);
        }
        this._onStart.next({ id: id, isForeground: true });
    };
    /**
     * Start the background loading with a specified id.
     * The loading is only closed off when all IDs are called with stopBackground() method.
     * @param id the optional id of the loading. id is set to 'default' by default.
     */
    /**
     * Start the background loading with a specified id.
     * The loading is only closed off when all IDs are called with stopBackground() method.
     * @param {?=} id the optional id of the loading. id is set to 'default' by default.
     * @return {?}
     */
    NgxUiLoaderService.prototype.startBackground = /**
     * Start the background loading with a specified id.
     * The loading is only closed off when all IDs are called with stopBackground() method.
     * @param {?=} id the optional id of the loading. id is set to 'default' by default.
     * @return {?}
     */
    function (id) {
        if (id === void 0) { id = DEFAULT_ID; }
        this._waitingBackground[id] = Date.now();
        if (!this.hasForeground()) {
            this._showBackground.next(true);
        }
        this._onStart.next({ id: id, isForeground: false });
    };
    /**
     * Stop a foreground loading with specific id
     * @param id the optional id to stop. If not provided, 'default' is used.
     * @returns Object
     */
    /**
     * Stop a foreground loading with specific id
     * @param {?=} id the optional id to stop. If not provided, 'default' is used.
     * @return {?} Object
     */
    NgxUiLoaderService.prototype.stop = /**
     * Stop a foreground loading with specific id
     * @param {?=} id the optional id to stop. If not provided, 'default' is used.
     * @return {?} Object
     */
    function (id) {
        var _this = this;
        if (id === void 0) { id = DEFAULT_ID; }
        /** @type {?} */
        var now = Date.now();
        if (this._waitingForeground[id]) {
            if (this._waitingForeground[id] + this._defaultConfig.threshold > now) {
                setTimeout(function () {
                    _this.stop(id);
                }, this._waitingForeground[id] + this._defaultConfig.threshold - now);
                return;
            }
            delete this._waitingForeground[id];
        }
        else {
            return;
        }
        if (!this.isActive()) {
            this.foregroundCloseout();
            this._showForeground.next(false);
            this._onStop.next({ id: id, isForeground: true });
            this._onStopAll.next({ stopAll: true });
            return;
        }
        if (!this.hasForeground()) {
            this.foregroundCloseout();
            this._showForeground.next(false);
            // Show background spinner after the foreground is closed out
            setTimeout(function () {
                if (_this.hasBackground()) {
                    _this._showBackground.next(true);
                }
            }, 500);
        }
        this._onStop.next({ id: id, isForeground: true });
    };
    /**
     * Stop a background loading with specific id
     * @param id the optional id to stop. If not provided, 'default' is used.
     * @returns Object
     */
    /**
     * Stop a background loading with specific id
     * @param {?=} id the optional id to stop. If not provided, 'default' is used.
     * @return {?} Object
     */
    NgxUiLoaderService.prototype.stopBackground = /**
     * Stop a background loading with specific id
     * @param {?=} id the optional id to stop. If not provided, 'default' is used.
     * @return {?} Object
     */
    function (id) {
        var _this = this;
        if (id === void 0) { id = DEFAULT_ID; }
        /** @type {?} */
        var now = Date.now();
        if (this._waitingBackground[id]) {
            if (this._waitingBackground[id] + this._defaultConfig.threshold > now) {
                setTimeout(function () {
                    _this.stopBackground(id);
                }, this._waitingBackground[id] + this._defaultConfig.threshold - now);
                return;
            }
            delete this._waitingBackground[id];
        }
        else {
            return;
        }
        if (!this.isActive()) {
            this.backgroundCloseout();
            this._showBackground.next(false);
            this._onStop.next({ id: id, isForeground: false });
            this._onStopAll.next({ stopAll: true });
            return;
        }
        this._onStop.next({ id: id, isForeground: false });
    };
    /**
     * Stop all the loadings including foreground and background
     */
    /**
     * Stop all the loadings including foreground and background
     * @return {?}
     */
    NgxUiLoaderService.prototype.stopAll = /**
     * Stop all the loadings including foreground and background
     * @return {?}
     */
    function () {
        if (this.hasForeground()) {
            this.foregroundCloseout();
            this._showForeground.next(false);
        }
        else if (this.hasBackground()) {
            this.backgroundCloseout();
            this._showBackground.next(false);
        }
        this._waitingForeground = {};
        this._waitingBackground = {};
        this._onStopAll.next({ stopAll: true });
    };
    /**
     * Determine whether the loader is active
     * @return {?} true if the loader is active
     */
    NgxUiLoaderService.prototype.isActive = /**
     * Determine whether the loader is active
     * @return {?} true if the loader is active
     */
    function () {
        return Object.keys(this._waitingForeground).length > 0 || Object.keys(this._waitingBackground).length > 0;
    };
    /**
     * Manage to close foreground loading
     * @return {?}
     */
    NgxUiLoaderService.prototype.foregroundCloseout = /**
     * Manage to close foreground loading
     * @return {?}
     */
    function () {
        var _this = this;
        this._foregroundClosing.next(true);
        setTimeout(function () {
            _this._foregroundClosing.next(false);
        }, DELAY);
    };
    /**
     * Manage to close background loading
     * @return {?}
     */
    NgxUiLoaderService.prototype.backgroundCloseout = /**
     * Manage to close background loading
     * @return {?}
     */
    function () {
        var _this = this;
        this._backgroundClosing.next(true);
        setTimeout(function () {
            _this._backgroundClosing.next(false);
        }, DELAY);
    };
    NgxUiLoaderService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgxUiLoaderService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NGX_UI_LOADER_CONFIG_TOKEN,] }] }
    ]; };
    return NgxUiLoaderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Coerce a value (string) to a number
 * @param {?} value
 * @param {?} fallbackValue
 * @return {?}
 */
function coerceNumber(value, fallbackValue) {
    return !isNaN(parseFloat(/** @type {?} */ (value))) && !isNaN(Number(value)) ? Number(value) : fallbackValue;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxUiLoaderComponent = /** @class */ (function () {
    /**
     * Constructor
     * @param domSanitizer
     * @param ngxService
     */
    function NgxUiLoaderComponent(domSanitizer, ngxService) {
        this.domSanitizer = domSanitizer;
        this.ngxService = ngxService;
        this.initialized = false;
        this.defaultConfig = this.ngxService.getDefaultConfig();
        this.bgsColor = this.defaultConfig.bgsColor;
        this.bgsOpacity = this.defaultConfig.bgsOpacity;
        this.bgsPosition = this.defaultConfig.bgsPosition;
        this.bgsSize = this.defaultConfig.bgsSize;
        this.bgsType = this.defaultConfig.bgsType;
        this.fgsColor = this.defaultConfig.fgsColor;
        this.fgsPosition = this.defaultConfig.fgsPosition;
        this.fgsSize = this.defaultConfig.fgsSize;
        this.fgsType = this.defaultConfig.fgsType;
        this.gap = this.defaultConfig.gap;
        this.logoPosition = this.defaultConfig.logoPosition;
        this.logoSize = this.defaultConfig.logoSize;
        this.logoUrl = this.defaultConfig.logoUrl;
        this.overlayColor = this.defaultConfig.overlayColor;
        this.pbColor = this.defaultConfig.pbColor;
        this.pbDirection = this.defaultConfig.pbDirection;
        this.pbThickness = this.defaultConfig.pbThickness;
        this.hasProgressBar = this.defaultConfig.hasProgressBar;
        this.text = this.defaultConfig.text;
        this.textColor = this.defaultConfig.textColor;
        this.textPosition = this.defaultConfig.textPosition;
    }
    /**
     * On init event
     */
    /**
     * On init event
     * @return {?}
     */
    NgxUiLoaderComponent.prototype.ngOnInit = /**
     * On init event
     * @return {?}
     */
    function () {
        var _this = this;
        this.initializeSpinners();
        this.determinePositions();
        this.bgsPosition = /** @type {?} */ (this.validate('bgsPosition', this.bgsPosition, POSITION, this.defaultConfig.bgsPosition));
        this.trustedLogoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.logoUrl);
        this.pbDirection = /** @type {?} */ (this.validate('pbDirection', this.pbDirection, PB_DIRECTION, this.defaultConfig.pbDirection));
        this.showForegroundWatcher = this.ngxService.showForeground
            .subscribe(function (data) { return _this.showForeground = data; });
        this.showBackgroundWatcher = this.ngxService.showBackground
            .subscribe(function (data) { return _this.showBackground = data; });
        this.foregroundClosingWatcher = this.ngxService.foregroundClosing
            .subscribe(function (data) { return _this.foregroundClosing = data; });
        this.backgroundClosingWatcher = this.ngxService.backgroundClosing
            .subscribe(function (data) { return _this.backgroundClosing = data; });
        this.initialized = true;
    };
    /**
     * On changes event
     * @param changes
     */
    /**
     * On changes event
     * @param {?} changes
     * @return {?}
     */
    NgxUiLoaderComponent.prototype.ngOnChanges = /**
     * On changes event
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.initialized) {
            return;
        }
        /** @type {?} */
        var bgsTypeChange = changes["bgsType"];
        /** @type {?} */
        var bgsPositionChange = changes["bgsPosition"];
        /** @type {?} */
        var fgsTypeChange = changes["fgsType"];
        /** @type {?} */
        var logoUrlChange = changes["logoUrl"];
        /** @type {?} */
        var pbDirectionChange = changes["pbDirection"];
        if (fgsTypeChange || bgsTypeChange) {
            this.initializeSpinners();
        }
        this.determinePositions();
        if (bgsPositionChange) {
            this.bgsPosition = /** @type {?} */ (this.validate('bgsPosition', this.bgsPosition, POSITION, this.defaultConfig.bgsPosition));
        }
        if (logoUrlChange) {
            this.trustedLogoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.logoUrl);
        }
        if (pbDirectionChange) {
            this.pbDirection = /** @type {?} */ (this.validate('pbDirection', this.pbDirection, PB_DIRECTION, this.defaultConfig.pbDirection));
        }
    };
    /**
     * Initialize spinners
     * @return {?}
     */
    NgxUiLoaderComponent.prototype.initializeSpinners = /**
     * Initialize spinners
     * @return {?}
     */
    function () {
        this.fgsType = /** @type {?} */ (this.validate('fgsType', this.fgsType, SPINNER, this.defaultConfig.fgsType));
        this.bgsType = /** @type {?} */ (this.validate('bgsType', this.bgsType, SPINNER, this.defaultConfig.bgsType));
        this.fgDivs = Array(SPINNER_CONFIG[this.fgsType].divs).fill(1);
        this.fgSpinnerClass = SPINNER_CONFIG[this.fgsType].class;
        this.bgDivs = Array(SPINNER_CONFIG[this.bgsType].divs).fill(1);
        this.bgSpinnerClass = SPINNER_CONFIG[this.bgsType].class;
    };
    /**
     * Determine the positions of spinner, logo and text
     * @return {?}
     */
    NgxUiLoaderComponent.prototype.determinePositions = /**
     * Determine the positions of spinner, logo and text
     * @return {?}
     */
    function () {
        this.fgsPosition = /** @type {?} */ (this.validate('fgsPosition', this.fgsPosition, POSITION, this.defaultConfig.fgsPosition));
        this.logoPosition = /** @type {?} */ (this.validate('logoPosition', this.logoPosition, POSITION, this.defaultConfig.logoPosition));
        this.textPosition = /** @type {?} */ (this.validate('textPosition', this.textPosition, POSITION, this.defaultConfig.textPosition));
        this.gap = coerceNumber(this.gap, this.defaultConfig.gap);
        this.logoTop = 'initial';
        this.spinnerTop = 'initial';
        this.textTop = 'initial';
        /** @type {?} */
        var textSize = 24;
        if (this.logoPosition.startsWith('center')) {
            this.logoTop = '50%';
        }
        else if (this.logoPosition.startsWith('top')) {
            this.logoTop = '30px';
        }
        if (this.fgsPosition.startsWith('center')) {
            this.spinnerTop = '50%';
        }
        else if (this.fgsPosition.startsWith('top')) {
            this.spinnerTop = '30px';
        }
        if (this.textPosition.startsWith('center')) {
            this.textTop = '50%';
        }
        else if (this.textPosition.startsWith('top')) {
            this.textTop = '30px';
        }
        if (this.fgsPosition === POSITION.centerCenter) {
            if (this.logoUrl && this.logoPosition === POSITION.centerCenter) {
                if (this.text && this.textPosition === POSITION.centerCenter) {
                    // logo, spinner and text
                    this.logoTop = this.domSanitizer
                        .bypassSecurityTrustStyle("calc(50% - " + this.fgsSize / 2 + "px - " + textSize / 2 + "px - " + this.gap + "px)");
                    this.spinnerTop = this.domSanitizer
                        .bypassSecurityTrustStyle("calc(50% + " + this.logoSize / 2 + "px - " + textSize / 2 + "px)");
                    this.textTop = this.domSanitizer
                        .bypassSecurityTrustStyle("calc(50% + " + this.logoSize / 2 + "px + " + this.gap + "px + " + this.fgsSize / 2 + "px)");
                }
                else {
                    // logo and spinner
                    this.logoTop = this.domSanitizer
                        .bypassSecurityTrustStyle("calc(50% - " + this.fgsSize / 2 + "px - " + this.gap / 2 + "px)");
                    this.spinnerTop = this.domSanitizer
                        .bypassSecurityTrustStyle("calc(50% + " + this.logoSize / 2 + "px + " + this.gap / 2 + "px)");
                }
            }
            else {
                if (this.text && this.textPosition === POSITION.centerCenter) {
                    // spinner and text
                    this.spinnerTop = this.domSanitizer
                        .bypassSecurityTrustStyle("calc(50% - " + textSize / 2 + "px - " + this.gap / 2 + "px)");
                    this.textTop = this.domSanitizer
                        .bypassSecurityTrustStyle("calc(50% + " + this.fgsSize / 2 + "px + " + this.gap / 2 + "px)");
                }
            }
        }
        else {
            if (this.logoUrl && this.logoPosition === POSITION.centerCenter
                && this.text && this.textPosition === POSITION.centerCenter) {
                // logo and text
                this.logoTop = this.domSanitizer
                    .bypassSecurityTrustStyle("calc(50% - " + textSize / 2 + "px - " + this.gap / 2 + "px)");
                this.textTop = this.domSanitizer
                    .bypassSecurityTrustStyle("calc(50% + " + this.logoSize / 2 + "px + " + this.gap / 2 + "px)");
            }
        }
    };
    /**
     * @param {?} inputName
     * @param {?} value
     * @param {?} validTypeObj
     * @param {?} fallbackValue
     * @return {?}
     */
    NgxUiLoaderComponent.prototype.validate = /**
     * @param {?} inputName
     * @param {?} value
     * @param {?} validTypeObj
     * @param {?} fallbackValue
     * @return {?}
     */
    function (inputName, value, validTypeObj, fallbackValue) {
        if (Object.keys(validTypeObj).map(function (k) { return validTypeObj[k]; }).findIndex(function (v) { return v === value; }) === -1) {
            console.error("[ngx-ui-loader] - " + inputName + " (\"" + value + "\") is invalid. "
                + ("Default value \"" + fallbackValue + "\" is used."));
            return fallbackValue;
        }
        return value;
    };
    /**
     * On destroy event
     */
    /**
     * On destroy event
     * @return {?}
     */
    NgxUiLoaderComponent.prototype.ngOnDestroy = /**
     * On destroy event
     * @return {?}
     */
    function () {
        if (this.showForegroundWatcher) {
            this.showForegroundWatcher.unsubscribe();
        }
        if (this.showBackgroundWatcher) {
            this.showBackgroundWatcher.unsubscribe();
        }
        if (this.foregroundClosingWatcher) {
            this.foregroundClosingWatcher.unsubscribe();
        }
        if (this.backgroundClosingWatcher) {
            this.backgroundClosingWatcher.unsubscribe();
        }
    };
    NgxUiLoaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-ui-loader',
                    template: "<!-- Progress bar {{{ -->\n<div *ngIf=\"hasProgressBar\"\n  class=\"ngx-progress-bar\"\n  [ngClass]=\"'ngx-progress-bar-' + pbDirection\"\n  [style.height.px]=\"pbThickness\"\n  [style.color]=\"pbColor\"\n  [class.loading-foreground]=\"showForeground\"\n  [class.foreground-closing]=\"foregroundClosing\"></div>\n<!-- Progress bar }}} -->\n\n<!-- Foreground container {{{ -->\n<div class=\"ngx-overlay\"\n  [style.background-color]=\"overlayColor\"\n  [class.loading-foreground]=\"showForeground\"\n  [class.foreground-closing]=\"foregroundClosing\">\n\n  <!-- Logo {{{ -->\n  <img *ngIf=\"logoUrl\" class=\"ngx-loading-logo\"\n    [ngClass]=\"logoPosition\" [src]=\"trustedLogoUrl\"\n    [style.width.px]=\"logoSize\" [style.height.px]=\"logoSize\"\n    [style.top]=\"logoTop\">\n  <!-- Logo }}} -->\n\n  <!-- Foreground spinner {{{ -->\n  <div class=\"ngx-foreground-spinner\"\n    [ngClass]=\"fgsPosition\" [style.color]=\"fgsColor\"\n    [style.width.px]=\"fgsSize\" [style.height.px]=\"fgsSize\"\n    [style.top]=\"spinnerTop\">\n    <div [class]=\"fgSpinnerClass\">\n      <div *ngFor=\"let div of fgDivs\"></div>\n    </div>\n  </div>\n  <!-- Foreground spinner }}} -->\n\n  <!-- Loading text {{{ -->\n  <div class=\"ngx-loading-text\"\n    [ngClass]=\"textPosition\"\n    [style.top]=\"textTop\"\n    [style.color]=\"textColor\">{{text}}</div>\n  <!-- Loading text }}} -->\n\n</div>\n<!-- Foreground container }}} -->\n\n<!-- Background spinner {{{ -->\n<div class=\"ngx-background-spinner\"\n  [ngClass]=\"bgsPosition\"\n  [class.loading-background]=\"showBackground\"\n  [class.background-closing]=\"backgroundClosing\"\n  [style.width.px]=\"bgsSize\" [style.height.px]=\"bgsSize\"\n  [style.color]=\"bgsColor\" [style.opacity]=\"bgsOpacity\">\n  <div [class]=\"bgSpinnerClass\">\n    <div *ngFor=\"let div of bgDivs\"></div>\n  </div>\n</div>\n<!-- Background spinner }}} -->\n",
                    styles: [".ngx-progress-bar{position:fixed;top:0;left:0;width:100%;height:3px;z-index:99999!important;display:none;color:#00acc1}.ngx-progress-bar.foreground-closing,.ngx-progress-bar.loading-foreground{display:block}.ngx-progress-bar.foreground-closing{opacity:0!important;transition:opacity .5s ease-out .5s}.ngx-progress-bar::after,.ngx-progress-bar::before{background-color:currentColor;content:'';display:block;width:100%;height:100%;position:absolute;top:0}.ngx-progress-bar-ltr::before{-webkit-transform:translate3d(-100vw,0,0);transform:translate3d(-100vw,0,0)}.ngx-progress-bar-ltr::after{-webkit-animation:20s ease-out progressBar-slide-ltr;animation:20s ease-out progressBar-slide-ltr;-webkit-transform:translate3d(-5vw,0,0);transform:translate3d(-5vw,0,0)}.ngx-progress-bar-rtl::before{-webkit-transform:translate3d(100vw,0,0);transform:translate3d(100vw,0,0)}.ngx-progress-bar-rtl::after{-webkit-animation:20s ease-out progressBar-slide-rtl;animation:20s ease-out progressBar-slide-rtl;-webkit-transform:translate3d(5vw,0,0);transform:translate3d(5vw,0,0)}.foreground-closing.ngx-progress-bar-ltr::before{-webkit-animation:1s ease-out progressBar-slide-complete-ltr;animation:1s ease-out progressBar-slide-complete-ltr;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.foreground-closing.ngx-progress-bar-rtl::before{-webkit-animation:1s ease-out progressBar-slide-complete-rtl;animation:1s ease-out progressBar-slide-complete-rtl;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}@-webkit-keyframes progressBar-slide-ltr{from{-webkit-transform:translate3d(-100vw,0,0);transform:translate3d(-100vw,0,0)}to{-webkit-transform:translate3d(-5vw,0,0);transform:translate3d(-5vw,0,0)}}@keyframes progressBar-slide-ltr{from{-webkit-transform:translate3d(-100vw,0,0);transform:translate3d(-100vw,0,0)}to{-webkit-transform:translate3d(-5vw,0,0);transform:translate3d(-5vw,0,0)}}@-webkit-keyframes progressBar-slide-rtl{from{-webkit-transform:translate3d(100vw,0,0);transform:translate3d(100vw,0,0)}to{-webkit-transform:translate3d(5vw,0,0);transform:translate3d(5vw,0,0)}}@keyframes progressBar-slide-rtl{from{-webkit-transform:translate3d(100vw,0,0);transform:translate3d(100vw,0,0)}to{-webkit-transform:translate3d(5vw,0,0);transform:translate3d(5vw,0,0)}}@-webkit-keyframes progressBar-slide-complete-ltr{0%{-webkit-transform:translate3d(-75vw,0,0);transform:translate3d(-75vw,0,0)}50%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes progressBar-slide-complete-ltr{0%{-webkit-transform:translate3d(-75vw,0,0);transform:translate3d(-75vw,0,0)}50%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-webkit-keyframes progressBar-slide-complete-rtl{0%{-webkit-transform:translate3d(75vw,0,0);transform:translate3d(75vw,0,0)}50%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes progressBar-slide-complete-rtl{0%{-webkit-transform:translate3d(75vw,0,0);transform:translate3d(75vw,0,0)}50%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.ngx-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99998!important;background-color:rgba(40,40,40,.8);display:none}.ngx-overlay.foreground-closing,.ngx-overlay.loading-foreground{display:block}.ngx-overlay.foreground-closing{opacity:0!important;transition:opacity .5s ease-out .5s}.ngx-overlay>.ngx-foreground-spinner{position:fixed;width:60px;height:60px;margin:0;color:#00acc1}.ngx-overlay>.ngx-loading-logo{position:fixed;margin:0;width:120px;height:120px}.ngx-overlay>.ngx-loading-text{position:fixed;margin:0;font-family:sans-serif;font-weight:400;font-size:1.2em;color:#fff}.ngx-background-spinner{position:fixed;z-index:99997!important;width:60px;height:60px;margin:0;color:#00acc1;opacity:.6;display:none}.ngx-background-spinner.background-closing,.ngx-background-spinner.loading-background{display:block}.ngx-background-spinner.background-closing{opacity:0!important;transition:opacity .7s ease-out}.top-left{position:fixed;top:30px;left:30px}.top-center{position:fixed;top:30px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.top-right{position:fixed;top:30px;right:30px}.center-left{position:fixed;top:50%;left:30px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.center-center{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.center-right{position:fixed;top:50%;right:30px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.bottom-left{position:fixed;bottom:30px;left:30px}.bottom-center{position:fixed;bottom:30px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.bottom-right{position:fixed;bottom:30px;right:30px}.sk-ball-scale-multiple,.sk-ball-scale-multiple>div{position:relative;box-sizing:border-box}.sk-ball-scale-multiple{width:100%;height:100%;font-size:0}.sk-ball-scale-multiple>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;opacity:0;-webkit-animation:1s linear infinite ball-scale-multiple;animation:1s linear infinite ball-scale-multiple}.sk-ball-scale-multiple>div:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-ball-scale-multiple>div:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}@-webkit-keyframes ball-scale-multiple{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:.75}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-scale-multiple{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:.75}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}.sk-ball-spin,.sk-ball-spin>div{position:relative;box-sizing:border-box}.sk-ball-spin{width:100%;height:100%;font-size:0}.sk-ball-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin-clockwise;animation:1s ease-in-out infinite ball-spin-clockwise}.sk-ball-spin>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.sk-ball-spin>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.sk-ball-spin>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.sk-ball-spin>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.sk-ball-spin>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.sk-ball-spin>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.sk-ball-spin>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.sk-ball-spin>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}@-webkit-keyframes ball-spin{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes ball-spin{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}.sk-ball-spin-clockwise,.sk-ball-spin-clockwise>div{position:relative;box-sizing:border-box}.sk-ball-spin-clockwise{width:100%;height:100%;font-size:0}.sk-ball-spin-clockwise>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin-clockwise;animation:1s ease-in-out infinite ball-spin-clockwise}.sk-ball-spin-clockwise>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.sk-ball-spin-clockwise>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.sk-ball-spin-clockwise>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.sk-ball-spin-clockwise>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-ball-spin-clockwise>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.sk-ball-spin-clockwise>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.sk-ball-spin-clockwise>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.sk-ball-spin-clockwise>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}.sk-ball-spin-clockwise-fade-rotating,.sk-ball-spin-clockwise-fade-rotating>div{position:relative;box-sizing:border-box}.sk-ball-spin-clockwise-fade-rotating{font-size:0;width:100%;height:100%;-webkit-animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate;animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate}.sk-ball-spin-clockwise-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-clockwise-fade-rotating;animation:1s linear infinite ball-spin-clockwise-fade-rotating}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.sk-ball-spin-clockwise-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes ball-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@-webkit-keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.sk-ball-spin-fade-rotating,.sk-ball-spin-fade-rotating>div{position:relative;box-sizing:border-box}.sk-ball-spin-fade-rotating{width:100%;height:100%;font-size:0;-webkit-animation:6s linear infinite ball-spin-fade-rotate;animation:6s linear infinite ball-spin-fade-rotate}.sk-ball-spin-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:25%;height:25%;margin-top:-12.5%;margin-left:-12.5%;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-fade;animation:1s linear infinite ball-spin-fade}.sk-ball-spin-fade-rotating>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.sk-ball-spin-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.sk-ball-spin-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.sk-ball-spin-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.sk-ball-spin-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.sk-ball-spin-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.sk-ball-spin-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.sk-ball-spin-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}@-webkit-keyframes ball-spin-fade-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-spin-fade-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes ball-spin-fade{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}}@keyframes ball-spin-fade{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}}.sk-chasing-dots{margin:auto;width:100%;height:100%;position:absolute;text-align:center;-webkit-animation:2s linear infinite sk-chasingDots-rotate;animation:2s linear infinite sk-chasingDots-rotate}.sk-chasing-dots>div{width:60%;height:60%;display:inline-block;position:absolute;top:0;background-color:currentColor;border-radius:100%;-webkit-animation:2s ease-in-out infinite sk-chasingDots-bounce;animation:2s ease-in-out infinite sk-chasingDots-bounce}.sk-chasing-dots>div:nth-child(2){top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-chasingDots-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes sk-chasingDots-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes sk-chasingDots-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-chasingDots-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.sk-circle{margin:auto;width:100%;height:100%;position:relative}.sk-circle>div{width:100%;height:100%;position:absolute;left:0;top:0}.sk-circle>div::before{content:'';display:block;margin:0 auto;width:15%;height:15%;background-color:currentColor;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circle-bounceDelay;animation:1.2s ease-in-out infinite both sk-circle-bounceDelay}.sk-circle>div:nth-child(2){-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-circle>div:nth-child(3){-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-circle>div:nth-child(4){-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-circle>div:nth-child(5){-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-circle>div:nth-child(6){-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-circle>div:nth-child(7){-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-circle>div:nth-child(8){-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-circle>div:nth-child(9){-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-circle>div:nth-child(10){-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-circle>div:nth-child(11){-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-circle>div:nth-child(12){-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-circle>div:nth-child(2)::before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-circle>div:nth-child(3)::before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-circle>div:nth-child(4)::before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-circle>div:nth-child(5)::before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-circle>div:nth-child(6)::before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-circle>div:nth-child(7)::before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-circle>div:nth-child(8)::before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-circle>div:nth-child(9)::before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-circle>div:nth-child(10)::before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-circle>div:nth-child(11)::before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-circle>div:nth-child(12)::before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circle-bounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-circle-bounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.sk-cube-grid{width:100%;height:100%;margin:auto}.sk-cube-grid>div{width:33%;height:33%;background-color:currentColor;float:left;-webkit-animation:1.3s ease-in-out infinite sk-cubeGrid-scaleDelay;animation:1.3s ease-in-out infinite sk-cubeGrid-scaleDelay}.sk-cube-grid>div:nth-child(1){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid>div:nth-child(2){-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid>div:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.sk-cube-grid>div:nth-child(4){-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid>div:nth-child(5){-webkit-animation-delay:.2s;animation-delay:.2s}.sk-cube-grid>div:nth-child(6){-webkit-animation-delay:.3s;animation-delay:.3s}.sk-cube-grid>div:nth-child(7){-webkit-animation-delay:0s;animation-delay:0s}.sk-cube-grid>div:nth-child(8){-webkit-animation-delay:.1s;animation-delay:.1s}.sk-cube-grid>div:nth-child(9){-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes sk-cubeGrid-scaleDelay{0%,100%,70%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}@keyframes sk-cubeGrid-scaleDelay{0%,100%,70%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}}.sk-double-bounce{width:100%;height:100%;position:relative;margin:auto}.sk-double-bounce>div{width:100%;height:100%;border-radius:50%;background-color:currentColor;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:2s ease-in-out infinite sk-doubleBounce-bounce;animation:2s ease-in-out infinite sk-doubleBounce-bounce}.sk-double-bounce>div:nth-child(2){-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-doubleBounce-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-doubleBounce-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.sk-fading-circle{margin:auto;width:100%;height:100%;position:relative}.sk-fading-circle>div{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle>div::before{content:'';display:block;margin:0 auto;width:15%;height:15%;background-color:currentColor;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-fadingCircle-FadeDelay;animation:1.2s ease-in-out infinite both sk-fadingCircle-FadeDelay}.sk-fading-circle>div:nth-child(2){-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle>div:nth-child(3){-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle>div:nth-child(4){-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle>div:nth-child(5){-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle>div:nth-child(6){-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle>div:nth-child(7){-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle>div:nth-child(8){-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle>div:nth-child(9){-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle>div:nth-child(10){-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle>div:nth-child(11){-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle>div:nth-child(12){-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle>div:nth-child(2)::before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle>div:nth-child(3)::before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle>div:nth-child(4)::before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle>div:nth-child(5)::before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle>div:nth-child(6)::before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle>div:nth-child(7)::before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle>div:nth-child(8)::before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle>div:nth-child(9)::before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle>div:nth-child(10)::before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle>div:nth-child(11)::before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle>div:nth-child(12)::before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-fadingCircle-FadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-fadingCircle-FadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}.sk-folding-cube{margin:auto;width:100%;height:100%;position:relative;-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}.sk-folding-cube>div{float:left;width:50%;height:50%;position:relative;-webkit-transform:scale(1.1);transform:scale(1.1)}.sk-folding-cube>div::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;-webkit-animation:2.4s linear infinite both sk-foldingCube-angle;animation:2.4s linear infinite both sk-foldingCube-angle;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.sk-folding-cube>div:nth-child(2){-webkit-transform:scale(1.1) rotateZ(90deg);transform:scale(1.1) rotateZ(90deg)}.sk-folding-cube>div:nth-child(3){-webkit-transform:scale(1.1) rotateZ(270deg);transform:scale(1.1) rotateZ(270deg)}.sk-folding-cube>div:nth-child(4){-webkit-transform:scale(1.1) rotateZ(180deg);transform:scale(1.1) rotateZ(180deg)}.sk-folding-cube>div:nth-child(2)::before{-webkit-animation-delay:.3s;animation-delay:.3s}.sk-folding-cube>div:nth-child(3)::before{-webkit-animation-delay:.9s;animation-delay:.9s}.sk-folding-cube>div:nth-child(4)::before{-webkit-animation-delay:.6s;animation-delay:.6s}@-webkit-keyframes sk-foldingCube-angle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0);transform:perspective(140px) rotateX(0);opacity:1}100%,90%{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes sk-foldingCube-angle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0);transform:perspective(140px) rotateX(0);opacity:1}100%,90%{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}.sk-pulse{width:100%;height:100%;margin:auto}.sk-pulse>div{width:100%;height:100%;background-color:currentColor;border-radius:100%;-webkit-animation:1s ease-in-out infinite sk-pulse-scaleOut;animation:1s ease-in-out infinite sk-pulse-scaleOut}@-webkit-keyframes sk-pulse-scaleOut{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@keyframes sk-pulse-scaleOut{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}.sk-rectangle-bounce{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce>div{background-color:currentColor;height:100%;width:10%;margin:0 5%;display:inline-block;-webkit-animation:1.2s ease-in-out infinite sk-rectangleBounce-stretchDelay;animation:1.2s ease-in-out infinite sk-rectangleBounce-stretchDelay}.sk-rectangle-bounce>div:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-rectangle-bounce>div:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s}.sk-rectangle-bounce>div:nth-child(4){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce>div:nth-child(5){-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-rectangleBounce-stretchDelay{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes sk-rectangleBounce-stretchDelay{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}.sk-rectangle-bounce-party,.sk-rectangle-bounce-party>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-party{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-party>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation-name:rectangle-bounce-party;animation-name:rectangle-bounce-party;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.sk-rectangle-bounce-party>div:nth-child(1){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.23s;animation-delay:-.23s}.sk-rectangle-bounce-party>div:nth-child(2){-webkit-animation-duration:.62s;animation-duration:.62s;-webkit-animation-delay:-.32s;animation-delay:-.32s}.sk-rectangle-bounce-party>div:nth-child(3){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.44s;animation-delay:-.44s}.sk-rectangle-bounce-party>div:nth-child(4){-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-delay:-.31s;animation-delay:-.31s}.sk-rectangle-bounce-party>div:nth-child(5){-webkit-animation-duration:.74s;animation-duration:.74s;-webkit-animation-delay:-.24s;animation-delay:-.24s}@-webkit-keyframes rectangle-bounce-party{0%,100%{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}}@keyframes rectangle-bounce-party{0%,100%{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}}.sk-rectangle-bounce-pulse-out,.sk-rectangle-bounce-pulse-out>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-pulse-out{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-pulse-out>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation:.9s cubic-bezier(.85,.25,.37,.85) infinite rectangle-bounce-pulse-out;animation:.9s cubic-bezier(.85,.25,.37,.85) infinite rectangle-bounce-pulse-out}.sk-rectangle-bounce-pulse-out>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce-pulse-out>div:nth-child(2),.sk-rectangle-bounce-pulse-out>div:nth-child(4){-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-rectangle-bounce-pulse-out>div:nth-child(1),.sk-rectangle-bounce-pulse-out>div:nth-child(5){-webkit-animation-delay:-.5s;animation-delay:-.5s}@-webkit-keyframes rectangle-bounce-pulse-out{0%,100%{-webkit-transform:scaley(1);transform:scaley(1)}50%{-webkit-transform:scaley(.4);transform:scaley(.4)}}@keyframes rectangle-bounce-pulse-out{0%,100%{-webkit-transform:scaley(1);transform:scaley(1)}50%{-webkit-transform:scaley(.4);transform:scaley(.4)}}.sk-rectangle-bounce-pulse-out-rapid,.sk-rectangle-bounce-pulse-out-rapid>div{position:relative;box-sizing:border-box}.sk-rectangle-bounce-pulse-out-rapid{margin:auto;width:100%;height:100%;text-align:center;font-size:0}.sk-rectangle-bounce-pulse-out-rapid>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10%;height:100%;margin:0 5%;border-radius:0;-webkit-animation:.9s cubic-bezier(.11,.49,.38,.78) infinite rectangle-bounce-pulse-out-rapid;animation:.9s cubic-bezier(.11,.49,.38,.78) infinite rectangle-bounce-pulse-out-rapid}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(2),.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(4){-webkit-animation-delay:-.65s;animation-delay:-.65s}.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(1),.sk-rectangle-bounce-pulse-out-rapid>div:nth-child(5){-webkit-animation-delay:-.4s;animation-delay:-.4s}@-webkit-keyframes rectangle-bounce-pulse-out-rapid{0%,90%{-webkit-transform:scaley(1);transform:scaley(1)}80%{-webkit-transform:scaley(.4);transform:scaley(.4)}}@keyframes rectangle-bounce-pulse-out-rapid{0%,90%{-webkit-transform:scaley(1);transform:scaley(1)}80%{-webkit-transform:scaley(.4);transform:scaley(.4)}}.sk-rotating-plane{width:100%;height:100%;text-align:center;margin:auto}.sk-rotating-plane>div{width:100%;height:100%;background-color:currentColor;-webkit-animation:1.2s ease-in-out infinite sk-rotatePlane;animation:1.2s ease-in-out infinite sk-rotatePlane}@-webkit-keyframes sk-rotatePlane{0%{-webkit-transform:perspective(120px);transform:perspective(120px)}50%{-webkit-transform:perspective(120px) rotateY(180deg);transform:perspective(120px) rotateY(180deg)}100%{-webkit-transform:perspective(120px) rotateY(180deg) rotateX(180deg);transform:perspective(120px) rotateY(180deg) rotateX(180deg)}}@keyframes sk-rotatePlane{0%{-webkit-transform:perspective(120px) rotateX(0) rotateY(0);transform:perspective(120px) rotateX(0) rotateY(0)}50%{-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0);transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}100%{-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}.sk-square-jelly-box,.sk-square-jelly-box>div{position:relative;box-sizing:border-box}.sk-square-jelly-box{width:100%;height:100%;font-size:0}.sk-square-jelly-box>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.sk-square-jelly-box>div:nth-child(1),.sk-square-jelly-box>div:nth-child(2){position:absolute;left:0;width:100%}.sk-square-jelly-box>div:nth-child(1){top:-25%;z-index:99997;height:100%;border-radius:10%;-webkit-animation:.6s linear -.1s infinite square-jelly-box-animate;animation:.6s linear -.1s infinite square-jelly-box-animate}.sk-square-jelly-box>div:nth-child(2){bottom:-9%;height:10%;background:#000;border-radius:50%;opacity:.2;-webkit-animation:.6s linear -.1s infinite square-jelly-box-shadow;animation:.6s linear -.1s infinite square-jelly-box-shadow}@-webkit-keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{-webkit-transform:translateY(25%) rotate(22.5deg);transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;-webkit-transform:translateY(50%) scale(1,.9) rotate(45deg);transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{-webkit-transform:translateY(25%) rotate(67.5deg);transform:translateY(25%) rotate(67.5deg)}100%{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{-webkit-transform:translateY(25%) rotate(22.5deg);transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;-webkit-transform:translateY(50%) scale(1,.9) rotate(45deg);transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{-webkit-transform:translateY(25%) rotate(67.5deg);transform:translateY(25%) rotate(67.5deg)}100%{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@-webkit-keyframes square-jelly-box-shadow{50%{-webkit-transform:scale(1.25,1);transform:scale(1.25,1)}}@keyframes square-jelly-box-shadow{50%{-webkit-transform:scale(1.25,1);transform:scale(1.25,1)}}.sk-square-loader,.sk-square-loader>div{position:relative;box-sizing:border-box}.sk-square-loader{font-size:0;width:100%;height:100%}.sk-square-loader>div{display:inline-block;float:none;border:3px solid currentColor;width:100%;height:100%;background:0 0;border-radius:0;-webkit-animation:2s infinite square-loader;animation:2s infinite square-loader}.sk-square-loader>div:after{display:inline-block;width:100%;vertical-align:top;content:\"\";background-color:currentColor;-webkit-animation:2s ease-in infinite square-loader-inner;animation:2s ease-in infinite square-loader-inner}@-webkit-keyframes square-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,75%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes square-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,75%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}@keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}.sk-three-bounce{margin:auto;width:100%;height:100%;text-align:center}.sk-three-bounce>div{margin-top:35%;width:30%;height:30%;background-color:currentColor;border-radius:100%;display:inline-block;-webkit-animation:1.4s ease-in-out infinite both sk-threeBounce-bounceDelay;animation:1.4s ease-in-out infinite both sk-threeBounce-bounceDelay}.bottom-center>.sk-three-bounce>div,.bottom-left>.sk-three-bounce>div,.bottom-right>.sk-three-bounce>div{margin-top:70%!important}.top-center>.sk-three-bounce>div,.top-left>.sk-three-bounce>div,.top-right>.sk-three-bounce>div{margin-top:0!important}.sk-three-bounce>div:nth-child(1){-webkit-animation-delay:-.32s;animation-delay:-.32s}.sk-three-bounce>div:nth-child(2){-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes sk-threeBounce-bounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-threeBounce-bounceDelay{0%,100%,80%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.sk-three-strings{width:100%;height:100%}.sk-three-strings>div{position:absolute;box-sizing:border-box;width:100%;height:100%;border-radius:50%}.sk-three-strings>div:nth-child(1){left:0;top:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateOne;animation:1s linear infinite sk-threeStrings-rotateOne;border-bottom:3px solid currentColor}.sk-three-strings>div:nth-child(2){right:0;top:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateTwo;animation:1s linear infinite sk-threeStrings-rotateTwo;border-right:3px solid currentColor}.sk-three-strings>div:nth-child(3){right:0;bottom:0;-webkit-animation:1s linear infinite sk-threeStrings-rotateThree;animation:1s linear infinite sk-threeStrings-rotateThree;border-top:3px solid currentColor}@-webkit-keyframes sk-threeStrings-rotateOne{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0);transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg);transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateOne{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0);transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg);transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@-webkit-keyframes sk-threeStrings-rotateTwo{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(0);transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg);transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateTwo{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(0);transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg);transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@-webkit-keyframes sk-threeStrings-rotateThree{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(0);transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg);transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}@keyframes sk-threeStrings-rotateThree{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(0);transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg);transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}.sk-wandering-cubes{margin:auto;width:100%;height:100%;position:relative;text-align:center}.sk-wandering-cubes>div{background-color:currentColor;width:25%;height:25%;position:absolute;top:0;left:0;-webkit-animation:1.8s ease-in-out infinite sk-wanderingCubes-cubeMove;animation:1.8s ease-in-out infinite sk-wanderingCubes-cubeMove}.sk-wandering-cubes>div:nth-child(2){-webkit-animation-delay:-.9s;animation-delay:-.9s}@-webkit-keyframes sk-wanderingCubes-cubeMove{25%{-webkit-transform:translateX(290%) rotate(-90deg) scale(.5);transform:translateX(290%) rotate(-90deg) scale(.5)}50%{-webkit-transform:translateX(290%) translateY(290%) rotate(-180deg);transform:translateX(290%) translateY(290%) rotate(-180deg)}75%{-webkit-transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5);transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5)}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes sk-wanderingCubes-cubeMove{25%{-webkit-transform:translateX(290%) rotate(-90deg) scale(.5);transform:translateX(290%) rotate(-90deg) scale(.5)}50%{-webkit-transform:translateX(290%) translateY(290%) rotate(-179deg);transform:translateX(290%) translateY(290%) rotate(-179deg)}50.1%{-webkit-transform:translateX(290%) translateY(290%) rotate(-180deg);transform:translateX(290%) translateY(290%) rotate(-180deg)}75%{-webkit-transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5);transform:translateX(0) translateY(290%) rotate(-270deg) scale(.5)}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}"]
                },] },
    ];
    /** @nocollapse */
    NgxUiLoaderComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: NgxUiLoaderService }
    ]; };
    NgxUiLoaderComponent.propDecorators = {
        bgsColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bgsOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bgsPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bgsSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bgsType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fgsColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fgsPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fgsSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fgsType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        gap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        logoPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        logoSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        logoUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        overlayColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pbColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pbDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pbThickness: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hasProgressBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        textColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        textPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgxUiLoaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DELAY$1 = 500;
var NgxUiLoaderBlurredDirective = /** @class */ (function () {
    function NgxUiLoaderBlurredDirective(elementRef, renderer, ngxUiLoaderService) {
        var _this = this;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngxUiLoaderService = ngxUiLoaderService;
        this._blur = this.ngxUiLoaderService.getDefaultConfig().blur;
        this.showForegroundWatcher = this.ngxUiLoaderService.showForeground
            .subscribe(function (showForeground) {
            if (showForeground) {
                /** @type {?} */
                var filterValue = "blur(" + _this._blur + "px)";
                _this.renderer.setStyle(_this.elementRef.nativeElement, '-webkit-filter', filterValue);
                _this.renderer.setStyle(_this.elementRef.nativeElement, 'filter', filterValue);
            }
            else {
                setTimeout(function () {
                    if (!ngxUiLoaderService.hasForeground()) {
                        _this.renderer.setStyle(_this.elementRef.nativeElement, '-webkit-filter', 'none');
                        _this.renderer.setStyle(_this.elementRef.nativeElement, 'filter', 'none');
                    }
                }, DELAY$1);
            }
        });
    }
    Object.defineProperty(NgxUiLoaderBlurredDirective.prototype, "blur", {
        get: /**
         * @return {?}
         */
        function () {
            return this._blur;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._blur = coerceNumber(value, this.ngxUiLoaderService.getDefaultConfig().blur);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * On destroy event
     */
    /**
     * On destroy event
     * @return {?}
     */
    NgxUiLoaderBlurredDirective.prototype.ngOnDestroy = /**
     * On destroy event
     * @return {?}
     */
    function () {
        if (this.showForegroundWatcher) {
            this.showForegroundWatcher.unsubscribe();
        }
    };
    NgxUiLoaderBlurredDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngxUiLoaderBlurred]' },] },
    ];
    /** @nocollapse */
    NgxUiLoaderBlurredDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: NgxUiLoaderService }
    ]; };
    NgxUiLoaderBlurredDirective.propDecorators = {
        blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgxUiLoaderBlurredDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxUiLoaderModule = /** @class */ (function () {
    /**
     * Contructor
     * @param parentModule optional
     */
    function NgxUiLoaderModule(parentModule) {
        if (parentModule) {
            throw new Error('[ngx-ui-loader] - NgxUiLoaderModule is already loaded. It should be imported in the root `AppModule` only!');
        }
    }
    /**
     * forRoot
     * @param ngxUiLoaderConfig
     * @returns A module with its provider dependencies
     */
    /**
     * forRoot
     * @param {?} ngxUiLoaderConfig
     * @return {?} A module with its provider dependencies
     */
    NgxUiLoaderModule.forRoot = /**
     * forRoot
     * @param {?} ngxUiLoaderConfig
     * @return {?} A module with its provider dependencies
     */
    function (ngxUiLoaderConfig) {
        return {
            ngModule: NgxUiLoaderModule,
            providers: [
                {
                    provide: NGX_UI_LOADER_CONFIG_TOKEN,
                    useValue: ngxUiLoaderConfig
                }
            ]
        };
    };
    NgxUiLoaderModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    ],
                    providers: [
                        NgxUiLoaderService,
                    ],
                    declarations: [
                        NgxUiLoaderComponent,
                        NgxUiLoaderBlurredDirective,
                    ],
                    exports: [
                        NgxUiLoaderComponent,
                        NgxUiLoaderBlurredDirective,
                    ]
                },] },
    ];
    /** @nocollapse */
    NgxUiLoaderModule.ctorParameters = function () { return [
        { type: NgxUiLoaderModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] }
    ]; };
    return NgxUiLoaderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Injection token for ngx-ui-loader-router configuration
  @type {?} */
var NGX_UI_LOADER_ROUTER_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ngxUiLoaderRouterCustom.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Router loader id
  @type {?} */
var ROUTER_LOADER_ID = '$_router_loader';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxUiLoaderRouterModule = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param parentModule
     * @param config
     * @param router
     * @param ngxUiLoaderService
     */
    function NgxUiLoaderRouterModule(parentModule, config, router, ngxUiLoaderService) {
        if (parentModule) {
            throw new Error('[ngx-ui-loader] - NgxUiLoaderRouterModule is already loaded. It should be imported in the root `AppModule` only!');
        }
        /** @type {?} */
        var defaultConfig = {
            showForeground: true
        };
        if (config) {
            defaultConfig = Object.assign(defaultConfig, config);
        }
        router.events
            .subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (defaultConfig.showForeground) {
                    ngxUiLoaderService.start(ROUTER_LOADER_ID);
                }
                else {
                    ngxUiLoaderService.startBackground(ROUTER_LOADER_ID);
                }
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationError"]) {
                if (defaultConfig.showForeground) {
                    ngxUiLoaderService.stop(ROUTER_LOADER_ID);
                }
                else {
                    ngxUiLoaderService.stopBackground(ROUTER_LOADER_ID);
                }
            }
        });
    }
    /**
     * forRoot
     * @param routerConfig Configuration
     * @returns A module with its provider dependencies
     */
    /**
     * forRoot
     * @param {?} routerConfig Configuration
     * @return {?} A module with its provider dependencies
     */
    NgxUiLoaderRouterModule.forRoot = /**
     * forRoot
     * @param {?} routerConfig Configuration
     * @return {?} A module with its provider dependencies
     */
    function (routerConfig) {
        return {
            ngModule: NgxUiLoaderRouterModule,
            providers: [
                {
                    provide: NGX_UI_LOADER_ROUTER_CONFIG_TOKEN,
                    useValue: routerConfig
                }
            ]
        };
    };
    NgxUiLoaderRouterModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] },
    ];
    /** @nocollapse */
    NgxUiLoaderRouterModule.ctorParameters = function () { return [
        { type: NgxUiLoaderRouterModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NGX_UI_LOADER_ROUTER_CONFIG_TOKEN,] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: NgxUiLoaderService }
    ]; };
    return NgxUiLoaderRouterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Injection token for ngx-ui-loader-http configuration
  @type {?} */
var NGX_UI_LOADER_HTTP_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ngxUiLoaderHttpCustom.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Http loader id
  @type {?} */
var HTTP_LOADER_ID = '$_http-loader';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxUiLoaderHttpInterceptor = /** @class */ (function () {
    /**
     * Constructor
     * @param config
     * @param ngxUiLoaderService
     */
    function NgxUiLoaderHttpInterceptor(config, ngxUiLoaderService) {
        this.ngxUiLoaderService = ngxUiLoaderService;
        this.count = 0;
        this.defaultConfig = {
            showForeground: false
        };
        if (config) {
            if (config.exclude) {
                config.exclude = config.exclude.map(function (url) { return url.toLowerCase(); });
            }
            this.defaultConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.defaultConfig, config);
        }
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    NgxUiLoaderHttpInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        var _this = this;
        if (this.defaultConfig.exclude) {
            // do not show the loader for api url in the `exclude` list
            if (this.defaultConfig.exclude.findIndex(function (url) { return req.url.toLowerCase().startsWith(url); }) !== -1) {
                return next.handle(req);
            }
        }
        this.count++;
        if (this.defaultConfig.showForeground) {
            if (!this.ngxUiLoaderService.hasForeground(HTTP_LOADER_ID)) {
                this.ngxUiLoaderService.start(HTTP_LOADER_ID);
            }
        }
        else {
            if (!this.ngxUiLoaderService.hasBackground(HTTP_LOADER_ID)) {
                this.ngxUiLoaderService.startBackground(HTTP_LOADER_ID);
            }
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
            _this.count--;
            if (_this.count === 0) {
                if (_this.defaultConfig.showForeground) {
                    _this.ngxUiLoaderService.stop(HTTP_LOADER_ID);
                }
                else {
                    _this.ngxUiLoaderService.stopBackground(HTTP_LOADER_ID);
                }
            }
        }));
    };
    NgxUiLoaderHttpInterceptor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgxUiLoaderHttpInterceptor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NGX_UI_LOADER_HTTP_CONFIG_TOKEN,] }] },
        { type: NgxUiLoaderService }
    ]; };
    return NgxUiLoaderHttpInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxUiLoaderHttpModule = /** @class */ (function () {
    /**
     * Constructor
     * @param parentModule optional
     */
    function NgxUiLoaderHttpModule(parentModule) {
        if (parentModule) {
            throw new Error('[ngx-ui-loader] - NgxUiLoaderHttpModule is already loaded. It should be imported in the root `AppModule` only!');
        }
    }
    /**
     * forRoot
     * @param httpConfig Configuration
     * @returns A module with its provider dependencies
     */
    /**
     * forRoot
     * @param {?} httpConfig Configuration
     * @return {?} A module with its provider dependencies
     */
    NgxUiLoaderHttpModule.forRoot = /**
     * forRoot
     * @param {?} httpConfig Configuration
     * @return {?} A module with its provider dependencies
     */
    function (httpConfig) {
        return {
            ngModule: NgxUiLoaderHttpModule,
            providers: [
                {
                    provide: NGX_UI_LOADER_HTTP_CONFIG_TOKEN,
                    useValue: httpConfig
                }
            ]
        };
    };
    NgxUiLoaderHttpModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                            useClass: NgxUiLoaderHttpInterceptor,
                            multi: true
                        }
                    ],
                },] },
    ];
    /** @nocollapse */
    NgxUiLoaderHttpModule.ctorParameters = function () { return [
        { type: NgxUiLoaderHttpModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] }
    ]; };
    return NgxUiLoaderHttpModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLWxvYWRlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXVpLWxvYWRlci9saWIvY29yZS9uZ3gtdWktbG9hZGVyLmVudW1zLnRzIiwibmc6Ly9uZ3gtdWktbG9hZGVyL2xpYi9jb3JlL25neC11aS1sb2FkZXIuY29udGFudHMudHMiLCJuZzovL25neC11aS1sb2FkZXIvbGliL2NvcmUvbmd4LXVpLWxvYWRlci1jb25maWcudG9rZW4udHMiLCJuZzovL25neC11aS1sb2FkZXIvbGliL2NvcmUvbmd4LXVpLWxvYWRlci5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtdWktbG9hZGVyL2xpYi9jb3JlL2NvZXJjaW9uLnRzIiwibmc6Ly9uZ3gtdWktbG9hZGVyL2xpYi9jb3JlL25neC11aS1sb2FkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtdWktbG9hZGVyL2xpYi9jb3JlL25neC11aS1sb2FkZXItYmx1cnJlZC5kaXJlY3RpdmUudHMiLCJuZzovL25neC11aS1sb2FkZXIvbGliL2NvcmUvbmd4LXVpLWxvYWRlci5tb2R1bGUudHMiLCJuZzovL25neC11aS1sb2FkZXIvbGliL3JvdXRlci9uZ3gtdWktbG9hZGVyLXJvdXRlci1jb25maWcudG9rZW4udHMiLCJuZzovL25neC11aS1sb2FkZXIvbGliL3JvdXRlci9uZ3gtdWktbG9hZGVyLXJvdXRlci5jb25zdGFudHMudHMiLCJuZzovL25neC11aS1sb2FkZXIvbGliL3JvdXRlci9uZ3gtdWktbG9hZGVyLXJvdXRlci5tb2R1bGUudHMiLCJuZzovL25neC11aS1sb2FkZXIvbGliL2h0dHAvbmd4LXVpLWxvYWRlci1odHRwLWNvbmZpZy50b2tlbi50cyIsIm5nOi8vbmd4LXVpLWxvYWRlci9saWIvaHR0cC9uZ3gtdWktbG9hZGVyLWh0dHAuY29uc3RhbnRzLnRzIiwibmc6Ly9uZ3gtdWktbG9hZGVyL2xpYi9odHRwL25neC11aS1sb2FkZXItaHR0cC5pbnRlcmNlcHRvci50cyIsIm5nOi8vbmd4LXVpLWxvYWRlci9saWIvaHR0cC9uZ3gtdWktbG9hZGVyLWh0dHAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXZhaWxhYmxlIHNwaW5uZXIgdHlwZXNcbiAqL1xuZXhwb3J0IGVudW0gU1BJTk5FUiB7XG4gIGJhbGxTY2FsZU11bHRpcGxlID0gJ2JhbGwtc2NhbGUtbXVsdGlwbGUnLFxuICBiYWxsU3BpbiA9ICdiYWxsLXNwaW4nLFxuICBiYWxsU3BpbkNsb2Nrd2lzZSA9ICdiYWxsLXNwaW4tY2xvY2t3aXNlJyxcbiAgYmFsbFNwaW5DbG9ja3dpc2VGYWRlUm90YXRpbmcgPSAnYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nJyxcbiAgYmFsbFNwaW5GYWRlUm90YXRpbmcgPSAnYmFsbC1zcGluLWZhZGUtcm90YXRpbmcnLFxuICBjaGFzaW5nRG90cyA9ICdjaGFzaW5nLWRvdHMnLFxuICBjaXJjbGUgPSAnY2lyY2xlJyxcbiAgY3ViZUdyaWQgPSAnY3ViZS1ncmlkJyxcbiAgZG91YmxlQm91bmNlID0gJ2RvdWJsZS1ib3VuY2UnLFxuICBmYWRpbmdDaXJjbGUgPSAnZmFkaW5nLWNpcmNsZScsXG4gIGZvbGRpbmdDdWJlID0gJ2ZvbGRpbmctY3ViZScsXG4gIHB1bHNlID0gJ3B1bHNlJyxcbiAgcmVjdGFuZ2xlQm91bmNlID0gJ3JlY3RhbmdsZS1ib3VuY2UnLFxuICByZWN0YW5nbGVCb3VuY2VQYXJ0eSA9ICdyZWN0YW5nbGUtYm91bmNlLXBhcnR5JyxcbiAgcmVjdGFuZ2xlQm91bmNlUHVsc2VPdXQgPSAncmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQnLFxuICByZWN0YW5nbGVCb3VuY2VQdWxzZU91dFJhcGlkID0gJ3JlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0LXJhcGlkJyxcbiAgcm90YXRpbmdQbGFuZSA9ICdyb3RhdGluZy1wbGFuZScsXG4gIHNxdWFyZUplbGx5Qm94ID0gJ3NxdWFyZS1qZWxseS1ib3gnLFxuICBzcXVhcmVMb2FkZXIgPSAnc3F1YXJlLWxvYWRlcicsXG4gIHRocmVlQm91bmNlID0gJ3RocmVlLWJvdW5jZScsXG4gIHRocmVlU3RyaW5ncyA9ICd0aHJlZS1zdHJpbmdzJyxcbiAgd2FuZGVyaW5nQ3ViZXMgPSAnd2FuZGVyaW5nLWN1YmVzJyxcbn1cblxuLyoqXG4gKiBBdmFpbGFibGUgcG9zdGlvbnNcbiAqL1xuZXhwb3J0IGVudW0gUE9TSVRJT04ge1xuICBib3R0b21DZW50ZXIgPSAnYm90dG9tLWNlbnRlcicsXG4gIGJvdHRvbUxlZnQgPSAnYm90dG9tLWxlZnQnLFxuICBib3R0b21SaWdodCA9ICdib3R0b20tcmlnaHQnLFxuICBjZW50ZXJDZW50ZXIgPSAnY2VudGVyLWNlbnRlcicsXG4gIGNlbnRlckxlZnQgPSAnY2VudGVyLWxlZnQnLFxuICBjZW50ZXJSaWdodCA9ICdjZW50ZXItcmlnaHQnLFxuICB0b3BDZW50ZXIgPSAndG9wLWNlbnRlcicsXG4gIHRvcExlZnQgPSAndG9wLWxlZnQnLFxuICB0b3BSaWdodCA9ICd0b3AtcmlnaHQnXG59XG5cbi8qKlxuICogUHJvZ3Jlc3MgYmFyIGRpcmVjdGlvbnNcbiAqL1xuZXhwb3J0IGVudW0gUEJfRElSRUNUSU9OIHtcbiAgbGVmdFRvUmlnaHQgPSAnbHRyJyxcbiAgcmlnaHRUb0xlZnQgPSAncnRsJ1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSBgU1BJTk5FUmAgaW5zdGVhZC4gVGhpcyB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIHZlcnNpb24gMi54LnhcbiAqL1xuZXhwb3J0IGVudW0gU1BJTk5FUl9UWVBFUyB7XG4gIGJhbGxTY2FsZU11bHRpcGxlID0gJ2JhbGwtc2NhbGUtbXVsdGlwbGUnLFxuICBiYWxsU3BpbiA9ICdiYWxsLXNwaW4nLFxuICBiYWxsU3BpbkNsb2Nrd2lzZSA9ICdiYWxsLXNwaW4tY2xvY2t3aXNlJyxcbiAgYmFsbFNwaW5DbG9ja3dpc2VGYWRlUm90YXRpbmcgPSAnYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nJyxcbiAgYmFsbFNwaW5GYWRlUm90YXRpbmcgPSAnYmFsbC1zcGluLWZhZGUtcm90YXRpbmcnLFxuICBjaGFzaW5nRG90cyA9ICdjaGFzaW5nLWRvdHMnLFxuICBjaXJjbGUgPSAnY2lyY2xlJyxcbiAgY3ViZUdyaWQgPSAnY3ViZS1ncmlkJyxcbiAgZG91YmxlQm91bmNlID0gJ2RvdWJsZS1ib3VuY2UnLFxuICBmYWRpbmdDaXJjbGUgPSAnZmFkaW5nLWNpcmNsZScsXG4gIGZvbGRpbmdDdWJlID0gJ2ZvbGRpbmctY3ViZScsXG4gIHB1bHNlID0gJ3B1bHNlJyxcbiAgcmVjdGFuZ2xlQm91bmNlID0gJ3JlY3RhbmdsZS1ib3VuY2UnLFxuICByZWN0YW5nbGVCb3VuY2VQYXJ0eSA9ICdyZWN0YW5nbGUtYm91bmNlLXBhcnR5JyxcbiAgcmVjdGFuZ2xlQm91bmNlUHVsc2VPdXQgPSAncmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQnLFxuICByZWN0YW5nbGVCb3VuY2VQdWxzZU91dFJhcGlkID0gJ3JlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0LXJhcGlkJyxcbiAgcm90YXRpbmdQbGFuZSA9ICdyb3RhdGluZy1wbGFuZScsXG4gIHNxdWFyZUplbGx5Qm94ID0gJ3NxdWFyZS1qZWxseS1ib3gnLFxuICBzcXVhcmVMb2FkZXIgPSAnc3F1YXJlLWxvYWRlcicsXG4gIHRocmVlQm91bmNlID0gJ3RocmVlLWJvdW5jZScsXG4gIHRocmVlU3RyaW5ncyA9ICd0aHJlZS1zdHJpbmdzJyxcbiAgd2FuZGVyaW5nQ3ViZXMgPSAnd2FuZGVyaW5nLWN1YmVzJyxcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgYFBPU0lUSU9OYCBpbnN0ZWFkLiBUaGlzIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgdmVyc2lvbiAyLngueFxuICovXG5leHBvcnQgZW51bSBOR1hfUE9TSVRJT05TIHtcbiAgYm90dG9tQ2VudGVyID0gJ2JvdHRvbS1jZW50ZXInLFxuICBib3R0b21MZWZ0ID0gJ2JvdHRvbS1sZWZ0JyxcbiAgYm90dG9tUmlnaHQgPSAnYm90dG9tLXJpZ2h0JyxcbiAgY2VudGVyQ2VudGVyID0gJ2NlbnRlci1jZW50ZXInLFxuICBjZW50ZXJMZWZ0ID0gJ2NlbnRlci1sZWZ0JyxcbiAgY2VudGVyUmlnaHQgPSAnY2VudGVyLXJpZ2h0JyxcbiAgdG9wQ2VudGVyID0gJ3RvcC1jZW50ZXInLFxuICB0b3BMZWZ0ID0gJ3RvcC1sZWZ0JyxcbiAgdG9wUmlnaHQgPSAndG9wLXJpZ2h0J1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSBgUEJfRElSRUNUSU9OYCBpbnN0ZWFkLiBUaGlzIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgdmVyc2lvbiAyLngueFxuICovXG5leHBvcnQgZW51bSBQQl9ESVJFQ1RJT05TIHtcbiAgbGVmdFRvUmlnaHQgPSAnbHRyJyxcbiAgcmlnaHRUb0xlZnQgPSAncnRsJ1xufVxuIiwiaW1wb3J0IHsgTmd4VWlMb2FkZXJDb25maWcgfSBmcm9tICcuL25neC11aS1sb2FkZXItY29uZmlnJztcbmltcG9ydCB7IFBPU0lUSU9OLCBQQl9ESVJFQ1RJT04sIFNQSU5ORVIgfSBmcm9tICcuL25neC11aS1sb2FkZXIuZW51bXMnO1xuXG4vKipcbiAqIFRoZSBjb25maWd1cmF0aW9uIG9mIHNwaW5uZXJzXG4gKi9cbmV4cG9ydCBjb25zdCBTUElOTkVSX0NPTkZJRyA9IHtcbiAgJ2JhbGwtc2NhbGUtbXVsdGlwbGUnOiB7XG4gICAgZGl2czogMyxcbiAgICBjbGFzczogJ3NrLWJhbGwtc2NhbGUtbXVsdGlwbGUnXG4gIH0sXG4gICdiYWxsLXNwaW4nOiB7XG4gICAgZGl2czogOCxcbiAgICBjbGFzczogJ3NrLWJhbGwtc3BpbidcbiAgfSxcbiAgJ2JhbGwtc3Bpbi1jbG9ja3dpc2UnOiB7XG4gICAgZGl2czogOCxcbiAgICBjbGFzczogJ3NrLWJhbGwtc3Bpbi1jbG9ja3dpc2UnXG4gIH0sXG4gICdiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcnOiB7XG4gICAgZGl2czogOCxcbiAgICBjbGFzczogJ3NrLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZydcbiAgfSxcbiAgJ2JhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nJzoge1xuICAgIGRpdnM6IDgsXG4gICAgY2xhc3M6ICdzay1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZydcbiAgfSxcbiAgJ2NoYXNpbmctZG90cyc6IHtcbiAgICBkaXZzOiAyLFxuICAgIGNsYXNzOiAnc2stY2hhc2luZy1kb3RzJ1xuICB9LFxuICAnY2lyY2xlJzoge1xuICAgIGRpdnM6IDEyLFxuICAgIGNsYXNzOiAnc2stY2lyY2xlJ1xuICB9LFxuICAnY3ViZS1ncmlkJzoge1xuICAgIGRpdnM6IDksXG4gICAgY2xhc3M6ICdzay1jdWJlLWdyaWQnXG4gIH0sXG4gICdkb3VibGUtYm91bmNlJzoge1xuICAgIGRpdnM6IDIsXG4gICAgY2xhc3M6ICdzay1kb3VibGUtYm91bmNlJ1xuICB9LFxuICAnZmFkaW5nLWNpcmNsZSc6IHtcbiAgICBkaXZzOiAxMixcbiAgICBjbGFzczogJ3NrLWZhZGluZy1jaXJjbGUnXG4gIH0sXG4gICdmb2xkaW5nLWN1YmUnOiB7XG4gICAgZGl2czogNCxcbiAgICBjbGFzczogJ3NrLWZvbGRpbmctY3ViZSdcbiAgfSxcbiAgJ3B1bHNlJzogIHtcbiAgICBkaXZzOiAxLFxuICAgIGNsYXNzOiAnc2stcHVsc2UnXG4gIH0sXG4gICdyZWN0YW5nbGUtYm91bmNlJzoge1xuICAgIGRpdnM6IDUsXG4gICAgY2xhc3M6ICdzay1yZWN0YW5nbGUtYm91bmNlJ1xuICB9LFxuICAncmVjdGFuZ2xlLWJvdW5jZS1wYXJ0eSc6IHtcbiAgICBkaXZzOiA1LFxuICAgIGNsYXNzOiAnc2stcmVjdGFuZ2xlLWJvdW5jZS1wYXJ0eSdcbiAgfSxcbiAgJ3JlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0Jzoge1xuICAgIGRpdnM6IDUsXG4gICAgY2xhc3M6ICdzay1yZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dCdcbiAgfSxcbiAgJ3JlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0LXJhcGlkJzoge1xuICAgIGRpdnM6IDUsXG4gICAgY2xhc3M6ICdzay1yZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dC1yYXBpZCdcbiAgfSxcbiAgJ3JvdGF0aW5nLXBsYW5lJzoge1xuICAgIGRpdnM6IDEsXG4gICAgY2xhc3M6ICdzay1yb3RhdGluZy1wbGFuZSdcbiAgfSxcbiAgJ3NxdWFyZS1qZWxseS1ib3gnOiB7XG4gICAgZGl2czogMixcbiAgICBjbGFzczogJ3NrLXNxdWFyZS1qZWxseS1ib3gnXG4gIH0sXG4gICdzcXVhcmUtbG9hZGVyJzoge1xuICAgIGRpdnM6IDEsXG4gICAgY2xhc3M6ICdzay1zcXVhcmUtbG9hZGVyJ1xuICB9LFxuICAndGhyZWUtYm91bmNlJzoge1xuICAgIGRpdnM6IDMsXG4gICAgY2xhc3M6ICdzay10aHJlZS1ib3VuY2UnXG4gIH0sXG4gICd0aHJlZS1zdHJpbmdzJzoge1xuICAgIGRpdnM6IDMsXG4gICAgY2xhc3M6ICdzay10aHJlZS1zdHJpbmdzJ1xuICB9LFxuICAnd2FuZGVyaW5nLWN1YmVzJzoge1xuICAgIGRpdnM6IDIsXG4gICAgY2xhc3M6ICdzay13YW5kZXJpbmctY3ViZXMnXG4gIH0sXG59O1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gb2Ygbmd4LXVpLWxvYWRlclxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9DT05GSUc6IE5neFVpTG9hZGVyQ29uZmlnID0ge1xuICBiZ3NDb2xvcjogJyMwMEFDQzEnLFxuICBiZ3NPcGFjaXR5OiAwLjUsXG4gIGJnc1Bvc2l0aW9uOiBQT1NJVElPTi5ib3R0b21SaWdodCxcbiAgYmdzU2l6ZTogNjAsXG4gIGJnc1R5cGU6IFNQSU5ORVIucmVjdGFuZ2xlQm91bmNlLFxuICBibHVyOiA1LFxuICBmZ3NDb2xvcjogJyMwMEFDQzEnLFxuICBmZ3NQb3NpdGlvbjogUE9TSVRJT04uY2VudGVyQ2VudGVyLFxuICBmZ3NTaXplOiA2MCxcbiAgZmdzVHlwZTogU1BJTk5FUi5yZWN0YW5nbGVCb3VuY2UsXG4gIGdhcDogMjQsXG4gIGxvZ29Qb3NpdGlvbjogUE9TSVRJT04uY2VudGVyQ2VudGVyLFxuICBsb2dvU2l6ZTogMTIwLFxuICBsb2dvVXJsOiAnJyxcbiAgb3ZlcmxheUNvbG9yOiAncmdiYSg0MCwgNDAsIDQwLCAwLjgpJyxcbiAgcGJDb2xvcjogJyMwMEFDQzEnLFxuICBwYkRpcmVjdGlvbjogUEJfRElSRUNUSU9OLmxlZnRUb1JpZ2h0LFxuICBwYlRoaWNrbmVzczogMyxcbiAgaGFzUHJvZ3Jlc3NCYXI6IHRydWUsXG4gIHRleHQ6ICcnLFxuICB0ZXh0Q29sb3I6ICcjRkZGRkZGJyxcbiAgdGV4dFBvc2l0aW9uOiBQT1NJVElPTi5jZW50ZXJDZW50ZXIsXG4gIHRocmVzaG9sZDogNTAwXG59O1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGlkIG9mIHRoZSBsb2FkaW5nXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0lEID0gJ2RlZmF1bHQnO1xuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFVpTG9hZGVyQ29uZmlnIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWNvbmZpZyc7XG5cbi8qKlxuICogSW5qZWN0aW9uIHRva2VuIGZvciBuZ3gtdWktbG9hZGVyIGNvbmZpZ3VyYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IE5HWF9VSV9MT0FERVJfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPE5neFVpTG9hZGVyQ29uZmlnPignbmd4VWlMb2FkZXJDdXN0b20uY29uZmlnJyk7XG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgREVGQVVMVF9JRCwgREVGQVVMVF9DT05GSUcgfSBmcm9tICcuL25neC11aS1sb2FkZXIuY29udGFudHMnO1xuaW1wb3J0IHsgTkdYX1VJX0xPQURFUl9DT05GSUdfVE9LRU4gfSBmcm9tICcuL25neC11aS1sb2FkZXItY29uZmlnLnRva2VuJztcbmltcG9ydCB7IE5neFVpTG9hZGVyQ29uZmlnIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWNvbmZpZyc7XG5cbmNvbnN0IERFTEFZID0gMTEwMDtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neFVpTG9hZGVyU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfZGVmYXVsdENvbmZpZzogTmd4VWlMb2FkZXJDb25maWc7XG4gIHByaXZhdGUgX3dhaXRpbmdGb3JlZ3JvdW5kOiB7fTtcbiAgcHJpdmF0ZSBfd2FpdGluZ0JhY2tncm91bmQ6IHt9O1xuXG4gIHByaXZhdGUgX3Nob3dGb3JlZ3JvdW5kOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG4gIHByaXZhdGUgX3Nob3dCYWNrZ3JvdW5kOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG4gIHByaXZhdGUgX2ZvcmVncm91bmRDbG9zaW5nOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG4gIHByaXZhdGUgX2JhY2tncm91bmRDbG9zaW5nOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgLyoqXG4gICAqIEZvciBpbnRlcm5hbCB1c2VcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgc2hvd0ZvcmVncm91bmQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgLyoqXG4gICAqIEZvciBpbnRlcm5hbCB1c2VcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgc2hvd0JhY2tncm91bmQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgLyoqXG4gICAqIEZvciBpbnRlcm5hbCB1c2VcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgZm9yZWdyb3VuZENsb3Npbmc6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgLyoqXG4gICAqIEZvciBpbnRlcm5hbCB1c2VcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgYmFja2dyb3VuZENsb3Npbmc6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgcHJpdmF0ZSBfb25TdGFydDogU3ViamVjdDxhbnk+O1xuICBwcml2YXRlIF9vblN0b3A6IFN1YmplY3Q8YW55PjtcbiAgcHJpdmF0ZSBfb25TdG9wQWxsOiBTdWJqZWN0PGFueT47XG5cbiAgLyoqXG4gICAqIEVtaXQgd2hlbiBhIGxvYWRpbmcgaXMgc3RhcnRlZFxuICAgKi9cbiAgb25TdGFydDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBFbWl0IHdoZW4gYSBsb2FkaW5nIGlzIHN0b3BwZWRcbiAgICovXG4gIG9uU3RvcDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBFbWl0IHdoZW4gYWxsIGxvYWRpbmdzIGFyZSBzdG9wcGVkXG4gICAqL1xuICBvblN0b3BBbGw6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChOR1hfVUlfTE9BREVSX0NPTkZJR19UT0tFTikgcHJpdmF0ZSBjb25maWc6IE5neFVpTG9hZGVyQ29uZmlnKSB7XG5cbiAgICB0aGlzLl9kZWZhdWx0Q29uZmlnID0geyAuLi5ERUZBVUxUX0NPTkZJRyB9O1xuXG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcudGhyZXNob2xkICYmIHRoaXMuY29uZmlnLnRocmVzaG9sZCA8PSAwKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLnRocmVzaG9sZCA9IERFRkFVTFRfQ09ORklHLnRocmVzaG9sZDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2RlZmF1bHRDb25maWcgPSB7IC4uLnRoaXMuX2RlZmF1bHRDb25maWcsIC4uLnRoaXMuY29uZmlnIH07XG4gICAgfVxuXG4gICAgdGhpcy5fd2FpdGluZ0ZvcmVncm91bmQgPSB7fTtcbiAgICB0aGlzLl93YWl0aW5nQmFja2dyb3VuZCA9IHt9O1xuICAgIHRoaXMuX3Nob3dGb3JlZ3JvdW5kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gICAgdGhpcy5zaG93Rm9yZWdyb3VuZCA9IHRoaXMuX3Nob3dGb3JlZ3JvdW5kLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHRoaXMuX3Nob3dCYWNrZ3JvdW5kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gICAgdGhpcy5zaG93QmFja2dyb3VuZCA9IHRoaXMuX3Nob3dCYWNrZ3JvdW5kLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHRoaXMuX2ZvcmVncm91bmRDbG9zaW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gICAgdGhpcy5mb3JlZ3JvdW5kQ2xvc2luZyA9IHRoaXMuX2ZvcmVncm91bmRDbG9zaW5nLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHRoaXMuX2JhY2tncm91bmRDbG9zaW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ2xvc2luZyA9IHRoaXMuX2JhY2tncm91bmRDbG9zaW5nLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgdGhpcy5fb25TdGFydCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICB0aGlzLm9uU3RhcnQgPSB0aGlzLl9vblN0YXJ0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIHRoaXMuX29uU3RvcCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICB0aGlzLm9uU3RvcCA9IHRoaXMuX29uU3RvcC5hc09ic2VydmFibGUoKTtcbiAgICB0aGlzLl9vblN0b3BBbGwgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgdGhpcy5vblN0b3BBbGwgPSB0aGlzLl9vblN0b3BBbGwuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlZmF1bHQgbG9hZGVyIGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybnMgZGVmYXVsdCBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgKi9cbiAgZ2V0RGVmYXVsdENvbmZpZygpOiBOZ3hVaUxvYWRlckNvbmZpZyB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy5fZGVmYXVsdENvbmZpZyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IHN0YXR1c1xuICAgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB3YWl0aW5nIGZvcmVncm91bmQgYW5kIGJhY2tncm91bmQgcHJvcGVydGllc1xuICAgKi9cbiAgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3YWl0aW5nRm9yZWdyb3VuZDogeyAuLi50aGlzLl93YWl0aW5nRm9yZWdyb3VuZCB9LFxuICAgICAgd2FpdGluZ0JhY2tncm91bmQ6IHsgLi4udGhpcy5fd2FpdGluZ0JhY2tncm91bmQgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciB0aGUgcXVldWUgaGFzIGEgd2FpdGluZyBmb3JlZ3JvdW5kIGxvYWRlciB3aXRoIHRoZSBnaXZlbiBpZC5cbiAgICogSWYgbm8gYGlkYCBzcGVjaWZpZWQsIGl0IHdpbGwgY2hlY2sgd2hldGhlciB0aGUgcXVldWUgaGFzIGFueSB3YWl0aW5nIGZvcmVncm91bmQgbG9hZGVyLlxuICAgKiBAcGFyYW0gaWQgdGhlIG9wdGlvbmFsIGlkXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIGhhc0ZvcmVncm91bmQoaWQ/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl93YWl0aW5nRm9yZWdyb3VuZFtpZF0gPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl93YWl0aW5nRm9yZWdyb3VuZCkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIHRoZSBxdWV1ZSBoYXMgYSB3YWl0aW5nIGJhY2tncm91bmQgbG9hZGVyIHdpdGggdGhlIGdpdmVuIGlkLlxuICAgKiBJZiBubyBgaWRgIHNwZWNpZmllZCwgaXQgd2lsbCBjaGVjayB3aGV0aGVyIHRoZSBxdWV1ZSBoYXMgYW55IHdhaXRpbmcgYmFja2dyb3VuZCBsb2FkZXIuXG4gICAqIEBwYXJhbSBpZCB0aGUgb3B0aW9uYWwgaWRcbiAgICogQHJldHVybnMgYm9vbGVhblxuICAgKi9cbiAgaGFzQmFja2dyb3VuZChpZD86IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dhaXRpbmdCYWNrZ3JvdW5kW2lkXSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3dhaXRpbmdCYWNrZ3JvdW5kKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSBmb3JlZ3JvdW5kIGxvYWRpbmcgd2l0aCBhIHNwZWNpZmllZCBpZC5cbiAgICogVGhlIGxvYWRpbmcgaXMgb25seSBjbG9zZWQgb2ZmIHdoZW4gYWxsIElEcyBhcmUgY2FsbGVkIHdpdGggc3RvcCgpIG1ldGhvZC5cbiAgICogQHBhcmFtIGlkIHRoZSBvcHRpb25hbCBpZCBvZiB0aGUgbG9hZGluZy4gaWQgaXMgc2V0IHRvICdkZWZhdWx0JyBieSBkZWZhdWx0LlxuICAgKi9cbiAgc3RhcnQoaWQ6IHN0cmluZyA9IERFRkFVTFRfSUQpIHtcbiAgICBjb25zdCBmb3JlZ3JvdW5kUnVubmluZyA9IHRoaXMuaGFzRm9yZWdyb3VuZCgpO1xuXG4gICAgdGhpcy5fd2FpdGluZ0ZvcmVncm91bmRbaWRdID0gRGF0ZS5ub3coKTtcbiAgICBpZiAoIWZvcmVncm91bmRSdW5uaW5nKSB7XG4gICAgICBpZiAodGhpcy5oYXNCYWNrZ3JvdW5kKCkpIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ2xvc2VvdXQoKTtcbiAgICAgICAgdGhpcy5fc2hvd0JhY2tncm91bmQubmV4dChmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9zaG93Rm9yZWdyb3VuZC5uZXh0KHRydWUpO1xuICAgIH1cbiAgICB0aGlzLl9vblN0YXJ0Lm5leHQoeyBpZDogaWQsIGlzRm9yZWdyb3VuZDogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgYmFja2dyb3VuZCBsb2FkaW5nIHdpdGggYSBzcGVjaWZpZWQgaWQuXG4gICAqIFRoZSBsb2FkaW5nIGlzIG9ubHkgY2xvc2VkIG9mZiB3aGVuIGFsbCBJRHMgYXJlIGNhbGxlZCB3aXRoIHN0b3BCYWNrZ3JvdW5kKCkgbWV0aG9kLlxuICAgKiBAcGFyYW0gaWQgdGhlIG9wdGlvbmFsIGlkIG9mIHRoZSBsb2FkaW5nLiBpZCBpcyBzZXQgdG8gJ2RlZmF1bHQnIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBzdGFydEJhY2tncm91bmQoaWQ6IHN0cmluZyA9IERFRkFVTFRfSUQpIHtcbiAgICB0aGlzLl93YWl0aW5nQmFja2dyb3VuZFtpZF0gPSBEYXRlLm5vdygpO1xuICAgIGlmICghdGhpcy5oYXNGb3JlZ3JvdW5kKCkpIHtcbiAgICAgIHRoaXMuX3Nob3dCYWNrZ3JvdW5kLm5leHQodHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMuX29uU3RhcnQubmV4dCh7IGlkOiBpZCwgaXNGb3JlZ3JvdW5kOiBmYWxzZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGEgZm9yZWdyb3VuZCBsb2FkaW5nIHdpdGggc3BlY2lmaWMgaWRcbiAgICogQHBhcmFtIGlkIHRoZSBvcHRpb25hbCBpZCB0byBzdG9wLiBJZiBub3QgcHJvdmlkZWQsICdkZWZhdWx0JyBpcyB1c2VkLlxuICAgKiBAcmV0dXJucyBPYmplY3RcbiAgICovXG4gIHN0b3AoaWQ6IHN0cmluZyA9IERFRkFVTFRfSUQpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuXG4gICAgaWYgKHRoaXMuX3dhaXRpbmdGb3JlZ3JvdW5kW2lkXSkge1xuICAgICAgaWYgKHRoaXMuX3dhaXRpbmdGb3JlZ3JvdW5kW2lkXSArIHRoaXMuX2RlZmF1bHRDb25maWcudGhyZXNob2xkID4gbm93KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RvcChpZCk7XG4gICAgICAgIH0sIHRoaXMuX3dhaXRpbmdGb3JlZ3JvdW5kW2lkXSArIHRoaXMuX2RlZmF1bHRDb25maWcudGhyZXNob2xkIC0gbm93KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGVsZXRlIHRoaXMuX3dhaXRpbmdGb3JlZ3JvdW5kW2lkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSB7XG4gICAgICB0aGlzLmZvcmVncm91bmRDbG9zZW91dCgpO1xuICAgICAgdGhpcy5fc2hvd0ZvcmVncm91bmQubmV4dChmYWxzZSk7XG4gICAgICB0aGlzLl9vblN0b3AubmV4dCh7IGlkOiBpZCwgaXNGb3JlZ3JvdW5kOiB0cnVlIH0pO1xuICAgICAgdGhpcy5fb25TdG9wQWxsLm5leHQoeyBzdG9wQWxsOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5oYXNGb3JlZ3JvdW5kKCkpIHtcbiAgICAgIHRoaXMuZm9yZWdyb3VuZENsb3Nlb3V0KCk7XG4gICAgICB0aGlzLl9zaG93Rm9yZWdyb3VuZC5uZXh0KGZhbHNlKTtcbiAgICAgIC8vIFNob3cgYmFja2dyb3VuZCBzcGlubmVyIGFmdGVyIHRoZSBmb3JlZ3JvdW5kIGlzIGNsb3NlZCBvdXRcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5oYXNCYWNrZ3JvdW5kKCkpIHtcbiAgICAgICAgICB0aGlzLl9zaG93QmFja2dyb3VuZC5uZXh0KHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgICB0aGlzLl9vblN0b3AubmV4dCh7IGlkOiBpZCwgaXNGb3JlZ3JvdW5kOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgYSBiYWNrZ3JvdW5kIGxvYWRpbmcgd2l0aCBzcGVjaWZpYyBpZFxuICAgKiBAcGFyYW0gaWQgdGhlIG9wdGlvbmFsIGlkIHRvIHN0b3AuIElmIG5vdCBwcm92aWRlZCwgJ2RlZmF1bHQnIGlzIHVzZWQuXG4gICAqIEByZXR1cm5zIE9iamVjdFxuICAgKi9cbiAgc3RvcEJhY2tncm91bmQoaWQ6IHN0cmluZyA9IERFRkFVTFRfSUQpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuXG4gICAgaWYgKHRoaXMuX3dhaXRpbmdCYWNrZ3JvdW5kW2lkXSkge1xuICAgICAgaWYgKHRoaXMuX3dhaXRpbmdCYWNrZ3JvdW5kW2lkXSArIHRoaXMuX2RlZmF1bHRDb25maWcudGhyZXNob2xkID4gbm93KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RvcEJhY2tncm91bmQoaWQpO1xuICAgICAgICB9LCB0aGlzLl93YWl0aW5nQmFja2dyb3VuZFtpZF0gKyB0aGlzLl9kZWZhdWx0Q29uZmlnLnRocmVzaG9sZCAtIG5vdyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSB0aGlzLl93YWl0aW5nQmFja2dyb3VuZFtpZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkge1xuICAgICAgdGhpcy5iYWNrZ3JvdW5kQ2xvc2VvdXQoKTtcbiAgICAgIHRoaXMuX3Nob3dCYWNrZ3JvdW5kLm5leHQoZmFsc2UpO1xuICAgICAgdGhpcy5fb25TdG9wLm5leHQoeyBpZDogaWQsIGlzRm9yZWdyb3VuZDogZmFsc2UgfSk7XG4gICAgICB0aGlzLl9vblN0b3BBbGwubmV4dCh7IHN0b3BBbGw6IHRydWUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fb25TdG9wLm5leHQoeyBpZDogaWQsIGlzRm9yZWdyb3VuZDogZmFsc2UgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBhbGwgdGhlIGxvYWRpbmdzIGluY2x1ZGluZyBmb3JlZ3JvdW5kIGFuZCBiYWNrZ3JvdW5kXG4gICAqL1xuICBzdG9wQWxsKCkge1xuICAgIGlmICh0aGlzLmhhc0ZvcmVncm91bmQoKSkge1xuICAgICAgdGhpcy5mb3JlZ3JvdW5kQ2xvc2VvdXQoKTtcbiAgICAgIHRoaXMuX3Nob3dGb3JlZ3JvdW5kLm5leHQoZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oYXNCYWNrZ3JvdW5kKCkpIHtcbiAgICAgIHRoaXMuYmFja2dyb3VuZENsb3Nlb3V0KCk7XG4gICAgICB0aGlzLl9zaG93QmFja2dyb3VuZC5uZXh0KGZhbHNlKTtcbiAgICB9XG4gICAgdGhpcy5fd2FpdGluZ0ZvcmVncm91bmQgPSB7fTtcbiAgICB0aGlzLl93YWl0aW5nQmFja2dyb3VuZCA9IHt9O1xuICAgIHRoaXMuX29uU3RvcEFsbC5uZXh0KHsgc3RvcEFsbDogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgbG9hZGVyIGlzIGFjdGl2ZVxuICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBsb2FkZXIgaXMgYWN0aXZlXG4gICAqL1xuICBwcml2YXRlIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl93YWl0aW5nRm9yZWdyb3VuZCkubGVuZ3RoID4gMCB8fCBPYmplY3Qua2V5cyh0aGlzLl93YWl0aW5nQmFja2dyb3VuZCkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYW5hZ2UgdG8gY2xvc2UgZm9yZWdyb3VuZCBsb2FkaW5nXG4gICAqL1xuICBwcml2YXRlIGZvcmVncm91bmRDbG9zZW91dCgpIHtcbiAgICB0aGlzLl9mb3JlZ3JvdW5kQ2xvc2luZy5uZXh0KHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fZm9yZWdyb3VuZENsb3NpbmcubmV4dChmYWxzZSk7XG4gICAgfSwgREVMQVkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hbmFnZSB0byBjbG9zZSBiYWNrZ3JvdW5kIGxvYWRpbmdcbiAgICovXG4gIHByaXZhdGUgYmFja2dyb3VuZENsb3Nlb3V0KCkge1xuICAgIHRoaXMuX2JhY2tncm91bmRDbG9zaW5nLm5leHQodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9iYWNrZ3JvdW5kQ2xvc2luZy5uZXh0KGZhbHNlKTtcbiAgICB9LCBERUxBWSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29lcmNlIGEgdmFsdWUgKHN0cmluZykgdG8gYSBudW1iZXJcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHBhcmFtIGZhbGxiYWNrVmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvZXJjZU51bWJlcih2YWx1ZSwgZmFsbGJhY2tWYWx1ZSk6IG51bWJlciB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSBhcyBhbnkpKSAmJiAhaXNOYU4oTnVtYmVyKHZhbHVlKSkgPyBOdW1iZXIodmFsdWUpIDogZmFsbGJhY2tWYWx1ZTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBTaW1wbGVDaGFuZ2UsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ3hVaUxvYWRlclNlcnZpY2UgfSBmcm9tICcuL25neC11aS1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5neFVpTG9hZGVyQ29uZmlnIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBEaXJlY3Rpb25UeXBlLCBQb3NpdGlvblR5cGUsIFNwaW5uZXJUeXBlIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLnR5cGVzJztcbmltcG9ydCB7IFBPU0lUSU9OLCBQQl9ESVJFQ1RJT04sIFNQSU5ORVIgfSBmcm9tICcuL25neC11aS1sb2FkZXIuZW51bXMnO1xuaW1wb3J0IHsgU1BJTk5FUl9DT05GSUcgfSBmcm9tICcuL25neC11aS1sb2FkZXIuY29udGFudHMnO1xuaW1wb3J0IHsgY29lcmNlTnVtYmVyIH0gZnJvbSAnLi9jb2VyY2lvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC11aS1sb2FkZXInLFxuICB0ZW1wbGF0ZTogYDwhLS0gUHJvZ3Jlc3MgYmFyIHt7eyAtLT5cbjxkaXYgKm5nSWY9XCJoYXNQcm9ncmVzc0JhclwiXG4gIGNsYXNzPVwibmd4LXByb2dyZXNzLWJhclwiXG4gIFtuZ0NsYXNzXT1cIiduZ3gtcHJvZ3Jlc3MtYmFyLScgKyBwYkRpcmVjdGlvblwiXG4gIFtzdHlsZS5oZWlnaHQucHhdPVwicGJUaGlja25lc3NcIlxuICBbc3R5bGUuY29sb3JdPVwicGJDb2xvclwiXG4gIFtjbGFzcy5sb2FkaW5nLWZvcmVncm91bmRdPVwic2hvd0ZvcmVncm91bmRcIlxuICBbY2xhc3MuZm9yZWdyb3VuZC1jbG9zaW5nXT1cImZvcmVncm91bmRDbG9zaW5nXCI+PC9kaXY+XG48IS0tIFByb2dyZXNzIGJhciB9fX0gLS0+XG5cbjwhLS0gRm9yZWdyb3VuZCBjb250YWluZXIge3t7IC0tPlxuPGRpdiBjbGFzcz1cIm5neC1vdmVybGF5XCJcbiAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwib3ZlcmxheUNvbG9yXCJcbiAgW2NsYXNzLmxvYWRpbmctZm9yZWdyb3VuZF09XCJzaG93Rm9yZWdyb3VuZFwiXG4gIFtjbGFzcy5mb3JlZ3JvdW5kLWNsb3NpbmddPVwiZm9yZWdyb3VuZENsb3NpbmdcIj5cblxuICA8IS0tIExvZ28ge3t7IC0tPlxuICA8aW1nICpuZ0lmPVwibG9nb1VybFwiIGNsYXNzPVwibmd4LWxvYWRpbmctbG9nb1wiXG4gICAgW25nQ2xhc3NdPVwibG9nb1Bvc2l0aW9uXCIgW3NyY109XCJ0cnVzdGVkTG9nb1VybFwiXG4gICAgW3N0eWxlLndpZHRoLnB4XT1cImxvZ29TaXplXCIgW3N0eWxlLmhlaWdodC5weF09XCJsb2dvU2l6ZVwiXG4gICAgW3N0eWxlLnRvcF09XCJsb2dvVG9wXCI+XG4gIDwhLS0gTG9nbyB9fX0gLS0+XG5cbiAgPCEtLSBGb3JlZ3JvdW5kIHNwaW5uZXIge3t7IC0tPlxuICA8ZGl2IGNsYXNzPVwibmd4LWZvcmVncm91bmQtc3Bpbm5lclwiXG4gICAgW25nQ2xhc3NdPVwiZmdzUG9zaXRpb25cIiBbc3R5bGUuY29sb3JdPVwiZmdzQ29sb3JcIlxuICAgIFtzdHlsZS53aWR0aC5weF09XCJmZ3NTaXplXCIgW3N0eWxlLmhlaWdodC5weF09XCJmZ3NTaXplXCJcbiAgICBbc3R5bGUudG9wXT1cInNwaW5uZXJUb3BcIj5cbiAgICA8ZGl2IFtjbGFzc109XCJmZ1NwaW5uZXJDbGFzc1wiPlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZGl2IG9mIGZnRGl2c1wiPjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPCEtLSBGb3JlZ3JvdW5kIHNwaW5uZXIgfX19IC0tPlxuXG4gIDwhLS0gTG9hZGluZyB0ZXh0IHt7eyAtLT5cbiAgPGRpdiBjbGFzcz1cIm5neC1sb2FkaW5nLXRleHRcIlxuICAgIFtuZ0NsYXNzXT1cInRleHRQb3NpdGlvblwiXG4gICAgW3N0eWxlLnRvcF09XCJ0ZXh0VG9wXCJcbiAgICBbc3R5bGUuY29sb3JdPVwidGV4dENvbG9yXCI+e3t0ZXh0fX08L2Rpdj5cbiAgPCEtLSBMb2FkaW5nIHRleHQgfX19IC0tPlxuXG48L2Rpdj5cbjwhLS0gRm9yZWdyb3VuZCBjb250YWluZXIgfX19IC0tPlxuXG48IS0tIEJhY2tncm91bmQgc3Bpbm5lciB7e3sgLS0+XG48ZGl2IGNsYXNzPVwibmd4LWJhY2tncm91bmQtc3Bpbm5lclwiXG4gIFtuZ0NsYXNzXT1cImJnc1Bvc2l0aW9uXCJcbiAgW2NsYXNzLmxvYWRpbmctYmFja2dyb3VuZF09XCJzaG93QmFja2dyb3VuZFwiXG4gIFtjbGFzcy5iYWNrZ3JvdW5kLWNsb3NpbmddPVwiYmFja2dyb3VuZENsb3NpbmdcIlxuICBbc3R5bGUud2lkdGgucHhdPVwiYmdzU2l6ZVwiIFtzdHlsZS5oZWlnaHQucHhdPVwiYmdzU2l6ZVwiXG4gIFtzdHlsZS5jb2xvcl09XCJiZ3NDb2xvclwiIFtzdHlsZS5vcGFjaXR5XT1cImJnc09wYWNpdHlcIj5cbiAgPGRpdiBbY2xhc3NdPVwiYmdTcGlubmVyQ2xhc3NcIj5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBkaXYgb2YgYmdEaXZzXCI+PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48IS0tIEJhY2tncm91bmQgc3Bpbm5lciB9fX0gLS0+XG5gLFxuICBzdHlsZXM6IFtgLm5neC1wcm9ncmVzcy1iYXJ7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjNweDt6LWluZGV4Ojk5OTk5IWltcG9ydGFudDtkaXNwbGF5Om5vbmU7Y29sb3I6IzAwYWNjMX0ubmd4LXByb2dyZXNzLWJhci5mb3JlZ3JvdW5kLWNsb3NpbmcsLm5neC1wcm9ncmVzcy1iYXIubG9hZGluZy1mb3JlZ3JvdW5ke2Rpc3BsYXk6YmxvY2t9Lm5neC1wcm9ncmVzcy1iYXIuZm9yZWdyb3VuZC1jbG9zaW5ne29wYWNpdHk6MCFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpvcGFjaXR5IC41cyBlYXNlLW91dCAuNXN9Lm5neC1wcm9ncmVzcy1iYXI6OmFmdGVyLC5uZ3gtcHJvZ3Jlc3MtYmFyOjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Y29udGVudDonJztkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjB9Lm5neC1wcm9ncmVzcy1iYXItbHRyOjpiZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMHZ3LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDB2dywwLDApfS5uZ3gtcHJvZ3Jlc3MtYmFyLWx0cjo6YWZ0ZXJ7LXdlYmtpdC1hbmltYXRpb246MjBzIGVhc2Utb3V0IHByb2dyZXNzQmFyLXNsaWRlLWx0cjthbmltYXRpb246MjBzIGVhc2Utb3V0IHByb2dyZXNzQmFyLXNsaWRlLWx0cjstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNXZ3LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01dncsMCwwKX0ubmd4LXByb2dyZXNzLWJhci1ydGw6OmJlZm9yZXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDB2dywwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDB2dywwLDApfS5uZ3gtcHJvZ3Jlc3MtYmFyLXJ0bDo6YWZ0ZXJ7LXdlYmtpdC1hbmltYXRpb246MjBzIGVhc2Utb3V0IHByb2dyZXNzQmFyLXNsaWRlLXJ0bDthbmltYXRpb246MjBzIGVhc2Utb3V0IHByb2dyZXNzQmFyLXNsaWRlLXJ0bDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg1dncsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNXZ3LDAsMCl9LmZvcmVncm91bmQtY2xvc2luZy5uZ3gtcHJvZ3Jlc3MtYmFyLWx0cjo6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2Utb3V0IHByb2dyZXNzQmFyLXNsaWRlLWNvbXBsZXRlLWx0cjthbmltYXRpb246MXMgZWFzZS1vdXQgcHJvZ3Jlc3NCYXItc2xpZGUtY29tcGxldGUtbHRyOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApfS5mb3JlZ3JvdW5kLWNsb3Npbmcubmd4LXByb2dyZXNzLWJhci1ydGw6OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbjoxcyBlYXNlLW91dCBwcm9ncmVzc0Jhci1zbGlkZS1jb21wbGV0ZS1ydGw7YW5pbWF0aW9uOjFzIGVhc2Utb3V0IHByb2dyZXNzQmFyLXNsaWRlLWNvbXBsZXRlLXJ0bDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKX1ALXdlYmtpdC1rZXlmcmFtZXMgcHJvZ3Jlc3NCYXItc2xpZGUtbHRye2Zyb217LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMHZ3LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDB2dywwLDApfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01dncsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTV2dywwLDApfX1Aa2V5ZnJhbWVzIHByb2dyZXNzQmFyLXNsaWRlLWx0cntmcm9tey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDB2dywwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwdncsMCwwKX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNXZ3LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01dncsMCwwKX19QC13ZWJraXQta2V5ZnJhbWVzIHByb2dyZXNzQmFyLXNsaWRlLXJ0bHtmcm9tey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMHZ3LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMHZ3LDAsMCl9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoNXZ3LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDV2dywwLDApfX1Aa2V5ZnJhbWVzIHByb2dyZXNzQmFyLXNsaWRlLXJ0bHtmcm9tey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMHZ3LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMHZ3LDAsMCl9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoNXZ3LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDV2dywwLDApfX1ALXdlYmtpdC1rZXlmcmFtZXMgcHJvZ3Jlc3NCYXItc2xpZGUtY29tcGxldGUtbHRyezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC03NXZ3LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC03NXZ3LDAsMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApfX1Aa2V5ZnJhbWVzIHByb2dyZXNzQmFyLXNsaWRlLWNvbXBsZXRlLWx0cnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNzV2dywwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNzV2dywwLDApfTUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKX19QC13ZWJraXQta2V5ZnJhbWVzIHByb2dyZXNzQmFyLXNsaWRlLWNvbXBsZXRlLXJ0bHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg3NXZ3LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDc1dncsMCwwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCl9fUBrZXlmcmFtZXMgcHJvZ3Jlc3NCYXItc2xpZGUtY29tcGxldGUtcnRsezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDc1dncsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNzV2dywwLDApfTUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKX19Lm5neC1vdmVybGF5e3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6OTk5OTghaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6cmdiYSg0MCw0MCw0MCwuOCk7ZGlzcGxheTpub25lfS5uZ3gtb3ZlcmxheS5mb3JlZ3JvdW5kLWNsb3NpbmcsLm5neC1vdmVybGF5LmxvYWRpbmctZm9yZWdyb3VuZHtkaXNwbGF5OmJsb2NrfS5uZ3gtb3ZlcmxheS5mb3JlZ3JvdW5kLWNsb3Npbmd7b3BhY2l0eTowIWltcG9ydGFudDt0cmFuc2l0aW9uOm9wYWNpdHkgLjVzIGVhc2Utb3V0IC41c30ubmd4LW92ZXJsYXk+Lm5neC1mb3JlZ3JvdW5kLXNwaW5uZXJ7cG9zaXRpb246Zml4ZWQ7d2lkdGg6NjBweDtoZWlnaHQ6NjBweDttYXJnaW46MDtjb2xvcjojMDBhY2MxfS5uZ3gtb3ZlcmxheT4ubmd4LWxvYWRpbmctbG9nb3twb3NpdGlvbjpmaXhlZDttYXJnaW46MDt3aWR0aDoxMjBweDtoZWlnaHQ6MTIwcHh9Lm5neC1vdmVybGF5Pi5uZ3gtbG9hZGluZy10ZXh0e3Bvc2l0aW9uOmZpeGVkO21hcmdpbjowO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToxLjJlbTtjb2xvcjojZmZmfS5uZ3gtYmFja2dyb3VuZC1zcGlubmVye3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6OTk5OTchaW1wb3J0YW50O3dpZHRoOjYwcHg7aGVpZ2h0OjYwcHg7bWFyZ2luOjA7Y29sb3I6IzAwYWNjMTtvcGFjaXR5Oi42O2Rpc3BsYXk6bm9uZX0ubmd4LWJhY2tncm91bmQtc3Bpbm5lci5iYWNrZ3JvdW5kLWNsb3NpbmcsLm5neC1iYWNrZ3JvdW5kLXNwaW5uZXIubG9hZGluZy1iYWNrZ3JvdW5ke2Rpc3BsYXk6YmxvY2t9Lm5neC1iYWNrZ3JvdW5kLXNwaW5uZXIuYmFja2dyb3VuZC1jbG9zaW5ne29wYWNpdHk6MCFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpvcGFjaXR5IC43cyBlYXNlLW91dH0udG9wLWxlZnR7cG9zaXRpb246Zml4ZWQ7dG9wOjMwcHg7bGVmdDozMHB4fS50b3AtY2VudGVye3Bvc2l0aW9uOmZpeGVkO3RvcDozMHB4O2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9LnRvcC1yaWdodHtwb3NpdGlvbjpmaXhlZDt0b3A6MzBweDtyaWdodDozMHB4fS5jZW50ZXItbGVmdHtwb3NpdGlvbjpmaXhlZDt0b3A6NTAlO2xlZnQ6MzBweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfS5jZW50ZXItY2VudGVye3Bvc2l0aW9uOmZpeGVkO3RvcDo1MCU7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfS5jZW50ZXItcmlnaHR7cG9zaXRpb246Zml4ZWQ7dG9wOjUwJTtyaWdodDozMHB4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9LmJvdHRvbS1sZWZ0e3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTozMHB4O2xlZnQ6MzBweH0uYm90dG9tLWNlbnRlcntwb3NpdGlvbjpmaXhlZDtib3R0b206MzBweDtsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfS5ib3R0b20tcmlnaHR7cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjMwcHg7cmlnaHQ6MzBweH0uc2stYmFsbC1zY2FsZS1tdWx0aXBsZSwuc2stYmFsbC1zY2FsZS1tdWx0aXBsZT5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5zay1iYWxsLXNjYWxlLW11bHRpcGxle3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Zm9udC1zaXplOjB9LnNrLWJhbGwtc2NhbGUtbXVsdGlwbGU+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlci1yYWRpdXM6MTAwJTtvcGFjaXR5OjA7LXdlYmtpdC1hbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIGJhbGwtc2NhbGUtbXVsdGlwbGU7YW5pbWF0aW9uOjFzIGxpbmVhciBpbmZpbml0ZSBiYWxsLXNjYWxlLW11bHRpcGxlfS5zay1iYWxsLXNjYWxlLW11bHRpcGxlPmRpdjpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjJzO2FuaW1hdGlvbi1kZWxheTouMnN9LnNrLWJhbGwtc2NhbGUtbXVsdGlwbGU+ZGl2Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouNHM7YW5pbWF0aW9uLWRlbGF5Oi40c31ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zY2FsZS1tdWx0aXBsZXswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfTUle29wYWNpdHk6Ljc1fTEwMCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBiYWxsLXNjYWxlLW11bHRpcGxlezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NSV7b3BhY2l0eTouNzV9MTAwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX0uc2stYmFsbC1zcGluLC5zay1iYWxsLXNwaW4+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc2stYmFsbC1zcGlue3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Zm9udC1zaXplOjB9LnNrLWJhbGwtc3Bpbj5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDoyNSU7aGVpZ2h0OjI1JTttYXJnaW4tdG9wOi0xMi41JTttYXJnaW4tbGVmdDotMTIuNSU7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2U7YW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2V9LnNrLWJhbGwtc3Bpbj5kaXY6bnRoLWNoaWxkKDEpe3RvcDo1JTtsZWZ0OjUwJTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4xMjVzO2FuaW1hdGlvbi1kZWxheTotMS4xMjVzfS5zay1iYWxsLXNwaW4+ZGl2Om50aC1jaGlsZCgyKXt0b3A6MTguMTgwMTk0ODQ2NiU7bGVmdDo4MS44MTk4MDUxNTM0JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjI1c30uc2stYmFsbC1zcGluPmRpdjpudGgtY2hpbGQoMyl7dG9wOjUwJTtsZWZ0Ojk1JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4zNzVzO2FuaW1hdGlvbi1kZWxheTotMS4zNzVzfS5zay1iYWxsLXNwaW4+ZGl2Om50aC1jaGlsZCg0KXt0b3A6ODEuODE5ODA1MTUzNCU7bGVmdDo4MS44MTk4MDUxNTM0JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS41czthbmltYXRpb24tZGVsYXk6LTEuNXN9LnNrLWJhbGwtc3Bpbj5kaXY6bnRoLWNoaWxkKDUpe3RvcDo5NC45OTk5OTk5OTY2JTtsZWZ0OjUwLjAwMDAwMDAwMDUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjYyNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjYyNXN9LnNrLWJhbGwtc3Bpbj5kaXY6bnRoLWNoaWxkKDYpe3RvcDo4MS44MTk4MDQ2OTY2JTtsZWZ0OjE4LjE4MDE5NDkyNDglOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjc1czthbmltYXRpb24tZGVsYXk6LTEuNzVzfS5zay1iYWxsLXNwaW4+ZGl2Om50aC1jaGlsZCg3KXt0b3A6NDkuOTk5OTc1MDgxNSU7bGVmdDo1LjAwMDAwNTEyMTUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjg3NXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjg3NXN9LnNrLWJhbGwtc3Bpbj5kaXY6bnRoLWNoaWxkKDgpe3RvcDoxOC4xNzk0NjQ5NzQlO2xlZnQ6MTguMTgwMzcwMDUxOCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTJzO2FuaW1hdGlvbi1kZWxheTotMnN9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtc3BpbnswJSwxMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9MjAle29wYWNpdHk6MX04MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX19QGtleWZyYW1lcyBiYWxsLXNwaW57MCUsMTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTIwJXtvcGFjaXR5OjF9ODAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9fS5zay1iYWxsLXNwaW4tY2xvY2t3aXNlLC5zay1iYWxsLXNwaW4tY2xvY2t3aXNlPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNrLWJhbGwtc3Bpbi1jbG9ja3dpc2V7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtmb250LXNpemU6MH0uc2stYmFsbC1zcGluLWNsb2Nrd2lzZT5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDoyNSU7aGVpZ2h0OjI1JTttYXJnaW4tdG9wOi0xMi41JTttYXJnaW4tbGVmdDotMTIuNSU7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2U7YW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2V9LnNrLWJhbGwtc3Bpbi1jbG9ja3dpc2U+ZGl2Om50aC1jaGlsZCgxKXt0b3A6NSU7bGVmdDo1MCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS44NzVzO2FuaW1hdGlvbi1kZWxheTotLjg3NXN9LnNrLWJhbGwtc3Bpbi1jbG9ja3dpc2U+ZGl2Om50aC1jaGlsZCgyKXt0b3A6MTguMTgwMTk0ODQ2NiU7bGVmdDo4MS44MTk4MDUxNTM0JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjc1czthbmltYXRpb24tZGVsYXk6LS43NXN9LnNrLWJhbGwtc3Bpbi1jbG9ja3dpc2U+ZGl2Om50aC1jaGlsZCgzKXt0b3A6NTAlO2xlZnQ6OTUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNjI1czthbmltYXRpb24tZGVsYXk6LS42MjVzfS5zay1iYWxsLXNwaW4tY2xvY2t3aXNlPmRpdjpudGgtY2hpbGQoNCl7dG9wOjgxLjgxOTgwNTE1MzQlO2xlZnQ6ODEuODE5ODA1MTUzNCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS41czthbmltYXRpb24tZGVsYXk6LS41c30uc2stYmFsbC1zcGluLWNsb2Nrd2lzZT5kaXY6bnRoLWNoaWxkKDUpe3RvcDo5NC45OTk5OTk5OTY2JTtsZWZ0OjUwLjAwMDAwMDAwMDUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMzc1czthbmltYXRpb24tZGVsYXk6LS4zNzVzfS5zay1iYWxsLXNwaW4tY2xvY2t3aXNlPmRpdjpudGgtY2hpbGQoNil7dG9wOjgxLjgxOTgwNDY5NjYlO2xlZnQ6MTguMTgwMTk0OTI0OCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMjVzfS5zay1iYWxsLXNwaW4tY2xvY2t3aXNlPmRpdjpudGgtY2hpbGQoNyl7dG9wOjQ5Ljk5OTk3NTA4MTUlO2xlZnQ6NS4wMDAwMDUxMjE1JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjEyNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMTI1c30uc2stYmFsbC1zcGluLWNsb2Nrd2lzZT5kaXY6bnRoLWNoaWxkKDgpe3RvcDoxOC4xNzk0NjQ5NzQlO2xlZnQ6MTguMTgwMzcwMDUxOCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHM7YW5pbWF0aW9uLWRlbGF5OjBzfUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXNwaW4tY2xvY2t3aXNlezAlLDEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0yMCV7b3BhY2l0eToxfTgwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfX1Aa2V5ZnJhbWVzIGJhbGwtc3Bpbi1jbG9ja3dpc2V7MCUsMTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTIwJXtvcGFjaXR5OjF9ODAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9fS5zay1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmcsLnNrLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5zay1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmd7Zm9udC1zaXplOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstd2Via2l0LWFuaW1hdGlvbjo2cyBsaW5lYXIgaW5maW5pdGUgYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nLXJvdGF0ZTthbmltYXRpb246NnMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy1yb3RhdGV9LnNrLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDoyNSU7aGVpZ2h0OjI1JTttYXJnaW4tdG9wOi0xMi41JTttYXJnaW4tbGVmdDotMTIuNSU7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjFzIGxpbmVhciBpbmZpbml0ZSBiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmc7YW5pbWF0aW9uOjFzIGxpbmVhciBpbmZpbml0ZSBiYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmd9LnNrLWJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDEpe3RvcDo1JTtsZWZ0OjUwJTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjg3NXM7YW5pbWF0aW9uLWRlbGF5Oi0uODc1c30uc2stYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nPmRpdjpudGgtY2hpbGQoMil7dG9wOjE4LjE4MDE5NDg0NjYlO2xlZnQ6ODEuODE5ODA1MTUzNCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS43NXM7YW5pbWF0aW9uLWRlbGF5Oi0uNzVzfS5zay1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCgzKXt0b3A6NTAlO2xlZnQ6OTUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNjI1czthbmltYXRpb24tZGVsYXk6LS42MjVzfS5zay1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg0KXt0b3A6ODEuODE5ODA1MTUzNCU7bGVmdDo4MS44MTk4MDUxNTM0JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjVzO2FuaW1hdGlvbi1kZWxheTotLjVzfS5zay1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg1KXt0b3A6OTQuOTk5OTk5OTk2NiU7bGVmdDo1MC4wMDAwMDAwMDA1JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjM3NXM7YW5pbWF0aW9uLWRlbGF5Oi0uMzc1c30uc2stYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nPmRpdjpudGgtY2hpbGQoNil7dG9wOjgxLjgxOTgwNDY5NjYlO2xlZnQ6MTguMTgwMTk0OTI0OCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0uMjVzfS5zay1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg3KXt0b3A6NDkuOTk5OTc1MDgxNSU7bGVmdDo1LjAwMDAwNTEyMTUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMTI1czthbmltYXRpb24tZGVsYXk6LS4xMjVzfS5zay1iYWxsLXNwaW4tY2xvY2t3aXNlLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCg4KXt0b3A6MTguMTc5NDY0OTc0JTtsZWZ0OjE4LjE4MDM3MDA1MTglOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjBzO2FuaW1hdGlvbi1kZWxheTowc31ALXdlYmtpdC1rZXlmcmFtZXMgYmFsbC1zcGluLWNsb2Nrd2lzZS1mYWRlLXJvdGF0aW5nLXJvdGF0ZXsxMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpfX1Aa2V5ZnJhbWVzIGJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZy1yb3RhdGV7MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMzYwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZ3s1MCV7b3BhY2l0eTouMjU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSl9MTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIGJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZ3s1MCV7b3BhY2l0eTouMjU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSl9MTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX0uc2stYmFsbC1zcGluLWZhZGUtcm90YXRpbmcsLnNrLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nPmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNrLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5ne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Zm9udC1zaXplOjA7LXdlYmtpdC1hbmltYXRpb246NnMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1mYWRlLXJvdGF0ZTthbmltYXRpb246NnMgbGluZWFyIGluZmluaXRlIGJhbGwtc3Bpbi1mYWRlLXJvdGF0ZX0uc2stYmFsbC1zcGluLWZhZGUtcm90YXRpbmc+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7d2lkdGg6MjUlO2hlaWdodDoyNSU7bWFyZ2luLXRvcDotMTIuNSU7bWFyZ2luLWxlZnQ6LTEyLjUlO2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LWFuaW1hdGlvbjoxcyBsaW5lYXIgaW5maW5pdGUgYmFsbC1zcGluLWZhZGU7YW5pbWF0aW9uOjFzIGxpbmVhciBpbmZpbml0ZSBiYWxsLXNwaW4tZmFkZX0uc2stYmFsbC1zcGluLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCgxKXt0b3A6NSU7bGVmdDo1MCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuMTI1czthbmltYXRpb24tZGVsYXk6LTEuMTI1c30uc2stYmFsbC1zcGluLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCgyKXt0b3A6MTguMTgwMTk0ODQ2NiU7bGVmdDo4MS44MTk4MDUxNTM0JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4yNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjI1c30uc2stYmFsbC1zcGluLWZhZGUtcm90YXRpbmc+ZGl2Om50aC1jaGlsZCgzKXt0b3A6NTAlO2xlZnQ6OTUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjM3NXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjM3NXN9LnNrLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nPmRpdjpudGgtY2hpbGQoNCl7dG9wOjgxLjgxOTgwNTE1MzQlO2xlZnQ6ODEuODE5ODA1MTUzNCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjVzfS5zay1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDUpe3RvcDo5NC45OTk5OTk5OTY2JTtsZWZ0OjUwLjAwMDAwMDAwMDUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjYyNXM7YW5pbWF0aW9uLWRlbGF5Oi0xLjYyNXN9LnNrLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nPmRpdjpudGgtY2hpbGQoNil7dG9wOjgxLjgxOTgwNDY5NjYlO2xlZnQ6MTguMTgwMTk0OTI0OCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTEuNzVzO2FuaW1hdGlvbi1kZWxheTotMS43NXN9LnNrLWJhbGwtc3Bpbi1mYWRlLXJvdGF0aW5nPmRpdjpudGgtY2hpbGQoNyl7dG9wOjQ5Ljk5OTk3NTA4MTUlO2xlZnQ6NS4wMDAwMDUxMjE1JTstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS44NzVzO2FuaW1hdGlvbi1kZWxheTotMS44NzVzfS5zay1iYWxsLXNwaW4tZmFkZS1yb3RhdGluZz5kaXY6bnRoLWNoaWxkKDgpe3RvcDoxOC4xNzk0NjQ5NzQlO2xlZnQ6MTguMTgwMzcwMDUxOCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTJzO2FuaW1hdGlvbi1kZWxheTotMnN9QC13ZWJraXQta2V5ZnJhbWVzIGJhbGwtc3Bpbi1mYWRlLXJvdGF0ZXsxMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBiYWxsLXNwaW4tZmFkZS1yb3RhdGV7MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBiYWxsLXNwaW4tZmFkZXswJSwxMDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9NTAle29wYWNpdHk6LjI1Oy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KTt0cmFuc2Zvcm06c2NhbGUoLjUpfX1Aa2V5ZnJhbWVzIGJhbGwtc3Bpbi1mYWRlezAlLDEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01MCV7b3BhY2l0eTouMjU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSl9fS5zay1jaGFzaW5nLWRvdHN7bWFyZ2luOmF1dG87d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjstd2Via2l0LWFuaW1hdGlvbjoycyBsaW5lYXIgaW5maW5pdGUgc2stY2hhc2luZ0RvdHMtcm90YXRlO2FuaW1hdGlvbjoycyBsaW5lYXIgaW5maW5pdGUgc2stY2hhc2luZ0RvdHMtcm90YXRlfS5zay1jaGFzaW5nLWRvdHM+ZGl2e3dpZHRoOjYwJTtoZWlnaHQ6NjAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlci1yYWRpdXM6MTAwJTstd2Via2l0LWFuaW1hdGlvbjoycyBlYXNlLWluLW91dCBpbmZpbml0ZSBzay1jaGFzaW5nRG90cy1ib3VuY2U7YW5pbWF0aW9uOjJzIGVhc2UtaW4tb3V0IGluZmluaXRlIHNrLWNoYXNpbmdEb3RzLWJvdW5jZX0uc2stY2hhc2luZy1kb3RzPmRpdjpudGgtY2hpbGQoMil7dG9wOmF1dG87Ym90dG9tOjA7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LTFzO2FuaW1hdGlvbi1kZWxheTotMXN9QC13ZWJraXQta2V5ZnJhbWVzIHNrLWNoYXNpbmdEb3RzLXJvdGF0ZXsxMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBzay1jaGFzaW5nRG90cy1yb3RhdGV7MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUAtd2Via2l0LWtleWZyYW1lcyBzay1jaGFzaW5nRG90cy1ib3VuY2V7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzay1jaGFzaW5nRG90cy1ib3VuY2V7MCUsMTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19LnNrLWNpcmNsZXttYXJnaW46YXV0bzt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlfS5zay1jaXJjbGU+ZGl2e3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowfS5zay1jaXJjbGU+ZGl2OjpiZWZvcmV7Y29udGVudDonJztkaXNwbGF5OmJsb2NrO21hcmdpbjowIGF1dG87d2lkdGg6MTUlO2hlaWdodDoxNSU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjEuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aCBzay1jaXJjbGUtYm91bmNlRGVsYXk7YW5pbWF0aW9uOjEuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aCBzay1jaXJjbGUtYm91bmNlRGVsYXl9LnNrLWNpcmNsZT5kaXY6bnRoLWNoaWxkKDIpey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzMGRlZyl9LnNrLWNpcmNsZT5kaXY6bnRoLWNoaWxkKDMpey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg2MGRlZyl9LnNrLWNpcmNsZT5kaXY6bnRoLWNoaWxkKDQpey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9LnNrLWNpcmNsZT5kaXY6bnRoLWNoaWxkKDUpey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTIwZGVnKX0uc2stY2lyY2xlPmRpdjpudGgtY2hpbGQoNil7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE1MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxNTBkZWcpfS5zay1jaXJjbGU+ZGl2Om50aC1jaGlsZCg3KXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9LnNrLWNpcmNsZT5kaXY6bnRoLWNoaWxkKDgpey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyMTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjEwZGVnKX0uc2stY2lyY2xlPmRpdjpudGgtY2hpbGQoOSl7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI0MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNDBkZWcpfS5zay1jaXJjbGU+ZGl2Om50aC1jaGlsZCgxMCl7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpfS5zay1jaXJjbGU+ZGl2Om50aC1jaGlsZCgxMSl7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDMwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzMDBkZWcpfS5zay1jaXJjbGU+ZGl2Om50aC1jaGlsZCgxMil7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDMzMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzMzBkZWcpfS5zay1jaXJjbGU+ZGl2Om50aC1jaGlsZCgyKTo6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xLjFzO2FuaW1hdGlvbi1kZWxheTotMS4xc30uc2stY2lyY2xlPmRpdjpudGgtY2hpbGQoMyk6OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMXM7YW5pbWF0aW9uLWRlbGF5Oi0xc30uc2stY2lyY2xlPmRpdjpudGgtY2hpbGQoNCk6OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjlzO2FuaW1hdGlvbi1kZWxheTotLjlzfS5zay1jaXJjbGU+ZGl2Om50aC1jaGlsZCg1KTo6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uOHM7YW5pbWF0aW9uLWRlbGF5Oi0uOHN9LnNrLWNpcmNsZT5kaXY6bnRoLWNoaWxkKDYpOjpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS43czthbmltYXRpb24tZGVsYXk6LS43c30uc2stY2lyY2xlPmRpdjpudGgtY2hpbGQoNyk6OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjZzO2FuaW1hdGlvbi1kZWxheTotLjZzfS5zay1jaXJjbGU+ZGl2Om50aC1jaGlsZCg4KTo6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNXM7YW5pbWF0aW9uLWRlbGF5Oi0uNXN9LnNrLWNpcmNsZT5kaXY6bnRoLWNoaWxkKDkpOjpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS40czthbmltYXRpb24tZGVsYXk6LS40c30uc2stY2lyY2xlPmRpdjpudGgtY2hpbGQoMTApOjpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4zczthbmltYXRpb24tZGVsYXk6LS4zc30uc2stY2lyY2xlPmRpdjpudGgtY2hpbGQoMTEpOjpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4yczthbmltYXRpb24tZGVsYXk6LS4yc30uc2stY2lyY2xlPmRpdjpudGgtY2hpbGQoMTIpOjpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4xczthbmltYXRpb24tZGVsYXk6LS4xc31ALXdlYmtpdC1rZXlmcmFtZXMgc2stY2lyY2xlLWJvdW5jZURlbGF5ezAlLDEwMCUsODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHNrLWNpcmNsZS1ib3VuY2VEZWxheXswJSwxMDAlLDgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19LnNrLWN1YmUtZ3JpZHt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjphdXRvfS5zay1jdWJlLWdyaWQ+ZGl2e3dpZHRoOjMzJTtoZWlnaHQ6MzMlO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2Zsb2F0OmxlZnQ7LXdlYmtpdC1hbmltYXRpb246MS4zcyBlYXNlLWluLW91dCBpbmZpbml0ZSBzay1jdWJlR3JpZC1zY2FsZURlbGF5O2FuaW1hdGlvbjoxLjNzIGVhc2UtaW4tb3V0IGluZmluaXRlIHNrLWN1YmVHcmlkLXNjYWxlRGVsYXl9LnNrLWN1YmUtZ3JpZD5kaXY6bnRoLWNoaWxkKDEpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4yczthbmltYXRpb24tZGVsYXk6LjJzfS5zay1jdWJlLWdyaWQ+ZGl2Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouM3M7YW5pbWF0aW9uLWRlbGF5Oi4zc30uc2stY3ViZS1ncmlkPmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjRzO2FuaW1hdGlvbi1kZWxheTouNHN9LnNrLWN1YmUtZ3JpZD5kaXY6bnRoLWNoaWxkKDQpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4xczthbmltYXRpb24tZGVsYXk6LjFzfS5zay1jdWJlLWdyaWQ+ZGl2Om50aC1jaGlsZCg1KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouMnM7YW5pbWF0aW9uLWRlbGF5Oi4yc30uc2stY3ViZS1ncmlkPmRpdjpudGgtY2hpbGQoNil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjNzO2FuaW1hdGlvbi1kZWxheTouM3N9LnNrLWN1YmUtZ3JpZD5kaXY6bnRoLWNoaWxkKDcpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjBzO2FuaW1hdGlvbi1kZWxheTowc30uc2stY3ViZS1ncmlkPmRpdjpudGgtY2hpbGQoOCl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjFzO2FuaW1hdGlvbi1kZWxheTouMXN9LnNrLWN1YmUtZ3JpZD5kaXY6bnRoLWNoaWxkKDkpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4yczthbmltYXRpb24tZGVsYXk6LjJzfUAtd2Via2l0LWtleWZyYW1lcyBzay1jdWJlR3JpZC1zY2FsZURlbGF5ezAlLDEwMCUsNzAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM0QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNEKDEsMSwxKX0zNSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzRCgwLDAsMSk7dHJhbnNmb3JtOnNjYWxlM0QoMCwwLDEpfX1Aa2V5ZnJhbWVzIHNrLWN1YmVHcmlkLXNjYWxlRGVsYXl7MCUsMTAwJSw3MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzRCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM0QoMSwxLDEpfTM1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNEKDAsMCwxKTt0cmFuc2Zvcm06c2NhbGUzRCgwLDAsMSl9fS5zay1kb3VibGUtYm91bmNle3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOmF1dG99LnNrLWRvdWJsZS1ib3VuY2U+ZGl2e3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7b3BhY2l0eTouNjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7LXdlYmtpdC1hbmltYXRpb246MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgc2stZG91YmxlQm91bmNlLWJvdW5jZTthbmltYXRpb246MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgc2stZG91YmxlQm91bmNlLWJvdW5jZX0uc2stZG91YmxlLWJvdW5jZT5kaXY6bnRoLWNoaWxkKDIpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xczthbmltYXRpb24tZGVsYXk6LTFzfUAtd2Via2l0LWtleWZyYW1lcyBzay1kb3VibGVCb3VuY2UtYm91bmNlezAlLDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgc2stZG91YmxlQm91bmNlLWJvdW5jZXswJSwxMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX0uc2stZmFkaW5nLWNpcmNsZXttYXJnaW46YXV0bzt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlfS5zay1mYWRpbmctY2lyY2xlPmRpdnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MH0uc2stZmFkaW5nLWNpcmNsZT5kaXY6OmJlZm9yZXtjb250ZW50OicnO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjAgYXV0bzt3aWR0aDoxNSU7aGVpZ2h0OjE1JTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC1hbmltYXRpb246MS4ycyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoIHNrLWZhZGluZ0NpcmNsZS1GYWRlRGVsYXk7YW5pbWF0aW9uOjEuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aCBzay1mYWRpbmdDaXJjbGUtRmFkZURlbGF5fS5zay1mYWRpbmctY2lyY2xlPmRpdjpudGgtY2hpbGQoMil7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDMwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDMwZGVnKX0uc2stZmFkaW5nLWNpcmNsZT5kaXY6bnRoLWNoaWxkKDMpey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg2MGRlZyl9LnNrLWZhZGluZy1jaXJjbGU+ZGl2Om50aC1jaGlsZCg0KXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpfS5zay1mYWRpbmctY2lyY2xlPmRpdjpudGgtY2hpbGQoNSl7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEyMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxMjBkZWcpfS5zay1mYWRpbmctY2lyY2xlPmRpdjpudGgtY2hpbGQoNil7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE1MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxNTBkZWcpfS5zay1mYWRpbmctY2lyY2xlPmRpdjpudGgtY2hpbGQoNyl7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS5zay1mYWRpbmctY2lyY2xlPmRpdjpudGgtY2hpbGQoOCl7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDIxMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyMTBkZWcpfS5zay1mYWRpbmctY2lyY2xlPmRpdjpudGgtY2hpbGQoOSl7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI0MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyNDBkZWcpfS5zay1mYWRpbmctY2lyY2xlPmRpdjpudGgtY2hpbGQoMTApey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX0uc2stZmFkaW5nLWNpcmNsZT5kaXY6bnRoLWNoaWxkKDExKXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzAwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDMwMGRlZyl9LnNrLWZhZGluZy1jaXJjbGU+ZGl2Om50aC1jaGlsZCgxMil7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDMzMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzMzBkZWcpfS5zay1mYWRpbmctY2lyY2xlPmRpdjpudGgtY2hpbGQoMik6OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4xczthbmltYXRpb24tZGVsYXk6LTEuMXN9LnNrLWZhZGluZy1jaXJjbGU+ZGl2Om50aC1jaGlsZCgzKTo6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0xczthbmltYXRpb24tZGVsYXk6LTFzfS5zay1mYWRpbmctY2lyY2xlPmRpdjpudGgtY2hpbGQoNCk6OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjlzO2FuaW1hdGlvbi1kZWxheTotLjlzfS5zay1mYWRpbmctY2lyY2xlPmRpdjpudGgtY2hpbGQoNSk6OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjhzO2FuaW1hdGlvbi1kZWxheTotLjhzfS5zay1mYWRpbmctY2lyY2xlPmRpdjpudGgtY2hpbGQoNik6OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjdzO2FuaW1hdGlvbi1kZWxheTotLjdzfS5zay1mYWRpbmctY2lyY2xlPmRpdjpudGgtY2hpbGQoNyk6OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjZzO2FuaW1hdGlvbi1kZWxheTotLjZzfS5zay1mYWRpbmctY2lyY2xlPmRpdjpudGgtY2hpbGQoOCk6OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjVzO2FuaW1hdGlvbi1kZWxheTotLjVzfS5zay1mYWRpbmctY2lyY2xlPmRpdjpudGgtY2hpbGQoOSk6OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjRzO2FuaW1hdGlvbi1kZWxheTotLjRzfS5zay1mYWRpbmctY2lyY2xlPmRpdjpudGgtY2hpbGQoMTApOjpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4zczthbmltYXRpb24tZGVsYXk6LS4zc30uc2stZmFkaW5nLWNpcmNsZT5kaXY6bnRoLWNoaWxkKDExKTo6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMnM7YW5pbWF0aW9uLWRlbGF5Oi0uMnN9LnNrLWZhZGluZy1jaXJjbGU+ZGl2Om50aC1jaGlsZCgxMik6OmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjFzO2FuaW1hdGlvbi1kZWxheTotLjFzfUAtd2Via2l0LWtleWZyYW1lcyBzay1mYWRpbmdDaXJjbGUtRmFkZURlbGF5ezAlLDEwMCUsMzkle29wYWNpdHk6MH00MCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHNrLWZhZGluZ0NpcmNsZS1GYWRlRGVsYXl7MCUsMTAwJSwzOSV7b3BhY2l0eTowfTQwJXtvcGFjaXR5OjF9fS5zay1mb2xkaW5nLWN1YmV7bWFyZ2luOmF1dG87d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVaKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlWig0NWRlZyl9LnNrLWZvbGRpbmctY3ViZT5kaXZ7ZmxvYXQ6bGVmdDt3aWR0aDo1MCU7aGVpZ2h0OjUwJTtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjEpO3RyYW5zZm9ybTpzY2FsZSgxLjEpfS5zay1mb2xkaW5nLWN1YmU+ZGl2OjpiZWZvcmV7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjstd2Via2l0LWFuaW1hdGlvbjoyLjRzIGxpbmVhciBpbmZpbml0ZSBib3RoIHNrLWZvbGRpbmdDdWJlLWFuZ2xlO2FuaW1hdGlvbjoyLjRzIGxpbmVhciBpbmZpbml0ZSBib3RoIHNrLWZvbGRpbmdDdWJlLWFuZ2xlOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjoxMDAlIDEwMCU7dHJhbnNmb3JtLW9yaWdpbjoxMDAlIDEwMCV9LnNrLWZvbGRpbmctY3ViZT5kaXY6bnRoLWNoaWxkKDIpey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMSkgcm90YXRlWig5MGRlZyk7dHJhbnNmb3JtOnNjYWxlKDEuMSkgcm90YXRlWig5MGRlZyl9LnNrLWZvbGRpbmctY3ViZT5kaXY6bnRoLWNoaWxkKDMpey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMSkgcm90YXRlWigyNzBkZWcpO3RyYW5zZm9ybTpzY2FsZSgxLjEpIHJvdGF0ZVooMjcwZGVnKX0uc2stZm9sZGluZy1jdWJlPmRpdjpudGgtY2hpbGQoNCl7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xKSByb3RhdGVaKDE4MGRlZyk7dHJhbnNmb3JtOnNjYWxlKDEuMSkgcm90YXRlWigxODBkZWcpfS5zay1mb2xkaW5nLWN1YmU+ZGl2Om50aC1jaGlsZCgyKTo6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4zczthbmltYXRpb24tZGVsYXk6LjNzfS5zay1mb2xkaW5nLWN1YmU+ZGl2Om50aC1jaGlsZCgzKTo6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi45czthbmltYXRpb24tZGVsYXk6LjlzfS5zay1mb2xkaW5nLWN1YmU+ZGl2Om50aC1jaGlsZCg0KTo6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi42czthbmltYXRpb24tZGVsYXk6LjZzfUAtd2Via2l0LWtleWZyYW1lcyBzay1mb2xkaW5nQ3ViZS1hbmdsZXswJSwxMCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoLTE4MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO29wYWNpdHk6MH0yNSUsNzUley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKDApO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgwKTtvcGFjaXR5OjF9MTAwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVkoMTgwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVkoMTgwZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgc2stZm9sZGluZ0N1YmUtYW5nbGV7MCUsMTAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgtMTgwZGVnKTtvcGFjaXR5OjB9MjUlLDc1JXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgwKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoMCk7b3BhY2l0eToxfTEwMCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVZKDE4MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVZKDE4MGRlZyk7b3BhY2l0eTowfX0uc2stcHVsc2V7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46YXV0b30uc2stcHVsc2U+ZGl2e3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOjFzIGVhc2UtaW4tb3V0IGluZmluaXRlIHNrLXB1bHNlLXNjYWxlT3V0O2FuaW1hdGlvbjoxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBzay1wdWxzZS1zY2FsZU91dH1ALXdlYmtpdC1rZXlmcmFtZXMgc2stcHVsc2Utc2NhbGVPdXR7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MH19QGtleWZyYW1lcyBzay1wdWxzZS1zY2FsZU91dHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eTowfX0uc2stcmVjdGFuZ2xlLWJvdW5jZXttYXJnaW46YXV0bzt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTowfS5zay1yZWN0YW5nbGUtYm91bmNlPmRpdntiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtoZWlnaHQ6MTAwJTt3aWR0aDoxMCU7bWFyZ2luOjAgNSU7ZGlzcGxheTppbmxpbmUtYmxvY2s7LXdlYmtpdC1hbmltYXRpb246MS4ycyBlYXNlLWluLW91dCBpbmZpbml0ZSBzay1yZWN0YW5nbGVCb3VuY2Utc3RyZXRjaERlbGF5O2FuaW1hdGlvbjoxLjJzIGVhc2UtaW4tb3V0IGluZmluaXRlIHNrLXJlY3RhbmdsZUJvdW5jZS1zdHJldGNoRGVsYXl9LnNrLXJlY3RhbmdsZS1ib3VuY2U+ZGl2Om50aC1jaGlsZCgyKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMS4xczthbmltYXRpb24tZGVsYXk6LTEuMXN9LnNrLXJlY3RhbmdsZS1ib3VuY2U+ZGl2Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotMXM7YW5pbWF0aW9uLWRlbGF5Oi0xc30uc2stcmVjdGFuZ2xlLWJvdW5jZT5kaXY6bnRoLWNoaWxkKDQpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uOXM7YW5pbWF0aW9uLWRlbGF5Oi0uOXN9LnNrLXJlY3RhbmdsZS1ib3VuY2U+ZGl2Om50aC1jaGlsZCg1KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjhzO2FuaW1hdGlvbi1kZWxheTotLjhzfUAtd2Via2l0LWtleWZyYW1lcyBzay1yZWN0YW5nbGVCb3VuY2Utc3RyZXRjaERlbGF5ezAlLDEwMCUsNDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWSguNCk7dHJhbnNmb3JtOnNjYWxlWSguNCl9MjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWSgxKTt0cmFuc2Zvcm06c2NhbGVZKDEpfX1Aa2V5ZnJhbWVzIHNrLXJlY3RhbmdsZUJvdW5jZS1zdHJldGNoRGVsYXl7MCUsMTAwJSw0MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVZKC40KTt0cmFuc2Zvcm06c2NhbGVZKC40KX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVZKDEpO3RyYW5zZm9ybTpzY2FsZVkoMSl9fS5zay1yZWN0YW5nbGUtYm91bmNlLXBhcnR5LC5zay1yZWN0YW5nbGUtYm91bmNlLXBhcnR5PmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNrLXJlY3RhbmdsZS1ib3VuY2UtcGFydHl7bWFyZ2luOmF1dG87d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MH0uc2stcmVjdGFuZ2xlLWJvdW5jZS1wYXJ0eT5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6MTAlO2hlaWdodDoxMDAlO21hcmdpbjowIDUlO2JvcmRlci1yYWRpdXM6MDstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnJlY3RhbmdsZS1ib3VuY2UtcGFydHk7YW5pbWF0aW9uLW5hbWU6cmVjdGFuZ2xlLWJvdW5jZS1wYXJ0eTstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZX0uc2stcmVjdGFuZ2xlLWJvdW5jZS1wYXJ0eT5kaXY6bnRoLWNoaWxkKDEpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi40M3M7YW5pbWF0aW9uLWR1cmF0aW9uOi40M3M7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4yM3M7YW5pbWF0aW9uLWRlbGF5Oi0uMjNzfS5zay1yZWN0YW5nbGUtYm91bmNlLXBhcnR5PmRpdjpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246LjYyczthbmltYXRpb24tZHVyYXRpb246LjYyczstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjMyczthbmltYXRpb24tZGVsYXk6LS4zMnN9LnNrLXJlY3RhbmdsZS1ib3VuY2UtcGFydHk+ZGl2Om50aC1jaGlsZCgzKXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNDNzO2FuaW1hdGlvbi1kdXJhdGlvbjouNDNzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uNDRzO2FuaW1hdGlvbi1kZWxheTotLjQ0c30uc2stcmVjdGFuZ2xlLWJvdW5jZS1wYXJ0eT5kaXY6bnRoLWNoaWxkKDQpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi44czthbmltYXRpb24tZHVyYXRpb246LjhzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMzFzO2FuaW1hdGlvbi1kZWxheTotLjMxc30uc2stcmVjdGFuZ2xlLWJvdW5jZS1wYXJ0eT5kaXY6bnRoLWNoaWxkKDUpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi43NHM7YW5pbWF0aW9uLWR1cmF0aW9uOi43NHM7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4yNHM7YW5pbWF0aW9uLWRlbGF5Oi0uMjRzfUAtd2Via2l0LWtleWZyYW1lcyByZWN0YW5nbGUtYm91bmNlLXBhcnR5ezAlLDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVZKDEpO3RyYW5zZm9ybTpzY2FsZVkoMSl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWSguNCk7dHJhbnNmb3JtOnNjYWxlWSguNCl9fUBrZXlmcmFtZXMgcmVjdGFuZ2xlLWJvdW5jZS1wYXJ0eXswJSwxMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWSgxKTt0cmFuc2Zvcm06c2NhbGVZKDEpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVkoLjQpO3RyYW5zZm9ybTpzY2FsZVkoLjQpfX0uc2stcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQsLnNrLXJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0PmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNrLXJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0e21hcmdpbjphdXRvO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjB9LnNrLXJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0PmRpdntkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2JvcmRlcjowIHNvbGlkIGN1cnJlbnRDb2xvcjt3aWR0aDoxMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjAgNSU7Ym9yZGVyLXJhZGl1czowOy13ZWJraXQtYW5pbWF0aW9uOi45cyBjdWJpYy1iZXppZXIoLjg1LC4yNSwuMzcsLjg1KSBpbmZpbml0ZSByZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dDthbmltYXRpb246LjlzIGN1YmljLWJlemllciguODUsLjI1LC4zNywuODUpIGluZmluaXRlIHJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0fS5zay1yZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dD5kaXY6bnRoLWNoaWxkKDMpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uOXM7YW5pbWF0aW9uLWRlbGF5Oi0uOXN9LnNrLXJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0PmRpdjpudGgtY2hpbGQoMiksLnNrLXJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0PmRpdjpudGgtY2hpbGQoNCl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS43czthbmltYXRpb24tZGVsYXk6LS43c30uc2stcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQ+ZGl2Om50aC1jaGlsZCgxKSwuc2stcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQ+ZGl2Om50aC1jaGlsZCg1KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjVzO2FuaW1hdGlvbi1kZWxheTotLjVzfUAtd2Via2l0LWtleWZyYW1lcyByZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dHswJSwxMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxleSgxKTt0cmFuc2Zvcm06c2NhbGV5KDEpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZXkoLjQpO3RyYW5zZm9ybTpzY2FsZXkoLjQpfX1Aa2V5ZnJhbWVzIHJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0ezAlLDEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGV5KDEpO3RyYW5zZm9ybTpzY2FsZXkoMSl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxleSguNCk7dHJhbnNmb3JtOnNjYWxleSguNCl9fS5zay1yZWN0YW5nbGUtYm91bmNlLXB1bHNlLW91dC1yYXBpZCwuc2stcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQtcmFwaWQ+ZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc2stcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQtcmFwaWR7bWFyZ2luOmF1dG87d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MH0uc2stcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQtcmFwaWQ+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Ym9yZGVyOjAgc29saWQgY3VycmVudENvbG9yO3dpZHRoOjEwJTtoZWlnaHQ6MTAwJTttYXJnaW46MCA1JTtib3JkZXItcmFkaXVzOjA7LXdlYmtpdC1hbmltYXRpb246LjlzIGN1YmljLWJlemllciguMTEsLjQ5LC4zOCwuNzgpIGluZmluaXRlIHJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0LXJhcGlkO2FuaW1hdGlvbjouOXMgY3ViaWMtYmV6aWVyKC4xMSwuNDksLjM4LC43OCkgaW5maW5pdGUgcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQtcmFwaWR9LnNrLXJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0LXJhcGlkPmRpdjpudGgtY2hpbGQoMyl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS45czthbmltYXRpb24tZGVsYXk6LS45c30uc2stcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQtcmFwaWQ+ZGl2Om50aC1jaGlsZCgyKSwuc2stcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQtcmFwaWQ+ZGl2Om50aC1jaGlsZCg0KXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTotLjY1czthbmltYXRpb24tZGVsYXk6LS42NXN9LnNrLXJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0LXJhcGlkPmRpdjpudGgtY2hpbGQoMSksLnNrLXJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0LXJhcGlkPmRpdjpudGgtY2hpbGQoNSl7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS40czthbmltYXRpb24tZGVsYXk6LS40c31ALXdlYmtpdC1rZXlmcmFtZXMgcmVjdGFuZ2xlLWJvdW5jZS1wdWxzZS1vdXQtcmFwaWR7MCUsOTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxleSgxKTt0cmFuc2Zvcm06c2NhbGV5KDEpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZXkoLjQpO3RyYW5zZm9ybTpzY2FsZXkoLjQpfX1Aa2V5ZnJhbWVzIHJlY3RhbmdsZS1ib3VuY2UtcHVsc2Utb3V0LXJhcGlkezAlLDkwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZXkoMSk7dHJhbnNmb3JtOnNjYWxleSgxKX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGV5KC40KTt0cmFuc2Zvcm06c2NhbGV5KC40KX19LnNrLXJvdGF0aW5nLXBsYW5le3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luOmF1dG99LnNrLXJvdGF0aW5nLXBsYW5lPmRpdnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yOy13ZWJraXQtYW5pbWF0aW9uOjEuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgc2stcm90YXRlUGxhbmU7YW5pbWF0aW9uOjEuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgc2stcm90YXRlUGxhbmV9QC13ZWJraXQta2V5ZnJhbWVzIHNrLXJvdGF0ZVBsYW5lezAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEyMHB4KTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTIwcHgpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVYKDE4MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZykgcm90YXRlWCgxODBkZWcpfX1Aa2V5ZnJhbWVzIHNrLXJvdGF0ZVBsYW5lezAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMCk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODAuMWRlZykgcm90YXRlWSgwKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MGRlZykgcm90YXRlWSgtMTc5LjlkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyl9fS5zay1zcXVhcmUtamVsbHktYm94LC5zay1zcXVhcmUtamVsbHktYm94PmRpdntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnNrLXNxdWFyZS1qZWxseS1ib3h7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtmb250LXNpemU6MH0uc2stc3F1YXJlLWplbGx5LWJveD5kaXZ7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXI6MCBzb2xpZCBjdXJyZW50Q29sb3J9LnNrLXNxdWFyZS1qZWxseS1ib3g+ZGl2Om50aC1jaGlsZCgxKSwuc2stc3F1YXJlLWplbGx5LWJveD5kaXY6bnRoLWNoaWxkKDIpe3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt3aWR0aDoxMDAlfS5zay1zcXVhcmUtamVsbHktYm94PmRpdjpudGgtY2hpbGQoMSl7dG9wOi0yNSU7ei1pbmRleDo5OTk5NztoZWlnaHQ6MTAwJTtib3JkZXItcmFkaXVzOjEwJTstd2Via2l0LWFuaW1hdGlvbjouNnMgbGluZWFyIC0uMXMgaW5maW5pdGUgc3F1YXJlLWplbGx5LWJveC1hbmltYXRlO2FuaW1hdGlvbjouNnMgbGluZWFyIC0uMXMgaW5maW5pdGUgc3F1YXJlLWplbGx5LWJveC1hbmltYXRlfS5zay1zcXVhcmUtamVsbHktYm94PmRpdjpudGgtY2hpbGQoMil7Ym90dG9tOi05JTtoZWlnaHQ6MTAlO2JhY2tncm91bmQ6IzAwMDtib3JkZXItcmFkaXVzOjUwJTtvcGFjaXR5Oi4yOy13ZWJraXQtYW5pbWF0aW9uOi42cyBsaW5lYXIgLS4xcyBpbmZpbml0ZSBzcXVhcmUtamVsbHktYm94LXNoYWRvdzthbmltYXRpb246LjZzIGxpbmVhciAtLjFzIGluZmluaXRlIHNxdWFyZS1qZWxseS1ib3gtc2hhZG93fUAtd2Via2l0LWtleWZyYW1lcyBzcXVhcmUtamVsbHktYm94LWFuaW1hdGV7MTcle2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwJX0yNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgyNSUpIHJvdGF0ZSgyMi41ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgyNSUpIHJvdGF0ZSgyMi41ZGVnKX01MCV7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTAwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDUwJSkgc2NhbGUoMSwuOSkgcm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpIHNjYWxlKDEsLjkpIHJvdGF0ZSg0NWRlZyl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUlKSByb3RhdGUoNjcuNWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUlKSByb3RhdGUoNjcuNWRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlKDkwZGVnKX19QGtleWZyYW1lcyBzcXVhcmUtamVsbHktYm94LWFuaW1hdGV7MTcle2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjEwJX0yNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgyNSUpIHJvdGF0ZSgyMi41ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgyNSUpIHJvdGF0ZSgyMi41ZGVnKX01MCV7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTAwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDUwJSkgc2NhbGUoMSwuOSkgcm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpIHNjYWxlKDEsLjkpIHJvdGF0ZSg0NWRlZyl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUlKSByb3RhdGUoNjcuNWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUlKSByb3RhdGUoNjcuNWRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlKDkwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIHNxdWFyZS1qZWxseS1ib3gtc2hhZG93ezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjI1LDEpO3RyYW5zZm9ybTpzY2FsZSgxLjI1LDEpfX1Aa2V5ZnJhbWVzIHNxdWFyZS1qZWxseS1ib3gtc2hhZG93ezUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjI1LDEpO3RyYW5zZm9ybTpzY2FsZSgxLjI1LDEpfX0uc2stc3F1YXJlLWxvYWRlciwuc2stc3F1YXJlLWxvYWRlcj5kaXZ7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5zay1zcXVhcmUtbG9hZGVye2ZvbnQtc2l6ZTowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LnNrLXNxdWFyZS1sb2FkZXI+ZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7Ym9yZGVyOjNweCBzb2xpZCBjdXJyZW50Q29sb3I7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOjAgMDtib3JkZXItcmFkaXVzOjA7LXdlYmtpdC1hbmltYXRpb246MnMgaW5maW5pdGUgc3F1YXJlLWxvYWRlcjthbmltYXRpb246MnMgaW5maW5pdGUgc3F1YXJlLWxvYWRlcn0uc2stc3F1YXJlLWxvYWRlcj5kaXY6YWZ0ZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTAwJTt2ZXJ0aWNhbC1hbGlnbjp0b3A7Y29udGVudDpcIlwiO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yOy13ZWJraXQtYW5pbWF0aW9uOjJzIGVhc2UtaW4gaW5maW5pdGUgc3F1YXJlLWxvYWRlci1pbm5lcjthbmltYXRpb246MnMgZWFzZS1pbiBpbmZpbml0ZSBzcXVhcmUtbG9hZGVyLWlubmVyfUAtd2Via2l0LWtleWZyYW1lcyBzcXVhcmUtbG9hZGVyezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTI1JSw1MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfTEwMCUsNzUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBzcXVhcmUtbG9hZGVyezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTI1JSw1MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfTEwMCUsNzUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIHNxdWFyZS1sb2FkZXItaW5uZXJ7MCUsMTAwJSwyNSV7aGVpZ2h0OjB9NTAlLDc1JXtoZWlnaHQ6MTAwJX19QGtleWZyYW1lcyBzcXVhcmUtbG9hZGVyLWlubmVyezAlLDEwMCUsMjUle2hlaWdodDowfTUwJSw3NSV7aGVpZ2h0OjEwMCV9fS5zay10aHJlZS1ib3VuY2V7bWFyZ2luOmF1dG87d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcn0uc2stdGhyZWUtYm91bmNlPmRpdnttYXJnaW4tdG9wOjM1JTt3aWR0aDozMCU7aGVpZ2h0OjMwJTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtib3JkZXItcmFkaXVzOjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7LXdlYmtpdC1hbmltYXRpb246MS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoIHNrLXRocmVlQm91bmNlLWJvdW5jZURlbGF5O2FuaW1hdGlvbjoxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGggc2stdGhyZWVCb3VuY2UtYm91bmNlRGVsYXl9LmJvdHRvbS1jZW50ZXI+LnNrLXRocmVlLWJvdW5jZT5kaXYsLmJvdHRvbS1sZWZ0Pi5zay10aHJlZS1ib3VuY2U+ZGl2LC5ib3R0b20tcmlnaHQ+LnNrLXRocmVlLWJvdW5jZT5kaXZ7bWFyZ2luLXRvcDo3MCUhaW1wb3J0YW50fS50b3AtY2VudGVyPi5zay10aHJlZS1ib3VuY2U+ZGl2LC50b3AtbGVmdD4uc2stdGhyZWUtYm91bmNlPmRpdiwudG9wLXJpZ2h0Pi5zay10aHJlZS1ib3VuY2U+ZGl2e21hcmdpbi10b3A6MCFpbXBvcnRhbnR9LnNrLXRocmVlLWJvdW5jZT5kaXY6bnRoLWNoaWxkKDEpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uMzJzO2FuaW1hdGlvbi1kZWxheTotLjMyc30uc2stdGhyZWUtYm91bmNlPmRpdjpudGgtY2hpbGQoMil7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LS4xNnM7YW5pbWF0aW9uLWRlbGF5Oi0uMTZzfUAtd2Via2l0LWtleWZyYW1lcyBzay10aHJlZUJvdW5jZS1ib3VuY2VEZWxheXswJSwxMDAlLDgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzay10aHJlZUJvdW5jZS1ib3VuY2VEZWxheXswJSwxMDAlLDgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19LnNrLXRocmVlLXN0cmluZ3N7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uc2stdGhyZWUtc3RyaW5ncz5kaXZ7cG9zaXRpb246YWJzb2x1dGU7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czo1MCV9LnNrLXRocmVlLXN0cmluZ3M+ZGl2Om50aC1jaGlsZCgxKXtsZWZ0OjA7dG9wOjA7LXdlYmtpdC1hbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIHNrLXRocmVlU3RyaW5ncy1yb3RhdGVPbmU7YW5pbWF0aW9uOjFzIGxpbmVhciBpbmZpbml0ZSBzay10aHJlZVN0cmluZ3Mtcm90YXRlT25lO2JvcmRlci1ib3R0b206M3B4IHNvbGlkIGN1cnJlbnRDb2xvcn0uc2stdGhyZWUtc3RyaW5ncz5kaXY6bnRoLWNoaWxkKDIpe3JpZ2h0OjA7dG9wOjA7LXdlYmtpdC1hbmltYXRpb246MXMgbGluZWFyIGluZmluaXRlIHNrLXRocmVlU3RyaW5ncy1yb3RhdGVUd287YW5pbWF0aW9uOjFzIGxpbmVhciBpbmZpbml0ZSBzay10aHJlZVN0cmluZ3Mtcm90YXRlVHdvO2JvcmRlci1yaWdodDozcHggc29saWQgY3VycmVudENvbG9yfS5zay10aHJlZS1zdHJpbmdzPmRpdjpudGgtY2hpbGQoMyl7cmlnaHQ6MDtib3R0b206MDstd2Via2l0LWFuaW1hdGlvbjoxcyBsaW5lYXIgaW5maW5pdGUgc2stdGhyZWVTdHJpbmdzLXJvdGF0ZVRocmVlO2FuaW1hdGlvbjoxcyBsaW5lYXIgaW5maW5pdGUgc2stdGhyZWVTdHJpbmdzLXJvdGF0ZVRocmVlO2JvcmRlci10b3A6M3B4IHNvbGlkIGN1cnJlbnRDb2xvcn1ALXdlYmtpdC1rZXlmcmFtZXMgc2stdGhyZWVTdHJpbmdzLXJvdGF0ZU9uZXswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDM1ZGVnKSByb3RhdGVZKC00NWRlZykgcm90YXRlWigwKTt0cmFuc2Zvcm06cm90YXRlWCgzNWRlZykgcm90YXRlWSgtNDVkZWcpIHJvdGF0ZVooMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDM1ZGVnKSByb3RhdGVZKC00NWRlZykgcm90YXRlWigzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDM1ZGVnKSByb3RhdGVZKC00NWRlZykgcm90YXRlWigzNjBkZWcpfX1Aa2V5ZnJhbWVzIHNrLXRocmVlU3RyaW5ncy1yb3RhdGVPbmV7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgzNWRlZykgcm90YXRlWSgtNDVkZWcpIHJvdGF0ZVooMCk7dHJhbnNmb3JtOnJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoLTQ1ZGVnKSByb3RhdGVaKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgzNWRlZykgcm90YXRlWSgtNDVkZWcpIHJvdGF0ZVooMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgzNWRlZykgcm90YXRlWSgtNDVkZWcpIHJvdGF0ZVooMzYwZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIHNrLXRocmVlU3RyaW5ncy1yb3RhdGVUd297MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCg1MGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigwKTt0cmFuc2Zvcm06cm90YXRlWCg1MGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoNTBkZWcpIHJvdGF0ZVkoMTBkZWcpIHJvdGF0ZVooMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCg1MGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigzNjBkZWcpfX1Aa2V5ZnJhbWVzIHNrLXRocmVlU3RyaW5ncy1yb3RhdGVUd297MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCg1MGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigwKTt0cmFuc2Zvcm06cm90YXRlWCg1MGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoNTBkZWcpIHJvdGF0ZVkoMTBkZWcpIHJvdGF0ZVooMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCg1MGRlZykgcm90YXRlWSgxMGRlZykgcm90YXRlWigzNjBkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgc2stdGhyZWVTdHJpbmdzLXJvdGF0ZVRocmVlezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoNTVkZWcpIHJvdGF0ZVooMCk7dHJhbnNmb3JtOnJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoNTVkZWcpIHJvdGF0ZVooMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDM1ZGVnKSByb3RhdGVZKDU1ZGVnKSByb3RhdGVaKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoNTVkZWcpIHJvdGF0ZVooMzYwZGVnKX19QGtleWZyYW1lcyBzay10aHJlZVN0cmluZ3Mtcm90YXRlVGhyZWV7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgzNWRlZykgcm90YXRlWSg1NWRlZykgcm90YXRlWigwKTt0cmFuc2Zvcm06cm90YXRlWCgzNWRlZykgcm90YXRlWSg1NWRlZykgcm90YXRlWigwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMzVkZWcpIHJvdGF0ZVkoNTVkZWcpIHJvdGF0ZVooMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgzNWRlZykgcm90YXRlWSg1NWRlZykgcm90YXRlWigzNjBkZWcpfX0uc2std2FuZGVyaW5nLWN1YmVze21hcmdpbjphdXRvO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246cmVsYXRpdmU7dGV4dC1hbGlnbjpjZW50ZXJ9LnNrLXdhbmRlcmluZy1jdWJlcz5kaXZ7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7d2lkdGg6MjUlO2hlaWdodDoyNSU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowOy13ZWJraXQtYW5pbWF0aW9uOjEuOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgc2std2FuZGVyaW5nQ3ViZXMtY3ViZU1vdmU7YW5pbWF0aW9uOjEuOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgc2std2FuZGVyaW5nQ3ViZXMtY3ViZU1vdmV9LnNrLXdhbmRlcmluZy1jdWJlcz5kaXY6bnRoLWNoaWxkKDIpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi0uOXM7YW5pbWF0aW9uLWRlbGF5Oi0uOXN9QC13ZWJraXQta2V5ZnJhbWVzIHNrLXdhbmRlcmluZ0N1YmVzLWN1YmVNb3ZlezI1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDI5MCUpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKC41KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyOTAlKSByb3RhdGUoLTkwZGVnKSBzY2FsZSguNSl9NTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjkwJSkgdHJhbnNsYXRlWSgyOTAlKSByb3RhdGUoLTE4MGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjkwJSkgdHJhbnNsYXRlWSgyOTAlKSByb3RhdGUoLTE4MGRlZyl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgyOTAlKSByb3RhdGUoLTI3MGRlZykgc2NhbGUoLjUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMjkwJSkgcm90YXRlKC0yNzBkZWcpIHNjYWxlKC41KX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpfX1Aa2V5ZnJhbWVzIHNrLXdhbmRlcmluZ0N1YmVzLWN1YmVNb3ZlezI1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDI5MCUpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKC41KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyOTAlKSByb3RhdGUoLTkwZGVnKSBzY2FsZSguNSl9NTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjkwJSkgdHJhbnNsYXRlWSgyOTAlKSByb3RhdGUoLTE3OWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjkwJSkgdHJhbnNsYXRlWSgyOTAlKSByb3RhdGUoLTE3OWRlZyl9NTAuMSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyOTAlKSB0cmFuc2xhdGVZKDI5MCUpIHJvdGF0ZSgtMTgwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyOTAlKSB0cmFuc2xhdGVZKDI5MCUpIHJvdGF0ZSgtMTgwZGVnKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDI5MCUpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSguNSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgyOTAlKSByb3RhdGUoLTI3MGRlZykgc2NhbGUoLjUpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyl9fWBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFVpTG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgYmdzQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgYmdzT3BhY2l0eTogbnVtYmVyO1xuICBASW5wdXQoKSBiZ3NQb3NpdGlvbjogUG9zaXRpb25UeXBlO1xuICBASW5wdXQoKSBiZ3NTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIGJnc1R5cGU6IFNwaW5uZXJUeXBlO1xuICBASW5wdXQoKSBmZ3NDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBmZ3NQb3NpdGlvbjogUG9zaXRpb25UeXBlO1xuICBASW5wdXQoKSBmZ3NTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIGZnc1R5cGU6IFNwaW5uZXJUeXBlO1xuICBASW5wdXQoKSBnYXA6IG51bWJlcjtcbiAgQElucHV0KCkgbG9nb1Bvc2l0aW9uOiBQb3NpdGlvblR5cGU7XG4gIEBJbnB1dCgpIGxvZ29TaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIGxvZ29Vcmw6IHN0cmluZztcbiAgQElucHV0KCkgb3ZlcmxheUNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBiQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgcGJEaXJlY3Rpb246IERpcmVjdGlvblR5cGU7XG4gIEBJbnB1dCgpIHBiVGhpY2tuZXNzOiBudW1iZXI7XG4gIEBJbnB1dCgpIGhhc1Byb2dyZXNzQmFyOiBib29sZWFuO1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRleHRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSB0ZXh0UG9zaXRpb246IFBvc2l0aW9uVHlwZTtcblxuICBmZ0RpdnM6IG51bWJlcltdO1xuICBmZ1NwaW5uZXJDbGFzczogc3RyaW5nO1xuICBiZ0RpdnM6IG51bWJlcltdO1xuICBiZ1NwaW5uZXJDbGFzczogc3RyaW5nO1xuICBzaG93Rm9yZWdyb3VuZDogYm9vbGVhbjtcbiAgc2hvd0JhY2tncm91bmQ6IGJvb2xlYW47XG4gIGZvcmVncm91bmRDbG9zaW5nOiBib29sZWFuO1xuICBiYWNrZ3JvdW5kQ2xvc2luZzogYm9vbGVhbjtcblxuICB0cnVzdGVkTG9nb1VybDogYW55O1xuICBsb2dvVG9wOiBhbnk7XG4gIHNwaW5uZXJUb3A6IGFueTtcbiAgdGV4dFRvcDogYW55O1xuXG4gIHNob3dGb3JlZ3JvdW5kV2F0Y2hlcjogU3Vic2NyaXB0aW9uO1xuICBzaG93QmFja2dyb3VuZFdhdGNoZXI6IFN1YnNjcmlwdGlvbjtcbiAgZm9yZWdyb3VuZENsb3NpbmdXYXRjaGVyOiBTdWJzY3JpcHRpb247XG4gIGJhY2tncm91bmRDbG9zaW5nV2F0Y2hlcjogU3Vic2NyaXB0aW9uO1xuXG4gIGRlZmF1bHRDb25maWc6IE5neFVpTG9hZGVyQ29uZmlnO1xuICBpbml0aWFsaXplZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIGRvbVNhbml0aXplclxuICAgKiBAcGFyYW0gbmd4U2VydmljZVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIG5neFNlcnZpY2U6IE5neFVpTG9hZGVyU2VydmljZSkge1xuXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVmYXVsdENvbmZpZyA9IHRoaXMubmd4U2VydmljZS5nZXREZWZhdWx0Q29uZmlnKCk7XG5cbiAgICB0aGlzLmJnc0NvbG9yID0gdGhpcy5kZWZhdWx0Q29uZmlnLmJnc0NvbG9yO1xuICAgIHRoaXMuYmdzT3BhY2l0eSA9IHRoaXMuZGVmYXVsdENvbmZpZy5iZ3NPcGFjaXR5O1xuICAgIHRoaXMuYmdzUG9zaXRpb24gPSB0aGlzLmRlZmF1bHRDb25maWcuYmdzUG9zaXRpb247XG4gICAgdGhpcy5iZ3NTaXplID0gdGhpcy5kZWZhdWx0Q29uZmlnLmJnc1NpemU7XG4gICAgdGhpcy5iZ3NUeXBlID0gdGhpcy5kZWZhdWx0Q29uZmlnLmJnc1R5cGU7XG4gICAgdGhpcy5mZ3NDb2xvciA9IHRoaXMuZGVmYXVsdENvbmZpZy5mZ3NDb2xvcjtcbiAgICB0aGlzLmZnc1Bvc2l0aW9uID0gdGhpcy5kZWZhdWx0Q29uZmlnLmZnc1Bvc2l0aW9uO1xuICAgIHRoaXMuZmdzU2l6ZSA9IHRoaXMuZGVmYXVsdENvbmZpZy5mZ3NTaXplO1xuICAgIHRoaXMuZmdzVHlwZSA9IHRoaXMuZGVmYXVsdENvbmZpZy5mZ3NUeXBlO1xuICAgIHRoaXMuZ2FwID0gdGhpcy5kZWZhdWx0Q29uZmlnLmdhcDtcbiAgICB0aGlzLmxvZ29Qb3NpdGlvbiA9IHRoaXMuZGVmYXVsdENvbmZpZy5sb2dvUG9zaXRpb247XG4gICAgdGhpcy5sb2dvU2l6ZSA9IHRoaXMuZGVmYXVsdENvbmZpZy5sb2dvU2l6ZTtcbiAgICB0aGlzLmxvZ29VcmwgPSB0aGlzLmRlZmF1bHRDb25maWcubG9nb1VybDtcbiAgICB0aGlzLm92ZXJsYXlDb2xvciA9IHRoaXMuZGVmYXVsdENvbmZpZy5vdmVybGF5Q29sb3I7XG4gICAgdGhpcy5wYkNvbG9yID0gdGhpcy5kZWZhdWx0Q29uZmlnLnBiQ29sb3I7XG4gICAgdGhpcy5wYkRpcmVjdGlvbiA9IHRoaXMuZGVmYXVsdENvbmZpZy5wYkRpcmVjdGlvbjtcbiAgICB0aGlzLnBiVGhpY2tuZXNzID0gdGhpcy5kZWZhdWx0Q29uZmlnLnBiVGhpY2tuZXNzO1xuICAgIHRoaXMuaGFzUHJvZ3Jlc3NCYXIgPSB0aGlzLmRlZmF1bHRDb25maWcuaGFzUHJvZ3Jlc3NCYXI7XG4gICAgdGhpcy50ZXh0ID0gdGhpcy5kZWZhdWx0Q29uZmlnLnRleHQ7XG4gICAgdGhpcy50ZXh0Q29sb3IgPSB0aGlzLmRlZmF1bHRDb25maWcudGV4dENvbG9yO1xuICAgIHRoaXMudGV4dFBvc2l0aW9uID0gdGhpcy5kZWZhdWx0Q29uZmlnLnRleHRQb3NpdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBpbml0IGV2ZW50XG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVTcGlubmVycygpO1xuICAgIHRoaXMuZGV0ZXJtaW5lUG9zaXRpb25zKCk7XG5cbiAgICB0aGlzLmJnc1Bvc2l0aW9uID0gPFBvc2l0aW9uVHlwZT50aGlzLnZhbGlkYXRlKCdiZ3NQb3NpdGlvbicsIHRoaXMuYmdzUG9zaXRpb24sIFBPU0lUSU9OLCB0aGlzLmRlZmF1bHRDb25maWcuYmdzUG9zaXRpb24pO1xuXG4gICAgdGhpcy50cnVzdGVkTG9nb1VybCA9IHRoaXMuZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh0aGlzLmxvZ29VcmwpO1xuXG4gICAgdGhpcy5wYkRpcmVjdGlvbiA9IDxEaXJlY3Rpb25UeXBlPnRoaXMudmFsaWRhdGUoJ3BiRGlyZWN0aW9uJywgdGhpcy5wYkRpcmVjdGlvbiwgUEJfRElSRUNUSU9OLCB0aGlzLmRlZmF1bHRDb25maWcucGJEaXJlY3Rpb24pO1xuXG4gICAgdGhpcy5zaG93Rm9yZWdyb3VuZFdhdGNoZXIgPSB0aGlzLm5neFNlcnZpY2Uuc2hvd0ZvcmVncm91bmRcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnNob3dGb3JlZ3JvdW5kID0gZGF0YSk7XG5cbiAgICB0aGlzLnNob3dCYWNrZ3JvdW5kV2F0Y2hlciA9IHRoaXMubmd4U2VydmljZS5zaG93QmFja2dyb3VuZFxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMuc2hvd0JhY2tncm91bmQgPSBkYXRhKTtcblxuICAgIHRoaXMuZm9yZWdyb3VuZENsb3NpbmdXYXRjaGVyID0gdGhpcy5uZ3hTZXJ2aWNlLmZvcmVncm91bmRDbG9zaW5nXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5mb3JlZ3JvdW5kQ2xvc2luZyA9IGRhdGEpO1xuXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ2xvc2luZ1dhdGNoZXIgPSB0aGlzLm5neFNlcnZpY2UuYmFja2dyb3VuZENsb3NpbmdcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmJhY2tncm91bmRDbG9zaW5nID0gZGF0YSk7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogT24gY2hhbmdlcyBldmVudFxuICAgKiBAcGFyYW0gY2hhbmdlc1xuICAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGJnc1R5cGVDaGFuZ2U6IFNpbXBsZUNoYW5nZSA9IGNoYW5nZXMuYmdzVHlwZTtcbiAgICBjb25zdCBiZ3NQb3NpdGlvbkNoYW5nZTogU2ltcGxlQ2hhbmdlID0gY2hhbmdlcy5iZ3NQb3NpdGlvbjtcbiAgICBjb25zdCBmZ3NUeXBlQ2hhbmdlOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzLmZnc1R5cGU7XG4gICAgY29uc3QgbG9nb1VybENoYW5nZTogU2ltcGxlQ2hhbmdlID0gY2hhbmdlcy5sb2dvVXJsO1xuICAgIGNvbnN0IHBiRGlyZWN0aW9uQ2hhbmdlOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzLnBiRGlyZWN0aW9uO1xuXG4gICAgaWYgKGZnc1R5cGVDaGFuZ2UgfHwgYmdzVHlwZUNoYW5nZSkge1xuICAgICAgdGhpcy5pbml0aWFsaXplU3Bpbm5lcnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRldGVybWluZVBvc2l0aW9ucygpO1xuXG4gICAgaWYgKGJnc1Bvc2l0aW9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLmJnc1Bvc2l0aW9uID0gPFBvc2l0aW9uVHlwZT50aGlzLnZhbGlkYXRlKCdiZ3NQb3NpdGlvbicsIHRoaXMuYmdzUG9zaXRpb24sIFBPU0lUSU9OLCB0aGlzLmRlZmF1bHRDb25maWcuYmdzUG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmIChsb2dvVXJsQ2hhbmdlKSB7XG4gICAgICB0aGlzLnRydXN0ZWRMb2dvVXJsID0gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHRoaXMubG9nb1VybCk7XG4gICAgfVxuXG4gICAgaWYgKHBiRGlyZWN0aW9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnBiRGlyZWN0aW9uID0gPERpcmVjdGlvblR5cGU+dGhpcy52YWxpZGF0ZSgncGJEaXJlY3Rpb24nLCB0aGlzLnBiRGlyZWN0aW9uLCBQQl9ESVJFQ1RJT04sIHRoaXMuZGVmYXVsdENvbmZpZy5wYkRpcmVjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgc3Bpbm5lcnNcbiAgICovXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVNwaW5uZXJzKCkge1xuICAgIHRoaXMuZmdzVHlwZSA9IDxTcGlubmVyVHlwZT50aGlzLnZhbGlkYXRlKCdmZ3NUeXBlJywgdGhpcy5mZ3NUeXBlLCBTUElOTkVSLCB0aGlzLmRlZmF1bHRDb25maWcuZmdzVHlwZSk7XG4gICAgdGhpcy5iZ3NUeXBlID0gPFNwaW5uZXJUeXBlPnRoaXMudmFsaWRhdGUoJ2Jnc1R5cGUnLCB0aGlzLmJnc1R5cGUsIFNQSU5ORVIsIHRoaXMuZGVmYXVsdENvbmZpZy5iZ3NUeXBlKTtcblxuICAgIHRoaXMuZmdEaXZzID0gQXJyYXkoU1BJTk5FUl9DT05GSUdbdGhpcy5mZ3NUeXBlXS5kaXZzKS5maWxsKDEpO1xuICAgIHRoaXMuZmdTcGlubmVyQ2xhc3MgPSBTUElOTkVSX0NPTkZJR1t0aGlzLmZnc1R5cGVdLmNsYXNzO1xuICAgIHRoaXMuYmdEaXZzID0gQXJyYXkoU1BJTk5FUl9DT05GSUdbdGhpcy5iZ3NUeXBlXS5kaXZzKS5maWxsKDEpO1xuICAgIHRoaXMuYmdTcGlubmVyQ2xhc3MgPSBTUElOTkVSX0NPTkZJR1t0aGlzLmJnc1R5cGVdLmNsYXNzO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB0aGUgcG9zaXRpb25zIG9mIHNwaW5uZXIsIGxvZ28gYW5kIHRleHRcbiAgICovXG4gIHByaXZhdGUgZGV0ZXJtaW5lUG9zaXRpb25zKCkge1xuICAgIHRoaXMuZmdzUG9zaXRpb24gPSA8UG9zaXRpb25UeXBlPnRoaXMudmFsaWRhdGUoJ2Znc1Bvc2l0aW9uJywgdGhpcy5mZ3NQb3NpdGlvbiwgUE9TSVRJT04sIHRoaXMuZGVmYXVsdENvbmZpZy5mZ3NQb3NpdGlvbik7XG4gICAgdGhpcy5sb2dvUG9zaXRpb24gPSA8UG9zaXRpb25UeXBlPnRoaXMudmFsaWRhdGUoJ2xvZ29Qb3NpdGlvbicsIHRoaXMubG9nb1Bvc2l0aW9uLCBQT1NJVElPTiwgdGhpcy5kZWZhdWx0Q29uZmlnLmxvZ29Qb3NpdGlvbik7XG4gICAgdGhpcy50ZXh0UG9zaXRpb24gPSA8UG9zaXRpb25UeXBlPnRoaXMudmFsaWRhdGUoJ3RleHRQb3NpdGlvbicsIHRoaXMudGV4dFBvc2l0aW9uLCBQT1NJVElPTiwgdGhpcy5kZWZhdWx0Q29uZmlnLnRleHRQb3NpdGlvbik7XG4gICAgdGhpcy5nYXAgPSBjb2VyY2VOdW1iZXIodGhpcy5nYXAsIHRoaXMuZGVmYXVsdENvbmZpZy5nYXApO1xuXG4gICAgdGhpcy5sb2dvVG9wID0gJ2luaXRpYWwnO1xuICAgIHRoaXMuc3Bpbm5lclRvcCA9ICdpbml0aWFsJztcbiAgICB0aGlzLnRleHRUb3AgPSAnaW5pdGlhbCc7XG4gICAgY29uc3QgdGV4dFNpemUgPSAyNDtcblxuICAgIGlmICh0aGlzLmxvZ29Qb3NpdGlvbi5zdGFydHNXaXRoKCdjZW50ZXInKSkge1xuICAgICAgdGhpcy5sb2dvVG9wID0gJzUwJSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxvZ29Qb3NpdGlvbi5zdGFydHNXaXRoKCd0b3AnKSkge1xuICAgICAgdGhpcy5sb2dvVG9wID0gJzMwcHgnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZnc1Bvc2l0aW9uLnN0YXJ0c1dpdGgoJ2NlbnRlcicpKSB7XG4gICAgICB0aGlzLnNwaW5uZXJUb3AgPSAnNTAlJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmdzUG9zaXRpb24uc3RhcnRzV2l0aCgndG9wJykpIHtcbiAgICAgIHRoaXMuc3Bpbm5lclRvcCA9ICczMHB4JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy50ZXh0UG9zaXRpb24uc3RhcnRzV2l0aCgnY2VudGVyJykpIHtcbiAgICAgIHRoaXMudGV4dFRvcCA9ICc1MCUnO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXh0UG9zaXRpb24uc3RhcnRzV2l0aCgndG9wJykpIHtcbiAgICAgIHRoaXMudGV4dFRvcCA9ICczMHB4JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mZ3NQb3NpdGlvbiA9PT0gUE9TSVRJT04uY2VudGVyQ2VudGVyKSB7XG4gICAgICBpZiAodGhpcy5sb2dvVXJsICYmIHRoaXMubG9nb1Bvc2l0aW9uID09PSBQT1NJVElPTi5jZW50ZXJDZW50ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudGV4dCAmJiB0aGlzLnRleHRQb3NpdGlvbiA9PT0gUE9TSVRJT04uY2VudGVyQ2VudGVyKSB7IC8vIGxvZ28sIHNwaW5uZXIgYW5kIHRleHRcbiAgICAgICAgICB0aGlzLmxvZ29Ub3AgPSB0aGlzLmRvbVNhbml0aXplclxuICAgICAgICAgICAgLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgY2FsYyg1MCUgLSAke3RoaXMuZmdzU2l6ZSAvIDJ9cHggLSAke3RleHRTaXplIC8gMn1weCAtICR7dGhpcy5nYXB9cHgpYCk7XG4gICAgICAgICAgdGhpcy5zcGlubmVyVG9wID0gdGhpcy5kb21TYW5pdGl6ZXJcbiAgICAgICAgICAgIC5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYGNhbGMoNTAlICsgJHt0aGlzLmxvZ29TaXplIC8gMn1weCAtICR7dGV4dFNpemUgLyAyfXB4KWApO1xuICAgICAgICAgIHRoaXMudGV4dFRvcCA9IHRoaXMuZG9tU2FuaXRpemVyXG4gICAgICAgICAgICAuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGBjYWxjKDUwJSArICR7dGhpcy5sb2dvU2l6ZSAvIDJ9cHggKyAke3RoaXMuZ2FwfXB4ICsgJHt0aGlzLmZnc1NpemUgLyAyfXB4KWApO1xuICAgICAgICB9IGVsc2UgeyAvLyBsb2dvIGFuZCBzcGlubmVyXG4gICAgICAgICAgdGhpcy5sb2dvVG9wID0gdGhpcy5kb21TYW5pdGl6ZXJcbiAgICAgICAgICAgIC5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYGNhbGMoNTAlIC0gJHt0aGlzLmZnc1NpemUgLyAyfXB4IC0gJHt0aGlzLmdhcCAvIDJ9cHgpYCk7XG4gICAgICAgICAgdGhpcy5zcGlubmVyVG9wID0gdGhpcy5kb21TYW5pdGl6ZXJcbiAgICAgICAgICAgIC5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYGNhbGMoNTAlICsgJHt0aGlzLmxvZ29TaXplIC8gMn1weCArICR7dGhpcy5nYXAgLyAyfXB4KWApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy50ZXh0ICYmIHRoaXMudGV4dFBvc2l0aW9uID09PSBQT1NJVElPTi5jZW50ZXJDZW50ZXIpIHsgLy8gc3Bpbm5lciBhbmQgdGV4dFxuICAgICAgICAgIHRoaXMuc3Bpbm5lclRvcCA9IHRoaXMuZG9tU2FuaXRpemVyXG4gICAgICAgICAgICAuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGBjYWxjKDUwJSAtICR7dGV4dFNpemUgLyAyfXB4IC0gJHt0aGlzLmdhcCAvIDJ9cHgpYCk7XG4gICAgICAgICAgdGhpcy50ZXh0VG9wID0gdGhpcy5kb21TYW5pdGl6ZXJcbiAgICAgICAgICAgIC5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYGNhbGMoNTAlICsgJHt0aGlzLmZnc1NpemUgLyAyfXB4ICsgJHt0aGlzLmdhcCAvIDJ9cHgpYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMubG9nb1VybCAmJiB0aGlzLmxvZ29Qb3NpdGlvbiA9PT0gUE9TSVRJT04uY2VudGVyQ2VudGVyXG4gICAgICAgICYmIHRoaXMudGV4dCAmJiB0aGlzLnRleHRQb3NpdGlvbiA9PT0gUE9TSVRJT04uY2VudGVyQ2VudGVyKSB7IC8vIGxvZ28gYW5kIHRleHRcbiAgICAgICAgdGhpcy5sb2dvVG9wID0gdGhpcy5kb21TYW5pdGl6ZXJcbiAgICAgICAgICAuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGBjYWxjKDUwJSAtICR7dGV4dFNpemUgLyAyfXB4IC0gJHt0aGlzLmdhcCAvIDJ9cHgpYCk7XG4gICAgICAgIHRoaXMudGV4dFRvcCA9IHRoaXMuZG9tU2FuaXRpemVyXG4gICAgICAgICAgLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgY2FsYyg1MCUgKyAke3RoaXMubG9nb1NpemUgLyAyfXB4ICsgJHt0aGlzLmdhcCAvIDJ9cHgpYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZShpbnB1dE5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgdmFsaWRUeXBlT2JqOiB7fSwgZmFsbGJhY2tWYWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHZhbGlkVHlwZU9iaikubWFwKGsgPT4gdmFsaWRUeXBlT2JqW2tdKS5maW5kSW5kZXgodiA9PiB2ID09PSB2YWx1ZSkgPT09IC0xKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBbbmd4LXVpLWxvYWRlcl0gLSAke2lucHV0TmFtZX0gKFwiJHt2YWx1ZX1cIikgaXMgaW52YWxpZC4gYFxuICAgICAgICArIGBEZWZhdWx0IHZhbHVlIFwiJHtmYWxsYmFja1ZhbHVlfVwiIGlzIHVzZWQuYCk7XG4gICAgICByZXR1cm4gZmFsbGJhY2tWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGRlc3Ryb3kgZXZlbnRcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnNob3dGb3JlZ3JvdW5kV2F0Y2hlcikge1xuICAgICAgdGhpcy5zaG93Rm9yZWdyb3VuZFdhdGNoZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2hvd0JhY2tncm91bmRXYXRjaGVyKSB7XG4gICAgICB0aGlzLnNob3dCYWNrZ3JvdW5kV2F0Y2hlci51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb3JlZ3JvdW5kQ2xvc2luZ1dhdGNoZXIpIHtcbiAgICAgIHRoaXMuZm9yZWdyb3VuZENsb3NpbmdXYXRjaGVyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmJhY2tncm91bmRDbG9zaW5nV2F0Y2hlcikge1xuICAgICAgdGhpcy5iYWNrZ3JvdW5kQ2xvc2luZ1dhdGNoZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5neFVpTG9hZGVyU2VydmljZSB9IGZyb20gJy4vbmd4LXVpLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IGNvZXJjZU51bWJlciB9IGZyb20gJy4vY29lcmNpb24nO1xuXG5jb25zdCBERUxBWSA9IDUwMDtcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25neFVpTG9hZGVyQmx1cnJlZF0nIH0pXG5leHBvcnQgY2xhc3MgTmd4VWlMb2FkZXJCbHVycmVkRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9ibHVyOiBudW1iZXI7XG4gIHByaXZhdGUgX2ZpbHRlclZhbHVlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGJsdXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fYmx1cjtcbiAgfVxuXG4gIHNldCBibHVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9ibHVyID0gY29lcmNlTnVtYmVyKHZhbHVlLCB0aGlzLm5neFVpTG9hZGVyU2VydmljZS5nZXREZWZhdWx0Q29uZmlnKCkuYmx1cik7XG4gIH1cblxuICBzaG93Rm9yZWdyb3VuZFdhdGNoZXI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbmd4VWlMb2FkZXJTZXJ2aWNlOiBOZ3hVaUxvYWRlclNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5fYmx1ciA9IHRoaXMubmd4VWlMb2FkZXJTZXJ2aWNlLmdldERlZmF1bHRDb25maWcoKS5ibHVyO1xuXG4gICAgdGhpcy5zaG93Rm9yZWdyb3VuZFdhdGNoZXIgPSB0aGlzLm5neFVpTG9hZGVyU2VydmljZS5zaG93Rm9yZWdyb3VuZFxuICAgICAgLnN1YnNjcmliZShzaG93Rm9yZWdyb3VuZCA9PiB7XG4gICAgICAgIGlmIChzaG93Rm9yZWdyb3VuZCkge1xuICAgICAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gYGJsdXIoJHt0aGlzLl9ibHVyfXB4KWA7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJy13ZWJraXQtZmlsdGVyJywgZmlsdGVyVmFsdWUpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdmaWx0ZXInLCBmaWx0ZXJWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5neFVpTG9hZGVyU2VydmljZS5oYXNGb3JlZ3JvdW5kKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJy13ZWJraXQtZmlsdGVyJywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2ZpbHRlcicsICdub25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgREVMQVkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICB9XG5cbiAgLyoqXG4gICAqIE9uIGRlc3Ryb3kgZXZlbnRcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnNob3dGb3JlZ3JvdW5kV2F0Y2hlcikge1xuICAgICAgdGhpcy5zaG93Rm9yZWdyb3VuZFdhdGNoZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5neFVpTG9hZGVyU2VydmljZSB9IGZyb20gJy4vbmd4LXVpLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE5neFVpTG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hVaUxvYWRlckJsdXJyZWREaXJlY3RpdmUgfSBmcm9tICcuL25neC11aS1sb2FkZXItYmx1cnJlZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTkdYX1VJX0xPQURFUl9DT05GSUdfVE9LRU4gfSBmcm9tICcuL25neC11aS1sb2FkZXItY29uZmlnLnRva2VuJztcbmltcG9ydCB7IE5neFVpTG9hZGVyQ29uZmlnIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE5neFVpTG9hZGVyU2VydmljZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmd4VWlMb2FkZXJDb21wb25lbnQsXG4gICAgTmd4VWlMb2FkZXJCbHVycmVkRGlyZWN0aXZlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4VWlMb2FkZXJDb21wb25lbnQsXG4gICAgTmd4VWlMb2FkZXJCbHVycmVkRGlyZWN0aXZlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFVpTG9hZGVyTW9kdWxlIHtcblxuICAvKipcbiAgICogQ29udHJ1Y3RvclxuICAgKiBAcGFyYW0gcGFyZW50TW9kdWxlIG9wdGlvbmFsXG4gICAqL1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IE5neFVpTG9hZGVyTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbbmd4LXVpLWxvYWRlcl0gLSBOZ3hVaUxvYWRlck1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSXQgc2hvdWxkIGJlIGltcG9ydGVkIGluIHRoZSByb290IGBBcHBNb2R1bGVgIG9ubHkhJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGZvclJvb3RcbiAgICogQHBhcmFtIG5neFVpTG9hZGVyQ29uZmlnXG4gICAqIEByZXR1cm5zIEEgbW9kdWxlIHdpdGggaXRzIHByb3ZpZGVyIGRlcGVuZGVuY2llc1xuICAgKi9cbiAgc3RhdGljIGZvclJvb3Qobmd4VWlMb2FkZXJDb25maWc6IE5neFVpTG9hZGVyQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hVaUxvYWRlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogTkdYX1VJX0xPQURFUl9DT05GSUdfVE9LRU4sXG4gICAgICAgICAgdXNlVmFsdWU6IG5neFVpTG9hZGVyQ29uZmlnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4VWlMb2FkZXJSb3V0ZXJDb25maWcgfSBmcm9tICcuL25neC11aS1sb2FkZXItcm91dGVyLWNvbmZpZyc7XG5cbi8qKlxuICogSW5qZWN0aW9uIHRva2VuIGZvciBuZ3gtdWktbG9hZGVyLXJvdXRlciBjb25maWd1cmF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBOR1hfVUlfTE9BREVSX1JPVVRFUl9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48Tmd4VWlMb2FkZXJSb3V0ZXJDb25maWc+KCduZ3hVaUxvYWRlclJvdXRlckN1c3RvbS5jb25maWcnKTtcbiIsIi8qKlxuICogUm91dGVyIGxvYWRlciBpZFxuICovXG5leHBvcnQgY29uc3QgUk9VVEVSX0xPQURFUl9JRCA9ICckX3JvdXRlcl9sb2FkZXInO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ2FuY2VsLCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uRXJyb3IsIE5hdmlnYXRpb25TdGFydCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTmd4VWlMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9uZ3gtdWktbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmd4VWlMb2FkZXJSb3V0ZXJDb25maWcgfSBmcm9tICcuL25neC11aS1sb2FkZXItcm91dGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBOR1hfVUlfTE9BREVSX1JPVVRFUl9DT05GSUdfVE9LRU4gfSBmcm9tICcuL25neC11aS1sb2FkZXItcm91dGVyLWNvbmZpZy50b2tlbic7XG5pbXBvcnQgeyBST1VURVJfTE9BREVSX0lEIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLXJvdXRlci5jb25zdGFudHMnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgTmd4VWlMb2FkZXJSb3V0ZXJNb2R1bGUge1xuXG4gIC8qKlxuICAgKiBmb3JSb290XG4gICAqIEBwYXJhbSByb3V0ZXJDb25maWcgQ29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJucyBBIG1vZHVsZSB3aXRoIGl0cyBwcm92aWRlciBkZXBlbmRlbmNpZXNcbiAgICovXG4gIHN0YXRpYyBmb3JSb290KHJvdXRlckNvbmZpZzogTmd4VWlMb2FkZXJSb3V0ZXJDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neFVpTG9hZGVyUm91dGVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBOR1hfVUlfTE9BREVSX1JPVVRFUl9DT05GSUdfVE9LRU4sXG4gICAgICAgICAgdXNlVmFsdWU6IHJvdXRlckNvbmZpZ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gcGFyZW50TW9kdWxlXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQHBhcmFtIHJvdXRlclxuICAgKiBAcGFyYW0gbmd4VWlMb2FkZXJTZXJ2aWNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IE5neFVpTG9hZGVyUm91dGVyTW9kdWxlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTkdYX1VJX0xPQURFUl9ST1VURVJfQ09ORklHX1RPS0VOKSBjb25maWc6IE5neFVpTG9hZGVyUm91dGVyQ29uZmlnLFxuICAgIHJvdXRlcjogUm91dGVyLFxuICAgIG5neFVpTG9hZGVyU2VydmljZTogTmd4VWlMb2FkZXJTZXJ2aWNlKSB7XG5cbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tuZ3gtdWktbG9hZGVyXSAtIE5neFVpTG9hZGVyUm91dGVyTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJdCBzaG91bGQgYmUgaW1wb3J0ZWQgaW4gdGhlIHJvb3QgYEFwcE1vZHVsZWAgb25seSEnKTtcbiAgICB9XG5cbiAgICBsZXQgZGVmYXVsdENvbmZpZzogTmd4VWlMb2FkZXJSb3V0ZXJDb25maWcgPSB7XG4gICAgICBzaG93Rm9yZWdyb3VuZDogdHJ1ZVxuICAgIH07XG5cbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBkZWZhdWx0Q29uZmlnID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuICAgIH1cblxuICAgIHJvdXRlci5ldmVudHNcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHtcbiAgICAgICAgICBpZiAoZGVmYXVsdENvbmZpZy5zaG93Rm9yZWdyb3VuZCkge1xuICAgICAgICAgICAgbmd4VWlMb2FkZXJTZXJ2aWNlLnN0YXJ0KFJPVVRFUl9MT0FERVJfSUQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZ3hVaUxvYWRlclNlcnZpY2Uuc3RhcnRCYWNrZ3JvdW5kKFJPVVRFUl9MT0FERVJfSUQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQgfHwgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsIHx8IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yKSB7XG4gICAgICAgICAgaWYgKGRlZmF1bHRDb25maWcuc2hvd0ZvcmVncm91bmQpIHtcbiAgICAgICAgICAgIG5neFVpTG9hZGVyU2VydmljZS5zdG9wKFJPVVRFUl9MT0FERVJfSUQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZ3hVaUxvYWRlclNlcnZpY2Uuc3RvcEJhY2tncm91bmQoUk9VVEVSX0xPQURFUl9JRCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFVpTG9hZGVySHR0cENvbmZpZyB9IGZyb20gJy4vbmd4LXVpLWxvYWRlci1odHRwLWNvbmZpZyc7XG5cbi8qKlxuICogSW5qZWN0aW9uIHRva2VuIGZvciBuZ3gtdWktbG9hZGVyLWh0dHAgY29uZmlndXJhdGlvblxuICovXG5leHBvcnQgY29uc3QgTkdYX1VJX0xPQURFUl9IVFRQX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOZ3hVaUxvYWRlckh0dHBDb25maWc+KCduZ3hVaUxvYWRlckh0dHBDdXN0b20uY29uZmlnJyk7XG4iLCIvKipcbiAqIEh0dHAgbG9hZGVyIGlkXG4gKi9cbmV4cG9ydCBjb25zdCBIVFRQX0xPQURFUl9JRCA9ICckX2h0dHAtbG9hZGVyJztcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciwgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5neFVpTG9hZGVyU2VydmljZSB9IGZyb20gJy4uL2NvcmUvbmd4LXVpLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE5HWF9VSV9MT0FERVJfSFRUUF9DT05GSUdfVE9LRU4gfSBmcm9tICcuL25neC11aS1sb2FkZXItaHR0cC1jb25maWcudG9rZW4nO1xuaW1wb3J0IHsgTmd4VWlMb2FkZXJIdHRwQ29uZmlnIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWh0dHAtY29uZmlnJztcbmltcG9ydCB7IEhUVFBfTE9BREVSX0lEIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWh0dHAuY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neFVpTG9hZGVySHR0cEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuICBwcml2YXRlIGNvdW50OiBudW1iZXI7XG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZzogTmd4VWlMb2FkZXJIdHRwQ29uZmlnO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqIEBwYXJhbSBuZ3hVaUxvYWRlclNlcnZpY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTkdYX1VJX0xPQURFUl9IVFRQX0NPTkZJR19UT0tFTikgY29uZmlnOiBOZ3hVaUxvYWRlckh0dHBDb25maWcsXG4gICAgcHJpdmF0ZSBuZ3hVaUxvYWRlclNlcnZpY2U6IE5neFVpTG9hZGVyU2VydmljZSkge1xuXG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy5kZWZhdWx0Q29uZmlnID0ge1xuICAgICAgc2hvd0ZvcmVncm91bmQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGlmIChjb25maWcpIHtcbiAgICAgIGlmIChjb25maWcuZXhjbHVkZSkge1xuICAgICAgICBjb25maWcuZXhjbHVkZSA9IGNvbmZpZy5leGNsdWRlLm1hcCh1cmwgPT4gdXJsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWZhdWx0Q29uZmlnID0geyAuLi50aGlzLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZyB9O1xuICAgIH1cbiAgfVxuXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGlmICh0aGlzLmRlZmF1bHRDb25maWcuZXhjbHVkZSkge1xuICAgICAgLy8gZG8gbm90IHNob3cgdGhlIGxvYWRlciBmb3IgYXBpIHVybCBpbiB0aGUgYGV4Y2x1ZGVgIGxpc3RcbiAgICAgIGlmICh0aGlzLmRlZmF1bHRDb25maWcuZXhjbHVkZS5maW5kSW5kZXgodXJsID0+IHJlcS51cmwudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHVybCkpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvdW50Kys7XG4gICAgaWYgKHRoaXMuZGVmYXVsdENvbmZpZy5zaG93Rm9yZWdyb3VuZCkge1xuICAgICAgaWYgKCF0aGlzLm5neFVpTG9hZGVyU2VydmljZS5oYXNGb3JlZ3JvdW5kKEhUVFBfTE9BREVSX0lEKSkge1xuICAgICAgICB0aGlzLm5neFVpTG9hZGVyU2VydmljZS5zdGFydChIVFRQX0xPQURFUl9JRCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5uZ3hVaUxvYWRlclNlcnZpY2UuaGFzQmFja2dyb3VuZChIVFRQX0xPQURFUl9JRCkpIHtcbiAgICAgICAgdGhpcy5uZ3hVaUxvYWRlclNlcnZpY2Uuc3RhcnRCYWNrZ3JvdW5kKEhUVFBfTE9BREVSX0lEKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKS5waXBlKGZpbmFsaXplKCgpID0+IHtcbiAgICAgIHRoaXMuY291bnQtLTtcbiAgICAgIGlmICh0aGlzLmNvdW50ID09PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRDb25maWcuc2hvd0ZvcmVncm91bmQpIHtcbiAgICAgICAgICB0aGlzLm5neFVpTG9hZGVyU2VydmljZS5zdG9wKEhUVFBfTE9BREVSX0lEKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm5neFVpTG9hZGVyU2VydmljZS5zdG9wQmFja2dyb3VuZChIVFRQX0xPQURFUl9JRCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBOZ3hVaUxvYWRlckh0dHBJbnRlcmNlcHRvciB9IGZyb20gJy4vbmd4LXVpLWxvYWRlci1odHRwLmludGVyY2VwdG9yJztcbmltcG9ydCB7IE5neFVpTG9hZGVySHR0cENvbmZpZyB9IGZyb20gJy4vbmd4LXVpLWxvYWRlci1odHRwLWNvbmZpZyc7XG5pbXBvcnQgeyBOR1hfVUlfTE9BREVSX0hUVFBfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi9uZ3gtdWktbG9hZGVyLWh0dHAtY29uZmlnLnRva2VuJztcblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogTmd4VWlMb2FkZXJIdHRwSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4VWlMb2FkZXJIdHRwTW9kdWxlIHtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIHBhcmVudE1vZHVsZSBvcHRpb25hbFxuICAgKi9cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBOZ3hVaUxvYWRlckh0dHBNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tuZ3gtdWktbG9hZGVyXSAtIE5neFVpTG9hZGVySHR0cE1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSXQgc2hvdWxkIGJlIGltcG9ydGVkIGluIHRoZSByb290IGBBcHBNb2R1bGVgIG9ubHkhJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGZvclJvb3RcbiAgICogQHBhcmFtIGh0dHBDb25maWcgQ29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJucyBBIG1vZHVsZSB3aXRoIGl0cyBwcm92aWRlciBkZXBlbmRlbmNpZXNcbiAgICovXG4gIHN0YXRpYyBmb3JSb290KGh0dHBDb25maWc6IE5neFVpTG9hZGVySHR0cENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4VWlMb2FkZXJIdHRwTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBOR1hfVUlfTE9BREVSX0hUVFBfQ09ORklHX1RPS0VOLFxuICAgICAgICAgIHVzZVZhbHVlOiBodHRwQ29uZmlnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiREVMQVkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUlFLG1CQUFvQixxQkFBcUI7SUFDekMsVUFBVyxXQUFXO0lBQ3RCLG1CQUFvQixxQkFBcUI7SUFDekMsK0JBQWdDLG1DQUFtQztJQUNuRSxzQkFBdUIseUJBQXlCO0lBQ2hELGFBQWMsY0FBYztJQUM1QixRQUFTLFFBQVE7SUFDakIsVUFBVyxXQUFXO0lBQ3RCLGNBQWUsZUFBZTtJQUM5QixjQUFlLGVBQWU7SUFDOUIsYUFBYyxjQUFjO0lBQzVCLE9BQVEsT0FBTztJQUNmLGlCQUFrQixrQkFBa0I7SUFDcEMsc0JBQXVCLHdCQUF3QjtJQUMvQyx5QkFBMEIsNEJBQTRCO0lBQ3RELDhCQUErQixrQ0FBa0M7SUFDakUsZUFBZ0IsZ0JBQWdCO0lBQ2hDLGdCQUFpQixrQkFBa0I7SUFDbkMsY0FBZSxlQUFlO0lBQzlCLGFBQWMsY0FBYztJQUM1QixjQUFlLGVBQWU7SUFDOUIsZ0JBQWlCLGlCQUFpQjs7OztJQU9sQyxjQUFlLGVBQWU7SUFDOUIsWUFBYSxhQUFhO0lBQzFCLGFBQWMsY0FBYztJQUM1QixjQUFlLGVBQWU7SUFDOUIsWUFBYSxhQUFhO0lBQzFCLGFBQWMsY0FBYztJQUM1QixXQUFZLFlBQVk7SUFDeEIsU0FBVSxVQUFVO0lBQ3BCLFVBQVcsV0FBVzs7OztJQU90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

/***/ })

}]);
//# sourceMappingURL=content-Change-Password-Change-Password-module~content-SN-Search-SN-Search-module~content-areas-area~eb37c7f0.js.map