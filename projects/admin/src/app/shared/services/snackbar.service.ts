import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  defaultConfig: MatSnackBarConfig = {
    horizontalPosition: 'right',
    verticalPosition: 'bottom',
  };
  private currentSnackbar: MatSnackBarRef<any> | null = null;

  constructor(private snackBar: MatSnackBar) {
  }

  showError(message: string, action?: string, config?: MatSnackBarConfig): MatSnackBarRef<SimpleSnackBar> {
    this.currentSnackbar = this.snackBar.open(message, action, {
      ...this.defaultConfig,
      duration: 5000,
      panelClass: [ 'mat-snackbar-error' ],
      ...config,
    });
    return this.currentSnackbar;
  }

  showMessage(message: string, action?: string, config?: MatSnackBarConfig): MatSnackBarRef<SimpleSnackBar> {
    this.currentSnackbar = this.snackBar.open(message, action, {
      ...this.defaultConfig,
      duration: 5000,
      ...config,
    });
    return this.currentSnackbar;
  }

  closeCurrentSnackbar() {
    if (this.currentSnackbar) {
      this.currentSnackbar.dismiss();
    }
  }
}
