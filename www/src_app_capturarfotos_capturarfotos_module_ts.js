"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_capturarfotos_capturarfotos_module_ts"],{

/***/ 5637:
/*!***************************************************************!*\
  !*** ./src/app/capturarfotos/capturarfotos-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapturarfotosPageRoutingModule": () => (/* binding */ CapturarfotosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _capturarfotos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capturarfotos.page */ 195);




const routes = [
    {
        path: '',
        component: _capturarfotos_page__WEBPACK_IMPORTED_MODULE_0__.CapturarfotosPage
    }
];
let CapturarfotosPageRoutingModule = class CapturarfotosPageRoutingModule {
};
CapturarfotosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CapturarfotosPageRoutingModule);



/***/ }),

/***/ 1005:
/*!*******************************************************!*\
  !*** ./src/app/capturarfotos/capturarfotos.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapturarfotosPageModule": () => (/* binding */ CapturarfotosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capturarfotos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capturarfotos-routing.module */ 5637);
/* harmony import */ var _capturarfotos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capturarfotos.page */ 195);







let CapturarfotosPageModule = class CapturarfotosPageModule {
};
CapturarfotosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _capturarfotos_routing_module__WEBPACK_IMPORTED_MODULE_0__.CapturarfotosPageRoutingModule
        ],
        declarations: [_capturarfotos_page__WEBPACK_IMPORTED_MODULE_1__.CapturarfotosPage]
    })
], CapturarfotosPageModule);



/***/ }),

/***/ 195:
/*!*****************************************************!*\
  !*** ./src/app/capturarfotos/capturarfotos.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapturarfotosPage": () => (/* binding */ CapturarfotosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _capturarfotos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capturarfotos.page.html?ngResource */ 168);
/* harmony import */ var _capturarfotos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capturarfotos.page.scss?ngResource */ 9868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera-preview/ngx */ 9788);





let CapturarfotosPage = class CapturarfotosPage {
    constructor(cameraPreview) {
        this.cameraPreview = cameraPreview;
        this.colorEffect = 'none';
        this.setZoom = 1;
        this.flashMode = 'off';
        this.isToBack = false;
    }
    ngOnInit() {
    }
    startCameraAbove() {
        this.cameraPreview.stopCamera().then(() => {
            this.isToBack = false;
            this.cameraPreview.startCamera({ x: 80, y: 450, width: 250, height: 300, toBack: false, previewDrag: true, tapPhoto: true });
        });
    }
    startCameraBelow() {
        this.cameraPreview.stopCamera().then(() => {
            this.isToBack = true;
            this.cameraPreview.startCamera({
                x: 0,
                y: 50,
                width: window.screen.width,
                height: window.screen.height,
                camera: 'front',
                tapPhoto: true,
                previewDrag: false,
                toBack: true
            });
        });
    }
    stopCamera() {
        this.cameraPreview.stopCamera();
    }
    takePicture() {
        this.cameraPreview.takePicture({
            width: 1280,
            height: 1280,
            quality: 85
        }).then((imageData) => {
            this.iMAGE_PATH = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            console.log(err);
            this.iMAGE_PATH = 'assets/img/test.jpg';
        });
    }
    switchCamera() {
        this.cameraPreview.switchCamera();
    }
    show() {
        this.cameraPreview.show();
    }
    hide() {
        this.cameraPreview.hide();
    }
    changeColorEffect() {
        this.cameraPreview.setColorEffect(this.colorEffect);
    }
    changeFlashMode() {
        this.cameraPreview.setFlashMode(this.flashMode);
    }
    changeZoom() {
        this.cameraPreview.setZoom(this.setZoom);
    }
    showSupportedPictureSizes() {
        this.cameraPreview.getSupportedPictureSizes().then((sizes) => {
            console.log(sizes);
        }, (err) => {
            console.log(err);
        });
    }
};
CapturarfotosPage.ctorParameters = () => [
    { type: _ionic_native_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_2__.CameraPreview }
];
CapturarfotosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-capturarfotos',
        template: _capturarfotos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_capturarfotos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CapturarfotosPage);



