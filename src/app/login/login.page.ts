import { MenuPage } from './../menu/menu.page';
import { environment } from './../../environments/environment';
import { CameraPreview } from '@awesome-cordova-plugins/camera-preview/ngx';
import { AuthGuardService } from './../servicios/auth-guard.service';
/* eslint-disable prefer-const */
import { Login } from './../interfaces/login-response';
import { UtilitariosService } from './../servicios/utilitarios.service';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Router } from '@angular/router';
import { GeneralService } from './../servicios/general.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  objLogin = {
    usuario: '',
    clave: ''
  };
  appVersion = environment.appversion;
  passwordType = 'password';
  passwordShown =  false;


  constructor(
    private general: GeneralService,
    private utils: UtilitariosService,
    private router: Router,
    private screenOrientation: ScreenOrientation,
    private guard: AuthGuardService,
    private cameraPreview: CameraPreview,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
    // console;
  }

  verPassword() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
    } else {
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
      let lgin: Login;
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
      } else {
        alert(lgin.errorMessage);
        this.guard.authState.next(false);
      }
    });
    // console.log(this.guard.authState);
  }

}
