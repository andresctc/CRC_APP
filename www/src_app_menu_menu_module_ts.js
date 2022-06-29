"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_menu_menu_module_ts"],{

/***/ 1198:
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageRoutingModule": () => (/* binding */ MenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.page */ 5915);




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_0__.MenuPage
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ 2825:
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageModule": () => (/* binding */ MenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-routing.module */ 1198);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page */ 5915);







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuPageRoutingModule
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_1__.MenuPage]
    })
], MenuPageModule);



/***/ }),

/***/ 5915:
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPage": () => (/* binding */ MenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _menu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.page.html?ngResource */ 1757);
/* harmony import */ var _menu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page.scss?ngResource */ 140);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ 2340);
/* harmony import */ var _servicios_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../servicios/auth-guard.service */ 2364);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 5684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _servicios_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../servicios/general.service */ 3831);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 9048);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 1898);
/* harmony import */ var _servicios_utilitarios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../servicios/utilitarios.service */ 7978);
/* harmony import */ var _awesome_cordova_plugins_ocr_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/ocr/ngx */ 3859);













let MenuPage = class MenuPage {
    constructor(barcodeScanner, utils, screenOrientation, general, router, iab, guard, ocr) {
        this.barcodeScanner = barcodeScanner;
        this.utils = utils;
        this.screenOrientation = screenOrientation;
        this.general = general;
        this.router = router;
        this.iab = iab;
        this.guard = guard;
        this.ocr = ocr;
        this.imgFront = '';
        this.imgBack = '';
        this.imgDocumento = '';
        this.paso2 = true;
        this.paso3 = true;
        this.paso4 = true;
        this.paso5 = true;
        this.urlGo = '';
        this.scanData = {
            numeroCedula: '',
            primerApellido: '',
            segundoApellido: '',
            primerNombre: '',
            segundoNombre: '',
            sexo: '',
            fechaNacimiento: '',
            rh: '',
            nombreCompleto: '',
            ciudadnac: '',
            depatamentonac: '',
            fechaexp: '',
            ciudadexp: '',
            usuario: '',
            punto: '',
            appversion: ''
        };
        this.imgFront = this.utils.imgFront;
        this.imgBack = this.utils.imgBack;
        this.imgDocumento = this.utils.imgDocumento;
        this.paso2 = this.utils.paso2;
        this.paso3 = this.utils.paso3;
        this.paso4 = this.utils.paso4;
        this.paso5 = this.utils.paso4;
    }
    ngOnInit() {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        console.log(this.utils.tokenID);
    }
    ionViewWillEnter() {
        this.imgFront = this.utils.imgFront;
        this.imgBack = this.utils.imgBack;
        this.imgDocumento = this.utils.imgDocumento;
        this.paso2 = this.utils.paso2;
        this.paso3 = this.utils.paso3;
        this.paso4 = this.utils.paso4;
        this.paso5 = this.utils.paso4;
    }
    scanearDocumento() {
        this.options = {
            prompt: 'Escaner de documentos CODENSA',
            preferFrontCamera: false,
            showFlipCameraButton: false,
            showTorchButton: true,
            torchOn: true,
            saveHistory: true,
            resultDisplayDuration: 500,
            formats: 'QR_CODE, PDF_417',
            orientation: 'landscape',
            // deshabilitado de forma predeterminada para que gire con el dispositivo
            disableAnimations: false,
            disableSuccessBeep: false // iOS and Android
        };
        this.barcodeScanner.scan(this.options)
            .then((barcodeData) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const obj = {
                lectura: barcodeData.text
            };
            // console.log(barcodeData);
            this.utils.paso5 = false;
            this.paso5 = false;
            if (this.utils.ciudadexp === '') {
                this.ejecutarOCR(this.utils.imgFront, 1);
                this.ejecutarOCR(this.utils.imgBack, 2);
            }
            this.general.postMethod('tableta/lectura/', obj, true)
                .subscribe(arg => console.log(arg));
            this.scanData = this.utils.extraerDatosDocumentos(barcodeData.text);
            // console.log(this.scanData);
        }), (err) => {
            console.log('Error occured : ' + err);
        });
    }
    enviarDatos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // Se arma el objeto para enviar al web Services
            const dtoEnvio = {
                documento: this.scanData.numeroCedula,
                nombre1: this.scanData.primerNombre,
                nombre2: this.scanData.segundoNombre,
                apellido1: this.scanData.primerApellido,
                apellido2: this.scanData.segundoApellido,
                sexo: this.scanData.sexo,
                gruposang: this.scanData.rh,
                fechanac: this.scanData.fechaNacimiento,
                ciudadnac: this.utils.ciudadnac,
                depatamentonac: this.utils.depatamentonac,
                fechaexp: this.utils.fechaexp,
                ciudadexp: this.utils.ciudadexp,
                usuario: this.utils.usuario,
                punto: this.utils.punto,
                appversion: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appversion
            };
            this.guardarDatos(dtoEnvio);
            // this.reiniciarForm();
        });
    }
    reiniciarForm() {
        this.imgFront = '';
        this.imgBack = '';
        this.imgDocumento = '';
        this.paso2 = true;
        this.paso3 = true;
        this.paso4 = true;
        this.paso5 = true;
        this.scanData.numeroCedula = '';
        this.scanData.primerApellido = '';
        this.scanData.segundoApellido = '';
        this.scanData.primerNombre = '';
        this.scanData.segundoNombre = '';
        this.scanData.sexo = '';
        this.scanData.fechaNacimiento = '';
        this.scanData.rh = '';
        this.scanData.nombreCompleto = '';
        this.scanData.ciudadnac = '';
        this.scanData.depatamentonac = '';
        this.scanData.fechaexp = '';
        this.scanData.ciudadexp = '';
        this.scanData.usuario = '';
        this.scanData.punto = '';
        this.scanData.appversion = '';
        this.utils.limpiarFormulario();
    }
    paso1TomarFoto() {
        this.utils.pasofoto = '1';
        this.router.navigateByUrl('img-paso');
    }
    paso2TomarFoto() {
        this.utils.pasofoto = '2';
        this.router.navigateByUrl('img-paso');
        this.ejecutarOCR(this.utils.imgFront, 1);
    }
    paso3TomarFoto() {
        this.utils.pasofoto = '3';
        if (this.utils.imgBack !== '') {
            this.ejecutarOCR(this.utils.imgBack, 2);
        }
        const dtoEnvio = {
            documento: this.scanData.numeroCedula,
            nombre1: this.scanData.primerNombre,
            nombre2: this.scanData.segundoNombre,
            apellido1: this.scanData.primerApellido,
            apellido2: this.scanData.segundoApellido,
            sexo: this.scanData.sexo,
            gruposang: this.scanData.rh,
            fechanac: this.scanData.fechaNacimiento,
            ciudadnac: this.utils.ciudadnac,
            depatamentonac: this.utils.depatamentonac,
            fechaexp: this.utils.fechaexp,
            ciudadexp: this.utils.ciudadexp,
            usuario: this.utils.usuario,
            punto: this.utils.punto,
            appversion: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appversion
        };
        this.utils.sleep(1500);
        console.log(dtoEnvio);
        this.router.navigateByUrl('captura-documento');
    }
    leerDatos() {
        if (this.utils.imgBack !== '') {
            this.ejecutarOCR(this.utils.imgFront, 1);
            this.ejecutarOCR(this.utils.imgBack, 2);
        }
    }
    cargarPage(page) {
        const options = {
            zoom: 'no',
            location: 'yes',
            hardwareback: 'yes',
            toolbar: 'no',
            toolbarposition: 'top',
            hideurlbar: 'yes',
            closebuttoncaption: 'Volver',
            fullscreen: 'yes',
            hidenavigationbuttons: 'yes',
            toolbarcolor: '#e46f21',
            toolbartranslucent: 'no',
            spinner: 'yes'
        };
        this.reiniciarForm();
        const browser = this.iab.create(page, '_blank', options);
    }
    guardarDatos(dto) {
        this.general.postMethod('tableta/datos/', dto, true)
            .subscribe(resp => {
            if (!resp.hasErrors) {
                this.utils.idescanner = resp.DatosResponse.idescanner;
                this.urlGo = resp.DatosResponse.url;
                this.enviarFotos(this.urlGo);
            }
            else {
                alert(resp.error);
            }
        });
    }
    enviarFotos(url) {
        // console.log(this.utils.idescanner);
        if (this.utils.idescanner !== '') {
            const obj = {
                idescanner: this.utils.idescanner,
                cara1: this.imgFront,
                cara2: this.imgBack,
                cara3: this.imgDocumento
            };
            console.log(obj);
            this.general.postMethod('tableta/upload/', obj, true)
                .subscribe(resp => {
                console.log(resp);
                this.reiniciarForm();
            });
            this.cargarPage(this.urlGo);
        }
        this.reiniciarForm();
    }
    ejecutarOCR(img, cara) {
        const imgOCR = img.split('base64,')[1];
        console.log('Cara de la imagen: ' + cara);
        this.ocrImagen(imgOCR, cara);
    }
    /**
     * ocrImagen
     * Metodo para leer los datos de una imagen
     ** @param {string} img
     ** @param {*} cara
     ** @memberof MenuPage
     */
    ocrImagen(img, cara) {
        console.log(cara);
        this.ocr.recText(4, img)
            .then((res) => {
            console.log(res);
            const vLectura = {
                lectura: JSON.stringify(res.words.wordtext).toUpperCase()
            };
            this.general.postMethod('tableta/lectura/', vLectura, true)
                .subscribe(resp => {
                if (!resp.hasErrors) {
                    console.log(resp);
                }
                else {
                    alert(resp.error);
                }
            });
            const dtos = [];
            if (cara === 1) {
                const esNumero = /^[0-9]+$/;
                console.log(esNumero.test(this.replaceAll(res.words.wordtext[8], '.', '')));
                if (esNumero.test(this.replaceAll(res.words.wordtext[8], '.', ''))) {
                    this.scanData.numeroCedula = this.replaceAll(res.words.wordtext[8], '.', '');
                    console.log('NUmero de cedula LN_307: ' + this.scanData.numeroCedula);
                    if (res.words.wordtext[9].toUpperCase() !== 'NUMERO' ||
                        res.words.wordtext[10].toUpperCase() !== 'NUMER0') {
                        this.scanData.primerApellido = res.words.wordtext[10].toUpperCase();
                        this.scanData.segundoApellido = res.words.wordtext[11].toUpperCase();
                        this.scanData.primerNombre = res.words.wordtext[13].toUpperCase();
                        this.scanData.segundoNombre = res.words.wordtext[14].toUpperCase();
                    }
                    else if (res.words.wordtext[10].toUpperCase() !== 'NUMERO' ||
                        res.words.wordtext[10].toUpperCase() !== 'NUMER0') {
                        this.scanData.primerApellido = res.words.wordtext[11].toUpperCase();
                        this.scanData.segundoApellido = res.words.wordtext[12].toUpperCase();
                        this.scanData.primerNombre = res.words.wordtext[14].toUpperCase();
                        this.scanData.segundoNombre = res.words.wordtext[15].toUpperCase();
                    }
                    else {
                        this.scanData.primerApellido = res.words.wordtext[9].toUpperCase();
                        this.scanData.segundoApellido = res.words.wordtext[10].toUpperCase();
                        this.scanData.primerNombre = res.words.wordtext[12].toUpperCase();
                        this.scanData.segundoNombre = res.words.wordtext[13].toUpperCase();
                    }
                }
                console.log(esNumero.test(this.replaceAll(res.words.wordtext[9], '.', '')));
                if (esNumero.test(this.replaceAll(res.words.wordtext[9], '.', ''))) {
                    this.scanData.numeroCedula = this.replaceAll(res.words.wordtext[9], '.', '');
                    this.scanData.primerApellido = res.words.wordtext[10].toUpperCase();
                    this.scanData.segundoApellido = res.words.wordtext[11].toUpperCase();
                    if (res.words.wordtext[12].length < 3 || res.words.wordtext[12].toUpperCase() === 'APELLIDOS' ||
                        res.words.wordtext[12].toUpperCase() === 'APELLIDOSS') {
                        this.scanData.primerNombre = res.words.wordtext[13].toUpperCase();
                        if (res.words.wordtext[14].toUpperCase() !== 'NOMBRES' || res.words.wordtext[14].toUpperCase() !== 'NOMBRESS') {
                            this.scanData.segundoNombre = res.words.wordtext[14].toUpperCase();
                        }
                        else {
                            this.scanData.segundoNombre = '';
                        }
                    }
                    else if (res.words.wordtext[13].length < 3 || res.words.wordtext[13].toUpperCase() === 'APELLIDOS' ||
                        res.words.wordtext[13].toUpperCase() === 'APELLIDOSS') {
                        this.scanData.primerNombre = res.words.wordtext[14];
                        if (res.words.wordtext[15].toUpperCase() !== 'NOMBRES' || res.words.wordtext[15].toUpperCase() !== 'NOMBRESS') {
                            this.scanData.segundoNombre = res.words.wordtext[15].toUpperCase();
                        }
                        else {
                            this.scanData.segundoNombre = '';
                        }
                    }
                    else if (res.words.wordtext[10].length < 3 || res.words.wordtext[10].toUpperCase() === 'APELLIDOS' ||
                        res.words.wordtext[10].toUpperCase() === 'APELLIDOSS' || res.words.wordtext[10].toUpperCase() === 'APELLIDOSS' ||
                        res.words.wordtext[10].toUpperCase() === 'APELLIDOS' || res.words.wordtext[10].toUpperCase() === 'APELLID0SS' ||
                        res.words.wordtext[10].toUpperCase() === 'APELLID0S' || res.words.wordtext[10].toUpperCase() === 'NOMBRES' ||
                        res.words.wordtext[10].toUpperCase() === 'N0MBRES' || res.words.wordtext[10].toUpperCase() === 'NOMBRESS' ||
                        res.words.wordtext[10].toUpperCase() === 'N0MBRESS') {
                        if (res.words.wordtext[11].length < 3 || res.words.wordtext[11].toUpperCase() === 'APELLIDOS' ||
                            res.words.wordtext[11].toUpperCase() === 'APELLIDOSS' || res.words.wordtext[11].toUpperCase() === 'APELLIDOSS' ||
                            res.words.wordtext[11].toUpperCase() === 'APELLIDOS' || res.words.wordtext[11].toUpperCase() === 'APELLID0SS' ||
                            res.words.wordtext[11].toUpperCase() === 'APELLID0S' || res.words.wordtext[11].toUpperCase() === 'NOMBRES' ||
                            res.words.wordtext[11].toUpperCase() === 'N0MBRES' || res.words.wordtext[11].toUpperCase() === 'NOMBRESS' ||
                            res.words.wordtext[11].toUpperCase() === 'N0MBRESS') {
                            this.scanData.primerNombre = res.words.wordtext[12];
                            this.scanData.segundoNombre = '';
                        }
                        else {
                            this.scanData.primerNombre = res.words.wordtext[11];
                        }
                    }
                    else if (res.words.wordtext[11].length < 3 || res.words.wordtext[11].toUpperCase() === 'APELLIDOS' ||
                        res.words.wordtext[11].toUpperCase() === 'APELLIDOSS' || res.words.wordtext[11].toUpperCase() === 'APELLIDOSS' ||
                        res.words.wordtext[11].toUpperCase() === 'APELLIDOS' || res.words.wordtext[11].toUpperCase() === 'APELLID0SS' ||
                        res.words.wordtext[11].toUpperCase() === 'APELLID0S' || res.words.wordtext[11].toUpperCase() === 'NOMBRES' ||
                        res.words.wordtext[11].toUpperCase() === 'N0MBRES' || res.words.wordtext[11].toUpperCase() === 'NOMBRESS' ||
                        res.words.wordtext[11].toUpperCase() === 'N0MBRESS') {
                        if (res.words.wordtext[12].length < 3 || res.words.wordtext[12].toUpperCase() === 'APELLIDOS' ||
                            res.words.wordtext[12].toUpperCase() === 'APELLIDOSS' || res.words.wordtext[12].toUpperCase() === 'APELLIDOSS' ||
                            res.words.wordtext[12].toUpperCase() === 'APELLIDOS' || res.words.wordtext[12].toUpperCase() === 'APELLID0SS' ||
                            res.words.wordtext[12].toUpperCase() === 'APELLID0S' || res.words.wordtext[12].toUpperCase() === 'NOMBRES' ||
                            res.words.wordtext[12].toUpperCase() === 'N0MBRES' || res.words.wordtext[12].toUpperCase() === 'NOMBRESS' ||
                            res.words.wordtext[12].toUpperCase() === 'N0MBRESS') {
                            this.scanData.primerNombre = res.words.wordtext[13];
                            this.scanData.segundoNombre = '';
                        }
                        else {
                            this.scanData.primerNombre = res.words.wordtext[11];
                        }
                    }
                    else {
                        this.scanData.primerNombre = res.words.wordtext[13].toUpperCase();
                        if (res.words.wordtext[14].toUpperCase() !== 'NOMBRES' || res.words.wordtext[14].toUpperCase() !== 'NOMBRESS') {
                            this.scanData.segundoNombre = res.words.wordtext[14].toUpperCase();
                        }
                        else {
                            this.scanData.segundoNombre = '';
                        }
                    }
                }
                if (esNumero.test(this.replaceAll(res.words.wordtext[10], '.', ''))) {
                    this.scanData.numeroCedula = this.replaceAll(res.words.wordtext[10].toUpperCase(), '.', '');
                    this.scanData.primerApellido = res.words.wordtext[11].toUpperCase();
                    this.scanData.segundoApellido = res.words.wordtext[12].toUpperCase();
                    if (res.words.wordtext[13].length < 3 || res.words.wordtext[13].toUpperCase() === 'APELLIDOS' ||
                        res.words.wordtext[13].toUpperCase() === 'APELLIDOSS') {
                        this.scanData.primerNombre = res.words.wordtext[14].toUpperCase();
                        if (res.words.wordtext[15].toUpperCase() !== 'NOMBRES' || res.words.wordtext[15].toUpperCase() !== 'NOMBRESS') {
                            this.scanData.segundoNombre = res.words.wordtext[15].toUpperCase();
                        }
                        else {
                            this.scanData.segundoNombre = '';
                        }
                    }
                    else if (res.words.wordtext[14].length < 3 || res.words.wordtext[14].toUpperCase() === 'APELLIDOS' ||
                        res.words.wordtext[14].toUpperCase() === 'APELLIDOSS') {
                        this.scanData.primerNombre = res.words.wordtext[15].toUpperCase();
                        if (res.words.wordtext[16].toUpperCase() !== 'NOMBRES') {
                            this.scanData.segundoNombre = res.words.wordtext[16].toUpperCase();
                        }
                        else {
                            this.scanData.segundoNombre = '';
                        }
                    }
                    else if (res.words.wordtext[11].length < 3 || res.words.wordtext[11].toUpperCase() === 'APELLIDOS' ||
                        res.words.wordtext[11].toUpperCase() === 'APELLIDOSS' || res.words.wordtext[11].toUpperCase() === 'APELLIDOSS' ||
                        res.words.wordtext[11].toUpperCase() === 'APELLIDOS' || res.words.wordtext[11].toUpperCase() === 'APELLID0SS' ||
                        res.words.wordtext[11].toUpperCase() === 'APELLID0S' || res.words.wordtext[11].toUpperCase() === 'NOMBRES' ||
                        res.words.wordtext[11].toUpperCase() === 'N0MBRES' || res.words.wordtext[11].toUpperCase() === 'NOMBRESS' ||
                        res.words.wordtext[11].toUpperCase() === 'N0MBRESS') {
                        this.scanData.primerNombre = res.words.wordtext[12];
                    }
                    else {
                        this.scanData.primerNombre = res.words.wordtext[14].toUpperCase();
                        if (res.words.wordtext[15].toUpperCase() !== 'NOMBRES' || res.words.wordtext[15].toUpperCase() !== 'NOMBRESS') {
                            this.scanData.segundoNombre = res.words.wordtext[15].toUpperCase();
                        }
                        else {
                            this.scanData.segundoNombre = '';
                        }
                    }
                }
                if (esNumero.test(this.replaceAll(res.words.wordtext[11], '.', ''))) {
                    this.scanData.numeroCedula = this.replaceAll(res.words.wordtext[11], '.', '');
                    this.scanData.primerApellido = res.words.wordtext[12].toUpperCase();
                    this.scanData.segundoApellido = res.words.wordtext[13].toUpperCase();
                    if (res.words.wordtext[14].length < 3 || res.words.wordtext[14].toUpperCase() === 'APELLIDOS' ||
                        res.words.wordtext[14].toUpperCase() === 'APELLIDOSS') {
                        this.scanData.primerNombre = res.words.wordtext[15].toUpperCase();
                        if (res.words.wordtext[16].toUpperCase() !== 'NOMBRES' || res.words.wordtext[16].toUpperCase() !== 'NOMBRESS') {
                            this.scanData.segundoNombre = res.words.wordtext[16].toUpperCase();
                        }
                        else {
                            this.scanData.segundoNombre = '';
                        }
                    }
                    else if (res.words.wordtext[15].length < 3 || res.words.wordtext[15].toUpperCase() === 'APELLIDOS' ||
                        res.words.wordtext[15].toUpperCase() === 'APELLIDOSS') {
                        this.scanData.primerNombre = res.words.wordtext[16].toUpperCase();
                        if (res.words.wordtext[17].toUpperCase() !== 'NOMBRES' || res.words.wordtext[17].toUpperCase() !== 'NOMBRESS') {
                            this.scanData.segundoNombre = res.words.wordtext[17].toUpperCase();
                        }
                        else {
                            this.scanData.segundoNombre = '';
                        }
                    }
                    else {
                        this.scanData.primerNombre = res.words.wordtext[15].toUpperCase();
                        if (res.words.wordtext[16] !== 'NOMBRES' || res.words.wordtext[16] !== 'NOMBRES') {
                            this.scanData.segundoNombre = res.words.wordtext[16].toUpperCase();
                        }
                        else {
                            this.scanData.segundoNombre = '';
                        }
                    }
                }
                if (this.scanData.segundoNombre === 'NOMBRES' || this.scanData.segundoNombre === 'N0MBRES' ||
                    this.scanData.segundoNombre === 'NOMBRESS' || this.scanData.segundoNombre === 'N0MBRESS' ||
                    this.scanData.segundoNombre === 'APELLIDOSS' || this.scanData.segundoNombre === 'APELLIDOS' ||
                    this.scanData.segundoNombre === 'APELLID0SS' || this.scanData.segundoNombre === 'APELLID0S' ||
                    this.scanData.segundoNombre === 'NUMERO' || this.scanData.segundoNombre === 'NUMEROS' ||
                    this.scanData.segundoNombre === 'NUMER0' || this.scanData.segundoNombre === 'NUMER0S' ||
                    this.scanData.segundoNombre === 'NUMEROSS' || this.scanData.segundoNombre === 'NUMER0SS') {
                    this.scanData.segundoNombre = '';
                }
                if (this.scanData.segundoApellido === 'NOMBRES' || this.scanData.segundoApellido === 'N0MBRES' ||
                    this.scanData.segundoApellido === 'NOMBRESS' || this.scanData.segundoApellido === 'N0MBRESS' ||
                    this.scanData.segundoApellido === 'APELLIDOSS' || this.scanData.segundoApellido === 'APELLIDOS' ||
                    this.scanData.segundoApellido === 'APELLID0SS' || this.scanData.segundoApellido === 'APELLID0S' ||
                    this.scanData.segundoApellido === 'NUMERO' || this.scanData.segundoApellido === 'NUMEROS' ||
                    this.scanData.segundoApellido === 'NUMER0' || this.scanData.segundoApellido === 'NUMER0S' ||
                    this.scanData.segundoApellido === 'NUMEROSS' || this.scanData.segundoApellido === 'NUMER0SS') {
                    this.scanData.segundoApellido = '';
                }
                // console.log(esNumero.test(this.replaceAll(res.words.wordtext[10],'.', '')));
                // if(esNumero.test(this.replaceAll(res.words.wordtext[10],'.', ''))) {
                //   this.scanData.numeroCedula = this.replaceAll(res.words.wordtext[10],'.', '');
                //   this.scanData.primerApellido = res.words.wordtext[11];
                //   this.scanData.segundoApellido = res.words.wordtext[12];
                //   this.scanData.primerNombre = res.words.wordtext[13];
                //   this.scanData.segundoNombre = res.words.wordtext[14];
                // }
            }
            if (cara === 2) {
                if (res.words.wordtext[10] === 'F' || res.words.wordtext[10] === 'M') {
                    this.scanData.sexo = res.words.wordtext[10];
                }
                if (res.words.wordtext[11] === 'F' || res.words.wordtext[11] === 'M') {
                    this.scanData.sexo = res.words.wordtext[11];
                }
                if (res.words.wordtext[12] === 'F' || res.words.wordtext[12] === 'M') {
                    this.scanData.sexo = res.words.wordtext[12];
                }
                if (res.words.wordtext[13] === 'F' || res.words.wordtext[13] === 'M') {
                    this.scanData.sexo = res.words.wordtext[13];
                }
                if (res.words.wordtext[14] === 'F' || res.words.wordtext[14] === 'M') {
                    this.scanData.sexo = res.words.wordtext[14];
                }
                if (res.words.wordtext[10] === 'O+' || res.words.wordtext[10] === 'O-'
                    || res.words.wordtext[10] === 'A+' || res.words.wordtext[10] === 'A-'
                    || res.words.wordtext[10] === 'B+' || res.words.wordtext[10] === 'B-'
                    || res.words.wordtext[10] === 'AB+' || res.words.wordtext[10] === 'AB-') {
                    this.scanData.rh = res.words.wordtext[10];
                }
                if (res.words.wordtext[11] === 'O+' || res.words.wordtext[11] === 'O-'
                    || res.words.wordtext[11] === 'A+' || res.words.wordtext[11] === 'A-'
                    || res.words.wordtext[11] === 'B+' || res.words.wordtext[11] === 'B-'
                    || res.words.wordtext[11] === 'AB+' || res.words.wordtext[11] === 'AB-') {
                    this.scanData.rh = res.words.wordtext[11];
                }
                if (res.words.wordtext[12] === 'O+' || res.words.wordtext[12] === 'O-'
                    || res.words.wordtext[12] === 'A+' || res.words.wordtext[12] === 'A-'
                    || res.words.wordtext[12] === 'B+' || res.words.wordtext[12] === 'B-'
                    || res.words.wordtext[12] === 'AB+' || res.words.wordtext[12] === 'AB-') {
                    this.scanData.rh = res.words.wordtext[12];
                }
                if (res.words.wordtext[13] === 'O+' || res.words.wordtext[13] === 'O-'
                    || res.words.wordtext[13] === 'A+' || res.words.wordtext[13] === 'A-'
                    || res.words.wordtext[13] === 'B+' || res.words.wordtext[13] === 'B-'
                    || res.words.wordtext[13] === 'AB+' || res.words.wordtext[13] === 'AB-') {
                    this.scanData.rh = res.words.wordtext[12];
                }
                if (res.words.wordtext[14] === 'O+' || res.words.wordtext[14] === 'O-'
                    || res.words.wordtext[14] === 'A+' || res.words.wordtext[14] === 'A-'
                    || res.words.wordtext[14] === 'B+' || res.words.wordtext[14] === 'B-'
                    || res.words.wordtext[14] === 'AB+' || res.words.wordtext[14] === 'AB-') {
                    this.scanData.rh = res.words.wordtext[12];
                }
                console.log('RH: ' + this.scanData.rh);
                if (res.words.wordtext[0] === 'FECHA') {
                    this.scanData.fechaNacimiento = res.words.wordtext[3];
                }
                else {
                    this.scanData.fechaNacimiento = res.words.wordtext[0];
                }
                this.utils.ciudadnac = res.words.wordtext[4] + ' ' + res.words.wordtext[5];
                this.scanData.ciudadnac = res.words.wordtext[4] + ' ' + res.words.wordtext[5];
                if (this.scanData.ciudadnac === '80GOTA D.C') {
                    this.scanData.ciudadnac = 'BOGOTA D.C';
                    this.scanData.ciudadnac = 'BOGOTA D.C';
                }
                const vregexNaix = /\b\d\d?-\w\w\w-\d\d\d\d\b/;
                if (res.words.wordtext[18] === 'FECHA') {
                    this.scanData.fechaexp = res.words.wordtext[15];
                    console.log(vregexNaix.test(res.words.wordtext[15]));
                    this.scanData.ciudadexp = res.words.wordtext[16] + ' ' + res.words.wordtext[17];
                }
                else if (res.words.wordtext[19] === 'FECHA') {
                    this.scanData.fechaexp = res.words.wordtext[16];
                    console.log(vregexNaix.test(res.words.wordtext[16]));
                    this.scanData.ciudadexp = res.words.wordtext[17] + ' ' + res.words.wordtext[18];
                }
                else if (res.words.wordtext[20] === 'FECHA') {
                    this.scanData.fechaexp = res.words.wordtext[17];
                    console.log(vregexNaix.test(res.words.wordtext[17]));
                    this.scanData.ciudadexp = res.words.wordtext[18] + ' ' + res.words.wordtext[19];
                }
                else if (res.words.wordtext[21] === 'FECHA') {
                    this.scanData.fechaexp = res.words.wordtext[18];
                    console.log(vregexNaix.test(res.words.wordtext[18]));
                    this.scanData.ciudadexp = res.words.wordtext[19] + ' ' + res.words.wordtext[20];
                }
                else {
                    this.scanData.fechaexp = 'No se pudo Leer';
                    this.scanData.ciudadexp = 'No se pudo Leer';
                }
                if (this.scanData.ciudadexp === '80GOTA D.C') {
                    this.scanData.ciudadexp = 'BOGOTA D.C';
                    this.scanData.ciudadexp = 'BOGOTA D.C';
                }
                let str = res.words.wordtext[6];
                if (res.words.wordtext[6] === 'LUGAR') {
                    str = res.words.wordtext[5];
                }
                this.utils.depatamentonac = str;
                this.scanData.depatamentonac = str;
            }
        })
            .catch((error) => {
            console.error(error);
        });
        this.utils.sleep(1500);
        if (this.utils.ciudadexp) {
            console.log(this.scanData);
        }
    }
    /**
     * logOut()
     * Funcion para cerrar la sesión de la aplicación
     */
    logOut() {
        if (this.utils.sessionid !== '') {
            console.log('Entro al logout');
            const url = 'tableta/logout/' + this.utils.sessionid;
            this.general.getMethod(url)
                .subscribe(resp => {
                console.log(resp);
                this.router.navigate(['login']);
            });
            this.guard.authState.next(false);
            this.reiniciarForm();
            this.utils.tokenID = '';
            this.utils.punto = '';
            this.utils.usuario = '';
            this.utils.sessionid = '';
            this.router.navigate(['login']);
        }
    }
    replaceAll(str, find, replace) {
        const escapedFind = find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
        return str.replace(new RegExp(escapedFind, 'g'), replace);
    }
    quitarPalabrasFijas(obj) {
        console.log(obj);
        const nuevoObjeto = [];
        obj.forEach(item => {
            if ((item !== 'REPUBLICA') && (item !== 'COLOMBIA') && (item !== 'NLMERO') &&
                (item !== 'COLOMEA:IA') && (item !== 'RERUECEDULA') && (item !== 'rere)-') &&
                (item !== 'atICA') && (item !== 'ovehSelenen') && (item !== 'MBIA') &&
                (item !== 'ca') && (item !== 'ciudadnac: COLOMEA:IA IDENTIFICACION') &&
                (item !== 'depatamentonac: PERSONAL') && (item !== 'fechaexpDANIEL') &&
                (item !== 'ciudadexp: FERNANDO atICA') && (item !== 'G.S.') &&
                (item !== 'RH') && (item !== 'Shto') && (item !== 'turllon') &&
                (item !== 'REGISTRADOR') && (item !== 'NACIONAL') && (item !== 'EXPEDICIONtn') &&
                (item !== 'Aud') && (item !== 'Jana') && (item !== 'ABIAA') && (item !== 'obehe') &&
                (item !== 'ciudadnac: COLOMEA:1A IDENTIFICACION') && (item !== 'COLOMETA') &&
                (item !== 'DE COLOMBIA') && (item !== 'IDENTIFICACION') && (item !== 'CEDULA') &&
                (item !== 'CIUDADANIA') && (item !== 'DE CIUDADANIA') && (item !== 'NUMERO') &&
                (item !== 'PERSONAL') && (item !== 'bONn214enan') && (item !== 'cOLOMBIA1A') &&
                (item !== 'REPUEBEOULA') && (item !== 'APELLIDOSs') && (item !== 'APELLIDOS') &&
                (item !== 'ee)') && (item !== 'NMUMERO') && (item !== 'UMERO') && (item !== 'ERLECEDULA') &&
                (item !== 'COLOMEA:1A') && (item !== 'ERUEEDULA') && (item !== 'NOMBRES') && (item !== 'NOMBRESs') &&
                (item !== 'VIBIA') && (item !== 'FIRMA') &&
                (item !== 'INDICE') && (item !== 'Sto') && (item !== 'Aunl') && (item !== 'Jan') && (item !== 'DERECHO') &&
                (item !== 'INDICE DERECHO') && (item !== 'FECHA') && (item !== 'DE NACIMIENTO') && (item !== 'NACIMIENTO') && (item !== 'LUGAR') &&
                (item !== 'DE NACIMIENTO') && (item !== 'NACIMIENTO') && (item !== 'ESTATURA') && (item !== 'FECHA') && (item !== 'y LUGAR') &&
                (item !== 'LUGAR') && (item !== 'Y') && (item !== 'DE EXPEDICION') && (item !== 'EXPEDICION') && (item !== 'SEXO') &&
                (item !== 'ICA') && (item !== 'UE') && (item !== 'MBA') && (item !== 'APELLIDos') && (item !== 'COLOMRIA') &&
                (item !== 'RRLIECEDULA') && (item !== 'COLOMAg') && (item !== 'COLOMRIA') && (item !== 'Daiesele') &&
                (item !== 'EXPEDICIONtodurl') && (item !== 'Noueers') && (item !== 'OLO') && (item !== 'EpLBLICA') &&
                (item !== 'OBONEIA') && (item !== 'COLOM3E') && (item !== 'REPUEOEOULADE') && (item !== 'COLOMBIAA') &&
                (item !== 'REPUBLIOCA') && (item !== 'DE') && (item !== 'EpLBLICA') && (item !== 'EXPEDICIONnto') &&
                (item !== 'urd') && (item !== 'pani') && (item !== 'NGMBRES') && (item !== 'gLBLICA') && (item !== 'ONnETA') &&
                (item !== 'dn') && (item !== '-REPUEOEOULADE') && (item !== 'ee)LOM') && (item !== 'uMERO') &&
                (item !== 'EXPEDICIONutodur') && (item !== 'pan') && (item !== 'OMBIA') && (item !== 'Qnieh') &&
                (item !== 'CEDULADE') && (item !== 'COLOMEA') && (item !== 'e)a') && (item !== 'Daveh') && (item !== 'Salanen') &&
                (item !== 'sutapusd') && (item !== 'plaa') && (item !== 'COLOMEAE') && (item !== 'ERUFOEDULA') && (item !== 'neSeleas') &&
                (item !== 'Rar') && (item !== 'UBLICA') && (item !== 'CLOMRIA') && (item !== 'EXPEDICIONte') && (item !== 'COLOMEA3A') &&
                (item !== '3') && (item !== 'B') && (item !== 'Doehseleadn') && (item !== 'dunl') && (item !== 'dauinl') &&
                (item !== 'RPUEOEOULA') && (item !== 'CIUDADANI1A') && (item !== 'rers)') &&
                (item !== 'ADE') && (item !== 'todunl') && (item !== 'cOLOMBIA') && (item !== 'TA') && (item !== 'PERSONALL') &&
                (item !== 'EPUEOEOULADE') && (item !== 'ere)') && (item !== 'TCA') && (item !== 'RMRLA') && (item !== 'ioDeht') &&
                (item !== 'utodurd') && (item !== 'Janao') && (item !== 'tOEDULA') && (item !== 'CoLOMBIA') &&
                (item !== 'a') && (item !== 'BPLBLIC') && (item !== 'COBONEIA') && (item !== 'CaranCa') && (item !== 'EXPEDICIONutr') &&
                (item !== 'durl') && (item !== 'lant7') && (item !== '(eeLoMIRE') && (item !== 'REPUBLICADE') && (item !== 'eeLoMIRE') &&
                (item !== 'OB') && (item !== 'as') && (item !== 'MEI') && (item !== 'lcnGn') &&
                (item !== 'EXPEDICIONato') && (item !== 'tud') && (item !== 'Jano') && (item !== 'REPLIRCEDULA') && (item !== 'cO') &&
                (item !== 'REPLRBLICA') && (item !== 'lenan') && (item !== 'COBOMELA') && (item !== 'toAund') && (item !== 'lani') &&
                (item !== 'eREPIFEDULADE') && (item !== 'ef9)BOM') && (item !== 'NGMBRESs') && (item !== 'EPLIBLICA') && (item !== 'D') &&
                (item !== 'bOE4enan') &&
                (item !== 'EXPEDICIONtoAurd') &&
                (item !== 'REGISTAADOR') &&
                (item !== 'COLOMEMEIA') && (item !== 'U') && (item !== 'CA') && (item !== 'dn') && (item !== 'NERO')) {
                console.log(item);
                nuevoObjeto.push(item);
            }
        });
        return nuevoObjeto;
    }
};
MenuPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner },
    { type: _servicios_utilitarios_service__WEBPACK_IMPORTED_MODULE_8__.UtilitariosService },
    { type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__.ScreenOrientation },
    { type: _servicios_general_service__WEBPACK_IMPORTED_MODULE_5__.GeneralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser },
    { type: _servicios_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuardService },
    { type: _awesome_cordova_plugins_ocr_ngx__WEBPACK_IMPORTED_MODULE_9__.OCR }
];
MenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-menu',
        template: _menu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_menu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuPage);