/***/ }),

/***/ 9788:
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic-native/camera-preview/__ivy_ngcc__/ngx/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraPreview": () => (/* binding */ CameraPreview)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 8751);




var CameraPreview = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(CameraPreview, _super);
    function CameraPreview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FOCUS_MODE = {
            FIXED: 'fixed',
            AUTO: 'auto',
            CONTINUOUS: 'continuous',
            CONTINUOUS_PICTURE: 'continuous-picture',
            CONTINUOUS_VIDEO: 'continuous-video',
            EDOF: 'edof',
            INFINITY: 'infinity',
            MACRO: 'macro',
        };
        _this.EXPOSURE_MODE = {
            LOCK: 'lock',
            AUTO: 'auto',
            CONTINUOUS: 'continuous',
            CUSTOM: 'custom',
        };
        _this.FLASH_MODE = {
            OFF: 'off',
            ON: 'on',
            AUTO: 'auto',
            RED_EYE: 'red-eye',
            TORCH: 'torch',
        };
        _this.COLOR_EFFECT = {
            AQUA: 'aqua',
            BLACKBOARD: 'blackboard',
            MONO: 'mono',
            NEGATIVE: 'negative',
            NONE: 'none',
            POSTERIZE: 'posterize',
            SEPIA: 'sepia',
            SOLARIZE: 'solarize',
            WHITEBOARD: 'whiteboard',
        };
        _this.CAMERA_DIRECTION = {
            BACK: 'back',
            FRONT: 'front',
        };
        return _this;
    }
    CameraPreview.prototype.startCamera = function (options) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "startCamera", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.startRecordVideo = function (options) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "startRecordVideo", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.stopCamera = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "stopCamera", {}, arguments); };
    CameraPreview.prototype.stopRecordVideo = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "stopRecordVideo", {}, arguments); };
    CameraPreview.prototype.switchCamera = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "switchCamera", {}, arguments); };
    CameraPreview.prototype.hide = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hide", {}, arguments); };
    CameraPreview.prototype.show = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "show", {}, arguments); };
    CameraPreview.prototype.takePicture = function (options) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "takePicture", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.takeSnapshot = function (options) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "takeSnapshot", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.setColorEffect = function (effect) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setColorEffect", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.setZoom = function (zoom) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setZoom", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getMaxZoom = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getMaxZoom", {}, arguments); };
    CameraPreview.prototype.getZoom = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getZoom", {}, arguments); };
    CameraPreview.prototype.setPreviewSize = function (dimensions) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setPreviewSize", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getFocusMode = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getFocusMode", {}, arguments); };
    CameraPreview.prototype.setFocusMode = function (focusMode) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setFocusMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getSupportedFocusModes = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getSupportedFocusModes", {}, arguments); };
    CameraPreview.prototype.getFlashMode = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getFlashMode", {}, arguments); };
    CameraPreview.prototype.setFlashMode = function (flashMode) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setFlashMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getSupportedFlashModes = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getSupportedFlashModes", {}, arguments); };
    CameraPreview.prototype.getSupportedPictureSizes = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getSupportedPictureSizes", {}, arguments); };
    CameraPreview.prototype.getExposureMode = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getExposureMode", {}, arguments); };
    CameraPreview.prototype.getExposureModes = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getExposureModes", {}, arguments); };
    CameraPreview.prototype.setExposureMode = function (lock) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setExposureMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getExposureCompensation = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getExposureCompensation", {}, arguments); };
    CameraPreview.prototype.setExposureCompensation = function (exposureCompensation) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setExposureCompensation", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getExposureCompensationRange = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getExposureCompensationRange", {}, arguments); };
    CameraPreview.prototype.tapToFocus = function (xPoint, yPoint) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "tapToFocus", {}, arguments); };
    CameraPreview.prototype.onBackButton = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "onBackButton", {}, arguments); };
    CameraPreview.prototype.getHorizontalFOV = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getHorizontalFOV", {}, arguments); };
    CameraPreview.prototype.getCameraCharacteristics = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getCameraCharacteristics", {}, arguments); };
    CameraPreview.pluginName = "CameraPreview";
    CameraPreview.plugin = "cordova-plugin-camera-preview";
    CameraPreview.pluginRef = "CameraPreview";
    CameraPreview.repo = "https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview";
    CameraPreview.platforms = ["Android", "iOS"];
