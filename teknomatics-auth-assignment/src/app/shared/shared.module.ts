import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { componentsArray } from '../components';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [
  FlexLayoutModule,
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatTableModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [componentsArray],
  imports: [CommonModule, ...modules],
  exports: [componentsArray, ...modules],
})
export class SharedModule {}
