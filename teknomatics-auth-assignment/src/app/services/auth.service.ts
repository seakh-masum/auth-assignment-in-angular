import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _globalService: GlobalService, private _router: Router) {}

  // check user matches the proper data
  checkUser(data: User): boolean {
    if (data.email == 'admin@test.com' && data.password == 'Admin123!') {
      this._globalService.openSnackbar(
        'You have successfully logged in!',
        'Ok'
      );
      return true;
    } else if (data.email == 'admin@test.com' && data.password != 'Admin123!') {
      this._globalService.openSnackbar('You have entered wrong password', 'Ok');
      return false;
    } else {
      this._globalService.openSnackbar(
        'You have entered incorrect email & password',
        'Retry'
      );
      return false;
    }
  }

  // clear user data from localStorage and navigate to LoginPage
  userLogout() {
    localStorage.removeItem('user');
    this._router.navigate(['login']);
  }

  // get the user email
  get userEmail(): string {
    if (this._globalService.checkLocalStorageKey('user')) {
      const user: any = this._globalService.getLocalStorageObject('user');
      return user.email;
    } else {
      return '';
    }
  }

  //check the user logged in status
  get isLoggedIn(): boolean {
    const check = this._globalService.checkLocalStorageKey('user');
    return check;
  }
}
