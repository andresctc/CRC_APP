import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  scanData = {};;
  options: BarcodeScannerOptions;
  encodeData: string ;
  encodedData = {}; ;
  personalData = {
    numeroCedula: '',
    primerApellido: '',
    segundoApellido: '',
    primerNombre: '',
    segundoNombre: '',
    sexo: '',
    fechaNacimiento: '',
    rh: '',
    nombreCompleto: '',
  };

  picture: any;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private screenOrientation: ScreenOrientation
    ) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  scan() {
      this.options = {
          prompt : 'Leer Cedúla',
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : false, // iOS and Android
          showTorchButton : false, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : 'QR_CODE,PDF_417', // default: all but PDF_417 and RSS_EXPANDED
          orientation : 'landscape', // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      };
      this.barcodeScanner.scan(this.options).then((barcodeData) => {

          console.log(barcodeData);
          this.scanData = barcodeData;
          console.log(this.extraerDatosDocumentos(barcodeData.text));
          console.log(this.personalData);
      }, (err) => {
          console.log('Error occured : ' + err);
      });
  }


  // Metodo para extrar los datos del documento escaneado
  // Expresión regular
  extraerDatosDocumentos(data) {
    const dataArray = data.replace(/[^A-Za-z0-9+]+/g, ' ').split(' ');
    let indexMod = 0;
    let numeroCedula;
    let primerApellido;

    // Is old document
    if (/[A-Z]/g.test(dataArray[3])) {
      indexMod = - 1;

      const idString = dataArray[3].replace(/[A-Z]/g, '');
      numeroCedula = idString.substring(8, idString.length);
      primerApellido = dataArray[3].replace(/[0-9]/g, '');
    } else {
      numeroCedula = dataArray[4].replace(/[A-Z]/g, '');
      primerApellido = dataArray[4].replace(/[0-9]/g, '');
    }

    const segundoApellido = dataArray[5 + indexMod].replace(/\W/g, '');
    const primerNombre = dataArray[6 + indexMod].replace(/\W/g, '');
    let segundoNombre;

    if (!(/[0-9]/g.test(dataArray[7 + indexMod]))) {
      segundoNombre = dataArray[7 + indexMod];
    }

    const extraData = dataArray[segundoNombre ? 8 + indexMod : 7 + indexMod];
    let sexo = '';
    if (extraData.includes('M')) {
      sexo = 'Masculino';
    } else {
      sexo = 'Femenino';
    }

    const dia = extraData.substr(8, 2);
    const mes = extraData.substr(6, 2);
    const anio = extraData.substr(2, 4);
    const fechaNacimiento = anio + '-' + mes + '-' + dia;
    // extraData.substr(2, 8);
    const rh = extraData.substr(-2);
    const nombreCompleto = `${primerNombre} ${segundoNombre || ''} ${primerApellido} ${segundoApellido || ''}`;

    this.personalData.numeroCedula = numeroCedula;
    this.personalData.primerApellido = primerApellido;
    this.personalData.segundoApellido = segundoApellido;
    this.personalData.primerNombre = primerNombre;
    this.personalData.segundoNombre = segundoNombre;
    this.personalData.sexo = sexo;
    this.personalData.fechaNacimiento = fechaNacimiento;
    this.personalData.rh = rh;
    this.personalData.nombreCompleto = nombreCompleto;

    return {
      numeroCedula,
      primerApellido,
      segundoApellido,
      primerNombre,
      segundoNombre,
      sexo,
      fechaNacimiento,
      rh,
      nombreCompleto,
    };
  }


}
