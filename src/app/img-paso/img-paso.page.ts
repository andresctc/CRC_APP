import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { UtilitariosService } from './../servicios/utilitarios.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-paso',
  templateUrl: './img-paso.page.html',
  styleUrls: ['./img-paso.page.scss'],
})
export class ImgPasoPage implements OnInit {

  width = window.screen.width - (window.screen.width/2) + 100;
  height =  window.screen.width - (window.screen.width/8) + 200;
  imagen = './assets/img/cara1.jpeg';



  constructor(
    private router: Router,
    private utils: UtilitariosService,
    private screenOrientation: ScreenOrientation,
  ) { }

  ngOnInit() {
    // TODO document why this method 'ngOnInit' is empty
  }

  ionViewWillEnter() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    if(this.utils.pasofoto === '1') {
      this.imagen = './assets/img/cara1.jpeg';
    }
    if(this.utils.pasofoto === '2') {
      this.imagen = './assets/img/cara2.jpeg';
    }
  }


  irTomarFoto() {
    this.router.navigateByUrl('captura-documento');
  }

}
