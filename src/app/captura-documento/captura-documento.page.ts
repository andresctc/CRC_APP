import { Router } from '@angular/router';
import { UtilitariosService } from './../servicios/utilitarios.service';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import {
  CameraPreview,
  CameraPreviewPictureOptions,
  CameraPreviewOptions,
  CameraPreviewDimensions
} from '@awesome-cordova-plugins/camera-preview/ngx';

import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';


@Component({
  selector: 'app-captura-documento',
  templateUrl: './captura-documento.page.html',
  styleUrls: ['./captura-documento.page.scss'],
})
export class CapturaDocumentoPage implements OnInit, OnDestroy {

  smallPreview: boolean;
  colorEffect = 'none';
  setZoom = 1;
  flashMode = 'off';
  isToBack = false;
  cara: any;


  opcCamara: CameraPreviewOptions = {
    x: (window.screen.width/6) + 50,
    y: (window.screen.height/6),
    width: window.screen.width - (window.screen.width/2),
    height: window.screen.width - (window.screen.width/8),
    toBack: false,
    previewDrag: false,
    tapPhoto: false,
    tapFocus: true,
    storeToFile: false,
    camera: 'rear',
    disableExifHeaderStripping: false,
    alpha: 1
  };

  constructor(
    private cameraPreview: CameraPreview,
    private screenOrientation: ScreenOrientation,
    private utils: UtilitariosService,
    private router: Router
  ) {   }


  ngOnInit() {

  }

  ionViewWillEnter() {
    if(this.utils.pasofoto === '1') {
      this.cara = 'Cara 1';
    }

    if(this.utils.pasofoto === '2') {
      this.cara = 'Cara 2';
    }

    if(this.utils.pasofoto === '3') {
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

  iniciarcamara(){
    this.cameraPreview.startCamera(this.opcCamara);
  }

  stopCamera() {
    this.cameraPreview.stopCamera();
  }

  async tomarFoto() {
    // this.cameraPreview.takePicture({
    this.cameraPreview.takeSnapshot({
      width: 640,
      height: 480,
      quality: 85
    }).then(async (imageData) => {
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
    }, (err) => {
      console.log(err);
      // this.utils.imgFront = 'assets/img/test.jpg';
    });
    this.hide();

    await this.utils.sleep(1500);

    if(this.utils.imgFront !== '')
    {
      // console.log(this.utils.imgFront);
      this.utils.paso2 = false;
    }

    if(this.utils.imgBack !== '')
    {
      // console.log(this.utils.imgBack);
      this.utils.paso3 = false;
    }

    if(this.utils.imgDocumento !== '')
    {
      // console.log(this.utils.imgBack);
      this.utils.paso4 = false;
    }
    // console.log(this.utils.paso2);

    this.hide();
    this.router.navigateByUrl('menu');
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
    if(this.flashMode === 'off') {
      this.flashMode = 'torch';
    } else {
      this.flashMode = 'off';
    }
    // console.log(this.flashMode);
    this.changeFlashMode();
  }

}
