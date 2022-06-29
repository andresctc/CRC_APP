"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_img-paso_img-paso_module_ts"],{

/***/ 6433:
/*!*****************************************************!*\
  !*** ./src/app/img-paso/img-paso-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgPasoPageRoutingModule": () => (/* binding */ ImgPasoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _img_paso_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img-paso.page */ 4553);




const routes = [
    {
        path: '',
        component: _img_paso_page__WEBPACK_IMPORTED_MODULE_0__.ImgPasoPage
    }
];
let ImgPasoPageRoutingModule = class ImgPasoPageRoutingModule {
};
ImgPasoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImgPasoPageRoutingModule);



/***/ }),

/***/ 3022:
/*!*********************************************!*\
  !*** ./src/app/img-paso/img-paso.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgPasoPageModule": () => (/* binding */ ImgPasoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _img_paso_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img-paso-routing.module */ 6433);
/* harmony import */ var _img_paso_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img-paso.page */ 4553);







let ImgPasoPageModule = class ImgPasoPageModule {
};
ImgPasoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _img_paso_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImgPasoPageRoutingModule
        ],
        declarations: [_img_paso_page__WEBPACK_IMPORTED_MODULE_1__.ImgPasoPage]
    })
], ImgPasoPageModule);



/***/ }),

/***/ 4553:
/*!*******************************************!*\
  !*** ./src/app/img-paso/img-paso.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgPasoPage": () => (/* binding */ ImgPasoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _img_paso_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img-paso.page.html?ngResource */ 8969);
/* harmony import */ var _img_paso_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img-paso.page.scss?ngResource */ 8599);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 1898);
/* harmony import */ var _servicios_utilitarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../servicios/utilitarios.service */ 7978);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);







let ImgPasoPage = class ImgPasoPage {
    constructor(router, utils, screenOrientation) {
        this.router = router;
        this.utils = utils;
        this.screenOrientation = screenOrientation;
        this.width = window.screen.width - (window.screen.width / 2) + 100;
        this.height = window.screen.width - (window.screen.width / 8) + 200;
        this.imagen = './assets/img/cara1.jpeg';
    }
    ngOnInit() {
        // TODO document why this method 'ngOnInit' is empty
    }
    ionViewWillEnter() {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        if (this.utils.pasofoto === '1') {
            this.imagen = './assets/img/cara1.jpeg';
        }
        if (this.utils.pasofoto === '2') {
            this.imagen = './assets/img/cara2.jpeg';
        }
    }
    irTomarFoto() {
        this.router.navigateByUrl('captura-documento');
    }
};
ImgPasoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _servicios_utilitarios_service__WEBPACK_IMPORTED_MODULE_3__.UtilitariosService },
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__.ScreenOrientation }
];
ImgPasoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-img-paso',
        template: _img_paso_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_img_paso_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImgPasoPage);



/***/ }),

/***/ 8599:
/*!********************************************************!*\
  !*** ./src/app/img-paso/img-paso.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".padre {\n  /* IMPORTANTE */\n  text-align: center;\n}\n\nimg {\n  display: inline-block;\n  margin-top: -40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltZy1wYXNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6ImltZy1wYXNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRyZSB7XHJcbiAgLyogSU1QT1JUQU5URSAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 8969:
/*!********************************************************!*\
  !*** ./src/app/img-paso/img-paso.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"codensa\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title\">Crédito Fácil CODENSA</ion-title>\r\n    <ion-button id=\"nested-button\" slot=\"end\" fill=\"clear\">\r\n      <ion-icon slot=\"start\" name=\"menu\" color=\"light\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"padre\">\r\n    <img [src]=\"imagen\" [width]=\"width\" [height]=\"height\" alt=\"img\">\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button color=\"codensa\" (click)=\"irTomarFoto()\" expand=\"full\" fill=\"solid\" class=\"textos\">\r\n      Continuar...\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_img-paso_img-paso_module_ts.js.map