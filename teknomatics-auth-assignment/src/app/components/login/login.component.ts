import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, GlobalService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  hide = true;

  constructor(
    private _fb: FormBuilder,
    private _globalService: GlobalService,
    private _auth: AuthService,
    private _router: Router
  ) {
    //intialize the form group
    this.loginForm = _fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$'
          ),
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  // Email control & its validation
  get emailControl() {
    return this.loginForm.get('email') as FormControl;
  }

  get emailControlRequired() {
    return this.emailControl.hasError('required') && this.emailControl.touched;
  }

  get emailControlInvalid() {
    return this.emailControl.hasError('email') && this.emailControl.touched;
  }

  // Password controls & its validation
  get passwordControl() {
    return this.loginForm.get('password') as FormControl;
  }

  get passwordControlRequired() {
    return (
      this.passwordControl.hasError('required') && this.passwordControl.touched
    );
  }

  get passwordControlInvalid() {
    return (
      this.passwordControl.hasError('pattern') &&
      !this.passwordControlMaxLength &&
      !this.passwordControlMinLength
    );
  }

  get passwordControlMinLength() {
    return (
      this.passwordControl.hasError('minlength') && this.passwordControl.touched
    );
  }

  get passwordControlMaxLength() {
    return (
      this.passwordControl.hasError('maxlength') && this.passwordControl.touched
    );
  }

  //call on submit the form data
  onSubmit() {
    const { value, valid } = this.loginForm;
    let isUserExist = false;
    if (valid) {
      isUserExist = this._auth.checkUser(value);
      if (isUserExist) {
        this._globalService.setLocalStorageObject('user', value);
        this._router.navigate(['']);
      }
    }
  }
}
