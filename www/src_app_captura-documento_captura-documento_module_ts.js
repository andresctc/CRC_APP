"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_captura-documento_captura-documento_module_ts"],{

/***/ 6264:
/*!***********************************************************************!*\
  !*** ./src/app/captura-documento/captura-documento-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapturaDocumentoPageRoutingModule": () => (/* binding */ CapturaDocumentoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _captura_documento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./captura-documento.page */ 8033);




const routes = [
    {
        path: '',
        component: _captura_documento_page__WEBPACK_IMPORTED_MODULE_0__.CapturaDocumentoPage
    }
];
let CapturaDocumentoPageRoutingModule = class CapturaDocumentoPageRoutingModule {
};
CapturaDocumentoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CapturaDocumentoPageRoutingModule);



/***/ }),

/***/ 7572:
/*!***************************************************************!*\
  !*** ./src/app/captura-documento/captura-documento.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapturaDocumentoPageModule": () => (/* binding */ CapturaDocumentoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _captura_documento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./captura-documento-routing.module */ 6264);
/* harmony import */ var _captura_documento_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./captura-documento.page */ 8033);







let CapturaDocumentoPageModule = class CapturaDocumentoPageModule {
};
CapturaDocumentoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _captura_documento_routing_module__WEBPACK_IMPORTED_MODULE_0__.CapturaDocumentoPageRoutingModule
        ],
        declarations: [_captura_documento_page__WEBPACK_IMPORTED_MODULE_1__.CapturaDocumentoPage]
    })
], CapturaDocumentoPageModule);



/***/ }),

/***/ 8033:
/*!*************************************************************!*\
  !*** ./src/app/captura-documento/captura-documento.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapturaDocumentoPage": () => (/* binding */ CapturaDocumentoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _captura_documento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./captura-documento.page.html?ngResource */ 5787);
/* harmony import */ var _captura_documento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./captura-documento.page.scss?ngResource */ 6256);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _servicios_utilitarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../servicios/utilitarios.service */ 7978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/camera-preview/ngx */ 8782);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 1898);








let CapturaDocumentoPage = class CapturaDocumentoPage {
    constructor(cameraPreview, screenOrientation, utils, router) {
        this.cameraPreview = cameraPreview;
        this.screenOrientation = screenOrientation;
        this.utils = utils;
        this.router = router;
        this.colorEffect = 'none';
        this.setZoom = 1;
        this.flashMode = 'off';
        this.isToBack = false;
        this.opcCamara = {
            x: (window.screen.width / 6) + 50,
            y: (window.screen.height / 6),
            width: window.screen.width - (window.screen.width / 2),
            height: window.screen.width - (window.screen.width / 8),
            toBack: false,
            previewDrag: false,
            tapPhoto: false,
            tapFocus: true,
            storeToFile: false,
            camera: 'rear',
            disableExifHeaderStripping: false,
            alpha: 1,
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.utils.pasofoto === '1') {
            this.cara = 'Cara 1';
        }
        if (this.utils.pasofoto === '2') {
            this.cara = 'Cara 2';
        }
        if (this.utils.pasofoto === '3') {
            this.cara = 'Documento Autorización';
            this.opcCamara.width = this.opcCamara.width + 140;
            this.opcCamara.x = this.opcCamara.x - 90;
            this.opcCamara.height = this.opcCamara.height + 110;
            this.opcCamara.y = this.opcCamara.y - 40;
        }
        console.log(this.cara);
        this.cameraPreview.stopCamera();
        // console.log(this.screenOrientation.type);
        this.iniciarcamara();
    }
    cara1() {
        this.cameraPreview.stopCamera().then(() => {
            this.isToBack = false;
            this.cameraPreview.startCamera(this.opcCamara);
        });
    }
    cara2() {
        this.cameraPreview.stopCamera().then(() => {
            this.isToBack = false;
            this.cameraPreview.startCamera(this.opcCamara);
        });
    }
    startCameraBelow() {
        this.cameraPreview.stopCamera().then(() => {
            this.isToBack = true;
            this.cameraPreview.startCamera(this.opcCamara);
        });
    }
    iniciarcamara() {
        this.cameraPreview.startCamera(this.opcCamara);
    }
    stopCamera() {
        this.cameraPreview.stopCamera();
    }
    tomarFoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // this.cameraPreview.takePicture({
            this.cameraPreview.takeSnapshot({
                width: 640,
                height: 480,
                quality: 85
            }).then((imageData) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                // console.log(this.utils.imgFront);
                if (this.utils.pasofoto === '1') {
                    this.utils.imgFront = 'data:image/jpg;base64,' + imageData;
                    this.utils.rotateBase64Img(this.utils.imgFront, 90, 1);
                }
                if (this.utils.pasofoto === '2') {
                    this.utils.imgBack = 'data:image/jpg;base64,' + imageData;
                    this.utils.rotateBase64Img(this.utils.imgBack, 90, 2);
                }
                if (this.utils.pasofoto === '3') {
                    this.utils.imgDocumento = 'data:image/jpg;base64,' + imageData;
                }
            }), (err) => {
                console.log(err);
                // this.utils.imgFront = 'assets/img/test.jpg';
            });
            this.hide();
            yield this.utils.sleep(1500);
            if (this.utils.imgFront !== '') {
                // console.log(this.utils.imgFront);
                this.utils.paso2 = false;
            }
            if (this.utils.imgBack !== '') {
                // console.log(this.utils.imgBack);
                this.utils.paso3 = false;
            }
            if (this.utils.imgDocumento !== '') {
                // console.log(this.utils.imgBack);
                this.utils.paso4 = false;
            }
            // console.log(this.utils.paso2);
            this.hide();
            this.router.navigateByUrl('menu');
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
            // console.log(sizes);
        }, (err) => {
            // console.log(err);
        });
    }
    ngOnDestroy() {
        this.screenOrientation.unlock();
        // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    prendeApagaLinterna() {
        if (this.flashMode === 'off') {
            this.flashMode = 'torch';
        }
        else {
            this.flashMode = 'off';
        }
        // console.log(this.flashMode);
        this.changeFlashMode();
    }
};
CapturaDocumentoPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__.CameraPreview },
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__.ScreenOrientation },
    { type: _servicios_utilitarios_service__WEBPACK_IMPORTED_MODULE_2__.UtilitariosService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
CapturaDocumentoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-captura-documento',
        template: _captura_documento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_captura_documento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CapturaDocumentoPage);



