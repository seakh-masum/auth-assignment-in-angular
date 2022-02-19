import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: LoginPageComponent }];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class LoginPageModule {}
