import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private _snackbar: MatSnackBar) {}

  // use for open a custom snackbar
  openSnackbar(message: string, action: string) {
    this._snackbar.open(message, action, {
      duration: 2000,
    });
  }

  //set an object data to localStorage
  setLocalStorageObject(key: string, obj: any): void {
    const data = JSON.stringify(obj);
    localStorage.setItem(key, data);
  }

  // get an object from the localStorage
  getLocalStorageObject(key: string): string {
    const data: any = localStorage.getItem(key);
    return JSON.parse(data);
  }

  // check if any data exist in localStorage of provided key
  checkLocalStorageKey(key: string): boolean {
    const data = localStorage.getItem(key);
    return data !== null ? true : false;
  }
}