/***/ }),

/***/ 140:
/*!************************************************!*\
  !*** ./src/app/menu/menu.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "@media screen and (min-width: 768px) {\n  .title {\n    font-size: 1.6em;\n  }\n\n  .textos {\n    font-size: 1.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUU7SUFDRSxnQkFBQTtFQUFGOztFQUdBO0lBQ0UsZ0JBQUE7RUFBRjtBQUNGIiwiZmlsZSI6Im1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgfVxyXG5cclxuICAudGV4dG9zIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19 */";

/***/ }),

/***/ 1757:
/*!************************************************!*\
  !*** ./src/app/menu/menu.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"codensa\">\r\n    <ion-title class=\"title\">Crédito Fácil CODENSA</ion-title>\r\n    <ion-button id=\"nested-button\" slot=\"end\" fill=\"clear\">\r\n      <ion-icon slot=\"start\" name=\"menu\" color=\"light\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <br>\r\n  <ion-button (click)=\"paso1TomarFoto()\" expand=\"block\" class=\"textos\">\r\n    <ion-icon  slot=\"start\" name=\"next\"></ion-icon>\r\n    Paso 1: Toma foto cara (1) del documento\r\n  </ion-button>\r\n  <br>\r\n\r\n  <ion-button (click)=\"paso2TomarFoto()\" expand=\"block\" disabled={{paso2}} class=\"textos\">\r\n    <ion-icon  slot=\"start\" name=\"next\"></ion-icon>\r\n    Paso 2: Toma foto cara (2) del documento\r\n  </ion-button>\r\n  <br>\r\n\r\n  <ion-button (click)=\"paso3TomarFoto()\" expand=\"block\" disabled={{paso3}} class=\"textos\">\r\n    <ion-icon  slot=\"start\" name=\"next\"></ion-icon>\r\n    Paso 3: Toma foto documento autorización\r\n  </ion-button>\r\n\r\n  <!--<br>\r\n   <ion-button (click)=\"scanearDocumento()\" expand=\"block\" disabled={{paso4}} class=\"textos\">\r\n    <ion-icon  slot=\"start\" name=\"next\"></ion-icon>\r\n    Paso 4: Escanear código de barras\r\n  </ion-button> -->\r\n\r\n  <div *ngIf=\"scanData.numeroCedula === '' && !paso5\">\r\n    <br>\r\n    <ion-button  (click)=\"leerDatos()\" expand=\"block\" class=\"textos\">\r\n      <ion-icon  slot=\"start\" name=\"read\"></ion-icon>\r\n      Leer los datos del documento nuevamente\r\n    </ion-button>\r\n  </div>\r\n\r\n\r\n  <br>\r\n  <ion-button (click)=\"enviarDatos()\" expand=\"block\" disabled={{paso5}} class=\"textos\">\r\n    <ion-icon  slot=\"start\" name=\"next\"></ion-icon>\r\n    Paso 4: Guardar información\r\n  </ion-button>\r\n\r\n  <ion-card>\r\n    <ion-card-content *ngIf=\"scanData.numeroCedula !== ''\">\r\n      <p>Numero Documento: {{ scanData.numeroCedula }}</p>\r\n      <p>Apellidos: {{ scanData.primerApellido + ' ' + scanData.segundoApellido}}</p>\r\n      <p>Nombres: {{ scanData.primerNombre + ' ' + scanData.segundoNombre }}</p>\r\n      <!--\r\n      <p>Numero Documento: {{ scanData.numeroCedula }}</p>\r\n      <p>Primer Apellido: {{ scanData.primerApellido }}</p>\r\n      <p>Segundo Apellido: {{ scanData.segundoApellido }}</p>\r\n      <p>Primer Nombre: {{ scanData.primerNombre }}</p>\r\n      <p>Segundo Nombre: {{ scanData.segundoNombre }}</p>\r\n      <p>sexo: {{ scanData.sexo }}</p>\r\n      <p>G.S RH: {{ scanData.rh }}</p>\r\n      <p>Fecha Nacimiento: {{ scanData.fechaNacimiento }}</p>\r\n      <p>Ciudad Nacimiento: {{ scanData.ciudadnac }}</p>\r\n      <p>Departamento: {{ scanData.depatamentonac }}</p>\r\n      <p>Fecha de expedición: {{ scanData.fechaexp }}</p>\r\n      <p>Ciudad: {{ scanData.ciudadexp }}</p>\r\n    -->\r\n    </ion-card-content>\r\n\r\n    <ion-card-header>\r\n      <img *ngIf=\"imgFront\"     [src]=\"imgFront\" width=\"350\" height=\"200\">\r\n      <img *ngIf=\"imgBack\"      [src]=\"imgBack\" width=\"350\" height=\"200\">\r\n      <img *ngIf=\"imgDocumento\" [src]=\"imgDocumento\" width=\"250\" height=\"350\" >\r\n    </ion-card-header>\r\n\r\n  </ion-card>\r\n\r\n\r\n\r\n  <ion-popover trigger=\"nested-button\" [dismissOnSelect]=\"true\">\r\n    <ng-template>\r\n      <ion-content>\r\n        <ion-list>\r\n          <ion-item [button]=\"true\" [detail]=\"false\" (click)=\"reiniciarForm()\">\r\n            <ion-icon name=\"trash\" color=\"codensa\" slot=\"end\"></ion-icon>\r\n            <ion-label>Limpiar</ion-label>\r\n          </ion-item>\r\n          <ion-item [button]=\"true\" [detail]=\"false\" (click)=\"logOut()\">\r\n            <ion-icon name=\"log-out\" color=\"codensa\" slot=\"end\"></ion-icon>\r\n            <ion-label>Cerrar Sesión</ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ng-template>\r\n  </ion-popover>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title style=\"font-size: 12px;\">CRC OUTSOURCING © 2022 All rights reserved</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_menu_menu_module_ts.js.map