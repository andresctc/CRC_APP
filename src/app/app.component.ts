import { Router } from '@angular/router';
import { AuthGuardService } from './servicios/auth-guard.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private guard: AuthGuardService,
    private router: Router,
    ) {
    this.initializeApp();
  }

  initializeApp() {
    this.guard.authState.subscribe(state => {
      // console.log(state);
      if (state) {
        this.router.navigate(['menu']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }
}
