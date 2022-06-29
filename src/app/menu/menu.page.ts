import { environment } from './../../environments/environment';
import { AuthGuardService } from './../servicios/auth-guard.service';
import { CameraPreview } from '@awesome-cordova-plugins/camera-preview/ngx';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Component, OnInit } from '@angular/core';
import { DatosEscaner } from './../interfaces/datos-escaner';
import { GeneralService } from './../servicios/general.service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { UtilitariosService } from './../servicios/utilitarios.service';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { OCR, OCRSourceType } from '@awesome-cordova-plugins/ocr/ngx';
import { OCRResult } from '@awesome-cordova-plugins/ocr';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  imgFront: any = '';
  imgBack: any = '';
  imgDocumento: any = '';
  paso2 = true;
  paso3 = true;
  paso4 = true;
  paso5 = true;
  urlGo = '';

  options: BarcodeScannerOptions;
  personalData: DatosEscaner;

  scanData: DatosEscaner = {
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

  constructor(
    private barcodeScanner: BarcodeScanner,
    private utils: UtilitariosService,
    private screenOrientation: ScreenOrientation,
    private general: GeneralService,
    private router: Router,
    private iab: InAppBrowser,
    private guard: AuthGuardService,
    private ocr: OCR
  ) {
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
      preferFrontCamera: false, // iOS and Android
      showFlipCameraButton: false, // iOS and Android
      showTorchButton: true, // iOS and Android
      torchOn: true, // Android, inicie con la linterna encendida (si está disponible)
      saveHistory: true, // Android, guarda el historial de escaneo (falso por defecto)
      resultDisplayDuration: 500, // Android, muestra el texto escaneado para X ms. 0 lo suprime por completo, por defecto 1500
      formats: 'QR_CODE, PDF_417', // Por defecto: todas menos PDF_417 y RSS_EXPANDED
      orientation: 'landscape', // Solo Android (portrait|landscape),
      // deshabilitado de forma predeterminada para que gire con el dispositivo
      disableAnimations: false, // iOS
      disableSuccessBeep: false // iOS and Android
    };
    this.barcodeScanner.scan(this.options)
      .then(async (barcodeData) => {
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
      }, (err) => {
        console.log('Error occured : ' + err);
      });
  }

  async enviarDatos() {
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
      appversion: environment.appversion
    };



    this.guardarDatos(dtoEnvio);
    // this.reiniciarForm();
  }

  public reiniciarForm() {
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
      appversion: environment.appversion
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

  cargarPage(page: string) {
    const options: InAppBrowserOptions = {
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

  guardarDatos(dto: any) {
    this.general.postMethod('tableta/datos/', dto, true)
      .subscribe(resp => {
        if (!resp.hasErrors) {
          this.utils.idescanner = resp.DatosResponse.idescanner;
          this.urlGo = resp.DatosResponse.url;
          this.enviarFotos(this.urlGo);
        } else {
          alert(resp.error);
        }
      });
  }

  enviarFotos(url: any) {
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
  ocrImagen(img: string, cara: any) {
    console.log(cara);
    this.ocr.recText(4, img)
      .then((res: OCRResult) => {
        console.log(res);
        const vLectura = {
          lectura: JSON.stringify(res.words.wordtext).toUpperCase()
        };
        this.general.postMethod('tableta/lectura/', vLectura, true)
          .subscribe(resp => {
            if (!resp.hasErrors) {
              console.log(resp);
            } else {
              alert(resp.error);
            }
          });
        const dtos: string[] = [];
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

            } else if (res.words.wordtext[10].toUpperCase() !== 'NUMERO' ||
              res.words.wordtext[10].toUpperCase() !== 'NUMER0') {
              this.scanData.primerApellido = res.words.wordtext[11].toUpperCase();
              this.scanData.segundoApellido = res.words.wordtext[12].toUpperCase();
              this.scanData.primerNombre = res.words.wordtext[14].toUpperCase();
              this.scanData.segundoNombre = res.words.wordtext[15].toUpperCase();

            } else {
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
              } else {
                this.scanData.segundoNombre = '';
              }
            } else if (res.words.wordtext[13].length < 3 || res.words.wordtext[13].toUpperCase() === 'APELLIDOS' ||
              res.words.wordtext[13].toUpperCase() === 'APELLIDOSS') {
              this.scanData.primerNombre = res.words.wordtext[14];
              if (res.words.wordtext[15].toUpperCase() !== 'NOMBRES' || res.words.wordtext[15].toUpperCase() !== 'NOMBRESS') {
                this.scanData.segundoNombre = res.words.wordtext[15].toUpperCase();
              } else {
                this.scanData.segundoNombre = '';
              }
            } else if (res.words.wordtext[10].length < 3 || res.words.wordtext[10].toUpperCase() === 'APELLIDOS' ||
              res.words.wordtext[10].toUpperCase() === 'APELLIDOSS' || res.words.wordtext[10].toUpperCase() === 'APELLIDOSS' ||
              res.words.wordtext[10].toUpperCase() === 'APELLIDOS' || res.words.wordtext[10].toUpperCase() === 'APELLID0SS' ||
              res.words.wordtext[10].toUpperCase() === 'APELLID0S' || res.words.wordtext[10].toUpperCase()=== 'NOMBRES' ||
              res.words.wordtext[10].toUpperCase() === 'N0MBRES' || res.words.wordtext[10].toUpperCase() === 'NOMBRESS' ||
              res.words.wordtext[10].toUpperCase() === 'N0MBRESS') {
              if (res.words.wordtext[11].length < 3 || res.words.wordtext[11].toUpperCase() === 'APELLIDOS' ||
                res.words.wordtext[11].toUpperCase() === 'APELLIDOSS' || res.words.wordtext[11].toUpperCase() === 'APELLIDOSS' ||
                res.words.wordtext[11].toUpperCase() === 'APELLIDOS' || res.words.wordtext[11].toUpperCase() === 'APELLID0SS' ||
                res.words.wordtext[11].toUpperCase() === 'APELLID0S' || res.words.wordtext[11].toUpperCase()=== 'NOMBRES' ||
                res.words.wordtext[11].toUpperCase() === 'N0MBRES' || res.words.wordtext[11].toUpperCase() === 'NOMBRESS' ||
                res.words.wordtext[11].toUpperCase() === 'N0MBRESS') {
                this.scanData.primerNombre = res.words.wordtext[12];
                this.scanData.segundoNombre = '';
              } else {
                this.scanData.primerNombre = res.words.wordtext[11];
              }
            } else if (res.words.wordtext[11].length < 3 || res.words.wordtext[11].toUpperCase() === 'APELLIDOS' ||
              res.words.wordtext[11].toUpperCase() === 'APELLIDOSS' || res.words.wordtext[11].toUpperCase() === 'APELLIDOSS' ||
              res.words.wordtext[11].toUpperCase() === 'APELLIDOS' || res.words.wordtext[11].toUpperCase() === 'APELLID0SS' ||
              res.words.wordtext[11].toUpperCase() === 'APELLID0S' || res.words.wordtext[11].toUpperCase()=== 'NOMBRES' ||
              res.words.wordtext[11].toUpperCase() === 'N0MBRES' || res.words.wordtext[11].toUpperCase() === 'NOMBRESS' ||
              res.words.wordtext[11].toUpperCase() === 'N0MBRESS') {
              if (res.words.wordtext[12].length < 3 || res.words.wordtext[12].toUpperCase() === 'APELLIDOS' ||
                res.words.wordtext[12].toUpperCase() === 'APELLIDOSS' || res.words.wordtext[12].toUpperCase() === 'APELLIDOSS' ||
                res.words.wordtext[12].toUpperCase() === 'APELLIDOS' || res.words.wordtext[12].toUpperCase() === 'APELLID0SS' ||
                res.words.wordtext[12].toUpperCase() === 'APELLID0S' || res.words.wordtext[12].toUpperCase()=== 'NOMBRES' ||
                res.words.wordtext[12].toUpperCase() === 'N0MBRES' || res.words.wordtext[12].toUpperCase() === 'NOMBRESS' ||
                res.words.wordtext[12].toUpperCase() === 'N0MBRESS') {
                this.scanData.primerNombre = res.words.wordtext[13];
                this.scanData.segundoNombre = '';
              } else {
                this.scanData.primerNombre = res.words.wordtext[11];
              }
            } else {
              this.scanData.primerNombre = res.words.wordtext[13].toUpperCase();
              if (res.words.wordtext[14].toUpperCase() !== 'NOMBRES' || res.words.wordtext[14].toUpperCase() !== 'NOMBRESS') {
                this.scanData.segundoNombre = res.words.wordtext[14].toUpperCase();
              } else {
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
              } else {
                this.scanData.segundoNombre = '';
              }
            } else if (res.words.wordtext[14].length < 3 || res.words.wordtext[14].toUpperCase() === 'APELLIDOS' ||
              res.words.wordtext[14].toUpperCase() === 'APELLIDOSS') {
              this.scanData.primerNombre = res.words.wordtext[15].toUpperCase();
              if (res.words.wordtext[16].toUpperCase() !== 'NOMBRES') {
                this.scanData.segundoNombre = res.words.wordtext[16].toUpperCase();
              } else {
                this.scanData.segundoNombre = '';
              }
            } else if (res.words.wordtext[11].length < 3 || res.words.wordtext[11].toUpperCase() === 'APELLIDOS' ||
              res.words.wordtext[11].toUpperCase() === 'APELLIDOSS' || res.words.wordtext[11].toUpperCase() === 'APELLIDOSS' ||
              res.words.wordtext[11].toUpperCase() === 'APELLIDOS' || res.words.wordtext[11].toUpperCase() === 'APELLID0SS' ||
              res.words.wordtext[11].toUpperCase() === 'APELLID0S'|| res.words.wordtext[11].toUpperCase()=== 'NOMBRES' ||
              res.words.wordtext[11].toUpperCase() === 'N0MBRES' || res.words.wordtext[11].toUpperCase() === 'NOMBRESS' ||
              res.words.wordtext[11].toUpperCase() === 'N0MBRESS') {
              this.scanData.primerNombre = res.words.wordtext[12];
            } else {
              this.scanData.primerNombre = res.words.wordtext[14].toUpperCase();
              if (res.words.wordtext[15].toUpperCase() !== 'NOMBRES' || res.words.wordtext[15].toUpperCase() !== 'NOMBRESS') {
                this.scanData.segundoNombre = res.words.wordtext[15].toUpperCase();
              } else {
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
              } else {
                this.scanData.segundoNombre = '';
              }
            } else if (res.words.wordtext[15].length < 3 || res.words.wordtext[15].toUpperCase() === 'APELLIDOS' ||
              res.words.wordtext[15].toUpperCase() === 'APELLIDOSS') {
              this.scanData.primerNombre = res.words.wordtext[16].toUpperCase();
              if (res.words.wordtext[17].toUpperCase() !== 'NOMBRES' || res.words.wordtext[17].toUpperCase() !== 'NOMBRESS') {
                this.scanData.segundoNombre = res.words.wordtext[17].toUpperCase();
              } else {
                this.scanData.segundoNombre = '';
              }
            } else {
              this.scanData.primerNombre = res.words.wordtext[15].toUpperCase();
              if (res.words.wordtext[16] !== 'NOMBRES' || res.words.wordtext[16] !== 'NOMBRES') {
                this.scanData.segundoNombre = res.words.wordtext[16].toUpperCase();
              } else {
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
            this.scanData.segundoNombre === 'NUMEROSS' || this.scanData.segundoNombre === 'NUMER0SS'
          ) {
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
            || res.words.wordtext[10] === 'AB+' || res.words.wordtext[10] === 'AB-'
          ) {
            this.scanData.rh = res.words.wordtext[10];
          }

          if (res.words.wordtext[11] === 'O+' || res.words.wordtext[11] === 'O-'
            || res.words.wordtext[11] === 'A+' || res.words.wordtext[11] === 'A-'
            || res.words.wordtext[11] === 'B+' || res.words.wordtext[11] === 'B-'
            || res.words.wordtext[11] === 'AB+' || res.words.wordtext[11] === 'AB-'
          ) {
            this.scanData.rh = res.words.wordtext[11];
          }

          if (res.words.wordtext[12] === 'O+' || res.words.wordtext[12] === 'O-'
            || res.words.wordtext[12] === 'A+' || res.words.wordtext[12] === 'A-'
            || res.words.wordtext[12] === 'B+' || res.words.wordtext[12] === 'B-'
            || res.words.wordtext[12] === 'AB+' || res.words.wordtext[12] === 'AB-'
          ) {
            this.scanData.rh = res.words.wordtext[12];
          }

          if (res.words.wordtext[13] === 'O+' || res.words.wordtext[13] === 'O-'
            || res.words.wordtext[13] === 'A+' || res.words.wordtext[13] === 'A-'
            || res.words.wordtext[13] === 'B+' || res.words.wordtext[13] === 'B-'
            || res.words.wordtext[13] === 'AB+' || res.words.wordtext[13] === 'AB-'
          ) {
            this.scanData.rh = res.words.wordtext[12];
          }

          if (res.words.wordtext[14] === 'O+' || res.words.wordtext[14] === 'O-'
            || res.words.wordtext[14] === 'A+' || res.words.wordtext[14] === 'A-'
            || res.words.wordtext[14] === 'B+' || res.words.wordtext[14] === 'B-'
            || res.words.wordtext[14] === 'AB+' || res.words.wordtext[14] === 'AB-'
          ) {
            this.scanData.rh = res.words.wordtext[12];
          }
          console.log('RH: ' + this.scanData.rh);

          if (res.words.wordtext[0] === 'FECHA') {
            this.scanData.fechaNacimiento = res.words.wordtext[3];
          } else {
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
      .catch((error: any) => {
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

  quitarPalabrasFijas(obj: string[]): string[] {

    console.log(obj);

    const nuevoObjeto: string[] = [];
    obj.forEach(item => {
      if (
        (item !== 'REPUBLICA') && (item !== 'COLOMBIA') && (item !== 'NLMERO') &&
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
        (item !== 'COLOMEMEIA') && (item !== 'U') && (item !== 'CA') && (item !== 'dn') && (item !== 'NERO')
      ) {
        console.log(item);
        nuevoObjeto.push(item);
      }
    });

    return nuevoObjeto;
  }
}

