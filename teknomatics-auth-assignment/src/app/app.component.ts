import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'teknomatics-auth-assignment';
  constructor(public _auth: AuthService) {
    // this.userEmail = this._auth.getUserEmail();
  }
  // click on logout
  onLogout() {
    this._auth.userLogout();
  }
}