/***/ }),

/***/ 6256:
/*!**************************************************************************!*\
  !*** ./src/app/captura-documento/captura-documento.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "html,\nbody,\nion-app,\ndiv.nav-decor,\n.ion-content,\n.app-root,\nion-modal,\n.ion-card {\n  background-color: transparent !important;\n}\n\napp-captura-documento ion-content {\n  --background: transparent;\n  padding-inline-end: 40px;\n}\n\n.titel {\n  background-color: rgba(255, 255, 255, 0.603);\n  color: black;\n  padding: 8px;\n  margin-bottom: 2px;\n  display: inline-block;\n  text-align: center;\n  font-weight: bold;\n}\n\n@media screen and (min-width: 768px) {\n  ion-button {\n    height: 2em;\n  }\n\n  .title {\n    font-size: 1.6em;\n  }\n\n  .textos {\n    font-size: 1.5em;\n  }\n\n  .overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 10;\n  }\n\n  .cameraPreview {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n  }\n\n  #capture {\n    position: absolute;\n    bottom: 30px;\n    left: calc(50% - 25px);\n    width: 50px;\n    height: 50px;\n    z-index: 11;\n  }\n\n  #close {\n    position: absolute;\n    bottom: 30px;\n    left: calc(50% - 175px);\n    width: 50px;\n    height: 50px;\n    z-index: 11;\n  }\n\n  #flip {\n    position: absolute;\n    bottom: 30px;\n    left: calc(50% + 125px);\n    width: 50px;\n    height: 50px;\n    z-index: 11;\n  }\n\n  #close::part(native) {\n    border-radius: 30px;\n  }\n\n  #capture::part(native) {\n    border-radius: 30px;\n  }\n\n  #flip::part(native) {\n    border-radius: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcHR1cmEtZG9jdW1lbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7RUFRRSx3Q0FBQTtBQUNGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtBQUFGOztBQUdBO0VBQ0UsNENBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFFRTtJQUNFLFdBQUE7RUFERjs7RUFJQTtJQUNFLGdCQUFBO0VBREY7O0VBSUE7SUFDRSxnQkFBQTtFQURGOztFQU9GO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUFKQTs7RUFPRjtJQUNFLGFBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUFKQTs7RUFPRjtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VBSkE7O0VBT0Y7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQUpBOztFQU9GO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUFKQTs7RUFPRjtJQUNFLG1CQUFBO0VBSkE7O0VBT0Y7SUFDRSxtQkFBQTtFQUpBOztFQU9GO0lBQ0UsbUJBQUE7RUFKQTtBQUNGIiwiZmlsZSI6ImNhcHR1cmEtZG9jdW1lbnRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXHJcbmJvZHksXHJcbmlvbi1hcHAsXHJcbmRpdi5uYXYtZGVjb3IsXHJcbi5pb24tY29udGVudCxcclxuLmFwcC1yb290LFxyXG5pb24tbW9kYWwsXHJcbi5pb24tY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbmFwcC1jYXB0dXJhLWRvY3VtZW50byBpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nLWlubGluZS1lbmQ6IDQwcHg7XHJcbn1cclxuXHJcbi50aXRlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYwMyk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gIH1cclxuXHJcbiAgLnRleHRvcyB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uY2FtZXJhUHJldmlldyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuI2NhcHR1cmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDMwcHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSAyNXB4KTtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgei1pbmRleDogMTE7XHJcbn1cclxuXHJcbiNjbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMzBweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDE3NXB4KTtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgei1pbmRleDogMTE7XHJcbn1cclxuXHJcbiNmbGlwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlICsgMTI1cHgpO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB6LWluZGV4OiAxMTtcclxufVxyXG5cclxuI2Nsb3NlOjpwYXJ0KG5hdGl2ZSkge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbiNjYXB0dXJlOjpwYXJ0KG5hdGl2ZSkge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbiNmbGlwOjpwYXJ0KG5hdGl2ZSkge1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcblxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 5787:
/*!**************************************************************************!*\
  !*** ./src/app/captura-documento/captura-documento.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"codensa\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"hide()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"title\">\n      {{ cara }}\n    </ion-title>\n    <ion-button (click)=\"prendeApagaLinterna()\" slot=\"end\" color=\"codensa\">\n      <ion-icon slot=\"icon-only\" name=\"flash\" *ngIf=\"flashMode === 'off'\"></ion-icon>\n      <ion-icon slot=\"icon-only\" name=\"flash-off\" *ngIf=\"flashMode === 'torch'\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content [fullscreen]=\"true\" [ngClass]=\"{'custom-ion-content': isToBack}\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content> -->\n\n<ion-content>\n\n</ion-content>\n\n\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button color=\"codensa\" (click)=\"tomarFoto()\" expand=\"full\" fill=\"solid\" class=\"textos\">\n      <ion-icon slot=\"end\" name=\"camera\"></ion-icon>\n      Tomar Foto\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_captura-documento_captura-documento_module_ts.js.map