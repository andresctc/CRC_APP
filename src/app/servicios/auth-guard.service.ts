import { UtilitariosService } from './utilitarios.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {


  public authState = new BehaviorSubject(false);

  constructor(private utils: UtilitariosService) {   }

  canActivate(): boolean {
    return this.isAuthenticated();;
  }

  isAuthenticated() {
    if (this.utils.tokenID === '') {
      this.authState.next(true);
    } else {
      this.authState.next(false);
    }
    return this.authState.value;
  }
}