CameraPreview.ɵfac = /*@__PURE__*/ function () { var ɵCameraPreview_BaseFactory; return function CameraPreview_Factory(t) { return (ɵCameraPreview_BaseFactory || (ɵCameraPreview_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](CameraPreview)))(t || CameraPreview); }; }();
CameraPreview.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CameraPreview, factory: function (t) { return CameraPreview.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CameraPreview, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return CameraPreview;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));




/***/ }),

/***/ 9868:
/*!******************************************************************!*\
  !*** ./src/app/capturarfotos/capturarfotos.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXB0dXJhcmZvdG9zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 168:
/*!******************************************************************!*\
  !*** ./src/app/capturarfotos/capturarfotos.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<!-- home.page.html -->\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Ionic 5 Camera Preview App\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" [ngClass]=\"{'custom-ion-content': isToBack}\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"primary\" (click)=\"startCameraAbove()\">Start Front</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"primary\" (click)=\"startCameraBelow()\">Start Back</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"danger\" (click)=\"stopCamera()\">Stop Camera</ion-button>\n      </ion-col>\n      <ion-col>\n\n        <ion-label>Color Effect:</ion-label>\n        <ion-select interface=\"popover\" placeholder=\"Select Effect\" [(ngModel)]=\"colorEffect\"\n          (ionChange)=\"changeColorEffect()\">\n          <ion-select-option value=\"none\">none</ion-select-option>\n          <ion-select-option value=\"aqua\">aqua</ion-select-option>\n          <ion-select-option value=\"blackboard\">blackboard</ion-select-option>\n          <ion-select-option value=\"mono\">mono</ion-select-option>\n          <ion-select-option value=\"negative\">negative</ion-select-option>\n          <ion-select-option value=\"posterize\">posterize</ion-select-option>\n          <ion-select-option value=\"sepia\">sepia</ion-select-option>\n          <ion-select-option value=\"solarize\">solarize</ion-select-option>\n          <ion-select-option value=\"whiteboard\">whiteboard</ion-select-option>\n        </ion-select>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"success\" (click)=\"takePicture()\">Take Picture</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"warning\" (click)=\"switchCamera()\">Switch</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"danger\" (click)=\"hide()\">Hide</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"tertiary\" (click)=\"show()\">Show</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"primary\" (click)=\"showSupportedPictureSizes()\">Supported Sizes</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>Flash:</ion-label>\n        <ion-select interface=\"popover\" placeholder=\"Select Flash\" [(ngModel)]=\"flashMode\"\n          (ionChange)=\"changeFlashMode()\">\n          <ion-select-option value=\"off\">Off</ion-select-option>\n          <ion-select-option value=\"on\">On</ion-select-option>\n          <ion-select-option value=\"auto\">Auto</ion-select-option>\n          <ion-select-option value=\"torch\">Torch</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col>\n        <ion-label>Zoom:</ion-label>\n        <ion-range min=\"1\" max=\"100\" pin color=\"secondary\" [(ngModel)]=\"setZoom\" (ionChange)=\"changeZoom()\">\n          <ion-icon slot=\"start\" size=\"small\" name=\"search-outline\"></ion-icon>\n          <ion-icon slot=\"end\" name=\"search-outline\"></ion-icon>\n        </ion-range>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"iMAGE_PATH\">\n      <ion-col>\n        <img [src]=\"iMAGE_PATH\">\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_capturarfotos_capturarfotos_module_ts.js.map