import { Injectable } from '@angular/core';
import { DatosEscaner } from './../interfaces/datos-escaner';

@Injectable({
  providedIn: 'root'
})
export class UtilitariosService {

  public imgFront: any = '';
  public imgBack: any = '';
  public imgDocumento: any = '';
  public pasofoto = '';
  public paso2 = true;
  public paso3 = true;
  public paso4 = true;
  public paso5 = true;
  public tokenID = '';
  public punto = '';
  public usuario = '';
  public sessionid = '';
  public idescanner = '';
  public ciudadnac = '';
  public depatamentonac = '';
  public fechaexp = '';
  public ciudadexp = '';


  public personalData: DatosEscaner = {
    numeroCedula: '',
    primerApellido: '',
    segundoApellido: '',
    primerNombre: '',
    segundoNombre: '',
    sexo: '',
    fechaNacimiento: '',
    rh: '',
    nombreCompleto: ''
  };

  constructor() { }

  // Metodo para extrar los datos del documento escaneado
  extraerDatosDocumentos(data): DatosEscaner  {
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

    console.log(numeroCedula);
    const segundoApellido = dataArray[5 + indexMod].replace(/\W/g, '');
    const primerNombre = dataArray[6 + indexMod].replace(/\W/g, '');
    let segundoNombre;

    if (!(/[0-9]/g.test(dataArray[7 + indexMod]))) {
      segundoNombre = dataArray[7 + indexMod];
    }

    const extraData = dataArray[segundoNombre ? 8 + indexMod : 7 + indexMod];
    let sexo = '';
    if (extraData.includes('M')) {
      //sexo = 'Masculino';
      sexo = 'M';
    } else {
      sexo = 'F';
      //sexo = 'Femenino';
    }

    const dia = extraData.substr(8, 2);
    const mes = extraData.substr(6, 2);
    const anio = extraData.substr(2, 4);
    // const fechaNacimiento = anio + '-' + mes + '-' + dia;
    const fechaNacimiento = anio + mes + dia;
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

    console.log(this.personalData);

    return this.personalData;
  }

  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  limpiarFormulario() {
    this.paso2 = true;
    this.paso3 = true;
    this.paso4 = true;
    this.paso5 = true;
    this.imgFront = '';
    this.imgBack = '';
    this.imgDocumento = '';
    this.personalData.numeroCedula = '';
    this.personalData.primerApellido = '';
    this.personalData.segundoApellido = '';
    this.personalData.primerNombre = '';
    this.personalData.segundoNombre = '';
    this.personalData.sexo = '';
    this.personalData.fechaNacimiento = '';
    this.personalData.rh = '';
    this.personalData.nombreCompleto = '';
    this.idescanner = '';
    this.ciudadnac = '';
    this.depatamentonac = '';
    this.fechaexp = '';
    this.ciudadexp = '';
    this.pasofoto = '';
  }


  // eslint-disable-next-line @typescript-eslint/ban-types
  rotateBase64Img(src, edg, img) {
    // console.log(edg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let imgW;// Ancho de imagen
    let imgH;// Altura de la imagen
    let size;// El tamaño inicial del lienzo
    if (edg % 90 !== 0) {
        console.error('¡El ángulo de rotación debe ser un múltiplo de 90!');
        // eslint-disable-next-line no-throw-literal
        throw '¡El ángulo de rotación debe ser un múltiplo de 90!';
    }

    const quadrant = (edg / 90) % 4; // cuadrante de rotación
    const cutCoor = {sx: 0, sy: 0, ex: 0, ey: 0}; // coordenadas de recorte
    // eslint-disable-next-line prefer-const
    let image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = src;
    image.onload = () => {
        imgW = image.width;
        imgH = image.height;
        size = imgW > imgH ? imgW : imgH;
        canvas.width = size * 2;
        canvas.height = size * 2;
        switch (quadrant) {
            case 0:
                cutCoor.sx = size;
                cutCoor.sy = size;
                cutCoor.ex = size + imgW;
                cutCoor.ey = size + imgH;
                break;
            case 1:
                cutCoor.sx = size - imgH;
                cutCoor.sy = size;
                cutCoor.ex = size;
                cutCoor.ey = size + imgW;
                break;
            case 2:
                cutCoor.sx = size - imgW;
                cutCoor.sy = size - imgH;
                cutCoor.ex = size;
                cutCoor.ey = size;
                break;
            case 3:
                cutCoor.sx = size;
                cutCoor.sy = size - imgW;
                cutCoor.ex = size + imgH;
                cutCoor.ey = size + imgW;
                break;
        }
        ctx.translate(size, size);
        ctx.rotate(edg * Math.PI / 180);
        ctx.drawImage(image, 0, 0);
        const imgData = ctx.getImageData(cutCoor.sx, cutCoor.sy, cutCoor.ex, cutCoor.ey);
        if (quadrant % 2 === 0) {
            canvas.width = imgW;
            canvas.height = imgH;
        } else {
            canvas.width = imgH;
            canvas.height = imgW;
        }
        ctx.putImageData(imgData, 0, 0);
        this.sleep(1500);
        // return console.log(canvas.toDataURL());
        if(img === 1) {
          this.imgFront = canvas.toDataURL();
          // console.log(this.imgFront);
        }

        if(img === 2) {
          this.imgBack = canvas.toDataURL();
          // console.log(this.imgBack);
        }
    };
  }

}
