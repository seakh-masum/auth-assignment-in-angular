import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListingPageComponent } from './user-listing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [{ path: '', component: UserListingPageComponent }];

@NgModule({
  declarations: [UserListingPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatSelectModule,
  ],
})
export class UserListingPageModule {}
