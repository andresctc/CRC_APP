"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ 2340);
/* harmony import */ var _awesome_cordova_plugins_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/camera-preview/ngx */ 8782);
/* harmony import */ var _servicios_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../servicios/auth-guard.service */ 2364);
/* harmony import */ var _servicios_utilitarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../servicios/utilitarios.service */ 7978);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 1898);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _servicios_general_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../servicios/general.service */ 3831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);












let LoginPage = class LoginPage {
    constructor(general, utils, router, screenOrientation, guard, cameraPreview, modalCtrl) {
        this.general = general;
        this.utils = utils;
        this.router = router;
        this.screenOrientation = screenOrientation;
        this.guard = guard;
        this.cameraPreview = cameraPreview;
        this.modalCtrl = modalCtrl;
        this.objLogin = {
            usuario: '',
            clave: ''
        };
        this.appVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appversion;
        this.passwordType = 'password';
        this.passwordShown = false;
    }
    ngOnInit() {
        // console;
    }
    verPassword() {
        if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordType = 'password';
        }
        else {
            this.passwordShown = true;
            this.passwordType = 'text';
        }
    }
    ionViewWillEnter() {
        this.cameraPreview.hide();
        // this.objLogin.usuario = 'carango';
        // this.objLogin.clave = 'Crc201902*';
    }
    iniciarSesion() {
        this.general.postMethod('tableta/login/', this.objLogin)
            .subscribe(resp => {
            // console.log(resp.hasErrors);
            let lgin;
            lgin = resp;
            if (lgin.hasErrors === false) {
                console.log(lgin);
                console.log(lgin.LoginResponse.token);
                this.utils.tokenID = lgin.LoginResponse.token;
                this.utils.punto = lgin.LoginResponse.punto;
                this.utils.usuario = lgin.LoginResponse.usuario;
                this.utils.sessionid = lgin.LoginResponse.sessionid;
                this.router.navigate(['menu']);
                this.guard.authState.next(true);
            }
            else {
                alert(lgin.errorMessage);
                this.guard.authState.next(false);
            }
        });
        // console.log(this.guard.authState);
    }
};
LoginPage.ctorParameters = () => [
    { type: _servicios_general_service__WEBPACK_IMPORTED_MODULE_7__.GeneralService },
    { type: _servicios_utilitarios_service__WEBPACK_IMPORTED_MODULE_5__.UtilitariosService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__.ScreenOrientation },
    { type: _servicios_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__.AuthGuardService },
    { type: _awesome_cordova_plugins_camera_preview_ngx__WEBPACK_IMPORTED_MODULE_3__.CameraPreview },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "@media screen and (min-width: 768px) {\n  .textos {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFO0lBQ0UsZUFBQTtFQURGO0FBQ0YiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gIC50ZXh0b3Mge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"codensa\">\n    <ion-title>App Pre-Filtro</ion-title>\n    <ion-button slot=\"end\" fill=\"clear\" id=\"acercaDe\">\n      <ion-icon slot=\"icon-only\" name=\"information-circle\" color=\"light\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <br/>\n  <ion-card>\n    <br/>\n    <ion-card-header>\n      <ion-img src=\"..\\..\\assets\\img\\CreditoFacilCodensa.jpeg\"></ion-img>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\" class=\"textos\">Usuario:</ion-label>\n        <ion-input type=\"text\" required [(ngModel)]=\"objLogin.usuario\" class=\"textos\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\" class=\"textos\">Password:</ion-label>\n        <ion-input type=\"password\" required [(ngModel)]=\"objLogin.clave\" class=\"textos\" [type]=\"passwordType\" autosize></ion-input>\n        <ion-icon name=\"eye\" slot=\"end\" [color]=\"passwordShown === true ? 'dark' : 'medium'\" (click)=\"verPassword()\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\"></ion-item>\n      <ion-button color=\"codensa\" expand=\"block\" (click)=\"iniciarSesion()\" class=\"textos\">\n        <ion-icon slot=\"start\" name=\"people\"></ion-icon>\n        Ingresar\n      </ion-button>\n      <br/><br/>\n      <ion-item class=\"ion-text-center\" lines=\"none\">\n        <ion-label color=\"dark\"> <b>APP Versión : {{ appVersion }}</b></ion-label>\n      </ion-item>\n    </ion-card-content>\n\n  </ion-card>\n  <br/><br/>\n\n\n\n\n  <ion-popover trigger=\"acercaDe\" [dismissOnSelect]=\"true\">\n    <ng-template>\n      <ion-content style=\"width: 345px;\">\n        <ion-item [button]=\"true\" [detail]=\"false\" lines=\"none\">\n          <ion-label>Desarrollado por: </ion-label>\n        </ion-item>\n        <ion-item [button]=\"true\" [detail]=\"false\">\n          <ion-label style=\"font-size: 14px;\"><b>LordDenihol</b>(Ing. Daniel Salamanca)</ion-label>\n        </ion-item>\n\n        <ion-item [button]=\"true\" [detail]=\"false\">\n          <ion-label style=\"font-size: 14px;\">Ing. Andrés Torres</ion-label>\n        </ion-item>\n\n        <ion-item [button]=\"true\" [detail]=\"false\" lines=\"none\" class=\"ion-text-center\" style=\" margin-left: -70px\">\n          <ion-label style=\"font-size: 14px; margin-left: -30px;\"><b>CRC OUTSOURCING</b></ion-label>\n        </ion-item>\n        <ion-item [button]=\"true\" [detail]=\"false\" style=\"margin-top: -18px; margin-left: -80px\" class=\"ion-text-center\" >\n          <ion-label style=\"font-size: 14px; \">© 2022 All rights reserved</ion-label>\n        </ion-item>\n        <ion-item [button]=\"true\" [detail]=\"false\" lines=\"none\" class=\"ion-text-center\" style=\" margin-left: -70px\">\n          <ion-label style=\"font-size: 14px; margin-left: -30px;\">APP Versión: {{appVersion}}</ion-label>\n        </ion-item>\n      </ion-content>\n    </ng-template>\n  </ion-popover>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"dark\" >\n    <ion-title style=\"font-size: 14px;\">CRC OUTSOURCING © 2022 All rights reserved</ion-title>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map